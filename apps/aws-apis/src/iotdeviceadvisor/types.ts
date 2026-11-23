type String256 = string
type CreateSuiteDefinitionResponse = {
  suiteDefinitionId?: {} | undefined
  suiteDefinitionArn?: {} | undefined
  suiteDefinitionName?: {} | undefined
  createdAt?: {} | undefined
}
type ListSuiteDefinitionsResponse = {
  suiteDefinitionInformationList?: {} | undefined
  nextToken?: {} | undefined
}
type DeleteSuiteDefinitionResponse = { [x: string]: unknown }
type GetSuiteDefinitionResponse = {
  suiteDefinitionId?: {} | undefined
  suiteDefinitionArn?: {} | undefined
  suiteDefinitionVersion?: {} | undefined
  latestVersion?: {} | undefined
  suiteDefinitionConfiguration?:
    | {
        suiteDefinitionName: {}
        devices?: {} | undefined
        intendedForQualification?: {} | undefined
        isLongDurationTest?: {} | undefined
        rootGroup: {}
        devicePermissionRoleArn: {}
        protocol?: {} | undefined
      }
    | undefined
  createdAt?: {} | undefined
  lastModifiedAt?: {} | undefined
  tags?: {} | undefined
}
type UpdateSuiteDefinitionResponse = {
  suiteDefinitionId?: {} | undefined
  suiteDefinitionArn?: {} | undefined
  suiteDefinitionName?: {} | undefined
  suiteDefinitionVersion?: {} | undefined
  createdAt?: {} | undefined
  lastUpdatedAt?: {} | undefined
}
type GetEndpointResponse = { endpoint?: {} | undefined }
type GetSuiteRunResponse = {
  suiteDefinitionId?: {} | undefined
  suiteDefinitionVersion?: {} | undefined
  suiteRunId?: {} | undefined
  suiteRunArn?: {} | undefined
  suiteRunConfiguration?:
    | {
        primaryDevice: { thingArn?: {} | undefined; certificateArn?: {} | undefined }
        selectedTestList?: {} | undefined
        parallelRun?: {} | undefined
      }
    | undefined
  testResult?: { groups?: {} | undefined } | undefined
  startTime?: {} | undefined
  endTime?: {} | undefined
  status?: {} | undefined
  errorReason?: {} | undefined
  tags?: {} | undefined
}
type GetSuiteRunReportResponse = { qualificationReportDownloadUrl?: {} | undefined }
type ListSuiteRunsResponse = { suiteRunsList?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type StartSuiteRunResponse = {
  suiteRunId?: {} | undefined
  suiteRunArn?: {} | undefined
  createdAt?: {} | undefined
  endpoint?: {} | undefined
}
type StopSuiteRunResponse = { [x: string]: unknown }
type String128 = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/suiteDefinitions': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            suiteDefinitionConfiguration: {
              suiteDefinitionName?: {} | undefined
              devices?: {} | undefined
              intendedForQualification?: {} | undefined
              isLongDurationTest?: {} | undefined
              rootGroup?: {} | undefined
              devicePermissionRoleArn?: {} | undefined
              protocol?: {} | undefined
            }
            tags?: { [x: string]: String256 } | undefined
          }
        }
        output: CreateSuiteDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSuiteDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suiteDefinitions/:suiteDefinitionId': {
      $delete: {
        input: { param: { suiteDefinitionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteSuiteDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { suiteDefinitionId: string } } & {
          query: { suiteDefinitionVersion?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSuiteDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { suiteDefinitionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            suiteDefinitionConfiguration: {
              suiteDefinitionName?: {} | undefined
              devices?: {} | undefined
              intendedForQualification?: {} | undefined
              isLongDurationTest?: {} | undefined
              rootGroup?: {} | undefined
              devicePermissionRoleArn?: {} | undefined
              protocol?: {} | undefined
            }
          }
        }
        output: UpdateSuiteDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/endpoint': {
      $get: {
        input: { query: { thingArn?: string | undefined; certificateArn?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId': {
      $get: {
        input: { param: { suiteDefinitionId: string; suiteRunId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSuiteRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId/report': {
      $get: {
        input: { param: { suiteDefinitionId: string; suiteRunId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSuiteRunReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suiteRuns': {
      $get: {
        input: {
          query: {
            suiteDefinitionId?: string | undefined
            suiteDefinitionVersion?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSuiteRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: String256 } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns': {
      $post: {
        input: { param: { suiteDefinitionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            suiteDefinitionVersion?: string | undefined
            suiteRunConfiguration: {
              primaryDevice?:
                | { thingArn?: {} | undefined; certificateArn?: {} | undefined }
                | undefined
              selectedTestList?: {} | undefined
              parallelRun?: {} | undefined
            }
            tags?: { [x: string]: String256 } | undefined
          }
        }
        output: StartSuiteRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId/stop': {
      $post: {
        input: { param: { suiteDefinitionId: string; suiteRunId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopSuiteRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: String128[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
