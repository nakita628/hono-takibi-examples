declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/correlation': {
      $get: {
        input: { query: { tokens?: string | undefined; limit?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/indices': {
      $get: {
        input: {
          query: {
            exchanges?: string | undefined
            timeHorizon?: string | undefined
            lowCap?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/investor-grades': {
      $get: {
        input: {
          query: {
            tokens?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/market-indicator': {
      $get: {
        input: {
          query: {
            startDate?: string | undefined
            endDate?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/price': {
      $get: {
        input: {
          query: {
            tokens?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            limit?: string | undefined
            page?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/price-prediction': {
      $get: {
        input: {
          query: {
            tokens?: string | undefined
            date?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/quantmetrics-tier-1': {
      $get: {
        input: {
          query: {
            tokens?: string | undefined
            date?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/quantmetrics-tier-2': {
      $get: {
        input: {
          query: {
            tokens?: string | undefined
            date?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/resistance-support': {
      $get: {
        input: {
          query: {
            tokens?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/scenario-analysis': {
      $get: {
        input: { query: { tokens?: string | undefined; limit?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/sentiments': {
      $get: {
        input: {
          query: {
            tokens?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/tokens': {
      $get: {
        input: {
          query: {
            token_ids?: string | undefined
            token_names?: string | undefined
            token_symbols?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/trader-grades': {
      $get: {
        input: {
          query: {
            tokens?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            limit?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/trading-indicator': {
      $get: {
        input: { query: { tokens?: string | undefined; limit?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
