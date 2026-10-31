import { createRoute, z } from '@hono/zod-openapi'

const AudioConfigSchema = z
  .object({
    audioEncoding: z
      .enum([
        'AUDIO_ENCODING_UNSPECIFIED',
        'LINEAR16',
        'MP3',
        'MP3_64_KBPS',
        'OGG_OPUS',
        'MULAW',
        'ALAW',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The format of the audio byte stream.' }),
    effectsProfileId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. Input only. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. See [audio profiles](https://cloud.google.com/text-to-speech/docs/audio-profiles) for current supported profile ids.",
      }),
    pitch: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.',
      }),
    sampleRateHertz: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Optional. The synthesis sample rate (in hertz) for this audio. When this is specified in SynthesizeSpeechRequest, if this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality), unless the specified sample rate is not supported for the encoding chosen, in which case it will fail the request and return google.rpc.Code.INVALID_ARGUMENT.",
      }),
    speakingRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.',
      }),
    volumeGainDb: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Optional. Input only. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.",
      }),
  })
  .openapi({ description: 'Description of audio data to be synthesized.', required: [] })
  .openapi('AudioConfig')

const CustomVoiceParamsSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name of the AutoML model that synthesizes the custom voice.',
      }),
    reportedUsage: z
      .enum(['REPORTED_USAGE_UNSPECIFIED', 'REALTIME', 'OFFLINE'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Optional. Deprecated. The usage of the synthesized audio to be reported.',
      }),
  })
  .openapi({ description: 'Description of the custom voice to be synthesized.', required: [] })
  .openapi('CustomVoiceParams')

const GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadataSchema = z
  .object({
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated. Do not use.' }),
    progressPercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The progress of the most recent processing update in percentage, ie. 70.0%.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the request was received.' }),
  })
  .openapi({
    description: 'Metadata for response returned by the `SynthesizeLongAudio` method.',
    required: [],
  })
  .openapi('GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const VoiceSchema = z
  .object({
    languageCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The languages that this voice supports, expressed as [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g. "en-US", "es-419", "cmn-tw").',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this voice. Each distinct voice has a unique name.' }),
    naturalSampleRateHertz: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The natural sample rate (in hertz) for this voice.' }),
    ssmlGender: z
      .enum(['SSML_VOICE_GENDER_UNSPECIFIED', 'MALE', 'FEMALE', 'NEUTRAL'])
      .exactOptional()
      .openapi({ description: 'The gender of this voice.' }),
  })
  .openapi({ description: 'Description of a voice supported by the TTS service.', required: [] })
  .openapi('Voice')

const ListVoicesResponseSchema = z
  .object({
    voices: z.array(VoiceSchema).exactOptional().openapi({ description: 'The list of voices.' }),
  })
  .openapi({
    description: 'The message returned to the client by the `ListVoices` method.',
    required: [],
  })
  .openapi('ListVoicesResponse')

const SynthesisInputSchema = z
  .object({
    ssml: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SSML document to be synthesized. The SSML document must be valid and well-formed. Otherwise the RPC will fail and return google.rpc.Code.INVALID_ARGUMENT. For more information, see [SSML](https://cloud.google.com/text-to-speech/docs/ssml).',
      }),
    text: z.string().exactOptional().openapi({ description: 'The raw text to be synthesized.' }),
  })
  .openapi({
    description:
      'Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes.',
    required: [],
  })
  .openapi('SynthesisInput')

const SynthesizeLongAudioMetadataSchema = z
  .object({
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated. Do not use.' }),
    progressPercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The progress of the most recent processing update in percentage, ie. 70.0%.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the request was received.' }),
  })
  .openapi({
    description: 'Metadata for response returned by the `SynthesizeLongAudio` method.',
    required: [],
  })
  .openapi('SynthesizeLongAudioMetadata')

const VoiceSelectionParamsSchema = z
  .object({
    customVoice: CustomVoiceParamsSchema.exactOptional().openapi({
      description:
        'The configuration for a custom voice. If [CustomVoiceParams.model] is set, the service will choose the custom voice matching the specified configuration.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The language (and potentially also the region) of the voice expressed as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn\'t a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender.',
      }),
    ssmlGender: z
      .enum(['SSML_VOICE_GENDER_UNSPECIFIED', 'MALE', 'FEMALE', 'NEUTRAL'])
      .exactOptional()
      .openapi({
        description:
          'The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.',
      }),
  })
  .openapi({
    description: 'Description of which voice to use for a synthesis request.',
    required: [],
  })
  .openapi('VoiceSelectionParams')

const SynthesizeLongAudioRequestSchema = z
  .object({
    audioConfig: AudioConfigSchema.exactOptional().openapi({
      description: 'Required. The configuration of the synthesized audio.',
    }),
    input: SynthesisInputSchema.exactOptional().openapi({
      description:
        'Required. The Synthesizer requires either plain text or SSML as input. While Long Audio is in preview, SSML is temporarily unsupported.',
    }),
    outputGcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist.',
      }),
    voice: VoiceSelectionParamsSchema.exactOptional().openapi({
      description: 'Required. The desired voice of the synthesized audio.',
    }),
  })
  .openapi({
    description: 'The top-level message sent by the client for the `SynthesizeLongAudio` method.',
    required: [],
  })
  .openapi('SynthesizeLongAudioRequest')

const SynthesizeSpeechRequestSchema = z
  .object({
    audioConfig: AudioConfigSchema.exactOptional().openapi({
      description: 'Required. The configuration of the synthesized audio.',
    }),
    enableTimePointing: z
      .array(z.enum(['TIMEPOINT_TYPE_UNSPECIFIED', 'SSML_MARK']))
      .exactOptional()
      .openapi({ description: 'Whether and what timepoints are returned in the response.' }),
    input: SynthesisInputSchema.exactOptional().openapi({
      description: 'Required. The Synthesizer requires either plain text or SSML as input.',
    }),
    voice: VoiceSelectionParamsSchema.exactOptional().openapi({
      description: 'Required. The desired voice of the synthesized audio.',
    }),
  })
  .openapi({
    description: 'The top-level message sent by the client for the `SynthesizeSpeech` method.',
    required: [],
  })
  .openapi('SynthesizeSpeechRequest')

const TimepointSchema = z
  .object({
    markName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timepoint name as received from the client within `` tag.' }),
    timeSeconds: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time offset in seconds from the start of the synthesized audio.' }),
  })
  .openapi({
    description:
      'This contains a mapping between a certain point in the input text and a corresponding time in the output audio.',
    required: [],
  })
  .openapi('Timepoint')

const SynthesizeSpeechResponseSchema = z
  .object({
    audioConfig: AudioConfigSchema.exactOptional().openapi({
      description: 'The audio metadata of `audio_content`.',
    }),
    audioContent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.',
      }),
    timepoints: z
      .array(TimepointSchema)
      .exactOptional()
      .openapi({
        description:
          "A link between a position in the original request input and a corresponding time in the output audio. It's only supported via `` of SSML input.",
      }),
  })
  .openapi({
    description: 'The message returned to the client by the `SynthesizeSpeech` method.',
    required: [],
  })
  .openapi('SynthesizeSpeechResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1beta1TextSynthesizeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/text:synthesize',
  tags: ['text'],
  description:
    'Synthesizes speech synchronously: receive results after all text input has been processed.',
  operationId: 'texttospeech.text.synthesize',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SynthesizeSpeechRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SynthesizeSpeechResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1VoicesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/voices',
  tags: ['voices'],
  description: 'Returns a list of Voice supported for synthesis.',
  operationId: 'texttospeech.voices.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Recommended. [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If not specified, the API will return all supported voices. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. For example, if you specify `"en-NZ"`, all `"en-NZ"` voices will be returned. If you specify `"no"`, both `"no-\\*"` (Norwegian) and `"nb-\\*"` (Norwegian Bokmal) voices will be returned.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListVoicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'texttospeech.projects.locations.operations.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'texttospeech.projects.locations.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentSynthesizeLongAudioRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}:synthesizeLongAudio',
  tags: ['projects'],
  description: 'Synthesizes long form text asynchronously.',
  operationId: 'texttospeech.projects.locations.synthesizeLongAudio',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The resource states of the request in the form of `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SynthesizeLongAudioRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
