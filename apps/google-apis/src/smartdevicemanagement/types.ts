type GoogleHomeEnterpriseSdmV1Room = {
  name?: string | undefined
  traits?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest = {
  command?: string | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse = {
  results?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleHomeEnterpriseSdmV1ParentRelation = {
  displayName?: string | undefined
  parent?: string | undefined
}
type GoogleHomeEnterpriseSdmV1Device = {
  name?: string | undefined
  parentRelations?: GoogleHomeEnterpriseSdmV1ParentRelation[] | undefined
  traits?: { [x: string]: { [x: string]: unknown } } | undefined
  type?: string | undefined
}
type GoogleHomeEnterpriseSdmV1ListDevicesResponse = {
  devices?: GoogleHomeEnterpriseSdmV1Device[] | undefined
  nextPageToken?: string | undefined
}
type GoogleHomeEnterpriseSdmV1ListRoomsResponse = {
  nextPageToken?: string | undefined
  rooms?: GoogleHomeEnterpriseSdmV1Room[] | undefined
}
type GoogleHomeEnterpriseSdmV1Structure = {
  name?: string | undefined
  traits?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleHomeEnterpriseSdmV1ListStructuresResponse = {
  nextPageToken?: string | undefined
  structures?: GoogleHomeEnterpriseSdmV1Structure[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
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
        output: GoogleHomeEnterpriseSdmV1Room
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:executeCommand': {
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
        } & { json: GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest }
        output: GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/devices': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleHomeEnterpriseSdmV1ListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/rooms': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleHomeEnterpriseSdmV1ListRoomsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/structures': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleHomeEnterpriseSdmV1ListStructuresResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
