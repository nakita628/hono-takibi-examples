type StatusV1GetBuildInfoData = {
  version?: string | undefined
  revision?: string | undefined
  branch?: string | undefined
  buildUser?: string | undefined
  buildDate?: string | undefined
  goVersion?: string | undefined
}
type StatusV1GetBuildInfoResponse = {
  status?: string | undefined
  data?: StatusV1GetBuildInfoData | undefined
}
type GoogleProtobufAny = { type?: string | undefined; value?: File | undefined }
type GoogleApiHttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: GoogleProtobufAny[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/status/buildinfo': {
      $get: { input: {}; output: StatusV1GetBuildInfoResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/status/config': {
      $get: { input: {}; output: GoogleApiHttpBody; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/status/config/default': {
      $get: { input: {}; output: GoogleApiHttpBody; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/status/config/diff': {
      $get: { input: {}; output: GoogleApiHttpBody; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
