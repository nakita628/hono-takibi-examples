type TextEntry = {
  text?: string | undefined
  type?: 'TEXT_TYPE_UNSPECIFIED' | 'PLAIN_TEXT' | 'HTML' | undefined
}
type ArticleAndParentComment = {
  article?: TextEntry | undefined
  parentComment?: TextEntry | undefined
}
type Context = {
  articleAndParentComment?: ArticleAndParentComment | undefined
  entries?: TextEntry[] | undefined
}
type AttributeParameters = {
  scoreThreshold?: number | undefined
  scoreType?:
    | 'SCORE_TYPE_UNSPECIFIED'
    | 'PROBABILITY'
    | 'STD_DEV_SCORE'
    | 'PERCENTILE'
    | 'RAW'
    | undefined
}
type AnalyzeCommentRequest = {
  clientToken?: string | undefined
  comment?: TextEntry | undefined
  communityId?: string | undefined
  context?: Context | undefined
  doNotStore?: boolean | undefined
  dropUnsupportedAttributes?: boolean | undefined
  languages?: string[] | undefined
  requestedAttributes?: { [x: string]: AttributeParameters } | undefined
  sessionId?: string | undefined
  spanAnnotations?: boolean | undefined
}
type Score = {
  type?:
    | 'SCORE_TYPE_UNSPECIFIED'
    | 'PROBABILITY'
    | 'STD_DEV_SCORE'
    | 'PERCENTILE'
    | 'RAW'
    | undefined
  value?: number | undefined
}
type SpanScore = { begin?: number | undefined; end?: number | undefined; score?: Score | undefined }
type AttributeScores = { spanScores?: SpanScore[] | undefined; summaryScore?: Score | undefined }
type AnalyzeCommentResponse = {
  attributeScores?: { [x: string]: AttributeScores } | undefined
  clientToken?: string | undefined
  detectedLanguages?: string[] | undefined
  languages?: string[] | undefined
}
type SuggestCommentScoreRequest = {
  attributeScores?: { [x: string]: AttributeScores } | undefined
  clientToken?: string | undefined
  comment?: TextEntry | undefined
  communityId?: string | undefined
  context?: Context | undefined
  languages?: string[] | undefined
  sessionId?: string | undefined
}
type SuggestCommentScoreResponse = {
  clientToken?: string | undefined
  detectedLanguages?: string[] | undefined
  requestedLanguages?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha1/comments:analyze': {
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
        } & { json: AnalyzeCommentRequest }
        output: AnalyzeCommentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/comments:suggestscore': {
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
        } & { json: SuggestCommentScoreRequest }
        output: SuggestCommentScoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
