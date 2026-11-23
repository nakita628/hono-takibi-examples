type BatchGetAmpUrlsRequest = {
  lookupStrategy?: 'FETCH_LIVE_DOC' | 'IN_INDEX_DOC' | undefined
  urls?: string[] | undefined
}
type AmpUrl = {
  ampUrl?: string | undefined
  cdnAmpUrl?: string | undefined
  originalUrl?: string | undefined
}
type AmpUrlError = {
  errorCode?:
    | 'ERROR_CODE_UNSPECIFIED'
    | 'INPUT_URL_NOT_FOUND'
    | 'NO_AMP_URL'
    | 'APPLICATION_ERROR'
    | 'URL_IS_VALID_AMP'
    | 'URL_IS_INVALID_AMP'
    | undefined
  errorMessage?: string | undefined
  originalUrl?: string | undefined
}
type BatchGetAmpUrlsResponse = {
  ampUrls?: AmpUrl[] | undefined
  urlErrors?: AmpUrlError[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/ampUrls:batchGet': {
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
        } & { json: BatchGetAmpUrlsRequest }
        output: BatchGetAmpUrlsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
