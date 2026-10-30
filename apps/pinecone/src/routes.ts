import { createRoute, z } from '@hono/zod-openapi'

const PaginationResponseSchema = z
  .object({
    next: z
      .string()
      .openapi({
        example: 'dXNlcl9pZD11c2VyXzE=',
        description: 'The token to use to retrieve the next page of results.',
      }),
  })
  .openapi({
    example: { next: 'dXNlcl9pZD11c2VyXzE=' },
    description: 'The pagination object that is returned with paginated responses.',
    required: ['next'],
  })
  .openapi('PaginationResponse')

const ErrorResponseSchema = z
  .object({
    status: z.int().openapi({ example: 500, description: 'The HTTP status code of the error.' }),
    error: z
      .object({
        code: z.enum([
          'OK',
          'UNKNOWN',
          'INVALID_ARGUMENT',
          'DEADLINE_EXCEEDED',
          'QUOTA_EXCEEDED',
          'NOT_FOUND',
          'ALREADY_EXISTS',
          'PERMISSION_DENIED',
          'UNAUTHENTICATED',
          'RESOURCE_EXHAUSTED',
          'FAILED_PRECONDITION',
          'ABORTED',
          'OUT_OF_RANGE',
          'UNIMPLEMENTED',
          'INTERNAL',
          'UNAVAILABLE',
          'DATA_LOSS',
          'FORBIDDEN',
          'UNPROCESSABLE_ENTITY',
          'PAYMENT_REQUIRED',
        ]),
        message: z
          .string()
          .openapi({
            example:
              'Index name must contain only lowercase alphanumeric characters or hyphens, and must not begin or end with a hyphen.',
          }),
        details: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Additional information about the error. This field is not guaranteed to be present.',
          }),
      })
      .openapi({
        example: {
          code: 'INVALID_ARGUMENT',
          message:
            'Index name must contain only lowercase alphanumeric characters or hyphens, and must not begin or end with a hyphen.',
        },
        description: 'Detailed information about the error that occurred.',
        required: ['code', 'message'],
      }),
  })
  .openapi({
    example: {
      error: {
        code: 'QUOTA_EXCEEDED',
        message:
          'The index exceeds the project quota of 5 pods by 2 pods. Upgrade your account or change the project settings to increase the quota.',
      },
      status: 429,
    },
    description: 'The response shape used for all error responses.',
    required: ['status', 'error'],
  })
  .openapi('ErrorResponse')

const IndexTagsSchema = z
  .record(z.string(), z.string())
  .openapi({
    example: { tag0: 'val0', tag1: 'val1' },
    description:
      "Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.",
  })
  .openapi('IndexTags')

const DeletionProtectionSchema = z
  .enum(['disabled', 'enabled'])
  .default('disabled')
  .openapi({
    description:
      'Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.\n',
  })
  .openapi('DeletionProtection')

const CreateIndexFromBackupRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(45)
      .openapi({
        example: 'example-index',
        description:
          "The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.\n",
      }),
    tags: IndexTagsSchema.exactOptional(),
    deletion_protection: DeletionProtectionSchema.exactOptional(),
  })
  .openapi({
    description: 'The configuration needed to create a Pinecone index from a backup.',
    required: ['name'],
  })
  .openapi('CreateIndexFromBackupRequest')

const ModelIndexEmbedSchema = z
  .object({
    model: z
      .string()
      .openapi({
        example: 'multilingual-e5-large',
        description: 'The name of the embedding model used to create the index.',
      }),
    metric: z
      .enum(['cosine', 'euclidean', 'dotproduct'])
      .exactOptional()
      .openapi({
        description:
          "The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If not specified, the metric will be defaulted according to the model. Cannot be updated once set.",
      }),
    dimension: z
      .int32()
      .min(1)
      .max(20000)
      .exactOptional()
      .openapi({
        example: 1536,
        description: 'The dimensions of the vectors to be inserted in the index.',
      }),
    vector_type: z
      .string()
      .default('dense')
      .exactOptional()
      .openapi({
        description:
          "The index vector type. You can use 'dense' or 'sparse'. If 'dense', the vector dimension must be specified.  If 'sparse', the vector dimension should not be specified.",
      }),
    field_map: z
      .object({})
      .exactOptional()
      .openapi({
        example: { text: 'your-text-field' },
        description:
          'Identifies the name of the text field from your document model that is embedded.',
      }),
    read_parameters: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The read parameters for the embedding model.' }),
    write_parameters: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The write parameters for the embedding model.' }),
  })
  .openapi({
    example: {
      field_map: { text: 'your-text-field' },
      metric: 'cosine',
      model: 'multilingual-e5-large',
      read_parameters: { input_type: 'query', truncate: 'NONE' },
      write_parameters: { input_type: 'passage' },
    },
    description: 'The embedding model and document fields mapped to embedding inputs.',
    required: ['model'],
  })
  .openapi('ModelIndexEmbed')

const BackupModelSchema = z
  .object({
    backup_id: z
      .string()
      .openapi({
        example: '670e8400-e29b-41d4-a716-446655440001',
        description: 'Unique identifier for the backup.',
      }),
    source_index_name: z
      .string()
      .openapi({
        example: 'my-index',
        description: 'Name of the index from which the backup was taken.',
      }),
    source_index_id: z
      .string()
      .openapi({
        example: '670e8400-e29b-41d4-a716-446655440000',
        description: 'ID of the index.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'backup-2025-02-04',
        description: 'Optional user-defined name for the backup.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Backup before bulk update.',
        description: 'Optional description providing context for the backup.',
      }),
    status: z
      .string()
      .openapi({
        example: 'Ready',
        description: 'Current status of the backup (e.g., Initializing, Ready, Failed).',
      }),
    cloud: z
      .string()
      .openapi({ example: 'aws', description: 'Cloud provider where the backup is stored.' }),
    region: z
      .string()
      .openapi({ example: 'us-east-1', description: 'Cloud region where the backup is stored.' }),
    dimension: z
      .int32()
      .min(1)
      .max(20000)
      .exactOptional()
      .openapi({
        example: 1536,
        description: 'The dimensions of the vectors to be inserted in the index.',
      }),
    metric: z
      .enum(['cosine', 'euclidean', 'dotproduct'])
      .exactOptional()
      .openapi({
        description:
          "The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the `vector_type` is `dense`, the metric defaults to 'cosine'.",
      }),
    record_count: z
      .int()
      .exactOptional()
      .openapi({ example: 120000, description: 'Total number of records in the backup.' }),
    namespace_count: z
      .int()
      .exactOptional()
      .openapi({ example: 3, description: 'Number of namespaces in the backup.' }),
    size_bytes: z
      .int()
      .exactOptional()
      .openapi({ example: 10000000, description: 'Size of the backup in bytes.' }),
    tags: IndexTagsSchema.exactOptional(),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when the backup was created.' }),
  })
  .openapi({
    description: 'The BackupModel describes the configuration and status of a Pinecone backup.',
    required: ['backup_id', 'source_index_name', 'source_index_id', 'status', 'cloud', 'region'],
  })
  .openapi('BackupModel')

const BackupListSchema = z
  .object({
    data: z.array(BackupModelSchema).exactOptional(),
    pagination: PaginationResponseSchema.exactOptional(),
  })
  .openapi({ description: 'The list of backups that exist in the project.', required: [] })
  .openapi('BackupList')

const IndexSpecSchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'serverless')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['serverless'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'pod')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['pod'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'byoc')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['byoc'] }),
  ])
  .openapi({
    description:
      'The spec object defines how the index should be deployed.\n\nFor serverless indexes, you set only the [cloud and region](http://docs.pinecone.io/guides/index-data/create-an-index#cloud-regions) where the index should be hosted. For pod-based indexes, you set the [environment](http://docs.pinecone.io/guides/indexes/pods/understanding-pod-based-indexes#pod-environments) where the index should be hosted, the [pod type and size](http://docs.pinecone.io/guides/indexes/pods/understanding-pod-based-indexes#pod-types) to use, and other index characteristics. For [BYOC indexes](http://docs.pinecone.io/guides/production/bring-your-own-cloud), you set the environment name provided to you during onboarding.\n',
  })
  .openapi('IndexSpec')

const CreateIndexRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(45)
      .openapi({
        example: 'example-index',
        description:
          "The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.\n",
      }),
    dimension: z
      .int32()
      .min(1)
      .max(20000)
      .exactOptional()
      .openapi({
        example: 1536,
        description: 'The dimensions of the vectors to be inserted in the index.',
      }),
    metric: z
      .enum(['cosine', 'euclidean', 'dotproduct'])
      .exactOptional()
      .openapi({
        description:
          "The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the `vector_type` is `dense`, the metric defaults to 'cosine'.",
      }),
    deletion_protection: DeletionProtectionSchema.exactOptional(),
    tags: IndexTagsSchema.exactOptional(),
    spec: IndexSpecSchema,
    vector_type: z
      .string()
      .default('dense')
      .exactOptional()
      .openapi({
        description:
          "The index vector type. You can use 'dense' or 'sparse'. If 'dense', the vector dimension must be specified.  If 'sparse', the vector dimension should not be specified.",
      }),
  })
  .openapi({
    description: 'The configuration needed to create a Pinecone index.',
    required: ['name', 'spec'],
  })
  .openapi('CreateIndexRequest')

const ByocSpecSchema = z
  .object({
    environment: z
      .string()
      .openapi({
        example: 'aws-us-east-1-b921',
        description: 'The environment where the index is hosted.',
      }),
  })
  .openapi({
    example: { environment: 'aws-us-east-1-b921' },
    description: 'Configuration needed to deploy an index in a BYOC environment.',
    required: ['environment'],
  })
  .openapi('ByocSpec')

const PodSpecSchema = z
  .object({
    environment: z
      .string()
      .openapi({
        example: 'us-east1-gcp',
        description: 'The environment where the index is hosted.',
      }),
    replicas: z
      .int32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of replicas. Replicas duplicate your index. They provide higher availability and throughput. Replicas can be scaled up or down as your needs change.',
      }),
    shards: z
      .int32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of shards. Shards split your data across multiple pods so you can fit more data into an index.',
      }),
    pod_type: z
      .string()
      .default('p1.x1')
      .openapi({
        description:
          'The type of pod to use. One of `s1`, `p1`, or `p2` appended with `.` and one of `x1`, `x2`, `x4`, or `x8`.',
      }),
    pods: z
      .int()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({
        example: 1,
        description:
          "The number of pods to be used in the index. This should be equal to `shards` x `replicas`.'",
      }),
    metadata_config: z
      .object({
        indexed: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'By default, all metadata is indexed; to change this behavior, use this property to specify an array of metadata fields that should be indexed.',
          }),
      })
      .exactOptional()
      .openapi({
        example: { indexed: ['genre', 'title', 'imdb_rating'] },
        description:
          "Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when `metadata_config` is present, only specified metadata fields are indexed. These configurations are only valid for use with pod-based indexes.",
        required: [],
      }),
    source_collection: z
      .string()
      .exactOptional()
      .openapi({
        example: 'movie-embeddings',
        description: 'The name of the collection to be used as the source for the index.',
      }),
  })
  .openapi({
    example: {
      environment: 'us-east1-gcp',
      metadata_config: { indexed: ['genre', 'title', 'imdb_rating'] },
      pod_type: 'p1.x1',
      pods: 1,
      replicas: 1,
      shards: 1,
      source_collection: 'movie-embeddings',
    },
    description: 'Configuration needed to deploy a pod-based index.',
    required: ['environment', 'pod_type'],
  })
  .openapi('PodSpec')

const ServerlessSpecSchema = z
  .object({
    cloud: z
      .enum(['gcp', 'aws', 'azure'])
      .openapi({
        example: 'aws',
        description: 'The public cloud where you would like your index hosted.',
      }),
    region: z
      .string()
      .openapi({
        example: 'us-east-1',
        description: 'The region where you would like your index to be created.',
      }),
    source_collection: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the collection to be used as the source for the index.',
      }),
  })
  .openapi({
    description: 'Configuration needed to deploy a serverless index.',
    required: ['cloud', 'region'],
  })
  .openapi('ServerlessSpec')

const IndexModelSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(45)
      .openapi({
        example: 'example-index',
        description:
          "The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.\n",
      }),
    dimension: z
      .int32()
      .min(1)
      .max(20000)
      .exactOptional()
      .openapi({
        example: 1536,
        description: 'The dimensions of the vectors to be inserted in the index.',
      }),
    metric: z
      .enum(['cosine', 'euclidean', 'dotproduct'])
      .openapi({
        description:
          "The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the `vector_type` is `dense`, the metric defaults to 'cosine'.",
      }),
    host: z
      .string()
      .openapi({
        example: 'semantic-search-c01b5b5.svc.us-west1-gcp.pinecone.io',
        description: 'The URL address where the index is hosted.',
      }),
    private_host: z
      .string()
      .exactOptional()
      .openapi({
        example: 'semantic-search-c01b5b5.svc.private.us-west1-gcp.pinecone.io',
        description: 'The private endpoint URL of an index.',
      }),
    deletion_protection: DeletionProtectionSchema.exactOptional(),
    tags: IndexTagsSchema.exactOptional(),
    embed: ModelIndexEmbedSchema.exactOptional(),
    spec: z
      .object({
        byoc: ByocSpecSchema.exactOptional(),
        pod: PodSpecSchema.exactOptional(),
        serverless: ServerlessSpecSchema.exactOptional(),
      })
      .openapi({
        example: {
          pod: {
            environment: 'us-east-1-aws',
            metadata_config: { indexed: ['genre', 'title', 'imdb_rating'] },
            pod_type: 'p1.x1',
            pods: 1,
            replicas: 1,
            shards: 1,
          },
        },
        required: [],
      }),
    status: z
      .object({
        ready: z.boolean(),
        state: z.enum([
          'Initializing',
          'InitializationFailed',
          'ScalingUp',
          'ScalingDown',
          'ScalingUpPodSize',
          'ScalingDownPodSize',
          'Terminating',
          'Ready',
          'Disabled',
        ]),
      })
      .openapi({
        example: { ready: true, state: 'ScalingUpPodSize' },
        required: ['ready', 'state'],
      }),
    vector_type: z
      .string()
      .default('dense')
      .openapi({
        description:
          "The index vector type. You can use 'dense' or 'sparse'. If 'dense', the vector dimension must be specified.  If 'sparse', the vector dimension should not be specified.",
      }),
  })
  .openapi({
    description: 'The IndexModel describes the configuration and status of a Pinecone index.',
    required: ['name', 'metric', 'status', 'spec', 'host', 'vector_type'],
  })
  .openapi('IndexModel')

const IndexListSchema = z
  .object({ indexes: z.array(IndexModelSchema).exactOptional() })
  .openapi({ description: 'The list of indexes that exist in the project.', required: [] })
  .openapi('IndexList')

const RestoreJobModelSchema = z
  .object({
    restore_job_id: z
      .string()
      .openapi({
        example: '670e8400-e29b-41d4-a716-446655440001',
        description: 'Unique identifier for the restore job',
      }),
    backup_id: z
      .string()
      .openapi({
        example: '670e8400-e29b-41d4-a716-446655440000',
        description: 'Backup used for the restore',
      }),
    target_index_name: z
      .string()
      .openapi({
        example: 'sample-index',
        description: 'Name of the index into which data is being restored',
      }),
    target_index_id: z
      .string()
      .openapi({ example: '670e8400-e29b-41d4-a716-446655440002', description: 'ID of the index' }),
    status: z.string().openapi({ example: 'Completed', description: 'Status of the restore job' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        example: '2025-02-04T13:00:00Z',
        description: 'Timestamp when the restore job started',
      }),
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2025-02-04T14:00:00Z',
        description: 'Timestamp when the restore job finished',
      }),
    percent_complete: z
      .float32()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({ example: 42.2, description: 'The progress made by the restore job out of 100' }),
  })
  .openapi({
    description: 'The RestoreJobModel describes the status of a restore job.',
    required: [
      'restore_job_id',
      'backup_id',
      'target_index_name',
      'target_index_id',
      'status',
      'created_at',
    ],
  })
  .openapi('RestoreJobModel')

const RestoreJobListSchema = z
  .object({
    data: z.array(RestoreJobModelSchema),
    pagination: PaginationResponseSchema.exactOptional(),
  })
  .openapi({
    description: 'The list of restore jobs that exist in the project.',
    required: ['data'],
  })
  .openapi('RestoreJobList')

const CreateCollectionRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(45)
      .openapi({
        description:
          "The name of the collection to be created. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.\n",
      }),
    source: z
      .string()
      .openapi({
        example: 'example-source-index',
        description: 'The name of the index to be used as the source for the collection.',
      }),
  })
  .openapi({
    description: 'The configuration needed to create a Pinecone collection.',
    required: ['name', 'source'],
  })
  .openapi('CreateCollectionRequest')

const CreateIndexForModelRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(45)
      .openapi({
        example: 'example-index',
        description:
          "The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.\n",
      }),
    cloud: z
      .enum(['gcp', 'aws', 'azure'])
      .openapi({
        example: 'aws',
        description: 'The public cloud where you would like your index hosted.',
      }),
    region: z
      .string()
      .openapi({
        example: 'us-east-1',
        description: 'The region where you would like your index to be created.',
      }),
    deletion_protection: DeletionProtectionSchema.exactOptional(),
    tags: IndexTagsSchema.exactOptional(),
    embed: z
      .object({
        model: z
          .string()
          .openapi({
            example: 'multilingual-e5-large',
            description: 'The name of the embedding model to use for the index.',
          }),
        metric: z
          .enum(['cosine', 'euclidean', 'dotproduct'])
          .exactOptional()
          .openapi({
            description:
              "The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If not specified, the metric will be defaulted according to the model. Cannot be updated once set.",
          }),
        field_map: z
          .object({})
          .openapi({
            example: { text: 'your-text-field' },
            description:
              'Identifies the name of the text field from your document model that will be embedded.',
          }),
        dimension: z
          .int()
          .exactOptional()
          .openapi({ description: 'The dimension of embedding vectors produced for the index.' }),
        read_parameters: z
          .object({})
          .exactOptional()
          .openapi({ description: 'The read parameters for the embedding model.' }),
        write_parameters: z
          .object({})
          .exactOptional()
          .openapi({ description: 'The write parameters for the embedding model.' }),
      })
      .openapi({
        example: {
          field_map: { text: 'your-text-field' },
          metric: 'cosine',
          model: 'multilingual-e5-large',
          read_parameters: { input_type: 'query', truncate: 'NONE' },
          write_parameters: { input_type: 'passage' },
        },
        description:
          'Specify the integrated inference embedding configuration for the index.\n\nOnce set the model cannot be changed, but you can later update the embedding configuration for an integrated inference index including field map, read parameters, or write parameters.\n\nRefer to the [model guide](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) for available models and model details.',
        required: ['model', 'field_map'],
      }),
  })
  .openapi({
    description: 'The desired configuration for the index and associated embedding model.',
    required: ['name', 'cloud', 'region', 'embed'],
  })
  .openapi('CreateIndexForModelRequest')

const ConfigureIndexRequestSchema = z
  .object({
    spec: z
      .object({
        pod: z
          .object({
            replicas: z
              .int32()
              .min(1)
              .default(1)
              .exactOptional()
              .openapi({
                description:
                  'The number of replicas. Replicas duplicate your index. They provide higher availability and throughput. Replicas can be scaled up or down as your needs change.',
              }),
            pod_type: z
              .string()
              .default('p1.x1')
              .exactOptional()
              .openapi({
                description:
                  'The type of pod to use. One of `s1`, `p1`, or `p2` appended with `.` and one of `x1`, `x2`, `x4`, or `x8`.',
              }),
          })
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: ['pod'] }),
    deletion_protection: DeletionProtectionSchema.exactOptional(),
    tags: IndexTagsSchema.exactOptional(),
    embed: z
      .object({
        model: z
          .string()
          .exactOptional()
          .openapi({
            example: 'multilingual-e5-large',
            description:
              'The name of the embedding model to use with the index. The index dimension and model dimension must match, and the index similarity metric must be supported by the model. The index embedding model cannot be changed once set.',
          }),
        field_map: z
          .object({})
          .exactOptional()
          .openapi({
            example: { text: 'your-text-field' },
            description:
              'Identifies the name of the text field from your document model that will be embedded.',
          }),
        read_parameters: z
          .object({})
          .exactOptional()
          .openapi({ description: 'The read parameters for the embedding model.' }),
        write_parameters: z
          .object({})
          .exactOptional()
          .openapi({ description: 'The write parameters for the embedding model.' }),
      })
      .exactOptional()
      .openapi({
        example: {
          field_map: { text: 'your-text-field' },
          model: 'multilingual-e5-large',
          read_parameters: { input_type: 'query', truncate: 'NONE' },
          write_parameters: { input_type: 'passage' },
        },
        description:
          'Configure the integrated inference embedding settings for this index.\n\nYou can convert an existing index to an integrated index by specifying the embedding model and field_map. The index vector type and dimension must match the model vector type and dimension, and the index similarity metric must be supported by the model. Refer to the [model guide](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) for available models and model details.\n\nYou can later change the embedding configuration to update the field map, read parameters, or write parameters. Once set, the model cannot be changed.',
        required: [],
      }),
  })
  .openapi({ description: 'Configuration used to scale an index.', required: [] })
  .openapi('ConfigureIndexRequest')

const CreateIndexFromBackupResponseSchema = z
  .object({
    restore_job_id: z
      .string()
      .openapi({
        example: '670e8400-e29b-41d4-a716-446655440000',
        description: 'The ID of the restore job that was created.',
      }),
    index_id: z
      .string()
      .openapi({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'The ID of the index that was created from the backup.',
      }),
  })
  .openapi({
    description: 'The response for creating an index from a backup.',
    required: ['restore_job_id', 'index_id'],
  })
  .openapi('CreateIndexFromBackupResponse')

const CollectionModelSchema = z
  .object({
    name: z
      .string()
      .openapi({ example: 'example-collection', description: 'The name of the collection.' }),
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
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        example: 10000000,
        description: 'The size of the collection in bytes.',
      }),
    status: z
      .enum(['Initializing', 'Ready', 'Terminating'])
      .openapi({ example: 'Initializing', description: 'The status of the collection.' }),
    dimension: z
      .int32()
      .min(1)
      .max(20000)
      .exactOptional()
      .openapi({
        example: 1536,
        description: 'The dimension of the vectors stored in each record held in the collection.',
      }),
    vector_count: z
      .int32()
      .exactOptional()
      .openapi({ example: 120000, description: 'The number of records stored in the collection.' }),
    environment: z
      .string()
      .openapi({
        example: 'us-east1-gcp',
        description: 'The environment where the collection is hosted.',
      }),
  })
  .openapi({
    description:
      'The CollectionModel describes the configuration and status of a Pinecone collection.',
    required: ['name', 'status', 'environment'],
  })
  .openapi('CollectionModel')

const CollectionListSchema = z
  .object({ collections: z.array(CollectionModelSchema).exactOptional() })
  .openapi({ description: 'The list of collections that exist in the project.', required: [] })
  .openapi('CollectionList')

const CreateBackupRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the backup.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the backup.' }),
  })
  .openapi({
    description: 'The configuration needed to create a backup of an index.',
    required: [],
  })
  .openapi('CreateBackupRequest')

const ApiKeyAuthSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'Api-Key',
  description:
    'An API Key is required to call Pinecone APIs. Get yours from the [console](https://app.pinecone.io/).',
}

export const getIndexesRoute = createRoute({
  method: 'get',
  path: '/indexes',
  tags: ['Manage Indexes'],
  summary: 'List indexes',
  description: 'List all indexes in a project.',
  operationId: 'list_indexes',
  responses: {
    200: {
      description:
        'This operation returns a list of all the indexes that you have previously created, and which are associated with the given project',
      content: {
        'application/json': {
          schema: IndexListSchema,
          examples: {
            'multiple-indexes': {
              summary: 'A list containing one serverless index and one pod-based index.',
              value: {
                indexes: [
                  {
                    dimension: 384,
                    host: 'semantic-search-c01b5b5.svc.us-west1-gcp.pinecone.io',
                    metric: 'cosine',
                    name: 'semantic-search',
                    spec: {
                      pod: {
                        environment: 'us-west1-gcp',
                        pod_type: 'p1.x1',
                        pods: 4,
                        replicas: 2,
                        shards: 2,
                      },
                    },
                    status: { ready: true, state: 'Ready' },
                    vector_type: 'dense',
                  },
                  {
                    dimension: 200,
                    host: 'image-search-a31f9c1.svc.us-east1-gcp.pinecone.io',
                    metric: 'dotproduct',
                    name: 'image-search',
                    spec: { serverless: { cloud: 'aws', region: 'us-east-1' } },
                    status: { ready: false, state: 'Initializing' },
                    vector_type: 'dense',
                  },
                  {
                    host: 'sparse-index-1a2b3c4d.svc.us-east1-gcp.pinecone.io',
                    metric: 'dotproduct',
                    name: 'sparse-index',
                    spec: { serverless: { cloud: 'aws', region: 'us-east-1' } },
                    status: { ready: true, state: 'Ready' },
                    vector_type: 'sparse',
                  },
                ],
              },
            },
            'one-index': {
              summary: 'A list containing one serverless index.',
              value: {
                indexes: [
                  {
                    dimension: 1536,
                    host: 'movie-embeddings-c01b5b5.svc.us-east1-gcp.pinecone.io',
                    metric: 'cosine',
                    name: 'movie-embeddings',
                    spec: { serverless: { cloud: 'aws', region: 'us-east-1' } },
                    status: { ready: false, state: 'Initializing' },
                    vector_type: 'dense',
                  },
                ],
              },
            },
            'no-indexes': { summary: 'No indexes created yet.', value: { indexes: [] } },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const postIndexesRoute = createRoute({
  method: 'post',
  path: '/indexes',
  tags: ['Manage Indexes'],
  summary: 'Create an index',
  description:
    'Create a Pinecone index. This is where you specify the measure of similarity, the dimension of vectors to be stored in the index, which cloud provider you would like to deploy with, and more.\n  \nFor guidance and examples, see [Create an index](https://docs.pinecone.io/guides/index-data/create-an-index).\n',
  operationId: 'create_index',
  request: {
    body: {
      description: 'The desired configuration for the index.',
      content: {
        'application/json': {
          schema: CreateIndexRequestSchema,
          examples: {
            'serverless-index': {
              summary: 'Creating a serverless index',
              value: {
                deletion_protection: 'enabled',
                dimension: 1536,
                metric: 'cosine',
                name: 'movie-recommendations',
                spec: {
                  serverless: {
                    cloud: 'gcp',
                    region: 'us-east1',
                    source_collection: 'movie-embeddings',
                  },
                },
              },
            },
            'serverless-sparse-index': {
              summary: 'Creating a sparse serverless index',
              value: {
                deletion_protection: 'enabled',
                metric: 'dotproduct',
                name: 'sparse-index',
                spec: { serverless: { cloud: 'gcp', region: 'us-east1' } },
                vector_type: 'sparse',
              },
            },
            'pod-index': {
              summary: 'Creating a pod-based index',
              value: {
                deletion_protection: 'enabled',
                dimension: 1536,
                metric: 'cosine',
                name: 'movie-recommendations',
                spec: {
                  pod: {
                    environment: 'us-east-1-aws',
                    metadata_config: { indexed: ['genre', 'title', 'imdb_rating'] },
                    pod_type: 'p1.x1',
                    pods: 1,
                    replicas: 1,
                    shards: 1,
                    source_collection: 'movie-embeddings',
                  },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The index has been successfully created.',
      content: { 'application/json': { schema: IndexModelSchema } },
    },
    400: {
      description: 'Bad request. The request body included invalid request parameters.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-metric-validation-error': {
              summary: 'Validation error',
              value: {
                error: {
                  code: 'INVALID_ARGUMENT',
                  message: 'Bad request. The request body included invalid request parameters.',
                },
                status: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    402: {
      description: 'Payment required. Organization is on a paid plan and is delinquent on payment.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'payment-required': {
              summary: 'Payment required',
              value: {
                error: {
                  code: 'PAYMENT_REQUIRED',
                  message:
                    'Request failed. Pay all past due invoices to lift restrictions on your account.',
                },
                status: 402,
              },
            },
          },
        },
      },
    },
    403: {
      description: "You've exceed your pod quota.",
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Forbidden',
              value: {
                error: {
                  code: 'FORBIDDEN',
                  message: 'Increase your quota or upgrade to create more indexes.',
                },
                status: 403,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Unknown cloud or region when creating a serverless index.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'serverless-spec-cloud-not-found': {
              summary: 'Cannot create serverless index with invalid spec.',
              value: {
                error: {
                  code: 'NOT_FOUND',
                  message: 'Resource cloud: aws region: us-west1 not found.',
                },
                status: 404,
              },
            },
          },
        },
      },
    },
    409: {
      description: 'Index of given name already exists.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-name-already-exists': {
              summary: 'Index name needs to be unique.',
              value: {
                error: { code: 'ALREADY_EXISTS', message: 'Resource already exists.' },
                status: 409,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity. The request body could not be deserialized.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'missing-field': {
              summary: 'Unprocessable entity',
              value: {
                error: {
                  code: 'UNPROCESSABLE_ENTITY',
                  message:
                    'Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16',
                },
                status: 422,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const getIndexesIndexNameRoute = createRoute({
  method: 'get',
  path: '/indexes/{index_name}',
  tags: ['Manage Indexes'],
  summary: 'Describe an index',
  description: 'Get a description of an index.',
  operationId: 'describe_index',
  request: {
    params: z.object({
      index_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'index_name',
            description: 'The name of the index to be described.',
            required: true,
            schema: { type: 'string' },
            example: 'test-index',
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Configuration information and deployment status of the index.',
      content: {
        'application/json': {
          schema: IndexModelSchema,
          examples: {
            'movie-recommendations-serverless': {
              summary: 'A serverless index',
              value: {
                dimension: 1536,
                host: 'movie-recommendations-c01b5b5.svc.us-east1-gcp.pinecone.io',
                metric: 'cosine',
                name: 'movie-recommendations',
                spec: { serverless: { cloud: 'aws', region: 'us-east-1' } },
                status: { ready: false, state: 'Initializing' },
                vector_type: 'dense',
              },
            },
            'movie-recommendations-pod': {
              summary: 'A pod-based index',
              value: {
                dimension: 1536,
                host: 'movie-recommendations-c01b5b5.svc.us-east1-gcp.pinecone.io',
                metric: 'cosine',
                name: 'movie-recommendations',
                spec: {
                  pod: {
                    environment: 'us-east-1-aws',
                    metadata_config: { indexed: ['genre', 'title', 'imdb_rating'] },
                    pod_type: 'p1.x1',
                    pods: 1,
                    replicas: 1,
                    shards: 1,
                  },
                },
                status: { ready: false, state: 'Initializing' },
                vector_type: 'dense',
              },
            },
          },
        },
      },
      links: {
        UpsertVector: { operationId: 'upsert', server: { url: '$response.body#/host' } },
        UpdateVector: { operationId: 'update', server: { url: '$response.body#/host' } },
        QueryVector: { operationId: 'query', server: { url: '$response.body#/host' } },
        FetchVector: { operationId: 'fetch', server: { url: '$response.body#/host' } },
        DeleteOneVector: { operationId: 'delete1', server: { url: '$response.body#/host' } },
        DeleteVector: { operationId: 'delete', server: { url: '$response.body#/host' } },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Index not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-not-found': {
              summary: 'Index not found',
              value: {
                error: { code: 'NOT_FOUND', message: 'Index example-index not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const deleteIndexesIndexNameRoute = createRoute({
  method: 'delete',
  path: '/indexes/{index_name}',
  tags: ['Manage Indexes'],
  summary: 'Delete an index',
  description: 'Delete an existing index.',
  operationId: 'delete_index',
  request: {
    params: z.object({
      index_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'index_name',
            description: 'The name of the index to delete.',
            required: true,
            schema: { type: 'string' },
            example: 'test-index',
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    202: { description: 'The request to delete the index has been accepted.' },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden. Deletion protection enabled.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'deletion-protection': {
              summary: 'Forbidden',
              value: {
                error: {
                  code: 'FORBIDDEN',
                  message:
                    'Deletion protection is enabled for this index. Disable deletion protection before retrying.',
                },
                status: 403,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Index not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-not-found': {
              summary: 'Index not found',
              value: {
                error: { code: 'NOT_FOUND', message: 'Index example-index not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    412: {
      description: 'There is a pending collection created from this index.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'pending-collection': {
              summary: 'There is a pending collection from this index.',
              value: {
                error: {
                  code: 'FAILED_PRECONDITION',
                  message:
                    "Unable to delete an index. There are pending collections for this index: ['test-collection']",
                },
                status: 412,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const patchIndexesIndexNameRoute = createRoute({
  method: 'patch',
  path: '/indexes/{index_name}',
  tags: ['Manage Indexes'],
  summary: 'Configure an index',
  description:
    'Configure an existing index. For serverless indexes, you can configure index deletion protection, tags, and integrated inference embedding settings for the index. For pod-based indexes, you can configure the pod size, number of replicas, tags, and index deletion protection.\n\nIt is not possible to change the pod type of a pod-based index. However, you can create a collection from a pod-based index and then [create a new pod-based index with a different pod type](http://docs.pinecone.io/guides/indexes/pods/create-a-pod-based-index#create-a-pod-index-from-a-collection) from the collection. For guidance and examples, see [Configure an index](http://docs.pinecone.io/guides/indexes/pods/manage-pod-based-indexes).',
  operationId: 'configure_index',
  request: {
    params: z.object({
      index_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'index_name',
            description: 'The name of the index to configure.',
            required: true,
            schema: { type: 'string' },
            example: 'test-index',
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'The desired pod size and replica configuration for the index.',
      content: {
        'application/json': {
          schema: ConfigureIndexRequestSchema,
          examples: {
            'vertical-scaling': {
              summary: 'Vertical scaling with pod size',
              value: { spec: { pod: { pod_type: 'p1.x2' } } },
            },
            'horizontal-scaling': {
              summary: 'Horizontal scaling with replicas',
              value: { spec: { pod: { replicas: 4 } } },
            },
            'scaling-both': {
              summary: 'Scaling both pod size and number of replicas',
              value: { spec: { pod: { pod_type: 'p1.x2', replicas: 4 } } },
            },
            'disable-deletion-protection': {
              summary: 'Disable deletion protection for the index',
              value: { delete_protection: 'disabled' },
            },
            'update-index-tags': {
              summary: 'Update tag0 and delete tag1',
              value: { tags: { tag0: 'new-val', tag1: '' } },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'The request to configure the index has been accepted. Check the  index status to see when the change has been applied.',
      content: { 'application/json': { schema: IndexModelSchema } },
    },
    400: {
      description: 'Bad request. The request body included invalid request parameters.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-metric-validation-error': {
              summary: 'Validation error',
              value: {
                error: {
                  code: 'INVALID_ARGUMENT',
                  message: 'Bad request. The request body included invalid request parameters.',
                },
                status: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    402: {
      description: 'Payment required. Organization is on a paid plan and is delinquent on payment.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'payment-required': {
              summary: 'Payment required',
              value: {
                error: {
                  code: 'PAYMENT_REQUIRED',
                  message:
                    'Request failed. Pay all past due invoices to lift restrictions on your account.',
                },
                status: 402,
              },
            },
          },
        },
      },
    },
    403: {
      description: "You've exceed your pod quota.",
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Forbidden',
              value: {
                error: {
                  code: 'FORBIDDEN',
                  message: 'Increase your quota or upgrade to create more indexes.',
                },
                status: 403,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Index not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-not-found': {
              summary: 'Index not found',
              value: {
                error: { code: 'NOT_FOUND', message: 'Index example-index not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity. The request body could not be deserialized.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'missing-field': {
              summary: 'Unprocessable entity',
              value: {
                error: {
                  code: 'UNPROCESSABLE_ENTITY',
                  message:
                    'Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16',
                },
                status: 422,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const getIndexesIndexNameBackupsRoute = createRoute({
  method: 'get',
  path: '/indexes/{index_name}/backups',
  tags: ['Manage Indexes'],
  summary: 'List backups for an index',
  description: 'List all backups for an index.',
  operationId: 'list_index_backups',
  request: {
    params: z.object({
      index_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'index_name',
            description: 'Name of the backed up index',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            description: 'The number of results to return per page.',
            schema: { default: 10, type: 'integer', minimum: 1, maximum: 100 },
            style: 'form',
            required: false,
          },
        }),
      paginationToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paginationToken',
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'This operation returns a list of all the backups that you have previously created, and which are associated with the given index.',
      content: {
        'application/json': {
          schema: BackupListSchema,
          examples: {
            backups: {
              summary: 'A list containing backups.',
              value: {
                data: [
                  {
                    backup_id: 'bkp_123abc',
                    cloud: 'aws',
                    created_at: '2024-03-15T10:30:00Z',
                    description: 'Monthly backup of production index',
                    dimension: 1536,
                    metric: 'cosine',
                    name: 'backup_2024_03_15',
                    namespace_count: 3,
                    record_count: 120000,
                    region: 'us-east-1',
                    size_bytes: 10000000,
                    source_index_id: 'idx_456',
                    source_index_name: 'my-index',
                    status: 'Ready',
                    tags: { environment: 'production', type: 'monthly' },
                  },
                  {
                    backup_id: 'bkp_789xyz',
                    cloud: 'aws',
                    created_at: '2024-03-20T15:45:00Z',
                    description: 'Pre-deployment safety backup',
                    dimension: 1536,
                    metric: 'cosine',
                    name: 'backup_2024_03_20',
                    namespace_count: 4,
                    record_count: 125000,
                    region: 'us-east-1',
                    size_bytes: 10500000,
                    source_index_id: 'idx_456',
                    source_index_name: 'my-index',
                    status: 'Ready',
                    tags: { environment: 'production', type: 'pre-deploy' },
                  },
                ],
                pagination: { next: 'dXNlcl9pZD11c2VyXzE=' },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Index not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-not-found': {
              summary: 'Index not found',
              value: {
                error: { code: 'NOT_FOUND', message: 'Index example-index not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const postIndexesIndexNameBackupsRoute = createRoute({
  method: 'post',
  path: '/indexes/{index_name}/backups',
  tags: ['Manage Indexes'],
  summary: 'Create a backup of an index',
  description: 'Create a backup of an index.\n',
  operationId: 'create_backup',
  request: {
    params: z.object({
      index_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'index_name',
            description: 'Name of the index to backup',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'The desired configuration for the backup.',
      content: {
        'application/json': {
          schema: CreateBackupRequestSchema,
          examples: {
            'backup-index-no-name': {
              summary: 'Creating a backup of an index with no name',
              value: {},
            },
            'backup-index-with-name': {
              summary: 'Creating a backup of an index with a name',
              value: { name: 'backup-index' },
            },
            'backup-index-with-name-and-description': {
              summary: 'Creating a backup of an index with a name and description',
              value: { description: 'Backup of the index', name: 'backup-index' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The backup has been successfully created.',
      content: { 'application/json': { schema: BackupModelSchema } },
    },
    400: {
      description: 'Bad request. The request body included invalid request parameters.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-metric-validation-error': {
              summary: 'Validation error',
              value: {
                error: {
                  code: 'INVALID_ARGUMENT',
                  message: 'Bad request. The request body included invalid request parameters.',
                },
                status: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    402: {
      description: 'Payment required. Organization is on a paid plan and is delinquent on payment.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'payment-required': {
              summary: 'Payment required',
              value: {
                error: {
                  code: 'PAYMENT_REQUIRED',
                  message:
                    'Request failed. Pay all past due invoices to lift restrictions on your account.',
                },
                status: 402,
              },
            },
          },
        },
      },
    },
    403: {
      description: "You've exceed your backup quota.",
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Forbidden',
              value: {
                error: {
                  code: 'FORBIDDEN',
                  message: 'Increase your quota or upgrade to create more backups.',
                },
                status: 403,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity. The request body could not be deserialized.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'missing-field': {
              summary: 'Unprocessable entity',
              value: {
                error: {
                  code: 'UNPROCESSABLE_ENTITY',
                  message:
                    'Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16',
                },
                status: 422,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['Manage Indexes'],
  summary: 'List collections',
  description:
    'List all collections in a project.\nServerless indexes do not support collections.\n',
  operationId: 'list_collections',
  responses: {
    200: {
      description: 'List all the collections in your current project.',
      content: {
        'application/json': {
          schema: CollectionListSchema,
          examples: {
            'multiple-collections': {
              summary: 'Multiple collections with different states',
              value: {
                collections: [
                  {
                    dimension: 3,
                    environment: 'us-east1-gcp',
                    name: 'small-collection',
                    size: 3126700,
                    status: 'Ready',
                    vector_count: 99,
                  },
                  {
                    dimension: 3,
                    environment: 'us-east1-gcp',
                    name: 'small-collection-new',
                    size: 3126700,
                    status: 'Initializing',
                    vector_count: 99,
                  },
                  {
                    dimension: 1536,
                    environment: 'us-east1-gcp',
                    name: 'big-collection',
                    size: 160087040000000,
                    status: 'Ready',
                    vector_count: 10000000,
                  },
                ],
              },
            },
            'no-collections': { summary: 'No collections created yet', value: { collections: [] } },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const postCollectionsRoute = createRoute({
  method: 'post',
  path: '/collections',
  tags: ['Manage Indexes'],
  summary: 'Create a collection',
  description:
    'Create a Pinecone collection.\n  \nServerless indexes do not support collections.\n',
  operationId: 'create_collection',
  request: {
    body: {
      description: 'The desired configuration for the collection.',
      content: {
        'application/json': {
          schema: CreateCollectionRequestSchema,
          examples: {
            'creating-collection': {
              summary: 'Creating a collection',
              value: { name: 'example-collection', source: 'example-source-index' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The collection has been successfully created.',
      content: { 'application/json': { schema: CollectionModelSchema } },
    },
    400: {
      description: 'Bad request. The request body included invalid request parameters.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-metric-validation-error': {
              summary: 'Validation error',
              value: {
                error: {
                  code: 'INVALID_ARGUMENT',
                  message: 'Bad request. The request body included invalid request parameters.',
                },
                status: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    402: {
      description: 'Payment required. Organization is on a paid plan and is delinquent on payment.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'payment-required': {
              summary: 'Payment required',
              value: {
                error: {
                  code: 'PAYMENT_REQUIRED',
                  message:
                    'Request failed. Pay all past due invoices to lift restrictions on your account.',
                },
                status: 402,
              },
            },
          },
        },
      },
    },
    403: {
      description: "You've exceed your collections quota.",
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Forbidden',
              value: {
                error: {
                  code: 'FORBIDDEN',
                  message:
                    'Collection exceeds quota. Maximum allowed on your account is 1. Currently have 1.',
                },
                status: 403,
              },
            },
          },
        },
      },
    },
    409: {
      description: 'Collection of given name already exists.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'collection-name-already-exists': {
              summary: 'Collection name needs to be unique.',
              value: {
                error: { code: 'ALREADY_EXISTS', message: 'Resource already exists.' },
                status: 409,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity. The request body could not be deserialized.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'missing-field': {
              summary: 'Unprocessable entity',
              value: {
                error: {
                  code: 'UNPROCESSABLE_ENTITY',
                  message:
                    'Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16',
                },
                status: 422,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const postIndexesCreateForModelRoute = createRoute({
  method: 'post',
  path: '/indexes/create-for-model',
  tags: ['Manage Indexes'],
  summary: 'Create an index with integrated embedding',
  description:
    'Create an index with integrated embedding.\n\nWith this type of index, you provide source text, and Pinecone uses a [hosted embedding model](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) to convert the text automatically during [upsert](https://docs.pinecone.io/reference/api/2025-01/data-plane/upsert_records) and [search](https://docs.pinecone.io/reference/api/2025-01/data-plane/search_records).\n\nFor guidance and examples, see [Create an index](https://docs.pinecone.io/guides/index-data/create-an-index#integrated-embedding).',
  operationId: 'create_index_for_model',
  request: {
    body: {
      description: 'The desired configuration for the index and associated embedding model.',
      content: {
        'application/json': {
          schema: CreateIndexForModelRequestSchema,
          examples: {
            'index-for-model': {
              summary: 'Creating a serverless index for the specified model',
              value: {
                cloud: 'gcp',
                deletion_protection: 'enabled',
                embed: {
                  field_map: { text: 'your-text-field' },
                  metric: 'cosine',
                  model: 'multilingual-e5-large',
                },
                name: 'multilingual-e5-large-index',
                region: 'us-east1',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The index has successfully been created for the embedding model.',
      content: { 'application/json': { schema: IndexModelSchema } },
    },
    400: {
      description: 'Bad request. The request body included invalid request parameters.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-metric-validation-error': {
              summary: 'Validation error',
              value: {
                error: {
                  code: 'INVALID_ARGUMENT',
                  message: 'Bad request. The request body included invalid request parameters.',
                },
                status: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Unknown cloud or region when creating a serverless index.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'serverless-spec-cloud-not-found': {
              summary: 'Cannot create serverless index with invalid spec.',
              value: {
                error: {
                  code: 'NOT_FOUND',
                  message: 'Resource cloud: aws region: us-west1 not found.',
                },
                status: 404,
              },
            },
          },
        },
      },
    },
    409: {
      description: 'Index of given name already exists.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-name-already-exists': {
              summary: 'Index name needs to be unique',
              value: {
                error: { code: 'ALREADY_EXISTS', message: 'Resource already exists.' },
                status: 409,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity. The request body could not be deserialized.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'missing-field': {
              summary: 'Unprocessable entity',
              value: {
                error: {
                  code: 'UNPROCESSABLE_ENTITY',
                  message:
                    'Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16',
                },
                status: 422,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const getBackupsRoute = createRoute({
  method: 'get',
  path: '/backups',
  tags: ['Manage Indexes'],
  summary: 'List backups for all indexes in a project',
  description: 'List all backups for a project.',
  operationId: 'list_project_backups',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            description: 'The number of results to return per page.',
            schema: { default: 10, type: 'integer', minimum: 1, maximum: 100 },
            style: 'form',
            required: false,
          },
        }),
      paginationToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paginationToken',
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'This operation returns a list of all the backups for the given index that you have previously created.',
      content: {
        'application/json': {
          schema: BackupListSchema,
          examples: {
            backups: {
              summary: 'A list containing backups.',
              value: {
                data: [
                  {
                    backup_id: '670e8400-e29b-41d4-a716-446655440000',
                    cloud: 'aws',
                    created_at: '2024-03-15T10:30:00Z',
                    description: 'Monthly backup of production index',
                    dimension: 1536,
                    metric: 'cosine',
                    name: 'backup_2024_03_15',
                    namespace_count: 3,
                    record_count: 120000,
                    region: 'us-east-1',
                    size_bytes: 10000000,
                    source_index_id: 'idx_456',
                    source_index_name: 'my-index',
                    status: 'Ready',
                    tags: { environment: 'production', type: 'monthly' },
                  },
                  {
                    backup_id: '670e8400-e29b-41d4-a716-446655440001',
                    cloud: 'aws',
                    created_at: '2024-03-20T15:45:00Z',
                    description: 'Pre-deployment safety backup',
                    dimension: 1536,
                    metric: 'cosine',
                    name: 'backup_2024_03_20',
                    namespace_count: 4,
                    record_count: 125000,
                    region: 'us-east-1',
                    size_bytes: 10500000,
                    source_index_id: 'idx_789',
                    source_index_name: 'my-index-2',
                    status: 'Ready',
                    tags: { environment: 'production', type: 'pre-deploy' },
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const getBackupsBackupIdRoute = createRoute({
  method: 'get',
  path: '/backups/{backup_id}',
  tags: ['Manage Indexes'],
  summary: 'Describe a backup',
  description: 'Get a description of a backup.',
  operationId: 'describe_backup',
  request: {
    params: z.object({
      backup_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'backup_id',
            description: 'The ID of the backup to describe.',
            required: true,
            schema: { type: 'string' },
            example: '670e8400-e29b-41d4-a716-446655440000',
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Configuration information and deployment status of the backup.',
      content: {
        'application/json': {
          schema: BackupModelSchema,
          examples: {
            backup: {
              summary: 'A backup',
              value: {
                backup_id: '670e8400-e29b-41d4-a716-446655440000',
                cloud: 'aws',
                created_at: '2024-03-15T10:30:00Z',
                description: 'Monthly backup of production index',
                dimension: 1536,
                metric: 'cosine',
                name: 'backup_2024_03_15',
                namespace_count: 3,
                record_count: 120000,
                region: 'us-east-1',
                size_bytes: 10000000,
                source_index_id: '670e8400-e29b-41d4-a716-446655440001',
                source_index_name: 'my-index',
                status: 'Ready',
                tags: { environment: 'production', type: 'monthly' },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Backup not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'backup-not-found': {
              summary: 'Backup not found',
              value: {
                error: { code: 'NOT_FOUND', message: 'Backup bkp_123abc not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const deleteBackupsBackupIdRoute = createRoute({
  method: 'delete',
  path: '/backups/{backup_id}',
  tags: ['Manage Indexes'],
  summary: 'Delete a backup',
  description: 'Delete a backup.',
  operationId: 'delete_backup',
  request: {
    params: z.object({
      backup_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'backup_id',
            description: 'The ID of the backup to delete.',
            required: true,
            schema: { type: 'string' },
            example: '670e8400-e29b-41d4-a716-446655440000',
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    202: { description: 'The request to delete the backup has been accepted.' },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Backup not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'backup-not-found': {
              summary: 'Backup not found',
              value: {
                error: { code: 'NOT_FOUND', message: 'Backup bkp_123abc not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    412: {
      description: 'There is a pending restore job created from this backup.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'pending-restore': {
              summary: 'There is a pending restore job from this backup.',
              value: {
                error: {
                  code: 'FAILED_PRECONDITION',
                  message:
                    "Unable to delete backup. There are pending restore jobs for this backup: ['670e8400-e29b-41d4-a716-446655440000']",
                },
                status: 412,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const postBackupsBackupIdCreateIndexRoute = createRoute({
  method: 'post',
  path: '/backups/{backup_id}/create-index',
  tags: ['Manage Indexes'],
  summary: 'Create an index from a backup',
  description: 'Create an index from a backup.',
  operationId: 'create_index_from_backup_operation',
  request: {
    params: z.object({
      backup_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'backup_id',
            description: 'The ID of the backup to create an index from.',
            required: true,
            schema: { type: 'string' },
            example: '670e8400-e29b-41d4-a716-446655440000',
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'The desired configuration for the index created from a backup.',
      content: { 'application/json': { schema: CreateIndexFromBackupRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'The request to create the index has been accepted.',
      content: { 'application/json': { schema: CreateIndexFromBackupResponseSchema } },
    },
    400: {
      description: 'Bad request. The request body included invalid request parameters.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'index-metric-validation-error': {
              summary: 'Validation error',
              value: {
                error: {
                  code: 'INVALID_ARGUMENT',
                  message: 'Bad request. The request body included invalid request parameters.',
                },
                status: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    402: {
      description: 'Payment required. Organization is on a paid plan and is delinquent on payment.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'payment-required': {
              summary: 'Payment required',
              value: {
                error: {
                  code: 'PAYMENT_REQUIRED',
                  message:
                    'Request failed. Pay all past due invoices to lift restrictions on your account.',
                },
                status: 402,
              },
            },
          },
        },
      },
    },
    403: {
      description: "You've exceed your pod quota.",
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Forbidden',
              value: {
                error: {
                  code: 'FORBIDDEN',
                  message: 'Increase your quota or upgrade to create more indexes.',
                },
                status: 403,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Backup not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'backup-not-found': {
              summary: 'Backup not found',
              value: {
                error: { code: 'NOT_FOUND', message: 'Backup bkp_123abc not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    409: {
      description: 'Index of given name already exists.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable entity. The request body could not be deserialized.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'missing-field': {
              summary: 'Unprocessable entity',
              value: {
                error: {
                  code: 'UNPROCESSABLE_ENTITY',
                  message:
                    'Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16',
                },
                status: 422,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const getRestoreJobsRoute = createRoute({
  method: 'get',
  path: '/restore-jobs',
  tags: ['Manage Indexes'],
  summary: 'List restore jobs',
  description: 'List all restore jobs for a project.',
  operationId: 'list_restore_jobs',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            description: 'The number of results to return per page.',
            schema: { default: 10, type: 'integer', minimum: 1, maximum: 100 },
            style: 'form',
            required: false,
          },
        }),
      paginationToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paginationToken',
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'This operation returns a list of all the restore jobs that you have previously created.',
      content: {
        'application/json': {
          schema: RestoreJobListSchema,
          examples: {
            'paginated-restore-jobs': {
              summary: 'A list containing restore jobs.',
              value: {
                data: [
                  {
                    backup_id: '670e8400-e29b-41d4-a716-446655440000',
                    completed_at: '2024-03-15T10:35:00Z',
                    created_at: '2024-03-15T10:30:00Z',
                    percent_complete: 100,
                    restore_job_id: '670e8400-e29b-41d4-a716-446655440001',
                    status: 'Completed',
                    target_index_id: 'idx_456',
                    target_index_name: 'my-index',
                  },
                ],
                pagination: { next: 'dXNlcl9pZD11c2VyXzE=' },
              },
            },
            'non-paginated-restore-jobs': {
              summary: 'A list containing restore jobs.',
              value: {
                data: [
                  {
                    backup_id: '670e8400-e29b-41d4-a716-446655440000',
                    completed_at: '2024-03-15T10:35:00Z',
                    created_at: '2024-03-15T10:30:00Z',
                    percent_complete: 100,
                    restore_job_id: '670e8400-e29b-41d4-a716-446655440001',
                    status: 'Completed',
                    target_index_id: 'idx_456',
                    target_index_name: 'my-index',
                  },
                ],
                pagination: null,
              },
            },
            'no-restore-jobs': { summary: 'An empty list.', value: { data: [], pagination: null } },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const getRestoreJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/restore-jobs/{job_id}',
  tags: ['Manage Indexes'],
  summary: 'Describe a restore job',
  description: 'Get a description of a restore job.',
  operationId: 'describe_restore_job',
  request: {
    params: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'job_id',
            description: 'The ID of the restore job to describe.',
            required: true,
            schema: { type: 'string' },
            example: '670e8400-e29b-41d4-a716-446655440000',
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Configuration information and deployment status of the restore job.',
      content: { 'application/json': { schema: RestoreJobModelSchema } },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Restore job not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'restore-job-not-found': {
              summary: 'Restore job not found',
              value: {
                error: {
                  code: 'NOT_FOUND',
                  message: 'Restore job 670e8400-e29b-41d4-a716-446655440002 not found.',
                },
                status: 404,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const getCollectionsCollectionNameRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}',
  tags: ['Manage Indexes'],
  summary: 'Describe a collection',
  description:
    'Get a description of a collection.\nServerless indexes do not support collections.\n',
  operationId: 'describe_collection',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'collection_name',
            description: 'The name of the collection to be described.',
            required: true,
            schema: { type: 'string' },
            example: 'tiny-collection',
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Configuration information and status of the collection.',
      content: {
        'application/json': {
          schema: CollectionModelSchema,
          examples: {
            'tiny-collection': {
              summary: 'A small collection.',
              value: {
                dimension: 3,
                environment: 'us-east1-gcp',
                name: 'tiny-collection',
                size: 3126700,
                status: 'Ready',
                vector_count: 99,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Collection not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'collection-not-found': {
              summary: 'Collection not found.',
              value: {
                error: { code: 'NOT_FOUND', message: 'Collection example-collection not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})

export const deleteCollectionsCollectionNameRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection_name}',
  tags: ['Manage Indexes'],
  summary: 'Delete a collection',
  description: 'Delete an existing collection.\nServerless indexes do not support collections.\n',
  operationId: 'delete_collection',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'collection_name',
            description: 'The name of the collection.',
            required: true,
            schema: { type: 'string' },
            example: 'test-collection',
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    202: { description: 'The collection has been successfully deleted.' },
    401: {
      description: 'Unauthorized. Possible causes: Invalid API key.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            unauthorized: {
              summary: 'Unauthorized',
              value: {
                error: { code: 'UNAUTHENTICATED', message: 'Invalid API key.' },
                status: 401,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Collection not found.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'collection-not-found': {
              summary: 'Collection not found.',
              value: {
                error: { code: 'NOT_FOUND', message: 'Collection example-collection not found.' },
                status: 404,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            'internal-server-error': {
              summary: 'Internal server error',
              value: { error: { code: 'UNKNOWN', message: 'Internal server error' }, status: 500 },
            },
          },
        },
      },
    },
  },
})
