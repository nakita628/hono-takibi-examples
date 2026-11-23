type Video = {
  src?: string | undefined
  type: 'video'
  cache?: boolean | undefined
  comment?: string | undefined
  duration?: number | undefined
  'extra-time'?: number | undefined
  'fade-in'?: number | undefined
  'fade-out'?: number | undefined
  start?: number | undefined
  'z-index'?: number | undefined
  'chroma-key'?: { color: string; tolerance?: number | undefined } | undefined
  crop?:
    | { height: number; width: number; x?: number | undefined; y?: number | undefined }
    | undefined
  pan?:
    | 'left'
    | 'top'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | undefined
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'center-center'
    | 'custom'
    | undefined
  rotate?: { angle: number; speed?: number | undefined } | undefined
  scale?: { height?: number | undefined; width?: number | undefined } | undefined
  x?: number | undefined
  y?: number | undefined
  zoom?: number | undefined
  loop?: number | undefined
  muted?: boolean | undefined
  volume?: number | undefined
}
type Image = {
  src?: string | undefined
  type?: 'image' | undefined
  'chroma-key'?: { color: string; tolerance?: number | undefined } | undefined
  crop?:
    | { height: number; width: number; x?: number | undefined; y?: number | undefined }
    | undefined
  pan?:
    | 'left'
    | 'top'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | undefined
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'center-center'
    | 'custom'
    | undefined
  rotate?: { angle: number; speed?: number | undefined } | undefined
  scale?: { height?: number | undefined; width?: number | undefined } | undefined
  x?: number | undefined
  y?: number | undefined
  zoom?: number | undefined
}
type Text = {
  height?: number | undefined
  settings?: { [x: string]: unknown } | undefined
  style?: string | undefined
  text: string
  type: 'text'
  width?: number | undefined
  cache?: boolean | undefined
  comment?: string | undefined
  duration?: number | undefined
  'extra-time'?: number | undefined
  'fade-in'?: number | undefined
  'fade-out'?: number | undefined
  start?: number | undefined
  'z-index'?: number | undefined
  'chroma-key'?: { color: string; tolerance?: number | undefined } | undefined
  crop?:
    | { height: number; width: number; x?: number | undefined; y?: number | undefined }
    | undefined
  pan?:
    | 'left'
    | 'top'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | undefined
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'center-center'
    | 'custom'
    | undefined
  rotate?: { angle: number; speed?: number | undefined } | undefined
  scale?: { height?: number | undefined; width?: number | undefined } | undefined
  x?: number | undefined
  y?: number | undefined
  zoom?: number | undefined
}
type Html = {
  height?: number | undefined
  html: string
  tailwindcss?: boolean | undefined
  type: 'html'
  width?: number | undefined
  cache?: boolean | undefined
  comment?: string | undefined
  duration?: number | undefined
  'extra-time'?: number | undefined
  'fade-in'?: number | undefined
  'fade-out'?: number | undefined
  start?: number | undefined
  'z-index'?: number | undefined
  'chroma-key'?: { color: string; tolerance?: number | undefined } | undefined
  crop?:
    | { height: number; width: number; x?: number | undefined; y?: number | undefined }
    | undefined
  pan?:
    | 'left'
    | 'top'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | undefined
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'center-center'
    | 'custom'
    | undefined
  rotate?: { angle: number; speed?: number | undefined } | undefined
  scale?: { height?: number | undefined; width?: number | undefined } | undefined
  x?: number | undefined
  y?: number | undefined
  zoom?: number | undefined
}
type Component = {
  component: string
  height?: number | undefined
  settings?: { [x: string]: unknown } | undefined
  type: 'component'
  width?: number | undefined
  cache?: boolean | undefined
  comment?: string | undefined
  duration?: number | undefined
  'extra-time'?: number | undefined
  'fade-in'?: number | undefined
  'fade-out'?: number | undefined
  start?: number | undefined
  'z-index'?: number | undefined
  'chroma-key'?: { color: string; tolerance?: number | undefined } | undefined
  crop?:
    | { height: number; width: number; x?: number | undefined; y?: number | undefined }
    | undefined
  pan?:
    | 'left'
    | 'top'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | undefined
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'center-center'
    | 'custom'
    | undefined
  rotate?: { angle: number; speed?: number | undefined } | undefined
  scale?: { height?: number | undefined; width?: number | undefined } | undefined
  x?: number | undefined
  y?: number | undefined
  zoom?: number | undefined
}
type Template = {
  height?: number | undefined
  settings?: { [x: string]: unknown } | undefined
  template: string
  type: 'template'
  width?: number | undefined
  cache?: boolean | undefined
  comment?: string | undefined
  duration?: number | undefined
  'extra-time'?: number | undefined
  'fade-in'?: number | undefined
  'fade-out'?: number | undefined
  start?: number | undefined
  'z-index'?: number | undefined
  'chroma-key'?: { color: string; tolerance?: number | undefined } | undefined
  crop?:
    | { height: number; width: number; x?: number | undefined; y?: number | undefined }
    | undefined
  pan?:
    | 'left'
    | 'top'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | undefined
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'center-center'
    | 'custom'
    | undefined
  rotate?: { angle: number; speed?: number | undefined } | undefined
  scale?: { height?: number | undefined; width?: number | undefined } | undefined
  x?: number | undefined
  y?: number | undefined
  zoom?: number | undefined
}
type Audio = {
  src?: string | undefined
  type?: 'audio' | undefined
  cache?: boolean | undefined
  comment?: string | undefined
  duration?: number | undefined
  'extra-time'?: number | undefined
  'fade-in'?: number | undefined
  'fade-out'?: number | undefined
  start?: number | undefined
  'z-index'?: number | undefined
  muted?: boolean | undefined
  volume?: number | undefined
}
type Voice = {
  text: string
  type: 'voice'
  voice?: string | undefined
  cache?: boolean | undefined
  comment?: string | undefined
  duration?: number | undefined
  'extra-time'?: number | undefined
  'fade-in'?: number | undefined
  'fade-out'?: number | undefined
  start?: number | undefined
  'z-index'?: number | undefined
  muted?: boolean | undefined
  volume?: number | undefined
}
type Scene = {
  'background-color'?: string | undefined
  cache?: boolean | undefined
  comment?: string | undefined
  duration?: number | undefined
  elements?: (Video | Image | Text | Html | Component | Audio | Voice)[] | undefined
  transition?:
    | {
        duration?: number | undefined
        style?:
          | 'fade'
          | 'wipeleft'
          | 'wiperight'
          | 'wipeup'
          | 'wipedown'
          | 'slideleft'
          | 'slideright'
          | 'slideup'
          | 'slidedown'
          | 'circlecrop'
          | 'rectcrop'
          | 'distance'
          | 'fadeblack'
          | 'fadewhite'
          | 'radial'
          | 'smoothleft'
          | 'smoothright'
          | 'smoothup'
          | 'smoothdown'
          | 'circleopen'
          | 'circleclose'
          | 'vertopen'
          | 'vertclose'
          | 'horzopen'
          | 'horzclose'
          | 'dissolve'
          | 'pixelize'
          | 'diagtl'
          | 'diagtr'
          | 'diagbl'
          | 'diagbr'
          | 'hlslice'
          | 'hrslice'
          | 'vuslice'
          | 'vdslice'
          | 'hblur'
          | 'fadegrays'
          | 'wipetl'
          | 'wipetr'
          | 'wipebl'
          | 'wipebr'
          | 'squeezeh'
          | 'squeezev'
          | 'zoomin'
          | undefined
        type?: 'xfade' | undefined
      }
    | undefined
}
type Movie = {
  cache?: boolean | undefined
  comment?: string | undefined
  draft?: true | false | undefined
  elements?: (Video | Image | Text | Html | Component | Template | Audio | Voice)[] | undefined
  fps?: number | undefined
  height?: number | undefined
  quality?: 'low' | 'medium' | 'high' | undefined
  resolution?:
    | 'sd'
    | 'hd'
    | 'full-hd'
    | 'squared'
    | 'instagram-story'
    | 'instagram-feed'
    | 'twitter-landscape'
    | 'twitter-portrait'
    | undefined
  scenes: Scene[]
  settings?: { [x: string]: unknown } | undefined
  width?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/movies': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: Movie }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
