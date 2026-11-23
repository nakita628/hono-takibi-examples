type GoogleDatastoreAdminV1beta1EntityFilter = {
  kinds?: string[] | undefined
  namespaceIds?: string[] | undefined
}
type GoogleDatastoreAdminV1beta1ExportEntitiesRequest = {
  entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter | undefined
  labels?: { [x: string]: string } | undefined
  outputUrlPrefix?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleDatastoreAdminV1beta1ImportEntitiesRequest = {
  entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter | undefined
  inputUrl?: string | undefined
  labels?: { [x: string]: string } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/projects/:projectId:export': {
      $post: {
        input: { param: { projectId: string } } & {
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
        } & { json: GoogleDatastoreAdminV1beta1ExportEntitiesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId:import': {
      $post: {
        input: { param: { projectId: string } } & {
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
        } & { json: GoogleDatastoreAdminV1beta1ImportEntitiesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
