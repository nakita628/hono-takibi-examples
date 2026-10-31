import { createRoute, z } from '@hono/zod-openapi'

const SourceSchema = z
  .enum(['email', 'web', 'file', 'chat'])
  .openapi({ description: 'An enumeration.', title: 'Source' })
  .openapi('Source')

const DocumentChunkMetadataSchema = z
  .object({
    author: z.string().exactOptional().openapi({ title: 'Author' }),
    collection_id: z.string().exactOptional().openapi({ title: 'Collection Id' }),
    created_at: z.string().exactOptional().openapi({ title: 'Created At' }),
    document_id: z.string().exactOptional().openapi({ title: 'Document Id' }),
    keywords: z.array(z.string()).exactOptional().openapi({ title: 'Keywords' }),
    language: z.string().exactOptional().openapi({ title: 'Language' }),
    source: SourceSchema.exactOptional(),
    source_id: z.string().exactOptional().openapi({ title: 'Source Id' }),
    time_period: z.string().exactOptional().openapi({ title: 'Time Period' }),
    updated_at: z.string().exactOptional().openapi({ title: 'Updated At' }),
    url: z.string().exactOptional().openapi({ title: 'Url' }),
    user_id: z.string().exactOptional().openapi({ title: 'User Id' }),
  })
  .openapi({ title: 'DocumentChunkMetadata', required: [] })
  .openapi('DocumentChunkMetadata')

const DocumentChunkWithScoreSchema = z
  .object({
    embedding: z.array(z.number()).exactOptional().openapi({ title: 'Embedding' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    metadata: DocumentChunkMetadataSchema,
    score: z.number().openapi({ title: 'Score' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({ required: ['text', 'metadata', 'score'], title: 'DocumentChunkWithScore' })
  .openapi('DocumentChunkWithScore')

const DocumentMetadataFilterSchema = z
  .object({
    author: z.string().exactOptional().openapi({ title: 'Author' }),
    collection_id: z.string().exactOptional().openapi({ title: 'Collection Id' }),
    document_id: z.string().exactOptional().openapi({ title: 'Document Id' }),
    end_date: z.string().exactOptional().openapi({ title: 'End Date' }),
    keywords: z.array(z.string()).exactOptional().openapi({ title: 'Keywords' }),
    language: z.string().exactOptional().openapi({ title: 'Language' }),
    source: SourceSchema.exactOptional(),
    source_id: z.string().exactOptional().openapi({ title: 'Source Id' }),
    start_date: z.string().exactOptional().openapi({ title: 'Start Date' }),
    time_period: z.string().exactOptional().openapi({ title: 'Time Period' }),
    user_id: z.string().exactOptional().openapi({ title: 'User Id' }),
  })
  .openapi({ title: 'DocumentMetadataFilter', required: [] })
  .openapi('DocumentMetadataFilter')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const QuerySchema = z
  .object({
    filter: DocumentMetadataFilterSchema.exactOptional(),
    query: z.string().openapi({ title: 'Query' }),
    top_k: z.int().default(3).exactOptional().openapi({ title: 'Top K' }),
  })
  .openapi({ required: ['query'], title: 'Query' })
  .openapi('Query')

const QueryRequestSchema = z
  .object({
    namespace: z.string().exactOptional().openapi({ title: 'Namespace' }),
    queries: z.array(QuerySchema).openapi({ title: 'Queries' }),
  })
  .openapi({ required: ['queries'], title: 'QueryRequest' })
  .openapi('QueryRequest')

const QueryResultSchema = z
  .object({
    query: z.string().openapi({ title: 'Query' }),
    results: z.array(DocumentChunkWithScoreSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['query', 'results'], title: 'QueryResult' })
  .openapi('QueryResult')

const QueryResponseSchema = z
  .object({ results: z.array(QueryResultSchema).openapi({ title: 'Results' }) })
  .openapi({ required: ['results'], title: 'QueryResponse' })
  .openapi('QueryResponse')

const HTTPBearerSecurityScheme = { scheme: 'bearer', type: 'http' }

export const postQueryRoute = createRoute({
  method: 'post',
  path: '/query',
  summary: 'Query',
  description:
    "Accepts search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.",
  operationId: 'query_query_post',
  request: {
    body: { content: { 'application/json': { schema: QueryRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: QueryResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})
