type HealthResponse = { status: string; uptime_ms: bigint }
type ErrorCode =
  | 'already_exists'
  | 'backend'
  | 'cancelled'
  | 'cluster_already_exists'
  | 'cluster_not_found'
  | 'database_already_exists'
  | 'database_not_empty'
  | 'database_not_found'
  | 'failed_precondition'
  | 'internal'
  | 'invalid_argument'
  | 'limit_exceeded'
  | 'method_not_allowed'
  | 'not_acceptable'
  | 'not_found'
  | 'partition_already_exists'
  | 'partition_not_found'
  | 'resource_exhausted'
  | 'storage_backpressure'
  | 'table_already_exists'
  | 'table_not_found'
  | 'timeout'
  | 'unauthenticated'
  | 'unauthorized'
  | 'unavailable'
  | 'unsupported'
  | 'unsupported_media_type'
type ErrorBody = { code: ErrorCode; message: string; request_id: string }
type ErrorEnvelope = { error: ErrorBody }
type ReadyResponse = { status: string }
type ClustersResponse = { clusters: string[] }
type DatabasesResponse = { databases: string[]; next_page_token?: string | undefined }
type CreateDatabaseBody = { database: string }
type DatabaseResponse = { database: string }
type TablesResponse = { next_page_token?: string | undefined; tables: string[] }
type WireRowField = { description?: string | undefined; field_type: WireDataType; name: string }
type WireDataType =
  | { nullable?: boolean | undefined; type: 'BOOLEAN' }
  | { nullable?: boolean | undefined; type: 'TINYINT' }
  | { nullable?: boolean | undefined; type: 'SMALLINT' }
  | { nullable?: boolean | undefined; type: 'INTEGER' }
  | { nullable?: boolean | undefined; type: 'BIGINT' }
  | { nullable?: boolean | undefined; type: 'FLOAT' }
  | { nullable?: boolean | undefined; type: 'DOUBLE' }
  | { length: number; nullable?: boolean | undefined; type: 'CHAR' }
  | { nullable?: boolean | undefined; type: 'STRING' }
  | { nullable?: boolean | undefined; precision: number; scale: number; type: 'DECIMAL' }
  | { nullable?: boolean | undefined; type: 'DATE' }
  | { nullable?: boolean | undefined; precision: number; type: 'TIME_WITHOUT_TIME_ZONE' }
  | { nullable?: boolean | undefined; precision: number; type: 'TIMESTAMP_WITHOUT_TIME_ZONE' }
  | { nullable?: boolean | undefined; precision: number; type: 'TIMESTAMP_WITH_LOCAL_TIME_ZONE' }
  | { nullable?: boolean | undefined; type: 'BYTES' }
  | { length: number; nullable?: boolean | undefined; type: 'BINARY' }
  | { element_type: WireDataType; nullable?: boolean | undefined; type: 'ARRAY' }
  | {
      key_type: WireDataType
      nullable?: boolean | undefined
      type: 'MAP'
      value_type: WireDataType
    }
  | { fields: WireRowField[]; nullable?: boolean | undefined; type: 'ROW' }
type ColumnDataType =
  | { type: 'BOOLEAN' }
  | { type: 'TINYINT' }
  | { type: 'SMALLINT' }
  | { type: 'INTEGER' }
  | { type: 'BIGINT' }
  | { type: 'FLOAT' }
  | { type: 'DOUBLE' }
  | { length: number; type: 'CHAR' }
  | { type: 'STRING' }
  | { precision: number; scale: number; type: 'DECIMAL' }
  | { type: 'DATE' }
  | { precision: number; type: 'TIME_WITHOUT_TIME_ZONE' }
  | { precision: number; type: 'TIMESTAMP_WITHOUT_TIME_ZONE' }
  | { precision: number; type: 'TIMESTAMP_WITH_LOCAL_TIME_ZONE' }
  | { type: 'BYTES' }
  | { length: number; type: 'BINARY' }
  | { element_type: WireDataType; type: 'ARRAY' }
  | { key_type: WireDataType; type: 'MAP'; value_type: WireDataType }
  | { fields: WireRowField[]; type: 'ROW' }
type ColumnBody = {
  comment?: (string | null) | undefined
  data_type: ColumnDataType
  name: string
  nullable?: (boolean | null) | undefined
}
type DistributionBody = { bucket_count: number; bucket_keys: string[] }
type CreateTableBody = {
  columns: ColumnBody[]
  comment?: (string | null) | undefined
  configs?: { [x: string]: string } | undefined
  custom_properties?: { [x: string]: string } | undefined
  distribution?: ({ [x: string]: unknown } | null) | DistributionBody | undefined
  partitioned_by?: string[] | undefined
  primary_key?: (string[] | null) | undefined
  table_name: string
  validate_only?: boolean | undefined
}
type ValidateOnlyResponse = {
  column_count: number
  database: string
  primary_key: string[]
  table: string
  validate_only: boolean
}
type ColumnResponse = {
  comment?: string | undefined
  data_type: ColumnDataType
  name: string
  nullable: boolean
}
type DistributionResponse = { bucket_count: number; bucket_keys: string[] }
type TableResponse = {
  columns: ColumnResponse[]
  comment?: string | undefined
  configs?: { [x: string]: string } | undefined
  custom_properties?: { [x: string]: string } | undefined
  database: string
  distribution?: DistributionResponse | undefined
  partitioned_by?: string[] | undefined
  primary_key?: string[] | undefined
  table: string
}
type TableChangeBody =
  | {
      comment?: (string | null) | undefined
      data_type: ColumnDataType
      kind: 'add_column'
      name: string
    }
  | { key: string; kind: 'set_config'; value: string }
  | { key: string; kind: 'reset_config' }
type AlterTableBody = { changes: TableChangeBody[] }
type PartitionEntry = { name: string; partition: { [x: string]: string } }
type PartitionsResponse = { next_page_token?: string | undefined; partitions: PartitionEntry[] }
type CreatePartitionBody = { partition: { [x: string]: string } }
type PartitionResponse = { database: string; partition: { [x: string]: string }; table: string }
type WriteBodyEntryValue = {
  append?: { [x: string]: unknown } | undefined
  delete?: { [x: string]: unknown } | undefined
  id: string
  upsert?: { [x: string]: unknown } | undefined
}
type WriteBodyValue = {
  entries: WriteBodyEntryValue[]
  partial_update_columns?: (string[] | null) | undefined
}
type WriteFailureResponse = { error_code: string; id: string; message: string }
type WriteSuccessResponse = { id: string }
type WriteResponse = {
  error_count: bigint
  failures: WriteFailureResponse[]
  row_count: bigint
  success_count: bigint
  successes: WriteSuccessResponse[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/health': {
      $get:
        | { input: {}; output: HealthResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/ready': {
      $get:
        | { input: {}; output: ReadyResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v1/clusters': {
      $get:
        | { input: {}; output: ClustersResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 503 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 504 }
    }
  } & {
    '/v1/clusters/:cluster/databases': {
      $get:
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: DatabasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
      $post:
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: DatabaseResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string } } & { json: CreateDatabaseBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/clusters/:cluster/databases/:database': {
      $delete:
        | {
            input: { param: { cluster: string; database: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/clusters/:cluster/databases/:database/tables': {
      $get:
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: TablesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
      $post:
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ValidateOnlyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string } } & { json: CreateTableBody }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/clusters/:cluster/databases/:database/tables/:table': {
      $delete:
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
      $get:
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: TableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string; table: string } }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
      $patch:
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: AlterTableBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/clusters/:cluster/databases/:database/tables/:table/partitions': {
      $get:
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: PartitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              query: { max_results?: number | undefined; page_token?: string | undefined }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
      $post:
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: PartitionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: CreatePartitionBody
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/clusters/:cluster/databases/:database/tables/:table/partitions/:partition': {
      $delete:
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { cluster: string; database: string; table: string; partition: string }
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/clusters/:cluster/databases/:database/tables/:table/records': {
      $post:
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: WriteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { cluster: string; database: string; table: string } } & {
              json: WriteBodyValue
            }
            output: ErrorEnvelope
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/openapi.json': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 503 }
        | { input: {}; output: ErrorEnvelope; outputFormat: 'json'; status: 504 }
    }
  },
  '/'
>
export default routes
