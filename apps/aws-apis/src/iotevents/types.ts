type Tag = { key: {}; value: {} }
type CreateAlarmModelResponse = {
  creationTime?: {} | undefined
  alarmModelArn?: {} | undefined
  alarmModelVersion?: {} | undefined
  lastUpdateTime?: {} | undefined
  status?: {} | undefined
}
type ListAlarmModelsResponse = { alarmModelSummaries?: {} | undefined; nextToken?: {} | undefined }
type CreateDetectorModelResponse = {
  detectorModelConfiguration?:
    | {
        detectorModelName?: {} | undefined
        detectorModelVersion?: {} | undefined
        detectorModelDescription?: {} | undefined
        detectorModelArn?: {} | undefined
        roleArn?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        status?: {} | undefined
        key?: {} | undefined
        evaluationMethod?: {} | undefined
      }
    | undefined
}
type ListDetectorModelsResponse = {
  detectorModelSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type CreateInputResponse = {
  inputConfiguration?:
    | {
        inputName: {}
        inputDescription?: {} | undefined
        inputArn: {}
        creationTime: {}
        lastUpdateTime: {}
        status: {}
      }
    | undefined
}
type ListInputsResponse = { inputSummaries?: {} | undefined; nextToken?: {} | undefined }
type DeleteAlarmModelResponse = { [x: string]: unknown }
type DescribeAlarmModelResponse = {
  creationTime?: {} | undefined
  alarmModelArn?: {} | undefined
  alarmModelVersion?: {} | undefined
  lastUpdateTime?: {} | undefined
  status?: {} | undefined
  statusMessage?: {} | undefined
  alarmModelName?: {} | undefined
  alarmModelDescription?: {} | undefined
  roleArn?: {} | undefined
  key?: {} | undefined
  severity?: {} | undefined
  alarmRule?:
    | { simpleRule?: { inputProperty: {}; comparisonOperator: {}; threshold: {} } | undefined }
    | undefined
  alarmNotification?: { notificationActions?: {} | undefined } | undefined
  alarmEventActions?: { alarmActions?: {} | undefined } | undefined
  alarmCapabilities?:
    | {
        initializationConfiguration?: { disabledOnInitialization: {} } | undefined
        acknowledgeFlow?: { enabled: {} } | undefined
      }
    | undefined
}
type UpdateAlarmModelResponse = {
  creationTime?: {} | undefined
  alarmModelArn?: {} | undefined
  alarmModelVersion?: {} | undefined
  lastUpdateTime?: {} | undefined
  status?: {} | undefined
}
type DeleteDetectorModelResponse = { [x: string]: unknown }
type DescribeDetectorModelResponse = {
  detectorModel?:
    | {
        detectorModelDefinition?: { states: {}; initialStateName: {} } | undefined
        detectorModelConfiguration?:
          | {
              detectorModelName?: {} | undefined
              detectorModelVersion?: {} | undefined
              detectorModelDescription?: {} | undefined
              detectorModelArn?: {} | undefined
              roleArn?: {} | undefined
              creationTime?: {} | undefined
              lastUpdateTime?: {} | undefined
              status?: {} | undefined
              key?: {} | undefined
              evaluationMethod?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateDetectorModelResponse = {
  detectorModelConfiguration?:
    | {
        detectorModelName?: {} | undefined
        detectorModelVersion?: {} | undefined
        detectorModelDescription?: {} | undefined
        detectorModelArn?: {} | undefined
        roleArn?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        status?: {} | undefined
        key?: {} | undefined
        evaluationMethod?: {} | undefined
      }
    | undefined
}
type DeleteInputResponse = { [x: string]: unknown }
type DescribeInputResponse = {
  input?:
    | {
        inputConfiguration?:
          | {
              inputName: {}
              inputDescription?: {} | undefined
              inputArn: {}
              creationTime: {}
              lastUpdateTime: {}
              status: {}
            }
          | undefined
        inputDefinition?: { attributes: {} } | undefined
      }
    | undefined
}
type UpdateInputResponse = {
  inputConfiguration?:
    | {
        inputName: {}
        inputDescription?: {} | undefined
        inputArn: {}
        creationTime: {}
        lastUpdateTime: {}
        status: {}
      }
    | undefined
}
type DescribeDetectorModelAnalysisResponse = { status?: {} | undefined }
type DescribeLoggingOptionsResponse = {
  loggingOptions?:
    | { roleArn: {}; level: {}; enabled: {}; detectorDebugOptions?: {} | undefined }
    | undefined
}
type GetDetectorModelAnalysisResultsResponse = {
  analysisResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListAlarmModelVersionsResponse = {
  alarmModelVersionSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListDetectorModelVersionsResponse = {
  detectorModelVersionSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListInputRoutingsResponse = { routedResources?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type StartDetectorModelAnalysisResponse = { analysisId?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/alarm-models': {
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
            alarmModelName: string
            alarmModelDescription?: string | undefined
            roleArn: string
            tags?: Tag[] | undefined
            key?: string | undefined
            severity?: number | undefined
            alarmRule: {
              simpleRule?: { inputProperty: {}; comparisonOperator: {}; threshold: {} } | undefined
            }
            alarmNotification?: { notificationActions?: {} | undefined } | undefined
            alarmEventActions?: { alarmActions?: {} | undefined } | undefined
            alarmCapabilities?:
              | {
                  initializationConfiguration?: { disabledOnInitialization: {} } | undefined
                  acknowledgeFlow?: { enabled: {} } | undefined
                }
              | undefined
          }
        }
        output: CreateAlarmModelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListAlarmModelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/detector-models': {
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
            detectorModelName: string
            detectorModelDefinition: { states?: {} | undefined; initialStateName?: {} | undefined }
            detectorModelDescription?: string | undefined
            key?: string | undefined
            roleArn: string
            tags?: Tag[] | undefined
            evaluationMethod?: 'BATCH' | 'SERIAL' | undefined
          }
        }
        output: CreateDetectorModelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListDetectorModelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inputs': {
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
            inputName: string
            inputDescription?: string | undefined
            inputDefinition: { attributes?: {} | undefined }
            tags?: Tag[] | undefined
          }
        }
        output: CreateInputResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListInputsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alarm-models/:alarmModelName': {
      $delete: {
        input: { param: { alarmModelName: string } } & {
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
        output: DeleteAlarmModelResponse
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { alarmModelName: string } } & {
          query: { version?: string | undefined }
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
        output: DescribeAlarmModelResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { alarmModelName: string } } & {
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
            alarmModelDescription?: string | undefined
            roleArn: string
            severity?: number | undefined
            alarmRule: {
              simpleRule?: { inputProperty: {}; comparisonOperator: {}; threshold: {} } | undefined
            }
            alarmNotification?: { notificationActions?: {} | undefined } | undefined
            alarmEventActions?: { alarmActions?: {} | undefined } | undefined
            alarmCapabilities?:
              | {
                  initializationConfiguration?: { disabledOnInitialization: {} } | undefined
                  acknowledgeFlow?: { enabled: {} } | undefined
                }
              | undefined
          }
        }
        output: UpdateAlarmModelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/detector-models/:detectorModelName': {
      $delete: {
        input: { param: { detectorModelName: string } } & {
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
        output: DeleteDetectorModelResponse
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { detectorModelName: string } } & {
          query: { version?: string | undefined }
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
        output: DescribeDetectorModelResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { detectorModelName: string } } & {
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
            detectorModelDefinition: { states?: {} | undefined; initialStateName?: {} | undefined }
            detectorModelDescription?: string | undefined
            roleArn: string
            evaluationMethod?: 'BATCH' | 'SERIAL' | undefined
          }
        }
        output: UpdateDetectorModelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inputs/:inputName': {
      $delete: {
        input: { param: { inputName: string } } & {
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
        output: DeleteInputResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { inputName: string } } & {
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
        output: DescribeInputResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { inputName: string } } & {
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
            inputDescription?: string | undefined
            inputDefinition: { attributes?: {} | undefined }
          }
        }
        output: UpdateInputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/analysis/detector-models/:analysisId': {
      $get: {
        input: { param: { analysisId: string } } & {
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
        output: DescribeDetectorModelAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/logging': {
      $get: {
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
        }
        output: DescribeLoggingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
            loggingOptions: {
              roleArn?: {} | undefined
              level?: {} | undefined
              enabled?: {} | undefined
              detectorDebugOptions?: {} | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/analysis/detector-models/:analysisId/results': {
      $get: {
        input: { param: { analysisId: string } } & {
          query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
        output: GetDetectorModelAnalysisResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alarm-models/:alarmModelName/versions': {
      $get: {
        input: { param: { alarmModelName: string } } & {
          query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
        output: ListAlarmModelVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/detector-models/:detectorModelName/versions': {
      $get: {
        input: { param: { detectorModelName: string } } & {
          query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
        output: ListDetectorModelVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/input-routings': {
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
            inputIdentifier: {
              iotEventsInputIdentifier?: { inputName: {} } | undefined
              iotSiteWiseInputIdentifier?:
                | {
                    iotSiteWiseAssetModelPropertyIdentifier?:
                      | { assetModelId: {}; propertyId: {} }
                      | undefined
                  }
                | undefined
            }
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListInputRoutingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags#resourceArn': {
      $get: {
        input: { query: { resourceArn: string } } & {
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
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: Tag[] } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/analysis/detector-models/': {
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
            detectorModelDefinition: { states?: {} | undefined; initialStateName?: {} | undefined }
          }
        }
        output: StartDetectorModelAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags#resourceArn&tagKeys': {
      $delete: {
        input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
