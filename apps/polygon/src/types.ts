declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/benzinga/v1/analyst-insights': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                firm?: string | undefined
                'firm.any_of'?: string | undefined
                'firm.gt'?: string | undefined
                'firm.gte'?: string | undefined
                'firm.lt'?: string | undefined
                'firm.lte'?: string | undefined
                rating_action?: string | undefined
                'rating_action.any_of'?: string | undefined
                'rating_action.gt'?: string | undefined
                'rating_action.gte'?: string | undefined
                'rating_action.lt'?: string | undefined
                'rating_action.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                benzinga_rating_id?: string | undefined
                'benzinga_rating_id.any_of'?: string | undefined
                'benzinga_rating_id.gt'?: string | undefined
                'benzinga_rating_id.gte'?: string | undefined
                'benzinga_rating_id.lt'?: string | undefined
                'benzinga_rating_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                benzinga_firm_id?: string | undefined
                benzinga_id?: string | undefined
                benzinga_rating_id?: string | undefined
                company_name?: string | undefined
                date?: string | undefined
                firm?: string | undefined
                insight?: string | undefined
                last_updated?: string | undefined
                price_target?: number | undefined
                rating?: string | undefined
                rating_action?: string | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                firm?: string | undefined
                'firm.any_of'?: string | undefined
                'firm.gt'?: string | undefined
                'firm.gte'?: string | undefined
                'firm.lt'?: string | undefined
                'firm.lte'?: string | undefined
                rating_action?: string | undefined
                'rating_action.any_of'?: string | undefined
                'rating_action.gt'?: string | undefined
                'rating_action.gte'?: string | undefined
                'rating_action.lt'?: string | undefined
                'rating_action.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                benzinga_rating_id?: string | undefined
                'benzinga_rating_id.any_of'?: string | undefined
                'benzinga_rating_id.gt'?: string | undefined
                'benzinga_rating_id.gte'?: string | undefined
                'benzinga_rating_id.lt'?: string | undefined
                'benzinga_rating_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                firm?: string | undefined
                'firm.any_of'?: string | undefined
                'firm.gt'?: string | undefined
                'firm.gte'?: string | undefined
                'firm.lt'?: string | undefined
                'firm.lte'?: string | undefined
                rating_action?: string | undefined
                'rating_action.any_of'?: string | undefined
                'rating_action.gt'?: string | undefined
                'rating_action.gte'?: string | undefined
                'rating_action.lt'?: string | undefined
                'rating_action.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                benzinga_rating_id?: string | undefined
                'benzinga_rating_id.any_of'?: string | undefined
                'benzinga_rating_id.gt'?: string | undefined
                'benzinga_rating_id.gte'?: string | undefined
                'benzinga_rating_id.lt'?: string | undefined
                'benzinga_rating_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/benzinga/v1/analysts': {
      $get:
        | {
            input: {
              query: {
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                firm_name?: string | undefined
                'firm_name.any_of'?: string | undefined
                'firm_name.gt'?: string | undefined
                'firm_name.gte'?: string | undefined
                'firm_name.lt'?: string | undefined
                'firm_name.lte'?: string | undefined
                full_name?: string | undefined
                'full_name.any_of'?: string | undefined
                'full_name.gt'?: string | undefined
                'full_name.gte'?: string | undefined
                'full_name.lt'?: string | undefined
                'full_name.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                benzinga_firm_id?: string | undefined
                benzinga_id?: string | undefined
                firm_name?: string | undefined
                full_name?: string | undefined
                last_updated?: string | undefined
                overall_avg_return?: number | undefined
                overall_avg_return_percentile?: number | undefined
                overall_success_rate?: number | undefined
                smart_score?: number | undefined
                total_ratings?: number | undefined
                total_ratings_percentile?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                firm_name?: string | undefined
                'firm_name.any_of'?: string | undefined
                'firm_name.gt'?: string | undefined
                'firm_name.gte'?: string | undefined
                'firm_name.lt'?: string | undefined
                'firm_name.lte'?: string | undefined
                full_name?: string | undefined
                'full_name.any_of'?: string | undefined
                'full_name.gt'?: string | undefined
                'full_name.gte'?: string | undefined
                'full_name.lt'?: string | undefined
                'full_name.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                firm_name?: string | undefined
                'firm_name.any_of'?: string | undefined
                'firm_name.gt'?: string | undefined
                'firm_name.gte'?: string | undefined
                'firm_name.lt'?: string | undefined
                'firm_name.lte'?: string | undefined
                full_name?: string | undefined
                'full_name.any_of'?: string | undefined
                'full_name.gt'?: string | undefined
                'full_name.gte'?: string | undefined
                'full_name.lt'?: string | undefined
                'full_name.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/benzinga/v1/bulls-bears-say': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                bear_case?: string | undefined
                benzinga_id?: string | undefined
                bull_case?: string | undefined
                last_updated?: string | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/benzinga/v1/consensus-ratings/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } } & {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                buy_ratings: bigint
                consensus_price_target?: number | undefined
                consensus_rating?: string | undefined
                consensus_rating_value?: number | undefined
                high_price_target?: number | undefined
                hold_ratings: bigint
                low_price_target?: number | undefined
                price_target_contributors: bigint
                ratings_contributors: bigint
                sell_ratings: bigint
                strong_buy_ratings: bigint
                strong_sell_ratings: bigint
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/benzinga/v1/earnings': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.any_of'?: string | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.any_of'?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                date_status?: string | undefined
                'date_status.any_of'?: string | undefined
                'date_status.gt'?: string | undefined
                'date_status.gte'?: string | undefined
                'date_status.lt'?: string | undefined
                'date_status.lte'?: string | undefined
                eps_surprise_percent?: number | undefined
                'eps_surprise_percent.any_of'?: string | undefined
                'eps_surprise_percent.gt'?: number | undefined
                'eps_surprise_percent.gte'?: number | undefined
                'eps_surprise_percent.lt'?: number | undefined
                'eps_surprise_percent.lte'?: number | undefined
                revenue_surprise_percent?: number | undefined
                'revenue_surprise_percent.any_of'?: string | undefined
                'revenue_surprise_percent.gt'?: number | undefined
                'revenue_surprise_percent.gte'?: number | undefined
                'revenue_surprise_percent.lt'?: number | undefined
                'revenue_surprise_percent.lte'?: number | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.any_of'?: string | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_period?: string | undefined
                'fiscal_period.any_of'?: string | undefined
                'fiscal_period.gt'?: string | undefined
                'fiscal_period.gte'?: string | undefined
                'fiscal_period.lt'?: string | undefined
                'fiscal_period.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                actual_eps?: number | undefined
                actual_revenue?: number | undefined
                benzinga_id?: string | undefined
                company_name?: string | undefined
                currency?: string | undefined
                date?: string | undefined
                date_status?: string | undefined
                eps_method?: string | undefined
                eps_surprise?: number | undefined
                eps_surprise_percent?: number | undefined
                estimated_eps?: number | undefined
                estimated_revenue?: number | undefined
                fiscal_period?: string | undefined
                fiscal_year?: bigint | undefined
                importance?: bigint | undefined
                last_updated?: string | undefined
                notes?: string | undefined
                previous_eps?: number | undefined
                previous_revenue?: number | undefined
                revenue_method?: string | undefined
                revenue_surprise?: number | undefined
                revenue_surprise_percent?: number | undefined
                ticker?: string | undefined
                time?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.any_of'?: string | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.any_of'?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                date_status?: string | undefined
                'date_status.any_of'?: string | undefined
                'date_status.gt'?: string | undefined
                'date_status.gte'?: string | undefined
                'date_status.lt'?: string | undefined
                'date_status.lte'?: string | undefined
                eps_surprise_percent?: number | undefined
                'eps_surprise_percent.any_of'?: string | undefined
                'eps_surprise_percent.gt'?: number | undefined
                'eps_surprise_percent.gte'?: number | undefined
                'eps_surprise_percent.lt'?: number | undefined
                'eps_surprise_percent.lte'?: number | undefined
                revenue_surprise_percent?: number | undefined
                'revenue_surprise_percent.any_of'?: string | undefined
                'revenue_surprise_percent.gt'?: number | undefined
                'revenue_surprise_percent.gte'?: number | undefined
                'revenue_surprise_percent.lt'?: number | undefined
                'revenue_surprise_percent.lte'?: number | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.any_of'?: string | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_period?: string | undefined
                'fiscal_period.any_of'?: string | undefined
                'fiscal_period.gt'?: string | undefined
                'fiscal_period.gte'?: string | undefined
                'fiscal_period.lt'?: string | undefined
                'fiscal_period.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.any_of'?: string | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.any_of'?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                date_status?: string | undefined
                'date_status.any_of'?: string | undefined
                'date_status.gt'?: string | undefined
                'date_status.gte'?: string | undefined
                'date_status.lt'?: string | undefined
                'date_status.lte'?: string | undefined
                eps_surprise_percent?: number | undefined
                'eps_surprise_percent.any_of'?: string | undefined
                'eps_surprise_percent.gt'?: number | undefined
                'eps_surprise_percent.gte'?: number | undefined
                'eps_surprise_percent.lt'?: number | undefined
                'eps_surprise_percent.lte'?: number | undefined
                revenue_surprise_percent?: number | undefined
                'revenue_surprise_percent.any_of'?: string | undefined
                'revenue_surprise_percent.gt'?: number | undefined
                'revenue_surprise_percent.gte'?: number | undefined
                'revenue_surprise_percent.lt'?: number | undefined
                'revenue_surprise_percent.lte'?: number | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.any_of'?: string | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_period?: string | undefined
                'fiscal_period.any_of'?: string | undefined
                'fiscal_period.gt'?: string | undefined
                'fiscal_period.gte'?: string | undefined
                'fiscal_period.lt'?: string | undefined
                'fiscal_period.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/benzinga/v1/firms': {
      $get:
        | {
            input: {
              query: {
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                benzinga_id?: string | undefined
                currency?: string | undefined
                last_updated?: string | undefined
                name?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/benzinga/v1/guidance': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                positioning?: string | undefined
                'positioning.any_of'?: string | undefined
                'positioning.gt'?: string | undefined
                'positioning.gte'?: string | undefined
                'positioning.lt'?: string | undefined
                'positioning.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.any_of'?: string | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.any_of'?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.any_of'?: string | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_period?: string | undefined
                'fiscal_period.any_of'?: string | undefined
                'fiscal_period.gt'?: string | undefined
                'fiscal_period.gte'?: string | undefined
                'fiscal_period.lt'?: string | undefined
                'fiscal_period.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                benzinga_id?: string | undefined
                company_name?: string | undefined
                currency?: string | undefined
                date?: string | undefined
                eps_method?: string | undefined
                estimated_eps_guidance?: number | undefined
                estimated_revenue_guidance?: number | undefined
                fiscal_period?: string | undefined
                fiscal_year?: bigint | undefined
                importance?: bigint | undefined
                last_updated?: string | undefined
                max_eps_guidance?: number | undefined
                max_revenue_guidance?: number | undefined
                min_eps_guidance?: number | undefined
                min_revenue_guidance?: number | undefined
                notes?: string | undefined
                positioning?: string | undefined
                previous_max_eps_guidance?: number | undefined
                previous_max_revenue_guidance?: number | undefined
                previous_min_eps_guidance?: number | undefined
                previous_min_revenue_guidance?: number | undefined
                release_type?: string | undefined
                revenue_method?: string | undefined
                ticker?: string | undefined
                time?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                positioning?: string | undefined
                'positioning.any_of'?: string | undefined
                'positioning.gt'?: string | undefined
                'positioning.gte'?: string | undefined
                'positioning.lt'?: string | undefined
                'positioning.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.any_of'?: string | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.any_of'?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.any_of'?: string | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_period?: string | undefined
                'fiscal_period.any_of'?: string | undefined
                'fiscal_period.gt'?: string | undefined
                'fiscal_period.gte'?: string | undefined
                'fiscal_period.lt'?: string | undefined
                'fiscal_period.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                positioning?: string | undefined
                'positioning.any_of'?: string | undefined
                'positioning.gt'?: string | undefined
                'positioning.gte'?: string | undefined
                'positioning.lt'?: string | undefined
                'positioning.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.any_of'?: string | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.any_of'?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.any_of'?: string | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_period?: string | undefined
                'fiscal_period.any_of'?: string | undefined
                'fiscal_period.gt'?: string | undefined
                'fiscal_period.gte'?: string | undefined
                'fiscal_period.lt'?: string | undefined
                'fiscal_period.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/benzinga/v1/ratings': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                rating_action?: string | undefined
                'rating_action.any_of'?: string | undefined
                'rating_action.gt'?: string | undefined
                'rating_action.gte'?: string | undefined
                'rating_action.lt'?: string | undefined
                'rating_action.lte'?: string | undefined
                price_target_action?: string | undefined
                'price_target_action.any_of'?: string | undefined
                'price_target_action.gt'?: string | undefined
                'price_target_action.gte'?: string | undefined
                'price_target_action.lt'?: string | undefined
                'price_target_action.lte'?: string | undefined
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                benzinga_analyst_id?: string | undefined
                'benzinga_analyst_id.any_of'?: string | undefined
                'benzinga_analyst_id.gt'?: string | undefined
                'benzinga_analyst_id.gte'?: string | undefined
                'benzinga_analyst_id.lt'?: string | undefined
                'benzinga_analyst_id.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                adjusted_price_target?: number | undefined
                analyst?: string | undefined
                benzinga_analyst_id?: string | undefined
                benzinga_calendar_url?: string | undefined
                benzinga_firm_id?: string | undefined
                benzinga_id?: string | undefined
                benzinga_news_url?: string | undefined
                company_name?: string | undefined
                currency?: string | undefined
                date?: string | undefined
                firm?: string | undefined
                importance?: bigint | undefined
                last_updated?: string | undefined
                notes?: string | undefined
                previous_adjusted_price_target?: number | undefined
                previous_price_target?: number | undefined
                previous_rating?: string | undefined
                price_percent_change?: number | undefined
                price_target?: number | undefined
                price_target_action?: string | undefined
                rating?: string | undefined
                rating_action?: string | undefined
                ticker?: string | undefined
                time?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                rating_action?: string | undefined
                'rating_action.any_of'?: string | undefined
                'rating_action.gt'?: string | undefined
                'rating_action.gte'?: string | undefined
                'rating_action.lt'?: string | undefined
                'rating_action.lte'?: string | undefined
                price_target_action?: string | undefined
                'price_target_action.any_of'?: string | undefined
                'price_target_action.gt'?: string | undefined
                'price_target_action.gte'?: string | undefined
                'price_target_action.lt'?: string | undefined
                'price_target_action.lte'?: string | undefined
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                benzinga_analyst_id?: string | undefined
                'benzinga_analyst_id.any_of'?: string | undefined
                'benzinga_analyst_id.gt'?: string | undefined
                'benzinga_analyst_id.gte'?: string | undefined
                'benzinga_analyst_id.lt'?: string | undefined
                'benzinga_analyst_id.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                importance?: bigint | undefined
                'importance.gt'?: bigint | undefined
                'importance.gte'?: bigint | undefined
                'importance.lt'?: bigint | undefined
                'importance.lte'?: bigint | undefined
                last_updated?: string | undefined
                'last_updated.gt'?: string | undefined
                'last_updated.gte'?: string | undefined
                'last_updated.lt'?: string | undefined
                'last_updated.lte'?: string | undefined
                rating_action?: string | undefined
                'rating_action.any_of'?: string | undefined
                'rating_action.gt'?: string | undefined
                'rating_action.gte'?: string | undefined
                'rating_action.lt'?: string | undefined
                'rating_action.lte'?: string | undefined
                price_target_action?: string | undefined
                'price_target_action.any_of'?: string | undefined
                'price_target_action.gt'?: string | undefined
                'price_target_action.gte'?: string | undefined
                'price_target_action.lt'?: string | undefined
                'price_target_action.lte'?: string | undefined
                benzinga_id?: string | undefined
                'benzinga_id.any_of'?: string | undefined
                'benzinga_id.gt'?: string | undefined
                'benzinga_id.gte'?: string | undefined
                'benzinga_id.lt'?: string | undefined
                'benzinga_id.lte'?: string | undefined
                benzinga_analyst_id?: string | undefined
                'benzinga_analyst_id.any_of'?: string | undefined
                'benzinga_analyst_id.gt'?: string | undefined
                'benzinga_analyst_id.gte'?: string | undefined
                'benzinga_analyst_id.lt'?: string | undefined
                'benzinga_analyst_id.lte'?: string | undefined
                benzinga_firm_id?: string | undefined
                'benzinga_firm_id.any_of'?: string | undefined
                'benzinga_firm_id.gt'?: string | undefined
                'benzinga_firm_id.gte'?: string | undefined
                'benzinga_firm_id.lt'?: string | undefined
                'benzinga_firm_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/benzinga/v2/news': {
      $get:
        | {
            input: {
              query: {
                published?: string | undefined
                'published.gt'?: string | undefined
                'published.gte'?: string | undefined
                'published.lt'?: string | undefined
                'published.lte'?: string | undefined
                channels?: string | undefined
                'channels.all_of'?: string | undefined
                'channels.any_of'?: string | undefined
                tags?: string | undefined
                'tags.all_of'?: string | undefined
                'tags.any_of'?: string | undefined
                author?: string | undefined
                'author.any_of'?: string | undefined
                'author.gt'?: string | undefined
                'author.gte'?: string | undefined
                'author.lt'?: string | undefined
                'author.lte'?: string | undefined
                stocks?: string | undefined
                'stocks.all_of'?: string | undefined
                'stocks.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                author: string
                benzinga_id: bigint
                body?: string | undefined
                channels?: string[] | undefined
                images?: string[] | undefined
                last_updated: string
                published: string
                tags?: string[] | undefined
                teaser?: string | undefined
                tickers?: string[] | undefined
                title: string
                url: string
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                published?: string | undefined
                'published.gt'?: string | undefined
                'published.gte'?: string | undefined
                'published.lt'?: string | undefined
                'published.lte'?: string | undefined
                channels?: string | undefined
                'channels.all_of'?: string | undefined
                'channels.any_of'?: string | undefined
                tags?: string | undefined
                'tags.all_of'?: string | undefined
                'tags.any_of'?: string | undefined
                author?: string | undefined
                'author.any_of'?: string | undefined
                'author.gt'?: string | undefined
                'author.gte'?: string | undefined
                'author.lt'?: string | undefined
                'author.lte'?: string | undefined
                stocks?: string | undefined
                'stocks.all_of'?: string | undefined
                'stocks.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                published?: string | undefined
                'published.gt'?: string | undefined
                'published.gte'?: string | undefined
                'published.lt'?: string | undefined
                'published.lte'?: string | undefined
                channels?: string | undefined
                'channels.all_of'?: string | undefined
                'channels.any_of'?: string | undefined
                tags?: string | undefined
                'tags.all_of'?: string | undefined
                'tags.any_of'?: string | undefined
                author?: string | undefined
                'author.any_of'?: string | undefined
                'author.gt'?: string | undefined
                'author.gte'?: string | undefined
                'author.lt'?: string | undefined
                'author.lte'?: string | undefined
                stocks?: string | undefined
                'stocks.all_of'?: string | undefined
                'stocks.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/consumer-spending/eu/v1/merchant-aggregates': {
      $get:
        | {
            input: {
              query: {
                transaction_date?: string | undefined
                'transaction_date.gt'?: string | undefined
                'transaction_date.gte'?: string | undefined
                'transaction_date.lt'?: string | undefined
                'transaction_date.lte'?: string | undefined
                name?: string | undefined
                'name.any_of'?: string | undefined
                'name.gt'?: string | undefined
                'name.gte'?: string | undefined
                'name.lt'?: string | undefined
                'name.lte'?: string | undefined
                user_country?: 'UK' | 'DE' | 'FR' | 'ES' | 'IT' | 'AT' | 'unknown' | undefined
                'user_country.any_of'?:
                  | 'UK'
                  | 'DE'
                  | 'FR'
                  | 'ES'
                  | 'IT'
                  | 'AT'
                  | 'unknown'
                  | undefined
                channel?: 'online' | 'offline' | 'bnpl' | undefined
                'channel.any_of'?: 'online' | 'offline' | 'bnpl' | undefined
                consumer_type?: 'consumer_credit' | 'consumer_debit' | 'open_banking' | undefined
                'consumer_type.any_of'?:
                  | 'consumer_credit'
                  | 'consumer_debit'
                  | 'open_banking'
                  | undefined
                parent_name?: string | undefined
                'parent_name.any_of'?: string | undefined
                'parent_name.gt'?: string | undefined
                'parent_name.gte'?: string | undefined
                'parent_name.lt'?: string | undefined
                'parent_name.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                channel?: string | undefined
                consumer_type?: string | undefined
                eight_day_rolling_category_accounts?: bigint | undefined
                eight_day_rolling_total_accounts?: bigint | undefined
                mcc_group?: string | undefined
                merchant_industry?: string | undefined
                merchant_ticker?: string | undefined
                name?: string | undefined
                parent_name?: string | undefined
                published_date?: string | undefined
                spend_in_distinct_account_key_count?: bigint | undefined
                spend_in_spend?: number | undefined
                spend_in_transaction_count?: bigint | undefined
                spend_out_distinct_account_key_count?: bigint | undefined
                spend_out_spend?: number | undefined
                spend_out_transaction_count?: bigint | undefined
                total_accounts?: bigint | undefined
                total_spend?: number | undefined
                total_transactions?: bigint | undefined
                transaction_currency?: string | undefined
                transaction_date?: string | undefined
                twenty_eight_day_rolling_category_accounts?: bigint | undefined
                twenty_eight_day_rolling_total_accounts?: bigint | undefined
                type?: string | undefined
                user_country: string
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transaction_date?: string | undefined
                'transaction_date.gt'?: string | undefined
                'transaction_date.gte'?: string | undefined
                'transaction_date.lt'?: string | undefined
                'transaction_date.lte'?: string | undefined
                name?: string | undefined
                'name.any_of'?: string | undefined
                'name.gt'?: string | undefined
                'name.gte'?: string | undefined
                'name.lt'?: string | undefined
                'name.lte'?: string | undefined
                user_country?: 'UK' | 'DE' | 'FR' | 'ES' | 'IT' | 'AT' | 'unknown' | undefined
                'user_country.any_of'?:
                  | 'UK'
                  | 'DE'
                  | 'FR'
                  | 'ES'
                  | 'IT'
                  | 'AT'
                  | 'unknown'
                  | undefined
                channel?: 'online' | 'offline' | 'bnpl' | undefined
                'channel.any_of'?: 'online' | 'offline' | 'bnpl' | undefined
                consumer_type?: 'consumer_credit' | 'consumer_debit' | 'open_banking' | undefined
                'consumer_type.any_of'?:
                  | 'consumer_credit'
                  | 'consumer_debit'
                  | 'open_banking'
                  | undefined
                parent_name?: string | undefined
                'parent_name.any_of'?: string | undefined
                'parent_name.gt'?: string | undefined
                'parent_name.gte'?: string | undefined
                'parent_name.lt'?: string | undefined
                'parent_name.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                transaction_date?: string | undefined
                'transaction_date.gt'?: string | undefined
                'transaction_date.gte'?: string | undefined
                'transaction_date.lt'?: string | undefined
                'transaction_date.lte'?: string | undefined
                name?: string | undefined
                'name.any_of'?: string | undefined
                'name.gt'?: string | undefined
                'name.gte'?: string | undefined
                'name.lt'?: string | undefined
                'name.lte'?: string | undefined
                user_country?: 'UK' | 'DE' | 'FR' | 'ES' | 'IT' | 'AT' | 'unknown' | undefined
                'user_country.any_of'?:
                  | 'UK'
                  | 'DE'
                  | 'FR'
                  | 'ES'
                  | 'IT'
                  | 'AT'
                  | 'unknown'
                  | undefined
                channel?: 'online' | 'offline' | 'bnpl' | undefined
                'channel.any_of'?: 'online' | 'offline' | 'bnpl' | undefined
                consumer_type?: 'consumer_credit' | 'consumer_debit' | 'open_banking' | undefined
                'consumer_type.any_of'?:
                  | 'consumer_credit'
                  | 'consumer_debit'
                  | 'open_banking'
                  | undefined
                parent_name?: string | undefined
                'parent_name.any_of'?: string | undefined
                'parent_name.gt'?: string | undefined
                'parent_name.gte'?: string | undefined
                'parent_name.lt'?: string | undefined
                'parent_name.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/consumer-spending/eu/v1/merchant-hierarchy': {
      $get:
        | {
            input: {
              query: {
                lookup_name?: string | undefined
                'lookup_name.any_of'?: string | undefined
                'lookup_name.gt'?: string | undefined
                'lookup_name.gte'?: string | undefined
                'lookup_name.lt'?: string | undefined
                'lookup_name.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                listing_status?: 'public' | 'private' | undefined
                'listing_status.any_of'?: 'public' | 'private' | undefined
                active_from?: string | undefined
                'active_from.gt'?: string | undefined
                'active_from.gte'?: string | undefined
                'active_from.lt'?: string | undefined
                'active_from.lte'?: string | undefined
                active_to?: string | undefined
                'active_to.gt'?: string | undefined
                'active_to.gte'?: string | undefined
                'active_to.lt'?: string | undefined
                'active_to.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                active_from?: string | undefined
                active_to?: string | undefined
                category?: string | undefined
                grandparent_name?: string | undefined
                grandparent_ticker?: string | undefined
                great_grandparent_name?: string | undefined
                great_grandparent_ticker?: string | undefined
                industry?: string | undefined
                industry_group?: string | undefined
                listing_status: string
                lookup_name?: string | undefined
                normalized_name?: string | undefined
                parent_name?: string | undefined
                parent_ticker?: string | undefined
                sector?: string | undefined
                sub_industry?: string | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                lookup_name?: string | undefined
                'lookup_name.any_of'?: string | undefined
                'lookup_name.gt'?: string | undefined
                'lookup_name.gte'?: string | undefined
                'lookup_name.lt'?: string | undefined
                'lookup_name.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                listing_status?: 'public' | 'private' | undefined
                'listing_status.any_of'?: 'public' | 'private' | undefined
                active_from?: string | undefined
                'active_from.gt'?: string | undefined
                'active_from.gte'?: string | undefined
                'active_from.lt'?: string | undefined
                'active_from.lte'?: string | undefined
                active_to?: string | undefined
                'active_to.gt'?: string | undefined
                'active_to.gte'?: string | undefined
                'active_to.lt'?: string | undefined
                'active_to.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                lookup_name?: string | undefined
                'lookup_name.any_of'?: string | undefined
                'lookup_name.gt'?: string | undefined
                'lookup_name.gte'?: string | undefined
                'lookup_name.lt'?: string | undefined
                'lookup_name.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                listing_status?: 'public' | 'private' | undefined
                'listing_status.any_of'?: 'public' | 'private' | undefined
                active_from?: string | undefined
                'active_from.gt'?: string | undefined
                'active_from.gte'?: string | undefined
                'active_from.lt'?: string | undefined
                'active_from.lte'?: string | undefined
                active_to?: string | undefined
                'active_to.gt'?: string | undefined
                'active_to.gte'?: string | undefined
                'active_to.lt'?: string | undefined
                'active_to.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/crypto/v1/exchanges': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: {
              next_url?: string | undefined
              request_id: string
              results: { id: string; name: string; type: string; url?: string | undefined }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/etf-global/v1/analytics': {
      $get:
        | {
            input: {
              query: {
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                risk_total_score?: number | undefined
                'risk_total_score.gt'?: number | undefined
                'risk_total_score.gte'?: number | undefined
                'risk_total_score.lt'?: number | undefined
                'risk_total_score.lte'?: number | undefined
                reward_score?: number | undefined
                'reward_score.gt'?: number | undefined
                'reward_score.gte'?: number | undefined
                'reward_score.lt'?: number | undefined
                'reward_score.lte'?: number | undefined
                quant_total_score?: number | undefined
                'quant_total_score.gt'?: number | undefined
                'quant_total_score.gte'?: number | undefined
                'quant_total_score.lt'?: number | undefined
                'quant_total_score.lte'?: number | undefined
                quant_grade?: string | undefined
                'quant_grade.any_of'?: string | undefined
                'quant_grade.gt'?: string | undefined
                'quant_grade.gte'?: string | undefined
                'quant_grade.lt'?: string | undefined
                'quant_grade.lte'?: string | undefined
                quant_composite_technical?: number | undefined
                'quant_composite_technical.gt'?: number | undefined
                'quant_composite_technical.gte'?: number | undefined
                'quant_composite_technical.lt'?: number | undefined
                'quant_composite_technical.lte'?: number | undefined
                quant_composite_sentiment?: number | undefined
                'quant_composite_sentiment.gt'?: number | undefined
                'quant_composite_sentiment.gte'?: number | undefined
                'quant_composite_sentiment.lt'?: number | undefined
                'quant_composite_sentiment.lte'?: number | undefined
                quant_composite_behavioral?: number | undefined
                'quant_composite_behavioral.gt'?: number | undefined
                'quant_composite_behavioral.gte'?: number | undefined
                'quant_composite_behavioral.lt'?: number | undefined
                'quant_composite_behavioral.lte'?: number | undefined
                quant_composite_fundamental?: number | undefined
                'quant_composite_fundamental.gt'?: number | undefined
                'quant_composite_fundamental.gte'?: number | undefined
                'quant_composite_fundamental.lt'?: number | undefined
                'quant_composite_fundamental.lte'?: number | undefined
                quant_composite_global?: number | undefined
                'quant_composite_global.gt'?: number | undefined
                'quant_composite_global.gte'?: number | undefined
                'quant_composite_global.lt'?: number | undefined
                'quant_composite_global.lte'?: number | undefined
                quant_composite_quality?: number | undefined
                'quant_composite_quality.gt'?: number | undefined
                'quant_composite_quality.gte'?: number | undefined
                'quant_composite_quality.lt'?: number | undefined
                'quant_composite_quality.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                composite_ticker?: string | undefined
                effective_date?: string | undefined
                processed_date?: string | undefined
                quant_composite_behavioral?: number | undefined
                quant_composite_fundamental?: number | undefined
                quant_composite_global?: number | undefined
                quant_composite_quality?: number | undefined
                quant_composite_sentiment?: number | undefined
                quant_composite_technical?: number | undefined
                quant_fundamental_div?: number | undefined
                quant_fundamental_pb?: number | undefined
                quant_fundamental_pcf?: number | undefined
                quant_fundamental_pe?: number | undefined
                quant_global_country?: number | undefined
                quant_global_sector?: number | undefined
                quant_grade?: string | undefined
                quant_quality_diversification?: number | undefined
                quant_quality_firm?: number | undefined
                quant_quality_liquidity?: number | undefined
                quant_sentiment_iv?: number | undefined
                quant_sentiment_pc?: number | undefined
                quant_sentiment_si?: number | undefined
                quant_technical_it?: number | undefined
                quant_technical_lt?: number | undefined
                quant_technical_st?: number | undefined
                quant_total_score?: number | undefined
                reward_score?: number | undefined
                risk_country?: number | undefined
                risk_deviation?: number | undefined
                risk_efficiency?: number | undefined
                risk_liquidity?: number | undefined
                risk_structure?: number | undefined
                risk_total_score?: number | undefined
                risk_volatility?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                risk_total_score?: number | undefined
                'risk_total_score.gt'?: number | undefined
                'risk_total_score.gte'?: number | undefined
                'risk_total_score.lt'?: number | undefined
                'risk_total_score.lte'?: number | undefined
                reward_score?: number | undefined
                'reward_score.gt'?: number | undefined
                'reward_score.gte'?: number | undefined
                'reward_score.lt'?: number | undefined
                'reward_score.lte'?: number | undefined
                quant_total_score?: number | undefined
                'quant_total_score.gt'?: number | undefined
                'quant_total_score.gte'?: number | undefined
                'quant_total_score.lt'?: number | undefined
                'quant_total_score.lte'?: number | undefined
                quant_grade?: string | undefined
                'quant_grade.any_of'?: string | undefined
                'quant_grade.gt'?: string | undefined
                'quant_grade.gte'?: string | undefined
                'quant_grade.lt'?: string | undefined
                'quant_grade.lte'?: string | undefined
                quant_composite_technical?: number | undefined
                'quant_composite_technical.gt'?: number | undefined
                'quant_composite_technical.gte'?: number | undefined
                'quant_composite_technical.lt'?: number | undefined
                'quant_composite_technical.lte'?: number | undefined
                quant_composite_sentiment?: number | undefined
                'quant_composite_sentiment.gt'?: number | undefined
                'quant_composite_sentiment.gte'?: number | undefined
                'quant_composite_sentiment.lt'?: number | undefined
                'quant_composite_sentiment.lte'?: number | undefined
                quant_composite_behavioral?: number | undefined
                'quant_composite_behavioral.gt'?: number | undefined
                'quant_composite_behavioral.gte'?: number | undefined
                'quant_composite_behavioral.lt'?: number | undefined
                'quant_composite_behavioral.lte'?: number | undefined
                quant_composite_fundamental?: number | undefined
                'quant_composite_fundamental.gt'?: number | undefined
                'quant_composite_fundamental.gte'?: number | undefined
                'quant_composite_fundamental.lt'?: number | undefined
                'quant_composite_fundamental.lte'?: number | undefined
                quant_composite_global?: number | undefined
                'quant_composite_global.gt'?: number | undefined
                'quant_composite_global.gte'?: number | undefined
                'quant_composite_global.lt'?: number | undefined
                'quant_composite_global.lte'?: number | undefined
                quant_composite_quality?: number | undefined
                'quant_composite_quality.gt'?: number | undefined
                'quant_composite_quality.gte'?: number | undefined
                'quant_composite_quality.lt'?: number | undefined
                'quant_composite_quality.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                risk_total_score?: number | undefined
                'risk_total_score.gt'?: number | undefined
                'risk_total_score.gte'?: number | undefined
                'risk_total_score.lt'?: number | undefined
                'risk_total_score.lte'?: number | undefined
                reward_score?: number | undefined
                'reward_score.gt'?: number | undefined
                'reward_score.gte'?: number | undefined
                'reward_score.lt'?: number | undefined
                'reward_score.lte'?: number | undefined
                quant_total_score?: number | undefined
                'quant_total_score.gt'?: number | undefined
                'quant_total_score.gte'?: number | undefined
                'quant_total_score.lt'?: number | undefined
                'quant_total_score.lte'?: number | undefined
                quant_grade?: string | undefined
                'quant_grade.any_of'?: string | undefined
                'quant_grade.gt'?: string | undefined
                'quant_grade.gte'?: string | undefined
                'quant_grade.lt'?: string | undefined
                'quant_grade.lte'?: string | undefined
                quant_composite_technical?: number | undefined
                'quant_composite_technical.gt'?: number | undefined
                'quant_composite_technical.gte'?: number | undefined
                'quant_composite_technical.lt'?: number | undefined
                'quant_composite_technical.lte'?: number | undefined
                quant_composite_sentiment?: number | undefined
                'quant_composite_sentiment.gt'?: number | undefined
                'quant_composite_sentiment.gte'?: number | undefined
                'quant_composite_sentiment.lt'?: number | undefined
                'quant_composite_sentiment.lte'?: number | undefined
                quant_composite_behavioral?: number | undefined
                'quant_composite_behavioral.gt'?: number | undefined
                'quant_composite_behavioral.gte'?: number | undefined
                'quant_composite_behavioral.lt'?: number | undefined
                'quant_composite_behavioral.lte'?: number | undefined
                quant_composite_fundamental?: number | undefined
                'quant_composite_fundamental.gt'?: number | undefined
                'quant_composite_fundamental.gte'?: number | undefined
                'quant_composite_fundamental.lt'?: number | undefined
                'quant_composite_fundamental.lte'?: number | undefined
                quant_composite_global?: number | undefined
                'quant_composite_global.gt'?: number | undefined
                'quant_composite_global.gte'?: number | undefined
                'quant_composite_global.lt'?: number | undefined
                'quant_composite_global.lte'?: number | undefined
                quant_composite_quality?: number | undefined
                'quant_composite_quality.gt'?: number | undefined
                'quant_composite_quality.gte'?: number | undefined
                'quant_composite_quality.lt'?: number | undefined
                'quant_composite_quality.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/etf-global/v1/constituents': {
      $get:
        | {
            input: {
              query: {
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                constituent_ticker?: string | undefined
                'constituent_ticker.any_of'?: string | undefined
                'constituent_ticker.gt'?: string | undefined
                'constituent_ticker.gte'?: string | undefined
                'constituent_ticker.lt'?: string | undefined
                'constituent_ticker.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                us_code?: string | undefined
                'us_code.any_of'?: string | undefined
                'us_code.gt'?: string | undefined
                'us_code.gte'?: string | undefined
                'us_code.lt'?: string | undefined
                'us_code.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                figi?: string | undefined
                'figi.any_of'?: string | undefined
                'figi.gt'?: string | undefined
                'figi.gte'?: string | undefined
                'figi.lt'?: string | undefined
                'figi.lte'?: string | undefined
                sedol?: string | undefined
                'sedol.any_of'?: string | undefined
                'sedol.gt'?: string | undefined
                'sedol.gte'?: string | undefined
                'sedol.lt'?: string | undefined
                'sedol.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                asset_class?: string | undefined
                composite_ticker?: string | undefined
                constituent_name?: string | undefined
                constituent_rank: bigint
                constituent_ticker?: string | undefined
                country_of_exchange?: string | undefined
                currency_traded?: string | undefined
                effective_date: string
                exchange?: string | undefined
                figi?: string | undefined
                isin?: string | undefined
                market_value?: number | undefined
                processed_date?: string | undefined
                security_type?: string | undefined
                sedol?: string | undefined
                shares_held?: number | undefined
                us_code?: string | undefined
                weight?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                constituent_ticker?: string | undefined
                'constituent_ticker.any_of'?: string | undefined
                'constituent_ticker.gt'?: string | undefined
                'constituent_ticker.gte'?: string | undefined
                'constituent_ticker.lt'?: string | undefined
                'constituent_ticker.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                us_code?: string | undefined
                'us_code.any_of'?: string | undefined
                'us_code.gt'?: string | undefined
                'us_code.gte'?: string | undefined
                'us_code.lt'?: string | undefined
                'us_code.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                figi?: string | undefined
                'figi.any_of'?: string | undefined
                'figi.gt'?: string | undefined
                'figi.gte'?: string | undefined
                'figi.lt'?: string | undefined
                'figi.lte'?: string | undefined
                sedol?: string | undefined
                'sedol.any_of'?: string | undefined
                'sedol.gt'?: string | undefined
                'sedol.gte'?: string | undefined
                'sedol.lt'?: string | undefined
                'sedol.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                constituent_ticker?: string | undefined
                'constituent_ticker.any_of'?: string | undefined
                'constituent_ticker.gt'?: string | undefined
                'constituent_ticker.gte'?: string | undefined
                'constituent_ticker.lt'?: string | undefined
                'constituent_ticker.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                us_code?: string | undefined
                'us_code.any_of'?: string | undefined
                'us_code.gt'?: string | undefined
                'us_code.gte'?: string | undefined
                'us_code.lt'?: string | undefined
                'us_code.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                figi?: string | undefined
                'figi.any_of'?: string | undefined
                'figi.gt'?: string | undefined
                'figi.gte'?: string | undefined
                'figi.lt'?: string | undefined
                'figi.lte'?: string | undefined
                sedol?: string | undefined
                'sedol.any_of'?: string | undefined
                'sedol.gt'?: string | undefined
                'sedol.gte'?: string | undefined
                'sedol.lt'?: string | undefined
                'sedol.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/etf-global/v1/fund-flows': {
      $get:
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                composite_ticker?: string | undefined
                effective_date?: string | undefined
                fund_flow?: number | undefined
                nav?: number | undefined
                processed_date?: string | undefined
                shares_outstanding?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/etf-global/v1/profiles': {
      $get:
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                administrator?: string | undefined
                advisor?: string | undefined
                asset_class?: string | undefined
                aum?: number | undefined
                avg_daily_trading_volume?: number | undefined
                bid_ask_spread?: number | undefined
                call_volume?: number | undefined
                category?: string | undefined
                composite_ticker?: string | undefined
                coupon_exposure?: { key: string; value: number }[] | undefined
                creation_fee?: number | undefined
                creation_unit_size?: number | undefined
                currency_exposure?: { key: string; value: number }[] | undefined
                custodian?: string | undefined
                description?: string | undefined
                development_class?: string | undefined
                discount_premium?: number | undefined
                distribution_frequency?: string | undefined
                distributor?: string | undefined
                effective_date?: string | undefined
                fee_waivers?: number | undefined
                fiscal_year_end?: string | undefined
                focus?: string | undefined
                futures_commission_merchant?: string | undefined
                geographic_exposure?: { key: string; value: number }[] | undefined
                inception_date?: string | undefined
                industry_exposure?: { key: string; value: number }[] | undefined
                industry_group_exposure?: { key: string; value: number }[] | undefined
                issuer?: string | undefined
                lead_market_maker?: string | undefined
                leverage_style: string
                levered_amount?: number | undefined
                listing_exchange?: string | undefined
                management_classification: string
                management_fee?: number | undefined
                maturity_exposure?: { key: string; value: number }[] | undefined
                net_expenses?: number | undefined
                num_holdings?: number | undefined
                options_available?: number | undefined
                options_volume?: number | undefined
                other_expenses?: number | undefined
                portfolio_manager?: string | undefined
                primary_benchmark?: string | undefined
                processed_date?: string | undefined
                product_type: string
                put_call_ratio?: number | undefined
                put_volume?: number | undefined
                region?: string | undefined
                sector_exposure?: { key: string; value: number }[] | undefined
                short_interest?: number | undefined
                subadvisor?: string | undefined
                subindustry_exposure?: { key: string; value: number }[] | undefined
                tax_classification?: string | undefined
                total_expenses?: number | undefined
                transfer_agent?: string | undefined
                trustee?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/etf-global/v1/taxonomies': {
      $get:
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                asset_class?: string | undefined
                category?: string | undefined
                composite_ticker?: string | undefined
                country?: string | undefined
                credit_quality_rating?: string | undefined
                description?: string | undefined
                development_class?: string | undefined
                duration?: string | undefined
                effective_date?: string | undefined
                esg?: string | undefined
                exposure_mechanism?: string | undefined
                factor?: string | undefined
                focus?: string | undefined
                hedge_reset?: string | undefined
                holdings_disclosure_frequency?: string | undefined
                inception_date?: string | undefined
                isin?: string | undefined
                issuer?: string | undefined
                leverage_reset?: string | undefined
                leverage_style: string
                levered_amount?: number | undefined
                management_classification: string
                management_style?: string | undefined
                maturity?: string | undefined
                objective?: string | undefined
                primary_benchmark?: string | undefined
                processed_date?: string | undefined
                product_type: string
                rebalance_frequency?: string | undefined
                reconstitution_frequency?: string | undefined
                region?: string | undefined
                secondary_objective?: string | undefined
                selection_methodology?: string | undefined
                selection_universe?: string | undefined
                strategic_focus?: string | undefined
                targeted_focus?: string | undefined
                tax_classification?: string | undefined
                us_code?: string | undefined
                weighting_methodology?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                processed_date?: string | undefined
                'processed_date.gt'?: string | undefined
                'processed_date.gte'?: string | undefined
                'processed_date.lt'?: string | undefined
                'processed_date.lte'?: string | undefined
                effective_date?: string | undefined
                'effective_date.gt'?: string | undefined
                'effective_date.gte'?: string | undefined
                'effective_date.lt'?: string | undefined
                'effective_date.lte'?: string | undefined
                composite_ticker?: string | undefined
                'composite_ticker.any_of'?: string | undefined
                'composite_ticker.gt'?: string | undefined
                'composite_ticker.gte'?: string | undefined
                'composite_ticker.lt'?: string | undefined
                'composite_ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fed/v1/funding-conditions': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                date?: string | undefined
                effective_fed_funds_rate?: number | undefined
                effective_fed_funds_volume?: number | undefined
                fed_funds_target_lower?: number | undefined
                fed_funds_target_upper?: number | undefined
                fed_overnight_repo_treasury_amount?: number | undefined
                fed_overnight_reverse_repo_treasury_amount?: number | undefined
                financial_commercial_paper_90d_rate?: number | undefined
                interest_on_reserve_balances?: number | undefined
                nonfinancial_commercial_paper_90d_rate?: number | undefined
                obfr_25th_percentile?: number | undefined
                obfr_75th_percentile?: number | undefined
                obfr_volume?: number | undefined
                overnight_bank_funding_rate?: number | undefined
                secured_overnight_financing_rate?: number | undefined
                sofr_25th_percentile?: number | undefined
                sofr_75th_percentile?: number | undefined
                sofr_volume?: number | undefined
                tgcr_25th_percentile?: number | undefined
                tgcr_75th_percentile?: number | undefined
                tri_party_general_collateral_rate?: number | undefined
                tri_party_general_collateral_volume?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fed/v1/inflation': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                cpi?: number | undefined
                cpi_core?: number | undefined
                cpi_year_over_year?: number | undefined
                date?: string | undefined
                pce?: number | undefined
                pce_core?: number | undefined
                pce_spending?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fed/v1/inflation-expectations': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                date?: string | undefined
                forward_years_5_to_10?: number | undefined
                market_10_year?: number | undefined
                market_5_year?: number | undefined
                model_10_year?: number | undefined
                model_1_year?: number | undefined
                model_30_year?: number | undefined
                model_5_year?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fed/v1/labor-market': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                avg_hourly_earnings?: number | undefined
                date?: string | undefined
                job_openings?: number | undefined
                labor_force_participation_rate?: number | undefined
                unemployment_rate?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fed/v1/treasury-yields': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                date?: string | undefined
                yield_10_year?: number | undefined
                yield_1_month?: number | undefined
                yield_1_year?: number | undefined
                yield_20_year?: number | undefined
                yield_2_year?: number | undefined
                yield_30_year?: number | undefined
                yield_3_month?: number | undefined
                yield_3_year?: number | undefined
                yield_5_year?: number | undefined
                yield_6_month?: number | undefined
                yield_7_year?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/forex/v1/exchanges': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: {
              next_url?: string | undefined
              request_id: string
              results: { id: string; name: string; type: string }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/futures/v1/aggs/:ticker': {
      $get: {
        input: { param: { ticker: string } } & {
          query: {
            resolution?: string | undefined
            window_start?: string | undefined
            limit?: number | undefined
            'window_start.gte'?: string | undefined
            'window_start.gt'?: string | undefined
            'window_start.lte'?: string | undefined
            'window_start.lt'?: string | undefined
            sort?: 'window_start.asc' | 'window_start.desc' | undefined
          }
        }
        output: {
          next_url?: string | undefined
          results: {
            close: number
            dollar_volume: number
            high: number
            low: number
            open: number
            session_end_date: string
            settlement_price?: number | undefined
            ticker: string
            transactions: bigint
            volume: bigint
            window_start: bigint
          }[]
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/futures/v1/contracts': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                provider_id?: string | undefined
                provider_product_id?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                active?: boolean | undefined
                type?: 'single' | 'combo' | undefined
                'type.any_of'?: 'single' | 'combo' | undefined
                first_trade_date?: string | undefined
                'first_trade_date.gt'?: string | undefined
                'first_trade_date.gte'?: string | undefined
                'first_trade_date.lt'?: string | undefined
                'first_trade_date.lte'?: string | undefined
                last_trade_date?: string | undefined
                'last_trade_date.gt'?: string | undefined
                'last_trade_date.gte'?: string | undefined
                'last_trade_date.lt'?: string | undefined
                'last_trade_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                active: boolean
                date: string
                days_to_maturity?: bigint | undefined
                first_trade_date?: string | undefined
                group_code?: string | undefined
                last_trade_date?: string | undefined
                max_order_quantity?: bigint | undefined
                min_order_quantity?: bigint | undefined
                name?: string | undefined
                product_code?: string | undefined
                provider_id?: string | undefined
                provider_product_id?: string | undefined
                settlement_date?: string | undefined
                settlement_tick_size?: number | undefined
                spread_tick_size?: number | undefined
                ticker?: string | undefined
                trade_tick_size?: number | undefined
                trading_venue?: string | undefined
                type?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                provider_id?: string | undefined
                provider_product_id?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                active?: boolean | undefined
                type?: 'single' | 'combo' | undefined
                'type.any_of'?: 'single' | 'combo' | undefined
                first_trade_date?: string | undefined
                'first_trade_date.gt'?: string | undefined
                'first_trade_date.gte'?: string | undefined
                'first_trade_date.lt'?: string | undefined
                'first_trade_date.lte'?: string | undefined
                last_trade_date?: string | undefined
                'last_trade_date.gt'?: string | undefined
                'last_trade_date.gte'?: string | undefined
                'last_trade_date.lt'?: string | undefined
                'last_trade_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                provider_id?: string | undefined
                provider_product_id?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                active?: boolean | undefined
                type?: 'single' | 'combo' | undefined
                'type.any_of'?: 'single' | 'combo' | undefined
                first_trade_date?: string | undefined
                'first_trade_date.gt'?: string | undefined
                'first_trade_date.gte'?: string | undefined
                'first_trade_date.lt'?: string | undefined
                'first_trade_date.lte'?: string | undefined
                last_trade_date?: string | undefined
                'last_trade_date.gt'?: string | undefined
                'last_trade_date.gte'?: string | undefined
                'last_trade_date.lt'?: string | undefined
                'last_trade_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/futures/v1/exchanges': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                acronym?: string | undefined
                id: string
                locale?: string | undefined
                mic?: string | undefined
                name: string
                operating_mic?: string | undefined
                type: string
                url?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/futures/v1/market-status': {
      $get:
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                market_event?: string | undefined
                name?: string | undefined
                product_code?: string | undefined
                session_end_date?: string | undefined
                timestamp?: string | undefined
                trading_venue?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                limit?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                limit?: number | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/futures/v1/products': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                'name.any_of'?: string | undefined
                'name.gt'?: string | undefined
                'name.gte'?: string | undefined
                'name.lt'?: string | undefined
                'name.lte'?: string | undefined
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                provider_id?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                sector?:
                  | 'asia'
                  | 'base'
                  | 'biofuels'
                  | 'coal'
                  | 'cross_rates'
                  | 'crude_oil'
                  | 'custom_index'
                  | 'dairy'
                  | 'dj_ubs_ci'
                  | 'electricity'
                  | 'emissions'
                  | 'europe'
                  | 'fertilizer'
                  | 'forestry'
                  | 'grains_and_oilseeds'
                  | 'intl_index'
                  | 'liq_nat_gas_lng'
                  | 'livestock'
                  | 'long_term_gov'
                  | 'long_term_non_gov'
                  | 'majors'
                  | 'minors'
                  | 'nat_gas'
                  | 'nat_gas_liq_petro'
                  | 'precious'
                  | 'refined_products'
                  | 's_and_p_gsci'
                  | 'sel_sector_index'
                  | 'short_term_gov'
                  | 'short_term_non_gov'
                  | 'softs'
                  | 'us'
                  | 'us_index'
                  | 'wet_bulk'
                  | undefined
                'sector.any_of'?:
                  | 'asia'
                  | 'base'
                  | 'biofuels'
                  | 'coal'
                  | 'cross_rates'
                  | 'crude_oil'
                  | 'custom_index'
                  | 'dairy'
                  | 'dj_ubs_ci'
                  | 'electricity'
                  | 'emissions'
                  | 'europe'
                  | 'fertilizer'
                  | 'forestry'
                  | 'grains_and_oilseeds'
                  | 'intl_index'
                  | 'liq_nat_gas_lng'
                  | 'livestock'
                  | 'long_term_gov'
                  | 'long_term_non_gov'
                  | 'majors'
                  | 'minors'
                  | 'nat_gas'
                  | 'nat_gas_liq_petro'
                  | 'precious'
                  | 'refined_products'
                  | 's_and_p_gsci'
                  | 'sel_sector_index'
                  | 'short_term_gov'
                  | 'short_term_non_gov'
                  | 'softs'
                  | 'us'
                  | 'us_index'
                  | 'wet_bulk'
                  | undefined
                sub_sector?:
                  | 'asian'
                  | 'canadian'
                  | 'cat'
                  | 'cooling_degree_days'
                  | 'ercot'
                  | 'european'
                  | 'gulf'
                  | 'heating_degree_days'
                  | 'iso_ne'
                  | 'large_cap_index'
                  | 'mid_cap_index'
                  | 'miso'
                  | 'north_american'
                  | 'nyiso'
                  | 'pjm'
                  | 'small_cap_index'
                  | 'west'
                  | 'western_power'
                  | undefined
                'sub_sector.any_of'?:
                  | 'asian'
                  | 'canadian'
                  | 'cat'
                  | 'cooling_degree_days'
                  | 'ercot'
                  | 'european'
                  | 'gulf'
                  | 'heating_degree_days'
                  | 'iso_ne'
                  | 'large_cap_index'
                  | 'mid_cap_index'
                  | 'miso'
                  | 'north_american'
                  | 'nyiso'
                  | 'pjm'
                  | 'small_cap_index'
                  | 'west'
                  | 'western_power'
                  | undefined
                asset_class?: 'alt_investment' | 'commodity' | 'financials' | undefined
                'asset_class.any_of'?: 'alt_investment' | 'commodity' | 'financials' | undefined
                asset_sub_class?:
                  | 'agricultural'
                  | 'commodity_index'
                  | 'energy'
                  | 'equity'
                  | 'foreign_exchange'
                  | 'freight'
                  | 'housing'
                  | 'interest_rate'
                  | 'metals'
                  | 'weather'
                  | undefined
                'asset_sub_class.any_of'?:
                  | 'agricultural'
                  | 'commodity_index'
                  | 'energy'
                  | 'equity'
                  | 'foreign_exchange'
                  | 'freight'
                  | 'housing'
                  | 'interest_rate'
                  | 'metals'
                  | 'weather'
                  | undefined
                type?: 'single' | 'combo' | undefined
                'type.any_of'?: 'single' | 'combo' | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                asset_class?: string | undefined
                asset_sub_class?: string | undefined
                clearing_symbol?: string | undefined
                clearing_venue?: string | undefined
                date: string
                last_updated?: string | undefined
                name?: string | undefined
                price_quotation?: string | undefined
                product_code?: string | undefined
                provider_id?: string | undefined
                sector?: string | undefined
                settlement_currency_code?: string | undefined
                settlement_method?: string | undefined
                settlement_type?: string | undefined
                strategy_type?: string | undefined
                sub_sector?: string | undefined
                trade_currency_code?: string | undefined
                trading_venue?: string | undefined
                type?: string | undefined
                unit_of_measure?: string | undefined
                unit_of_measure_qty?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                'name.any_of'?: string | undefined
                'name.gt'?: string | undefined
                'name.gte'?: string | undefined
                'name.lt'?: string | undefined
                'name.lte'?: string | undefined
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                provider_id?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                sector?:
                  | 'asia'
                  | 'base'
                  | 'biofuels'
                  | 'coal'
                  | 'cross_rates'
                  | 'crude_oil'
                  | 'custom_index'
                  | 'dairy'
                  | 'dj_ubs_ci'
                  | 'electricity'
                  | 'emissions'
                  | 'europe'
                  | 'fertilizer'
                  | 'forestry'
                  | 'grains_and_oilseeds'
                  | 'intl_index'
                  | 'liq_nat_gas_lng'
                  | 'livestock'
                  | 'long_term_gov'
                  | 'long_term_non_gov'
                  | 'majors'
                  | 'minors'
                  | 'nat_gas'
                  | 'nat_gas_liq_petro'
                  | 'precious'
                  | 'refined_products'
                  | 's_and_p_gsci'
                  | 'sel_sector_index'
                  | 'short_term_gov'
                  | 'short_term_non_gov'
                  | 'softs'
                  | 'us'
                  | 'us_index'
                  | 'wet_bulk'
                  | undefined
                'sector.any_of'?:
                  | 'asia'
                  | 'base'
                  | 'biofuels'
                  | 'coal'
                  | 'cross_rates'
                  | 'crude_oil'
                  | 'custom_index'
                  | 'dairy'
                  | 'dj_ubs_ci'
                  | 'electricity'
                  | 'emissions'
                  | 'europe'
                  | 'fertilizer'
                  | 'forestry'
                  | 'grains_and_oilseeds'
                  | 'intl_index'
                  | 'liq_nat_gas_lng'
                  | 'livestock'
                  | 'long_term_gov'
                  | 'long_term_non_gov'
                  | 'majors'
                  | 'minors'
                  | 'nat_gas'
                  | 'nat_gas_liq_petro'
                  | 'precious'
                  | 'refined_products'
                  | 's_and_p_gsci'
                  | 'sel_sector_index'
                  | 'short_term_gov'
                  | 'short_term_non_gov'
                  | 'softs'
                  | 'us'
                  | 'us_index'
                  | 'wet_bulk'
                  | undefined
                sub_sector?:
                  | 'asian'
                  | 'canadian'
                  | 'cat'
                  | 'cooling_degree_days'
                  | 'ercot'
                  | 'european'
                  | 'gulf'
                  | 'heating_degree_days'
                  | 'iso_ne'
                  | 'large_cap_index'
                  | 'mid_cap_index'
                  | 'miso'
                  | 'north_american'
                  | 'nyiso'
                  | 'pjm'
                  | 'small_cap_index'
                  | 'west'
                  | 'western_power'
                  | undefined
                'sub_sector.any_of'?:
                  | 'asian'
                  | 'canadian'
                  | 'cat'
                  | 'cooling_degree_days'
                  | 'ercot'
                  | 'european'
                  | 'gulf'
                  | 'heating_degree_days'
                  | 'iso_ne'
                  | 'large_cap_index'
                  | 'mid_cap_index'
                  | 'miso'
                  | 'north_american'
                  | 'nyiso'
                  | 'pjm'
                  | 'small_cap_index'
                  | 'west'
                  | 'western_power'
                  | undefined
                asset_class?: 'alt_investment' | 'commodity' | 'financials' | undefined
                'asset_class.any_of'?: 'alt_investment' | 'commodity' | 'financials' | undefined
                asset_sub_class?:
                  | 'agricultural'
                  | 'commodity_index'
                  | 'energy'
                  | 'equity'
                  | 'foreign_exchange'
                  | 'freight'
                  | 'housing'
                  | 'interest_rate'
                  | 'metals'
                  | 'weather'
                  | undefined
                'asset_sub_class.any_of'?:
                  | 'agricultural'
                  | 'commodity_index'
                  | 'energy'
                  | 'equity'
                  | 'foreign_exchange'
                  | 'freight'
                  | 'housing'
                  | 'interest_rate'
                  | 'metals'
                  | 'weather'
                  | undefined
                type?: 'single' | 'combo' | undefined
                'type.any_of'?: 'single' | 'combo' | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                'name.any_of'?: string | undefined
                'name.gt'?: string | undefined
                'name.gte'?: string | undefined
                'name.lt'?: string | undefined
                'name.lte'?: string | undefined
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                provider_id?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                sector?:
                  | 'asia'
                  | 'base'
                  | 'biofuels'
                  | 'coal'
                  | 'cross_rates'
                  | 'crude_oil'
                  | 'custom_index'
                  | 'dairy'
                  | 'dj_ubs_ci'
                  | 'electricity'
                  | 'emissions'
                  | 'europe'
                  | 'fertilizer'
                  | 'forestry'
                  | 'grains_and_oilseeds'
                  | 'intl_index'
                  | 'liq_nat_gas_lng'
                  | 'livestock'
                  | 'long_term_gov'
                  | 'long_term_non_gov'
                  | 'majors'
                  | 'minors'
                  | 'nat_gas'
                  | 'nat_gas_liq_petro'
                  | 'precious'
                  | 'refined_products'
                  | 's_and_p_gsci'
                  | 'sel_sector_index'
                  | 'short_term_gov'
                  | 'short_term_non_gov'
                  | 'softs'
                  | 'us'
                  | 'us_index'
                  | 'wet_bulk'
                  | undefined
                'sector.any_of'?:
                  | 'asia'
                  | 'base'
                  | 'biofuels'
                  | 'coal'
                  | 'cross_rates'
                  | 'crude_oil'
                  | 'custom_index'
                  | 'dairy'
                  | 'dj_ubs_ci'
                  | 'electricity'
                  | 'emissions'
                  | 'europe'
                  | 'fertilizer'
                  | 'forestry'
                  | 'grains_and_oilseeds'
                  | 'intl_index'
                  | 'liq_nat_gas_lng'
                  | 'livestock'
                  | 'long_term_gov'
                  | 'long_term_non_gov'
                  | 'majors'
                  | 'minors'
                  | 'nat_gas'
                  | 'nat_gas_liq_petro'
                  | 'precious'
                  | 'refined_products'
                  | 's_and_p_gsci'
                  | 'sel_sector_index'
                  | 'short_term_gov'
                  | 'short_term_non_gov'
                  | 'softs'
                  | 'us'
                  | 'us_index'
                  | 'wet_bulk'
                  | undefined
                sub_sector?:
                  | 'asian'
                  | 'canadian'
                  | 'cat'
                  | 'cooling_degree_days'
                  | 'ercot'
                  | 'european'
                  | 'gulf'
                  | 'heating_degree_days'
                  | 'iso_ne'
                  | 'large_cap_index'
                  | 'mid_cap_index'
                  | 'miso'
                  | 'north_american'
                  | 'nyiso'
                  | 'pjm'
                  | 'small_cap_index'
                  | 'west'
                  | 'western_power'
                  | undefined
                'sub_sector.any_of'?:
                  | 'asian'
                  | 'canadian'
                  | 'cat'
                  | 'cooling_degree_days'
                  | 'ercot'
                  | 'european'
                  | 'gulf'
                  | 'heating_degree_days'
                  | 'iso_ne'
                  | 'large_cap_index'
                  | 'mid_cap_index'
                  | 'miso'
                  | 'north_american'
                  | 'nyiso'
                  | 'pjm'
                  | 'small_cap_index'
                  | 'west'
                  | 'western_power'
                  | undefined
                asset_class?: 'alt_investment' | 'commodity' | 'financials' | undefined
                'asset_class.any_of'?: 'alt_investment' | 'commodity' | 'financials' | undefined
                asset_sub_class?:
                  | 'agricultural'
                  | 'commodity_index'
                  | 'energy'
                  | 'equity'
                  | 'foreign_exchange'
                  | 'freight'
                  | 'housing'
                  | 'interest_rate'
                  | 'metals'
                  | 'weather'
                  | undefined
                'asset_sub_class.any_of'?:
                  | 'agricultural'
                  | 'commodity_index'
                  | 'energy'
                  | 'equity'
                  | 'foreign_exchange'
                  | 'freight'
                  | 'housing'
                  | 'interest_rate'
                  | 'metals'
                  | 'weather'
                  | undefined
                type?: 'single' | 'combo' | undefined
                'type.any_of'?: 'single' | 'combo' | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/futures/v1/quotes/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                session_end_date?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                ask_price?: number | undefined
                ask_size?: number | undefined
                ask_timestamp?: bigint | undefined
                bid_price?: number | undefined
                bid_size?: number | undefined
                bid_timestamp?: bigint | undefined
                channel: number
                report_sequence: bigint
                sequence_number: bigint
                session_end_date?: string | undefined
                ticker: string
                timestamp: bigint
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                session_end_date?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                session_end_date?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/futures/v1/schedules': {
      $get:
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                session_end_date?: string | undefined
                'session_end_date.gt'?: string | undefined
                'session_end_date.gte'?: string | undefined
                'session_end_date.lt'?: string | undefined
                'session_end_date.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                event?: string | undefined
                product_code?: string | undefined
                product_name?: string | undefined
                session_end_date?: string | undefined
                timestamp?: string | undefined
                trading_venue?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                session_end_date?: string | undefined
                'session_end_date.gt'?: string | undefined
                'session_end_date.gte'?: string | undefined
                'session_end_date.lt'?: string | undefined
                'session_end_date.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                session_end_date?: string | undefined
                'session_end_date.gt'?: string | undefined
                'session_end_date.gte'?: string | undefined
                'session_end_date.lt'?: string | undefined
                'session_end_date.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/futures/v1/snapshot': {
      $get:
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                details?:
                  | {
                      product_code?: string | undefined
                      settlement_date?: string | undefined
                      ticker?: string | undefined
                    }
                  | undefined
                last_minute?:
                  | {
                      close?: number | undefined
                      high?: number | undefined
                      last_updated?: bigint | undefined
                      low?: number | undefined
                      open?: number | undefined
                      timeframe?: string | undefined
                      volume?: bigint | undefined
                    }
                  | undefined
                last_quote?:
                  | {
                      ask?: number | undefined
                      ask_size?: number | undefined
                      ask_timestamp?: bigint | undefined
                      bid?: number | undefined
                      bid_size?: number | undefined
                      bid_timestamp?: bigint | undefined
                      last_updated?: bigint | undefined
                      timeframe?: string | undefined
                    }
                  | undefined
                last_trade?:
                  | {
                      last_updated?: bigint | undefined
                      price?: number | undefined
                      size?: bigint | undefined
                      timeframe?: string | undefined
                    }
                  | undefined
                session?:
                  | {
                      change?: number | undefined
                      change_percent?: number | undefined
                      close?: number | undefined
                      high?: number | undefined
                      low?: number | undefined
                      open?: number | undefined
                      previous_settlement?: number | undefined
                      settlement_price?: number | undefined
                      volume?: bigint | undefined
                    }
                  | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                product_code?: string | undefined
                'product_code.any_of'?: string | undefined
                'product_code.gt'?: string | undefined
                'product_code.gte'?: string | undefined
                'product_code.lt'?: string | undefined
                'product_code.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/futures/v1/trades/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                session_end_date?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                channel: number
                price?: number | undefined
                report_sequence: bigint
                sequence_number: bigint
                session_end_date?: string | undefined
                size?: bigint | undefined
                ticker: string
                timestamp: bigint
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                session_end_date?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                session_end_date?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/admin-messages': {
      $get:
        | {
            input: {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                exchange?: bigint | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                exchange: number
                id: string
                message: string
                retransmission?: boolean | undefined
                sequence_number: bigint
                timestamp: bigint
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                exchange?: bigint | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                exchange?: bigint | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/analytics': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                expiration_date?: string | undefined
                contract_type?: 'call' | 'put' | undefined
                'contract_type.any_of'?: 'call' | 'put' | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                ask?: number | undefined
                bid?: number | undefined
                contract_type: string
                date: string
                delta?: number | undefined
                dividend_yield: number
                exercise_style: string
                expiration_date: string
                gamma?: number | undefined
                implied_volatility?: number | undefined
                model: string
                open_interest?: bigint | undefined
                option_price?: number | undefined
                quote_timestamp?: bigint | undefined
                rho?: number | undefined
                risk_free_rate?: number | undefined
                root?: string | undefined
                strike_price: number
                theta?: number | undefined
                ticker: string
                underlying_price?: number | undefined
                underlying_ticker?: string | undefined
                underlying_timestamp?: bigint | undefined
                vega?: number | undefined
                volume: bigint
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                expiration_date?: string | undefined
                contract_type?: 'call' | 'put' | undefined
                'contract_type.any_of'?: 'call' | 'put' | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                expiration_date?: string | undefined
                contract_type?: 'call' | 'put' | undefined
                'contract_type.any_of'?: 'call' | 'put' | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/analytics/expiration': {
      $get:
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                expiration_date?: string | undefined
                'expiration_date.gt'?: string | undefined
                'expiration_date.gte'?: string | undefined
                'expiration_date.lt'?: string | undefined
                'expiration_date.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                date: string
                delta_exposure?: number | undefined
                excluded_open_interest?: bigint | undefined
                expiration_date?: string | undefined
                gamma_exposure?: number | undefined
                gamma_exposure_calls?: number | undefined
                gamma_exposure_puts?: number | undefined
                max_pain?: number | undefined
                open_interest?: bigint | undefined
                open_interest_calls?: bigint | undefined
                open_interest_puts?: bigint | undefined
                open_interest_with_greeks?: bigint | undefined
                underlying_price?: number | undefined
                underlying_ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                expiration_date?: string | undefined
                'expiration_date.gt'?: string | undefined
                'expiration_date.gte'?: string | undefined
                'expiration_date.lt'?: string | undefined
                'expiration_date.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                expiration_date?: string | undefined
                'expiration_date.gt'?: string | undefined
                'expiration_date.gte'?: string | undefined
                'expiration_date.lt'?: string | undefined
                'expiration_date.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/analytics/strike': {
      $get:
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                strike_price?: number | undefined
                'strike_price.gt'?: number | undefined
                'strike_price.gte'?: number | undefined
                'strike_price.lt'?: number | undefined
                'strike_price.lte'?: number | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                date: string
                delta_exposure?: number | undefined
                excluded_open_interest?: bigint | undefined
                gamma_exposure?: number | undefined
                gamma_exposure_calls?: number | undefined
                gamma_exposure_puts?: number | undefined
                open_interest?: bigint | undefined
                open_interest_calls?: bigint | undefined
                open_interest_puts?: bigint | undefined
                open_interest_with_greeks?: bigint | undefined
                strike_price?: number | undefined
                underlying_price?: number | undefined
                underlying_ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                strike_price?: number | undefined
                'strike_price.gt'?: number | undefined
                'strike_price.gte'?: number | undefined
                'strike_price.lt'?: number | undefined
                'strike_price.lte'?: number | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                strike_price?: number | undefined
                'strike_price.gt'?: number | undefined
                'strike_price.gte'?: number | undefined
                'strike_price.lt'?: number | undefined
                'strike_price.lte'?: number | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/analytics/underlying': {
      $get:
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                call_wall?: number | undefined
                date: string
                delta_exposure?: number | undefined
                excluded_open_interest?: bigint | undefined
                gamma_exposure?: number | undefined
                gamma_exposure_calls?: number | undefined
                gamma_exposure_puts?: number | undefined
                gamma_flip?: number | undefined
                open_interest?: bigint | undefined
                open_interest_calls?: bigint | undefined
                open_interest_puts?: bigint | undefined
                open_interest_with_greeks?: bigint | undefined
                put_call_ratio?: number | undefined
                put_wall?: number | undefined
                underlying_price?: number | undefined
                underlying_ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/exchanges': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                acronym?: string | undefined
                id: string
                locale?: string | undefined
                mic?: string | undefined
                name: string
                operating_mic?: string | undefined
                participant_id?: string | undefined
                type: string
                url?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/open-interest': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                root?: string | undefined
                'root.any_of'?: string | undefined
                'root.gt'?: string | undefined
                'root.gte'?: string | undefined
                'root.lt'?: string | undefined
                'root.lte'?: string | undefined
                contract_type?: 'call' | 'put' | undefined
                'contract_type.any_of'?: 'call' | 'put' | undefined
                expiration_date?: string | undefined
                'expiration_date.gt'?: string | undefined
                'expiration_date.gte'?: string | undefined
                'expiration_date.lt'?: string | undefined
                'expiration_date.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                contract_type?: string | undefined
                date: string
                expiration_date?: string | undefined
                open_interest?: bigint | undefined
                root?: string | undefined
                strike_price?: number | undefined
                ticker: string
                underlying_ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                root?: string | undefined
                'root.any_of'?: string | undefined
                'root.gt'?: string | undefined
                'root.gte'?: string | undefined
                'root.lt'?: string | undefined
                'root.lte'?: string | undefined
                contract_type?: 'call' | 'put' | undefined
                'contract_type.any_of'?: 'call' | 'put' | undefined
                expiration_date?: string | undefined
                'expiration_date.gt'?: string | undefined
                'expiration_date.gte'?: string | undefined
                'expiration_date.lt'?: string | undefined
                'expiration_date.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                root?: string | undefined
                'root.any_of'?: string | undefined
                'root.gt'?: string | undefined
                'root.gte'?: string | undefined
                'root.lt'?: string | undefined
                'root.lte'?: string | undefined
                contract_type?: 'call' | 'put' | undefined
                'contract_type.any_of'?: 'call' | 'put' | undefined
                expiration_date?: string | undefined
                'expiration_date.gt'?: string | undefined
                'expiration_date.gte'?: string | undefined
                'expiration_date.lt'?: string | undefined
                'expiration_date.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/open-interest/underlying': {
      $get:
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                'underlying_ticker.gt'?: string | undefined
                'underlying_ticker.gte'?: string | undefined
                'underlying_ticker.lt'?: string | undefined
                'underlying_ticker.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                date: string
                open_interest?: bigint | undefined
                open_interest_calls: bigint
                open_interest_puts: bigint
                underlying_ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                'underlying_ticker.gt'?: string | undefined
                'underlying_ticker.gte'?: string | undefined
                'underlying_ticker.lt'?: string | undefined
                'underlying_ticker.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                'underlying_ticker.any_of'?: string | undefined
                'underlying_ticker.gt'?: string | undefined
                'underlying_ticker.gte'?: string | undefined
                'underlying_ticker.lt'?: string | undefined
                'underlying_ticker.lte'?: string | undefined
                date?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v1/unusual-trades': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                sip_timestamp?: string | undefined
                'sip_timestamp.gt'?: string | undefined
                'sip_timestamp.gte'?: string | undefined
                'sip_timestamp.lt'?: string | undefined
                'sip_timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                conditions?: number[] | undefined
                exchange?: number | undefined
                flags?: string[] | undefined
                price?: number | undefined
                root?: string | undefined
                sequence_number: bigint
                sip_timestamp: bigint
                size?: bigint | undefined
                ticker: string
                underlying_ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                sip_timestamp?: string | undefined
                'sip_timestamp.gt'?: string | undefined
                'sip_timestamp.gte'?: string | undefined
                'sip_timestamp.lt'?: string | undefined
                'sip_timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                sip_timestamp?: string | undefined
                'sip_timestamp.gt'?: string | undefined
                'sip_timestamp.gte'?: string | undefined
                'sip_timestamp.lt'?: string | undefined
                'sip_timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v3/quotes/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                ask_exchange: number
                ask_price: number
                ask_size: bigint
                bid_exchange: number
                bid_price: number
                bid_size: bigint
                sequence_number: bigint
                sip_timestamp?: bigint | undefined
                ticker: string
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/options/v3/trades/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                conditions?: number[] | undefined
                exchange: number
                participant_timestamp?: bigint | undefined
                price: number
                sequence_number?: bigint | undefined
                sip_timestamp?: bigint | undefined
                size: bigint
                ticker: string
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.lt'?: string | undefined
                'timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/dev/trades/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } } & {
              query: {
                sip_timestamp?: string | undefined
                'sip_timestamp.gt'?: string | undefined
                'sip_timestamp.gte'?: string | undefined
                'sip_timestamp.lt'?: string | undefined
                'sip_timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                conditions?: number[] | undefined
                correction?: bigint | undefined
                exchange?: number | undefined
                id?: string | undefined
                participant_timestamp?: bigint | undefined
                price: number
                sequence_number: bigint
                sip_timestamp: bigint
                size: number
                size_fraction: bigint
                tape?: number | undefined
                ticker: string
                trf_id?: number | undefined
                trf_timestamp?: bigint | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                sip_timestamp?: string | undefined
                'sip_timestamp.gt'?: string | undefined
                'sip_timestamp.gte'?: string | undefined
                'sip_timestamp.lt'?: string | undefined
                'sip_timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & {
              query: {
                sip_timestamp?: string | undefined
                'sip_timestamp.gt'?: string | undefined
                'sip_timestamp.gte'?: string | undefined
                'sip_timestamp.lt'?: string | undefined
                'sip_timestamp.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/10-K/vX/sections': {
      $get:
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                section?: 'business' | 'risk_factors' | undefined
                'section.any_of'?: 'business' | 'risk_factors' | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                cik?: string | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                period_end?: string | undefined
                section?: string | undefined
                text?: string | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                section?: 'business' | 'risk_factors' | undefined
                'section.any_of'?: 'business' | 'risk_factors' | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                section?: 'business' | 'risk_factors' | undefined
                'section.any_of'?: 'business' | 'risk_factors' | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/10-K/vX_0/sections': {
      $get:
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                section?: 'business' | 'risk_factors' | undefined
                'section.any_of'?: 'business' | 'risk_factors' | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                cik?: string | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                period_end?: string | undefined
                section?: string | undefined
                text?: string | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                section?: 'business' | 'risk_factors' | undefined
                'section.any_of'?: 'business' | 'risk_factors' | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                section?: 'business' | 'risk_factors' | undefined
                'section.any_of'?: 'business' | 'risk_factors' | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/8-K/vX/disclosures': {
      $get:
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                filing_date?: string | undefined
                'filing_date.any_of'?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                tertiary_category?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                accession_number?: string | undefined
                cik?: string | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                primary_category?: string | undefined
                secondary_category?: string | undefined
                supporting_text?: string | undefined
                tertiary_category?: string | undefined
                tickers?: string[] | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                filing_date?: string | undefined
                'filing_date.any_of'?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                tertiary_category?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                filing_date?: string | undefined
                'filing_date.any_of'?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                tertiary_category?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/8-K/vX/text': {
      $get:
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                form_type?: string | undefined
                'form_type.any_of'?: string | undefined
                'form_type.gt'?: string | undefined
                'form_type.gte'?: string | undefined
                'form_type.lt'?: string | undefined
                'form_type.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                accession_number?: string | undefined
                cik?: string | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                form_type?: string | undefined
                items_text?: string | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                form_type?: string | undefined
                'form_type.any_of'?: string | undefined
                'form_type.gt'?: string | undefined
                'form_type.gte'?: string | undefined
                'form_type.lt'?: string | undefined
                'form_type.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                form_type?: string | undefined
                'form_type.any_of'?: string | undefined
                'form_type.gt'?: string | undefined
                'form_type.gte'?: string | undefined
                'form_type.lt'?: string | undefined
                'form_type.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/vX/13-F': {
      $get:
        | {
            input: {
              query: {
                filer_cik?: string | undefined
                'filer_cik.any_of'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                accession_number?: string | undefined
                cusip?: string | undefined
                file_number?: string | undefined
                filer_cik?: string | undefined
                filer_name?: string | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                film_number?: string | undefined
                form_type?: string | undefined
                investment_discretion?: string | undefined
                issuer_name?: string | undefined
                market_value?: bigint | undefined
                other_managers?: string[] | undefined
                period?: string | undefined
                put_call?: string | undefined
                shares_or_principal_amount?: bigint | undefined
                shares_or_principal_type?: string | undefined
                title_of_class?: string | undefined
                voting_authority_none?: bigint | undefined
                voting_authority_shared?: bigint | undefined
                voting_authority_sole?: bigint | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filer_cik?: string | undefined
                'filer_cik.any_of'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                filer_cik?: string | undefined
                'filer_cik.any_of'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/vX/form-3': {
      $get:
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                accession_number?: string | undefined
                aff_10b5_one?: boolean | undefined
                date_of_original_submission?: string | undefined
                direct_or_indirect?: string | undefined
                exercise_date?: string | undefined
                exercise_price?: number | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                footnotes?:
                  | { description?: string | undefined; id?: string | undefined }[]
                  | undefined
                form_type?: string | undefined
                is_director?: boolean | undefined
                is_officer?: boolean | undefined
                is_other?: boolean | undefined
                is_ten_percent_owner?: boolean | undefined
                issuer_cik?: string | undefined
                issuer_name?: string | undefined
                nature_of_ownership?: string | undefined
                not_subject_to_section_16?: boolean | undefined
                officer_title?: string | undefined
                owner_cik?: string | undefined
                owner_name?: string | undefined
                period_of_report?: string | undefined
                remarks?: string | undefined
                security_title?: string | undefined
                security_type?: string | undefined
                shares_owned?: number | undefined
                tickers?: string[] | undefined
                underlying_security_shares?: number | undefined
                underlying_security_title?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/vX/form-4': {
      $get:
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                transaction_code?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                accession_number?: string | undefined
                aff_10b5_one?: boolean | undefined
                date_of_original_submission?: string | undefined
                deemed_execution_date?: string | undefined
                direct_or_indirect?: string | undefined
                equity_swap_involved?: boolean | undefined
                exercise_date?: string | undefined
                exercise_price?: number | undefined
                expiration_date?: string | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                footnotes?:
                  | { description?: string | undefined; id?: string | undefined }[]
                  | undefined
                form_type?: string | undefined
                is_director?: boolean | undefined
                is_officer?: boolean | undefined
                is_other?: boolean | undefined
                is_ten_percent_owner?: boolean | undefined
                issuer_cik?: string | undefined
                issuer_name?: string | undefined
                nature_of_ownership?: string | undefined
                not_subject_to_section_16?: boolean | undefined
                officer_title?: string | undefined
                owner_cik?: string | undefined
                owner_name?: string | undefined
                period_of_report?: string | undefined
                record_type?: string | undefined
                remarks?: string | undefined
                security_title?: string | undefined
                security_type?: string | undefined
                shares_owned_following_transaction?: number | undefined
                tickers?: string[] | undefined
                transaction_acquired_disposed?: string | undefined
                transaction_code?: string | undefined
                transaction_date?: string | undefined
                transaction_price_per_share?: number | undefined
                transaction_shares?: number | undefined
                transaction_timeliness?: string | undefined
                transaction_value?: number | undefined
                underlying_security_shares?: number | undefined
                underlying_security_title?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                transaction_code?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                transaction_code?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/vX/form-5': {
      $get:
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                transaction_code?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                accession_number?: string | undefined
                aff_10b5_one?: boolean | undefined
                date_of_original_submission?: string | undefined
                deemed_execution_date?: string | undefined
                direct_or_indirect?: string | undefined
                equity_swap_involved?: boolean | undefined
                exercise_date?: string | undefined
                exercise_price?: number | undefined
                expiration_date?: string | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                footnotes?:
                  | { description?: string | undefined; id?: string | undefined }[]
                  | undefined
                form3_holdings_reported?: boolean | undefined
                form4_transactions_reported?: boolean | undefined
                form_type?: string | undefined
                is_director?: boolean | undefined
                is_officer?: boolean | undefined
                is_other?: boolean | undefined
                is_ten_percent_owner?: boolean | undefined
                issuer_cik?: string | undefined
                issuer_name?: string | undefined
                nature_of_ownership?: string | undefined
                not_subject_to_section_16?: boolean | undefined
                officer_title?: string | undefined
                owner_cik?: string | undefined
                owner_name?: string | undefined
                period_of_report?: string | undefined
                record_type?: string | undefined
                remarks?: string | undefined
                security_title?: string | undefined
                security_type?: string | undefined
                shares_owned_following_transaction?: number | undefined
                tickers?: string[] | undefined
                transaction_acquired_disposed?: string | undefined
                transaction_code?: string | undefined
                transaction_date?: string | undefined
                transaction_form_type?: string | undefined
                transaction_price_per_share?: number | undefined
                transaction_shares?: number | undefined
                transaction_timeliness?: string | undefined
                transaction_value?: number | undefined
                underlying_security_shares?: number | undefined
                underlying_security_title?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                transaction_code?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                form_type?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                transaction_code?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/vX/index': {
      $get:
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                form_type?: string | undefined
                'form_type.any_of'?: string | undefined
                'form_type.gt'?: string | undefined
                'form_type.gte'?: string | undefined
                'form_type.lt'?: string | undefined
                'form_type.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                accession_number?: string | undefined
                cik?: string | undefined
                filing_date?: string | undefined
                filing_url?: string | undefined
                form_type?: string | undefined
                issuer_name?: string | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                form_type?: string | undefined
                'form_type.any_of'?: string | undefined
                'form_type.gt'?: string | undefined
                'form_type.gte'?: string | undefined
                'form_type.lt'?: string | undefined
                'form_type.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                form_type?: string | undefined
                'form_type.any_of'?: string | undefined
                'form_type.gt'?: string | undefined
                'form_type.gte'?: string | undefined
                'form_type.lt'?: string | undefined
                'form_type.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/filings/vX/risk-factors': {
      $get:
        | {
            input: {
              query: {
                filing_date?: string | undefined
                'filing_date.any_of'?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                cik?: string | undefined
                filing_date?: string | undefined
                primary_category?: string | undefined
                secondary_category?: string | undefined
                supporting_text?: string | undefined
                tertiary_category?: string | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filing_date?: string | undefined
                'filing_date.any_of'?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                filing_date?: string | undefined
                'filing_date.any_of'?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/financials/v1/balance-sheets': {
      $get:
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                accounts_payable?: number | undefined
                accrued_and_other_current_liabilities?: number | undefined
                accumulated_other_comprehensive_income?: number | undefined
                additional_paid_in_capital?: number | undefined
                cash_and_equivalents?: number | undefined
                cik?: string | undefined
                commitments_and_contingencies?: number | undefined
                common_stock?: number | undefined
                debt_current?: number | undefined
                deferred_revenue_current?: number | undefined
                filing_date?: string | undefined
                fiscal_quarter?: bigint | undefined
                fiscal_year?: bigint | undefined
                goodwill?: number | undefined
                intangible_assets_net?: number | undefined
                inventories?: number | undefined
                long_term_debt_and_capital_lease_obligations?: number | undefined
                noncontrolling_interest?: number | undefined
                other_assets?: number | undefined
                other_current_assets?: number | undefined
                other_equity?: number | undefined
                other_noncurrent_liabilities?: number | undefined
                period_end?: string | undefined
                preferred_stock?: number | undefined
                property_plant_equipment_net?: number | undefined
                receivables?: number | undefined
                retained_earnings_deficit?: number | undefined
                short_term_investments?: number | undefined
                tickers?: string[] | undefined
                timeframe: string
                total_assets?: number | undefined
                total_current_assets?: number | undefined
                total_current_liabilities?: number | undefined
                total_equity?: number | undefined
                total_equity_attributable_to_parent?: number | undefined
                total_liabilities?: number | undefined
                total_liabilities_and_equity?: number | undefined
                treasury_stock?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/financials/v1/cash-flow-statements': {
      $get:
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                cash_from_operating_activities_continuing_operations?: number | undefined
                change_in_cash_and_equivalents?: number | undefined
                change_in_other_operating_assets_and_liabilities_net?: number | undefined
                cik?: string | undefined
                depreciation_depletion_and_amortization?: number | undefined
                dividends?: number | undefined
                effect_of_currency_exchange_rate?: number | undefined
                filing_date?: string | undefined
                fiscal_quarter?: bigint | undefined
                fiscal_year?: bigint | undefined
                income_loss_from_discontinued_operations?: number | undefined
                long_term_debt_issuances_repayments?: number | undefined
                net_cash_from_financing_activities?: number | undefined
                net_cash_from_financing_activities_continuing_operations?: number | undefined
                net_cash_from_financing_activities_discontinued_operations?: number | undefined
                net_cash_from_investing_activities?: number | undefined
                net_cash_from_investing_activities_continuing_operations?: number | undefined
                net_cash_from_investing_activities_discontinued_operations?: number | undefined
                net_cash_from_operating_activities?: number | undefined
                net_cash_from_operating_activities_discontinued_operations?: number | undefined
                net_income?: number | undefined
                noncontrolling_interests?: number | undefined
                other_cash_adjustments?: number | undefined
                other_financing_activities?: number | undefined
                other_investing_activities?: number | undefined
                other_operating_activities?: number | undefined
                period_end?: string | undefined
                purchase_of_property_plant_and_equipment?: number | undefined
                sale_of_property_plant_and_equipment?: number | undefined
                short_term_debt_issuances_repayments?: number | undefined
                tickers?: string[] | undefined
                timeframe?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/financials/v1/income-statements': {
      $get:
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                basic_earnings_per_share?: number | undefined
                basic_shares_outstanding?: number | undefined
                cik?: string | undefined
                consolidated_net_income_loss?: number | undefined
                cost_of_revenue?: number | undefined
                depreciation_depletion_amortization?: number | undefined
                diluted_earnings_per_share?: number | undefined
                diluted_shares_outstanding?: number | undefined
                discontinued_operations?: number | undefined
                ebitda?: number | undefined
                equity_in_affiliates?: number | undefined
                extraordinary_items?: number | undefined
                filing_date?: string | undefined
                fiscal_quarter?: bigint | undefined
                fiscal_year?: bigint | undefined
                gross_profit?: number | undefined
                income_before_income_taxes?: number | undefined
                income_taxes?: number | undefined
                interest_expense?: number | undefined
                interest_income?: number | undefined
                net_income_loss_attributable_common_shareholders?: number | undefined
                noncontrolling_interest?: number | undefined
                operating_income?: number | undefined
                other_income_expense?: number | undefined
                other_operating_expenses?: number | undefined
                period_end?: string | undefined
                preferred_stock_dividends_declared?: number | undefined
                research_development?: number | undefined
                revenue?: number | undefined
                selling_general_administrative?: number | undefined
                tickers?: string[] | undefined
                timeframe?: string | undefined
                total_operating_expenses?: number | undefined
                total_other_income_expense?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                period_end?: string | undefined
                'period_end.gt'?: string | undefined
                'period_end.gte'?: string | undefined
                'period_end.lt'?: string | undefined
                'period_end.lte'?: string | undefined
                filing_date?: string | undefined
                'filing_date.gt'?: string | undefined
                'filing_date.gte'?: string | undefined
                'filing_date.lt'?: string | undefined
                'filing_date.lte'?: string | undefined
                fiscal_year?: bigint | undefined
                'fiscal_year.gt'?: bigint | undefined
                'fiscal_year.gte'?: bigint | undefined
                'fiscal_year.lt'?: bigint | undefined
                'fiscal_year.lte'?: bigint | undefined
                fiscal_quarter?: bigint | undefined
                'fiscal_quarter.gt'?: bigint | undefined
                'fiscal_quarter.gte'?: bigint | undefined
                'fiscal_quarter.lt'?: bigint | undefined
                'fiscal_quarter.lte'?: bigint | undefined
                timeframe?: string | undefined
                'timeframe.any_of'?: string | undefined
                'timeframe.gt'?: string | undefined
                'timeframe.gte'?: string | undefined
                'timeframe.lt'?: string | undefined
                'timeframe.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/financials/v1/ratios': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                price?: number | undefined
                'price.gt'?: number | undefined
                'price.gte'?: number | undefined
                'price.lt'?: number | undefined
                'price.lte'?: number | undefined
                average_volume?: number | undefined
                'average_volume.gt'?: number | undefined
                'average_volume.gte'?: number | undefined
                'average_volume.lt'?: number | undefined
                'average_volume.lte'?: number | undefined
                market_cap?: number | undefined
                'market_cap.gt'?: number | undefined
                'market_cap.gte'?: number | undefined
                'market_cap.lt'?: number | undefined
                'market_cap.lte'?: number | undefined
                earnings_per_share?: number | undefined
                'earnings_per_share.gt'?: number | undefined
                'earnings_per_share.gte'?: number | undefined
                'earnings_per_share.lt'?: number | undefined
                'earnings_per_share.lte'?: number | undefined
                price_to_earnings?: number | undefined
                'price_to_earnings.gt'?: number | undefined
                'price_to_earnings.gte'?: number | undefined
                'price_to_earnings.lt'?: number | undefined
                'price_to_earnings.lte'?: number | undefined
                price_to_book?: number | undefined
                'price_to_book.gt'?: number | undefined
                'price_to_book.gte'?: number | undefined
                'price_to_book.lt'?: number | undefined
                'price_to_book.lte'?: number | undefined
                price_to_sales?: number | undefined
                'price_to_sales.gt'?: number | undefined
                'price_to_sales.gte'?: number | undefined
                'price_to_sales.lt'?: number | undefined
                'price_to_sales.lte'?: number | undefined
                price_to_cash_flow?: number | undefined
                'price_to_cash_flow.gt'?: number | undefined
                'price_to_cash_flow.gte'?: number | undefined
                'price_to_cash_flow.lt'?: number | undefined
                'price_to_cash_flow.lte'?: number | undefined
                price_to_free_cash_flow?: number | undefined
                'price_to_free_cash_flow.gt'?: number | undefined
                'price_to_free_cash_flow.gte'?: number | undefined
                'price_to_free_cash_flow.lt'?: number | undefined
                'price_to_free_cash_flow.lte'?: number | undefined
                dividend_yield?: number | undefined
                'dividend_yield.gt'?: number | undefined
                'dividend_yield.gte'?: number | undefined
                'dividend_yield.lt'?: number | undefined
                'dividend_yield.lte'?: number | undefined
                return_on_assets?: number | undefined
                'return_on_assets.gt'?: number | undefined
                'return_on_assets.gte'?: number | undefined
                'return_on_assets.lt'?: number | undefined
                'return_on_assets.lte'?: number | undefined
                return_on_equity?: number | undefined
                'return_on_equity.gt'?: number | undefined
                'return_on_equity.gte'?: number | undefined
                'return_on_equity.lt'?: number | undefined
                'return_on_equity.lte'?: number | undefined
                debt_to_equity?: number | undefined
                'debt_to_equity.gt'?: number | undefined
                'debt_to_equity.gte'?: number | undefined
                'debt_to_equity.lt'?: number | undefined
                'debt_to_equity.lte'?: number | undefined
                current?: number | undefined
                'current.gt'?: number | undefined
                'current.gte'?: number | undefined
                'current.lt'?: number | undefined
                'current.lte'?: number | undefined
                quick?: number | undefined
                'quick.gt'?: number | undefined
                'quick.gte'?: number | undefined
                'quick.lt'?: number | undefined
                'quick.lte'?: number | undefined
                cash?: number | undefined
                'cash.gt'?: number | undefined
                'cash.gte'?: number | undefined
                'cash.lt'?: number | undefined
                'cash.lte'?: number | undefined
                ev_to_sales?: number | undefined
                'ev_to_sales.gt'?: number | undefined
                'ev_to_sales.gte'?: number | undefined
                'ev_to_sales.lt'?: number | undefined
                'ev_to_sales.lte'?: number | undefined
                ev_to_ebitda?: number | undefined
                'ev_to_ebitda.gt'?: number | undefined
                'ev_to_ebitda.gte'?: number | undefined
                'ev_to_ebitda.lt'?: number | undefined
                'ev_to_ebitda.lte'?: number | undefined
                enterprise_value?: number | undefined
                'enterprise_value.gt'?: number | undefined
                'enterprise_value.gte'?: number | undefined
                'enterprise_value.lt'?: number | undefined
                'enterprise_value.lte'?: number | undefined
                free_cash_flow?: number | undefined
                'free_cash_flow.gt'?: number | undefined
                'free_cash_flow.gte'?: number | undefined
                'free_cash_flow.lt'?: number | undefined
                'free_cash_flow.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                average_volume?: number | undefined
                cash?: number | undefined
                cik?: string | undefined
                current?: number | undefined
                date: string
                debt_to_equity?: number | undefined
                dividend_yield?: number | undefined
                earnings_per_share?: number | undefined
                enterprise_value?: number | undefined
                ev_to_ebitda?: number | undefined
                ev_to_sales?: number | undefined
                free_cash_flow?: number | undefined
                market_cap?: number | undefined
                price: number
                price_to_book?: number | undefined
                price_to_cash_flow?: number | undefined
                price_to_earnings?: number | undefined
                price_to_free_cash_flow?: number | undefined
                price_to_sales?: number | undefined
                quick?: number | undefined
                return_on_assets?: number | undefined
                return_on_equity?: number | undefined
                ticker: string
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                price?: number | undefined
                'price.gt'?: number | undefined
                'price.gte'?: number | undefined
                'price.lt'?: number | undefined
                'price.lte'?: number | undefined
                average_volume?: number | undefined
                'average_volume.gt'?: number | undefined
                'average_volume.gte'?: number | undefined
                'average_volume.lt'?: number | undefined
                'average_volume.lte'?: number | undefined
                market_cap?: number | undefined
                'market_cap.gt'?: number | undefined
                'market_cap.gte'?: number | undefined
                'market_cap.lt'?: number | undefined
                'market_cap.lte'?: number | undefined
                earnings_per_share?: number | undefined
                'earnings_per_share.gt'?: number | undefined
                'earnings_per_share.gte'?: number | undefined
                'earnings_per_share.lt'?: number | undefined
                'earnings_per_share.lte'?: number | undefined
                price_to_earnings?: number | undefined
                'price_to_earnings.gt'?: number | undefined
                'price_to_earnings.gte'?: number | undefined
                'price_to_earnings.lt'?: number | undefined
                'price_to_earnings.lte'?: number | undefined
                price_to_book?: number | undefined
                'price_to_book.gt'?: number | undefined
                'price_to_book.gte'?: number | undefined
                'price_to_book.lt'?: number | undefined
                'price_to_book.lte'?: number | undefined
                price_to_sales?: number | undefined
                'price_to_sales.gt'?: number | undefined
                'price_to_sales.gte'?: number | undefined
                'price_to_sales.lt'?: number | undefined
                'price_to_sales.lte'?: number | undefined
                price_to_cash_flow?: number | undefined
                'price_to_cash_flow.gt'?: number | undefined
                'price_to_cash_flow.gte'?: number | undefined
                'price_to_cash_flow.lt'?: number | undefined
                'price_to_cash_flow.lte'?: number | undefined
                price_to_free_cash_flow?: number | undefined
                'price_to_free_cash_flow.gt'?: number | undefined
                'price_to_free_cash_flow.gte'?: number | undefined
                'price_to_free_cash_flow.lt'?: number | undefined
                'price_to_free_cash_flow.lte'?: number | undefined
                dividend_yield?: number | undefined
                'dividend_yield.gt'?: number | undefined
                'dividend_yield.gte'?: number | undefined
                'dividend_yield.lt'?: number | undefined
                'dividend_yield.lte'?: number | undefined
                return_on_assets?: number | undefined
                'return_on_assets.gt'?: number | undefined
                'return_on_assets.gte'?: number | undefined
                'return_on_assets.lt'?: number | undefined
                'return_on_assets.lte'?: number | undefined
                return_on_equity?: number | undefined
                'return_on_equity.gt'?: number | undefined
                'return_on_equity.gte'?: number | undefined
                'return_on_equity.lt'?: number | undefined
                'return_on_equity.lte'?: number | undefined
                debt_to_equity?: number | undefined
                'debt_to_equity.gt'?: number | undefined
                'debt_to_equity.gte'?: number | undefined
                'debt_to_equity.lt'?: number | undefined
                'debt_to_equity.lte'?: number | undefined
                current?: number | undefined
                'current.gt'?: number | undefined
                'current.gte'?: number | undefined
                'current.lt'?: number | undefined
                'current.lte'?: number | undefined
                quick?: number | undefined
                'quick.gt'?: number | undefined
                'quick.gte'?: number | undefined
                'quick.lt'?: number | undefined
                'quick.lte'?: number | undefined
                cash?: number | undefined
                'cash.gt'?: number | undefined
                'cash.gte'?: number | undefined
                'cash.lt'?: number | undefined
                'cash.lte'?: number | undefined
                ev_to_sales?: number | undefined
                'ev_to_sales.gt'?: number | undefined
                'ev_to_sales.gte'?: number | undefined
                'ev_to_sales.lt'?: number | undefined
                'ev_to_sales.lte'?: number | undefined
                ev_to_ebitda?: number | undefined
                'ev_to_ebitda.gt'?: number | undefined
                'ev_to_ebitda.gte'?: number | undefined
                'ev_to_ebitda.lt'?: number | undefined
                'ev_to_ebitda.lte'?: number | undefined
                enterprise_value?: number | undefined
                'enterprise_value.gt'?: number | undefined
                'enterprise_value.gte'?: number | undefined
                'enterprise_value.lt'?: number | undefined
                'enterprise_value.lte'?: number | undefined
                free_cash_flow?: number | undefined
                'free_cash_flow.gt'?: number | undefined
                'free_cash_flow.gte'?: number | undefined
                'free_cash_flow.lt'?: number | undefined
                'free_cash_flow.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                cik?: string | undefined
                'cik.any_of'?: string | undefined
                'cik.gt'?: string | undefined
                'cik.gte'?: string | undefined
                'cik.lt'?: string | undefined
                'cik.lte'?: string | undefined
                price?: number | undefined
                'price.gt'?: number | undefined
                'price.gte'?: number | undefined
                'price.lt'?: number | undefined
                'price.lte'?: number | undefined
                average_volume?: number | undefined
                'average_volume.gt'?: number | undefined
                'average_volume.gte'?: number | undefined
                'average_volume.lt'?: number | undefined
                'average_volume.lte'?: number | undefined
                market_cap?: number | undefined
                'market_cap.gt'?: number | undefined
                'market_cap.gte'?: number | undefined
                'market_cap.lt'?: number | undefined
                'market_cap.lte'?: number | undefined
                earnings_per_share?: number | undefined
                'earnings_per_share.gt'?: number | undefined
                'earnings_per_share.gte'?: number | undefined
                'earnings_per_share.lt'?: number | undefined
                'earnings_per_share.lte'?: number | undefined
                price_to_earnings?: number | undefined
                'price_to_earnings.gt'?: number | undefined
                'price_to_earnings.gte'?: number | undefined
                'price_to_earnings.lt'?: number | undefined
                'price_to_earnings.lte'?: number | undefined
                price_to_book?: number | undefined
                'price_to_book.gt'?: number | undefined
                'price_to_book.gte'?: number | undefined
                'price_to_book.lt'?: number | undefined
                'price_to_book.lte'?: number | undefined
                price_to_sales?: number | undefined
                'price_to_sales.gt'?: number | undefined
                'price_to_sales.gte'?: number | undefined
                'price_to_sales.lt'?: number | undefined
                'price_to_sales.lte'?: number | undefined
                price_to_cash_flow?: number | undefined
                'price_to_cash_flow.gt'?: number | undefined
                'price_to_cash_flow.gte'?: number | undefined
                'price_to_cash_flow.lt'?: number | undefined
                'price_to_cash_flow.lte'?: number | undefined
                price_to_free_cash_flow?: number | undefined
                'price_to_free_cash_flow.gt'?: number | undefined
                'price_to_free_cash_flow.gte'?: number | undefined
                'price_to_free_cash_flow.lt'?: number | undefined
                'price_to_free_cash_flow.lte'?: number | undefined
                dividend_yield?: number | undefined
                'dividend_yield.gt'?: number | undefined
                'dividend_yield.gte'?: number | undefined
                'dividend_yield.lt'?: number | undefined
                'dividend_yield.lte'?: number | undefined
                return_on_assets?: number | undefined
                'return_on_assets.gt'?: number | undefined
                'return_on_assets.gte'?: number | undefined
                'return_on_assets.lt'?: number | undefined
                'return_on_assets.lte'?: number | undefined
                return_on_equity?: number | undefined
                'return_on_equity.gt'?: number | undefined
                'return_on_equity.gte'?: number | undefined
                'return_on_equity.lt'?: number | undefined
                'return_on_equity.lte'?: number | undefined
                debt_to_equity?: number | undefined
                'debt_to_equity.gt'?: number | undefined
                'debt_to_equity.gte'?: number | undefined
                'debt_to_equity.lt'?: number | undefined
                'debt_to_equity.lte'?: number | undefined
                current?: number | undefined
                'current.gt'?: number | undefined
                'current.gte'?: number | undefined
                'current.lt'?: number | undefined
                'current.lte'?: number | undefined
                quick?: number | undefined
                'quick.gt'?: number | undefined
                'quick.gte'?: number | undefined
                'quick.lt'?: number | undefined
                'quick.lte'?: number | undefined
                cash?: number | undefined
                'cash.gt'?: number | undefined
                'cash.gte'?: number | undefined
                'cash.lt'?: number | undefined
                'cash.lte'?: number | undefined
                ev_to_sales?: number | undefined
                'ev_to_sales.gt'?: number | undefined
                'ev_to_sales.gte'?: number | undefined
                'ev_to_sales.lt'?: number | undefined
                'ev_to_sales.lte'?: number | undefined
                ev_to_ebitda?: number | undefined
                'ev_to_ebitda.gt'?: number | undefined
                'ev_to_ebitda.gte'?: number | undefined
                'ev_to_ebitda.lt'?: number | undefined
                'ev_to_ebitda.lte'?: number | undefined
                enterprise_value?: number | undefined
                'enterprise_value.gt'?: number | undefined
                'enterprise_value.gte'?: number | undefined
                'enterprise_value.lt'?: number | undefined
                'enterprise_value.lte'?: number | undefined
                free_cash_flow?: number | undefined
                'free_cash_flow.gt'?: number | undefined
                'free_cash_flow.gte'?: number | undefined
                'free_cash_flow.lt'?: number | undefined
                'free_cash_flow.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/insiders/vX/activity': {
      $get:
        | {
            input: {
              query: {
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                transaction_date?: string | undefined
                'transaction_date.gt'?: string | undefined
                'transaction_date.gte'?: string | undefined
                'transaction_date.lt'?: string | undefined
                'transaction_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                issuer_cik?: string | undefined
                issuer_name?: string | undefined
                last_filing_date?: string | undefined
                net_shares: number
                net_value: number
                planned_purchase_value: number
                planned_sale_value: number
                purchase_count: bigint
                purchase_shares: number
                purchase_value: number
                purchaser_count: bigint
                sale_count: bigint
                sale_shares: number
                sale_value: number
                seller_count: bigint
                tickers?: string[] | undefined
                transaction_date?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                transaction_date?: string | undefined
                'transaction_date.gt'?: string | undefined
                'transaction_date.gte'?: string | undefined
                'transaction_date.lt'?: string | undefined
                'transaction_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                transaction_date?: string | undefined
                'transaction_date.gt'?: string | undefined
                'transaction_date.gte'?: string | undefined
                'transaction_date.lt'?: string | undefined
                'transaction_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/insiders/vX/holdings': {
      $get:
        | {
            input: {
              query: {
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                last_filing_date?: string | undefined
                'last_filing_date.gt'?: string | undefined
                'last_filing_date.gte'?: string | undefined
                'last_filing_date.lt'?: string | undefined
                'last_filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                filing_count: bigint
                first_filing_date?: string | undefined
                issuer_cik?: string | undefined
                issuer_name?: string | undefined
                last_filing_date?: string | undefined
                officer_title?: string | undefined
                oldest_position_date?: string | undefined
                owner_cik?: string | undefined
                owner_name?: string | undefined
                ownership_pct?: number | undefined
                position_count?: bigint | undefined
                roles?: string[] | undefined
                shares_owned?: number | undefined
                shares_owned_direct?: number | undefined
                shares_owned_indirect?: number | undefined
                tickers?: string[] | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                last_filing_date?: string | undefined
                'last_filing_date.gt'?: string | undefined
                'last_filing_date.gte'?: string | undefined
                'last_filing_date.lt'?: string | undefined
                'last_filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tickers?: string | undefined
                'tickers.all_of'?: string | undefined
                'tickers.any_of'?: string | undefined
                issuer_cik?: string | undefined
                'issuer_cik.any_of'?: string | undefined
                owner_cik?: string | undefined
                'owner_cik.any_of'?: string | undefined
                last_filing_date?: string | undefined
                'last_filing_date.gt'?: string | undefined
                'last_filing_date.gte'?: string | undefined
                'last_filing_date.lt'?: string | undefined
                'last_filing_date.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/taxonomies/vX/disclosures': {
      $get:
        | {
            input: {
              query: {
                taxonomy?: string | undefined
                'taxonomy.any_of'?: string | undefined
                'taxonomy.gt'?: string | undefined
                'taxonomy.gte'?: string | undefined
                'taxonomy.lt'?: string | undefined
                'taxonomy.lte'?: string | undefined
                primary_category?: string | undefined
                'primary_category.any_of'?: string | undefined
                'primary_category.gt'?: string | undefined
                'primary_category.gte'?: string | undefined
                'primary_category.lt'?: string | undefined
                'primary_category.lte'?: string | undefined
                secondary_category?: string | undefined
                'secondary_category.any_of'?: string | undefined
                'secondary_category.gt'?: string | undefined
                'secondary_category.gte'?: string | undefined
                'secondary_category.lt'?: string | undefined
                'secondary_category.lte'?: string | undefined
                tertiary_category?: string | undefined
                'tertiary_category.any_of'?: string | undefined
                'tertiary_category.gt'?: string | undefined
                'tertiary_category.gte'?: string | undefined
                'tertiary_category.lt'?: string | undefined
                'tertiary_category.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                description?: string | undefined
                primary_category?: string | undefined
                secondary_category?: string | undefined
                taxonomy: string
                tertiary_category?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                taxonomy?: string | undefined
                'taxonomy.any_of'?: string | undefined
                'taxonomy.gt'?: string | undefined
                'taxonomy.gte'?: string | undefined
                'taxonomy.lt'?: string | undefined
                'taxonomy.lte'?: string | undefined
                primary_category?: string | undefined
                'primary_category.any_of'?: string | undefined
                'primary_category.gt'?: string | undefined
                'primary_category.gte'?: string | undefined
                'primary_category.lt'?: string | undefined
                'primary_category.lte'?: string | undefined
                secondary_category?: string | undefined
                'secondary_category.any_of'?: string | undefined
                'secondary_category.gt'?: string | undefined
                'secondary_category.gte'?: string | undefined
                'secondary_category.lt'?: string | undefined
                'secondary_category.lte'?: string | undefined
                tertiary_category?: string | undefined
                'tertiary_category.any_of'?: string | undefined
                'tertiary_category.gt'?: string | undefined
                'tertiary_category.gte'?: string | undefined
                'tertiary_category.lt'?: string | undefined
                'tertiary_category.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                taxonomy?: string | undefined
                'taxonomy.any_of'?: string | undefined
                'taxonomy.gt'?: string | undefined
                'taxonomy.gte'?: string | undefined
                'taxonomy.lt'?: string | undefined
                'taxonomy.lte'?: string | undefined
                primary_category?: string | undefined
                'primary_category.any_of'?: string | undefined
                'primary_category.gt'?: string | undefined
                'primary_category.gte'?: string | undefined
                'primary_category.lt'?: string | undefined
                'primary_category.lte'?: string | undefined
                secondary_category?: string | undefined
                'secondary_category.any_of'?: string | undefined
                'secondary_category.gt'?: string | undefined
                'secondary_category.gte'?: string | undefined
                'secondary_category.lt'?: string | undefined
                'secondary_category.lte'?: string | undefined
                tertiary_category?: string | undefined
                'tertiary_category.any_of'?: string | undefined
                'tertiary_category.gt'?: string | undefined
                'tertiary_category.gte'?: string | undefined
                'tertiary_category.lt'?: string | undefined
                'tertiary_category.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/taxonomies/vX/risk-factors': {
      $get:
        | {
            input: {
              query: {
                taxonomy?: number | undefined
                'taxonomy.gt'?: number | undefined
                'taxonomy.gte'?: number | undefined
                'taxonomy.lt'?: number | undefined
                'taxonomy.lte'?: number | undefined
                primary_category?: string | undefined
                'primary_category.any_of'?: string | undefined
                'primary_category.gt'?: string | undefined
                'primary_category.gte'?: string | undefined
                'primary_category.lt'?: string | undefined
                'primary_category.lte'?: string | undefined
                secondary_category?: string | undefined
                'secondary_category.any_of'?: string | undefined
                'secondary_category.gt'?: string | undefined
                'secondary_category.gte'?: string | undefined
                'secondary_category.lt'?: string | undefined
                'secondary_category.lte'?: string | undefined
                tertiary_category?: string | undefined
                'tertiary_category.any_of'?: string | undefined
                'tertiary_category.gt'?: string | undefined
                'tertiary_category.gte'?: string | undefined
                'tertiary_category.lt'?: string | undefined
                'tertiary_category.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                description?: string | undefined
                primary_category?: string | undefined
                secondary_category?: string | undefined
                taxonomy: number
                tertiary_category?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                taxonomy?: number | undefined
                'taxonomy.gt'?: number | undefined
                'taxonomy.gte'?: number | undefined
                'taxonomy.lt'?: number | undefined
                'taxonomy.lte'?: number | undefined
                primary_category?: string | undefined
                'primary_category.any_of'?: string | undefined
                'primary_category.gt'?: string | undefined
                'primary_category.gte'?: string | undefined
                'primary_category.lt'?: string | undefined
                'primary_category.lte'?: string | undefined
                secondary_category?: string | undefined
                'secondary_category.any_of'?: string | undefined
                'secondary_category.gt'?: string | undefined
                'secondary_category.gte'?: string | undefined
                'secondary_category.lt'?: string | undefined
                'secondary_category.lte'?: string | undefined
                tertiary_category?: string | undefined
                'tertiary_category.any_of'?: string | undefined
                'tertiary_category.gt'?: string | undefined
                'tertiary_category.gte'?: string | undefined
                'tertiary_category.lt'?: string | undefined
                'tertiary_category.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                taxonomy?: number | undefined
                'taxonomy.gt'?: number | undefined
                'taxonomy.gte'?: number | undefined
                'taxonomy.lt'?: number | undefined
                'taxonomy.lte'?: number | undefined
                primary_category?: string | undefined
                'primary_category.any_of'?: string | undefined
                'primary_category.gt'?: string | undefined
                'primary_category.gte'?: string | undefined
                'primary_category.lt'?: string | undefined
                'primary_category.lte'?: string | undefined
                secondary_category?: string | undefined
                'secondary_category.any_of'?: string | undefined
                'secondary_category.gt'?: string | undefined
                'secondary_category.gte'?: string | undefined
                'secondary_category.lt'?: string | undefined
                'secondary_category.lte'?: string | undefined
                tertiary_category?: string | undefined
                'tertiary_category.any_of'?: string | undefined
                'tertiary_category.gt'?: string | undefined
                'tertiary_category.gte'?: string | undefined
                'tertiary_category.lt'?: string | undefined
                'tertiary_category.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/v1/dividends': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                ex_dividend_date?: string | undefined
                'ex_dividend_date.gt'?: string | undefined
                'ex_dividend_date.gte'?: string | undefined
                'ex_dividend_date.lt'?: string | undefined
                'ex_dividend_date.lte'?: string | undefined
                frequency?: bigint | undefined
                'frequency.gt'?: bigint | undefined
                'frequency.gte'?: bigint | undefined
                'frequency.lt'?: bigint | undefined
                'frequency.lte'?: bigint | undefined
                distribution_type?:
                  | 'recurring'
                  | 'special'
                  | 'supplemental'
                  | 'irregular'
                  | 'unknown'
                  | undefined
                'distribution_type.any_of'?:
                  | 'recurring'
                  | 'special'
                  | 'supplemental'
                  | 'irregular'
                  | 'unknown'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                cash_amount?: number | undefined
                currency?: string | undefined
                declaration_date?: string | undefined
                distribution_type: string
                ex_dividend_date?: string | undefined
                frequency?: bigint | undefined
                historical_adjustment_factor?: number | undefined
                id?: string | undefined
                pay_date?: string | undefined
                record_date?: string | undefined
                split_adjusted_cash_amount?: number | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                ex_dividend_date?: string | undefined
                'ex_dividend_date.gt'?: string | undefined
                'ex_dividend_date.gte'?: string | undefined
                'ex_dividend_date.lt'?: string | undefined
                'ex_dividend_date.lte'?: string | undefined
                frequency?: bigint | undefined
                'frequency.gt'?: bigint | undefined
                'frequency.gte'?: bigint | undefined
                'frequency.lt'?: bigint | undefined
                'frequency.lte'?: bigint | undefined
                distribution_type?:
                  | 'recurring'
                  | 'special'
                  | 'supplemental'
                  | 'irregular'
                  | 'unknown'
                  | undefined
                'distribution_type.any_of'?:
                  | 'recurring'
                  | 'special'
                  | 'supplemental'
                  | 'irregular'
                  | 'unknown'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                ex_dividend_date?: string | undefined
                'ex_dividend_date.gt'?: string | undefined
                'ex_dividend_date.gte'?: string | undefined
                'ex_dividend_date.lt'?: string | undefined
                'ex_dividend_date.lte'?: string | undefined
                frequency?: bigint | undefined
                'frequency.gt'?: bigint | undefined
                'frequency.gte'?: bigint | undefined
                'frequency.lt'?: bigint | undefined
                'frequency.lte'?: bigint | undefined
                distribution_type?:
                  | 'recurring'
                  | 'special'
                  | 'supplemental'
                  | 'irregular'
                  | 'unknown'
                  | undefined
                'distribution_type.any_of'?:
                  | 'recurring'
                  | 'special'
                  | 'supplemental'
                  | 'irregular'
                  | 'unknown'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/v1/exchanges': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                acronym?: string | undefined
                id: string
                locale?: string | undefined
                mic?: string | undefined
                name: string
                operating_mic?: string | undefined
                participant_id?: string | undefined
                type: string
                url?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/v1/short-interest': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                days_to_cover?: number | undefined
                'days_to_cover.any_of'?: string | undefined
                'days_to_cover.gt'?: number | undefined
                'days_to_cover.gte'?: number | undefined
                'days_to_cover.lt'?: number | undefined
                'days_to_cover.lte'?: number | undefined
                settlement_date?: string | undefined
                'settlement_date.any_of'?: string | undefined
                'settlement_date.gt'?: string | undefined
                'settlement_date.gte'?: string | undefined
                'settlement_date.lt'?: string | undefined
                'settlement_date.lte'?: string | undefined
                avg_daily_volume?: bigint | undefined
                'avg_daily_volume.any_of'?: string | undefined
                'avg_daily_volume.gt'?: bigint | undefined
                'avg_daily_volume.gte'?: bigint | undefined
                'avg_daily_volume.lt'?: bigint | undefined
                'avg_daily_volume.lte'?: bigint | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                avg_daily_volume: bigint
                days_to_cover: number
                settlement_date: string
                short_interest?: bigint | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                days_to_cover?: number | undefined
                'days_to_cover.any_of'?: string | undefined
                'days_to_cover.gt'?: number | undefined
                'days_to_cover.gte'?: number | undefined
                'days_to_cover.lt'?: number | undefined
                'days_to_cover.lte'?: number | undefined
                settlement_date?: string | undefined
                'settlement_date.any_of'?: string | undefined
                'settlement_date.gt'?: string | undefined
                'settlement_date.gte'?: string | undefined
                'settlement_date.lt'?: string | undefined
                'settlement_date.lte'?: string | undefined
                avg_daily_volume?: bigint | undefined
                'avg_daily_volume.any_of'?: string | undefined
                'avg_daily_volume.gt'?: bigint | undefined
                'avg_daily_volume.gte'?: bigint | undefined
                'avg_daily_volume.lt'?: bigint | undefined
                'avg_daily_volume.lte'?: bigint | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                days_to_cover?: number | undefined
                'days_to_cover.any_of'?: string | undefined
                'days_to_cover.gt'?: number | undefined
                'days_to_cover.gte'?: number | undefined
                'days_to_cover.lt'?: number | undefined
                'days_to_cover.lte'?: number | undefined
                settlement_date?: string | undefined
                'settlement_date.any_of'?: string | undefined
                'settlement_date.gt'?: string | undefined
                'settlement_date.gte'?: string | undefined
                'settlement_date.lt'?: string | undefined
                'settlement_date.lte'?: string | undefined
                avg_daily_volume?: bigint | undefined
                'avg_daily_volume.any_of'?: string | undefined
                'avg_daily_volume.gt'?: bigint | undefined
                'avg_daily_volume.gte'?: bigint | undefined
                'avg_daily_volume.lt'?: bigint | undefined
                'avg_daily_volume.lte'?: bigint | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/v1/short-volume': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                short_volume_ratio?: number | undefined
                'short_volume_ratio.any_of'?: string | undefined
                'short_volume_ratio.gt'?: number | undefined
                'short_volume_ratio.gte'?: number | undefined
                'short_volume_ratio.lt'?: number | undefined
                'short_volume_ratio.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                adf_short_volume?: bigint | undefined
                adf_short_volume_exempt?: bigint | undefined
                date: string
                exempt_volume?: number | undefined
                nasdaq_carteret_short_volume?: bigint | undefined
                nasdaq_carteret_short_volume_exempt?: bigint | undefined
                nasdaq_chicago_short_volume?: bigint | undefined
                nasdaq_chicago_short_volume_exempt?: bigint | undefined
                non_exempt_volume?: number | undefined
                nyse_short_volume?: bigint | undefined
                nyse_short_volume_exempt?: bigint | undefined
                short_volume?: number | undefined
                short_volume_ratio?: number | undefined
                ticker?: string | undefined
                total_volume?: number | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                short_volume_ratio?: number | undefined
                'short_volume_ratio.any_of'?: string | undefined
                'short_volume_ratio.gt'?: number | undefined
                'short_volume_ratio.gte'?: number | undefined
                'short_volume_ratio.lt'?: number | undefined
                'short_volume_ratio.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                short_volume_ratio?: number | undefined
                'short_volume_ratio.any_of'?: string | undefined
                'short_volume_ratio.gt'?: number | undefined
                'short_volume_ratio.gte'?: number | undefined
                'short_volume_ratio.lt'?: number | undefined
                'short_volume_ratio.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/v1/splits': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                execution_date?: string | undefined
                'execution_date.gt'?: string | undefined
                'execution_date.gte'?: string | undefined
                'execution_date.lt'?: string | undefined
                'execution_date.lte'?: string | undefined
                adjustment_type?: 'forward_split' | 'reverse_split' | 'stock_dividend' | undefined
                'adjustment_type.any_of'?:
                  | 'forward_split'
                  | 'reverse_split'
                  | 'stock_dividend'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                adjustment_type: string
                execution_date?: string | undefined
                historical_adjustment_factor?: number | undefined
                id?: string | undefined
                split_from?: number | undefined
                split_to?: number | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                execution_date?: string | undefined
                'execution_date.gt'?: string | undefined
                'execution_date.gte'?: string | undefined
                'execution_date.lt'?: string | undefined
                'execution_date.lte'?: string | undefined
                adjustment_type?: 'forward_split' | 'reverse_split' | 'stock_dividend' | undefined
                'adjustment_type.any_of'?:
                  | 'forward_split'
                  | 'reverse_split'
                  | 'stock_dividend'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                execution_date?: string | undefined
                'execution_date.gt'?: string | undefined
                'execution_date.gte'?: string | undefined
                'execution_date.lt'?: string | undefined
                'execution_date.lte'?: string | undefined
                adjustment_type?: 'forward_split' | 'reverse_split' | 'stock_dividend' | undefined
                'adjustment_type.any_of'?:
                  | 'forward_split'
                  | 'reverse_split'
                  | 'stock_dividend'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stocks/vX/float': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                free_float_percent?: number | undefined
                'free_float_percent.gt'?: number | undefined
                'free_float_percent.gte'?: number | undefined
                'free_float_percent.lt'?: number | undefined
                'free_float_percent.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                effective_date?: string | undefined
                free_float?: bigint | undefined
                free_float_percent?: number | undefined
                ticker?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                free_float_percent?: number | undefined
                'free_float_percent.gt'?: number | undefined
                'free_float_percent.gte'?: number | undefined
                'free_float_percent.lt'?: number | undefined
                'free_float_percent.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                free_float_percent?: number | undefined
                'free_float_percent.gt'?: number | undefined
                'free_float_percent.gte'?: number | undefined
                'free_float_percent.lt'?: number | undefined
                'free_float_percent.lte'?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/tmx/v1/corporate-events': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                type?: string | undefined
                'type.any_of'?: string | undefined
                'type.gt'?: string | undefined
                'type.gte'?: string | undefined
                'type.lt'?: string | undefined
                'type.lte'?: string | undefined
                status?: string | undefined
                'status.any_of'?: string | undefined
                'status.gt'?: string | undefined
                'status.gte'?: string | undefined
                'status.lt'?: string | undefined
                'status.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                tmx_company_id?: bigint | undefined
                'tmx_company_id.gt'?: bigint | undefined
                'tmx_company_id.gte'?: bigint | undefined
                'tmx_company_id.lt'?: bigint | undefined
                'tmx_company_id.lte'?: bigint | undefined
                tmx_record_id?: string | undefined
                'tmx_record_id.any_of'?: string | undefined
                'tmx_record_id.gt'?: string | undefined
                'tmx_record_id.gte'?: string | undefined
                'tmx_record_id.lt'?: string | undefined
                'tmx_record_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                company_name?: string | undefined
                date?: string | undefined
                isin?: string | undefined
                name?: string | undefined
                status?: string | undefined
                ticker?: string | undefined
                tmx_company_id?: bigint | undefined
                tmx_record_id?: string | undefined
                trading_venue?: string | undefined
                type?: string | undefined
                url?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                type?: string | undefined
                'type.any_of'?: string | undefined
                'type.gt'?: string | undefined
                'type.gte'?: string | undefined
                'type.lt'?: string | undefined
                'type.lte'?: string | undefined
                status?: string | undefined
                'status.any_of'?: string | undefined
                'status.gt'?: string | undefined
                'status.gte'?: string | undefined
                'status.lt'?: string | undefined
                'status.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                tmx_company_id?: bigint | undefined
                'tmx_company_id.gt'?: bigint | undefined
                'tmx_company_id.gte'?: bigint | undefined
                'tmx_company_id.lt'?: bigint | undefined
                'tmx_company_id.lte'?: bigint | undefined
                tmx_record_id?: string | undefined
                'tmx_record_id.any_of'?: string | undefined
                'tmx_record_id.gt'?: string | undefined
                'tmx_record_id.gte'?: string | undefined
                'tmx_record_id.lt'?: string | undefined
                'tmx_record_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date.any_of'?: string | undefined
                'date.gt'?: string | undefined
                'date.gte'?: string | undefined
                'date.lt'?: string | undefined
                'date.lte'?: string | undefined
                type?: string | undefined
                'type.any_of'?: string | undefined
                'type.gt'?: string | undefined
                'type.gte'?: string | undefined
                'type.lt'?: string | undefined
                'type.lte'?: string | undefined
                status?: string | undefined
                'status.any_of'?: string | undefined
                'status.gt'?: string | undefined
                'status.gte'?: string | undefined
                'status.lt'?: string | undefined
                'status.lte'?: string | undefined
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                trading_venue?: string | undefined
                'trading_venue.any_of'?: string | undefined
                'trading_venue.gt'?: string | undefined
                'trading_venue.gte'?: string | undefined
                'trading_venue.lt'?: string | undefined
                'trading_venue.lte'?: string | undefined
                tmx_company_id?: bigint | undefined
                'tmx_company_id.gt'?: bigint | undefined
                'tmx_company_id.gte'?: bigint | undefined
                'tmx_company_id.lt'?: bigint | undefined
                'tmx_company_id.lte'?: bigint | undefined
                tmx_record_id?: string | undefined
                'tmx_record_id.any_of'?: string | undefined
                'tmx_record_id.gt'?: string | undefined
                'tmx_record_id.gte'?: string | undefined
                'tmx_record_id.lt'?: string | undefined
                'tmx_record_id.lte'?: string | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/conversion/:from/:to': {
      $get:
        | {
            input: { param: { from: string; to: string } } & {
              query: { amount?: number | undefined; precision?: 0 | 1 | 2 | 3 | 4 | undefined }
            }
            output: {
              converted: number
              from: string
              initialAmount: number
              last?: { ask: number; bid: number; exchange: number; timestamp: number } | undefined
              request_id: string
              status: string
              symbol: string
              to: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } } & {
              query: { amount?: number | undefined; precision?: 0 | 1 | 2 | 3 | 4 | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } } & {
              query: { amount?: number | undefined; precision?: 0 | 1 | 2 | 3 | 4 | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/historic/crypto/:from/:to/:date': {
      $get:
        | {
            input: { param: { from: string; to: string; date: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {
              day: string
              map: { [x: string]: unknown }
              msLatency: number
              symbol: string
              ticks: { c: number[]; i: string; p: number; s: number; t: number; x: number }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { from: string; to: string; date: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/historic/forex/:from/:to/:date': {
      $get:
        | {
            input: { param: { from: string; to: string; date: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {
              status: string
              day: string
              map: { [x: string]: unknown }
              msLatency: number
              pair: string
              ticks: { a: number; b: number; t: number; x: number }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { from: string; to: string; date: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/indicators/ema/:cryptoTicker': {
      $get:
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/ema/:fxTicker': {
      $get:
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/ema/:indicesTicker': {
      $get: {
        input: { param: { indicesTicker: string } } & {
          query: {
            timestamp?: string | undefined
            timespan?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | undefined
            adjusted?: boolean | undefined
            window?: number | undefined
            series_type?: 'open' | 'high' | 'low' | 'close' | undefined
            expand_underlying?: boolean | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            'timestamp.gte'?: string | undefined
            'timestamp.gt'?: string | undefined
            'timestamp.lte'?: string | undefined
            'timestamp.lt'?: string | undefined
          }
        }
        output: {
          next_url?: string | undefined
          request_id: string
          results: {
            underlying?:
              | {
                  aggregates?:
                    | {
                        c: number
                        h: number
                        l: number
                        n: number
                        o: number
                        otc?: boolean | undefined
                        t: number
                        v: number
                        vw: number
                      }[]
                    | undefined
                  url?: string | undefined
                }
              | undefined
            values?: { timestamp?: bigint | undefined; value?: number | undefined }[] | undefined
          }
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indicators/ema/:optionsTicker': {
      $get:
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/ema/:stockTicker': {
      $get:
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/macd/:cryptoTicker': {
      $get:
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                short_window?: number | undefined
                long_window?: number | undefined
                signal_window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | {
                      histogram?: number | undefined
                      signal?: number | undefined
                      timestamp?: bigint | undefined
                      value?: number | undefined
                    }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                short_window?: number | undefined
                long_window?: number | undefined
                signal_window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/macd/:fxTicker': {
      $get:
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                short_window?: number | undefined
                long_window?: number | undefined
                signal_window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | {
                      histogram?: number | undefined
                      signal?: number | undefined
                      timestamp?: bigint | undefined
                      value?: number | undefined
                    }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                short_window?: number | undefined
                long_window?: number | undefined
                signal_window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/macd/:indicesTicker': {
      $get: {
        input: { param: { indicesTicker: string } } & {
          query: {
            timestamp?: string | undefined
            timespan?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | undefined
            adjusted?: boolean | undefined
            short_window?: number | undefined
            long_window?: number | undefined
            signal_window?: number | undefined
            series_type?: 'open' | 'high' | 'low' | 'close' | undefined
            expand_underlying?: boolean | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            'timestamp.gte'?: string | undefined
            'timestamp.gt'?: string | undefined
            'timestamp.lte'?: string | undefined
            'timestamp.lt'?: string | undefined
          }
        }
        output: {
          next_url?: string | undefined
          request_id: string
          results: {
            underlying?:
              | {
                  aggregates?:
                    | {
                        c: number
                        h: number
                        l: number
                        n: number
                        o: number
                        otc?: boolean | undefined
                        t: number
                        v: number
                        vw: number
                      }[]
                    | undefined
                  url?: string | undefined
                }
              | undefined
            values?:
              | {
                  histogram?: number | undefined
                  signal?: number | undefined
                  timestamp?: bigint | undefined
                  value?: number | undefined
                }[]
              | undefined
          }
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indicators/macd/:optionsTicker': {
      $get:
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                short_window?: number | undefined
                long_window?: number | undefined
                signal_window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | {
                      histogram?: number | undefined
                      signal?: number | undefined
                      timestamp?: bigint | undefined
                      value?: number | undefined
                    }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                short_window?: number | undefined
                long_window?: number | undefined
                signal_window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/macd/:stockTicker': {
      $get:
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                short_window?: number | undefined
                long_window?: number | undefined
                signal_window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | {
                      histogram?: number | undefined
                      signal?: number | undefined
                      timestamp?: bigint | undefined
                      value?: number | undefined
                    }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                short_window?: number | undefined
                long_window?: number | undefined
                signal_window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/rsi/:cryptoTicker': {
      $get:
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/rsi/:fxTicker': {
      $get:
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/rsi/:indicesTicker': {
      $get: {
        input: { param: { indicesTicker: string } } & {
          query: {
            timestamp?: string | undefined
            timespan?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | undefined
            adjusted?: boolean | undefined
            window?: number | undefined
            series_type?: 'open' | 'high' | 'low' | 'close' | undefined
            expand_underlying?: boolean | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            'timestamp.gte'?: string | undefined
            'timestamp.gt'?: string | undefined
            'timestamp.lte'?: string | undefined
            'timestamp.lt'?: string | undefined
          }
        }
        output: {
          next_url?: string | undefined
          request_id: string
          results: {
            underlying?:
              | {
                  aggregates?:
                    | {
                        c: number
                        h: number
                        l: number
                        n: number
                        o: number
                        otc?: boolean | undefined
                        t: number
                        v: number
                        vw: number
                      }[]
                    | undefined
                  url?: string | undefined
                }
              | undefined
            values?: { timestamp?: bigint | undefined; value?: number | undefined }[] | undefined
          }
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indicators/rsi/:optionsTicker': {
      $get:
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/rsi/:stockTicker': {
      $get:
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/sma/:cryptoTicker': {
      $get:
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/sma/:fxTicker': {
      $get:
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/sma/:indicesTicker': {
      $get: {
        input: { param: { indicesTicker: string } } & {
          query: {
            timestamp?: string | undefined
            timespan?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | undefined
            adjusted?: boolean | undefined
            window?: number | undefined
            series_type?: 'open' | 'high' | 'low' | 'close' | undefined
            expand_underlying?: boolean | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            'timestamp.gte'?: string | undefined
            'timestamp.gt'?: string | undefined
            'timestamp.lte'?: string | undefined
            'timestamp.lt'?: string | undefined
          }
        }
        output: {
          next_url?: string | undefined
          request_id: string
          results: {
            underlying?:
              | {
                  aggregates?:
                    | {
                        c: number
                        h: number
                        l: number
                        n: number
                        o: number
                        otc?: boolean | undefined
                        t: number
                        v: number
                        vw: number
                      }[]
                    | undefined
                  url?: string | undefined
                }
              | undefined
            values?: { timestamp?: bigint | undefined; value?: number | undefined }[] | undefined
          }
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indicators/sma/:optionsTicker': {
      $get:
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/indicators/sma/:stockTicker': {
      $get:
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                underlying?:
                  | {
                      aggregates?:
                        | {
                            c: number
                            h: number
                            l: number
                            n: number
                            o: number
                            otc?: boolean | undefined
                            t: number
                            v: number
                            vw: number
                          }[]
                        | undefined
                      url?: string | undefined
                    }
                  | undefined
                values?:
                  | { timestamp?: bigint | undefined; value?: number | undefined }[]
                  | undefined
              }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                timespan?:
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                  | undefined
                adjusted?: boolean | undefined
                window?: number | undefined
                series_type?: 'open' | 'high' | 'low' | 'close' | undefined
                expand_underlying?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/last/crypto/:from/:to': {
      $get:
        | {
            input: { param: { from: string; to: string } }
            output: {
              last?:
                | {
                    conditions?: number[] | undefined
                    exchange: number
                    price: number
                    size: number
                    timestamp: number
                  }
                | undefined
              request_id: string
              status: string
              symbol: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/last_quote/currencies/:from/:to': {
      $get:
        | {
            input: { param: { from: string; to: string } }
            output: {
              last?: { ask: number; bid: number; exchange: number; timestamp: number } | undefined
              request_id: string
              status: string
              symbol: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/marketstatus/now': {
      $get: {
        input: {}
        output: {
          afterHours?: boolean | undefined
          currencies?: { crypto?: string | undefined; fx?: string | undefined } | undefined
          earlyHours?: boolean | undefined
          exchanges?:
            | { nasdaq?: string | undefined; nyse?: string | undefined; otc?: string | undefined }
            | undefined
          indicesGroups?:
            | {
                cccy?: string | undefined
                cgi?: string | undefined
                dow_jones?: string | undefined
                ftse_russell?: string | undefined
                msci?: string | undefined
                mstar?: string | undefined
                mstarc?: string | undefined
                nasdaq?: string | undefined
                s_and_p?: string | undefined
                societe_generale?: string | undefined
              }
            | undefined
          market?: string | undefined
          serverTime?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/marketstatus/upcoming': {
      $get: {
        input: {}
        output: {
          close?: string | undefined
          date?: string | undefined
          exchange?: string | undefined
          name?: string | undefined
          open?: string | undefined
          status?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/open-close/crypto/:from/:to/:date': {
      $get:
        | {
            input: { param: { from: string; to: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {
              close: number
              closingTrades: {
                c: number[]
                i: string
                p: number
                s: number
                t: number
                x: number
              }[]
              day: string
              isUTC: boolean
              open: number
              openTrades: { c: number[]; i: string; p: number; s: number; t: number; x: number }[]
              symbol: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { from: string; to: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { from: string; to: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/open-close/:indicesTicker/:date': {
      $get:
        | {
            input: { param: { indicesTicker: string; date: string } }
            output: {
              afterHours?: number | undefined
              close: number
              from: string
              high: number
              low: number
              open: number
              preMarket?: number | undefined
              status: string
              symbol: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indicesTicker: string; date: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { indicesTicker: string; date: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/open-close/:optionsTicker/:date': {
      $get:
        | {
            input: { param: { optionsTicker: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {
              afterHours?: number | undefined
              close: number
              from: string
              high: number
              low: number
              open: number
              otc?: boolean | undefined
              preMarket?: number | undefined
              status: string
              symbol: string
              volume: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/open-close/:stocksTicker/:date': {
      $get:
        | {
            input: { param: { stocksTicker: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {
              afterHours?: number | undefined
              close: number
              from: string
              high: number
              low: number
              open: number
              otc?: boolean | undefined
              preMarket?: number | undefined
              status: string
              symbol: string
              volume: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string; date: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/reference/ipos': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                us_code?: string | undefined
                'us_code.any_of'?: string | undefined
                'us_code.gt'?: string | undefined
                'us_code.gte'?: string | undefined
                'us_code.lt'?: string | undefined
                'us_code.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                listing_date?: string | undefined
                'listing_date.gt'?: string | undefined
                'listing_date.gte'?: string | undefined
                'listing_date.lt'?: string | undefined
                'listing_date.lte'?: string | undefined
                ipo_status?:
                  | 'direct_listing_process'
                  | 'history'
                  | 'new'
                  | 'pending'
                  | 'postponed'
                  | 'rumor'
                  | 'withdrawn'
                  | undefined
                'ipo_status.any_of'?:
                  | 'direct_listing_process'
                  | 'history'
                  | 'new'
                  | 'pending'
                  | 'postponed'
                  | 'rumor'
                  | 'withdrawn'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results: {
                announced_date?: bigint | undefined
                currency_code?: string | undefined
                final_issue_price?: number | undefined
                highest_offer_price?: number | undefined
                ipo_status?: string | undefined
                isin?: string | undefined
                issuer_name?: string | undefined
                last_updated?: bigint | undefined
                listing_date?: bigint | undefined
                lot_size?: bigint | undefined
                lowest_offer_price?: number | undefined
                max_shares_offered?: bigint | undefined
                min_shares_offered?: bigint | undefined
                primary_exchange?: string | undefined
                security_description?: string | undefined
                security_type?: string | undefined
                shares_outstanding?: bigint | undefined
                ticker?: string | undefined
                total_offer_size?: number | undefined
                us_code?: string | undefined
              }[]
              status: 'OK'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                us_code?: string | undefined
                'us_code.any_of'?: string | undefined
                'us_code.gt'?: string | undefined
                'us_code.gte'?: string | undefined
                'us_code.lt'?: string | undefined
                'us_code.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                listing_date?: string | undefined
                'listing_date.gt'?: string | undefined
                'listing_date.gte'?: string | undefined
                'listing_date.lt'?: string | undefined
                'listing_date.lte'?: string | undefined
                ipo_status?:
                  | 'direct_listing_process'
                  | 'history'
                  | 'new'
                  | 'pending'
                  | 'postponed'
                  | 'rumor'
                  | 'withdrawn'
                  | undefined
                'ipo_status.any_of'?:
                  | 'direct_listing_process'
                  | 'history'
                  | 'new'
                  | 'pending'
                  | 'postponed'
                  | 'rumor'
                  | 'withdrawn'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                'ticker.any_of'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.gte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ticker.lte'?: string | undefined
                us_code?: string | undefined
                'us_code.any_of'?: string | undefined
                'us_code.gt'?: string | undefined
                'us_code.gte'?: string | undefined
                'us_code.lt'?: string | undefined
                'us_code.lte'?: string | undefined
                isin?: string | undefined
                'isin.any_of'?: string | undefined
                'isin.gt'?: string | undefined
                'isin.gte'?: string | undefined
                'isin.lt'?: string | undefined
                'isin.lte'?: string | undefined
                listing_date?: string | undefined
                'listing_date.gt'?: string | undefined
                'listing_date.gte'?: string | undefined
                'listing_date.lt'?: string | undefined
                'listing_date.lte'?: string | undefined
                ipo_status?:
                  | 'direct_listing_process'
                  | 'history'
                  | 'new'
                  | 'pending'
                  | 'postponed'
                  | 'rumor'
                  | 'withdrawn'
                  | undefined
                'ipo_status.any_of'?:
                  | 'direct_listing_process'
                  | 'history'
                  | 'new'
                  | 'pending'
                  | 'postponed'
                  | 'rumor'
                  | 'withdrawn'
                  | undefined
                limit?: number | undefined
                sort?: string | undefined
              }
            }
            output: { error: string; request_id: string; status: 'ERROR' }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/reference/sec/filings': {
      $get: {
        input: {
          query: {
            type?: '10-K' | '10-Q' | undefined
            filing_date?: string | undefined
            period_of_report_date?: string | undefined
            has_xbrl?: (boolean | null) | undefined
            'entities.company_data.name'?: string | undefined
            'entities.company_data.cik'?: string | undefined
            'entities.company_data.ticker'?: string | undefined
            'entities.company_data.sic'?: string | undefined
            'filing_date.gte'?: string | undefined
            'filing_date.gt'?: string | undefined
            'filing_date.lte'?: string | undefined
            'filing_date.lt'?: string | undefined
            'period_of_report_date.gte'?: string | undefined
            'period_of_report_date.gt'?: string | undefined
            'period_of_report_date.lte'?: string | undefined
            'period_of_report_date.lt'?: string | undefined
            'entities.company_data.name.search'?: string | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?: 'filing_date' | 'period_of_report_date' | undefined
          }
        }
        output: {
          count: number
          next_url?: string | undefined
          request_id: string
          results: {
            acceptance_datetime?: string | undefined
            accession_number: string
            entities: {
              company_data?:
                | { cik: string; name: string; sic: string; ticker?: string | undefined }
                | undefined
              relation: 'filer'
            }[]
            files_count: bigint
            filing_date: string
            id: string
            period_of_report_date: string
            source_url: string
            type: '10-K' | '10-Q'
          }[]
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reference/sec/filings/:filing_id': {
      $get: {
        input: { param: { filing_id: string } }
        output: {
          results?:
            | {
                acceptance_datetime?: string | undefined
                accession_number: string
                entities: {
                  company_data?:
                    | { cik: string; name: string; sic: string; ticker?: string | undefined }
                    | undefined
                  relation: 'filer'
                }[]
                files_count: bigint
                filing_date: string
                id: string
                period_of_report_date: string
                source_url: string
                type: '10-K' | '10-Q'
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reference/sec/filings/:filing_id/files': {
      $get: {
        input: { param: { filing_id: string } } & {
          query: {
            sequence?: bigint | undefined
            filename?: string | undefined
            'sequence.gte'?: bigint | undefined
            'sequence.gt'?: bigint | undefined
            'sequence.lte'?: bigint | undefined
            'sequence.lt'?: bigint | undefined
            'filename.gte'?: string | undefined
            'filename.gt'?: string | undefined
            'filename.lte'?: string | undefined
            'filename.lt'?: string | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?: 'sequence' | 'filename' | undefined
          }
        }
        output: {
          count: number
          next_url?: string | undefined
          request_id: string
          results: {
            description: string
            filename?: string | undefined
            id: string
            sequence: bigint
            size_bytes: bigint
            source_url: string
            type: string
          }[]
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reference/sec/filings/:filing_id/files/:file_id': {
      $get: {
        input: { param: { filing_id: string; file_id: string } }
        output: {
          description: string
          filename?: string | undefined
          id: string
          sequence: bigint
          size_bytes: bigint
          source_url: string
          type: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/related-companies/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } }
            output: {
              request_id?: string | undefined
              results?: { ticker: string }[] | undefined
              status?: string | undefined
              ticker?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ticker: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/v2/aggs/grouped/locale/global/market/crypto/:date': {
      $get:
        | {
            input: { param: { date: string } } & { query: { adjusted?: boolean | undefined } }
            output: {
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    T: string
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { date: string } } & { query: { adjusted?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { date: string } } & { query: { adjusted?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/grouped/locale/global/market/fx/:date': {
      $get:
        | {
            input: { param: { date: string } } & { query: { adjusted?: boolean | undefined } }
            output: {
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    T: string
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { date: string } } & { query: { adjusted?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { date: string } } & { query: { adjusted?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/grouped/locale/us/market/stocks/:date': {
      $get:
        | {
            input: { param: { date: string } } & {
              query: { adjusted?: boolean | undefined; include_otc?: boolean | undefined }
            }
            output: {
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    T: string
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    otc?: boolean | undefined
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { date: string } } & {
              query: { adjusted?: boolean | undefined; include_otc?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { date: string } } & {
              query: { adjusted?: boolean | undefined; include_otc?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:cryptoTicker/prev': {
      $get:
        | {
            input: { param: { cryptoTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {
              ticker: string
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    T: string
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cryptoTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cryptoTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:cryptoTicker/range/:multiplier/:timespan/:from/:to': {
      $get:
        | {
            input: {
              param: {
                cryptoTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {
              ticker: string
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                cryptoTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                cryptoTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:forexTicker/prev': {
      $get:
        | {
            input: { param: { forexTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {
              ticker: string
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    T: string
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { forexTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { forexTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:forexTicker/range/:multiplier/:timespan/:from/:to': {
      $get:
        | {
            input: {
              param: {
                forexTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {
              ticker: string
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                forexTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                forexTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:indicesTicker/prev': {
      $get:
        | {
            input: { param: { indicesTicker: string } }
            output: {
              ticker: string
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | { T: string; c: number; h: number; l: number; o: number; t: number }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indicesTicker: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { indicesTicker: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:indicesTicker/range/:multiplier/:timespan/:from/:to': {
      $get:
        | {
            input: {
              param: {
                indicesTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & { query: { sort?: 'asc' | 'desc' | undefined; limit?: number | undefined } }
            output: {
              ticker: string
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?: { c: number; h: number; l: number; o: number; t: number }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                indicesTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & { query: { sort?: 'asc' | 'desc' | undefined; limit?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                indicesTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & { query: { sort?: 'asc' | 'desc' | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:optionsTicker/prev': {
      $get:
        | {
            input: { param: { optionsTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {
              ticker: string
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    T: string
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:optionsTicker/range/:multiplier/:timespan/:from/:to': {
      $get:
        | {
            input: {
              param: {
                optionsTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {
              ticker: string
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                optionsTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                optionsTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:stocksTicker/prev': {
      $get:
        | {
            input: { param: { stocksTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {
              ticker: string
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    T: string
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string } } & {
              query: { adjusted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/aggs/ticker/:stocksTicker/range/:multiplier/:timespan/:from/:to': {
      $get:
        | {
            input: {
              param: {
                stocksTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {
              ticker: string
              adjusted: boolean
              queryCount: number
              request_id: string
              resultsCount: number
              status: string
              results?:
                | {
                    c: number
                    h: number
                    l: number
                    n?: number | undefined
                    o: number
                    otc?: boolean | undefined
                    t: number
                    v: number
                    vw?: number | undefined
                  }[]
                | undefined
              next_url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                stocksTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                stocksTicker: string
                multiplier: number
                timespan:
                  | 'second'
                  | 'minute'
                  | 'hour'
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'quarter'
                  | 'year'
                from: string
                to: string
              }
            } & {
              query: {
                adjusted?: boolean | undefined
                sort?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/last/nbbo/:stocksTicker': {
      $get:
        | {
            input: { param: { stocksTicker: string } }
            output: {
              request_id: string
              results?:
                | {
                    P?: number | undefined
                    S?: number | undefined
                    T: string
                    X?: number | undefined
                    c?: number[] | undefined
                    f?: number | undefined
                    i?: number[] | undefined
                    p?: number | undefined
                    q: bigint
                    s?: number | undefined
                    t: number
                    x?: number | undefined
                    y: number
                    z?: number | undefined
                  }
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { stocksTicker: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/last/trade/:optionsTicker': {
      $get:
        | {
            input: { param: { optionsTicker: string } }
            output: {
              request_id: string
              results?:
                | {
                    T: string
                    c?: number[] | undefined
                    e?: number | undefined
                    f?: number | undefined
                    i: string
                    p: number
                    q: bigint
                    r?: number | undefined
                    s?: number | undefined
                    t: number
                    x: number
                    y: number
                    z?: number | undefined
                  }
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { optionsTicker: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/last/trade/:stocksTicker': {
      $get:
        | {
            input: { param: { stocksTicker: string } }
            output: {
              request_id: string
              results?:
                | {
                    T: string
                    c?: number[] | undefined
                    ds: string
                    e?: number | undefined
                    f?: number | undefined
                    i: string
                    p: number
                    q: bigint
                    r?: number | undefined
                    s?: number | undefined
                    t: number
                    x: number
                    y: number
                    z?: number | undefined
                  }
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { stocksTicker: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/reference/news': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                published_utc?: string | string | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                'published_utc.gte'?: string | string | undefined
                'published_utc.gt'?: string | string | undefined
                'published_utc.lte'?: string | string | undefined
                'published_utc.lt'?: string | string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'published_utc' | undefined
              }
            }
            output: {
              count?: number | undefined
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    amp_url?: string | undefined
                    article_url: string
                    author: string
                    description?: string | undefined
                    id: string
                    image_url?: string | undefined
                    insights?:
                      | {
                          sentiment: 'positive' | 'neutral' | 'negative'
                          sentiment_reasoning: string
                          ticker: string
                        }[]
                      | undefined
                    keywords?: string[] | undefined
                    published_utc: string
                    publisher: {
                      favicon_url?: string | undefined
                      homepage_url: string
                      logo_url: string
                      name: string
                    }
                    tickers: string[]
                    title: string
                  }[]
                | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                published_utc?: string | string | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                'published_utc.gte'?: string | string | undefined
                'published_utc.gt'?: string | string | undefined
                'published_utc.lte'?: string | string | undefined
                'published_utc.lt'?: string | string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'published_utc' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                published_utc?: string | string | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                'published_utc.gte'?: string | string | undefined
                'published_utc.gt'?: string | string | undefined
                'published_utc.lte'?: string | string | undefined
                'published_utc.lt'?: string | string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'published_utc' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                published_utc?: string | string | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                'published_utc.gte'?: string | string | undefined
                'published_utc.gt'?: string | string | undefined
                'published_utc.lte'?: string | string | undefined
                'published_utc.lt'?: string | string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'published_utc' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/snapshot/locale/global/markets/crypto/tickers': {
      $get:
        | {
            input: { query: { tickers?: string[] | undefined } }
            output: {
              status: string
              tickers?:
                | {
                    day: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    fmv?: number | undefined
                    lastTrade: {
                      c: number[]
                      i: string
                      p: number
                      s: number
                      t: number
                      x: number
                    }
                    min: {
                      c: number
                      h: number
                      l: number
                      n: number
                      o: number
                      t: number
                      v: number
                      vw: number
                    }
                    prevDay: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    ticker: string
                    todaysChange: number
                    todaysChangePerc: number
                    updated: number
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tickers?: string[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { tickers?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/snapshot/locale/global/markets/crypto/tickers/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } }
            output: {
              status: string
              request_id: string
              ticker?:
                | {
                    day: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    fmv?: number | undefined
                    lastTrade: {
                      c: number[]
                      i: string
                      p: number
                      s: number
                      t: number
                      x: number
                    }
                    min: {
                      c: number
                      h: number
                      l: number
                      n: number
                      o: number
                      t: number
                      v: number
                      vw: number
                    }
                    prevDay: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    ticker: string
                    todaysChange: number
                    todaysChangePerc: number
                    updated: number
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { ticker: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/snapshot/locale/global/markets/crypto/tickers/:ticker/book': {
      $get:
        | {
            input: { param: { ticker: string } }
            output: {
              data?:
                | {
                    askCount: number
                    asks: { p: number; x: { [x: string]: unknown } }[]
                    bidCount: number
                    bids: { p: number; x: { [x: string]: unknown } }[]
                    spread: number
                    ticker: string
                    updated: number
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { ticker: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/snapshot/locale/global/markets/crypto/:direction': {
      $get:
        | {
            input: { param: { direction: 'gainers' | 'losers' } }
            output: {
              tickers?:
                | {
                    day: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    fmv?: number | undefined
                    lastTrade: {
                      c: number[]
                      i: string
                      p: number
                      s: number
                      t: number
                      x: number
                    }
                    min: {
                      c: number
                      h: number
                      l: number
                      n: number
                      o: number
                      t: number
                      v: number
                      vw: number
                    }
                    prevDay: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    ticker: string
                    todaysChange: number
                    todaysChangePerc: number
                    updated: number
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { direction: 'gainers' | 'losers' } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { direction: 'gainers' | 'losers' } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/snapshot/locale/global/markets/forex/tickers': {
      $get:
        | {
            input: { query: { tickers?: string[] | undefined } }
            output: {
              status: string
              tickers?:
                | {
                    day: { c: number; h: number; l: number; o: number; v: number }
                    fmv?: number | undefined
                    lastQuote: { a: number; b: number; t: number; x: number }
                    min: {
                      c?: number | undefined
                      h?: number | undefined
                      l?: number | undefined
                      n?: number | undefined
                      o?: number | undefined
                      t?: number | undefined
                      v?: number | undefined
                    }
                    prevDay: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    ticker: string
                    todaysChange: number
                    todaysChangePerc: number
                    updated: number
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tickers?: string[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { tickers?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/snapshot/locale/global/markets/forex/tickers/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } }
            output: {
              status: string
              request_id: string
              ticker?:
                | {
                    day: { c: number; h: number; l: number; o: number; v: number }
                    fmv?: number | undefined
                    lastQuote: { a: number; b: number; t: number; x: number }
                    min: {
                      c?: number | undefined
                      h?: number | undefined
                      l?: number | undefined
                      n?: number | undefined
                      o?: number | undefined
                      t?: number | undefined
                      v?: number | undefined
                    }
                    prevDay: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    ticker: string
                    todaysChange: number
                    todaysChangePerc: number
                    updated: number
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { ticker: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/snapshot/locale/global/markets/forex/:direction': {
      $get:
        | {
            input: { param: { direction: 'gainers' | 'losers' } }
            output: {
              status: string
              tickers?:
                | {
                    day: { c: number; h: number; l: number; o: number; v: number }
                    fmv?: number | undefined
                    lastQuote: { a: number; b: number; t: number; x: number }
                    min: {
                      c?: number | undefined
                      h?: number | undefined
                      l?: number | undefined
                      n?: number | undefined
                      o?: number | undefined
                      t?: number | undefined
                      v?: number | undefined
                    }
                    prevDay: { c: number; h: number; l: number; o: number; v: number; vw: number }
                    ticker: string
                    todaysChange: number
                    todaysChangePerc: number
                    updated: number
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { direction: 'gainers' | 'losers' } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { direction: 'gainers' | 'losers' } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/snapshot/locale/us/markets/stocks/tickers': {
      $get:
        | {
            input: { query: { tickers?: string[] | undefined; include_otc?: boolean | undefined } }
            output: {
              count?: number | undefined
              status: string
              tickers?:
                | {
                    day?:
                      | {
                          c: number
                          dv?: string | undefined
                          h: number
                          l: number
                          o: number
                          otc?: boolean | undefined
                          v: number
                          vw: number
                        }
                      | undefined
                    fmv?: number | undefined
                    lastQuote?:
                      | { P: number; S: number; p: number; s: number; t: number }
                      | undefined
                    lastTrade?:
                      | {
                          c: number[]
                          ds: string
                          i: string
                          p: number
                          s: number
                          t: number
                          x: number
                        }
                      | undefined
                    min?:
                      | {
                          av: number
                          c: number
                          dav: string
                          dv?: string | undefined
                          h: number
                          l: number
                          n: number
                          o: number
                          otc?: boolean | undefined
                          t: number
                          v: number
                          vw: number
                        }
                      | undefined
                    prevDay?:
                      | {
                          c: number
                          h: number
                          l: number
                          o: number
                          otc?: boolean | undefined
                          v: number
                          vw: number
                        }
                      | undefined
                    ticker?: string | undefined
                    todaysChange?: number | undefined
                    todaysChangePerc?: number | undefined
                    updated?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tickers?: string[] | undefined; include_otc?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { tickers?: string[] | undefined; include_otc?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/snapshot/locale/us/markets/stocks/tickers/:stocksTicker': {
      $get:
        | {
            input: { param: { stocksTicker: string } }
            output: {
              status: string
              request_id: string
              ticker?:
                | {
                    day?:
                      | {
                          c: number
                          dv?: string | undefined
                          h: number
                          l: number
                          o: number
                          otc?: boolean | undefined
                          v: number
                          vw: number
                        }
                      | undefined
                    fmv?: number | undefined
                    lastQuote?:
                      | { P: number; S: number; p: number; s: number; t: number }
                      | undefined
                    lastTrade?:
                      | {
                          c: number[]
                          ds: string
                          i: string
                          p: number
                          s: number
                          t: number
                          x: number
                        }
                      | undefined
                    min?:
                      | {
                          av: number
                          c: number
                          dav: string
                          dv?: string | undefined
                          h: number
                          l: number
                          n: number
                          o: number
                          otc?: boolean | undefined
                          t: number
                          v: number
                          vw: number
                        }
                      | undefined
                    prevDay?:
                      | {
                          c: number
                          h: number
                          l: number
                          o: number
                          otc?: boolean | undefined
                          v: number
                          vw: number
                        }
                      | undefined
                    ticker?: string | undefined
                    todaysChange?: number | undefined
                    todaysChangePerc?: number | undefined
                    updated?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stocksTicker: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/snapshot/locale/us/markets/stocks/:direction': {
      $get:
        | {
            input: { param: { direction: 'gainers' | 'losers' } } & {
              query: { include_otc?: boolean | undefined }
            }
            output: {
              status: string
              tickers?:
                | {
                    day?:
                      | {
                          c: number
                          dv?: string | undefined
                          h: number
                          l: number
                          o: number
                          otc?: boolean | undefined
                          v: number
                          vw: number
                        }
                      | undefined
                    fmv?: number | undefined
                    lastQuote?:
                      | { P: number; S: number; p: number; s: number; t: number }
                      | undefined
                    lastTrade?:
                      | {
                          c: number[]
                          ds: string
                          i: string
                          p: number
                          s: number
                          t: number
                          x: number
                        }
                      | undefined
                    min?:
                      | {
                          av: number
                          c: number
                          dav: string
                          dv?: string | undefined
                          h: number
                          l: number
                          n: number
                          o: number
                          otc?: boolean | undefined
                          t: number
                          v: number
                          vw: number
                        }
                      | undefined
                    prevDay?:
                      | {
                          c: number
                          h: number
                          l: number
                          o: number
                          otc?: boolean | undefined
                          v: number
                          vw: number
                        }
                      | undefined
                    ticker?: string | undefined
                    todaysChange?: number | undefined
                    todaysChangePerc?: number | undefined
                    updated?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { direction: 'gainers' | 'losers' } } & {
              query: { include_otc?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { direction: 'gainers' | 'losers' } } & {
              query: { include_otc?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/ticks/stocks/nbbo/:ticker/:date': {
      $get:
        | {
            input: { param: { ticker: string; date: string } } & {
              query: {
                timestamp?: number | undefined
                timestampLimit?: number | undefined
                reverse?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: {
              db_latency?: number | undefined
              results_count?: number | undefined
              success?: boolean | undefined
              ticker?: string | undefined
              results?:
                | {
                    T: string
                    f: number
                    q: bigint
                    t: number
                    y: number
                    P: number
                    S: number
                    X: number
                    c: number[]
                    i: number[]
                    p: number
                    s: number
                    x: number
                    z: number
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string; date: string } } & {
              query: {
                timestamp?: number | undefined
                timestampLimit?: number | undefined
                reverse?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v2/ticks/stocks/trades/:ticker/:date': {
      $get:
        | {
            input: { param: { ticker: string; date: string } } & {
              query: {
                timestamp?: number | undefined
                timestampLimit?: number | undefined
                reverse?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: {
              db_latency?: number | undefined
              results_count?: number | undefined
              success?: boolean | undefined
              ticker?: string | undefined
              results?:
                | {
                    T: string
                    f: number
                    q: bigint
                    t: number
                    y: number
                    c: number[]
                    e: number
                    i: string
                    p: number
                    r: number
                    s: number
                    x: number
                    z: number
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string; date: string } } & {
              query: {
                timestamp?: number | undefined
                timestampLimit?: number | undefined
                reverse?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v3/quotes/:fxTicker': {
      $get:
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    ask_exchange?: number | undefined
                    ask_price?: number | undefined
                    bid_exchange?: number | undefined
                    bid_price?: number | undefined
                    participant_timestamp: bigint
                  }[]
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fxTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/quotes/:optionsTicker': {
      $get:
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    ask_exchange?: number | undefined
                    ask_price?: number | undefined
                    ask_size?: number | undefined
                    bid_exchange?: number | undefined
                    bid_price?: number | undefined
                    bid_size?: number | undefined
                    sequence_number: bigint
                    sip_timestamp: bigint
                  }[]
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/quotes/:stockTicker': {
      $get:
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    ask_exchange?: number | undefined
                    ask_price?: number | undefined
                    ask_size?: number | undefined
                    bid_exchange?: number | undefined
                    bid_price?: number | undefined
                    bid_size?: number | undefined
                    conditions?: number[] | undefined
                    indicators?: number[] | undefined
                    participant_timestamp: bigint
                    sequence_number: bigint
                    sip_timestamp: bigint
                    tape?: number | undefined
                    trf_timestamp?: bigint | undefined
                  }[]
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/reference/conditions': {
      $get:
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | undefined
                data_type?: 'trade' | 'bbo' | 'nbbo' | undefined
                id?: number | undefined
                sip?: 'CTA' | 'UTP' | 'OPRA' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'asset_class' | 'id' | 'type' | 'name' | 'data_types' | 'legacy' | undefined
              }
            }
            output: {
              count: number
              next_url?: string | undefined
              request_id: string
              results: {
                abbreviation?: string | undefined
                asset_class: 'stocks' | 'options' | 'crypto' | 'fx'
                data_types: ('trade' | 'bbo' | 'nbbo')[]
                description?: string | undefined
                exchange?: number | undefined
                id: number
                legacy?: boolean | undefined
                name: string
                sip_mapping: {
                  CTA?: string | undefined
                  OPRA?: string | undefined
                  UTP?: string | undefined
                }
                type:
                  | 'sale_condition'
                  | 'quote_condition'
                  | 'sip_generated_flag'
                  | 'financial_status_indicator'
                  | 'short_sale_restriction_indicator'
                  | 'settlement_condition'
                  | 'market_condition'
                  | 'trade_thru_exempt'
                update_rules?:
                  | {
                      consolidated: {
                        updates_high_low: boolean
                        updates_open_close: boolean
                        updates_volume: boolean
                      }
                      market_center: {
                        updates_high_low: boolean
                        updates_open_close: boolean
                        updates_volume: boolean
                      }
                    }
                  | undefined
              }[]
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | undefined
                data_type?: 'trade' | 'bbo' | 'nbbo' | undefined
                id?: number | undefined
                sip?: 'CTA' | 'UTP' | 'OPRA' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'asset_class' | 'id' | 'type' | 'name' | 'data_types' | 'legacy' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | undefined
                data_type?: 'trade' | 'bbo' | 'nbbo' | undefined
                id?: number | undefined
                sip?: 'CTA' | 'UTP' | 'OPRA' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'asset_class' | 'id' | 'type' | 'name' | 'data_types' | 'legacy' | undefined
              }
            }
            output: {
              count: number
              next_url?: string | undefined
              request_id: string
              results: {
                abbreviation?: string | undefined
                asset_class: 'stocks' | 'options' | 'crypto' | 'fx'
                data_types: ('trade' | 'bbo' | 'nbbo')[]
                description?: string | undefined
                exchange?: number | undefined
                id: number
                legacy?: boolean | undefined
                name: string
                sip_mapping: {
                  CTA?: string | undefined
                  OPRA?: string | undefined
                  UTP?: string | undefined
                }
                type:
                  | 'sale_condition'
                  | 'quote_condition'
                  | 'sip_generated_flag'
                  | 'financial_status_indicator'
                  | 'short_sale_restriction_indicator'
                  | 'settlement_condition'
                  | 'market_condition'
                  | 'trade_thru_exempt'
                update_rules?:
                  | {
                      consolidated: {
                        updates_high_low: boolean
                        updates_open_close: boolean
                        updates_volume: boolean
                      }
                      market_center: {
                        updates_high_low: boolean
                        updates_open_close: boolean
                        updates_volume: boolean
                      }
                    }
                  | undefined
              }[]
              status: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | undefined
                data_type?: 'trade' | 'bbo' | 'nbbo' | undefined
                id?: number | undefined
                sip?: 'CTA' | 'UTP' | 'OPRA' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'asset_class' | 'id' | 'type' | 'name' | 'data_types' | 'legacy' | undefined
              }
            }
            output: {
              count: number
              next_url?: string | undefined
              request_id: string
              results: {
                abbreviation?: string | undefined
                asset_class: 'stocks' | 'options' | 'crypto' | 'fx'
                data_types: ('trade' | 'bbo' | 'nbbo')[]
                description?: string | undefined
                exchange?: number | undefined
                id: number
                legacy?: boolean | undefined
                name: string
                sip_mapping: {
                  CTA?: string | undefined
                  OPRA?: string | undefined
                  UTP?: string | undefined
                }
                type:
                  | 'sale_condition'
                  | 'quote_condition'
                  | 'sip_generated_flag'
                  | 'financial_status_indicator'
                  | 'short_sale_restriction_indicator'
                  | 'settlement_condition'
                  | 'market_condition'
                  | 'trade_thru_exempt'
                update_rules?:
                  | {
                      consolidated: {
                        updates_high_low: boolean
                        updates_open_close: boolean
                        updates_volume: boolean
                      }
                      market_center: {
                        updates_high_low: boolean
                        updates_open_close: boolean
                        updates_volume: boolean
                      }
                    }
                  | undefined
              }[]
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v3/reference/dividends': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                ex_dividend_date?: string | undefined
                record_date?: string | undefined
                declaration_date?: string | undefined
                pay_date?: string | undefined
                frequency?: 0 | 1 | 2 | 4 | 12 | 24 | 52 | undefined
                cash_amount?: number | undefined
                dividend_type?: 'CD' | 'SC' | 'LT' | 'ST' | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ex_dividend_date.gte'?: string | undefined
                'ex_dividend_date.gt'?: string | undefined
                'ex_dividend_date.lte'?: string | undefined
                'ex_dividend_date.lt'?: string | undefined
                'record_date.gte'?: string | undefined
                'record_date.gt'?: string | undefined
                'record_date.lte'?: string | undefined
                'record_date.lt'?: string | undefined
                'declaration_date.gte'?: string | undefined
                'declaration_date.gt'?: string | undefined
                'declaration_date.lte'?: string | undefined
                'declaration_date.lt'?: string | undefined
                'pay_date.gte'?: string | undefined
                'pay_date.gt'?: string | undefined
                'pay_date.lte'?: string | undefined
                'pay_date.lt'?: string | undefined
                'cash_amount.gte'?: number | undefined
                'cash_amount.gt'?: number | undefined
                'cash_amount.lte'?: number | undefined
                'cash_amount.lt'?: number | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?:
                  | 'ex_dividend_date'
                  | 'pay_date'
                  | 'declaration_date'
                  | 'record_date'
                  | 'cash_amount'
                  | 'ticker'
                  | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id: string
              results?:
                | {
                    cash_amount: number
                    currency?: string | undefined
                    declaration_date?: string | undefined
                    dividend_type: 'CD' | 'SC' | 'LT' | 'ST'
                    ex_dividend_date: string
                    frequency: number
                    id: string
                    pay_date?: string | undefined
                    record_date?: string | undefined
                    ticker: string
                  }[]
                | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                ex_dividend_date?: string | undefined
                record_date?: string | undefined
                declaration_date?: string | undefined
                pay_date?: string | undefined
                frequency?: 0 | 1 | 2 | 4 | 12 | 24 | 52 | undefined
                cash_amount?: number | undefined
                dividend_type?: 'CD' | 'SC' | 'LT' | 'ST' | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                'ex_dividend_date.gte'?: string | undefined
                'ex_dividend_date.gt'?: string | undefined
                'ex_dividend_date.lte'?: string | undefined
                'ex_dividend_date.lt'?: string | undefined
                'record_date.gte'?: string | undefined
                'record_date.gt'?: string | undefined
                'record_date.lte'?: string | undefined
                'record_date.lt'?: string | undefined
                'declaration_date.gte'?: string | undefined
                'declaration_date.gt'?: string | undefined
                'declaration_date.lte'?: string | undefined
                'declaration_date.lt'?: string | undefined
                'pay_date.gte'?: string | undefined
                'pay_date.gt'?: string | undefined
                'pay_date.lte'?: string | undefined
                'pay_date.lt'?: string | undefined
                'cash_amount.gte'?: number | undefined
                'cash_amount.gt'?: number | undefined
                'cash_amount.lte'?: number | undefined
                'cash_amount.lt'?: number | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?:
                  | 'ex_dividend_date'
                  | 'pay_date'
                  | 'declaration_date'
                  | 'record_date'
                  | 'cash_amount'
                  | 'ticker'
                  | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/reference/exchanges': {
      $get:
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | 'futures' | undefined
                locale?: 'us' | 'global' | undefined
              }
            }
            output: {
              count?: number | undefined
              request_id: string
              results?:
                | {
                    acronym?: string | undefined
                    asset_class: 'stocks' | 'options' | 'crypto' | 'fx' | 'futures'
                    id: number
                    locale: 'us' | 'global'
                    mic?: string | undefined
                    name: string
                    operating_mic?: string | undefined
                    participant_id?: string | undefined
                    type: 'exchange' | 'TRF' | 'SIP'
                    url?: string | undefined
                  }[]
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | 'futures' | undefined
                locale?: 'us' | 'global' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | 'futures' | undefined
                locale?: 'us' | 'global' | undefined
              }
            }
            output: { count?: number | undefined; request_id: string; status: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | 'futures' | undefined
                locale?: 'us' | 'global' | undefined
              }
            }
            output: { count?: number | undefined; request_id: string; status: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v3/reference/options/contracts': {
      $get:
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                ticker?: string | undefined
                contract_type?: 'call' | 'put' | undefined
                expiration_date?: string | undefined
                as_of?: string | undefined
                strike_price?: number | undefined
                expired?: boolean | undefined
                'underlying_ticker.gte'?: string | undefined
                'underlying_ticker.gt'?: string | undefined
                'underlying_ticker.lte'?: string | undefined
                'underlying_ticker.lt'?: string | undefined
                'expiration_date.gte'?: string | undefined
                'expiration_date.gt'?: string | undefined
                'expiration_date.lte'?: string | undefined
                'expiration_date.lt'?: string | undefined
                'strike_price.gte'?: number | undefined
                'strike_price.gt'?: number | undefined
                'strike_price.lte'?: number | undefined
                'strike_price.lt'?: number | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?:
                  | 'ticker'
                  | 'underlying_ticker'
                  | 'expiration_date'
                  | 'strike_price'
                  | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    additional_underlyings?:
                      | {
                          amount?: number | undefined
                          type?: string | undefined
                          underlying?: string | undefined
                        }[]
                      | undefined
                    cfi?: string | undefined
                    company_ticker?: string | undefined
                    contract_type?: string | undefined
                    correction?: number | undefined
                    exercise_style?: 'american' | 'european' | 'bermudan' | undefined
                    expiration_date?: string | undefined
                    metric?: string | undefined
                    primary_exchange?: string | undefined
                    report_time?: 'AM' | 'PM' | undefined
                    reporting_period?: string | undefined
                    scale?: number | undefined
                    shares_per_contract?: number | undefined
                    strike_price?: number | undefined
                    ticker?: string | undefined
                    type?: 'standard' | 'binary' | undefined
                    underlying_ticker?: string | undefined
                    underlying_type?: 'kpi' | 'equity' | undefined
                  }[]
                | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                underlying_ticker?: string | undefined
                ticker?: string | undefined
                contract_type?: 'call' | 'put' | undefined
                expiration_date?: string | undefined
                as_of?: string | undefined
                strike_price?: number | undefined
                expired?: boolean | undefined
                'underlying_ticker.gte'?: string | undefined
                'underlying_ticker.gt'?: string | undefined
                'underlying_ticker.lte'?: string | undefined
                'underlying_ticker.lt'?: string | undefined
                'expiration_date.gte'?: string | undefined
                'expiration_date.gt'?: string | undefined
                'expiration_date.lte'?: string | undefined
                'expiration_date.lt'?: string | undefined
                'strike_price.gte'?: number | undefined
                'strike_price.gt'?: number | undefined
                'strike_price.lte'?: number | undefined
                'strike_price.lt'?: number | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?:
                  | 'ticker'
                  | 'underlying_ticker'
                  | 'expiration_date'
                  | 'strike_price'
                  | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/reference/options/contracts/:options_ticker': {
      $get:
        | {
            input: { param: { options_ticker: string } } & { query: { as_of?: string | undefined } }
            output: {
              request_id?: string | undefined
              results?:
                | {
                    additional_underlyings?:
                      | {
                          amount?: number | undefined
                          type?: string | undefined
                          underlying?: string | undefined
                        }[]
                      | undefined
                    cfi?: string | undefined
                    company_ticker?: string | undefined
                    contract_type?: string | undefined
                    correction?: number | undefined
                    exercise_style?: 'american' | 'european' | 'bermudan' | undefined
                    expiration_date?: string | undefined
                    metric?: string | undefined
                    primary_exchange?: string | undefined
                    report_time?: 'AM' | 'PM' | undefined
                    reporting_period?: string | undefined
                    scale?: number | undefined
                    shares_per_contract?: number | undefined
                    strike_price?: number | undefined
                    ticker?: string | undefined
                    type?: 'standard' | 'binary' | undefined
                    underlying_ticker?: string | undefined
                    underlying_type?: 'kpi' | 'equity' | undefined
                  }
                | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { options_ticker: string } } & { query: { as_of?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/reference/splits': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                execution_date?: string | undefined
                reverse_split?: (boolean | null) | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                'execution_date.gte'?: string | undefined
                'execution_date.gt'?: string | undefined
                'execution_date.lte'?: string | undefined
                'execution_date.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'execution_date' | 'ticker' | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    execution_date: string
                    id: string
                    split_from: number
                    split_to: number
                    ticker: string
                  }[]
                | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                execution_date?: string | undefined
                reverse_split?: (boolean | null) | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                'execution_date.gte'?: string | undefined
                'execution_date.gt'?: string | undefined
                'execution_date.lte'?: string | undefined
                'execution_date.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'execution_date' | 'ticker' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/reference/tickers': {
      $get:
        | {
            input: {
              query: {
                ticker?: string | undefined
                type?:
                  | 'CS'
                  | 'ADRC'
                  | 'ADRP'
                  | 'ADRR'
                  | 'UNIT'
                  | 'RIGHT'
                  | 'PFD'
                  | 'FUND'
                  | 'SP'
                  | 'WARRANT'
                  | 'INDEX'
                  | 'ETF'
                  | 'ETN'
                  | 'OS'
                  | 'GDR'
                  | 'OTHER'
                  | 'NYRS'
                  | 'AGEN'
                  | 'EQLK'
                  | 'BOND'
                  | 'ADRW'
                  | 'BASKET'
                  | 'LT'
                  | undefined
                market?: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices' | undefined
                exchange?: string | undefined
                cusip?: string | undefined
                cik?: string | undefined
                date?: string | undefined
                search?: string | undefined
                active?: boolean | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?:
                  | 'ticker'
                  | 'name'
                  | 'market'
                  | 'locale'
                  | 'primary_exchange'
                  | 'type'
                  | 'currency_symbol'
                  | 'currency_name'
                  | 'base_currency_symbol'
                  | 'base_currency_name'
                  | 'cik'
                  | 'composite_figi'
                  | 'share_class_figi'
                  | 'last_updated_utc'
                  | 'delisted_utc'
                  | undefined
              }
            }
            output: {
              count?: number | undefined
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    active?: boolean | undefined
                    base_currency_name?: string | undefined
                    base_currency_symbol?: string | undefined
                    cik?: string | undefined
                    composite_figi?: string | undefined
                    currency_name?: string | undefined
                    currency_symbol?: string | undefined
                    delisted_utc?: string | undefined
                    last_updated_utc?: string | undefined
                    locale: 'us' | 'global'
                    market: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices'
                    name: string
                    primary_exchange?: string | undefined
                    share_class_figi?: string | undefined
                    ticker: string
                    type?: string | undefined
                  }[]
                | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                type?:
                  | 'CS'
                  | 'ADRC'
                  | 'ADRP'
                  | 'ADRR'
                  | 'UNIT'
                  | 'RIGHT'
                  | 'PFD'
                  | 'FUND'
                  | 'SP'
                  | 'WARRANT'
                  | 'INDEX'
                  | 'ETF'
                  | 'ETN'
                  | 'OS'
                  | 'GDR'
                  | 'OTHER'
                  | 'NYRS'
                  | 'AGEN'
                  | 'EQLK'
                  | 'BOND'
                  | 'ADRW'
                  | 'BASKET'
                  | 'LT'
                  | undefined
                market?: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices' | undefined
                exchange?: string | undefined
                cusip?: string | undefined
                cik?: string | undefined
                date?: string | undefined
                search?: string | undefined
                active?: boolean | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?:
                  | 'ticker'
                  | 'name'
                  | 'market'
                  | 'locale'
                  | 'primary_exchange'
                  | 'type'
                  | 'currency_symbol'
                  | 'currency_name'
                  | 'base_currency_symbol'
                  | 'base_currency_name'
                  | 'cik'
                  | 'composite_figi'
                  | 'share_class_figi'
                  | 'last_updated_utc'
                  | 'delisted_utc'
                  | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ticker?: string | undefined
                type?:
                  | 'CS'
                  | 'ADRC'
                  | 'ADRP'
                  | 'ADRR'
                  | 'UNIT'
                  | 'RIGHT'
                  | 'PFD'
                  | 'FUND'
                  | 'SP'
                  | 'WARRANT'
                  | 'INDEX'
                  | 'ETF'
                  | 'ETN'
                  | 'OS'
                  | 'GDR'
                  | 'OTHER'
                  | 'NYRS'
                  | 'AGEN'
                  | 'EQLK'
                  | 'BOND'
                  | 'ADRW'
                  | 'BASKET'
                  | 'LT'
                  | undefined
                market?: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices' | undefined
                exchange?: string | undefined
                cusip?: string | undefined
                cik?: string | undefined
                date?: string | undefined
                search?: string | undefined
                active?: boolean | undefined
                'ticker.gte'?: string | undefined
                'ticker.gt'?: string | undefined
                'ticker.lte'?: string | undefined
                'ticker.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?:
                  | 'ticker'
                  | 'name'
                  | 'market'
                  | 'locale'
                  | 'primary_exchange'
                  | 'type'
                  | 'currency_symbol'
                  | 'currency_name'
                  | 'base_currency_symbol'
                  | 'base_currency_name'
                  | 'cik'
                  | 'composite_figi'
                  | 'share_class_figi'
                  | 'last_updated_utc'
                  | 'delisted_utc'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v3/reference/tickers/types': {
      $get:
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | 'indices' | undefined
                locale?: 'us' | 'global' | undefined
              }
            }
            output: {
              count?: number | undefined
              request_id: string
              results?:
                | {
                    asset_class: 'stocks' | 'options' | 'crypto' | 'fx' | 'indices'
                    code: string
                    description: string
                    locale: 'us' | 'global'
                  }[]
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | 'indices' | undefined
                locale?: 'us' | 'global' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | 'indices' | undefined
                locale?: 'us' | 'global' | undefined
              }
            }
            output: { count?: number | undefined; request_id: string; status: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset_class?: 'stocks' | 'options' | 'crypto' | 'fx' | 'indices' | undefined
                locale?: 'us' | 'global' | undefined
              }
            }
            output: { count?: number | undefined; request_id: string; status: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v3/reference/tickers/:ticker': {
      $get:
        | {
            input: { param: { ticker: string } } & { query: { date?: string | undefined } }
            output: {
              count?: number | undefined
              request_id?: string | undefined
              results?:
                | {
                    active: boolean
                    address?:
                      | {
                          address1?: string | undefined
                          address2?: string | undefined
                          city?: string | undefined
                          postal_code?: string | undefined
                          state?: string | undefined
                        }
                      | undefined
                    branding?:
                      | { icon_url?: string | undefined; logo_url?: string | undefined }
                      | undefined
                    cik?: string | undefined
                    composite_figi?: string | undefined
                    currency_name: string
                    delisted_utc?: string | undefined
                    description?: string | undefined
                    homepage_url?: string | undefined
                    list_date?: string | undefined
                    locale: 'us' | 'global'
                    market: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices'
                    market_cap?: number | undefined
                    name: string
                    phone_number?: string | undefined
                    primary_exchange?: string | undefined
                    round_lot?: number | undefined
                    share_class_figi?: string | undefined
                    share_class_shares_outstanding?: number | undefined
                    sic_code?: string | undefined
                    sic_description?: string | undefined
                    ticker: string
                    ticker_root?: string | undefined
                    ticker_suffix?: string | undefined
                    total_employees?: number | undefined
                    type?: string | undefined
                    weighted_shares_outstanding?: number | undefined
                  }
                | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & { query: { date?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticker: string } } & { query: { date?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v3/snapshot': {
      $get: {
        input: {
          query: {
            ticker?: string | undefined
            type?: 'stocks' | 'options' | 'crypto' | 'fx' | 'indices' | undefined
            'ticker.gte'?: string | undefined
            'ticker.gt'?: string | undefined
            'ticker.lte'?: string | undefined
            'ticker.lt'?: string | undefined
            'ticker.any_of'?: string | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?: 'ticker' | undefined
          }
        }
        output: {
          next_url?: string | undefined
          request_id: string
          results?:
            | {
                break_even_price?: number | undefined
                details?:
                  | {
                      contract_type: 'put' | 'call' | 'other'
                      exercise_style: 'american' | 'european' | 'bermudan'
                      expiration_date: string
                      shares_per_contract: number
                      strike_price: number
                    }
                  | undefined
                error?: string | undefined
                fmv?: number | undefined
                fmv_last_updated?: bigint | undefined
                greeks?: { delta: number; gamma: number; theta: number; vega: number } | undefined
                implied_volatility?: number | undefined
                last_minute?:
                  | {
                      close: number
                      decimal_volume?: string | undefined
                      high: number
                      low: number
                      open: number
                      transactions: number
                      volume: number
                      vwap: number
                    }
                  | undefined
                last_quote?:
                  | {
                      ask: number
                      ask_exchange?: number | undefined
                      ask_size?: number | undefined
                      bid: number
                      bid_exchange?: number | undefined
                      bid_size?: number | undefined
                      last_updated: bigint
                      midpoint?: number | undefined
                      timeframe: 'DELAYED' | 'REAL-TIME'
                    }
                  | undefined
                last_trade?:
                  | {
                      conditions?: number[] | undefined
                      decimal_size?: string | undefined
                      exchange?: number | undefined
                      id?: string | undefined
                      last_updated?: bigint | undefined
                      participant_timestamp?: bigint | undefined
                      price: number
                      sip_timestamp?: bigint | undefined
                      size: number
                      timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                    }
                  | undefined
                last_updated?: bigint | undefined
                market_status?: string | undefined
                message?: string | undefined
                name?: string | undefined
                open_interest?: number | undefined
                session?:
                  | {
                      change?: number | undefined
                      change_percent?: number | undefined
                      close?: number | undefined
                      decimal_volume?: string | undefined
                      early_trading_change?: number | undefined
                      early_trading_change_percent?: number | undefined
                      high?: number | undefined
                      last_updated?: bigint | undefined
                      late_trading_change?: number | undefined
                      late_trading_change_percent?: number | undefined
                      low?: number | undefined
                      open?: number | undefined
                      overnight_trading_change?: number | undefined
                      overnight_trading_change_percent?: number | undefined
                      previous_close?: number | undefined
                      price?: number | undefined
                      regular_trading_change?: number | undefined
                      regular_trading_change_percent?: number | undefined
                      volume?: number | undefined
                      vwap?: number | undefined
                    }
                  | undefined
                ticker: string
                timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                type?: 'stocks' | 'options' | 'fx' | 'crypto' | 'indices' | undefined
                underlying_asset?:
                  | {
                      change_to_break_even: number
                      last_updated?: bigint | undefined
                      price?: number | undefined
                      ticker: string
                      timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                      value?: number | undefined
                    }
                  | undefined
                value?: number | undefined
              }[]
            | undefined
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/snapshot/indices': {
      $get: {
        input: {
          query: {
            'ticker.any_of'?: string | undefined
            ticker?: string | undefined
            'ticker.gte'?: string | undefined
            'ticker.gt'?: string | undefined
            'ticker.lte'?: string | undefined
            'ticker.lt'?: string | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?: 'ticker' | undefined
          }
        }
        output: {
          next_url?: string | undefined
          request_id: string
          results?:
            | {
                error?: string | undefined
                last_updated?: bigint | undefined
                market_status?: string | undefined
                message?: string | undefined
                name?: string | undefined
                session?:
                  | {
                      change?: number | undefined
                      change_percent?: number | undefined
                      close?: number | undefined
                      high?: number | undefined
                      low?: number | undefined
                      open?: number | undefined
                      previous_close?: number | undefined
                    }
                  | undefined
                ticker: string
                timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                type?: 'indices' | undefined
                value?: number | undefined
              }[]
            | undefined
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/snapshot/options/:underlyingAsset': {
      $get: {
        input: { param: { underlyingAsset: string } } & {
          query: {
            strike_price?: number | undefined
            expiration_date?: string | undefined
            contract_type?: 'call' | 'put' | undefined
            'strike_price.gte'?: number | undefined
            'strike_price.gt'?: number | undefined
            'strike_price.lte'?: number | undefined
            'strike_price.lt'?: number | undefined
            'expiration_date.gte'?: string | undefined
            'expiration_date.gt'?: string | undefined
            'expiration_date.lte'?: string | undefined
            'expiration_date.lt'?: string | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?: 'ticker' | 'expiration_date' | 'strike_price' | undefined
          }
        }
        output: {
          next_url?: string | undefined
          request_id: string
          results?:
            | {
                break_even_price: number
                day: {
                  change: number
                  change_percent: number
                  close: number
                  high: number
                  last_updated?: bigint | undefined
                  low: number
                  open: number
                  previous_close: number
                  volume: number
                  vwap: number
                }
                details: {
                  contract_type: 'put' | 'call' | 'other'
                  exercise_style: 'american' | 'european' | 'bermudan'
                  expiration_date: string
                  shares_per_contract: number
                  strike_price: number
                  ticker: string
                }
                fmv?: number | undefined
                fmv_last_updated?: bigint | undefined
                greeks?: { delta: number; gamma: number; theta: number; vega: number } | undefined
                implied_volatility?: number | undefined
                last_quote: {
                  ask: number
                  ask_exchange?: number | undefined
                  ask_size: number
                  bid: number
                  bid_exchange?: number | undefined
                  bid_size: number
                  last_updated?: bigint | undefined
                  midpoint: number
                  timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                }
                last_trade?:
                  | {
                      conditions?: number[] | undefined
                      exchange: number
                      price: number
                      sip_timestamp: bigint
                      size: number
                      timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                    }
                  | undefined
                open_interest: number
                underlying_asset: {
                  change_to_break_even: number
                  last_updated?: bigint | undefined
                  price?: number | undefined
                  ticker: string
                  timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                  value?: number | undefined
                }
              }[]
            | undefined
          status: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/snapshot/options/:underlyingAsset/:optionContract': {
      $get:
        | {
            input: { param: { underlyingAsset: string; optionContract: string } }
            output: {
              next_url?: string | undefined
              request_id: string
              results?:
                | {
                    break_even_price: number
                    day: {
                      change: number
                      change_percent: number
                      close: number
                      high: number
                      last_updated?: bigint | undefined
                      low: number
                      open: number
                      previous_close: number
                      volume: number
                      vwap: number
                    }
                    details: {
                      contract_type: 'put' | 'call' | 'other'
                      exercise_style: 'american' | 'european' | 'bermudan'
                      expiration_date: string
                      shares_per_contract: number
                      strike_price: number
                      ticker: string
                    }
                    fmv?: number | undefined
                    fmv_last_updated?: bigint | undefined
                    greeks?:
                      | { delta: number; gamma: number; theta: number; vega: number }
                      | undefined
                    implied_volatility?: number | undefined
                    last_quote: {
                      ask: number
                      ask_exchange?: number | undefined
                      ask_size: number
                      bid: number
                      bid_exchange?: number | undefined
                      bid_size: number
                      last_updated?: bigint | undefined
                      midpoint: number
                      timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                    }
                    last_trade?:
                      | {
                          conditions?: number[] | undefined
                          exchange: number
                          price: number
                          sip_timestamp: bigint
                          size: number
                          timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                        }
                      | undefined
                    open_interest: number
                    underlying_asset: {
                      change_to_break_even: number
                      last_updated?: bigint | undefined
                      price?: number | undefined
                      ticker: string
                      timeframe?: 'DELAYED' | 'REAL-TIME' | undefined
                      value?: number | undefined
                    }
                  }
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { underlyingAsset: string; optionContract: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/trades/:cryptoTicker': {
      $get:
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    conditions?: number[] | undefined
                    exchange: number
                    id?: string | undefined
                    participant_timestamp?: bigint | undefined
                    price: number
                    received_timestamp?: bigint | undefined
                    size: number
                  }[]
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cryptoTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/trades/:optionsTicker': {
      $get:
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    conditions?: number[] | undefined
                    correction?: number | undefined
                    exchange: number
                    id?: string | undefined
                    participant_timestamp?: bigint | undefined
                    price: number
                    sequence_number?: bigint | undefined
                    sip_timestamp: bigint
                    size: number
                  }[]
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionsTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v3/trades/:stockTicker': {
      $get:
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: {
              next_url?: string | undefined
              request_id?: string | undefined
              results?:
                | {
                    conditions?: number[] | undefined
                    correction?: number | undefined
                    decimal_size: string
                    exchange: number
                    id: string
                    participant_timestamp?: bigint | undefined
                    price: number
                    sequence_number: bigint
                    sip_timestamp: bigint
                    size: number
                    tape?: number | undefined
                    trf_id?: number | undefined
                    trf_timestamp?: bigint | undefined
                  }[]
                | undefined
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stockTicker: string } } & {
              query: {
                timestamp?: string | undefined
                'timestamp.gte'?: string | undefined
                'timestamp.gt'?: string | undefined
                'timestamp.lte'?: string | undefined
                'timestamp.lt'?: string | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                sort?: 'timestamp' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/vX/reference/ipos': {
      $get: {
        input: {
          query: {
            ticker?: string | undefined
            us_code?: string | undefined
            isin?: string | undefined
            listing_date?: string | undefined
            ipo_status?:
              | 'direct_listing_process'
              | 'history'
              | 'new'
              | 'pending'
              | 'postponed'
              | 'rumor'
              | 'withdrawn'
              | undefined
            'listing_date.gte'?: string | undefined
            'listing_date.gt'?: string | undefined
            'listing_date.lte'?: string | undefined
            'listing_date.lt'?: string | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?:
              | 'listing_date'
              | 'ticker'
              | 'last_updated'
              | 'security_type'
              | 'issuer_name'
              | 'currency_code'
              | 'isin'
              | 'us_code'
              | 'final_issue_price'
              | 'min_shares_offered'
              | 'max_shares_offered'
              | 'lowest_offer_price'
              | 'highest_offer_price'
              | 'total_offer_size'
              | 'shares_outstanding'
              | 'primary_exchange'
              | 'lot_size'
              | 'security_description'
              | 'ipo_status'
              | 'announced_date'
              | undefined
          }
        }
        output: {
          next_url?: string | undefined
          request_id?: string | undefined
          results?:
            | {
                announced_date?: string | undefined
                currency_code?: string | undefined
                final_issue_price?: number | undefined
                highest_offer_price?: number | undefined
                ipo_status:
                  | 'direct_listing_process'
                  | 'history'
                  | 'new'
                  | 'pending'
                  | 'postponed'
                  | 'rumor'
                  | 'withdrawn'
                isin?: string | undefined
                issuer_name: string
                last_updated: string
                listing_date?: string | undefined
                lot_size?: number | undefined
                lowest_offer_price?: number | undefined
                max_shares_offered?: number | undefined
                min_shares_offered?: number | undefined
                primary_exchange?: string | undefined
                security_description?: string | undefined
                security_type: string
                shares_outstanding?: number | undefined
                ticker: string
                total_offer_size?: number | undefined
                us_code?: string | undefined
              }[]
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vX/reference/tickers/:id/events': {
      $get:
        | {
            input: { param: { id: string } } & { query: { types?: string | undefined } }
            output: {
              request_id?: string | undefined
              results?:
                | {
                    events?:
                      | {
                          date: string
                          event_type: string
                          ticker_change?: { ticker?: string | undefined } | undefined
                        }[]
                      | undefined
                    name?: string | undefined
                  }
                | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { types?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
