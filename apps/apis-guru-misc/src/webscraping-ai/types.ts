type Account = {
  remaining_api_calls?: number | undefined
  remaining_concurrency?: number | undefined
  resets_at?: number | undefined
}
type Error = { message?: string | undefined }
type PageError = { status_code?: number | undefined; status_message?: string | undefined }
type SelectedAreas = string[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/html': {
      $get:
        | {
            input: {
              query: {
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: PageError
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/selected': {
      $get:
        | {
            input: {
              query: {
                selector?: string | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                selector?: string | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                selector?: string | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                selector?: string | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                selector?: string | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                selector?: string | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                selector?: string | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: PageError
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                selector?: string | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/selected-multiple': {
      $get:
        | {
            input: {
              query: {
                selectors?: string[] | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: SelectedAreas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                selectors?: string[] | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                selectors?: string[] | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                selectors?: string[] | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                selectors?: string[] | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                selectors?: string[] | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                selectors?: string[] | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: PageError
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                selectors?: string[] | undefined
                url: string
                headers?: { [x: string]: string } | undefined
                timeout?: number | undefined
                js?: boolean | undefined
                js_timeout?: number | undefined
                proxy?: 'datacenter' | 'residential' | undefined
                country?:
                  | 'us'
                  | 'gb'
                  | 'de'
                  | 'it'
                  | 'fr'
                  | 'ca'
                  | 'es'
                  | 'ru'
                  | 'jp'
                  | 'kr'
                  | undefined
                device?: 'desktop' | 'mobile' | 'tablet' | undefined
                error_on_404?: boolean | undefined
                error_on_redirect?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  },
  '/'
>
export default routes
