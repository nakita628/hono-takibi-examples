type Account = { balance_seconds?: number | undefined; email?: string | undefined }
type Job = {
  callback_url?: (string | null) | undefined
  completed_on?: (string | null) | undefined
  created_on?: string | undefined
  custom_vocabulary_id?: (string | null) | undefined
  delete_after_seconds?: (number | null) | undefined
  duration_seconds?: (number | null) | undefined
  failure?:
    | 'internal_processing'
    | 'download_failure'
    | 'duration_exceeded'
    | 'duration_too_short'
    | 'invalid_media'
    | 'empty_media'
    | 'transcription'
    | 'insufficient_balance'
    | 'invoicing_limit_exceeded'
    | undefined
  failure_detail?: (string | null) | undefined
  filter_profanity?: (boolean | null) | undefined
  id?: string | undefined
  language?:
    | 'en'
    | 'ar'
    | 'bg'
    | 'ca'
    | 'cmn'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'es'
    | 'fi'
    | 'fr'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'ms'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'tr'
    | undefined
  media_url?: (string | null) | undefined
  metadata?: (string | null) | undefined
  name?: (string | null) | undefined
  remove_disfluencies?: (boolean | null) | undefined
  skip_diarization?: (boolean | null) | undefined
  skip_punctuation?: (boolean | null) | undefined
  speaker_channels_count?: (number | null) | undefined
  status?: 'in_progress' | 'transcribed' | 'failed' | undefined
  type?: 'async' | undefined
}
type SubmitJobMediaUrlOptions = {
  media_url: string | null
  callback_url?: (string | null) | undefined
  custom_vocabulary_id?: (string | null) | undefined
  delete_after_seconds?: (number | null) | undefined
  filter_profanity?: (boolean | null) | undefined
  language?:
    | 'en'
    | 'ar'
    | 'bg'
    | 'ca'
    | 'cmn'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'es'
    | 'fi'
    | 'fr'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'ms'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'tr'
    | undefined
  metadata?: (string | null) | undefined
  remove_disfluencies?: (boolean | null) | undefined
  skip_diarization?: (boolean | null) | undefined
  skip_punctuation?: (boolean | null) | undefined
  speaker_channels_count?: (number | null) | undefined
  custom_vocabularies?: { phrases: string[] }[] | undefined
}
type SubmitJobOptions = {
  callback_url?: (string | null) | undefined
  custom_vocabulary_id?: (string | null) | undefined
  delete_after_seconds?: (number | null) | undefined
  filter_profanity?: (boolean | null) | undefined
  language?:
    | 'en'
    | 'ar'
    | 'bg'
    | 'ca'
    | 'cmn'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'es'
    | 'fi'
    | 'fr'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'ms'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'tr'
    | undefined
  metadata?: (string | null) | undefined
  remove_disfluencies?: (boolean | null) | undefined
  skip_diarization?: (boolean | null) | undefined
  skip_punctuation?: (boolean | null) | undefined
  speaker_channels_count?: (number | null) | undefined
  custom_vocabularies?: { phrases: string[] }[] | undefined
  media_url?: (string | null) | undefined
}
type Transcript = {
  monologues?:
    | {
        elements?:
          | {
              confidence?: (number | null) | undefined
              ts?: (number | null) | undefined
              ts_end?: (number | null) | undefined
              type?: 'text' | 'punct' | 'unknown' | undefined
              value?: string | undefined
            }[]
          | undefined
        speaker?: number | undefined
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status?: number | undefined; title?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/jobs': {
      $get:
        | {
            input: { query: { limit?: number | undefined; starting_after?: string | undefined } }
            output: Job[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; starting_after?: string | undefined } }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
              parameters?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; starting_after?: string | undefined } }
            output: { status?: number | undefined; title?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: SubmitJobMediaUrlOptions } & {
              form: { media?: File | undefined; options?: SubmitJobOptions | undefined }
            }
            output: Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubmitJobMediaUrlOptions } & {
              form: { media?: File | undefined; options?: SubmitJobOptions | undefined }
            }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
              parameters?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubmitJobMediaUrlOptions } & {
              form: { media?: File | undefined; options?: SubmitJobOptions | undefined }
            }
            output: { status?: number | undefined; title?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubmitJobMediaUrlOptions } & {
              form: { media?: File | undefined; options?: SubmitJobOptions | undefined }
            }
            output: {
              detail?: string | undefined
              status?: number | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
    }
  } & {
    '/jobs/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: { status?: number | undefined; title?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
              allowed_values?: string[] | undefined
              current_value?: string | undefined
              detail?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | { input: { param: { id: string } }; output: Job; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: { status?: number | undefined; title?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/jobs/:id/captions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { speaker_channel?: number | undefined }
            } & { header: { Accept?: 'application/x-subrip' | 'text/vtt' | undefined } }
            output: unknown
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { speaker_channel?: number | undefined }
            } & { header: { Accept?: 'application/x-subrip' | 'text/vtt' | undefined } }
            output: unknown
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { speaker_channel?: number | undefined }
            } & { header: { Accept?: 'application/x-subrip' | 'text/vtt' | undefined } }
            output: { status?: number | undefined; title?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { speaker_channel?: number | undefined }
            } & { header: { Accept?: 'application/x-subrip' | 'text/vtt' | undefined } }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { speaker_channel?: number | undefined }
            } & { header: { Accept?: 'application/x-subrip' | 'text/vtt' | undefined } }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
              detail?: string | undefined
            }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string } } & {
              query: { speaker_channel?: number | undefined }
            } & { header: { Accept?: 'application/x-subrip' | 'text/vtt' | undefined } }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
              allowed_values?: string[] | undefined
              current_value?: string | undefined
              detail?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: string } } & {
              query: { speaker_channel?: number | undefined }
            } & { header: { Accept?: 'application/x-subrip' | 'text/vtt' | undefined } }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
              allowed_values?: string[] | undefined
              current_value?: string | undefined
              detail?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/jobs/:id/transcript': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                Accept?: 'application/vnd.rev.transcript.v1.0+json' | 'text/plain' | undefined
              }
            }
            output: Transcript
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Accept?: 'application/vnd.rev.transcript.v1.0+json' | 'text/plain' | undefined
              }
            }
            output: unknown
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Accept?: 'application/vnd.rev.transcript.v1.0+json' | 'text/plain' | undefined
              }
            }
            output: { status?: number | undefined; title?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Accept?: 'application/vnd.rev.transcript.v1.0+json' | 'text/plain' | undefined
              }
            }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Accept?: 'application/vnd.rev.transcript.v1.0+json' | 'text/plain' | undefined
              }
            }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
              allowed_values?: string[] | undefined
              current_value?: string | undefined
              detail?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Accept?: 'application/vnd.rev.transcript.v1.0+json' | 'text/plain' | undefined
              }
            }
            output: {
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
              allowed_values?: string[] | undefined
              current_value?: string | undefined
              detail?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  },
  '/'
>
export default routes
