type InputImage = {
  base64?: (string | null) | undefined
  id_pic?: (string | null) | undefined
  svg_anim?: (string | null) | undefined
  url_source?: (string | null) | undefined
}
type SearchItem = {
  base64?: (string | null) | undefined
  group?: number | undefined
  guid?: (string | null) | undefined
  index?: number | undefined
  indexDB?: bigint | undefined
  score?: number | undefined
  url?: (string | null) | undefined
}
type SearchResults = {
  demo?: (boolean | null) | undefined
  face_per_sec?: (number | null) | undefined
  freeRam?: (number | null) | undefined
  images_in_bundle?: number | undefined
  items?: (SearchItem[] | null) | undefined
  max_score?: number | undefined
  performance?: (string | null) | undefined
  searchedFaces?: (number | null) | undefined
  tookSeconds?: (number | null) | undefined
  tookSecondsDownload?: (number | null) | undefined
  tookSecondsQueue?: (number | null) | undefined
}
type BrowserJsonResponse = {
  code?: (string | null) | undefined
  error?: (string | null) | undefined
  id_search?: (string | null) | undefined
  input?: (InputImage[] | null) | undefined
  message?: (string | null) | undefined
  output?: SearchResults | undefined
  progress?: (number | null) | undefined
}
type InfoResponse = {
  faces?: (number | null) | undefined
  has_credits_to_search?: boolean | undefined
  is_online?: boolean | undefined
  remaining_credits?: number | undefined
}
type SearchData = {
  demo?: (boolean | null) | undefined
  id_captcha?: (string | null) | undefined
  id_search?: (string | null) | undefined
  status_only?: (boolean | null) | undefined
  with_progress?: (boolean | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/delete_pic': {
      $post: {
        input: { query: { id_search?: string | undefined; id_pic?: string | undefined } }
        output: BrowserJsonResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/info': { $post: { input: {}; output: InfoResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/search': {
      $post: {
        input: { json: SearchData }
        output: BrowserJsonResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/upload_pic': {
      $post: {
        input: { form: { id_search?: string | undefined; images?: File[] | undefined } }
        output: BrowserJsonResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
