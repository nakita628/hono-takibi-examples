type AudioConfig = {
  audioEncoding?:
    | 'AUDIO_ENCODING_UNSPECIFIED'
    | 'LINEAR16'
    | 'MP3'
    | 'MP3_64_KBPS'
    | 'OGG_OPUS'
    | 'MULAW'
    | 'ALAW'
    | undefined
  effectsProfileId?: string[] | undefined
  pitch?: number | undefined
  sampleRateHertz?: number | undefined
  speakingRate?: number | undefined
  volumeGainDb?: number | undefined
}
type SynthesisInput = { ssml?: string | undefined; text?: string | undefined }
type CustomVoiceParams = {
  model?: string | undefined
  reportedUsage?: 'REPORTED_USAGE_UNSPECIFIED' | 'REALTIME' | 'OFFLINE' | undefined
}
type VoiceSelectionParams = {
  customVoice?: CustomVoiceParams | undefined
  languageCode?: string | undefined
  name?: string | undefined
  ssmlGender?: 'SSML_VOICE_GENDER_UNSPECIFIED' | 'MALE' | 'FEMALE' | 'NEUTRAL' | undefined
}
type SynthesizeSpeechRequest = {
  audioConfig?: AudioConfig | undefined
  enableTimePointing?: ('TIMEPOINT_TYPE_UNSPECIFIED' | 'SSML_MARK')[] | undefined
  input?: SynthesisInput | undefined
  voice?: VoiceSelectionParams | undefined
}
type Timepoint = { markName?: string | undefined; timeSeconds?: number | undefined }
type SynthesizeSpeechResponse = {
  audioConfig?: AudioConfig | undefined
  audioContent?: string | undefined
  timepoints?: Timepoint[] | undefined
}
type Voice = {
  languageCodes?: string[] | undefined
  name?: string | undefined
  naturalSampleRateHertz?: number | undefined
  ssmlGender?: 'SSML_VOICE_GENDER_UNSPECIFIED' | 'MALE' | 'FEMALE' | 'NEUTRAL' | undefined
}
type ListVoicesResponse = { voices?: Voice[] | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type SynthesizeLongAudioRequest = {
  audioConfig?: AudioConfig | undefined
  input?: SynthesisInput | undefined
  outputGcsUri?: string | undefined
  voice?: VoiceSelectionParams | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/text:synthesize': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SynthesizeSpeechRequest }
        output: SynthesizeSpeechResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/voices': {
      $get: {
        input: {
          query: {
            languageCode?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListVoicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent:synthesizeLongAudio': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SynthesizeLongAudioRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
