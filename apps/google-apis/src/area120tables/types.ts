type DateDetails = { hasTime?: boolean | undefined }
type LabeledItem = { id?: string | undefined; name?: string | undefined }
type LookupDetails = {
  relationshipColumn?: string | undefined
  relationshipColumnId?: string | undefined
}
type RelationshipDetails = { linkedTable?: string | undefined }
type ColumnDescription = {
  dataType?: string | undefined
  dateDetails?: DateDetails | undefined
  id?: string | undefined
  labels?: LabeledItem[] | undefined
  lookupDetails?: LookupDetails | undefined
  multipleValuesDisallowed?: boolean | undefined
  name?: string | undefined
  readonly?: boolean | undefined
  relationshipDetails?: RelationshipDetails | undefined
}
type SavedView = { id?: string | undefined; name?: string | undefined }
type Table = {
  columns?: ColumnDescription[] | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  savedViews?: SavedView[] | undefined
  timeZone?: string | undefined
  updateTime?: string | undefined
}
type ListTablesResponse = { nextPageToken?: string | undefined; tables?: Table[] | undefined }
type Workspace = {
  createTime?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  tables?: Table[] | undefined
  updateTime?: string | undefined
}
type ListWorkspacesResponse = {
  nextPageToken?: string | undefined
  workspaces?: Workspace[] | undefined
}
type Empty = { [x: string]: unknown }
type Row = {
  createTime?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
  values?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ListRowsResponse = { nextPageToken?: string | undefined; rows?: Row[] | undefined }
type CreateRowRequest = {
  parent?: string | undefined
  row?: Row | undefined
  view?: 'VIEW_UNSPECIFIED' | 'COLUMN_ID_VIEW' | undefined
}
type BatchCreateRowsRequest = { requests?: CreateRowRequest[] | undefined }
type BatchCreateRowsResponse = { rows?: Row[] | undefined }
type BatchDeleteRowsRequest = { names?: string[] | undefined }
type UpdateRowRequest = {
  row?: Row | undefined
  updateMask?: string | undefined
  view?: 'VIEW_UNSPECIFIED' | 'COLUMN_ID_VIEW' | undefined
}
type BatchUpdateRowsRequest = { requests?: UpdateRowRequest[] | undefined }
type BatchUpdateRowsResponse = { rows?: Row[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha1/tables': {
      $get: {
        input: {
          query: {
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: ListTablesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/workspaces': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: ListWorkspacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name': {
      $delete: {
        input: { param: { name: string } } & {
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
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?: 'VIEW_UNSPECIFIED' | 'COLUMN_ID_VIEW' | undefined
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
        }
        output: Workspace
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            view?: 'VIEW_UNSPECIFIED' | 'COLUMN_ID_VIEW' | undefined
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
        } & { json: Row }
        output: Row
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/rows': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'VIEW_UNSPECIFIED' | 'COLUMN_ID_VIEW' | undefined
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
        }
        output: ListRowsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            view?: 'VIEW_UNSPECIFIED' | 'COLUMN_ID_VIEW' | undefined
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
        } & { json: Row }
        output: Row
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/rows:batchCreate': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: BatchCreateRowsRequest }
        output: BatchCreateRowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/rows:batchDelete': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: BatchDeleteRowsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/rows:batchUpdate': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: BatchUpdateRowsRequest }
        output: BatchUpdateRowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
