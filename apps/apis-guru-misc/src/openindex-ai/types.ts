type Source = 'email' | 'web' | 'file' | 'chat'
type DocumentMetadataFilter = {
  author?: string | undefined
  collection_id?: string | undefined
  document_id?: string | undefined
  end_date?: string | undefined
  keywords?: string[] | undefined
  language?: string | undefined
  source?: Source | undefined
  source_id?: string | undefined
  start_date?: string | undefined
  time_period?: string | undefined
  user_id?: string | undefined
}
type Query = {
  filter?: DocumentMetadataFilter | undefined
  query: string
  top_k?: number | undefined
}
type QueryRequest = { namespace?: string | undefined; queries: Query[] }
type DocumentChunkMetadata = {
  author?: string | undefined
  collection_id?: string | undefined
  created_at?: string | undefined
  document_id?: string | undefined
  keywords?: string[] | undefined
  language?: string | undefined
  source?: Source | undefined
  source_id?: string | undefined
  time_period?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user_id?: string | undefined
}
type DocumentChunkWithScore = {
  embedding?: number[] | undefined
  id?: string | undefined
  metadata: DocumentChunkMetadata
  score: number
  text: string
}
type QueryResult = { query: string; results: DocumentChunkWithScore[] }
type QueryResponse = { results: QueryResult[] }
type ValidationError = { loc: (string | number)[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/query': {
      $post:
        | {
            input: { json: QueryRequest }
            output: QueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QueryRequest }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
