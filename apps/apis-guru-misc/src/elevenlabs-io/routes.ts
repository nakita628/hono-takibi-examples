import { createRoute, z } from '@hono/zod-openapi'

const AddVoiceResponseModelSchema = z
  .object({ voice_id: z.string().openapi({ title: 'Voice Id' }) })
  .openapi({ required: ['voice_id'], title: 'AddVoiceResponseModel' })
  .openapi('AddVoiceResponseModel')

const BodyAddVoiceV1VoicesAddPostSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'How would you describe the voice?', title: 'Description' }),
    files: z
      .array(z.file().openapi({ type: 'string', format: 'binary' }))
      .openapi({ description: 'One or more audio files to clone the voice from', title: 'Files' }),
    labels: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized labels dictionary for the voice.', title: 'Labels' }),
    name: z
      .string()
      .openapi({
        description:
          'The name that identifies this voice. This will be displayed in the dropdown of the website.',
        title: 'Name',
      }),
  })
  .openapi({ required: ['name', 'files'], title: 'Body_Add_voice_v1_voices_add_post' })
  .openapi('BodyAddVoiceV1VoicesAddPost')

const BodyDeleteHistoryItemsV1HistoryDeletePostSchema = z
  .object({
    history_item_ids: z
      .array(z.string())
      .openapi({
        description:
          'A list of history items to remove, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint.',
        title: 'History Item Ids',
      }),
  })
  .openapi({
    required: ['history_item_ids'],
    title: 'Body_Delete_history_items_v1_history_delete_post',
  })
  .openapi('BodyDeleteHistoryItemsV1HistoryDeletePost')

const BodyDownloadHistoryItemsV1HistoryDownloadPostSchema = z
  .object({
    history_item_ids: z
      .array(z.string())
      .openapi({
        description:
          'A list of history items to download, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint.',
        title: 'History Item Ids',
      }),
  })
  .openapi({
    required: ['history_item_ids'],
    title: 'Body_Download_history_items_v1_history_download_post',
  })
  .openapi('BodyDownloadHistoryItemsV1HistoryDownloadPost')

const BodyEditVoiceV1VoicesVoiceIdEditPostSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'How would you describe the voice?', title: 'Description' }),
    files: z
      .array(z.file().openapi({ type: 'string', format: 'binary' }))
      .exactOptional()
      .openapi({ description: 'Audio files to add to the voice', title: 'Files' }),
    labels: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized labels dictionary for the voice.', title: 'Labels' }),
    name: z
      .string()
      .openapi({
        description:
          'The name that identifies this voice. This will be displayed in the dropdown of the website.',
        title: 'Name',
      }),
  })
  .openapi({ required: ['name'], title: 'Body_Edit_voice_v1_voices__voice_id__edit_post' })
  .openapi('BodyEditVoiceV1VoicesVoiceIdEditPost')

const VoiceSettingsResponseModelSchema = z
  .object({
    similarity_boost: z.number().openapi({ title: 'Similarity Boost' }),
    stability: z.number().openapi({ title: 'Stability' }),
  })
  .openapi({ required: ['stability', 'similarity_boost'], title: 'VoiceSettingsResponseModel' })
  .openapi('VoiceSettingsResponseModel')

const BodyTextToSpeechV1TextToSpeechVoiceIdPostSchema = z
  .object({
    text: z
      .string()
      .openapi({
        description:
          'The text that will get converted into speech. Currently only English text is supported.',
        title: 'Text',
      }),
    voice_settings: VoiceSettingsResponseModelSchema.exactOptional().openapi({
      description:
        'Voice settings overriding stored setttings for the given voice. They are applied only on the given TTS request.',
      title: 'Voice Settings',
    }),
  })
  .openapi({ required: ['text'], title: 'Body_Text_to_speech_v1_text_to_speech__voice_id__post' })
  .openapi('BodyTextToSpeechV1TextToSpeechVoiceIdPost')

const BodyTextToSpeechV1TextToSpeechVoiceIdStreamPostSchema = z
  .object({
    text: z
      .string()
      .openapi({
        description:
          'The text that will get converted into speech. Currently only English text is supported.',
        title: 'Text',
      }),
    voice_settings: VoiceSettingsResponseModelSchema.exactOptional().openapi({
      description:
        'Voice settings overriding stored setttings for the given voice. They are applied only on the given TTS request.',
      title: 'Voice Settings',
    }),
  })
  .openapi({
    required: ['text'],
    title: 'Body_Text_to_speech_v1_text_to_speech__voice_id__stream_post',
  })
  .openapi('BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost')

const LanguageResponseModelSchema = z
  .object({
    display_name: z.string().openapi({ title: 'Display Name' }),
    iso_code: z.string().openapi({ title: 'Iso Code' }),
  })
  .openapi({ required: ['iso_code', 'display_name'], title: 'LanguageResponseModel' })
  .openapi('LanguageResponseModel')

const TTSModelResponseModelSchema = z
  .object({
    display_name: z.string().openapi({ title: 'Display Name' }),
    model_id: z.string().openapi({ title: 'Model Id' }),
    supported_language: z
      .array(LanguageResponseModelSchema)
      .openapi({ title: 'Supported Language' }),
  })
  .openapi({
    required: ['model_id', 'display_name', 'supported_language'],
    title: 'TTSModelResponseModel',
  })
  .openapi('TTSModelResponseModel')

const InvoiceResponseModelSchema = z
  .object({
    amount_due_cents: z.int().openapi({ title: 'Amount Due Cents' }),
    next_payment_attempt_unix: z.int().openapi({ title: 'Next Payment Attempt Unix' }),
  })
  .openapi({
    required: ['amount_due_cents', 'next_payment_attempt_unix'],
    title: 'InvoiceResponseModel',
  })
  .openapi('InvoiceResponseModel')

const ExtendedSubscriptionResponseModelSchema = z
  .object({
    allowed_to_extend_character_limit: z
      .boolean()
      .openapi({ title: 'Allowed To Extend Character Limit' }),
    available_models: z.array(TTSModelResponseModelSchema).openapi({ title: 'Available Models' }),
    can_extend_character_limit: z.boolean().openapi({ title: 'Can Extend Character Limit' }),
    can_extend_voice_limit: z.boolean().openapi({ title: 'Can Extend Voice Limit' }),
    can_use_delayed_payment_methods: z
      .boolean()
      .openapi({ title: 'Can Use Delayed Payment Methods' }),
    can_use_instant_voice_cloning: z.boolean().openapi({ title: 'Can Use Instant Voice Cloning' }),
    can_use_professional_voice_cloning: z
      .boolean()
      .openapi({ title: 'Can Use Professional Voice Cloning' }),
    character_count: z.int().openapi({ title: 'Character Count' }),
    character_limit: z.int().openapi({ title: 'Character Limit' }),
    currency: z.enum(['usd', 'eur']).openapi({ title: 'Currency' }),
    next_character_count_reset_unix: z.int().openapi({ title: 'Next Character Count Reset Unix' }),
    next_invoice: InvoiceResponseModelSchema,
    professional_voice_limit: z.int().openapi({ title: 'Professional Voice Limit' }),
    status: z
      .enum([
        'trialing',
        'active',
        'incomplete',
        'incomplete_expired',
        'past_due',
        'canceled',
        'unpaid',
        'free',
      ])
      .openapi({ title: 'Status' }),
    tier: z.string().openapi({ title: 'Tier' }),
    voice_limit: z.int().openapi({ title: 'Voice Limit' }),
  })
  .openapi({
    required: [
      'tier',
      'character_count',
      'character_limit',
      'can_extend_character_limit',
      'allowed_to_extend_character_limit',
      'next_character_count_reset_unix',
      'voice_limit',
      'professional_voice_limit',
      'can_extend_voice_limit',
      'can_use_instant_voice_cloning',
      'can_use_professional_voice_cloning',
      'available_models',
      'can_use_delayed_payment_methods',
      'currency',
      'status',
      'next_invoice',
    ],
    title: 'ExtendedSubscriptionResponseModel',
  })
  .openapi('ExtendedSubscriptionResponseModel')

const FeedbackResponseModelSchema = z
  .object({
    audio_quality: z.boolean().openapi({ title: 'Audio Quality' }),
    emotions: z.boolean().openapi({ title: 'Emotions' }),
    feedback: z.string().openapi({ title: 'Feedback' }),
    glitches: z.boolean().openapi({ title: 'Glitches' }),
    inaccurate_clone: z.boolean().openapi({ title: 'Inaccurate Clone' }),
    other: z.boolean().openapi({ title: 'Other' }),
    review_status: z
      .string()
      .default('not_reviewed')
      .exactOptional()
      .openapi({ title: 'Review Status' }),
    thumbs_up: z.boolean().openapi({ title: 'Thumbs Up' }),
  })
  .openapi({
    required: [
      'thumbs_up',
      'feedback',
      'emotions',
      'inaccurate_clone',
      'glitches',
      'audio_quality',
      'other',
    ],
    title: 'FeedbackResponseModel',
  })
  .openapi('FeedbackResponseModel')

const RecordingResponseModelSchema = z
  .object({
    mime_type: z.string().openapi({ title: 'Mime Type' }),
    recording_id: z.string().openapi({ title: 'Recording Id' }),
    size_bytes: z.int().openapi({ title: 'Size Bytes' }),
    transcription: z.string().openapi({ title: 'Transcription' }),
    upload_date_unix: z.int().openapi({ title: 'Upload Date Unix' }),
  })
  .openapi({
    required: ['recording_id', 'mime_type', 'size_bytes', 'upload_date_unix', 'transcription'],
    title: 'RecordingResponseModel',
  })
  .openapi('RecordingResponseModel')

const VerificationAttemptResponseModelSchema = z
  .object({
    accepted: z.boolean().openapi({ title: 'Accepted' }),
    date_unix: z.int().openapi({ title: 'Date Unix' }),
    levenshtein_distance: z.number().openapi({ title: 'Levenshtein Distance' }),
    recording: RecordingResponseModelSchema,
    similarity: z.number().openapi({ title: 'Similarity' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({
    required: ['text', 'date_unix', 'accepted', 'similarity', 'levenshtein_distance', 'recording'],
    title: 'VerificationAttemptResponseModel',
  })
  .openapi('VerificationAttemptResponseModel')

const FineTuningResponseModelSchema = z
  .object({
    fine_tuning_requested: z.boolean().openapi({ title: 'Fine Tuning Requested' }),
    finetuning_state: z
      .enum(['not_started', 'is_fine_tuning', 'fine_tuned'])
      .openapi({ title: 'Finetuning State' }),
    is_allowed_to_fine_tune: z.boolean().openapi({ title: 'Is Allowed To Fine Tune' }),
    model_id: z.string().openapi({ title: 'Model Id' }),
    slice_ids: z.array(z.string()).openapi({ title: 'Slice Ids' }),
    verification_attempts: z
      .array(VerificationAttemptResponseModelSchema)
      .openapi({ title: 'Verification Attempts' }),
    verification_attempts_count: z.int().openapi({ title: 'Verification Attempts Count' }),
    verification_failures: z.array(z.string()).openapi({ title: 'Verification Failures' }),
  })
  .openapi({
    required: [
      'model_id',
      'is_allowed_to_fine_tune',
      'fine_tuning_requested',
      'finetuning_state',
      'verification_attempts',
      'verification_failures',
      'verification_attempts_count',
      'slice_ids',
    ],
    title: 'FineTuningResponseModel',
  })
  .openapi('FineTuningResponseModel')

const HistoryItemResponseModelSchema = z
  .object({
    character_count_change_from: z.int().openapi({ title: 'Character Count Change From' }),
    character_count_change_to: z.int().openapi({ title: 'Character Count Change To' }),
    content_type: z.string().openapi({ title: 'Content Type' }),
    date_unix: z.int().openapi({ title: 'Date Unix' }),
    feedback: FeedbackResponseModelSchema,
    history_item_id: z.string().openapi({ title: 'History Item Id' }),
    request_id: z.string().openapi({ title: 'Request Id' }),
    settings: z.object({}).openapi({ title: 'Settings' }),
    state: z.enum(['created', 'deleted', 'processing']).openapi({ title: 'State' }),
    text: z.string().openapi({ title: 'Text' }),
    voice_id: z.string().openapi({ title: 'Voice Id' }),
    voice_name: z.string().openapi({ title: 'Voice Name' }),
  })
  .openapi({
    required: [
      'history_item_id',
      'request_id',
      'voice_id',
      'voice_name',
      'text',
      'date_unix',
      'character_count_change_from',
      'character_count_change_to',
      'content_type',
      'state',
      'settings',
      'feedback',
    ],
    title: 'HistoryItemResponseModel',
  })
  .openapi('HistoryItemResponseModel')

const GetHistoryResponseModelSchema = z
  .object({ history: z.array(HistoryItemResponseModelSchema).openapi({ title: 'History' }) })
  .openapi({ required: ['history'], title: 'GetHistoryResponseModel' })
  .openapi('GetHistoryResponseModel')

const SampleResponseModelSchema = z
  .object({
    file_name: z.string().openapi({ title: 'File Name' }),
    hash: z.string().openapi({ title: 'Hash' }),
    mime_type: z.string().openapi({ title: 'Mime Type' }),
    sample_id: z.string().openapi({ title: 'Sample Id' }),
    size_bytes: z.int().openapi({ title: 'Size Bytes' }),
  })
  .openapi({
    required: ['sample_id', 'file_name', 'mime_type', 'size_bytes', 'hash'],
    title: 'SampleResponseModel',
  })
  .openapi('SampleResponseModel')

const VoiceResponseModelSchema = z
  .object({
    available_for_tiers: z.array(z.string()).openapi({ title: 'Available For Tiers' }),
    category: z.string().openapi({ title: 'Category' }),
    description: z.string().openapi({ title: 'Description' }),
    fine_tuning: FineTuningResponseModelSchema,
    labels: z.record(z.string(), z.string()).openapi({ title: 'Labels' }),
    name: z.string().openapi({ title: 'Name' }),
    preview_url: z.string().openapi({ title: 'Preview Url' }),
    samples: z.array(SampleResponseModelSchema).openapi({ title: 'Samples' }),
    settings: VoiceSettingsResponseModelSchema,
    voice_id: z.string().openapi({ title: 'Voice Id' }),
  })
  .openapi({
    required: [
      'voice_id',
      'name',
      'samples',
      'category',
      'fine_tuning',
      'labels',
      'description',
      'preview_url',
      'available_for_tiers',
      'settings',
    ],
    title: 'VoiceResponseModel',
  })
  .openapi('VoiceResponseModel')

const GetVoicesResponseModelSchema = z
  .object({ voices: z.array(VoiceResponseModelSchema).openapi({ title: 'Voices' }) })
  .openapi({ required: ['voices'], title: 'GetVoicesResponseModel' })
  .openapi('GetVoicesResponseModel')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const SubscriptionResponseModelSchema = z
  .object({
    allowed_to_extend_character_limit: z
      .boolean()
      .openapi({ title: 'Allowed To Extend Character Limit' }),
    available_models: z.array(TTSModelResponseModelSchema).openapi({ title: 'Available Models' }),
    can_extend_character_limit: z.boolean().openapi({ title: 'Can Extend Character Limit' }),
    can_extend_voice_limit: z.boolean().openapi({ title: 'Can Extend Voice Limit' }),
    can_use_delayed_payment_methods: z
      .boolean()
      .openapi({ title: 'Can Use Delayed Payment Methods' }),
    can_use_instant_voice_cloning: z.boolean().openapi({ title: 'Can Use Instant Voice Cloning' }),
    can_use_professional_voice_cloning: z
      .boolean()
      .openapi({ title: 'Can Use Professional Voice Cloning' }),
    character_count: z.int().openapi({ title: 'Character Count' }),
    character_limit: z.int().openapi({ title: 'Character Limit' }),
    currency: z.enum(['usd', 'eur']).openapi({ title: 'Currency' }),
    next_character_count_reset_unix: z.int().openapi({ title: 'Next Character Count Reset Unix' }),
    professional_voice_limit: z.int().openapi({ title: 'Professional Voice Limit' }),
    status: z
      .enum([
        'trialing',
        'active',
        'incomplete',
        'incomplete_expired',
        'past_due',
        'canceled',
        'unpaid',
        'free',
      ])
      .openapi({ title: 'Status' }),
    tier: z.string().openapi({ title: 'Tier' }),
    voice_limit: z.int().openapi({ title: 'Voice Limit' }),
  })
  .openapi({
    required: [
      'tier',
      'character_count',
      'character_limit',
      'can_extend_character_limit',
      'allowed_to_extend_character_limit',
      'next_character_count_reset_unix',
      'voice_limit',
      'professional_voice_limit',
      'can_extend_voice_limit',
      'can_use_instant_voice_cloning',
      'can_use_professional_voice_cloning',
      'available_models',
      'can_use_delayed_payment_methods',
      'currency',
      'status',
    ],
    title: 'SubscriptionResponseModel',
  })
  .openapi('SubscriptionResponseModel')

const UserResponseModelSchema = z
  .object({
    is_new_user: z.boolean().openapi({ title: 'Is New User' }),
    subscription: SubscriptionResponseModelSchema,
    xi_api_key: z.string().openapi({ title: 'Xi Api Key' }),
  })
  .openapi({ required: ['subscription', 'is_new_user', 'xi_api_key'], title: 'UserResponseModel' })
  .openapi('UserResponseModel')

export const getV1HistoryRoute = createRoute({
  method: 'get',
  path: '/v1/history',
  tags: ['history'],
  summary: 'Get Generated Items',
  description: 'Returns metadata about all your generated audio.',
  operationId: 'Get_generated_items_v1_history_get',
  request: {
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetHistoryResponseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1HistoryDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/history/delete',
  tags: ['history'],
  summary: 'Delete History Items',
  description: 'Delete a number of history items by their IDs.',
  operationId: 'Delete_history_items_v1_history_delete_post',
  request: {
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BodyDeleteHistoryItemsV1HistoryDeletePostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  deprecated: true,
})

export const postV1HistoryDownloadRoute = createRoute({
  method: 'post',
  path: '/v1/history/download',
  tags: ['history'],
  summary: 'Download History Items',
  description:
    'Download one or more history items. If one history item ID is provided, we will return a single audio file. If more than one history item IDs are provided, we will provide the history items packed into a .zip file.',
  operationId: 'Download_history_items_v1_history_download_post',
  request: {
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BodyDownloadHistoryItemsV1HistoryDownloadPostSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1HistoryHistoryItemIdRoute = createRoute({
  method: 'delete',
  path: '/v1/history/{history_item_id}',
  tags: ['history'],
  summary: 'Delete History Item',
  description: 'Delete a history item by its ID',
  operationId: 'Delete_history_item_v1_history__history_item_id__delete',
  request: {
    params: z.object({
      history_item_id: z
        .string()
        .openapi({
          param: {
            description:
              'History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.',
            example: 'VW7YKqPnjY4h39yTbx2L',
            in: 'path',
            name: 'history_item_id',
            required: true,
            schema: {
              description:
                'History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.',
              title: 'History Item Id',
              type: 'string',
            },
          },
          description:
            'History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.',
          title: 'History Item Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1HistoryHistoryItemIdAudioRoute = createRoute({
  method: 'get',
  path: '/v1/history/{history_item_id}/audio',
  tags: ['history'],
  summary: 'Get Audio From History Item',
  description: 'Returns the audio of an history item.',
  operationId: 'Get_audio_from_history_item_v1_history__history_item_id__audio_get',
  request: {
    params: z.object({
      history_item_id: z
        .string()
        .openapi({
          param: {
            description:
              'History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.',
            example: 'VW7YKqPnjY4h39yTbx2L',
            in: 'path',
            name: 'history_item_id',
            required: true,
            schema: {
              description:
                'History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.',
              title: 'History Item Id',
              type: 'string',
            },
          },
          description:
            'History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.',
          title: 'History Item Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: {} },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1TextToSpeechVoiceIdRoute = createRoute({
  method: 'post',
  path: '/v1/text-to-speech/{voice_id}',
  tags: ['text-to-speech'],
  summary: 'Text To Speech',
  description: 'Converts text into speech using a voice of your choice and returns audio.',
  operationId: 'Text_to_speech_v1_text_to_speech__voice_id__post',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BodyTextToSpeechV1TextToSpeechVoiceIdPostSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful Response', content: {} },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1TextToSpeechVoiceIdStreamRoute = createRoute({
  method: 'post',
  path: '/v1/text-to-speech/{voice_id}/stream',
  tags: ['text-to-speech'],
  summary: 'Text To Speech',
  description:
    'Converts text into speech using a voice of your choice and returns audio as an audio stream.',
  operationId: 'Text_to_speech_v1_text_to_speech__voice_id__stream_post',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BodyTextToSpeechV1TextToSpeechVoiceIdStreamPostSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1UserRoute = createRoute({
  method: 'get',
  path: '/v1/user',
  tags: ['user'],
  summary: 'Get User Info',
  description: 'Gets information about the user',
  operationId: 'Get_user_info_v1_user_get',
  request: {
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: UserResponseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1UserSubscriptionRoute = createRoute({
  method: 'get',
  path: '/v1/user/subscription',
  tags: ['user'],
  summary: 'Get User Subscription Info',
  description: 'Gets extended information about the users subscription',
  operationId: 'Get_user_subscription_info_v1_user_subscription_get',
  request: {
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ExtendedSubscriptionResponseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1VoicesRoute = createRoute({
  method: 'get',
  path: '/v1/voices',
  tags: ['voices'],
  summary: 'Get Voices',
  description: 'Gets a list of all available voices for a user.',
  operationId: 'Get_voices_v1_voices_get',
  request: {
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetVoicesResponseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1VoicesAddRoute = createRoute({
  method: 'post',
  path: '/v1/voices/add',
  tags: ['voices'],
  summary: 'Add Voice',
  description: 'Add a new voice to your collection of voices in VoiceLab.',
  operationId: 'Add_voice_v1_voices_add_post',
  request: {
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
    body: {
      content: { 'multipart/form-data': { schema: BodyAddVoiceV1VoicesAddPostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AddVoiceResponseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1VoicesSettingsDefaultRoute = createRoute({
  method: 'get',
  path: '/v1/voices/settings/default',
  tags: ['voices'],
  summary: 'Get Default Voice Settings.',
  description:
    'Gets the default settings for voices. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.',
  operationId: 'Get_default_voice_settings__v1_voices_settings_default_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VoiceSettingsResponseModelSchema } },
    },
  },
})

export const getV1VoicesVoiceIdRoute = createRoute({
  method: 'get',
  path: '/v1/voices/{voice_id}',
  tags: ['voices'],
  summary: 'Get Voice',
  description: 'Returns metadata about a specific voice.',
  operationId: 'Get_voice_v1_voices__voice_id__get',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
    }),
    query: z.object({
      with_settings: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set will return settings information corresponding to the voice, requires authorization.',
            in: 'query',
            name: 'with_settings',
            required: false,
            schema: {
              default: false,
              description:
                'If set will return settings information corresponding to the voice, requires authorization.',
              title: 'With Settings',
              type: 'boolean',
            },
          },
          description:
            'If set will return settings information corresponding to the voice, requires authorization.',
          title: 'With Settings',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VoiceResponseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1VoicesVoiceIdRoute = createRoute({
  method: 'delete',
  path: '/v1/voices/{voice_id}',
  tags: ['voices'],
  summary: 'Delete Voice',
  description: 'Deletes a voice by its ID.',
  operationId: 'Delete_voice_v1_voices__voice_id__delete',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1VoicesVoiceIdEditRoute = createRoute({
  method: 'post',
  path: '/v1/voices/{voice_id}/edit',
  tags: ['voices'],
  summary: 'Edit Voice',
  description: 'Edit a voice created by you.',
  operationId: 'Edit_voice_v1_voices__voice_id__edit_post',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
    body: {
      content: { 'multipart/form-data': { schema: BodyEditVoiceV1VoicesVoiceIdEditPostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1VoicesVoiceIdSamplesSampleIdRoute = createRoute({
  method: 'delete',
  path: '/v1/voices/{voice_id}/samples/{sample_id}',
  tags: ['samples'],
  summary: 'Delete Sample',
  description: 'Removes a sample by its ID.',
  operationId: 'Delete_sample_v1_voices__voice_id__samples__sample_id__delete',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
      sample_id: z
        .string()
        .openapi({
          param: {
            description:
              'Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.',
            example: 'VW7YKqPnjY4h39yTbx2L',
            in: 'path',
            name: 'sample_id',
            required: true,
            schema: {
              description:
                'Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.',
              title: 'Sample Id',
              type: 'string',
            },
          },
          description:
            'Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.',
          title: 'Sample Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1VoicesVoiceIdSamplesSampleIdAudioRoute = createRoute({
  method: 'get',
  path: '/v1/voices/{voice_id}/samples/{sample_id}/audio',
  tags: ['samples'],
  summary: 'Get Audio From Sample',
  description: 'Returns the audio corresponding to a sample attached to a voice.',
  operationId: 'Get_audio_from_sample_v1_voices__voice_id__samples__sample_id__audio_get',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
      sample_id: z
        .string()
        .openapi({
          param: {
            description:
              'Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.',
            example: 'VW7YKqPnjY4h39yTbx2L',
            in: 'path',
            name: 'sample_id',
            required: true,
            schema: {
              description:
                'Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.',
              title: 'Sample Id',
              type: 'string',
            },
          },
          description:
            'Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.',
          title: 'Sample Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: {} },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1VoicesVoiceIdSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/voices/{voice_id}/settings',
  tags: ['voices'],
  summary: 'Get Voice Settings',
  description:
    'Returns the settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.',
  operationId: 'Get_voice_settings_v1_voices__voice_id__settings_get',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VoiceSettingsResponseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1VoicesVoiceIdSettingsEditRoute = createRoute({
  method: 'post',
  path: '/v1/voices/{voice_id}/settings/edit',
  tags: ['voices'],
  summary: 'Edit Voice Settings',
  description:
    'Edit your settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.',
  operationId: 'Edit_voice_settings_v1_voices__voice_id__settings_edit_post',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            description:
              'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
            example: '21m00Tcm4TlvDq8ikWAM',
            in: 'path',
            name: 'voice_id',
            required: true,
            schema: {
              description:
                'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
              title: 'Voice Id',
              type: 'string',
            },
          },
          description:
            'Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.',
          title: 'Voice Id',
        }),
    }),
    headers: z.object({
      'xi-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
            in: 'header',
            name: 'xi-api-key',
            required: false,
            schema: {
              description:
                "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
              title: 'Xi-Api-Key',
              type: 'string',
            },
          },
          description:
            "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.",
          title: 'Xi-Api-Key',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: VoiceSettingsResponseModelSchema.openapi({
            description: 'The settings for a specific voice.',
            title: 'Settings',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})
