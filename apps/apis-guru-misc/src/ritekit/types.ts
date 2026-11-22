declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/emoji/auto-emojify': {
      $get: { input: { query: { text: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/emoji/suggestions': {
      $get: { input: { query: { text: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/images/animate': {
      $get: {
        input: { query: { url: string; type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/images/logo': {
      $get: { input: { query: { domain: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/images/quote': {
      $get: {
        input: {
          query: {
            quote: string
            author: string
            fontSize: number
            quoteFont: string
            quoteFontColor: string
            authorFont: string
            authorFontColor: string
            enableHighlight: number
            highlightColor: string
            bgType: string
            backgroundColor: string
            gradientType: string
            gradientColor1: string
            gradientColor2: string
            brandLogo: string
            animation: string
            showQuoteMark?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/v1/link/cta': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/v1/link/short-link': {
      $get: {
        input: { query: { url: string; cta: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/search/trending': {
      $get: {
        input: { query: { green?: boolean | undefined; latin?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/stats/auto-hashtag': {
      $get: {
        input: {
          query: {
            post: string
            maxHashtags?: number | undefined
            hashtagPosition?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/stats/hashtag-suggestions': {
      $get: { input: { query: { text: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/stats/history/:hashtag': {
      $get: { input: { param: { hashtag: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/stats/multiple-hashtags': {
      $get: {
        input: { query: { tags: { [x: string]: unknown }[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/instagram/hashtags-cleaner': {
      $get: { input: { query: { post: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
