type Empty = { [x: string]: unknown }
type AdBreak = { startTimeOffset?: string | undefined }
type EditAtom = {
  endTimeOffset?: string | undefined
  inputs?: string[] | undefined
  key?: string | undefined
  startTimeOffset?: string | undefined
}
type AudioMapping = {
  atomKey?: string | undefined
  gainDb?: number | undefined
  inputChannel?: number | undefined
  inputKey?: string | undefined
  inputTrack?: number | undefined
  outputChannel?: number | undefined
}
type AudioStream = {
  bitrateBps?: number | undefined
  channelCount?: number | undefined
  channelLayout?: string[] | undefined
  codec?: string | undefined
  displayName?: string | undefined
  languageCode?: string | undefined
  mapping?: AudioMapping[] | undefined
  sampleRateHertz?: number | undefined
}
type TextMapping = {
  atomKey?: string | undefined
  inputKey?: string | undefined
  inputTrack?: number | undefined
}
type TextStream = {
  codec?: string | undefined
  displayName?: string | undefined
  languageCode?: string | undefined
  mapping?: TextMapping[] | undefined
}
type H264CodecSettings = {
  allowOpenGop?: boolean | undefined
  aqStrength?: number | undefined
  bFrameCount?: number | undefined
  bPyramid?: boolean | undefined
  bitrateBps?: number | undefined
  crfLevel?: number | undefined
  enableTwoPass?: boolean | undefined
  entropyCoder?: string | undefined
  frameRate?: number | undefined
  gopDuration?: string | undefined
  gopFrameCount?: number | undefined
  heightPixels?: number | undefined
  pixelFormat?: string | undefined
  preset?: string | undefined
  profile?: string | undefined
  rateControlMode?: string | undefined
  tune?: string | undefined
  vbvFullnessBits?: number | undefined
  vbvSizeBits?: number | undefined
  widthPixels?: number | undefined
}
type H265CodecSettings = {
  allowOpenGop?: boolean | undefined
  aqStrength?: number | undefined
  bFrameCount?: number | undefined
  bPyramid?: boolean | undefined
  bitrateBps?: number | undefined
  crfLevel?: number | undefined
  enableTwoPass?: boolean | undefined
  frameRate?: number | undefined
  gopDuration?: string | undefined
  gopFrameCount?: number | undefined
  heightPixels?: number | undefined
  pixelFormat?: string | undefined
  preset?: string | undefined
  profile?: string | undefined
  rateControlMode?: string | undefined
  tune?: string | undefined
  vbvFullnessBits?: number | undefined
  vbvSizeBits?: number | undefined
  widthPixels?: number | undefined
}
type Vp9CodecSettings = {
  bitrateBps?: number | undefined
  crfLevel?: number | undefined
  frameRate?: number | undefined
  gopDuration?: string | undefined
  gopFrameCount?: number | undefined
  heightPixels?: number | undefined
  pixelFormat?: string | undefined
  profile?: string | undefined
  rateControlMode?: string | undefined
  widthPixels?: number | undefined
}
type VideoStream = {
  h264?: H264CodecSettings | undefined
  h265?: H265CodecSettings | undefined
  vp9?: Vp9CodecSettings | undefined
}
type ElementaryStream = {
  audioStream?: AudioStream | undefined
  key?: string | undefined
  textStream?: TextStream | undefined
  videoStream?: VideoStream | undefined
}
type Audio = {
  highBoost?: boolean | undefined
  lowBoost?: boolean | undefined
  lufs?: number | undefined
}
type Color = {
  brightness?: number | undefined
  contrast?: number | undefined
  saturation?: number | undefined
}
type Crop = {
  bottomPixels?: number | undefined
  leftPixels?: number | undefined
  rightPixels?: number | undefined
  topPixels?: number | undefined
}
type Deblock = { enabled?: boolean | undefined; strength?: number | undefined }
type BwdifConfig = {
  deinterlaceAllFrames?: boolean | undefined
  mode?: string | undefined
  parity?: string | undefined
}
type YadifConfig = {
  deinterlaceAllFrames?: boolean | undefined
  disableSpatialInterlacing?: boolean | undefined
  mode?: string | undefined
  parity?: string | undefined
}
type Deinterlace = { bwdif?: BwdifConfig | undefined; yadif?: YadifConfig | undefined }
type Denoise = { strength?: number | undefined; tune?: string | undefined }
type Pad = {
  bottomPixels?: number | undefined
  leftPixels?: number | undefined
  rightPixels?: number | undefined
  topPixels?: number | undefined
}
type PreprocessingConfig = {
  audio?: Audio | undefined
  color?: Color | undefined
  crop?: Crop | undefined
  deblock?: Deblock | undefined
  deinterlace?: Deinterlace | undefined
  denoise?: Denoise | undefined
  pad?: Pad | undefined
}
type Input = {
  key?: string | undefined
  preprocessingConfig?: PreprocessingConfig | undefined
  uri?: string | undefined
}
type Manifest = {
  fileName?: string | undefined
  muxStreams?: string[] | undefined
  type?: 'MANIFEST_TYPE_UNSPECIFIED' | 'HLS' | 'DASH' | undefined
}
type SegmentSettings = {
  individualSegments?: boolean | undefined
  segmentDuration?: string | undefined
}
type MuxStream = {
  container?: string | undefined
  elementaryStreams?: string[] | undefined
  fileName?: string | undefined
  key?: string | undefined
  segmentSettings?: SegmentSettings | undefined
}
type Output = { uri?: string | undefined }
type AnimationEnd = { startTimeOffset?: string | undefined }
type NormalizedCoordinate = { x?: number | undefined; y?: number | undefined }
type AnimationFade = {
  endTimeOffset?: string | undefined
  fadeType?: 'FADE_TYPE_UNSPECIFIED' | 'FADE_IN' | 'FADE_OUT' | undefined
  startTimeOffset?: string | undefined
  xy?: NormalizedCoordinate | undefined
}
type AnimationStatic = {
  startTimeOffset?: string | undefined
  xy?: NormalizedCoordinate | undefined
}
type Animation = {
  animationEnd?: AnimationEnd | undefined
  animationFade?: AnimationFade | undefined
  animationStatic?: AnimationStatic | undefined
}
type Image = {
  alpha?: number | undefined
  resolution?: NormalizedCoordinate | undefined
  uri?: string | undefined
}
type Overlay = { animations?: Animation[] | undefined; image?: Image | undefined }
type PubsubDestination = { topic?: string | undefined }
type SpriteSheet = {
  columnCount?: number | undefined
  endTimeOffset?: string | undefined
  filePrefix?: string | undefined
  format?: string | undefined
  interval?: string | undefined
  quality?: number | undefined
  rowCount?: number | undefined
  spriteHeightPixels?: number | undefined
  spriteWidthPixels?: number | undefined
  startTimeOffset?: string | undefined
  totalCount?: number | undefined
}
type JobConfig = {
  adBreaks?: AdBreak[] | undefined
  editList?: EditAtom[] | undefined
  elementaryStreams?: ElementaryStream[] | undefined
  inputs?: Input[] | undefined
  manifests?: Manifest[] | undefined
  muxStreams?: MuxStream[] | undefined
  output?: Output | undefined
  overlays?: Overlay[] | undefined
  pubsubDestination?: PubsubDestination | undefined
  spriteSheets?: SpriteSheet[] | undefined
}
type JobTemplate = {
  config?: JobConfig | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
}
type ListJobTemplatesResponse = {
  jobTemplates?: JobTemplate[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Job = {
  config?: JobConfig | undefined
  createTime?: string | undefined
  endTime?: string | undefined
  error?: Status | undefined
  inputUri?: string | undefined
  labels?: { [x: string]: string } | undefined
  mode?:
    | 'PROCESSING_MODE_UNSPECIFIED'
    | 'PROCESSING_MODE_INTERACTIVE'
    | 'PROCESSING_MODE_BATCH'
    | undefined
  name?: string | undefined
  outputUri?: string | undefined
  startTime?: string | undefined
  state?:
    | 'PROCESSING_STATE_UNSPECIFIED'
    | 'PENDING'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | undefined
  templateId?: string | undefined
  ttlAfterCompletionDays?: number | undefined
}
type ListJobsResponse = {
  jobs?: Job[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
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
        output: JobTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/jobTemplates': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListJobTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            jobTemplateId?: string | undefined
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
        } & { json: JobTemplate }
        output: JobTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/jobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
