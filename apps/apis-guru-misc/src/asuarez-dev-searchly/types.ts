type APIResponseSimilarity = {
  error?: boolean | undefined
  message?: string | undefined
  response?:
    | {
        similarity_list?:
          | {
              artist_name?: string | undefined
              artist_url?: string | undefined
              id?: number | undefined
              index_id?: number | undefined
              lyrics?: string | undefined
              percentage?: number | undefined
              song_name?: string | undefined
              song_url?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type APIResponseSong = {
  error?: boolean | undefined
  message?: string | undefined
  response?:
    | { results?: { id?: number | undefined; name?: string | undefined }[] | undefined }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/similarity/by_content': {
      $post:
        | {
            input: { json: { content?: string | undefined } }
            output: APIResponseSimilarity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { content?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/similarity/by_song': {
      $get:
        | {
            input: { query: { song_id: number } }
            output: APIResponseSimilarity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { song_id: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/song/search': {
      $get:
        | {
            input: { query: { query: string } }
            output: APIResponseSong
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { query: string } }; output: string; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes
