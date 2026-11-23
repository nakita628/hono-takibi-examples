type AppPostLoginBody = { user: string; password: string }
type ValidationError = {
  loc: (string | number)[]
  msg: string
  type: string
  input?: { [x: string]: unknown } | undefined
  ctx?: { [x: string]: unknown } | undefined
}
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type AppPostUsersBody = {
  username: string
  password: string
  role?: string | ({ [x: string]: unknown } | null) | undefined
}
type AppPutPasswordBody = {
  password: string
  old_password?: string | ({ [x: string]: unknown } | null) | undefined
}
type AppPutRoleBody = { role: string }
type CameraSetBody = { value: string }
type ToolExecuteRequest = { tool_name: string; arguments: { [x: string]: unknown } }
type ChatMessage = {
  role: string
  content?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  tool_call_id?: string | ({ [x: string]: unknown } | null) | undefined
  name?: string | ({ [x: string]: unknown } | null) | undefined
  tool_calls?: { [x: string]: unknown }[] | ({ [x: string]: unknown } | null) | undefined
}
type ChatCompletionRequest = {
  messages: ChatMessage[]
  max_tool_iterations?: number | undefined
  stream?: boolean | undefined
  enable_thinking?: boolean | ({ [x: string]: unknown } | null) | undefined
  tool_decisions?: { [x: string]: 'approve' | 'reject' } | undefined
}
type VLMMonitorRequest = {
  camera: string
  condition: string
  max_duration_minutes?: number | undefined
  labels?: string[] | undefined
  zones?: string[] | undefined
}
type FacesResponse = { [x: string]: string[] }
type GenericResponse = { success: boolean; message: string }
type BodyRegisterFaceFacesNameRegisterPost = { file: string }
type BodyRecognizeFaceFacesRecognizePost = { file: string }
type FaceRecognitionResponse = {
  success: boolean
  score?: number | ({ [x: string]: unknown } | null) | undefined
  face_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type DeleteFaceImagesBody = { ids: string[] }
type RenameFaceBody = { new_name: string }
type AudioTranscriptionBody = { event_id: string }
type GenerateStateExamplesBody = { model_name: string; cameras: { [x: string]: unknown[] } }
type GenerateObjectExamplesBody = { model_name: string; label: string }
type SeverityEnum = 'alert' | 'detection'
type ReviewSegmentResponse = {
  id: string
  camera: string
  start_time: string
  end_time: string
  has_been_reviewed: boolean
  severity: SeverityEnum
  thumb_path: string
  data: { [x: string]: unknown }
}
type Last24HoursReview = {
  reviewed_alert: number
  reviewed_detection: number
  total_alert: number
  total_detection: number
}
type DayReview = {
  day: string
  reviewed_alert: number
  reviewed_detection: number
  total_alert: number
  total_detection: number
}
type ReviewSummaryResponse = { last24Hours: Last24HoursReview; root: { [x: string]: DayReview } }
type ReviewModifyMultipleBody = { ids: string[]; reviewed?: boolean | undefined }
type ReviewActivityMotionResponse = { start_time: number; motion: number; camera: string }
type GenAIProviderEnum = 'openai' | 'azure_openai' | 'gemini' | 'ollama' | 'llamacpp'
type GenAIProbeBody = {
  provider: GenAIProviderEnum
  name?: string | ({ [x: string]: unknown } | null) | undefined
  api_key?: string | ({ [x: string]: unknown } | null) | undefined
  base_url?: string | ({ [x: string]: unknown } | null) | undefined
  provider_options?: { [x: string]: unknown } | undefined
}
type AppConfigSetBody = {
  requires_restart?: number | undefined
  update_topic?: string | ({ [x: string]: unknown } | null) | undefined
  config_data?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  skip_save?: boolean | undefined
  replace_paths?: string[] | undefined
}
type MediaSyncBody = {
  dry_run?: boolean | undefined
  media_types?: string[] | undefined
  force?: boolean | undefined
  verbose?: boolean | undefined
}
type PreviewModel = { camera: string; src: string; type: string; start: number; end: number }
type ExportModel = {
  id: string
  camera: string
  name: string
  date: number
  video_path: string
  thumb_path: string
  in_progress: boolean
  export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type ExportCaseModel = {
  id: string
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  created_at: number
  updated_at: number
}
type ExportCaseCreateBody = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type ExportCaseUpdateBody = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type ExportJobModel = {
  id: string
  job_type: string
  status: string
  camera: string
  name?: string | ({ [x: string]: unknown } | null) | undefined
  export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
  request_start_time: number
  request_end_time: number
  start_time?: number | ({ [x: string]: unknown } | null) | undefined
  end_time?: number | ({ [x: string]: unknown } | null) | undefined
  error_message?: string | ({ [x: string]: unknown } | null) | undefined
  results?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  current_step?: string | undefined
  progress_percent?: number | undefined
}
type BatchExportItem = {
  camera: string
  start_time: number
  end_time: number
  image_path?: string | ({ [x: string]: unknown } | null) | undefined
  friendly_name?: string | ({ [x: string]: unknown } | null) | undefined
  client_item_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type ExportStreamEnum = 'auto' | 'main' | 'sub'
type BatchExportBody = {
  items: BatchExportItem[]
  export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
  new_case_name?: string | ({ [x: string]: unknown } | null) | undefined
  new_case_description?: string | ({ [x: string]: unknown } | null) | undefined
  stream?: ExportStreamEnum | undefined
}
type BatchExportResultModel = {
  camera: string
  export_id?: string | ({ [x: string]: unknown } | null) | undefined
  success: boolean
  status?: string | ({ [x: string]: unknown } | null) | undefined
  error?: string | ({ [x: string]: unknown } | null) | undefined
  item_index?: number | ({ [x: string]: unknown } | null) | undefined
  client_item_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type BatchExportResponse = {
  export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
  export_ids: string[]
  results: BatchExportResultModel[]
}
type PlaybackSourceEnum = 'recordings' | 'preview'
type ChaptersEnum = 'none' | 'recording_segments' | 'review_items'
type ExportRecordingsBody = {
  source?: PlaybackSourceEnum | undefined
  name?: string | ({ [x: string]: unknown } | null) | undefined
  image_path?: string | undefined
  export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
  chapters?: ChaptersEnum | ({ [x: string]: unknown } | null) | undefined
  stream?: ExportStreamEnum | undefined
}
type StartExportResponse = {
  success: boolean
  message: string
  export_id?: string | ({ [x: string]: unknown } | null) | undefined
  status?: string | ({ [x: string]: unknown } | null) | undefined
}
type ExportRenameBody = { name: string }
type ExportRecordingsCustomBody = {
  source?: PlaybackSourceEnum | undefined
  name?: string | undefined
  image_path?: string | undefined
  export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
  ffmpeg_input_args?: string | ({ [x: string]: unknown } | null) | undefined
  ffmpeg_output_args?: string | ({ [x: string]: unknown } | null) | undefined
  cpu_fallback?: boolean | undefined
}
type ExportBulkDeleteBody = { ids: string[] }
type ExportBulkReassignBody = {
  ids: string[]
  export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type HardwareUnit = { device: string; label: string }
type DetectionHardware = {
  key: string
  detector: string
  name: string
  units: HardwareUnit[]
  count: number
  unlimited: boolean
}
type HwaccelFamily = { key: string; presets: { [x: string]: string } }
type HwaccelRecommendation = { recommended: string; available?: HwaccelFamily[] | undefined }
type EventResponse = {
  id: string
  label: string
  sub_label: string | ({ [x: string]: unknown } | null)
  camera: string
  start_time: number
  end_time: number | ({ [x: string]: unknown } | null)
  false_positive: boolean | ({ [x: string]: unknown } | null)
  zones: string[]
  thumbnail: string | ({ [x: string]: unknown } | null)
  has_clip: boolean
  has_snapshot: boolean
  retain_indefinitely: boolean
  plus_id: string | ({ [x: string]: unknown } | null)
  model_hash: string | ({ [x: string]: unknown } | null)
  detector_type: string | ({ [x: string]: unknown } | null)
  model_type: string | ({ [x: string]: unknown } | null)
  data: { [x: string]: unknown }
}
type SubmitPlusBody = { include_annotation?: number | undefined }
type EventUploadPlusResponse = { success: boolean; plus_id: string }
type EventsSubLabelBody = {
  subLabel: string
  subLabelScore?: number | ({ [x: string]: unknown } | null) | undefined
  camera?: string | ({ [x: string]: unknown } | null) | undefined
}
type EventsLPRBody = {
  recognizedLicensePlate: string
  recognizedLicensePlateScore?: number | ({ [x: string]: unknown } | null) | undefined
}
type EventsAttributesBody = { attributes?: string[] | undefined }
type EventsDescriptionBody = { description: string | ({ [x: string]: unknown } | null) }
type RegenerateDescriptionEnum = 'thumbnails' | 'snapshot'
type EventsDeleteBody = { event_ids: string[] }
type EventMultiDeleteResponse = {
  success: boolean
  deleted_events: string[]
  not_found_events: string[]
}
type EventsCreateBody = {
  sub_label?: string | ({ [x: string]: unknown } | null) | undefined
  score?: number | ({ [x: string]: unknown } | null) | undefined
  duration?: number | ({ [x: string]: unknown } | null) | undefined
  include_recording?: boolean | ({ [x: string]: unknown } | null) | undefined
  draw?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  pre_capture?: number | ({ [x: string]: unknown } | null) | undefined
}
type EventCreateResponse = { success: boolean; message: string; event_id: string }
type EventsEndBody = { end_time?: number | ({ [x: string]: unknown } | null) | undefined }
type TriggerType = 'thumbnail' | 'description'
type TriggerEmbeddingBody = { type: TriggerType; data: string; threshold?: number | undefined }
type Extension = 'webp' | 'png' | 'jpg' | 'jpeg'
type VodStreamPreference = 'main' | 'sub'
type MotionSearchRequest = {
  start_time: number
  end_time: number
  polygon_points: number[][]
  threshold?: number | undefined
  min_area?: number | undefined
  parallel?: boolean | undefined
  max_results?: number | undefined
}
type MotionSearchStartResponse = { success: boolean; message: string; job_id: string }
type MotionSearchResult = { timestamp: number; change_percentage: number }
type MotionSearchMetricsResponse = {
  segments_scanned?: number | undefined
  segments_processed?: number | undefined
  metadata_inactive_segments?: number | undefined
  heatmap_roi_skip_segments?: number | undefined
  fallback_full_range_segments?: number | undefined
  frames_decoded?: number | undefined
  wall_time_seconds?: number | undefined
  segments_with_errors?: number | undefined
}
type MotionSearchStatusResponse = {
  success: boolean
  message: string
  status: string
  results?: MotionSearchResult[] | ({ [x: string]: unknown } | null) | undefined
  total_frames_processed?: number | ({ [x: string]: unknown } | null) | undefined
  error_message?: string | ({ [x: string]: unknown } | null) | undefined
  metrics?: MotionSearchMetricsResponse | ({ [x: string]: unknown } | null) | undefined
  scanning_timestamp?: number | ({ [x: string]: unknown } | null) | undefined
  progress?: number | ({ [x: string]: unknown } | null) | undefined
}
type DebugReplayStartBody = { camera: string; start_time: number; end_time: number }
type DebugReplayStartResponse = { success: boolean; replay_camera: string; job_id: string }
type DebugReplayStartFromExportBody = { export_id: string }
type DebugReplayStatusResponse = {
  active: boolean
  replay_camera?: string | ({ [x: string]: unknown } | null) | undefined
  source_camera?: string | ({ [x: string]: unknown } | null) | undefined
  start_time?: number | ({ [x: string]: unknown } | null) | undefined
  end_time?: number | ({ [x: string]: unknown } | null) | undefined
  live_ready?: boolean | undefined
}
type DebugReplayStopResponse = { success: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/analytics/preview': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/first_time_login': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 202 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/profile': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/logout': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/login': {
      $post:
        | {
            input: { json: AppPostLoginBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AppPostLoginBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: AppPostUsersBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AppPostUsersBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:username': {
      $delete:
        | {
            input: { param: { username: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:username/password': {
      $put:
        | {
            input: { param: { username: string } } & { json: AppPutPasswordBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { json: AppPutPasswordBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:username/role': {
      $put:
        | {
            input: { param: { username: string } } & { json: AppPutRoleBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { json: AppPutRoleBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/go2rtc/streams': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/go2rtc/streams/:stream_name': {
      $get:
        | {
            input: { param: { stream_name: string | ({ [x: string]: unknown } | null) } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_name: string | ({ [x: string]: unknown } | null) } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { stream_name: string } } & { query: { src?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_name: string } } & { query: { src?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { stream_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/go2rtc/streams/:stream_name/bitrate': {
      $get:
        | {
            input: { param: { stream_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ffprobe': {
      $get:
        | {
            input: { query: { paths?: string | undefined; detailed?: boolean | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { paths?: string | undefined; detailed?: boolean | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/keyframe_analysis': {
      $get:
        | {
            input: { query: { camera?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { camera?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ffprobe/snapshot': {
      $get:
        | {
            input: { query: { url?: string | undefined; timeout?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url?: string | undefined; timeout?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/reolink/detect': {
      $get:
        | {
            input: {
              query: {
                host?: string | undefined
                username?: string | undefined
                password?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                host?: string | undefined
                username?: string | undefined
                password?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/onvif/probe': {
      $get:
        | {
            input: {
              query: {
                host?: string | undefined
                port?: number | undefined
                username?: string | undefined
                password?: string | undefined
                test?: boolean | undefined
                auth_type?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                host?: string | undefined
                port?: number | undefined
                username?: string | undefined
                password?: string | undefined
                test?: boolean | undefined
                auth_type?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/cameras/:camera_name': {
      $delete:
        | {
            input: { param: { camera_name: string } } & {
              query: { delete_exports?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string } } & {
              query: { delete_exports?: boolean | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/camera/:camera_name/set/:feature/:sub_command': {
      $put:
        | {
            input: {
              param: {
                camera_name: string
                feature: string
                sub_command: string | ({ [x: string]: unknown } | null)
              }
            } & { json: CameraSetBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string
                feature: string
                sub_command: string | ({ [x: string]: unknown } | null)
              }
            } & { json: CameraSetBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/camera/:camera_name/set/:feature': {
      $put:
        | {
            input: { param: { camera_name: string; feature: string } } & {
              query: { sub_command?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { json: CameraSetBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string; feature: string } } & {
              query: { sub_command?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { json: CameraSetBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/chat/tools': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/chat/execute': {
      $post:
        | {
            input: { json: ToolExecuteRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ToolExecuteRequest }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/chat/completion': {
      $post:
        | {
            input: { json: ChatCompletionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChatCompletionRequest }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vlm/monitor': {
      $post:
        | {
            input: { json: VLMMonitorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: VLMMonitorRequest }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
      $delete: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/faces': { $get: { input: {}; output: FacesResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/faces/reprocess': {
      $post:
        | {
            input: { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/faces/train/:name/classify': {
      $post:
        | {
            input: { param: { name: string } } & { json: { [x: string]: unknown } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: { [x: string]: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/faces/:name/create': {
      $post:
        | {
            input: { param: { name: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/faces/:name/register': {
      $post:
        | {
            input: { param: { name: string } } & { form: BodyRegisterFaceFacesNameRegisterPost }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { form: BodyRegisterFaceFacesNameRegisterPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/faces/recognize': {
      $post:
        | {
            input: { form: BodyRecognizeFaceFacesRecognizePost }
            output: FaceRecognitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: BodyRecognizeFaceFacesRecognizePost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/faces/:name/reclassify': {
      $post:
        | {
            input: { param: { name: string } } & { json: { [x: string]: unknown } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: { [x: string]: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/faces/:name/delete': {
      $post:
        | {
            input: { param: { name: string } } & { json: DeleteFaceImagesBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: DeleteFaceImagesBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/faces/:old_name/rename': {
      $put:
        | {
            input: { param: { old_name: string } } & { json: RenameFaceBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { old_name: string } } & { json: RenameFaceBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/lpr/reprocess': {
      $put:
        | {
            input: { query: { event_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { event_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/reindex': { $put: { input: {}; output: GenericResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/audio/transcribe': {
      $put:
        | {
            input: { json: AudioTranscriptionBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AudioTranscriptionBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name/dataset': {
      $get:
        | {
            input: { param: { name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/attributes': {
      $get:
        | {
            input: {
              query: { object_type?: string | undefined; group_by_model?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { object_type?: string | undefined; group_by_model?: boolean | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name/train': {
      $get:
        | {
            input: { param: { name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { name: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name/dataset/:category/delete': {
      $post:
        | {
            input: { param: { name: string; category: string } } & {
              json: { [x: string]: unknown }
            }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; category: string } } & {
              json: { [x: string]: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name/dataset/:category/reclassify': {
      $post:
        | {
            input: { param: { name: string; category: string } } & {
              json: { [x: string]: unknown }
            }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; category: string } } & {
              json: { [x: string]: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name/dataset/:old_category/rename': {
      $put:
        | {
            input: { param: { name: string; old_category: string } } & {
              json: { [x: string]: unknown }
            }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; old_category: string } } & {
              json: { [x: string]: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name/dataset/categorize': {
      $post:
        | {
            input: { param: { name: string } } & { json: { [x: string]: unknown } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: { [x: string]: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name/dataset/:category/create': {
      $post:
        | {
            input: { param: { name: string; category: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; category: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name/train/delete': {
      $post:
        | {
            input: { param: { name: string } } & { json: { [x: string]: unknown } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: { [x: string]: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/generate_examples/state': {
      $post:
        | {
            input: { json: GenerateStateExamplesBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GenerateStateExamplesBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/generate_examples/object': {
      $post:
        | {
            input: { json: GenerateObjectExamplesBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GenerateObjectExamplesBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classification/:name': {
      $delete:
        | {
            input: { param: { name: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review': {
      $get:
        | {
            input: {
              query: {
                cameras?: string | undefined
                labels?: string | undefined
                zones?: string | undefined
                reviewed?: number | undefined
                limit?: number | undefined
                severity?: SeverityEnum | undefined
                before?: number | undefined
                after?: number | undefined
              }
            }
            output: ReviewSegmentResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cameras?: string | undefined
                labels?: string | undefined
                zones?: string | undefined
                reviewed?: number | undefined
                limit?: number | undefined
                severity?: SeverityEnum | undefined
                before?: number | undefined
                after?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review_ids': {
      $get:
        | {
            input: { query: { ids: string } }
            output: ReviewSegmentResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/summary': {
      $get:
        | {
            input: {
              query: {
                cameras?: string | undefined
                labels?: string | undefined
                zones?: string | undefined
                timezone?: string | undefined
              }
            }
            output: ReviewSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cameras?: string | undefined
                labels?: string | undefined
                zones?: string | undefined
                timezone?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/reviews/viewed': {
      $post:
        | {
            input: { json: ReviewModifyMultipleBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReviewModifyMultipleBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/reviews/delete': {
      $post:
        | {
            input: { json: ReviewModifyMultipleBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReviewModifyMultipleBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/activity/motion': {
      $get:
        | {
            input: {
              query: {
                cameras?: string | undefined
                before?: number | undefined
                after?: number | undefined
                scale?: number | undefined
              }
            }
            output: ReviewActivityMotionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cameras?: string | undefined
                before?: number | undefined
                after?: number | undefined
                scale?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/event/:event_id': {
      $get:
        | {
            input: { param: { event_id: string } }
            output: ReviewSegmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/:review_id': {
      $get:
        | {
            input: { param: { review_id: string } }
            output: ReviewSegmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { review_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/:review_id/regenerate_description': {
      $put:
        | {
            input: { param: { review_id: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { review_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/:review_id/viewed': {
      $delete:
        | {
            input: { param: { review_id: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { review_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/summarize/start/:start_ts/end/:end_ts': {
      $post:
        | {
            input: { param: { start_ts: number; end_ts: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { start_ts: number; end_ts: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & { '/': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/config/schema.json': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & { '/version': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/stats': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/stats/history': {
      $get:
        | {
            input: { query: { keys?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { keys?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/metrics': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/genai/models': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/genai/roles': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/genai/probe': {
      $post:
        | {
            input: { json: GenAIProbeBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GenAIProbeBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/config': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/profiles': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/profile/active': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ffmpeg/presets': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/config/raw_paths': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/config/raw': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/config/save': {
      $post:
        | {
            input: { query: { save_option: string } } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { save_option: string } } & { json: { [x: string]: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/config/set': {
      $put:
        | {
            input: { json: AppConfigSetBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AppConfigSetBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vainfo': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/nvinfo': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/logs/:service': {
      $get:
        | {
            input: { param: { service: 'frigate' | 'nginx' | 'go2rtc' } } & {
              query: {
                download?: string | ({ [x: string]: unknown } | null) | undefined
                stream?: boolean | ({ [x: string]: unknown } | null) | undefined
                start?: number | ({ [x: string]: unknown } | null) | undefined
                end?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service: 'frigate' | 'nginx' | 'go2rtc' } } & {
              query: {
                download?: string | ({ [x: string]: unknown } | null) | undefined
                stream?: boolean | ({ [x: string]: unknown } | null) | undefined
                start?: number | ({ [x: string]: unknown } | null) | undefined
                end?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/restart': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/media/sync': {
      $post:
        | {
            input: { json: MediaSyncBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MediaSyncBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/media/sync/current': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/media/sync/status/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/labels': {
      $get:
        | {
            input: { query: { camera?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { camera?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sub_labels': {
      $get:
        | {
            input: {
              query: { split_joined?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { split_joined?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/categorized_object_names': {
      $get:
        | {
            input: {
              query: { object_type?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { object_type?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/audio_labels': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/plus/models': {
      $get:
        | {
            input: { query: { filterByCurrentModelDetector?: boolean | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filterByCurrentModelDetector?: boolean | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/plus/validate': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/recognized_license_plates': {
      $get:
        | {
            input: {
              query: { split_joined?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { split_joined?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/timeline': {
      $get:
        | {
            input: {
              query: {
                camera?: string | undefined
                limit?: number | undefined
                source_id?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                camera?: string | undefined
                limit?: number | undefined
                source_id?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/timeline/hourly': {
      $get:
        | {
            input: {
              query: {
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
                labels?: string | ({ [x: string]: unknown } | null) | undefined
                after?: number | ({ [x: string]: unknown } | null) | undefined
                before?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                timezone?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
                labels?: string | ({ [x: string]: unknown } | null) | undefined
                after?: number | ({ [x: string]: unknown } | null) | undefined
                before?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                timezone?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/preview/:camera_name/start/:start_ts/end/:end_ts': {
      $get:
        | {
            input: { param: { camera_name: string; start_ts: number; end_ts: number } }
            output: PreviewModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string; start_ts: number; end_ts: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/preview/:year_month/:day/:hour/:camera_name/:tz_name': {
      $get:
        | {
            input: {
              param: {
                year_month: string
                day: number
                hour: number
                camera_name: string
                tz_name: string
              }
            }
            output: PreviewModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                year_month: string
                day: number
                hour: number
                camera_name: string
                tz_name: string
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/preview/:camera_name/start/:start_ts/end/:end_ts/frames': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/notifications/pubkey': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/notifications/register': {
      $post:
        | {
            input: { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/exports': {
      $get:
        | {
            input: {
              query: {
                export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
                start_date?: number | ({ [x: string]: unknown } | null) | undefined
                end_date?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ExportModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                export_case_id?: string | ({ [x: string]: unknown } | null) | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
                start_date?: number | ({ [x: string]: unknown } | null) | undefined
                end_date?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/cases': {
      $get: { input: {}; output: ExportCaseModel[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: ExportCaseCreateBody }
            output: ExportCaseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportCaseCreateBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/cases/:case_id': {
      $get:
        | {
            input: { param: { case_id: string } }
            output: ExportCaseModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { case_id: string } } & { json: ExportCaseUpdateBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_id: string } } & { json: ExportCaseUpdateBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { case_id: string } } & {
              query: { delete_exports?: boolean | undefined }
            }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_id: string } } & {
              query: { delete_exports?: boolean | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/cases/:case_id/download': {
      $get:
        | {
            input: { param: { case_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/jobs/export': {
      $get: { input: {}; output: ExportJobModel[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/jobs/export/:export_id': {
      $get:
        | {
            input: { param: { export_id: string } }
            output: ExportJobModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { export_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/exports/batch': {
      $post:
        | {
            input: { json: BatchExportBody }
            output: BatchExportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchExportBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/export/:camera_name/start/:start_time/end/:end_time': {
      $post:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_time: number
                end_time: number
              }
            } & { json: ExportRecordingsBody }
            output: StartExportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_time: number
                end_time: number
              }
            } & { json: ExportRecordingsBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/export/:event_id/rename': {
      $patch:
        | {
            input: { param: { event_id: string } } & { json: ExportRenameBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { json: ExportRenameBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/export/custom/:camera_name/start/:start_time/end/:end_time': {
      $post:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_time: number
                end_time: number
              }
            } & { json: ExportRecordingsCustomBody }
            output: StartExportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_time: number
                end_time: number
              }
            } & { json: ExportRecordingsCustomBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/exports/:export_id': {
      $get:
        | {
            input: { param: { export_id: string } }
            output: ExportModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { export_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/exports/delete': {
      $post:
        | {
            input: { json: ExportBulkDeleteBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportBulkDeleteBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/exports/reassign': {
      $post:
        | {
            input: { json: ExportBulkReassignBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportBulkReassignBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/hardware/probe': {
      $get:
        | {
            input: { query: { refresh?: boolean | undefined } }
            output: DetectionHardware[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { refresh?: boolean | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/hardware/hwaccel': {
      $get:
        | {
            input: {
              query: {
                detector?: string | ({ [x: string]: unknown } | null) | undefined
                codecs?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HwaccelRecommendation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                detector?: string | ({ [x: string]: unknown } | null) | undefined
                codecs?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/notices': {
      $get:
        | {
            input: { query: { include_hidden?: boolean | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_hidden?: boolean | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/notices/stats': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/notices/muted_checks': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/notices/hidden': {
      $delete: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/notices/:notice_id/acknowledge': {
      $post:
        | {
            input: { param: { notice_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notice_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/notices/:notice_id/mute': {
      $post:
        | {
            input: { param: { notice_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notice_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/notices/:notice_id/hidden': {
      $delete:
        | {
            input: { param: { notice_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notice_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                camera?: string | ({ [x: string]: unknown } | null) | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
                label?: string | ({ [x: string]: unknown } | null) | undefined
                labels?: string | ({ [x: string]: unknown } | null) | undefined
                sub_label?: string | ({ [x: string]: unknown } | null) | undefined
                sub_labels?: string | ({ [x: string]: unknown } | null) | undefined
                attributes?: string | ({ [x: string]: unknown } | null) | undefined
                zone?: string | ({ [x: string]: unknown } | null) | undefined
                zones?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                offset?: number | ({ [x: string]: unknown } | null) | undefined
                after?: number | ({ [x: string]: unknown } | null) | undefined
                before?: number | ({ [x: string]: unknown } | null) | undefined
                time_range?: string | ({ [x: string]: unknown } | null) | undefined
                has_clip?: number | ({ [x: string]: unknown } | null) | undefined
                has_snapshot?: number | ({ [x: string]: unknown } | null) | undefined
                in_progress?: number | ({ [x: string]: unknown } | null) | undefined
                include_thumbnails?: number | ({ [x: string]: unknown } | null) | undefined
                favorites?: number | ({ [x: string]: unknown } | null) | undefined
                min_score?: number | ({ [x: string]: unknown } | null) | undefined
                max_score?: number | ({ [x: string]: unknown } | null) | undefined
                min_speed?: number | ({ [x: string]: unknown } | null) | undefined
                max_speed?: number | ({ [x: string]: unknown } | null) | undefined
                recognized_license_plate?: string | ({ [x: string]: unknown } | null) | undefined
                is_submitted?: number | ({ [x: string]: unknown } | null) | undefined
                min_length?: number | ({ [x: string]: unknown } | null) | undefined
                max_length?: number | ({ [x: string]: unknown } | null) | undefined
                event_id?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: string | ({ [x: string]: unknown } | null) | undefined
                timezone?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: EventResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                camera?: string | ({ [x: string]: unknown } | null) | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
                label?: string | ({ [x: string]: unknown } | null) | undefined
                labels?: string | ({ [x: string]: unknown } | null) | undefined
                sub_label?: string | ({ [x: string]: unknown } | null) | undefined
                sub_labels?: string | ({ [x: string]: unknown } | null) | undefined
                attributes?: string | ({ [x: string]: unknown } | null) | undefined
                zone?: string | ({ [x: string]: unknown } | null) | undefined
                zones?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                offset?: number | ({ [x: string]: unknown } | null) | undefined
                after?: number | ({ [x: string]: unknown } | null) | undefined
                before?: number | ({ [x: string]: unknown } | null) | undefined
                time_range?: string | ({ [x: string]: unknown } | null) | undefined
                has_clip?: number | ({ [x: string]: unknown } | null) | undefined
                has_snapshot?: number | ({ [x: string]: unknown } | null) | undefined
                in_progress?: number | ({ [x: string]: unknown } | null) | undefined
                include_thumbnails?: number | ({ [x: string]: unknown } | null) | undefined
                favorites?: number | ({ [x: string]: unknown } | null) | undefined
                min_score?: number | ({ [x: string]: unknown } | null) | undefined
                max_score?: number | ({ [x: string]: unknown } | null) | undefined
                min_speed?: number | ({ [x: string]: unknown } | null) | undefined
                max_speed?: number | ({ [x: string]: unknown } | null) | undefined
                recognized_license_plate?: string | ({ [x: string]: unknown } | null) | undefined
                is_submitted?: number | ({ [x: string]: unknown } | null) | undefined
                min_length?: number | ({ [x: string]: unknown } | null) | undefined
                max_length?: number | ({ [x: string]: unknown } | null) | undefined
                event_id?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: string | ({ [x: string]: unknown } | null) | undefined
                timezone?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/explore': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: EventResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/event_ids': {
      $get:
        | {
            input: { query: { ids: string } }
            output: EventResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | ({ [x: string]: unknown } | null) | undefined
                event_id?: string | ({ [x: string]: unknown } | null) | undefined
                search_type?: string | ({ [x: string]: unknown } | null) | undefined
                include_thumbnails?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                offset?: number | ({ [x: string]: unknown } | null) | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
                labels?: string | ({ [x: string]: unknown } | null) | undefined
                sub_labels?: string | ({ [x: string]: unknown } | null) | undefined
                attributes?: string | ({ [x: string]: unknown } | null) | undefined
                zones?: string | ({ [x: string]: unknown } | null) | undefined
                after?: number | ({ [x: string]: unknown } | null) | undefined
                before?: number | ({ [x: string]: unknown } | null) | undefined
                time_range?: string | ({ [x: string]: unknown } | null) | undefined
                has_clip?: boolean | ({ [x: string]: unknown } | null) | undefined
                has_snapshot?: boolean | ({ [x: string]: unknown } | null) | undefined
                is_submitted?: boolean | ({ [x: string]: unknown } | null) | undefined
                timezone?: string | ({ [x: string]: unknown } | null) | undefined
                min_score?: number | ({ [x: string]: unknown } | null) | undefined
                max_score?: number | ({ [x: string]: unknown } | null) | undefined
                min_speed?: number | ({ [x: string]: unknown } | null) | undefined
                max_speed?: number | ({ [x: string]: unknown } | null) | undefined
                recognized_license_plate?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | ({ [x: string]: unknown } | null) | undefined
                event_id?: string | ({ [x: string]: unknown } | null) | undefined
                search_type?: string | ({ [x: string]: unknown } | null) | undefined
                include_thumbnails?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                offset?: number | ({ [x: string]: unknown } | null) | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
                labels?: string | ({ [x: string]: unknown } | null) | undefined
                sub_labels?: string | ({ [x: string]: unknown } | null) | undefined
                attributes?: string | ({ [x: string]: unknown } | null) | undefined
                zones?: string | ({ [x: string]: unknown } | null) | undefined
                after?: number | ({ [x: string]: unknown } | null) | undefined
                before?: number | ({ [x: string]: unknown } | null) | undefined
                time_range?: string | ({ [x: string]: unknown } | null) | undefined
                has_clip?: boolean | ({ [x: string]: unknown } | null) | undefined
                has_snapshot?: boolean | ({ [x: string]: unknown } | null) | undefined
                is_submitted?: boolean | ({ [x: string]: unknown } | null) | undefined
                timezone?: string | ({ [x: string]: unknown } | null) | undefined
                min_score?: number | ({ [x: string]: unknown } | null) | undefined
                max_score?: number | ({ [x: string]: unknown } | null) | undefined
                min_speed?: number | ({ [x: string]: unknown } | null) | undefined
                max_speed?: number | ({ [x: string]: unknown } | null) | undefined
                recognized_license_plate?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/summary': {
      $get:
        | {
            input: {
              query: {
                timezone?: string | ({ [x: string]: unknown } | null) | undefined
                has_clip?: number | ({ [x: string]: unknown } | null) | undefined
                has_snapshot?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timezone?: string | ({ [x: string]: unknown } | null) | undefined
                has_clip?: number | ({ [x: string]: unknown } | null) | undefined
                has_snapshot?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id': {
      $get:
        | {
            input: { param: { event_id: string } }
            output: EventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { event_id: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/retain': {
      $post:
        | {
            input: { param: { event_id: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { event_id: string } }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/plus': {
      $post:
        | {
            input: { param: { event_id: string } } & { json: SubmitPlusBody }
            output: EventUploadPlusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { json: SubmitPlusBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/false_positive': {
      $put:
        | {
            input: { param: { event_id: string } }
            output: EventUploadPlusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/sub_label': {
      $post:
        | {
            input: { param: { event_id: string } } & { json: EventsSubLabelBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { json: EventsSubLabelBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/recognized_license_plate': {
      $post:
        | {
            input: { param: { event_id: string } } & { json: EventsLPRBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { json: EventsLPRBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/attributes': {
      $post:
        | {
            input: { param: { event_id: string } } & { json: EventsAttributesBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { json: EventsAttributesBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/description': {
      $post:
        | {
            input: { param: { event_id: string } } & { json: EventsDescriptionBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { json: EventsDescriptionBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/description/regenerate': {
      $put:
        | {
            input: { param: { event_id: string } } & {
              query: {
                source?: RegenerateDescriptionEnum | ({ [x: string]: unknown } | null) | undefined
                force?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & {
              query: {
                source?: RegenerateDescriptionEnum | ({ [x: string]: unknown } | null) | undefined
                force?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/description/generate': {
      $post:
        | {
            input: { json: EventsDescriptionBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventsDescriptionBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/': {
      $delete:
        | {
            input: { json: EventsDeleteBody }
            output: EventMultiDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventsDeleteBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:camera_name/:label/create': {
      $post:
        | {
            input: { param: { camera_name: string; label: string } } & { json: EventsCreateBody }
            output: EventCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string; label: string } } & { json: EventsCreateBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/end': {
      $put:
        | {
            input: { param: { event_id: string } } & { json: EventsEndBody }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { json: EventsEndBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/trigger/embedding': {
      $post:
        | {
            input: { query: { camera_name: string; name: string } } & { json: TriggerEmbeddingBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { camera_name: string; name: string } } & { json: TriggerEmbeddingBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/trigger/embedding/:camera_name/:name': {
      $put:
        | {
            input: { param: { camera_name: string; name: string } } & { json: TriggerEmbeddingBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string; name: string } } & { json: TriggerEmbeddingBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { camera_name: string; name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string; name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/triggers/status/:camera_name': {
      $get:
        | {
            input: { param: { camera_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name': {
      $get:
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: {
                fps?: number | undefined
                height?: number | undefined
                bbox?: number | ({ [x: string]: unknown } | null) | undefined
                timestamp?: number | ({ [x: string]: unknown } | null) | undefined
                zones?: number | ({ [x: string]: unknown } | null) | undefined
                mask?: number | ({ [x: string]: unknown } | null) | undefined
                motion?: number | ({ [x: string]: unknown } | null) | undefined
                regions?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: {
                fps?: number | undefined
                height?: number | undefined
                bbox?: number | ({ [x: string]: unknown } | null) | undefined
                timestamp?: number | ({ [x: string]: unknown } | null) | undefined
                zones?: number | ({ [x: string]: unknown } | null) | undefined
                mask?: number | ({ [x: string]: unknown } | null) | undefined
                motion?: number | ({ [x: string]: unknown } | null) | undefined
                regions?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/ptz/info': {
      $get:
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/latest.{extension}': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                extension: Extension
              }
            } & {
              query: {
                bbox?: number | ({ [x: string]: unknown } | null) | undefined
                timestamp?: number | ({ [x: string]: unknown } | null) | undefined
                zones?: number | ({ [x: string]: unknown } | null) | undefined
                mask?: number | ({ [x: string]: unknown } | null) | undefined
                motion?: number | ({ [x: string]: unknown } | null) | undefined
                paths?: number | ({ [x: string]: unknown } | null) | undefined
                regions?: number | ({ [x: string]: unknown } | null) | undefined
                quality?: number | ({ [x: string]: unknown } | null) | undefined
                height?: number | ({ [x: string]: unknown } | null) | undefined
                store?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                extension: Extension
              }
            } & {
              query: {
                bbox?: number | ({ [x: string]: unknown } | null) | undefined
                timestamp?: number | ({ [x: string]: unknown } | null) | undefined
                zones?: number | ({ [x: string]: unknown } | null) | undefined
                mask?: number | ({ [x: string]: unknown } | null) | undefined
                motion?: number | ({ [x: string]: unknown } | null) | undefined
                paths?: number | ({ [x: string]: unknown } | null) | undefined
                regions?: number | ({ [x: string]: unknown } | null) | undefined
                quality?: number | ({ [x: string]: unknown } | null) | undefined
                height?: number | ({ [x: string]: unknown } | null) | undefined
                store?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/recordings/:frame_time/snapshot.{format}': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                frame_time: number
                format: 'png' | 'jpg'
              }
            } & { query: { height?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                frame_time: number
                format: 'png' | 'jpg'
              }
            } & { query: { height?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/plus/:frame_time': {
      $post:
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); frame_time: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); frame_time: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/start/:start_ts/end/:end_ts/clip.mp4': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vod/:camera_name/start/:start_ts/end/:end_ts': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            } & { query: { force_discontinuity?: boolean | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            } & { query: { force_discontinuity?: boolean | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vod/:year_month/:day/:hour/:camera_name': {
      $get:
        | {
            input: {
              param: {
                year_month: string
                day: number
                hour: number
                camera_name: string | ({ [x: string]: unknown } | null)
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                year_month: string
                day: number
                hour: number
                camera_name: string | ({ [x: string]: unknown } | null)
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vod/:year_month/:day/:hour/:camera_name/:tz_name': {
      $get:
        | {
            input: {
              param: {
                year_month: string
                day: number
                hour: number
                camera_name: string | ({ [x: string]: unknown } | null)
                tz_name: string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                year_month: string
                day: number
                hour: number
                camera_name: string | ({ [x: string]: unknown } | null)
                tz_name: string
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vod/event/:event_id': {
      $get:
        | {
            input: { param: { event_id: string } } & { query: { padding?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { query: { padding?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vod/clip/:camera_name/start/:start_ts/end/:end_ts': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vod/:camera_name/:stream/start/:start_ts/end/:end_ts': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                stream: VodStreamPreference
                start_ts: number
                end_ts: number
              }
            } & { query: { force_discontinuity?: boolean | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                stream: VodStreamPreference
                start_ts: number
                end_ts: number
              }
            } & { query: { force_discontinuity?: boolean | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/snapshot.jpg': {
      $get:
        | {
            input: { param: { event_id: string } } & {
              query: {
                download?: boolean | ({ [x: string]: unknown } | null) | undefined
                timestamp?: number | ({ [x: string]: unknown } | null) | undefined
                bbox?: number | ({ [x: string]: unknown } | null) | undefined
                crop?: number | ({ [x: string]: unknown } | null) | undefined
                height?: number | ({ [x: string]: unknown } | null) | undefined
                quality?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & {
              query: {
                download?: boolean | ({ [x: string]: unknown } | null) | undefined
                timestamp?: number | ({ [x: string]: unknown } | null) | undefined
                bbox?: number | ({ [x: string]: unknown } | null) | undefined
                crop?: number | ({ [x: string]: unknown } | null) | undefined
                height?: number | ({ [x: string]: unknown } | null) | undefined
                quality?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/thumbnail.{extension}': {
      $get:
        | {
            input: { param: { event_id: string; extension: Extension } } & {
              query: { max_cache_age?: number | undefined; format?: 'ios' | 'android' | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string; extension: Extension } } & {
              query: { max_cache_age?: number | undefined; format?: 'ios' | 'android' | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/grid.jpg': {
      $get:
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: { color?: string | undefined; font_scale?: number | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: { color?: string | undefined; font_scale?: number | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/region_grid': {
      $delete:
        | {
            input: { param: { camera_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/snapshot-clean.webp': {
      $get:
        | {
            input: { param: { event_id: string } } & { query: { download?: boolean | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { query: { download?: boolean | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/clip.mp4': {
      $get:
        | {
            input: { param: { event_id: string } } & { query: { padding?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & { query: { padding?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/:review_id/clip.mp4': {
      $get:
        | {
            input: { param: { review_id: string } } & { query: { padding?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { review_id: string } } & { query: { padding?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:event_id/preview.gif': {
      $get:
        | {
            input: { param: { event_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/start/:start_ts/end/:end_ts/preview.gif': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            } & { query: { max_cache_age?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            } & { query: { max_cache_age?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/start/:start_ts/end/:end_ts/preview.mp4': {
      $get:
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            } & { query: { max_cache_age?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                camera_name: string | ({ [x: string]: unknown } | null)
                start_ts: number
                end_ts: number
              }
            } & { query: { max_cache_age?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/review/:event_id/preview': {
      $get:
        | {
            input: { param: { event_id: string } } & {
              query: { format?: 'gif' | 'mp4' | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & {
              query: { format?: 'gif' | 'mp4' | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/preview/:file_name/thumbnail.webp': {
      $get:
        | {
            input: { param: { file_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/preview/:file_name/thumbnail.jpg': {
      $get:
        | {
            input: { param: { file_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/:label/thumbnail.jpg': {
      $get:
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); label: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); label: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/:label/best.jpg': {
      $get:
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); label: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); label: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/:label/clip.mp4': {
      $get:
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); label: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); label: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/:label/snapshot.jpg': {
      $get:
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); label: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); label: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/search/motion': {
      $post:
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              json: MotionSearchRequest
            }
            output: MotionSearchStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              json: MotionSearchRequest
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/search/motion/:job_id': {
      $get:
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); job_id: string }
            }
            output: MotionSearchStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); job_id: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/search/motion/:job_id/cancel': {
      $post:
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); job_id: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { camera_name: string | ({ [x: string]: unknown } | null); job_id: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/recordings/storage': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/recordings/summary': {
      $get:
        | {
            input: {
              query: {
                timezone?: string | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timezone?: string | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/recordings/summary': {
      $get:
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: { timezone?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: { timezone?: string | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/recordings/coverage': {
      $get:
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: { after: number; before: number; timelines?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: { after: number; before: number; timelines?: boolean | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:camera_name/recordings': {
      $get:
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: {
                after?: number | ({ [x: string]: unknown } | null) | undefined
                before?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { camera_name: string | ({ [x: string]: unknown } | null) } } & {
              query: {
                after?: number | ({ [x: string]: unknown } | null) | undefined
                before?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/recordings/unavailable': {
      $get:
        | {
            input: {
              query: {
                cameras?: string | undefined
                before?: number | undefined
                after?: number | undefined
                scale?: number | undefined
              }
            }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cameras?: string | undefined
                before?: number | undefined
                after?: number | undefined
                scale?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/recordings/start/:start/end/:end': {
      $delete:
        | {
            input: { param: { start: number; end: number } } & {
              query: {
                keep?: string | ({ [x: string]: unknown } | null) | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { start: number; end: number } } & {
              query: {
                keep?: string | ({ [x: string]: unknown } | null) | undefined
                cameras?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/debug_replay/start': {
      $post:
        | {
            input: { json: DebugReplayStartBody }
            output: DebugReplayStartResponse
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: DebugReplayStartBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DebugReplayStartBody }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: DebugReplayStartBody }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: DebugReplayStartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/debug_replay/start_from_export': {
      $post:
        | {
            input: { json: DebugReplayStartFromExportBody }
            output: DebugReplayStartResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: DebugReplayStartFromExportBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: DebugReplayStartFromExportBody }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: DebugReplayStartFromExportBody }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: DebugReplayStartFromExportBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/debug_replay/status': {
      $get: { input: {}; output: DebugReplayStatusResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/debug_replay/stop': {
      $post: { input: {}; output: DebugReplayStopResponse; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
