type Empty = { [x: string]: unknown }
type BigQueryDatasetSource = { dataset?: string | undefined }
type DataProvider = { name?: string | undefined; primaryContact?: string | undefined }
type Publisher = { name?: string | undefined; primaryContact?: string | undefined }
type Listing = {
  bigqueryDataset?: BigQueryDatasetSource | undefined
  categories?:
    | (
        | 'CATEGORY_UNSPECIFIED'
        | 'CATEGORY_OTHERS'
        | 'CATEGORY_ADVERTISING_AND_MARKETING'
        | 'CATEGORY_COMMERCE'
        | 'CATEGORY_CLIMATE_AND_ENVIRONMENT'
        | 'CATEGORY_DEMOGRAPHICS'
        | 'CATEGORY_ECONOMICS'
        | 'CATEGORY_EDUCATION'
        | 'CATEGORY_ENERGY'
        | 'CATEGORY_FINANCIAL'
        | 'CATEGORY_GAMING'
        | 'CATEGORY_GEOSPATIAL'
        | 'CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE'
        | 'CATEGORY_MEDIA'
        | 'CATEGORY_PUBLIC_SECTOR'
        | 'CATEGORY_RETAIL'
        | 'CATEGORY_SPORTS'
        | 'CATEGORY_SCIENCE_AND_RESEARCH'
        | 'CATEGORY_TRANSPORTATION_AND_LOGISTICS'
        | 'CATEGORY_TRAVEL_AND_TOURISM'
      )[]
    | undefined
  dataProvider?: DataProvider | undefined
  description?: string | undefined
  displayName?: string | undefined
  documentation?: string | undefined
  icon?: string | undefined
  name?: string | undefined
  primaryContact?: string | undefined
  publisher?: Publisher | undefined
  requestAccess?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | undefined
}
type DestinationDatasetReference = {
  datasetId?: string | undefined
  projectId?: string | undefined
}
type DestinationDataset = {
  datasetReference?: DestinationDatasetReference | undefined
  description?: string | undefined
  friendlyName?: string | undefined
  labels?: { [x: string]: string } | undefined
  location?: string | undefined
}
type SubscribeListingRequest = { destinationDataset?: DestinationDataset | undefined }
type SubscribeListingResponse = { [x: string]: unknown }
type DataExchange = {
  description?: string | undefined
  displayName?: string | undefined
  documentation?: string | undefined
  icon?: string | undefined
  listingCount?: number | undefined
  name?: string | undefined
  primaryContact?: string | undefined
}
type ListOrgDataExchangesResponse = {
  dataExchanges?: DataExchange[] | undefined
  nextPageToken?: string | undefined
}
type ListDataExchangesResponse = {
  dataExchanges?: DataExchange[] | undefined
  nextPageToken?: string | undefined
}
type ListListingsResponse = { listings?: Listing[] | undefined; nextPageToken?: string | undefined }
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
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
        output: Empty
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
        output: Listing
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
        } & { json: Listing }
        output: Listing
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:subscribe': {
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
        } & { json: SubscribeListingRequest }
        output: SubscribeListingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:organization/dataExchanges': {
      $get: {
        input: { param: { organization: string } } & {
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
        output: ListOrgDataExchangesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/dataExchanges': {
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
        output: ListDataExchangesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            dataExchangeId?: string | undefined
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
        } & { json: DataExchange }
        output: DataExchange
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/listings': {
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
        output: ListListingsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            listingId?: string | undefined
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
        } & { json: Listing }
        output: Listing
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
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
        } & { json: GetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:setIamPolicy': {
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
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:testIamPermissions': {
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
