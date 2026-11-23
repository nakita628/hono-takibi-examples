type BatchCreateVariableRequest = { variableEntries: {}; tags?: {} | undefined }
type BatchCreateVariableResult = { errors?: {} | undefined }
type BatchGetVariableRequest = { names: {} }
type BatchGetVariableResult = { variables?: {} | undefined; errors?: {} | undefined }
type CancelBatchImportJobRequest = { jobId: {} }
type CancelBatchImportJobResult = { [x: string]: unknown }
type CancelBatchPredictionJobRequest = { jobId: {} }
type CancelBatchPredictionJobResult = { [x: string]: unknown }
type CreateBatchImportJobRequest = {
  jobId: {}
  inputPath: {}
  outputPath: {}
  eventTypeName: {}
  iamRoleArn: {}
  tags?: {} | undefined
}
type CreateBatchImportJobResult = { [x: string]: unknown }
type CreateBatchPredictionJobRequest = {
  jobId: {}
  inputPath: {}
  outputPath: {}
  eventTypeName: {}
  detectorName: {}
  detectorVersion?: {} | undefined
  iamRoleArn: {}
  tags?: {} | undefined
}
type CreateBatchPredictionJobResult = { [x: string]: unknown }
type CreateDetectorVersionRequest = {
  detectorId: {}
  description?: {} | undefined
  externalModelEndpoints?: {} | undefined
  rules: {}
  modelVersions?: {} | undefined
  ruleExecutionMode?: {} | undefined
  tags?: {} | undefined
}
type CreateDetectorVersionResult = {
  detectorId?: {} | undefined
  detectorVersionId?: {} | undefined
  status?: {} | undefined
}
type CreateListRequest = {
  name: {}
  elements?: {} | undefined
  variableType?: {} | undefined
  description?: {} | undefined
  tags?: {} | undefined
}
type CreateListResult = { [x: string]: unknown }
type CreateModelRequest = {
  modelId: {}
  modelType: {}
  description?: {} | undefined
  eventTypeName: {}
  tags?: {} | undefined
}
type CreateModelResult = { [x: string]: unknown }
type LabelSchema = { labelMapper?: {} | undefined; unlabeledEventsTreatment?: {} | undefined }
type CreateModelVersionRequest = {
  modelId: {}
  modelType: {}
  trainingDataSource: {}
  trainingDataSchema: { modelVariables: {}; labelSchema?: LabelSchema | undefined }
  externalEventsDetail?: { dataLocation: {}; dataAccessRoleArn: {} } | undefined
  ingestedEventsDetail?: { ingestedEventsTimeWindow: { startTime: {}; endTime: {} } } | undefined
  tags?: {} | undefined
}
type CreateModelVersionResult = {
  modelId?: {} | undefined
  modelType?: {} | undefined
  modelVersionNumber?: {} | undefined
  status?: {} | undefined
}
type CreateRuleRequest = {
  ruleId: {}
  detectorId: {}
  description?: {} | undefined
  expression: {}
  language: {}
  outcomes: {}
  tags?: {} | undefined
}
type CreateRuleResult = { rule?: { detectorId: {}; ruleId: {}; ruleVersion: {} } | undefined }
type CreateVariableRequest = {
  name: {}
  dataType: {}
  dataSource: {}
  defaultValue: {}
  description?: {} | undefined
  variableType?: {} | undefined
  tags?: {} | undefined
}
type CreateVariableResult = { [x: string]: unknown }
type DeleteBatchImportJobRequest = { jobId: {} }
type DeleteBatchImportJobResult = { [x: string]: unknown }
type DeleteBatchPredictionJobRequest = { jobId: {} }
type DeleteBatchPredictionJobResult = { [x: string]: unknown }
type DeleteDetectorRequest = { detectorId: {} }
type DeleteDetectorResult = { [x: string]: unknown }
type DeleteDetectorVersionRequest = { detectorId: {}; detectorVersionId: {} }
type DeleteDetectorVersionResult = { [x: string]: unknown }
type DeleteEntityTypeRequest = { name: {} }
type DeleteEntityTypeResult = { [x: string]: unknown }
type DeleteEventRequest = { eventId: {}; eventTypeName: {}; deleteAuditHistory?: {} | undefined }
type DeleteEventResult = { [x: string]: unknown }
type DeleteEventTypeRequest = { name: {} }
type DeleteEventTypeResult = { [x: string]: unknown }
type DeleteEventsByEventTypeRequest = { eventTypeName: {} }
type DeleteEventsByEventTypeResult = {
  eventTypeName?: {} | undefined
  eventsDeletionStatus?: {} | undefined
}
type DeleteExternalModelRequest = { modelEndpoint: {} }
type DeleteExternalModelResult = { [x: string]: unknown }
type DeleteLabelRequest = { name: {} }
type DeleteLabelResult = { [x: string]: unknown }
type DeleteListRequest = { name: {} }
type DeleteListResult = { [x: string]: unknown }
type DeleteModelRequest = { modelId: {}; modelType: {} }
type DeleteModelResult = { [x: string]: unknown }
type DeleteModelVersionRequest = { modelId: {}; modelType: {}; modelVersionNumber: {} }
type DeleteModelVersionResult = { [x: string]: unknown }
type DeleteOutcomeRequest = { name: {} }
type DeleteOutcomeResult = { [x: string]: unknown }
type Rule = { detectorId: {}; ruleId: {}; ruleVersion: {} }
type DeleteRuleRequest = { rule: Rule }
type DeleteRuleResult = { [x: string]: unknown }
type DeleteVariableRequest = { name: {} }
type DeleteVariableResult = { [x: string]: unknown }
type DescribeDetectorRequest = {
  detectorId: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeDetectorResult = {
  detectorId?: {} | undefined
  detectorVersionSummaries?: {} | undefined
  nextToken?: {} | undefined
  arn?: {} | undefined
}
type DescribeModelVersionsRequest = {
  modelId?: {} | undefined
  modelVersionNumber?: {} | undefined
  modelType?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeModelVersionsResult = {
  modelVersionDetails?: {} | undefined
  nextToken?: {} | undefined
}
type GetBatchImportJobsRequest = {
  jobId?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type GetBatchImportJobsResult = { batchImports?: {} | undefined; nextToken?: {} | undefined }
type GetBatchPredictionJobsRequest = {
  jobId?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type GetBatchPredictionJobsResult = {
  batchPredictions?: {} | undefined
  nextToken?: {} | undefined
}
type GetDeleteEventsByEventTypeStatusRequest = { eventTypeName: {} }
type GetDeleteEventsByEventTypeStatusResult = {
  eventTypeName?: {} | undefined
  eventsDeletionStatus?: {} | undefined
}
type GetDetectorVersionRequest = { detectorId: {}; detectorVersionId: {} }
type GetDetectorVersionResult = {
  detectorId?: {} | undefined
  detectorVersionId?: {} | undefined
  description?: {} | undefined
  externalModelEndpoints?: {} | undefined
  modelVersions?: {} | undefined
  rules?: {} | undefined
  status?: {} | undefined
  lastUpdatedTime?: {} | undefined
  createdTime?: {} | undefined
  ruleExecutionMode?: {} | undefined
  arn?: {} | undefined
}
type GetDetectorsRequest = {
  detectorId?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetDetectorsResult = { detectors?: {} | undefined; nextToken?: {} | undefined }
type GetEntityTypesRequest = {
  name?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetEntityTypesResult = { entityTypes?: {} | undefined; nextToken?: {} | undefined }
type GetEventRequest = { eventId: {}; eventTypeName: {} }
type GetEventResult = {
  event?:
    | {
        eventId?: {} | undefined
        eventTypeName?: {} | undefined
        eventTimestamp?: {} | undefined
        eventVariables?: {} | undefined
        currentLabel?: {} | undefined
        labelTimestamp?: {} | undefined
        entities?: {} | undefined
      }
    | undefined
}
type GetEventPredictionRequest = {
  detectorId: {}
  detectorVersionId?: {} | undefined
  eventId: {}
  eventTypeName: {}
  entities: {}
  eventTimestamp: {}
  eventVariables: {}
  externalModelEndpointDataBlobs?: {} | undefined
}
type GetEventPredictionResult = {
  modelScores?: {} | undefined
  ruleResults?: {} | undefined
  externalModelOutputs?: {} | undefined
}
type GetEventPredictionMetadataRequest = {
  eventId: {}
  eventTypeName: {}
  detectorId: {}
  detectorVersionId: {}
  predictionTimestamp: {}
}
type GetEventPredictionMetadataResult = {
  eventId?: {} | undefined
  eventTypeName?: {} | undefined
  entityId?: {} | undefined
  entityType?: {} | undefined
  eventTimestamp?: {} | undefined
  detectorId?: {} | undefined
  detectorVersionId?: {} | undefined
  detectorVersionStatus?: {} | undefined
  eventVariables?: {} | undefined
  rules?: {} | undefined
  ruleExecutionMode?: {} | undefined
  outcomes?: {} | undefined
  evaluatedModelVersions?: {} | undefined
  evaluatedExternalModels?: {} | undefined
  predictionTimestamp?: {} | undefined
}
type GetEventTypesRequest = {
  name?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetEventTypesResult = { eventTypes?: {} | undefined; nextToken?: {} | undefined }
type GetExternalModelsRequest = {
  modelEndpoint?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetExternalModelsResult = { externalModels?: {} | undefined; nextToken?: {} | undefined }
type GetKMSEncryptionKeyResult = { kmsKey?: { kmsEncryptionKeyArn?: {} | undefined } | undefined }
type GetLabelsRequest = {
  name?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetLabelsResult = { labels?: {} | undefined; nextToken?: {} | undefined }
type GetListElementsRequest = { name: {}; nextToken?: {} | undefined; maxResults?: {} | undefined }
type GetListElementsResult = { elements?: {} | undefined; nextToken?: {} | undefined }
type GetListsMetadataRequest = {
  name?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetListsMetadataResult = { lists?: {} | undefined; nextToken?: {} | undefined }
type GetModelVersionRequest = { modelId: {}; modelType: {}; modelVersionNumber: {} }
type GetModelVersionResult = {
  modelId?: {} | undefined
  modelType?: {} | undefined
  modelVersionNumber?: {} | undefined
  trainingDataSource?: {} | undefined
  trainingDataSchema?: { modelVariables: {}; labelSchema?: LabelSchema | undefined } | undefined
  externalEventsDetail?: { dataLocation: {}; dataAccessRoleArn: {} } | undefined
  ingestedEventsDetail?: { ingestedEventsTimeWindow: { startTime: {}; endTime: {} } } | undefined
  status?: {} | undefined
  arn?: {} | undefined
}
type GetModelsRequest = {
  modelId?: {} | undefined
  modelType?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetModelsResult = { nextToken?: {} | undefined; models?: {} | undefined }
type GetOutcomesRequest = {
  name?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetOutcomesResult = { outcomes?: {} | undefined; nextToken?: {} | undefined }
type GetRulesRequest = {
  ruleId?: {} | undefined
  detectorId: {}
  ruleVersion?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetRulesResult = { ruleDetails?: {} | undefined; nextToken?: {} | undefined }
type GetVariablesRequest = {
  name?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetVariablesResult = { variables?: {} | undefined; nextToken?: {} | undefined }
type ListEventPredictionsRequest = {
  eventId?: { value?: {} | undefined } | undefined
  eventType?: { value?: {} | undefined } | undefined
  detectorId?: { value?: {} | undefined } | undefined
  detectorVersionId?: { value?: {} | undefined } | undefined
  predictionTimeRange?: { startTime: {}; endTime: {} } | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListEventPredictionsResult = {
  eventPredictionSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceRequest = {
  resourceARN: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListTagsForResourceResult = { tags?: {} | undefined; nextToken?: {} | undefined }
type PutDetectorRequest = {
  detectorId: {}
  description?: {} | undefined
  eventTypeName: {}
  tags?: {} | undefined
}
type PutDetectorResult = { [x: string]: unknown }
type PutEntityTypeRequest = { name: {}; description?: {} | undefined; tags?: {} | undefined }
type PutEntityTypeResult = { [x: string]: unknown }
type PutEventTypeRequest = {
  name: {}
  description?: {} | undefined
  eventVariables: {}
  labels?: {} | undefined
  entityTypes: {}
  eventIngestion?: {} | undefined
  tags?: {} | undefined
}
type PutEventTypeResult = { [x: string]: unknown }
type PutExternalModelRequest = {
  modelEndpoint: {}
  modelSource: {}
  invokeModelEndpointRoleArn: {}
  inputConfiguration: {
    eventTypeName?: {} | undefined
    format?: {} | undefined
    useEventVariables: {}
    jsonInputTemplate?: {} | undefined
    csvInputTemplate?: {} | undefined
  }
  outputConfiguration: {
    format: {}
    jsonKeyToVariableMap?: {} | undefined
    csvIndexToVariableMap?: {} | undefined
  }
  modelEndpointStatus: {}
  tags?: {} | undefined
}
type PutExternalModelResult = { [x: string]: unknown }
type PutKMSEncryptionKeyRequest = { kmsEncryptionKeyArn: {} }
type PutKMSEncryptionKeyResult = { [x: string]: unknown }
type PutLabelRequest = { name: {}; description?: {} | undefined; tags?: {} | undefined }
type PutLabelResult = { [x: string]: unknown }
type PutOutcomeRequest = { name: {}; description?: {} | undefined; tags?: {} | undefined }
type PutOutcomeResult = { [x: string]: unknown }
type SendEventRequest = {
  eventId: {}
  eventTypeName: {}
  eventTimestamp: {}
  eventVariables: {}
  assignedLabel?: {} | undefined
  labelTimestamp?: {} | undefined
  entities: {}
}
type SendEventResult = { [x: string]: unknown }
type TagResourceRequest = { resourceARN: {}; tags: {} }
type TagResourceResult = { [x: string]: unknown }
type UntagResourceRequest = { resourceARN: {}; tagKeys: {} }
type UntagResourceResult = { [x: string]: unknown }
type UpdateDetectorVersionRequest = {
  detectorId: {}
  detectorVersionId: {}
  externalModelEndpoints: {}
  rules: {}
  description?: {} | undefined
  modelVersions?: {} | undefined
  ruleExecutionMode?: {} | undefined
}
type UpdateDetectorVersionResult = { [x: string]: unknown }
type UpdateDetectorVersionMetadataRequest = {
  detectorId: {}
  detectorVersionId: {}
  description: {}
}
type UpdateDetectorVersionMetadataResult = { [x: string]: unknown }
type UpdateDetectorVersionStatusRequest = { detectorId: {}; detectorVersionId: {}; status: {} }
type UpdateDetectorVersionStatusResult = { [x: string]: unknown }
type UpdateEventLabelRequest = {
  eventId: {}
  eventTypeName: {}
  assignedLabel: {}
  labelTimestamp: {}
}
type UpdateEventLabelResult = { [x: string]: unknown }
type UpdateListRequest = {
  name: {}
  elements?: {} | undefined
  description?: {} | undefined
  updateMode?: {} | undefined
  variableType?: {} | undefined
}
type UpdateListResult = { [x: string]: unknown }
type UpdateModelRequest = { modelId: {}; modelType: {}; description?: {} | undefined }
type UpdateModelResult = { [x: string]: unknown }
type UpdateModelVersionRequest = {
  modelId: {}
  modelType: {}
  majorVersionNumber: {}
  externalEventsDetail?: { dataLocation: {}; dataAccessRoleArn: {} } | undefined
  ingestedEventsDetail?: { ingestedEventsTimeWindow: { startTime: {}; endTime: {} } } | undefined
  tags?: {} | undefined
}
type UpdateModelVersionResult = {
  modelId?: {} | undefined
  modelType?: {} | undefined
  modelVersionNumber?: {} | undefined
  status?: {} | undefined
}
type UpdateModelVersionStatusRequest = {
  modelId: {}
  modelType: {}
  modelVersionNumber: {}
  status: {}
}
type UpdateModelVersionStatusResult = { [x: string]: unknown }
type UpdateRuleMetadataRequest = {
  rule: { detectorId: {}; ruleId: {}; ruleVersion: {} }
  description: {}
}
type UpdateRuleMetadataResult = { [x: string]: unknown }
type UpdateRuleVersionRequest = {
  rule: { detectorId: {}; ruleId: {}; ruleVersion: {} }
  description?: {} | undefined
  expression: {}
  language: {}
  outcomes: {}
  tags?: {} | undefined
}
type UpdateRuleVersionResult = {
  rule?: { detectorId: {}; ruleId: {}; ruleVersion: {} } | undefined
}
type UpdateVariableRequest = {
  name: {}
  defaultValue?: {} | undefined
  description?: {} | undefined
  variableType?: {} | undefined
}
type UpdateVariableResult = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.BatchCreateVariable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchCreateVariableRequest }
        output: BatchCreateVariableResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.BatchGetVariable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetVariableRequest }
        output: BatchGetVariableResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CancelBatchImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelBatchImportJobRequest }
        output: CancelBatchImportJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CancelBatchPredictionJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelBatchPredictionJobRequest }
        output: CancelBatchPredictionJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CreateBatchImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBatchImportJobRequest }
        output: CreateBatchImportJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CreateBatchPredictionJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBatchPredictionJobRequest }
        output: CreateBatchPredictionJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CreateDetectorVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDetectorVersionRequest }
        output: CreateDetectorVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CreateList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateListRequest }
        output: CreateListResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CreateModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateModelRequest }
        output: CreateModelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CreateModelVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateModelVersionRequest }
        output: CreateModelVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CreateRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRuleRequest }
        output: CreateRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.CreateVariable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateVariableRequest }
        output: CreateVariableResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteBatchImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBatchImportJobRequest }
        output: DeleteBatchImportJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteBatchPredictionJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBatchPredictionJobRequest }
        output: DeleteBatchPredictionJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteDetector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDetectorRequest }
        output: DeleteDetectorResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteDetectorVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDetectorVersionRequest }
        output: DeleteDetectorVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteEntityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEntityTypeRequest }
        output: DeleteEntityTypeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteEvent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEventRequest }
        output: DeleteEventResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteEventType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEventTypeRequest }
        output: DeleteEventTypeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteEventsByEventType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEventsByEventTypeRequest }
        output: DeleteEventsByEventTypeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteExternalModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteExternalModelRequest }
        output: DeleteExternalModelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLabelRequest }
        output: DeleteLabelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteListRequest }
        output: DeleteListResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteModelRequest }
        output: DeleteModelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteModelVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteModelVersionRequest }
        output: DeleteModelVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteOutcome'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteOutcomeRequest }
        output: DeleteOutcomeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRuleRequest }
        output: DeleteRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DeleteVariable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteVariableRequest }
        output: DeleteVariableResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DescribeDetector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDetectorRequest }
        output: DescribeDetectorResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.DescribeModelVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeModelVersionsRequest }
        output: DescribeModelVersionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetBatchImportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBatchImportJobsRequest }
        output: GetBatchImportJobsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetBatchPredictionJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBatchPredictionJobsRequest }
        output: GetBatchPredictionJobsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDeleteEventsByEventTypeStatusRequest }
        output: GetDeleteEventsByEventTypeStatusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetDetectorVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDetectorVersionRequest }
        output: GetDetectorVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetDetectors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDetectorsRequest }
        output: GetDetectorsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetEntityTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEntityTypesRequest }
        output: GetEntityTypesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetEvent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEventRequest }
        output: GetEventResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetEventPrediction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEventPredictionRequest }
        output: GetEventPredictionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetEventPredictionMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEventPredictionMetadataRequest }
        output: GetEventPredictionMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetEventTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEventTypesRequest }
        output: GetEventTypesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetExternalModels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetExternalModelsRequest }
        output: GetExternalModelsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetKMSEncryptionKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetKMSEncryptionKeyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetLabels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLabelsRequest }
        output: GetLabelsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetListElements'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetListElementsRequest }
        output: GetListElementsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetListsMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetListsMetadataRequest }
        output: GetListsMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetModelVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetModelVersionRequest }
        output: GetModelVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetModels': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetModels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetModelsRequest }
        output: GetModelsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetOutcomes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOutcomesRequest }
        output: GetOutcomesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetRules': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRulesRequest }
        output: GetRulesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.GetVariables'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetVariablesRequest }
        output: GetVariablesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.ListEventPredictions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEventPredictionsRequest }
        output: ListEventPredictionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.PutDetector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutDetectorRequest }
        output: PutDetectorResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.PutEntityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutEntityTypeRequest }
        output: PutEntityTypeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.PutEventType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutEventTypeRequest }
        output: PutEventTypeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.PutExternalModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutExternalModelRequest }
        output: PutExternalModelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.PutKMSEncryptionKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutKMSEncryptionKeyRequest }
        output: PutKMSEncryptionKeyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.PutLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutLabelRequest }
        output: PutLabelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.PutOutcome'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutOutcomeRequest }
        output: PutOutcomeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.SendEvent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendEventRequest }
        output: SendEventResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateDetectorVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDetectorVersionRequest }
        output: UpdateDetectorVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDetectorVersionMetadataRequest }
        output: UpdateDetectorVersionMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateDetectorVersionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDetectorVersionStatusRequest }
        output: UpdateDetectorVersionStatusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateEventLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEventLabelRequest }
        output: UpdateEventLabelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateListRequest }
        output: UpdateListResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateModelRequest }
        output: UpdateModelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateModelVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateModelVersionRequest }
        output: UpdateModelVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateModelVersionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateModelVersionStatusRequest }
        output: UpdateModelVersionStatusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateRuleMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRuleMetadataRequest }
        output: UpdateRuleMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateRuleVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRuleVersionRequest }
        output: UpdateRuleVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHawksNestServiceFacade.UpdateVariable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateVariableRequest }
        output: UpdateVariableResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
