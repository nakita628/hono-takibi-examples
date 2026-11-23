type SapDiscoveryResource = {
  relatedResources?: string[] | undefined
  resourceKind?: string | undefined
  resourceState?:
    | 'RESOURCE_STATE_UNSPECIFIED'
    | 'ADDED'
    | 'UPDATED'
    | 'REMOVED'
    | 'REPLACED'
    | 'MISSING'
    | undefined
  resourceType?: 'RESOURCE_TYPE_UNSPECIFIED' | 'COMPUTE' | 'STORAGE' | 'NETWORK' | undefined
  resourceUri?: string | undefined
  updateTime?: string | undefined
}
type SapDiscoveryComponent = {
  applicationType?: string | undefined
  databaseType?: string | undefined
  hostProject?: string | undefined
  resources?: SapDiscoveryResource[] | undefined
  sid?: string | undefined
}
type SapDiscoveryMetadata = {
  customerRegion?: string | undefined
  definedSystem?: string | undefined
  environmentType?: string | undefined
  sapProduct?: string | undefined
}
type SapDiscovery = {
  applicationLayer?: SapDiscoveryComponent | undefined
  databaseLayer?: SapDiscoveryComponent | undefined
  metadata?: SapDiscoveryMetadata | undefined
  systemId?: string | undefined
  updateTime?: string | undefined
}
type SapValidationValidationDetail = {
  details?: { [x: string]: string } | undefined
  sapValidationType?:
    | 'SAP_VALIDATION_TYPE_UNSPECIFIED'
    | 'SYSTEM'
    | 'COROSYNC'
    | 'PACEMAKER'
    | 'HANA'
    | 'NETWEAVER'
    | undefined
}
type SapValidation = { validationDetails?: SapValidationValidationDetail[] | undefined }
type Insight = {
  sapDiscovery?: SapDiscovery | undefined
  sapValidation?: SapValidation | undefined
  sentTime?: string | undefined
}
type WriteInsightRequest = { insight?: Insight | undefined; requestId?: string | undefined }
type WriteInsightResponse = { [x: string]: unknown }
type Empty = { [x: string]: unknown }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Execution = {
  endTime?: string | undefined
  evaluationId?: string | undefined
  inventoryTime?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  runType?: 'TYPE_UNSPECIFIED' | 'ONE_TIME' | 'SCHEDULED' | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | undefined
}
type RunEvaluationRequest = {
  execution?: Execution | undefined
  executionId?: string | undefined
  requestId?: string | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type GceInstanceFilter = { serviceAccounts?: string[] | undefined }
type ResourceFilter = {
  gceInstanceFilter?: GceInstanceFilter | undefined
  inclusionLabels?: { [x: string]: string } | undefined
  resourceIdPatterns?: string[] | undefined
  scopes?: string[] | undefined
}
type ResourceStatus = {
  rulesNewerVersions?: string[] | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'ACTIVE' | 'DELETING' | undefined
}
type Evaluation = {
  createTime?: string | undefined
  description?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  resourceFilter?: ResourceFilter | undefined
  resourceStatus?: ResourceStatus | undefined
  ruleNames?: string[] | undefined
  ruleVersions?: string[] | undefined
  schedule?: string | undefined
  updateTime?: string | undefined
}
type ListEvaluationsResponse = {
  evaluations?: Evaluation[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListExecutionsResponse = {
  executions?: Execution[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type Resource = {
  name?: string | undefined
  serviceAccount?: string | undefined
  type?: string | undefined
}
type ViolationDetails = {
  asset?: string | undefined
  observed?: { [x: string]: string } | undefined
  serviceAccount?: string | undefined
}
type ExecutionResult = {
  documentationUrl?: string | undefined
  resource?: Resource | undefined
  rule?: string | undefined
  severity?: string | undefined
  violationDetails?: ViolationDetails | undefined
  violationMessage?: string | undefined
}
type ListExecutionResultsResponse = {
  executionResults?: ExecutionResult[] | undefined
  nextPageToken?: string | undefined
}
type Rule = {
  description?: string | undefined
  displayName?: string | undefined
  errorMessage?: string | undefined
  name?: string | undefined
  primaryCategory?: string | undefined
  remediation?: string | undefined
  revisionId?: string | undefined
  secondaryCategory?: string | undefined
  severity?: string | undefined
  uri?: string | undefined
}
type ListRulesResponse = { nextPageToken?: string | undefined; rules?: Rule[] | undefined }
type ScannedResource = { resource?: string | undefined }
type ListScannedResourcesResponse = {
  nextPageToken?: string | undefined
  scannedResources?: ScannedResource[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:location/insights:writeInsight': {
      $post: {
        input: { param: { location: string } } & {
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
        } & { json: WriteInsightRequest }
        output: WriteInsightResponse
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/executions:run': {
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
        } & { json: RunEvaluationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/evaluations': {
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
        output: ListEvaluationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            evaluationId?: string | undefined
            requestId?: string | undefined
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
        } & { json: Evaluation }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/executions': {
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
        output: ListExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/results': {
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
        output: ListExecutionResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/rules': {
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
        output: ListRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/scannedResources': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            rule?: string | undefined
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
        output: ListScannedResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
