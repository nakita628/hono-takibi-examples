type ChapterSchema = {
  chapter_number?: (number | null) | undefined
  chapter_summary?: (string | null) | undefined
  name?: (string | null) | undefined
  name_meaning?: (string | null) | undefined
  name_translation?: (string | null) | undefined
  name_transliterated?: (string | null) | undefined
  verses_count?: (number | null) | undefined
}
type VerseSchema = {
  meaning?: (string | null) | undefined
  text?: (string | null) | undefined
  transliteration?: (string | null) | undefined
  verse_number?: (string | null) | undefined
  word_meanings?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/chapters': {
      $get:
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: ChapterSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/chapters/:chapter_number': {
      $get:
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: ChapterSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/chapters/:chapter_number/verses': {
      $get:
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: VerseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/chapters/:chapter_number/verses/:verse_number': {
      $get:
        | {
            input: { param: { chapter_number: 1 | 2 | 3; verse_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: VerseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3; verse_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3; verse_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3; verse_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3; verse_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { chapter_number: 1 | 2 | 3; verse_number: 1 | 2 | 3 } } & {
              query: { access_token: string; language?: 'hi' | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/verses': {
      $get:
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: VerseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { access_token: string; language?: 'hi' | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/auth/oauth/token': {
      $post:
        | {
            input: {
              json: { client_id: string; client_secret: string; grant_type: string; scope: string }
            } & {
              form: { client_id: string; client_secret: string; grant_type: string; scope: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; grant_type: string; scope: string }
            } & {
              form: { client_id: string; client_secret: string; grant_type: string; scope: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; grant_type: string; scope: string }
            } & {
              form: { client_id: string; client_secret: string; grant_type: string; scope: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; grant_type: string; scope: string }
            } & {
              form: { client_id: string; client_secret: string; grant_type: string; scope: string }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; grant_type: string; scope: string }
            } & {
              form: { client_id: string; client_secret: string; grant_type: string; scope: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
