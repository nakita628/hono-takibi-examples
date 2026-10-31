import { createRoute, z } from '@hono/zod-openapi'

const CollectionNameSchema = z
  .string()
  .openapi({ description: 'The unique name of a collection.', example: 'example' })
  .openapi('CollectionName')

const CollectionStateSchema = z
  .string()
  .openapi({ description: 'The current status of a collection.', example: 'Ready' })
  .openapi('CollectionState')

const CollectionSchema = z
  .object({
    name: CollectionNameSchema,
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 3590359 }),
    status: CollectionStateSchema,
  })
  .openapi({ required: ['name', 'size', 'status'] })
  .openapi('Collection')

const IndexNameSchema = z
  .string()
  .min(1)
  .max(45)
  .openapi({ description: 'The unique name of an index.', example: 'example' })
  .openapi('IndexName')

const CollectionDefinitionSchema = z
  .object({ name: CollectionNameSchema, source: IndexNameSchema })
  .openapi({ required: ['name', 'source'] })
  .openapi('CollectionDefinition')

const CollectionsListSchema = z.array(CollectionNameSchema).openapi('CollectionsList')

const VectorFilterSchema = z
  .looseObject({})
  .openapi({
    description:
      'If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.',
    example: { hello: ['alpha', 'bravo'] },
  })
  .openapi('VectorFilter')

const VectorIdSchema = z
  .string()
  .openapi({ description: 'The unique ID of a vector', example: 'vector-0' })
  .openapi('VectorId')

const NamespaceNameSchema = z
  .string()
  .openapi({ description: 'An index namespace name', example: 'namespace-0' })
  .openapi('NamespaceName')

const DeleteRequestSchema = z
  .object({
    deleteAll: z.boolean().default(false).exactOptional(),
    filter: VectorFilterSchema.exactOptional(),
    ids: z.array(VectorIdSchema).exactOptional(),
    namespace: NamespaceNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRequest')

const DeleteResponseSchema = z.object({}).openapi('DeleteResponse')

const DescribeIndexStatsRequestSchema = z
  .object({ filter: VectorFilterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeIndexStatsRequest')

const VectorDimensionalitySchema = z
  .int32()
  .min(1)
  .max(20000)
  .openapi({ description: 'The number of dimensions in the vector representation' })
  .openapi('VectorDimensionality')

const IndexNamespaceStatsSchema = z
  .object({
    vectorCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('IndexNamespaceStats')

const DescribeIndexStatsResponseSchema = z
  .object({
    dimension: VectorDimensionalitySchema.exactOptional(),
    indexFullness: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fullness of the index, regardless of whether a metadata filter expression was passed. The granularity of this metric is 10%.',
      }),
    namespaces: z.record(z.string(), IndexNamespaceStatsSchema).exactOptional(),
    totalVectorCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('DescribeIndexStatsResponse')

const EnvironmentSchema = z
  .enum(['us-west1-gcp', 'us-east1-gcp', 'eu-west1-gcp', 'us-east1-aws'])
  .openapi('Environment')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const FetchRequestSchema = z
  .object({ ids: z.array(VectorIdSchema), namespace: NamespaceNameSchema.exactOptional() })
  .openapi({ required: ['ids'] })
  .openapi('FetchRequest')

const VectorDataSchema = z
  .array(z.float32())
  .openapi({
    description:
      'Vector dense data. This should be the same length as the dimension of the index being queried.',
    example: [1, 2, 3],
  })
  .openapi('VectorData')

const FetchResponseSchema = z
  .object({
    namespace: NamespaceNameSchema.exactOptional(),
    vectors: z.record(z.string(), VectorDataSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FetchResponse')

const IndexMetricSchema = z
  .enum(['euclidean', 'cosine', 'dotproduct'])
  .openapi({ description: 'The vector similarity metric of the index' })
  .openapi('IndexMetric')

const PodTypeSchema = z
  .enum([
    's1.x1',
    's1.x2',
    's1.x4',
    's1.x8',
    'p1.x1',
    'p1.x2',
    'p1.x4',
    'p1.x8',
    'p2.x1',
    'p2.x2',
    'p2.x4',
    'p2.x8',
  ])
  .openapi({ description: 'The pod type' })
  .openapi('PodType')

const IndexDatabaseSchema = z
  .object({
    dimension: VectorDimensionalitySchema.exactOptional(),
    metric: IndexMetricSchema.exactOptional(),
    name: IndexNameSchema.exactOptional(),
    pod_type: PodTypeSchema.exactOptional(),
    pods: z.int32().min(1).exactOptional(),
    replicas: z.int32().min(1).exactOptional(),
    shards: z.int32().min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexDatabase')

const IndexStateSchema = z
  .enum(['Initializing', 'ScalingUp', 'ScalingDown', 'Terminating', 'Ready'])
  .openapi({ description: 'The current status of a index.', example: 'Ready' })
  .openapi('IndexState')

const IndexStatusSchema = z
  .object({
    host: z.string().exactOptional(),
    port: z.int32().exactOptional(),
    ready: z.boolean().exactOptional(),
    state: IndexStateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexStatus')

const IndexSchema = z
  .object({
    database: IndexDatabaseSchema.exactOptional(),
    status: IndexStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Index')

const IndexConfigurationSchema = z
  .object({
    pod_type: PodTypeSchema.exactOptional(),
    replicas: z
      .int32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({ description: 'The desired number of replicas for the index.' }),
  })
  .openapi({ required: [] })
  .openapi('IndexConfiguration')

const IndexMetadataConfigSchema = z
  .object({
    indexed: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['hello'] }),
  })
  .openapi({
    description:
      "Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed.",
    required: [],
  })
  .openapi('IndexMetadataConfig')

const IndexDefinitionSchema = z
  .object({
    dimension: VectorDimensionalitySchema,
    metadata_config: IndexMetadataConfigSchema.exactOptional(),
    metric: IndexMetricSchema.exactOptional(),
    name: IndexNameSchema,
    pod_type: PodTypeSchema.exactOptional(),
    pods: z
      .int32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({ description: 'The number of pods for the index to use,including replicas.' }),
    replicas: z
      .int32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of replicas. Replicas duplicate your index. They provide higher availability and throughput.',
      }),
    source_collection: CollectionNameSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'dimension'] })
  .openapi('IndexDefinition')

const IndexesListSchema = z.array(IndexNameSchema).openapi('IndexesList')

const VectorMetadataSchema = z
  .looseObject({})
  .openapi({ example: { hello: 'alpha' } })
  .openapi('VectorMetadata')

const SparseVectorDataSchema = z
  .object({
    indices: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .openapi({ description: 'The indices of the sparse data.', example: [1] }),
    values: z
      .array(z.float32())
      .openapi({
        description:
          'The corresponding values of the sparse data, which must be the same length as the indices.',
        example: [2],
      }),
  })
  .openapi({
    description:
      'Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length.',
    required: ['indices', 'values'],
  })
  .openapi('SparseVectorData')

const QueryMatchSchema = z
  .object({
    id: VectorIdSchema,
    metadata: VectorMetadataSchema.exactOptional(),
    score: z.float32().exactOptional(),
    sparseValues: SparseVectorDataSchema.exactOptional(),
    values: VectorDataSchema.exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('QueryMatch')

const QueryRequestSchema = z
  .object({
    filter: VectorFilterSchema.exactOptional(),
    id: VectorIdSchema.exactOptional(),
    includeMetadata: z.boolean().default(false).exactOptional(),
    includeValues: z.boolean().default(false).exactOptional(),
    namespace: NamespaceNameSchema.exactOptional(),
    sparseVector: SparseVectorDataSchema.exactOptional(),
    topK: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(10000n),
      )
      .default(100n)
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 10000,
        default: 100,
        description: 'The number of results to return for each query.',
      }),
    vector: VectorDataSchema.exactOptional(),
  })
  .openapi({ required: ['topK'] })
  .openapi('QueryRequest')

const QueryResponseSchema = z
  .object({
    matches: z.array(QueryMatchSchema).exactOptional(),
    namespace: NamespaceNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryResponse')

const UpdateRequestSchema = z
  .object({
    id: z.string().openapi({ description: "The vector's unique ID" }),
    namespace: NamespaceNameSchema.exactOptional(),
    setMetadata: VectorMetadataSchema.exactOptional(),
    sparseValues: SparseVectorDataSchema.exactOptional(),
    values: VectorDataSchema.exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('UpdateRequest')

const UpdateResponseSchema = z.object({}).openapi('UpdateResponse')

const UpsertVectorSchema = z
  .object({
    id: VectorIdSchema.exactOptional(),
    metadata: VectorMetadataSchema.exactOptional(),
    sparseValues: SparseVectorDataSchema.exactOptional(),
    values: VectorDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpsertVector')

const UpsertRequestSchema = z
  .object({ namespace: NamespaceNameSchema.exactOptional(), vectors: z.array(UpsertVectorSchema) })
  .openapi({ required: ['vectors'] })
  .openapi('UpsertRequest')

const UpsertResponseSchema = z
  .object({
    upsertedCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('UpsertResponse')

const BadRequestResponse = {
  description: 'Quota exceeded, or invalid parameters.',
  content: { 'text/plain': { schema: ErrorMessageSchema } },
}

const CollectionNotFoundResponse = {
  description: 'Collection not found.',
  content: { 'text/plain': { schema: ErrorMessageSchema } },
}

const IndexNotFoundResponse = {
  description: 'Index not found.',
  content: { 'text/plain': { schema: ErrorMessageSchema } },
}

const InternalErrorResponse = {
  description: 'Internal error. Can be caused by invalid parameters.',
  content: { 'text/plain': { schema: ErrorMessageSchema } },
}

const ApiKeySecurityScheme = { in: 'header', name: 'Api-Key', type: 'apiKey' }

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['Index Operations'],
  summary: 'List collections',
  description: 'This operation returns a list of your Pinecone collections.',
  operationId: 'list_collections',
  responses: {
    200: {
      description: 'This operation returns a list of all the collections in your current project.',
      content: { 'application/json': { schema: CollectionsListSchema } },
    },
  },
})

export const postCollectionsRoute = createRoute({
  method: 'post',
  path: '/collections',
  tags: ['Index Operations'],
  summary: 'Create collection',
  description: 'This operation creates a Pinecone collection.',
  operationId: 'create_collection',
  request: {
    body: {
      content: { 'application/json': { schema: CollectionDefinitionSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The collection has been successfully created.',
      content: { 'text/plain': { schema: z.string(), example: 'Created' } },
    },
    400: BadRequestResponse,
    409: {
      description: 'A collection with the name provided already exists.',
      content: { 'text/plain': { schema: ErrorMessageSchema } },
    },
    500: InternalErrorResponse,
  },
})

export const getCollectionsCollectionNameRoute = createRoute({
  method: 'get',
  path: '/collections/{collectionName}',
  tags: ['Index Operations'],
  summary: 'Describe collection',
  description: 'Get a description of a collection.',
  operationId: 'describe_collection',
  request: {
    params: z.object({
      collectionName: CollectionNameSchema.openapi({
        param: {
          in: 'path',
          name: 'collectionName',
          required: true,
          schema: { $ref: '#/components/schemas/CollectionName' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'This operation returns a list of all the collections in your current project.',
      content: { 'application/json': { schema: CollectionSchema } },
    },
    404: CollectionNotFoundResponse,
    500: InternalErrorResponse,
  },
})

export const deleteCollectionsCollectionNameRoute = createRoute({
  method: 'delete',
  path: '/collections/{collectionName}',
  tags: ['Index Operations'],
  summary: 'Delete Collection',
  description: 'This operation deletes an existing collection.',
  operationId: 'delete_collection',
  request: {
    params: z.object({
      collectionName: CollectionNameSchema.openapi({
        param: {
          in: 'path',
          name: 'collectionName',
          required: true,
          schema: { $ref: '#/components/schemas/CollectionName' },
        },
      }),
    }),
  },
  responses: {
    202: {
      description: 'The collection has been successfully deleted.',
      content: { 'text/plain': { schema: z.string(), example: 'Accepted' } },
    },
    404: CollectionNotFoundResponse,
    500: InternalErrorResponse,
  },
})

export const postDescribeIndexStatsRoute = createRoute({
  method: 'post',
  path: '/describe_index_stats',
  tags: ['Vector Operations'],
  summary: 'Describe Index Stats',
  description:
    "The `DescribeIndexStats` operation returns statistics about the index's contents, including the vector count per namespace and the number of dimensions.",
  operationId: 'DescribeIndexStats',
  request: {
    body: {
      content: { 'application/json': { schema: DescribeIndexStatsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful response',
      content: { 'application/json': { schema: DescribeIndexStatsResponseSchema } },
    },
  },
})

export const getIndexesRoute = createRoute({
  method: 'get',
  path: '/indexes',
  tags: ['Index Operations'],
  summary: 'List indexes',
  description: 'This operation returns a list of your Pinecone indexes.',
  operationId: 'list_indexes',
  responses: {
    200: {
      description:
        'This operation returns a list of all the indexes that you have previously created, and which are associated with the given API key',
      content: { 'application/json': { schema: IndexesListSchema } },
    },
  },
})

export const postIndexesRoute = createRoute({
  method: 'post',
  path: '/indexes',
  tags: ['Index Operations'],
  summary: 'Create index',
  description:
    'This operation creates a Pinecone index. You can use it to specify the measure of similarity, the dimension of vectors to be stored in the index, the numbers of replicas to use, and more.',
  operationId: 'create_index',
  request: {
    body: { content: { 'application/json': { schema: IndexDefinitionSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The collection has been successfully created.',
      content: { 'text/plain': { schema: z.string(), example: 'Created' } },
    },
    400: BadRequestResponse,
    409: {
      description: 'Index of given name already exists.',
      content: { 'text/plain': { schema: ErrorMessageSchema } },
    },
    500: InternalErrorResponse,
  },
})

export const getIndexesIndexNameRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexName}',
  tags: ['Index Operations'],
  summary: 'Describe index',
  description: 'Get a description of an index.',
  operationId: 'describe_index',
  request: {
    params: z.object({
      indexName: IndexNameSchema.openapi({
        param: {
          in: 'path',
          name: 'indexName',
          required: true,
          schema: { $ref: '#/components/schemas/IndexName' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'This operation returns a list of all the collections in your current project.',
      content: { 'application/json': { schema: IndexSchema } },
    },
    404: IndexNotFoundResponse,
    500: InternalErrorResponse,
  },
})

export const deleteIndexesIndexNameRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexName}',
  tags: ['Index Operations'],
  summary: 'Delete Index',
  description: 'This operation deletes an existing index.',
  operationId: 'delete_index',
  request: {
    params: z.object({
      indexName: IndexNameSchema.openapi({
        param: {
          in: 'path',
          name: 'indexName',
          required: true,
          schema: { $ref: '#/components/schemas/IndexName' },
        },
      }),
    }),
  },
  responses: {
    202: {
      description: 'The index has been successfully deleted.',
      content: { 'text/plain': { schema: z.string(), example: 'Accepted' } },
    },
    404: IndexNotFoundResponse,
    500: InternalErrorResponse,
  },
})

export const patchIndexesIndexNameRoute = createRoute({
  method: 'patch',
  path: '/indexes/{indexName}',
  tags: ['Index Operations'],
  summary: 'Configure index',
  description: 'This operation specifies the pod type and number of replicas for an index.',
  operationId: 'configure_index',
  request: {
    params: z.object({
      indexName: IndexNameSchema.openapi({
        param: {
          in: 'path',
          name: 'indexName',
          required: true,
          schema: { $ref: '#/components/schemas/IndexName' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: IndexConfigurationSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The index has been successfully updated.',
      content: { 'text/plain': { schema: z.string(), example: 'Accepted' } },
    },
    400: BadRequestResponse,
    404: IndexNotFoundResponse,
    500: InternalErrorResponse,
  },
})

export const postQueryRoute = createRoute({
  method: 'post',
  path: '/query',
  tags: ['Vector Operations'],
  summary: 'Query',
  description:
    'The `Query` operation searches a namespace, using a query vector. It retrieves the ids of the most similar items in a namespace, along with their similarity scores.',
  operationId: 'Query',
  request: {
    body: { content: { 'application/json': { schema: QueryRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A successful response',
      content: { 'application/json': { schema: QueryResponseSchema } },
    },
  },
})

export const postVectorsDeleteRoute = createRoute({
  method: 'post',
  path: '/vectors/delete',
  tags: ['Vector Operations'],
  summary: 'Delete',
  description:
    'The `Delete` operation deletes vectors, by id, from a single namespace. You can delete items by their id, from a single namespace.',
  operationId: 'Delete',
  request: {
    body: { content: { 'application/json': { schema: DeleteRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A successful response',
      content: { 'application/json': { schema: DeleteResponseSchema } },
    },
  },
})

export const postVectorsFetchRoute = createRoute({
  method: 'post',
  path: '/vectors/fetch',
  tags: ['Vector Operations'],
  summary: 'Fetch',
  description:
    'The `Fetch` operation looks up and returns vectors, by ID, from a single namespace. The returned vectors include the vector data and/or metadata.',
  operationId: 'Fetch',
  request: {
    body: { content: { 'application/json': { schema: FetchRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A successful response',
      content: { 'application/json': { schema: FetchResponseSchema } },
    },
  },
})

export const postVectorsUpdateRoute = createRoute({
  method: 'post',
  path: '/vectors/update',
  tags: ['Vector Operations'],
  summary: 'Fetch',
  description:
    'The `Update` operation updates vector in a namespace. If a value is included, it will overwrite the previous value. If a set_metadata is included, the values of the fields specified in it will be added or overwrite the previous value.',
  operationId: 'Update',
  request: {
    body: { content: { 'application/json': { schema: UpdateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A successful response',
      content: { 'application/json': { schema: UpdateResponseSchema } },
    },
  },
})

export const postVectorsUpsertRoute = createRoute({
  method: 'post',
  path: '/vectors/upsert',
  tags: ['Vector Operations'],
  summary: 'Upsert',
  description:
    'The Upsert operation writes vectors into a namespace. If a new value is upserted for an existing vector id, it will overwrite the previous value.',
  operationId: 'Upsert',
  request: {
    body: { content: { 'application/json': { schema: UpsertRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A successful response',
      content: { 'application/json': { schema: UpsertResponseSchema } },
    },
  },
})
