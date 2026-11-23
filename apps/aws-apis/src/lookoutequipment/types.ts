type CreateDatasetRequest = {
  DatasetName: {}
  DatasetSchema?: { InlineDataSchema?: {} | undefined } | undefined
  ServerSideKmsKeyId?: {} | undefined
  ClientToken: {}
  Tags?: {} | undefined
}
type CreateDatasetResponse = {
  DatasetName?: {} | undefined
  DatasetArn?: {} | undefined
  Status?: {} | undefined
}
type CreateInferenceSchedulerRequest = {
  ModelName: {}
  InferenceSchedulerName: {}
  DataDelayOffsetInMinutes?: {} | undefined
  DataUploadFrequency: {}
  DataInputConfiguration: {
    S3InputConfiguration?: { Bucket: {}; Prefix?: {} | undefined } | undefined
    InputTimeZoneOffset?: {} | undefined
    InferenceInputNameConfiguration?:
      | { TimestampFormat?: {} | undefined; ComponentTimestampDelimiter?: {} | undefined }
      | undefined
  }
  DataOutputConfiguration: {
    S3OutputConfiguration: { Bucket: {}; Prefix?: {} | undefined }
    KmsKeyId?: {} | undefined
  }
  RoleArn: {}
  ServerSideKmsKeyId?: {} | undefined
  ClientToken: {}
  Tags?: {} | undefined
}
type CreateInferenceSchedulerResponse = {
  InferenceSchedulerArn?: {} | undefined
  InferenceSchedulerName?: {} | undefined
  Status?: {} | undefined
}
type CreateLabelRequest = {
  LabelGroupName: {}
  StartTime: {}
  EndTime: {}
  Rating: {}
  FaultCode?: {} | undefined
  Notes?: {} | undefined
  Equipment?: {} | undefined
  ClientToken: {}
}
type CreateLabelResponse = { LabelId?: {} | undefined }
type CreateLabelGroupRequest = {
  LabelGroupName: {}
  FaultCodes?: {} | undefined
  ClientToken: {}
  Tags?: {} | undefined
}
type CreateLabelGroupResponse = { LabelGroupName?: {} | undefined; LabelGroupArn?: {} | undefined }
type CreateModelRequest = {
  ModelName: {}
  DatasetName: {}
  DatasetSchema?: { InlineDataSchema?: {} | undefined } | undefined
  LabelsInputConfiguration?:
    | {
        S3InputConfiguration?: { Bucket: {}; Prefix?: {} | undefined } | undefined
        LabelGroupName?: {} | undefined
      }
    | undefined
  ClientToken: {}
  TrainingDataStartTime?: {} | undefined
  TrainingDataEndTime?: {} | undefined
  EvaluationDataStartTime?: {} | undefined
  EvaluationDataEndTime?: {} | undefined
  RoleArn?: {} | undefined
  DataPreProcessingConfiguration?: { TargetSamplingRate?: {} | undefined } | undefined
  ServerSideKmsKeyId?: {} | undefined
  Tags?: {} | undefined
  OffCondition?: {} | undefined
}
type CreateModelResponse = { ModelArn?: {} | undefined; Status?: {} | undefined }
type DeleteDatasetRequest = { DatasetName: {} }
type DeleteInferenceSchedulerRequest = { InferenceSchedulerName: {} }
type DeleteLabelRequest = { LabelGroupName: {}; LabelId: {} }
type DeleteLabelGroupRequest = { LabelGroupName: {} }
type DeleteModelRequest = { ModelName: {} }
type DescribeDataIngestionJobRequest = { JobId: {} }
type IngestedFilesSummary = {
  TotalNumberOfFiles: {}
  IngestedNumberOfFiles: {}
  DiscardedFiles?: {} | undefined
}
type DescribeDataIngestionJobResponse = {
  JobId?: {} | undefined
  DatasetArn?: {} | undefined
  IngestionInputConfiguration?:
    | { S3InputConfiguration: { Bucket: {}; Prefix?: {} | undefined; KeyPattern?: {} | undefined } }
    | undefined
  RoleArn?: {} | undefined
  CreatedAt?: {} | undefined
  Status?: {} | undefined
  FailedReason?: {} | undefined
  DataQualitySummary?:
    | {
        InsufficientSensorData: {
          MissingCompleteSensorData: { AffectedSensorCount: {} }
          SensorsWithShortDateRange: { AffectedSensorCount: {} }
        }
        MissingSensorData: { AffectedSensorCount: {}; TotalNumberOfMissingValues: {} }
        InvalidSensorData: { AffectedSensorCount: {}; TotalNumberOfInvalidValues: {} }
        UnsupportedTimestamps: { TotalNumberOfUnsupportedTimestamps: {} }
        DuplicateTimestamps: { TotalNumberOfDuplicateTimestamps: {} }
      }
    | undefined
  IngestedFilesSummary?: IngestedFilesSummary | undefined
  StatusDetail?: {} | undefined
  IngestedDataSize?: {} | undefined
  DataStartTime?: {} | undefined
  DataEndTime?: {} | undefined
}
type DescribeDatasetRequest = { DatasetName: {} }
type DescribeDatasetResponse = {
  DatasetName?: {} | undefined
  DatasetArn?: {} | undefined
  CreatedAt?: {} | undefined
  LastUpdatedAt?: {} | undefined
  Status?: {} | undefined
  Schema?: {} | undefined
  ServerSideKmsKeyId?: {} | undefined
  IngestionInputConfiguration?:
    | { S3InputConfiguration: { Bucket: {}; Prefix?: {} | undefined; KeyPattern?: {} | undefined } }
    | undefined
  DataQualitySummary?:
    | {
        InsufficientSensorData: {
          MissingCompleteSensorData: { AffectedSensorCount: {} }
          SensorsWithShortDateRange: { AffectedSensorCount: {} }
        }
        MissingSensorData: { AffectedSensorCount: {}; TotalNumberOfMissingValues: {} }
        InvalidSensorData: { AffectedSensorCount: {}; TotalNumberOfInvalidValues: {} }
        UnsupportedTimestamps: { TotalNumberOfUnsupportedTimestamps: {} }
        DuplicateTimestamps: { TotalNumberOfDuplicateTimestamps: {} }
      }
    | undefined
  IngestedFilesSummary?:
    | { TotalNumberOfFiles: {}; IngestedNumberOfFiles: {}; DiscardedFiles?: {} | undefined }
    | undefined
  RoleArn?: {} | undefined
  DataStartTime?: {} | undefined
  DataEndTime?: {} | undefined
}
type DescribeInferenceSchedulerRequest = { InferenceSchedulerName: {} }
type DescribeInferenceSchedulerResponse = {
  ModelArn?: {} | undefined
  ModelName?: {} | undefined
  InferenceSchedulerName?: {} | undefined
  InferenceSchedulerArn?: {} | undefined
  Status?: {} | undefined
  DataDelayOffsetInMinutes?: {} | undefined
  DataUploadFrequency?: {} | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
  DataInputConfiguration?:
    | {
        S3InputConfiguration?: { Bucket: {}; Prefix?: {} | undefined } | undefined
        InputTimeZoneOffset?: {} | undefined
        InferenceInputNameConfiguration?:
          | { TimestampFormat?: {} | undefined; ComponentTimestampDelimiter?: {} | undefined }
          | undefined
      }
    | undefined
  DataOutputConfiguration?:
    | { S3OutputConfiguration: { Bucket: {}; Prefix?: {} | undefined }; KmsKeyId?: {} | undefined }
    | undefined
  RoleArn?: {} | undefined
  ServerSideKmsKeyId?: {} | undefined
  LatestInferenceResult?: {} | undefined
}
type DescribeLabelRequest = { LabelGroupName: {}; LabelId: {} }
type DescribeLabelResponse = {
  LabelGroupName?: {} | undefined
  LabelGroupArn?: {} | undefined
  LabelId?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Rating?: {} | undefined
  FaultCode?: {} | undefined
  Notes?: {} | undefined
  Equipment?: {} | undefined
  CreatedAt?: {} | undefined
}
type DescribeLabelGroupRequest = { LabelGroupName: {} }
type DescribeLabelGroupResponse = {
  LabelGroupName?: {} | undefined
  LabelGroupArn?: {} | undefined
  FaultCodes?: {} | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
}
type DescribeModelRequest = { ModelName: {} }
type DescribeModelResponse = {
  ModelName?: {} | undefined
  ModelArn?: {} | undefined
  DatasetName?: {} | undefined
  DatasetArn?: {} | undefined
  Schema?: {} | undefined
  LabelsInputConfiguration?:
    | {
        S3InputConfiguration?: { Bucket: {}; Prefix?: {} | undefined } | undefined
        LabelGroupName?: {} | undefined
      }
    | undefined
  TrainingDataStartTime?: {} | undefined
  TrainingDataEndTime?: {} | undefined
  EvaluationDataStartTime?: {} | undefined
  EvaluationDataEndTime?: {} | undefined
  RoleArn?: {} | undefined
  DataPreProcessingConfiguration?: { TargetSamplingRate?: {} | undefined } | undefined
  Status?: {} | undefined
  TrainingExecutionStartTime?: {} | undefined
  TrainingExecutionEndTime?: {} | undefined
  FailedReason?: {} | undefined
  ModelMetrics?: {} | undefined
  LastUpdatedTime?: {} | undefined
  CreatedAt?: {} | undefined
  ServerSideKmsKeyId?: {} | undefined
  OffCondition?: {} | undefined
}
type ListDataIngestionJobsRequest = {
  DatasetName?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Status?: {} | undefined
}
type ListDataIngestionJobsResponse = {
  NextToken?: {} | undefined
  DataIngestionJobSummaries?: {} | undefined
}
type ListDatasetsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  DatasetNameBeginsWith?: {} | undefined
}
type ListDatasetsResponse = { NextToken?: {} | undefined; DatasetSummaries?: {} | undefined }
type ListInferenceEventsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  InferenceSchedulerName: {}
  IntervalStartTime: {}
  IntervalEndTime: {}
}
type ListInferenceEventsResponse = {
  NextToken?: {} | undefined
  InferenceEventSummaries?: {} | undefined
}
type ListInferenceExecutionsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  InferenceSchedulerName: {}
  DataStartTimeAfter?: {} | undefined
  DataEndTimeBefore?: {} | undefined
  Status?: {} | undefined
}
type ListInferenceExecutionsResponse = {
  NextToken?: {} | undefined
  InferenceExecutionSummaries?: {} | undefined
}
type ListInferenceSchedulersRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  InferenceSchedulerNameBeginsWith?: {} | undefined
  ModelName?: {} | undefined
  Status?: {} | undefined
}
type ListInferenceSchedulersResponse = {
  NextToken?: {} | undefined
  InferenceSchedulerSummaries?: {} | undefined
}
type ListLabelGroupsRequest = {
  LabelGroupNameBeginsWith?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListLabelGroupsResponse = { NextToken?: {} | undefined; LabelGroupSummaries?: {} | undefined }
type ListLabelsRequest = {
  LabelGroupName: {}
  IntervalStartTime?: {} | undefined
  IntervalEndTime?: {} | undefined
  FaultCode?: {} | undefined
  Equipment?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListLabelsResponse = { NextToken?: {} | undefined; LabelSummaries?: {} | undefined }
type ListModelsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Status?: {} | undefined
  ModelNameBeginsWith?: {} | undefined
  DatasetNameBeginsWith?: {} | undefined
}
type ListModelsResponse = { NextToken?: {} | undefined; ModelSummaries?: {} | undefined }
type ListSensorStatisticsRequest = {
  DatasetName: {}
  IngestionJobId?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListSensorStatisticsResponse = {
  SensorStatisticsSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type StartDataIngestionJobRequest = {
  DatasetName: {}
  IngestionInputConfiguration: {
    S3InputConfiguration: { Bucket: {}; Prefix?: {} | undefined; KeyPattern?: {} | undefined }
  }
  RoleArn: {}
  ClientToken: {}
}
type StartDataIngestionJobResponse = { JobId?: {} | undefined; Status?: {} | undefined }
type StartInferenceSchedulerRequest = { InferenceSchedulerName: {} }
type StartInferenceSchedulerResponse = {
  ModelArn?: {} | undefined
  ModelName?: {} | undefined
  InferenceSchedulerName?: {} | undefined
  InferenceSchedulerArn?: {} | undefined
  Status?: {} | undefined
}
type StopInferenceSchedulerRequest = { InferenceSchedulerName: {} }
type StopInferenceSchedulerResponse = {
  ModelArn?: {} | undefined
  ModelName?: {} | undefined
  InferenceSchedulerName?: {} | undefined
  InferenceSchedulerArn?: {} | undefined
  Status?: {} | undefined
}
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateInferenceSchedulerRequest = {
  InferenceSchedulerName: {}
  DataDelayOffsetInMinutes?: {} | undefined
  DataUploadFrequency?: {} | undefined
  DataInputConfiguration?:
    | {
        S3InputConfiguration?: { Bucket: {}; Prefix?: {} | undefined } | undefined
        InputTimeZoneOffset?: {} | undefined
        InferenceInputNameConfiguration?:
          | { TimestampFormat?: {} | undefined; ComponentTimestampDelimiter?: {} | undefined }
          | undefined
      }
    | undefined
  DataOutputConfiguration?:
    | { S3OutputConfiguration: { Bucket: {}; Prefix?: {} | undefined }; KmsKeyId?: {} | undefined }
    | undefined
  RoleArn?: {} | undefined
}
type UpdateLabelGroupRequest = { LabelGroupName: {}; FaultCodes?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.CreateDataset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatasetRequest }
        output: CreateDatasetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.CreateInferenceScheduler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateInferenceSchedulerRequest }
        output: CreateInferenceSchedulerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.CreateLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLabelRequest }
        output: CreateLabelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.CreateLabelGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLabelGroupRequest }
        output: CreateLabelGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.CreateModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateModelRequest }
        output: CreateModelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DeleteDataset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDatasetRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteInferenceSchedulerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DeleteLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLabelRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DeleteLabelGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLabelGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DeleteModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteModelRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDataIngestionJobRequest }
        output: DescribeDataIngestionJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DescribeDataset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDatasetRequest }
        output: DescribeDatasetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInferenceSchedulerRequest }
        output: DescribeInferenceSchedulerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DescribeLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLabelRequest }
        output: DescribeLabelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DescribeLabelGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLabelGroupRequest }
        output: DescribeLabelGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.DescribeModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeModelRequest }
        output: DescribeModelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListDataIngestionJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataIngestionJobsRequest }
        output: ListDataIngestionJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListDatasets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatasetsRequest }
        output: ListDatasetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListInferenceEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInferenceEventsRequest }
        output: ListInferenceEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListInferenceExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInferenceExecutionsRequest }
        output: ListInferenceExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListInferenceSchedulers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInferenceSchedulersRequest }
        output: ListInferenceSchedulersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListLabelGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLabelGroupsRequest }
        output: ListLabelGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListLabels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLabelsRequest }
        output: ListLabelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListModels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelsRequest }
        output: ListModelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListSensorStatistics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSensorStatisticsRequest }
        output: ListSensorStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.StartDataIngestionJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDataIngestionJobRequest }
        output: StartDataIngestionJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.StartInferenceScheduler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartInferenceSchedulerRequest }
        output: StartInferenceSchedulerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.StopInferenceScheduler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopInferenceSchedulerRequest }
        output: StopInferenceSchedulerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateInferenceSchedulerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLookoutEquipmentFrontendService.UpdateLabelGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateLabelGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
