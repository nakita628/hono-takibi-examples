declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/hypernyms': {
      $get: {
        input: { query: { family?: string | undefined; maxLevel?: string | undefined } } & {
          header: { 'Ocp-Apim-Subscription-Key'?: string | undefined }
        }
        output: (number | string)[][]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/hyponyms': {
      $get: {
        input: { query: { family?: string | undefined; maxLevel?: string | undefined } } & {
          header: { 'Ocp-Apim-Subscription-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inflections': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            lexeme?: string | undefined
            family?: string | undefined
          }
        } & { header: { 'Ocp-Apim-Subscription-Key'?: string | undefined } }
        output: {
          features?: { index?: number | undefined; value?: string | undefined }[] | undefined
          isLemma?: boolean | undefined
          text?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lm/family': {
      $get: {
        input: { query: { id?: string | undefined } } & {
          header: { 'Ocp-Apim-Subscription-Key'?: string | undefined }
        }
        output: {
          definition?: string | undefined
          description?: string | undefined
          hypernyms?: number[][] | undefined
          permId?: string | undefined
          requestId?: string | undefined
          wikidata?: string | undefined
          wordnet30?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/senses': {
      $get: {
        input: { query: { language?: string | undefined; word?: string | undefined } } & {
          header: { 'Ocp-Apim-Subscription-Key'?: string | undefined }
        }
        output: {
          families?:
            | {
                Key?: number | undefined
                Value?: { [x: string]: unknown } | undefined
                definition?: string | undefined
              }[]
            | undefined
          features?:
            | {
                index?: number | undefined
                type?: string | undefined
                value?: string | undefined
              }[]
            | undefined
          frequency?: number | undefined
          isLemma?: boolean | undefined
          legacyMapId?: number | undefined
          lemma?: string | undefined
          lexemeId?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/values': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            type?: string | undefined
            description?: string | undefined
          }
        } & { header: { 'Ocp-Apim-Subscription-Key'?: string | undefined } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
