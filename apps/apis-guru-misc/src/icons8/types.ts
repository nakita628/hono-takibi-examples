declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/iconsets/v3/categories?platform={platform}&language={language}': {
      $get: {
        input: {
          param: {
            platform: 'ios7' | 'win8' | 'win10' | 'android' | 'androidL' | 'color' | 'office'
            language: 'en-US' | 'fr-FR' | 'de-DE' | 'it-IT' | 'pt-BR' | 'pl-PL' | 'ru-RU' | 'es-ES'
          }
        }
        output: {
          parameters?: { language?: string | undefined; platform?: string | undefined } | undefined
          result?: { categories?: { [x: string]: unknown }[] | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/iconsets/v3/category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}': {
      $get: {
        input: {
          param: {
            category: string
            subcategory: string
            amount: number
            offset: number
            platform: 'ios7' | 'win8' | 'win10' | 'android' | 'androidL' | 'color' | 'office'
            language: 'en-US' | 'fr-FR' | 'de-DE' | 'it-IT' | 'pt-BR' | 'pl-PL' | 'ru-RU' | 'es-ES'
          }
        }
        output: {
          parameters?:
            | {
                amount?: number | undefined
                category?: string | undefined
                language?: string | undefined
                offset?: string | undefined
                platform?: string | undefined
                subcategory?: string | undefined
              }
            | undefined
          result?: { category?: { [x: string]: unknown }[] | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/iconsets/v3/latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}': {
      $get: {
        input: {
          param: {
            amount: number
            offset: number
            platform: 'ios7' | 'win8' | 'win10' | 'android' | 'androidL' | 'color' | 'office'
            language: 'en-US' | 'fr-FR' | 'de-DE' | 'it-IT' | 'pt-BR' | 'pl-PL' | 'ru-RU' | 'es-ES'
            term: string
          }
        }
        output: {
          parameters?:
            | {
                amount?: number | undefined
                language?: string | undefined
                offset?: string | undefined
                platform?: string | undefined
                term?: string | undefined
              }
            | undefined
          result?: { latest?: { [x: string]: unknown }[] | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/iconsets/v3/search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}': {
      $get: {
        input: {
          param: {
            term: string
            amount: number
            exact_amount: boolean
            offset: number
            platform: 'ios7' | 'win8' | 'win10' | 'android' | 'androidL' | 'color' | 'office'
            language: 'en-US' | 'fr-FR' | 'de-DE' | 'it-IT' | 'pt-BR' | 'pl-PL' | 'ru-RU' | 'es-ES'
          }
        }
        output: {
          parameters?:
            | {
                amount?: number | undefined
                language?: string | undefined
                offset?: string | undefined
                platform?: string | undefined
                term?: string | undefined
              }
            | undefined
          result?: { search?: { [x: string]: unknown }[] | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/iconsets/v3/total?since={since}': {
      $get: {
        input: { param: { since: string } }
        output: {
          parameters?: { since?: string | undefined } | undefined
          result?: { total?: { [x: string]: unknown }[] | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/iconsets/v4/search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}': {
      $get: {
        input: {
          param: {
            term: string
            amount: number
            offset: number
            platform:
              | 'all'
              | 'ios7'
              | 'ios11'
              | 'win8'
              | 'win10'
              | 'android'
              | 'androidL'
              | 'color'
              | 'office'
              | 'ultraviolet'
              | 'nolan'
              | 'p1em'
              | 'dotty'
              | 'dusk'
              | 'Dusk_Wired'
              | 'cotton'
              | 'doodle'
              | 'flat_round'
            language:
              | 'en-US'
              | 'fr-FR'
              | 'de-DE'
              | 'it-IT'
              | 'pt-BR'
              | 'pl-PL'
              | 'ru-RU'
              | 'es-ES'
              | 'zh-CN'
              | 'ja-JP'
            exact_amount: string
          }
        }
        output: {
          icons?: { [x: string]: unknown }[] | undefined
          parameters?:
            | {
                'amount `50`'?: string | undefined
                language?: string | undefined
                offset?: string | undefined
                platform?: string | undefined
                term?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/task/web-font/collection': {
      $post: {
        input: {
          json: {
            auth?: { hash: string } | undefined
            task?:
              | {
                  arguments?:
                    | {
                        collection: string
                        css_prefix?: string | undefined
                        css_rules_case?: 'lowercase' | 'as_is' | undefined
                        css_selector?: string | undefined
                        font_name: string
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: {
          messages?: { [x: string]: unknown }[] | undefined
          result?:
            | {
                description?: string | undefined
                id: string
                results?: { zip?: string | undefined } | undefined
                status: string
                type: string
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/task/web-font/icons': {
      $post: {
        input: {
          json: {
            auth?: { hash: string } | undefined
            task?:
              | {
                  arguments?:
                    | {
                        collection: string
                        css_prefix?: string | undefined
                        css_rules_case?: 'lowercase' | 'as_is' | undefined
                        css_selector?: string | undefined
                        font_name: string
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: {
          messages?: { [x: string]: unknown }[] | undefined
          result?:
            | {
                description?: string | undefined
                id: string
                results?: { zip?: string | undefined } | undefined
                status: string
                type: string
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
