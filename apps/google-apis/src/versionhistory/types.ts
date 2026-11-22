type Channel = {
  channelType?:
    | 'CHANNEL_TYPE_UNSPECIFIED'
    | 'STABLE'
    | 'BETA'
    | 'DEV'
    | 'CANARY'
    | 'CANARY_ASAN'
    | 'ALL'
    | 'EXTENDED'
    | undefined
  name?: string | undefined
}
type ListChannelsResponse = { channels?: Channel[] | undefined; nextPageToken?: string | undefined }
type Platform = {
  name?: string | undefined
  platformType?:
    | 'PLATFORM_TYPE_UNSPECIFIED'
    | 'WIN'
    | 'WIN64'
    | 'MAC'
    | 'LINUX'
    | 'ANDROID'
    | 'WEBVIEW'
    | 'IOS'
    | 'ALL'
    | 'MAC_ARM64'
    | 'LACROS'
    | 'LACROS_ARM32'
    | 'CHROMEOS'
    | 'LACROS_ARM64'
    | 'FUCHSIA'
    | undefined
}
type ListPlatformsResponse = {
  nextPageToken?: string | undefined
  platforms?: Platform[] | undefined
}
type Interval = { endTime?: string | undefined; startTime?: string | undefined }
type Release = {
  fraction?: number | undefined
  fractionGroup?: string | undefined
  name?: string | undefined
  serving?: Interval | undefined
  version?: string | undefined
}
type ListReleasesResponse = { nextPageToken?: string | undefined; releases?: Release[] | undefined }
type Version = { name?: string | undefined; version?: string | undefined }
type ListVersionsResponse = { nextPageToken?: string | undefined; versions?: Version[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:parent/channels': {
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
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/platforms': {
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
        output: ListPlatformsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/releases': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: ListReleasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/versions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: ListVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
