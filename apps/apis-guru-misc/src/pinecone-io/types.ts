type CollectionName = string
type CollectionsList = CollectionName[]
type IndexName = string
type CollectionDefinition = { name: CollectionName; source: IndexName }
type ErrorMessage = string
type CollectionState = string
type Collection = { name: CollectionName; size: bigint; status: CollectionState }
type VectorFilter = { [x: string]: unknown }
type DescribeIndexStatsRequest = { filter?: VectorFilter | undefined }
type VectorDimensionality = number
type IndexNamespaceStats = { vectorCount?: bigint | undefined }
type DescribeIndexStatsResponse = {
  dimension?: VectorDimensionality | undefined
  indexFullness?: number | undefined
  namespaces?: { [x: string]: IndexNamespaceStats } | undefined
  totalVectorCount?: bigint | undefined
}
type IndexesList = IndexName[]
type IndexMetadataConfig = { indexed?: string[] | undefined }
type IndexMetric = 'euclidean' | 'cosine' | 'dotproduct'
type PodType =
  | 's1.x1'
  | 's1.x2'
  | 's1.x4'
  | 's1.x8'
  | 'p1.x1'
  | 'p1.x2'
  | 'p1.x4'
  | 'p1.x8'
  | 'p2.x1'
  | 'p2.x2'
  | 'p2.x4'
  | 'p2.x8'
type IndexDefinition = {
  dimension: VectorDimensionality
  metadata_config?: IndexMetadataConfig | undefined
  metric?: IndexMetric | undefined
  name: IndexName
  pod_type?: PodType | undefined
  pods?: number | undefined
  replicas?: number | undefined
  source_collection?: CollectionName | undefined
}
type IndexDatabase = {
  dimension?: VectorDimensionality | undefined
  metric?: IndexMetric | undefined
  name?: IndexName | undefined
  pod_type?: PodType | undefined
  pods?: number | undefined
  replicas?: number | undefined
  shards?: number | undefined
}
type IndexState = 'Initializing' | 'ScalingUp' | 'ScalingDown' | 'Terminating' | 'Ready'
type IndexStatus = {
  host?: string | undefined
  port?: number | undefined
  ready?: boolean | undefined
  state?: IndexState | undefined
}
type Index = { database?: IndexDatabase | undefined; status?: IndexStatus | undefined }
type IndexConfiguration = { pod_type?: PodType | undefined; replicas?: number | undefined }
type VectorId = string
type NamespaceName = string
type SparseVectorData = { indices: bigint[]; values: number[] }
type VectorData = number[]
type QueryRequest = {
  filter?: VectorFilter | undefined
  id?: VectorId | undefined
  includeMetadata?: boolean | undefined
  includeValues?: boolean | undefined
  namespace?: NamespaceName | undefined
  sparseVector?: SparseVectorData | undefined
  topK: bigint
  vector?: VectorData | undefined
}
type VectorMetadata = { [x: string]: unknown }
type QueryMatch = {
  id: VectorId
  metadata?: VectorMetadata | undefined
  score?: number | undefined
  sparseValues?: SparseVectorData | undefined
  values?: VectorData | undefined
}
type QueryResponse = { matches?: QueryMatch[] | undefined; namespace?: NamespaceName | undefined }
type DeleteRequest = {
  deleteAll?: boolean | undefined
  filter?: VectorFilter | undefined
  ids?: VectorId[] | undefined
  namespace?: NamespaceName | undefined
}
type DeleteResponse = { [x: string]: unknown }
type FetchRequest = { ids: VectorId[]; namespace?: NamespaceName | undefined }
type FetchResponse = {
  namespace?: NamespaceName | undefined
  vectors?: { [x: string]: VectorData } | undefined
}
type UpdateRequest = {
  id: string
  namespace?: NamespaceName | undefined
  setMetadata?: VectorMetadata | undefined
  sparseValues?: SparseVectorData | undefined
  values?: VectorData | undefined
}
type UpdateResponse = { [x: string]: unknown }
type UpsertVector = {
  id?: VectorId | undefined
  metadata?: VectorMetadata | undefined
  sparseValues?: SparseVectorData | undefined
  values?: VectorData | undefined
}
type UpsertRequest = { namespace?: NamespaceName | undefined; vectors: UpsertVector[] }
type UpsertResponse = { upsertedCount?: bigint | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/collections': {
      $get: { input: {}; output: CollectionsList; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: CollectionDefinition }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: CollectionDefinition }
            output: ErrorMessage
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CollectionDefinition }
            output: ErrorMessage
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: CollectionDefinition }
            output: ErrorMessage
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/collections/:collectionName': {
      $delete:
        | {
            input: { param: { collectionName: CollectionName } }
            output: string
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { collectionName: CollectionName } }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { collectionName: CollectionName } }
            output: ErrorMessage
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { collectionName: CollectionName } }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: CollectionName } }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { collectionName: CollectionName } }
            output: ErrorMessage
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/describe_index_stats': {
      $post: {
        input: { json: DescribeIndexStatsRequest }
        output: DescribeIndexStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indexes': {
      $get: { input: {}; output: IndexesList; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: IndexDefinition }; output: string; outputFormat: 'text'; status: 201 }
        | {
            input: { json: IndexDefinition }
            output: ErrorMessage
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: IndexDefinition }
            output: ErrorMessage
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: IndexDefinition }
            output: ErrorMessage
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/indexes/:indexName': {
      $delete:
        | {
            input: { param: { indexName: IndexName } }
            output: string
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { indexName: IndexName } }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { indexName: IndexName } }
            output: ErrorMessage
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { indexName: IndexName } }
            output: Index
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: IndexName } }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { indexName: IndexName } }
            output: ErrorMessage
            outputFormat: 'text'
            status: 500
          }
      $patch:
        | {
            input: { param: { indexName: IndexName } } & { json: IndexConfiguration }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { indexName: IndexName } } & { json: IndexConfiguration }
            output: ErrorMessage
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { indexName: IndexName } } & { json: IndexConfiguration }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { indexName: IndexName } } & { json: IndexConfiguration }
            output: ErrorMessage
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/query': {
      $post: {
        input: { json: QueryRequest }
        output: QueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vectors/delete': {
      $post: {
        input: { json: DeleteRequest }
        output: DeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vectors/fetch': {
      $post: {
        input: { json: FetchRequest }
        output: FetchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vectors/update': {
      $post: {
        input: { json: UpdateRequest }
        output: UpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vectors/upsert': {
      $post: {
        input: { json: UpsertRequest }
        output: UpsertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
