type Mora = {
  text: string
  consonant?: string | undefined
  consonant_length?: number | undefined
  vowel: string
  vowel_length: number
  pitch: number
}
type AccentPhrase = {
  moras: Mora[]
  accent: number
  pause_mora?: Mora | undefined
  is_interrogative?: boolean | undefined
}
type AudioQuery = {
  accent_phrases: AccentPhrase[]
  speedScale: number
  intonationScale: number
  tempoDynamicsScale?: number | undefined
  pitchScale: number
  volumeScale: number
  prePhonemeLength: number
  postPhonemeLength: number
  pauseLength?: number | ({ [x: string]: unknown } | null) | undefined
  pauseLengthScale?: number | undefined
  outputSamplingRate: number
  outputStereo: boolean
  kana?: string | undefined
}
type ValidationError = {
  loc: (string | number)[]
  msg: string
  type: string
  input?: { [x: string]: unknown } | undefined
  ctx?: { [x: string]: unknown } | undefined
}
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type ParseKanaBadRequest = { text: string; error_name: string; error_args: { [x: string]: string } }
type Note = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  key?: number | undefined
  frame_length: number
  lyric: string
}
type Score = { notes: Note[] }
type FramePhoneme = {
  phoneme: string
  frame_length: number
  note_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type FrameAudioQuery = {
  f0: number[]
  volume: number[]
  phonemes: FramePhoneme[]
  volumeScale: number
  outputSamplingRate: number
  outputStereo: boolean
}
type BodySingFrameF0SingFrameF0Post = { score: Score; frame_audio_query: FrameAudioQuery }
type BodySingFrameVolumeSingFrameVolumePost = { score: Score; frame_audio_query: FrameAudioQuery }
type SupportedDevicesInfo = { cpu: boolean; cuda: boolean; dml: boolean }
type MorphableTargetInfo = { is_morphable: boolean }
type SpeakerStyle = {
  name: string
  id: number
  type?: 'talk' | 'singing_teacher' | 'frame_decode' | 'sing' | undefined
}
type SpeakerSupportedFeatures = {
  permitted_synthesis_morphing?: 'ALL' | 'SELF_ONLY' | 'NOTHING' | undefined
}
type Speaker = {
  name: string
  speaker_uuid: string
  styles: SpeakerStyle[]
  version: string
  supported_features?: SpeakerSupportedFeatures | undefined
}
type StyleInfo = {
  id: number
  icon: string
  portrait?: string | undefined
  voice_samples: string[]
  voice_sample_transcripts?: string[] | undefined
}
type SpeakerInfo = { policy: string; portrait: string; style_infos: StyleInfo[] }
type ModelArchitecture = 'Style-Bert-VITS2' | 'Style-Bert-VITS2 (JP-Extra)'
type ModelFormat = 'Safetensors' | 'ONNX'
type AivmManifestVoiceSample = { audio: string; transcript: string }
type AivmManifestSpeakerStyle = {
  name: string
  icon?: string | ({ [x: string]: unknown } | null) | undefined
  local_id: number
  voice_samples?: AivmManifestVoiceSample[] | undefined
}
type AivmManifestSpeaker = {
  name: string
  icon: string
  supported_languages: string[]
  uuid: string
  local_id: number
  styles: AivmManifestSpeakerStyle[]
}
type AivmManifest = {
  manifest_version: '1.0'
  name: string
  description?: string | undefined
  creators?: string[] | undefined
  license?: string | ({ [x: string]: unknown } | null) | undefined
  model_architecture: ModelArchitecture
  model_format: ModelFormat
  training_epochs?: number | ({ [x: string]: unknown } | null) | undefined
  training_steps?: number | ({ [x: string]: unknown } | null) | undefined
  uuid: string
  version: string
  speakers: AivmManifestSpeaker[]
}
type LibrarySpeaker = { speaker: Speaker; speaker_info: SpeakerInfo }
type AivmInfo = {
  is_loaded: boolean
  is_update_available: boolean
  is_private_model: boolean
  is_default_model?: boolean | undefined
  latest_version: string
  file_path: string
  file_size: number
  manifest: AivmManifest
  speakers: LibrarySpeaker[]
}
type BodyInstallModelAivmModelsInstallPost = {
  file?: File | ({ [x: string]: unknown } | null) | undefined
  url?: string | ({ [x: string]: unknown } | null) | undefined
}
type Preset = {
  id: number
  name: string
  speaker_uuid: string
  style_id: number
  speedScale: number
  intonationScale: number
  tempoDynamicsScale?: number | undefined
  pitchScale: number
  volumeScale: number
  prePhonemeLength: number
  postPhonemeLength: number
  pauseLength?: number | undefined
  pauseLengthScale?: number | undefined
}
type WordTypes =
  | 'PROPER_NOUN'
  | 'LOCATION_NAME'
  | 'ORGANIZATION_NAME'
  | 'PERSON_NAME'
  | 'PERSON_FAMILY_NAME'
  | 'PERSON_GIVEN_NAME'
  | 'COMMON_NOUN'
  | 'VERB'
  | 'ADJECTIVE'
  | 'SUFFIX'
type UserDictWord = {
  surface: string
  priority: number
  context_id?: number | undefined
  part_of_speech: string
  part_of_speech_detail_1: string
  part_of_speech_detail_2: string
  part_of_speech_detail_3: string
  word_type?: WordTypes | undefined
  inflectional_type: string
  inflectional_form: string
  stem: string[]
  yomi: string[]
  pronunciation: string[]
  accent_type: number[]
  mora_count?: number[] | undefined
  accent_associative_rule: string
}
type UserDictWordForCompat = {
  surface: string
  priority: number
  context_id?: number | undefined
  part_of_speech: string
  part_of_speech_detail_1: string
  part_of_speech_detail_2: string
  part_of_speech_detail_3: string
  inflectional_type: string
  inflectional_form: string
  stem: string
  yomi: string
  pronunciation: string
  accent_type: number
  mora_count?: number | undefined
  accent_associative_rule: string
}
type CorsPolicyMode = 'all' | 'localapps'
type BodySettingPostSettingPost = {
  cors_policy_mode: CorsPolicyMode
  allow_origin?: string | undefined
}
type UpdateInfo = { version: string; descriptions: string[]; contributors?: string[] | undefined }
type LicenseInfo = {
  name: string
  version?: string | undefined
  license?: string | undefined
  text: string
}
type SupportedFeatures = {
  adjust_mora_pitch: boolean
  adjust_phoneme_length: boolean
  adjust_speed_scale: boolean
  adjust_pitch_scale: boolean
  adjust_intonation_scale: boolean
  adjust_volume_scale: boolean
  adjust_pause_length?: boolean | undefined
  interrogative_upspeak: boolean
  synthesis_morphing: boolean
  sing?: boolean | undefined
  manage_library?: boolean | undefined
  return_resource_url?: boolean | undefined
  apply_katakana_english?: boolean | undefined
}
type EngineManifest = {
  manifest_version: string
  name: string
  brand_name: string
  uuid: string
  url: string
  icon: string
  default_sampling_rate: number
  frame_rate: number
  terms_of_service: string
  update_infos: UpdateInfo[]
  dependency_licenses: LicenseInfo[]
  supported_vvlib_manifest_version?: string | undefined
  supported_features: SupportedFeatures
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/audio_query': {
      $post:
        | {
            input: {
              query: {
                text: string
                speaker: number
                enable_katakana_english?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: AudioQuery
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                text: string
                speaker: number
                enable_katakana_english?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/audio_query_from_preset': {
      $post:
        | {
            input: {
              query: {
                text: string
                preset_id: number
                enable_katakana_english?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: AudioQuery
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                text: string
                preset_id: number
                enable_katakana_english?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/accent_phrases': {
      $post:
        | {
            input: {
              query: {
                text: string
                speaker: number
                is_kana?: boolean | undefined
                enable_katakana_english?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: AccentPhrase[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                text: string
                speaker: number
                is_kana?: boolean | undefined
                enable_katakana_english?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: ParseKanaBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                text: string
                speaker: number
                is_kana?: boolean | undefined
                enable_katakana_english?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/mora_data': {
      $post:
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: AccentPhrase[]
            }
            output: AccentPhrase[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: AccentPhrase[]
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/mora_length': {
      $post:
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: AccentPhrase[]
            }
            output: AccentPhrase[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: AccentPhrase[]
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/mora_pitch': {
      $post:
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: AccentPhrase[]
            }
            output: AccentPhrase[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: AccentPhrase[]
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/synthesis': {
      $post:
        | {
            input: {
              query: {
                speaker: number
                enable_interrogative_upspeak?: boolean | undefined
                core_version?: string | undefined
              }
            } & { json: AudioQuery }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                speaker: number
                enable_interrogative_upspeak?: boolean | undefined
                core_version?: string | undefined
              }
            } & { json: AudioQuery }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/cancellable_synthesis': {
      $post:
        | {
            input: {
              query: {
                speaker: number
                enable_interrogative_upspeak?: boolean | undefined
                core_version?: string | undefined
              }
            } & { json: AudioQuery }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                speaker: number
                enable_interrogative_upspeak?: boolean | undefined
                core_version?: string | undefined
              }
            } & { json: AudioQuery }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/multi_synthesis': {
      $post:
        | {
            input: {
              query: {
                speaker: number
                enable_interrogative_upspeak?: boolean | undefined
                core_version?: string | undefined
              }
            } & { json: AudioQuery[] }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                speaker: number
                enable_interrogative_upspeak?: boolean | undefined
                core_version?: string | undefined
              }
            } & { json: AudioQuery[] }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/sing_frame_audio_query': {
      $post:
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: Score
            }
            output: FrameAudioQuery
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: Score
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sing_frame_f0': {
      $post:
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: BodySingFrameF0SingFrameF0Post
            }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: BodySingFrameF0SingFrameF0Post
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sing_frame_volume': {
      $post:
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: BodySingFrameVolumeSingFrameVolumePost
            }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: BodySingFrameVolumeSingFrameVolumePost
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/frame_synthesis': {
      $post:
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: FrameAudioQuery
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { speaker: number; core_version?: string | undefined } } & {
              json: FrameAudioQuery
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/connect_waves': {
      $post:
        | { input: { json: string[] }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { json: string[] }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/validate_kana': {
      $post:
        | { input: { query: { text: string } }; output: boolean; outputFormat: 'json'; status: 200 }
        | {
            input: { query: { text: string } }
            output: ParseKanaBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { text: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/initialize_speaker': {
      $post:
        | {
            input: {
              query: {
                speaker: number
                skip_reinit?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                speaker: number
                skip_reinit?: boolean | undefined
                core_version?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/is_initialized_speaker': {
      $get:
        | {
            input: { query: { speaker: number; core_version?: string | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { speaker: number; core_version?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/supported_devices': {
      $get:
        | {
            input: { query: { core_version?: string | undefined } }
            output: SupportedDevicesInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { core_version?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/morphable_targets': {
      $post:
        | {
            input: { query: { core_version?: string | undefined } } & { json: number[] }
            output: { [x: string]: MorphableTargetInfo }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { core_version?: string | undefined } } & { json: number[] }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/synthesis_morphing': {
      $post:
        | {
            input: {
              query: {
                base_speaker: number
                target_speaker: number
                morph_rate: number
                enable_interrogative_upspeak?: boolean | undefined
                core_version?: string | undefined
              }
            } & { json: AudioQuery }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                base_speaker: number
                target_speaker: number
                morph_rate: number
                enable_interrogative_upspeak?: boolean | undefined
                core_version?: string | undefined
              }
            } & { json: AudioQuery }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/speakers': {
      $get:
        | {
            input: { query: { core_version?: string | undefined } }
            output: Speaker[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { core_version?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/speaker_info': {
      $get:
        | {
            input: {
              query: {
                speaker_uuid: string
                resource_format?: 'base64' | 'url' | undefined
                core_version?: string | undefined
              }
            }
            output: SpeakerInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                speaker_uuid: string
                resource_format?: 'base64' | 'url' | undefined
                core_version?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/singers': {
      $get:
        | {
            input: { query: { core_version?: string | undefined } }
            output: Speaker[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { core_version?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/singer_info': {
      $get:
        | {
            input: {
              query: {
                speaker_uuid: string
                resource_format?: 'base64' | 'url' | undefined
                core_version?: string | undefined
              }
            }
            output: SpeakerInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                speaker_uuid: string
                resource_format?: 'base64' | 'url' | undefined
                core_version?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/aivm_models': {
      $get: { input: {}; output: { [x: string]: AivmInfo }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/aivm_models/install': {
      $post:
        | {
            input: { form: BodyInstallModelAivmModelsInstallPost }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { form: BodyInstallModelAivmModelsInstallPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/aivm_models/:aivm_model_uuid': {
      $get:
        | {
            input: { param: { aivm_model_uuid: string } }
            output: AivmInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { aivm_model_uuid: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/aivm_models/:aivm_model_uuid/load': {
      $post:
        | {
            input: { param: { aivm_model_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { aivm_model_uuid: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/aivm_models/:aivm_model_uuid/unload': {
      $post:
        | {
            input: { param: { aivm_model_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { aivm_model_uuid: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/aivm_models/:aivm_model_uuid/update': {
      $post:
        | {
            input: { param: { aivm_model_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { aivm_model_uuid: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/aivm_models/:aivm_model_uuid/uninstall': {
      $delete:
        | {
            input: { param: { aivm_model_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { aivm_model_uuid: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/presets': { $get: { input: {}; output: Preset[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/add_preset': {
      $post:
        | { input: { json: Preset }; output: number; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Preset }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/update_preset': {
      $post:
        | { input: { json: Preset }; output: number; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Preset }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/delete_preset': {
      $post:
        | { input: { query: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { query: { id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_dict': {
      $get:
        | {
            input: { query: { enable_compound_accent?: boolean | undefined } }
            output: { [x: string]: UserDictWord | UserDictWordForCompat }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { enable_compound_accent?: boolean | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_dict_word': {
      $post:
        | {
            input: {
              query: {
                surface: string[]
                pronunciation: string[]
                accent_type: number[]
                word_type?: WordTypes | undefined
                priority?: number | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                surface: string[]
                pronunciation: string[]
                accent_type: number[]
                word_type?: WordTypes | undefined
                priority?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_dict_word/:word_uuid': {
      $put:
        | {
            input: { param: { word_uuid: string } } & {
              query: {
                surface: string[]
                pronunciation: string[]
                accent_type: number[]
                word_type?: WordTypes | undefined
                priority?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { word_uuid: string } } & {
              query: {
                surface: string[]
                pronunciation: string[]
                accent_type: number[]
                word_type?: WordTypes | undefined
                priority?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { word_uuid: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { word_uuid: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/import_user_dict': {
      $post:
        | {
            input: { query: { override: boolean } } & {
              json: { [x: string]: UserDictWord | UserDictWordForCompat }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { override: boolean } } & {
              json: { [x: string]: UserDictWord | UserDictWordForCompat }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/setting': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post:
        | {
            input: { json: BodySettingPostSettingPost } & { form: BodySettingPostSettingPost }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: BodySettingPostSettingPost } & { form: BodySettingPostSettingPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & { '/version': { $get: { input: {}; output: string; outputFormat: 'json'; status: 200 } } } & {
    '/core_versions': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/engine_manifest': {
      $get: { input: {}; output: EngineManifest; outputFormat: 'json'; status: 200 }
    }
  } & { '/': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } },
  '/'
>
export default routes
