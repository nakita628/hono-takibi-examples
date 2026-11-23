type AssetResponseAttributes = {
  created?: string | undefined
  filename?: string | undefined
  id?: string | undefined
  owner?: string | undefined
  region?: string | undefined
  renderId?: string | undefined
  status?: 'importing' | 'ready' | 'failed' | 'deleted' | undefined
  updated?: string | undefined
  url?: string | undefined
}
type AssetResponseData = {
  attributes?: AssetResponseAttributes | undefined
  type?: string | undefined
}
type AssetRenderResponse = { data?: AssetResponseData[] | undefined }
type AssetResponse = { data?: AssetResponseData | undefined }
type ShotstackDestination = { exclude?: boolean | undefined; provider: string }
type Poster = { capture: number }
type Range = { length?: number | undefined; start?: number | undefined }
type Size = { height?: number | undefined; width?: number | undefined }
type Thumbnail = { capture: number; scale: number }
type Output = {
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:5' | '4:3' | undefined
  destinations?: ShotstackDestination[] | undefined
  format: 'mp4' | 'gif' | 'mp3' | 'jpg' | 'png' | 'bmp'
  fps?: 12 | 15 | 24 | 25 | 30 | undefined
  poster?: Poster | undefined
  quality?: 'low' | 'medium' | 'high' | undefined
  range?: Range | undefined
  resolution?: 'preview' | 'mobile' | 'sd' | 'hd' | '1080' | undefined
  scaleTo?: 'preview' | 'mobile' | 'sd' | 'hd' | '1080' | undefined
  size?: Size | undefined
  thumbnail?: Thumbnail | undefined
}
type Font = { src: string }
type Soundtrack = {
  effect?: 'fadeIn' | 'fadeOut' | 'fadeInFadeOut' | undefined
  src: string
  volume?: number | undefined
}
type Crop = {
  bottom?: number | undefined
  left?: number | undefined
  right?: number | undefined
  top?: number | undefined
}
type VideoAsset = {
  crop?: Crop | undefined
  src: string
  trim?: number | undefined
  type: string
  volume?: number | undefined
}
type ImageAsset = { crop?: Crop | undefined; src: string; type: string }
type Offset = { x?: number | undefined; y?: number | undefined }
type TitleAsset = {
  background?: string | undefined
  color?: string | undefined
  offset?: Offset | undefined
  position?:
    | 'top'
    | 'topRight'
    | 'right'
    | 'bottomRight'
    | 'bottom'
    | 'bottomLeft'
    | 'left'
    | 'topLeft'
    | 'center'
    | undefined
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | undefined
  style?:
    | 'minimal'
    | 'blockbuster'
    | 'vogue'
    | 'sketchy'
    | 'skinny'
    | 'chunk'
    | 'chunkLight'
    | 'marker'
    | 'future'
    | 'subtitle'
    | undefined
  text: string
  type: string
}
type HtmlAsset = {
  background?: string | undefined
  css?: string | undefined
  height?: number | undefined
  html: string
  position?:
    | 'top'
    | 'topRight'
    | 'right'
    | 'bottomRight'
    | 'bottom'
    | 'bottomLeft'
    | 'left'
    | 'topLeft'
    | 'center'
    | undefined
  type: string
  width?: number | undefined
}
type AudioAsset = {
  effect?: 'fadeIn' | 'fadeOut' | 'fadeInFadeOut' | undefined
  src: string
  trim?: number | undefined
  type: string
  volume?: number | undefined
}
type LumaAsset = { src: string; trim?: number | undefined; type: string }
type Transition = {
  in?:
    | 'fade'
    | 'fadeSlow'
    | 'fadeFast'
    | 'reveal'
    | 'revealSlow'
    | 'revealFast'
    | 'wipeLeft'
    | 'wipeLeftSlow'
    | 'wipeLeftFast'
    | 'wipeRight'
    | 'wipeRightSlow'
    | 'wipeRightFast'
    | 'slideLeft'
    | 'slideLeftSlow'
    | 'slideLeftFast'
    | 'slideRight'
    | 'slideRightSlow'
    | 'slideRightFast'
    | 'slideUp'
    | 'slideUpSlow'
    | 'slideUpFast'
    | 'slideDown'
    | 'slideDownSlow'
    | 'slideDownFast'
    | 'carouselLeft'
    | 'carouselLeftSlow'
    | 'carouselLeftFast'
    | 'carouselRight'
    | 'carouselRightSlow'
    | 'carouselRightFast'
    | 'carouselUp'
    | 'carouselUpSlow'
    | 'carouselUpFast'
    | 'carouselDown'
    | 'carouselDownSlow'
    | 'carouselDownFast'
    | 'shuffleTopRight'
    | 'shuffleTopRightSlow'
    | 'shuffleTopRightFast'
    | 'shuffleRightTop'
    | 'shuffleRightTopSlow'
    | 'shuffleRightTopFast'
    | 'shuffleRightBottom'
    | 'shuffleRightBottomSlow'
    | 'shuffleRightBottomFast'
    | 'shuffleBottomRight'
    | 'shuffleBottomRightSlow'
    | 'shuffleBottomRightFast'
    | 'shuffleBottomLeft'
    | 'shuffleBottomLeftSlow'
    | 'shuffleBottomLeftFast'
    | 'shuffleLeftBottom'
    | 'shuffleLeftBottomSlow'
    | 'shuffleLeftBottomFast'
    | 'shuffleLeftTop'
    | 'shuffleLeftTopSlow'
    | 'shuffleLeftTopFast'
    | 'shuffleTopLeft'
    | 'shuffleTopLeftSlow'
    | 'shuffleTopLeftFast'
    | 'zoom'
    | undefined
  out?:
    | 'fade'
    | 'fadeSlow'
    | 'fadeFast'
    | 'reveal'
    | 'revealSlow'
    | 'revealFast'
    | 'wipeLeft'
    | 'wipeLeftSlow'
    | 'wipeLeftFast'
    | 'wipeRight'
    | 'wipeRightSlow'
    | 'wipeRightFast'
    | 'slideLeft'
    | 'slideLeftSlow'
    | 'slideLeftFast'
    | 'slideRight'
    | 'slideRightSlow'
    | 'slideRightFast'
    | 'slideUp'
    | 'slideUpSlow'
    | 'slideUpFast'
    | 'slideDown'
    | 'slideDownSlow'
    | 'slideDownFast'
    | 'carouselLeft'
    | 'carouselLeftSlow'
    | 'carouselLeftFast'
    | 'carouselRight'
    | 'carouselRightSlow'
    | 'carouselRightFast'
    | 'carouselUp'
    | 'carouselUpSlow'
    | 'carouselUpFast'
    | 'carouselDown'
    | 'carouselDownSlow'
    | 'carouselDownFast'
    | 'shuffleTopRight'
    | 'shuffleTopRightSlow'
    | 'shuffleTopRightFast'
    | 'shuffleRightTop'
    | 'shuffleRightTopSlow'
    | 'shuffleRightTopFast'
    | 'shuffleRightBottom'
    | 'shuffleRightBottomSlow'
    | 'shuffleRightBottomFast'
    | 'shuffleBottomRight'
    | 'shuffleBottomRightSlow'
    | 'shuffleBottomRightFast'
    | 'shuffleBottomLeft'
    | 'shuffleBottomLeftSlow'
    | 'shuffleBottomLeftFast'
    | 'shuffleLeftBottom'
    | 'shuffleLeftBottomSlow'
    | 'shuffleLeftBottomFast'
    | 'shuffleLeftTop'
    | 'shuffleLeftTopSlow'
    | 'shuffleLeftTopFast'
    | 'shuffleTopLeft'
    | 'shuffleTopLeftSlow'
    | 'shuffleTopLeftFast'
    | 'zoom'
    | undefined
}
type Clip = {
  asset: VideoAsset | ImageAsset | TitleAsset | HtmlAsset | AudioAsset | LumaAsset
  effect?: 'zoomIn' | 'zoomOut' | 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown' | undefined
  filter?:
    | 'boost'
    | 'contrast'
    | 'darken'
    | 'greyscale'
    | 'lighten'
    | 'muted'
    | 'negative'
    | undefined
  fit?: 'cover' | 'contain' | 'crop' | 'none' | undefined
  length: number
  offset?: Offset | undefined
  opacity?: number | undefined
  position?:
    | 'top'
    | 'topRight'
    | 'right'
    | 'bottomRight'
    | 'bottom'
    | 'bottomLeft'
    | 'left'
    | 'topLeft'
    | 'center'
    | undefined
  scale?: number | undefined
  start: number
  transition?: Transition | undefined
}
type Track = { clips: Clip[] }
type Timeline = {
  background?: string | undefined
  cache?: boolean | undefined
  fonts?: Font[] | undefined
  soundtrack?: Soundtrack | undefined
  tracks: Track[]
}
type Edit = {
  callback?: string | undefined
  disk?: 'local' | 'mount' | undefined
  output: Output
  timeline: Timeline
}
type QueuedResponseData = { id: string; message: string }
type QueuedResponse = { message: string; response: QueuedResponseData; success: boolean }
type RenderResponseData = {
  created: string
  data: Edit
  duration?: number | undefined
  error?: string | undefined
  id: string
  owner: string
  plan?: string | undefined
  poster?: string | undefined
  renderTime?: number | undefined
  status: 'queued' | 'fetching' | 'rendering' | 'saving' | 'done' | 'failed'
  thumbnail?: string | undefined
  updated: string
  url?: string | undefined
}
type RenderResponse = { message: string; response: RenderResponseData; success: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/assets/render/:id': {
      $get: {
        input: { param: { id: string } }
        output: AssetRenderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: AssetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/render': {
      $post: { input: { json: Edit }; output: QueuedResponse; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/render/:id': {
      $get: {
        input: { param: { id: string } }
        output: RenderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
