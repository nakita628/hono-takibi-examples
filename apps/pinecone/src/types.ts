type DeletionProtection = 'disabled' | 'enabled'
type IndexTags = { [x: string]: string }
type ModelIndexEmbed = {
  model: string
  metric?: 'cosine' | 'euclidean' | 'dotproduct' | undefined
  dimension?: number | undefined
  vector_type?: string | undefined
  field_map?: { [x: string]: unknown } | undefined
  read_parameters?: { [x: string]: unknown } | undefined
  write_parameters?: { [x: string]: unknown } | undefined
}
type ByocSpec = { environment: string }
type PodSpec = {
  environment: string
  replicas?: number | undefined
  shards?: number | undefined
  pod_type: string
  pods?: number | undefined
  metadata_config?: { indexed?: string[] | undefined } | undefined
  source_collection?: string | undefined
}
type ServerlessSpec = {
  cloud: 'gcp' | 'aws' | 'azure'
  region: string
  source_collection?: string | undefined
}
type IndexModel = {
  name: string
  dimension?: number | undefined
  metric: 'cosine' | 'euclidean' | 'dotproduct'
  host: string
  private_host?: string | undefined
  deletion_protection?: DeletionProtection | undefined
  tags?: IndexTags | undefined
  embed?: ModelIndexEmbed | undefined
  spec: {
    byoc?: ByocSpec | undefined
    pod?: PodSpec | undefined
    serverless?: ServerlessSpec | undefined
  }
  status: {
    ready: boolean
    state:
      | 'Initializing'
      | 'InitializationFailed'
      | 'ScalingUp'
      | 'ScalingDown'
      | 'ScalingUpPodSize'
      | 'ScalingDownPodSize'
      | 'Terminating'
      | 'Ready'
      | 'Disabled'
  }
  vector_type: string
}
type IndexList = { indexes?: IndexModel[] | undefined }
type ErrorResponse = {
  status: number
  error: {
    code:
      | 'OK'
      | 'UNKNOWN'
      | 'INVALID_ARGUMENT'
      | 'DEADLINE_EXCEEDED'
      | 'QUOTA_EXCEEDED'
      | 'NOT_FOUND'
      | 'ALREADY_EXISTS'
      | 'PERMISSION_DENIED'
      | 'UNAUTHENTICATED'
      | 'RESOURCE_EXHAUSTED'
      | 'FAILED_PRECONDITION'
      | 'ABORTED'
      | 'OUT_OF_RANGE'
      | 'UNIMPLEMENTED'
      | 'INTERNAL'
      | 'UNAVAILABLE'
      | 'DATA_LOSS'
      | 'FORBIDDEN'
      | 'UNPROCESSABLE_ENTITY'
      | 'PAYMENT_REQUIRED'
    message: string
    details?: { [x: string]: unknown } | undefined
  }
}
type IndexSpec = { [x: string]: unknown } | { [x: string]: unknown } | { [x: string]: unknown }
type CreateIndexRequest = {
  name: string
  dimension?: number | undefined
  metric?: 'cosine' | 'euclidean' | 'dotproduct' | undefined
  deletion_protection?: DeletionProtection | undefined
  tags?: IndexTags | undefined
  spec: IndexSpec
  vector_type?: string | undefined
}
type ConfigureIndexRequest = {
  spec?: { pod: { replicas?: number | undefined; pod_type?: string | undefined } } | undefined
  deletion_protection?: DeletionProtection | undefined
  tags?: IndexTags | undefined
  embed?:
    | {
        model?: string | undefined
        field_map?: { [x: string]: unknown } | undefined
        read_parameters?: { [x: string]: unknown } | undefined
        write_parameters?: { [x: string]: unknown } | undefined
      }
    | undefined
}
type BackupModel = {
  backup_id: string
  source_index_name: string
  source_index_id: string
  name?: string | undefined
  description?: string | undefined
  status: string
  cloud: string
  region: string
  dimension?: number | undefined
  metric?: 'cosine' | 'euclidean' | 'dotproduct' | undefined
  record_count?: number | undefined
  namespace_count?: number | undefined
  size_bytes?: number | undefined
  tags?: IndexTags | undefined
  created_at?: string | undefined
}
type PaginationResponse = { next: string }
type BackupList = { data?: BackupModel[] | undefined; pagination?: PaginationResponse | undefined }
type CreateBackupRequest = { name?: string | undefined; description?: string | undefined }
type CollectionModel = {
  name: string
  size?: bigint | undefined
  status: 'Initializing' | 'Ready' | 'Terminating'
  dimension?: number | undefined
  vector_count?: number | undefined
  environment: string
}
type CollectionList = { collections?: CollectionModel[] | undefined }
type CreateCollectionRequest = { name: string; source: string }
type CreateIndexForModelRequest = {
  name: string
  cloud: 'gcp' | 'aws' | 'azure'
  region: string
  deletion_protection?: DeletionProtection | undefined
  tags?: IndexTags | undefined
  embed: {
    model: string
    metric?: 'cosine' | 'euclidean' | 'dotproduct' | undefined
    field_map: { [x: string]: unknown }
    dimension?: number | undefined
    read_parameters?: { [x: string]: unknown } | undefined
    write_parameters?: { [x: string]: unknown } | undefined
  }
}
type CreateIndexFromBackupRequest = {
  name: string
  tags?: IndexTags | undefined
  deletion_protection?: DeletionProtection | undefined
}
type CreateIndexFromBackupResponse = { restore_job_id: string; index_id: string }
type RestoreJobModel = {
  restore_job_id: string
  backup_id: string
  target_index_name: string
  target_index_id: string
  status: string
  created_at: string
  completed_at?: string | undefined
  percent_complete?: number | undefined
}
type RestoreJobList = { data: RestoreJobModel[]; pagination?: PaginationResponse | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/indexes': {
      $get:
        | { input: {}; output: IndexList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: CreateIndexRequest }
            output: IndexModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/indexes/:index_name': {
      $get:
        | {
            input: { param: { index_name: string } }
            output: IndexModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { index_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { index_name: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { index_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { index_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { index_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { index_name: string } } & { json: ConfigureIndexRequest }
            output: IndexModel
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index_name: string } } & { json: ConfigureIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index_name: string } } & { json: ConfigureIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { index_name: string } } & { json: ConfigureIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { index_name: string } } & { json: ConfigureIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: ConfigureIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index_name: string } } & { json: ConfigureIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: ConfigureIndexRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/indexes/:index_name/backups': {
      $get:
        | {
            input: { param: { index_name: string } } & {
              query: { limit?: number | undefined; paginationToken?: string | undefined }
            }
            output: BackupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } } & {
              query: { limit?: number | undefined; paginationToken?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { index_name: string } } & {
              query: { limit?: number | undefined; paginationToken?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index_name: string } } & {
              query: { limit?: number | undefined; paginationToken?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { index_name: string } } & { json: CreateBackupRequest }
            output: BackupModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index_name: string } } & { json: CreateBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index_name: string } } & { json: CreateBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { index_name: string } } & { json: CreateBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { index_name: string } } & { json: CreateBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: CreateBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: CreateBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/collections': {
      $get:
        | { input: {}; output: CollectionList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: CreateCollectionRequest }
            output: CollectionModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/indexes/create-for-model': {
      $post:
        | {
            input: { json: CreateIndexForModelRequest }
            output: IndexModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateIndexForModelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateIndexForModelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateIndexForModelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateIndexForModelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateIndexForModelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateIndexForModelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/backups': {
      $get:
        | {
            input: { query: { limit?: number | undefined; paginationToken?: string | undefined } }
            output: BackupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; paginationToken?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; paginationToken?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/backups/:backup_id': {
      $get:
        | {
            input: { param: { backup_id: string } }
            output: BackupModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { backup_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { backup_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { backup_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { backup_id: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { backup_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { backup_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { backup_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { backup_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/backups/:backup_id/create-index': {
      $post:
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: CreateIndexFromBackupResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { backup_id: string } } & { json: CreateIndexFromBackupRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restore-jobs': {
      $get:
        | {
            input: { query: { limit?: number | undefined; paginationToken?: string | undefined } }
            output: RestoreJobList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; paginationToken?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; paginationToken?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restore-jobs/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } }
            output: RestoreJobModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/collections/:collection_name': {
      $get:
        | {
            input: { param: { collection_name: string } }
            output: CollectionModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { collection_name: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
