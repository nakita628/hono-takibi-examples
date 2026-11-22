type Attachment = { mimeType?: string[] | undefined; name?: string | undefined }
type TextContent = { text?: string | undefined }
type ListItem = {
  checked?: boolean | undefined
  childListItems?: ListItem[] | undefined
  text?: TextContent | undefined
}
type ListContent = { listItems?: ListItem[] | undefined }
type Section = { list?: ListContent | undefined; text?: TextContent | undefined }
type Family = { [x: string]: unknown }
type Group = { email?: string | undefined }
type User = { email?: string | undefined }
type Permission = {
  deleted?: boolean | undefined
  email?: string | undefined
  family?: Family | undefined
  group?: Group | undefined
  name?: string | undefined
  role?: 'ROLE_UNSPECIFIED' | 'OWNER' | 'WRITER' | undefined
  user?: User | undefined
}
type Note = {
  attachments?: Attachment[] | undefined
  body?: Section | undefined
  createTime?: string | undefined
  name?: string | undefined
  permissions?: Permission[] | undefined
  title?: string | undefined
  trashTime?: string | undefined
  trashed?: boolean | undefined
  updateTime?: string | undefined
}
type ListNotesResponse = { nextPageToken?: string | undefined; notes?: Note[] | undefined }
type Empty = { [x: string]: unknown }
type CreatePermissionRequest = { parent?: string | undefined; permission?: Permission | undefined }
type BatchCreatePermissionsRequest = { requests?: CreatePermissionRequest[] | undefined }
type BatchCreatePermissionsResponse = { permissions?: Permission[] | undefined }
type BatchDeletePermissionsRequest = { names?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/notes': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
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
        output: ListNotesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: Note }
        output: Note
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
            mimeType?: string | undefined
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
        output: Note
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/permissions:batchCreate': {
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
        } & { json: BatchCreatePermissionsRequest }
        output: BatchCreatePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/permissions:batchDelete': {
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
        } & { json: BatchDeletePermissionsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
