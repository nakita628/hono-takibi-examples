declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {
          query: {
            key: string
            ip: string
            format?: 'json' | 'xml' | undefined
            lang?:
              | 'ar'
              | 'cs'
              | 'da'
              | 'de'
              | 'en'
              | 'es'
              | 'et'
              | 'fi'
              | 'fr'
              | 'ga'
              | 'it'
              | 'ja'
              | 'ko'
              | 'ms'
              | 'nl'
              | 'pt'
              | 'ru'
              | 'sv'
              | 'tr'
              | 'vi'
              | 'zh-cn'
              | 'zh-tw'
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
