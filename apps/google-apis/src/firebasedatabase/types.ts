type DatabaseInstance = {
  databaseUrl?: string | undefined
  name?: string | undefined
  project?: string | undefined
  state?: 'LIFECYCLE_STATE_UNSPECIFIED' | 'ACTIVE' | 'DISABLED' | 'DELETED' | undefined
  type?: 'DATABASE_INSTANCE_TYPE_UNSPECIFIED' | 'DEFAULT_DATABASE' | 'USER_DATABASE' | undefined
}
type DisableDatabaseInstanceRequest = { [x: string]: unknown }
type ReenableDatabaseInstanceRequest = { [x: string]: unknown }
type UndeleteDatabaseInstanceRequest = { [x: string]: unknown }
type ListDatabaseInstancesResponse = {
  instances?: DatabaseInstance[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:name': {
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
        output: DatabaseInstance
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
        output: DatabaseInstance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:disable': {
      $post: {
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
        } & { json: DisableDatabaseInstanceRequest }
        output: DatabaseInstance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:reenable': {
      $post: {
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
        } & { json: ReenableDatabaseInstanceRequest }
        output: DatabaseInstance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:undelete': {
      $post: {
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
        } & { json: UndeleteDatabaseInstanceRequest }
        output: DatabaseInstance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/instances': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: ListDatabaseInstancesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            databaseId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: DatabaseInstance }
        output: DatabaseInstance
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
