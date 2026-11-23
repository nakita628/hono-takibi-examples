type FeedbackResponseModel = {
  audio_quality: boolean
  emotions: boolean
  feedback: string
  glitches: boolean
  inaccurate_clone: boolean
  other: boolean
  review_status?: string | undefined
  thumbs_up: boolean
}
type HistoryItemResponseModel = {
  character_count_change_from: number
  character_count_change_to: number
  content_type: string
  date_unix: number
  feedback: FeedbackResponseModel
  history_item_id: string
  request_id: string
  settings: { [x: string]: unknown }
  state: 'created' | 'deleted' | 'processing'
  text: string
  voice_id: string
  voice_name: string
}
type GetHistoryResponseModel = { history: HistoryItemResponseModel[] }
type ValidationError = { loc: (string | number)[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type BodyDeleteHistoryItemsV1HistoryDeletePost = { history_item_ids: string[] }
type BodyDownloadHistoryItemsV1HistoryDownloadPost = { history_item_ids: string[] }
type BodyTextToSpeechV1TextToSpeechVoiceIdPost = {
  text: string
  voice_settings?: { similarity_boost: number; stability: number } | undefined
}
type BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost = {
  text: string
  voice_settings?: { similarity_boost: number; stability: number } | undefined
}
type LanguageResponseModel = { display_name: string; iso_code: string }
type TTSModelResponseModel = {
  display_name: string
  model_id: string
  supported_language: LanguageResponseModel[]
}
type SubscriptionResponseModel = {
  allowed_to_extend_character_limit: boolean
  available_models: TTSModelResponseModel[]
  can_extend_character_limit: boolean
  can_extend_voice_limit: boolean
  can_use_delayed_payment_methods: boolean
  can_use_instant_voice_cloning: boolean
  can_use_professional_voice_cloning: boolean
  character_count: number
  character_limit: number
  currency: 'usd' | 'eur'
  next_character_count_reset_unix: number
  professional_voice_limit: number
  status:
    | 'trialing'
    | 'active'
    | 'incomplete'
    | 'incomplete_expired'
    | 'past_due'
    | 'canceled'
    | 'unpaid'
    | 'free'
  tier: string
  voice_limit: number
}
type UserResponseModel = {
  is_new_user: boolean
  subscription: SubscriptionResponseModel
  xi_api_key: string
}
type InvoiceResponseModel = { amount_due_cents: number; next_payment_attempt_unix: number }
type ExtendedSubscriptionResponseModel = {
  allowed_to_extend_character_limit: boolean
  available_models: TTSModelResponseModel[]
  can_extend_character_limit: boolean
  can_extend_voice_limit: boolean
  can_use_delayed_payment_methods: boolean
  can_use_instant_voice_cloning: boolean
  can_use_professional_voice_cloning: boolean
  character_count: number
  character_limit: number
  currency: 'usd' | 'eur'
  next_character_count_reset_unix: number
  next_invoice: InvoiceResponseModel
  professional_voice_limit: number
  status:
    | 'trialing'
    | 'active'
    | 'incomplete'
    | 'incomplete_expired'
    | 'past_due'
    | 'canceled'
    | 'unpaid'
    | 'free'
  tier: string
  voice_limit: number
}
type RecordingResponseModel = {
  mime_type: string
  recording_id: string
  size_bytes: number
  transcription: string
  upload_date_unix: number
}
type VerificationAttemptResponseModel = {
  accepted: boolean
  date_unix: number
  levenshtein_distance: number
  recording: RecordingResponseModel
  similarity: number
  text: string
}
type FineTuningResponseModel = {
  fine_tuning_requested: boolean
  finetuning_state: 'not_started' | 'is_fine_tuning' | 'fine_tuned'
  is_allowed_to_fine_tune: boolean
  model_id: string
  slice_ids: string[]
  verification_attempts: VerificationAttemptResponseModel[]
  verification_attempts_count: number
  verification_failures: string[]
}
type SampleResponseModel = {
  file_name: string
  hash: string
  mime_type: string
  sample_id: string
  size_bytes: number
}
type VoiceSettingsResponseModel = { similarity_boost: number; stability: number }
type VoiceResponseModel = {
  available_for_tiers: string[]
  category: string
  description: string
  fine_tuning: FineTuningResponseModel
  labels: { [x: string]: string }
  name: string
  preview_url: string
  samples: SampleResponseModel[]
  settings: VoiceSettingsResponseModel
  voice_id: string
}
type GetVoicesResponseModel = { voices: VoiceResponseModel[] }
type BodyAddVoiceV1VoicesAddPost = {
  description?: string | undefined
  files: File[]
  labels?: string | undefined
  name: string
}
type AddVoiceResponseModel = { voice_id: string }
type BodyEditVoiceV1VoicesVoiceIdEditPost = {
  description?: string | undefined
  files?: File[] | undefined
  labels?: string | undefined
  name: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/history': {
      $get:
        | {
            input: { header: { 'xi-api-key'?: string | undefined } }
            output: GetHistoryResponseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'xi-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/history/delete': {
      $post:
        | {
            input: { header: { 'xi-api-key'?: string | undefined } } & {
              json: BodyDeleteHistoryItemsV1HistoryDeletePost
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'xi-api-key'?: string | undefined } } & {
              json: BodyDeleteHistoryItemsV1HistoryDeletePost
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/history/download': {
      $post:
        | {
            input: { header: { 'xi-api-key'?: string | undefined } } & {
              json: BodyDownloadHistoryItemsV1HistoryDownloadPost
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'xi-api-key'?: string | undefined } } & {
              json: BodyDownloadHistoryItemsV1HistoryDownloadPost
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/history/:history_item_id': {
      $delete:
        | {
            input: { param: { history_item_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { history_item_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/history/:history_item_id/audio': {
      $get: {
        input: { param: { history_item_id: string } } & {
          header: { 'xi-api-key'?: string | undefined }
        }
        output: HTTPValidationError
        outputFormat: 'json'
        status: 422
      }
    }
  } & {
    '/v1/text-to-speech/:voice_id': {
      $post: {
        input: { param: { voice_id: string } } & {
          header: { 'xi-api-key'?: string | undefined }
        } & { json: BodyTextToSpeechV1TextToSpeechVoiceIdPost }
        output: HTTPValidationError
        outputFormat: 'json'
        status: 422
      }
    }
  } & {
    '/v1/text-to-speech/:voice_id/stream': {
      $post:
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            } & { json: BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            } & { json: BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/user': {
      $get:
        | {
            input: { header: { 'xi-api-key'?: string | undefined } }
            output: UserResponseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'xi-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/user/subscription': {
      $get:
        | {
            input: { header: { 'xi-api-key'?: string | undefined } }
            output: ExtendedSubscriptionResponseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'xi-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/voices': {
      $get:
        | {
            input: { header: { 'xi-api-key'?: string | undefined } }
            output: GetVoicesResponseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'xi-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/voices/add': {
      $post:
        | {
            input: { header: { 'xi-api-key'?: string | undefined } } & {
              form: BodyAddVoiceV1VoicesAddPost
            }
            output: AddVoiceResponseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'xi-api-key'?: string | undefined } } & {
              form: BodyAddVoiceV1VoicesAddPost
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/voices/settings/default': {
      $get: { input: {}; output: VoiceSettingsResponseModel; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/voices/:voice_id': {
      $delete:
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { voice_id: string } } & {
              query: { with_settings?: boolean | undefined }
            } & { header: { 'xi-api-key'?: string | undefined } }
            output: VoiceResponseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } } & {
              query: { with_settings?: boolean | undefined }
            } & { header: { 'xi-api-key'?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/voices/:voice_id/edit': {
      $post:
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            } & { form: BodyEditVoiceV1VoicesVoiceIdEditPost }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            } & { form: BodyEditVoiceV1VoicesVoiceIdEditPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/voices/:voice_id/samples/:sample_id': {
      $delete:
        | {
            input: { param: { voice_id: string; sample_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string; sample_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/voices/:voice_id/samples/:sample_id/audio': {
      $get: {
        input: { param: { voice_id: string; sample_id: string } } & {
          header: { 'xi-api-key'?: string | undefined }
        }
        output: HTTPValidationError
        outputFormat: 'json'
        status: 422
      }
    }
  } & {
    '/v1/voices/:voice_id/settings': {
      $get:
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            }
            output: VoiceSettingsResponseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/voices/:voice_id/settings/edit': {
      $post:
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            } & { json: { similarity_boost: number; stability: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } } & {
              header: { 'xi-api-key'?: string | undefined }
            } & { json: { similarity_boost: number; stability: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
