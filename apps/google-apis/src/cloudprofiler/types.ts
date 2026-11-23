type Deployment = {
  labels?: { [x: string]: string } | undefined
  projectId?: string | undefined
  target?: string | undefined
}
type Profile = {
  deployment?: Deployment | undefined
  duration?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  profileBytes?: string | undefined
  profileType?:
    | 'PROFILE_TYPE_UNSPECIFIED'
    | 'CPU'
    | 'WALL'
    | 'HEAP'
    | 'THREADS'
    | 'CONTENTION'
    | 'PEAK_HEAP'
    | 'HEAP_ALLOC'
    | undefined
}
type CreateProfileRequest = {
  deployment?: Deployment | undefined
  profileType?:
    | (
        | 'PROFILE_TYPE_UNSPECIFIED'
        | 'CPU'
        | 'WALL'
        | 'HEAP'
        | 'THREADS'
        | 'CONTENTION'
        | 'PEAK_HEAP'
        | 'HEAP_ALLOC'
      )[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/:name': {
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: Profile }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/profiles': {
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
        } & { json: CreateProfileRequest }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/profiles:createOffline': {
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
        } & { json: Profile }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
