type GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig = {
  model?: string | undefined
}
type GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig = {
  includeAttributes?: boolean | undefined
  includeBoundingBoxes?: boolean | undefined
  model?: string | undefined
}
type GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig = {
  frameConfidenceThreshold?: number | undefined
  labelDetectionMode?:
    | 'LABEL_DETECTION_MODE_UNSPECIFIED'
    | 'SHOT_MODE'
    | 'FRAME_MODE'
    | 'SHOT_AND_FRAME_MODE'
    | undefined
  model?: string | undefined
  stationaryCamera?: boolean | undefined
  videoConfidenceThreshold?: number | undefined
}
type GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig = { model?: string | undefined }
type GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig = {
  includeAttributes?: boolean | undefined
  includeBoundingBoxes?: boolean | undefined
  includePoseLandmarks?: boolean | undefined
}
type GoogleCloudVideointelligenceV1p3beta1VideoSegment = {
  endTimeOffset?: string | undefined
  startTimeOffset?: string | undefined
}
type GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig = { model?: string | undefined }
type GoogleCloudVideointelligenceV1p3beta1SpeechContext = { phrases?: string[] | undefined }
type GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig = {
  audioTracks?: number[] | undefined
  diarizationSpeakerCount?: number | undefined
  enableAutomaticPunctuation?: boolean | undefined
  enableSpeakerDiarization?: boolean | undefined
  enableWordConfidence?: boolean | undefined
  filterProfanity?: boolean | undefined
  languageCode?: string | undefined
  maxAlternatives?: number | undefined
  speechContexts?: GoogleCloudVideointelligenceV1p3beta1SpeechContext[] | undefined
}
type GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig = {
  languageHints?: string[] | undefined
  model?: string | undefined
}
type GoogleCloudVideointelligenceV1p3beta1VideoContext = {
  explicitContentDetectionConfig?:
    | GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig
    | undefined
  faceDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig | undefined
  labelDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig | undefined
  objectTrackingConfig?: GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig | undefined
  personDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig | undefined
  segments?: GoogleCloudVideointelligenceV1p3beta1VideoSegment[] | undefined
  shotChangeDetectionConfig?:
    | GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig
    | undefined
  speechTranscriptionConfig?:
    | GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig
    | undefined
  textDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig | undefined
}
type GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest = {
  features?:
    | (
        | 'FEATURE_UNSPECIFIED'
        | 'LABEL_DETECTION'
        | 'SHOT_CHANGE_DETECTION'
        | 'EXPLICIT_CONTENT_DETECTION'
        | 'FACE_DETECTION'
        | 'SPEECH_TRANSCRIPTION'
        | 'TEXT_DETECTION'
        | 'OBJECT_TRACKING'
        | 'LOGO_RECOGNITION'
        | 'CELEBRITY_RECOGNITION'
        | 'PERSON_DETECTION'
      )[]
    | undefined
  inputContent?: string | undefined
  inputUri?: string | undefined
  locationId?: string | undefined
  outputUri?: string | undefined
  videoContext?: GoogleCloudVideointelligenceV1p3beta1VideoContext | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1p3beta1/videos:annotate': {
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
        } & { json: GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
