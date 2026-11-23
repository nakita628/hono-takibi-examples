declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {
          query: {
            package?:
              | 'WS1'
              | 'WS2'
              | 'WS3'
              | 'WS4'
              | 'WS5'
              | 'WS6'
              | 'WS7'
              | 'WS8'
              | 'WS9'
              | 'WS10'
              | 'WS11'
              | 'WS12'
              | 'WS13'
              | 'WS14'
              | 'WS15'
              | 'WS16'
              | 'WS17'
              | 'WS18'
              | 'WS19'
              | 'WS20'
              | 'WS21'
              | 'WS22'
              | 'WS23'
              | 'WS24'
              | 'WS25'
              | undefined
            addon?:
              | (
                  | 'continent'
                  | 'country'
                  | 'region'
                  | 'city'
                  | 'geotargeting'
                  | 'country_groupings'
                  | 'time_zone_info'
                )[]
              | undefined
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
            key: string
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
