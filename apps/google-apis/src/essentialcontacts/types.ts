type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudEssentialcontactsV1Contact = {
  email?: string | undefined
  languageTag?: string | undefined
  name?: string | undefined
  notificationCategorySubscriptions?:
    | (
        | 'NOTIFICATION_CATEGORY_UNSPECIFIED'
        | 'ALL'
        | 'SUSPENSION'
        | 'SECURITY'
        | 'TECHNICAL'
        | 'BILLING'
        | 'LEGAL'
        | 'PRODUCT_UPDATES'
        | 'TECHNICAL_INCIDENTS'
      )[]
    | undefined
  validateTime?: string | undefined
  validationState?: 'VALIDATION_STATE_UNSPECIFIED' | 'VALID' | 'INVALID' | undefined
}
type GoogleCloudEssentialcontactsV1ListContactsResponse = {
  contacts?: GoogleCloudEssentialcontactsV1Contact[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudEssentialcontactsV1ComputeContactsResponse = {
  contacts?: GoogleCloudEssentialcontactsV1Contact[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudEssentialcontactsV1SendTestMessageRequest = {
  contacts?: string[] | undefined
  notificationCategory?:
    | 'NOTIFICATION_CATEGORY_UNSPECIFIED'
    | 'ALL'
    | 'SUSPENSION'
    | 'SECURITY'
    | 'TECHNICAL'
    | 'BILLING'
    | 'LEGAL'
    | 'PRODUCT_UPDATES'
    | 'TECHNICAL_INCIDENTS'
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
        output: GoogleProtobufEmpty
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
        output: GoogleCloudEssentialcontactsV1Contact
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudEssentialcontactsV1Contact }
        output: GoogleCloudEssentialcontactsV1Contact
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/contacts': {
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
        output: GoogleCloudEssentialcontactsV1ListContactsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudEssentialcontactsV1Contact }
        output: GoogleCloudEssentialcontactsV1Contact
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/contacts:compute': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            notificationCategories?:
              | (
                  | 'NOTIFICATION_CATEGORY_UNSPECIFIED'
                  | 'ALL'
                  | 'SUSPENSION'
                  | 'SECURITY'
                  | 'TECHNICAL'
                  | 'BILLING'
                  | 'LEGAL'
                  | 'PRODUCT_UPDATES'
                  | 'TECHNICAL_INCIDENTS'
                )[]
              | undefined
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
        output: GoogleCloudEssentialcontactsV1ComputeContactsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource/contacts:sendTestMessage': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GoogleCloudEssentialcontactsV1SendTestMessageRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
