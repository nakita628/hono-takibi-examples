type BatchDetectDominantLanguageRequest = { TextList: {} }
type BatchDetectDominantLanguageResponse = { ResultList: {}; ErrorList: {} }
type InvalidRequestException = { [x: string]: unknown }
type TextSizeLimitExceededException = { [x: string]: unknown }
type BatchSizeLimitExceededException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type BatchDetectEntitiesRequest = { TextList: {}; LanguageCode: {} }
type BatchDetectEntitiesResponse = { ResultList: {}; ErrorList: {} }
type UnsupportedLanguageException = { [x: string]: unknown }
type BatchDetectKeyPhrasesRequest = { TextList: {}; LanguageCode: {} }
type BatchDetectKeyPhrasesResponse = { ResultList: {}; ErrorList: {} }
type BatchDetectSentimentRequest = { TextList: {}; LanguageCode: {} }
type BatchDetectSentimentResponse = { ResultList: {}; ErrorList: {} }
type BatchDetectSyntaxRequest = { TextList: {}; LanguageCode: {} }
type BatchDetectSyntaxResponse = { ResultList: {}; ErrorList: {} }
type BatchDetectTargetedSentimentRequest = { TextList: {}; LanguageCode: {} }
type BatchDetectTargetedSentimentResponse = { ResultList: {}; ErrorList: {} }
type ClassifyDocumentRequest = {
  Text?: {} | undefined
  EndpointArn: {}
  Bytes?: {} | undefined
  DocumentReaderConfig?:
    | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
    | undefined
}
type ClassifyDocumentResponse = {
  Classes?: {} | undefined
  Labels?: {} | undefined
  DocumentMetadata?: { Pages?: {} | undefined; ExtractedCharacters?: {} | undefined } | undefined
  DocumentType?: {} | undefined
  Errors?: {} | undefined
  Warnings?: {} | undefined
}
type ResourceUnavailableException = { [x: string]: unknown }
type ContainsPiiEntitiesRequest = { Text: {}; LanguageCode: {} }
type ContainsPiiEntitiesResponse = { Labels?: {} | undefined }
type CreateDatasetRequest = {
  FlywheelArn: {}
  DatasetName: {}
  DatasetType?: {} | undefined
  Description?: {} | undefined
  InputDataConfig: {
    AugmentedManifests?: {} | undefined
    DataFormat?: {} | undefined
    DocumentClassifierInputDataConfig?: { S3Uri: {}; LabelDelimiter?: {} | undefined } | undefined
    EntityRecognizerInputDataConfig?:
      | {
          Annotations?: { S3Uri: {} } | undefined
          Documents: { S3Uri: {}; InputFormat?: {} | undefined }
          EntityList?: { S3Uri: {} } | undefined
        }
      | undefined
  }
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateDatasetResponse = { DatasetArn?: {} | undefined }
type ResourceInUseException = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type ResourceLimitExceededException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type DocumentReaderConfig = {
  DocumentReadAction: {}
  DocumentReadMode?: {} | undefined
  FeatureTypes?: {} | undefined
}
type CreateDocumentClassifierRequest = {
  DocumentClassifierName: {}
  VersionName?: {} | undefined
  DataAccessRoleArn: {}
  Tags?: {} | undefined
  InputDataConfig: {
    DataFormat?: {} | undefined
    S3Uri?: {} | undefined
    TestS3Uri?: {} | undefined
    LabelDelimiter?: {} | undefined
    AugmentedManifests?: {} | undefined
    DocumentType?: {} | undefined
    Documents?: { S3Uri: {}; TestS3Uri?: {} | undefined } | undefined
    DocumentReaderConfig?: DocumentReaderConfig | undefined
  }
  OutputDataConfig?:
    | { S3Uri?: {} | undefined; KmsKeyId?: {} | undefined; FlywheelStatsS3Prefix?: {} | undefined }
    | undefined
  ClientRequestToken?: {} | undefined
  LanguageCode: {}
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  Mode?: {} | undefined
  ModelKmsKeyId?: {} | undefined
  ModelPolicy?: {} | undefined
}
type CreateDocumentClassifierResponse = { DocumentClassifierArn?: {} | undefined }
type KmsKeyValidationException = { [x: string]: unknown }
type CreateEndpointRequest = {
  EndpointName: {}
  ModelArn?: {} | undefined
  DesiredInferenceUnits: {}
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
  DataAccessRoleArn?: {} | undefined
  FlywheelArn?: {} | undefined
}
type CreateEndpointResponse = { EndpointArn?: {} | undefined; ModelArn?: {} | undefined }
type CreateEntityRecognizerRequest = {
  RecognizerName: {}
  VersionName?: {} | undefined
  DataAccessRoleArn: {}
  Tags?: {} | undefined
  InputDataConfig: {
    DataFormat?: {} | undefined
    EntityTypes: {}
    Documents?: { S3Uri: {}; TestS3Uri?: {} | undefined; InputFormat?: {} | undefined } | undefined
    Annotations?: { S3Uri: {}; TestS3Uri?: {} | undefined } | undefined
    EntityList?: { S3Uri: {} } | undefined
    AugmentedManifests?: {} | undefined
  }
  ClientRequestToken?: {} | undefined
  LanguageCode: {}
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  ModelKmsKeyId?: {} | undefined
  ModelPolicy?: {} | undefined
}
type CreateEntityRecognizerResponse = { EntityRecognizerArn?: {} | undefined }
type VpcConfig = { SecurityGroupIds: {}; Subnets: {} }
type CreateFlywheelRequest = {
  FlywheelName: {}
  ActiveModelArn?: {} | undefined
  DataAccessRoleArn: {}
  TaskConfig?:
    | {
        LanguageCode: {}
        DocumentClassificationConfig?: { Mode: {}; Labels?: {} | undefined } | undefined
        EntityRecognitionConfig?: { EntityTypes: {} } | undefined
      }
    | undefined
  ModelType?: {} | undefined
  DataLakeS3Uri: {}
  DataSecurityConfig?:
    | {
        ModelKmsKeyId?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        DataLakeKmsKeyId?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateFlywheelResponse = { FlywheelArn?: {} | undefined; ActiveModelArn?: {} | undefined }
type DeleteDocumentClassifierRequest = { DocumentClassifierArn: {} }
type DeleteDocumentClassifierResponse = { [x: string]: unknown }
type DeleteEndpointRequest = { EndpointArn: {} }
type DeleteEndpointResponse = { [x: string]: unknown }
type DeleteEntityRecognizerRequest = { EntityRecognizerArn: {} }
type DeleteEntityRecognizerResponse = { [x: string]: unknown }
type DeleteFlywheelRequest = { FlywheelArn: {} }
type DeleteFlywheelResponse = { [x: string]: unknown }
type DeleteResourcePolicyRequest = { ResourceArn: {}; PolicyRevisionId?: {} | undefined }
type DeleteResourcePolicyResponse = { [x: string]: unknown }
type DescribeDatasetRequest = { DatasetArn: {} }
type DescribeDatasetResponse = {
  DatasetProperties?:
    | {
        DatasetArn?: {} | undefined
        DatasetName?: {} | undefined
        DatasetType?: {} | undefined
        DatasetS3Uri?: {} | undefined
        Description?: {} | undefined
        Status?: {} | undefined
        Message?: {} | undefined
        NumberOfDocuments?: {} | undefined
        CreationTime?: {} | undefined
        EndTime?: {} | undefined
      }
    | undefined
}
type DescribeDocumentClassificationJobRequest = { JobId: {} }
type DescribeDocumentClassificationJobResponse = {
  DocumentClassificationJobProperties?:
    | {
        JobId?: {} | undefined
        JobArn?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        DocumentClassifierArn?: {} | undefined
        InputDataConfig?:
          | {
              S3Uri: {}
              InputFormat?: {} | undefined
              DocumentReaderConfig?:
                | {
                    DocumentReadAction: {}
                    DocumentReadMode?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
            }
          | undefined
        OutputDataConfig?: { S3Uri: {}; KmsKeyId?: {} | undefined } | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
        FlywheelArn?: {} | undefined
      }
    | undefined
}
type JobNotFoundException = { [x: string]: unknown }
type DescribeDocumentClassifierRequest = { DocumentClassifierArn: {} }
type DescribeDocumentClassifierResponse = {
  DocumentClassifierProperties?:
    | {
        DocumentClassifierArn?: {} | undefined
        LanguageCode?: {} | undefined
        Status?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        TrainingStartTime?: {} | undefined
        TrainingEndTime?: {} | undefined
        InputDataConfig?:
          | {
              DataFormat?: {} | undefined
              S3Uri?: {} | undefined
              TestS3Uri?: {} | undefined
              LabelDelimiter?: {} | undefined
              AugmentedManifests?: {} | undefined
              DocumentType?: {} | undefined
              Documents?: { S3Uri: {}; TestS3Uri?: {} | undefined } | undefined
              DocumentReaderConfig?: DocumentReaderConfig | undefined
            }
          | undefined
        OutputDataConfig?:
          | {
              S3Uri?: {} | undefined
              KmsKeyId?: {} | undefined
              FlywheelStatsS3Prefix?: {} | undefined
            }
          | undefined
        ClassifierMetadata?:
          | {
              NumberOfLabels?: {} | undefined
              NumberOfTrainedDocuments?: {} | undefined
              NumberOfTestDocuments?: {} | undefined
              EvaluationMetrics?:
                | {
                    Accuracy?: {} | undefined
                    Precision?: {} | undefined
                    Recall?: {} | undefined
                    F1Score?: {} | undefined
                    MicroPrecision?: {} | undefined
                    MicroRecall?: {} | undefined
                    MicroF1Score?: {} | undefined
                    HammingLoss?: {} | undefined
                  }
                | undefined
            }
          | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
        Mode?: {} | undefined
        ModelKmsKeyId?: {} | undefined
        VersionName?: {} | undefined
        SourceModelArn?: {} | undefined
        FlywheelArn?: {} | undefined
      }
    | undefined
}
type DescribeDominantLanguageDetectionJobRequest = { JobId: {} }
type DescribeDominantLanguageDetectionJobResponse = {
  DominantLanguageDetectionJobProperties?:
    | {
        JobId?: {} | undefined
        JobArn?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        InputDataConfig?:
          | {
              S3Uri: {}
              InputFormat?: {} | undefined
              DocumentReaderConfig?:
                | {
                    DocumentReadAction: {}
                    DocumentReadMode?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
            }
          | undefined
        OutputDataConfig?: { S3Uri: {}; KmsKeyId?: {} | undefined } | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
      }
    | undefined
}
type DescribeEndpointRequest = { EndpointArn: {} }
type DescribeEndpointResponse = {
  EndpointProperties?:
    | {
        EndpointArn?: {} | undefined
        Status?: {} | undefined
        Message?: {} | undefined
        ModelArn?: {} | undefined
        DesiredModelArn?: {} | undefined
        DesiredInferenceUnits?: {} | undefined
        CurrentInferenceUnits?: {} | undefined
        CreationTime?: {} | undefined
        LastModifiedTime?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        DesiredDataAccessRoleArn?: {} | undefined
        FlywheelArn?: {} | undefined
      }
    | undefined
}
type DescribeEntitiesDetectionJobRequest = { JobId: {} }
type DescribeEntitiesDetectionJobResponse = {
  EntitiesDetectionJobProperties?:
    | {
        JobId?: {} | undefined
        JobArn?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        EntityRecognizerArn?: {} | undefined
        InputDataConfig?:
          | {
              S3Uri: {}
              InputFormat?: {} | undefined
              DocumentReaderConfig?:
                | {
                    DocumentReadAction: {}
                    DocumentReadMode?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
            }
          | undefined
        OutputDataConfig?: { S3Uri: {}; KmsKeyId?: {} | undefined } | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
        FlywheelArn?: {} | undefined
      }
    | undefined
}
type DescribeEntityRecognizerRequest = { EntityRecognizerArn: {} }
type DescribeEntityRecognizerResponse = {
  EntityRecognizerProperties?:
    | {
        EntityRecognizerArn?: {} | undefined
        LanguageCode?: {} | undefined
        Status?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        TrainingStartTime?: {} | undefined
        TrainingEndTime?: {} | undefined
        InputDataConfig?:
          | {
              DataFormat?: {} | undefined
              EntityTypes: {}
              Documents?:
                | { S3Uri: {}; TestS3Uri?: {} | undefined; InputFormat?: {} | undefined }
                | undefined
              Annotations?: { S3Uri: {}; TestS3Uri?: {} | undefined } | undefined
              EntityList?: { S3Uri: {} } | undefined
              AugmentedManifests?: {} | undefined
            }
          | undefined
        RecognizerMetadata?:
          | {
              NumberOfTrainedDocuments?: {} | undefined
              NumberOfTestDocuments?: {} | undefined
              EvaluationMetrics?:
                | { Precision?: {} | undefined; Recall?: {} | undefined; F1Score?: {} | undefined }
                | undefined
              EntityTypes?: {} | undefined
            }
          | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
        ModelKmsKeyId?: {} | undefined
        VersionName?: {} | undefined
        SourceModelArn?: {} | undefined
        FlywheelArn?: {} | undefined
        OutputDataConfig?: { FlywheelStatsS3Prefix?: {} | undefined } | undefined
      }
    | undefined
}
type DescribeEventsDetectionJobRequest = { JobId: {} }
type DescribeEventsDetectionJobResponse = {
  EventsDetectionJobProperties?:
    | {
        JobId?: {} | undefined
        JobArn?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        InputDataConfig?:
          | {
              S3Uri: {}
              InputFormat?: {} | undefined
              DocumentReaderConfig?:
                | {
                    DocumentReadAction: {}
                    DocumentReadMode?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
            }
          | undefined
        OutputDataConfig?: { S3Uri: {}; KmsKeyId?: {} | undefined } | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        TargetEventTypes?: {} | undefined
      }
    | undefined
}
type DescribeFlywheelRequest = { FlywheelArn: {} }
type DescribeFlywheelResponse = {
  FlywheelProperties?:
    | {
        FlywheelArn?: {} | undefined
        ActiveModelArn?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        TaskConfig?:
          | {
              LanguageCode: {}
              DocumentClassificationConfig?: { Mode: {}; Labels?: {} | undefined } | undefined
              EntityRecognitionConfig?: { EntityTypes: {} } | undefined
            }
          | undefined
        DataLakeS3Uri?: {} | undefined
        DataSecurityConfig?:
          | {
              ModelKmsKeyId?: {} | undefined
              VolumeKmsKeyId?: {} | undefined
              DataLakeKmsKeyId?: {} | undefined
              VpcConfig?: VpcConfig | undefined
            }
          | undefined
        Status?: {} | undefined
        ModelType?: {} | undefined
        Message?: {} | undefined
        CreationTime?: {} | undefined
        LastModifiedTime?: {} | undefined
        LatestFlywheelIteration?: {} | undefined
      }
    | undefined
}
type DescribeFlywheelIterationRequest = { FlywheelArn: {}; FlywheelIterationId: {} }
type FlywheelModelEvaluationMetrics = {
  AverageF1Score?: {} | undefined
  AveragePrecision?: {} | undefined
  AverageRecall?: {} | undefined
  AverageAccuracy?: {} | undefined
}
type DescribeFlywheelIterationResponse = {
  FlywheelIterationProperties?:
    | {
        FlywheelArn?: {} | undefined
        FlywheelIterationId?: {} | undefined
        CreationTime?: {} | undefined
        EndTime?: {} | undefined
        Status?: {} | undefined
        Message?: {} | undefined
        EvaluatedModelArn?: {} | undefined
        EvaluatedModelMetrics?: FlywheelModelEvaluationMetrics | undefined
        TrainedModelArn?: {} | undefined
        TrainedModelMetrics?:
          | {
              AverageF1Score?: {} | undefined
              AveragePrecision?: {} | undefined
              AverageRecall?: {} | undefined
              AverageAccuracy?: {} | undefined
            }
          | undefined
        EvaluationManifestS3Prefix?: {} | undefined
      }
    | undefined
}
type DescribeKeyPhrasesDetectionJobRequest = { JobId: {} }
type DescribeKeyPhrasesDetectionJobResponse = {
  KeyPhrasesDetectionJobProperties?:
    | {
        JobId?: {} | undefined
        JobArn?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        InputDataConfig?:
          | {
              S3Uri: {}
              InputFormat?: {} | undefined
              DocumentReaderConfig?:
                | {
                    DocumentReadAction: {}
                    DocumentReadMode?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
            }
          | undefined
        OutputDataConfig?: { S3Uri: {}; KmsKeyId?: {} | undefined } | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
      }
    | undefined
}
type DescribePiiEntitiesDetectionJobRequest = { JobId: {} }
type PiiEntitiesDetectionJobProperties = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobName?: {} | undefined
  JobStatus?: {} | undefined
  Message?: {} | undefined
  SubmitTime?: {} | undefined
  EndTime?: {} | undefined
  InputDataConfig?:
    | {
        S3Uri: {}
        InputFormat?: {} | undefined
        DocumentReaderConfig?:
          | {
              DocumentReadAction: {}
              DocumentReadMode?: {} | undefined
              FeatureTypes?: {} | undefined
            }
          | undefined
      }
    | undefined
  OutputDataConfig?: { S3Uri: {}; KmsKeyId?: {} | undefined } | undefined
  RedactionConfig?:
    | { PiiEntityTypes?: {} | undefined; MaskMode?: {} | undefined; MaskCharacter?: {} | undefined }
    | undefined
  LanguageCode?: {} | undefined
  DataAccessRoleArn?: {} | undefined
  Mode?: {} | undefined
}
type DescribePiiEntitiesDetectionJobResponse = {
  PiiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties | undefined
}
type DescribeResourcePolicyRequest = { ResourceArn: {} }
type DescribeResourcePolicyResponse = {
  ResourcePolicy?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  PolicyRevisionId?: {} | undefined
}
type DescribeSentimentDetectionJobRequest = { JobId: {} }
type DescribeSentimentDetectionJobResponse = {
  SentimentDetectionJobProperties?:
    | {
        JobId?: {} | undefined
        JobArn?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        InputDataConfig?:
          | {
              S3Uri: {}
              InputFormat?: {} | undefined
              DocumentReaderConfig?:
                | {
                    DocumentReadAction: {}
                    DocumentReadMode?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
            }
          | undefined
        OutputDataConfig?: { S3Uri: {}; KmsKeyId?: {} | undefined } | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
      }
    | undefined
}
type DescribeTargetedSentimentDetectionJobRequest = { JobId: {} }
type InputDataConfig = {
  S3Uri: {}
  InputFormat?: {} | undefined
  DocumentReaderConfig?:
    | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
    | undefined
}
type OutputDataConfig = { S3Uri: {}; KmsKeyId?: {} | undefined }
type DescribeTargetedSentimentDetectionJobResponse = {
  TargetedSentimentDetectionJobProperties?:
    | {
        JobId?: {} | undefined
        JobArn?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        InputDataConfig?: InputDataConfig | undefined
        OutputDataConfig?: OutputDataConfig | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
}
type DescribeTopicsDetectionJobRequest = { JobId: {} }
type DescribeTopicsDetectionJobResponse = {
  TopicsDetectionJobProperties?:
    | {
        JobId?: {} | undefined
        JobArn?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        InputDataConfig?:
          | {
              S3Uri: {}
              InputFormat?: {} | undefined
              DocumentReaderConfig?:
                | {
                    DocumentReadAction: {}
                    DocumentReadMode?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
            }
          | undefined
        OutputDataConfig?: { S3Uri: {}; KmsKeyId?: {} | undefined } | undefined
        NumberOfTopics?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
      }
    | undefined
}
type DetectDominantLanguageRequest = { Text: {} }
type DetectDominantLanguageResponse = { Languages?: {} | undefined }
type DetectEntitiesRequest = {
  Text?: {} | undefined
  LanguageCode?: {} | undefined
  EndpointArn?: {} | undefined
  Bytes?: {} | undefined
  DocumentReaderConfig?:
    | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
    | undefined
}
type DetectEntitiesResponse = {
  Entities?: {} | undefined
  DocumentMetadata?: { Pages?: {} | undefined; ExtractedCharacters?: {} | undefined } | undefined
  DocumentType?: {} | undefined
  Blocks?: {} | undefined
  Errors?: {} | undefined
}
type DetectKeyPhrasesRequest = { Text: {}; LanguageCode: {} }
type DetectKeyPhrasesResponse = { KeyPhrases?: {} | undefined }
type DetectPiiEntitiesRequest = { Text: {}; LanguageCode: {} }
type DetectPiiEntitiesResponse = { Entities?: {} | undefined }
type DetectSentimentRequest = { Text: {}; LanguageCode: {} }
type DetectSentimentResponse = {
  Sentiment?: {} | undefined
  SentimentScore?:
    | {
        Positive?: {} | undefined
        Negative?: {} | undefined
        Neutral?: {} | undefined
        Mixed?: {} | undefined
      }
    | undefined
}
type DetectSyntaxRequest = { Text: {}; LanguageCode: {} }
type DetectSyntaxResponse = { SyntaxTokens?: {} | undefined }
type DetectTargetedSentimentRequest = { Text: {}; LanguageCode: {} }
type DetectTargetedSentimentResponse = { Entities?: {} | undefined }
type ImportModelRequest = {
  SourceModelArn: {}
  ModelName?: {} | undefined
  VersionName?: {} | undefined
  ModelKmsKeyId?: {} | undefined
  DataAccessRoleArn?: {} | undefined
  Tags?: {} | undefined
}
type ImportModelResponse = { ModelArn?: {} | undefined }
type ListDatasetsRequest = {
  FlywheelArn?: {} | undefined
  Filter?:
    | {
        Status?: {} | undefined
        DatasetType?: {} | undefined
        CreationTimeAfter?: {} | undefined
        CreationTimeBefore?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDatasetsResponse = { DatasetPropertiesList?: {} | undefined; NextToken?: {} | undefined }
type InvalidFilterException = { [x: string]: unknown }
type ListDocumentClassificationJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDocumentClassificationJobsResponse = {
  DocumentClassificationJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListDocumentClassifierSummariesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDocumentClassifierSummariesResponse = {
  DocumentClassifierSummariesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListDocumentClassifiersRequest = {
  Filter?:
    | {
        Status?: {} | undefined
        DocumentClassifierName?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDocumentClassifiersResponse = {
  DocumentClassifierPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListDominantLanguageDetectionJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDominantLanguageDetectionJobsResponse = {
  DominantLanguageDetectionJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListEndpointsRequest = {
  Filter?:
    | {
        ModelArn?: {} | undefined
        Status?: {} | undefined
        CreationTimeBefore?: {} | undefined
        CreationTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListEndpointsResponse = { EndpointPropertiesList?: {} | undefined; NextToken?: {} | undefined }
type ListEntitiesDetectionJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListEntitiesDetectionJobsResponse = {
  EntitiesDetectionJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListEntityRecognizerSummariesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListEntityRecognizerSummariesResponse = {
  EntityRecognizerSummariesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListEntityRecognizersRequest = {
  Filter?:
    | {
        Status?: {} | undefined
        RecognizerName?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListEntityRecognizersResponse = {
  EntityRecognizerPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListEventsDetectionJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListEventsDetectionJobsResponse = {
  EventsDetectionJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListFlywheelIterationHistoryRequest = {
  FlywheelArn: {}
  Filter?: { CreationTimeAfter?: {} | undefined; CreationTimeBefore?: {} | undefined } | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListFlywheelIterationHistoryResponse = {
  FlywheelIterationPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListFlywheelsRequest = {
  Filter?:
    | {
        Status?: {} | undefined
        CreationTimeAfter?: {} | undefined
        CreationTimeBefore?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListFlywheelsResponse = { FlywheelSummaryList?: {} | undefined; NextToken?: {} | undefined }
type ListKeyPhrasesDetectionJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListKeyPhrasesDetectionJobsResponse = {
  KeyPhrasesDetectionJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListPiiEntitiesDetectionJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPiiEntitiesDetectionJobsResponse = {
  PiiEntitiesDetectionJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListSentimentDetectionJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListSentimentDetectionJobsResponse = {
  SentimentDetectionJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { ResourceArn?: {} | undefined; Tags?: {} | undefined }
type ListTargetedSentimentDetectionJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTargetedSentimentDetectionJobsResponse = {
  TargetedSentimentDetectionJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListTopicsDetectionJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmitTimeBefore?: {} | undefined
        SubmitTimeAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTopicsDetectionJobsResponse = {
  TopicsDetectionJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type PutResourcePolicyRequest = {
  ResourceArn: {}
  ResourcePolicy: {}
  PolicyRevisionId?: {} | undefined
}
type PutResourcePolicyResponse = { PolicyRevisionId?: {} | undefined }
type StartDocumentClassificationJobRequest = {
  JobName?: {} | undefined
  DocumentClassifierArn?: {} | undefined
  InputDataConfig: {
    S3Uri: {}
    InputFormat?: {} | undefined
    DocumentReaderConfig?:
      | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
      | undefined
  }
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  DataAccessRoleArn: {}
  ClientRequestToken?: {} | undefined
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  Tags?: {} | undefined
  FlywheelArn?: {} | undefined
}
type StartDocumentClassificationJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
  DocumentClassifierArn?: {} | undefined
}
type StartDominantLanguageDetectionJobRequest = {
  InputDataConfig: {
    S3Uri: {}
    InputFormat?: {} | undefined
    DocumentReaderConfig?:
      | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
      | undefined
  }
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  ClientRequestToken?: {} | undefined
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  Tags?: {} | undefined
}
type StartDominantLanguageDetectionJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
}
type StartEntitiesDetectionJobRequest = {
  InputDataConfig: {
    S3Uri: {}
    InputFormat?: {} | undefined
    DocumentReaderConfig?:
      | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
      | undefined
  }
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  EntityRecognizerArn?: {} | undefined
  LanguageCode: {}
  ClientRequestToken?: {} | undefined
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  Tags?: {} | undefined
  FlywheelArn?: {} | undefined
}
type StartEntitiesDetectionJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
  EntityRecognizerArn?: {} | undefined
}
type StartEventsDetectionJobRequest = {
  InputDataConfig: {
    S3Uri: {}
    InputFormat?: {} | undefined
    DocumentReaderConfig?:
      | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
      | undefined
  }
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  LanguageCode: {}
  ClientRequestToken?: {} | undefined
  TargetEventTypes: {}
  Tags?: {} | undefined
}
type StartEventsDetectionJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
}
type StartFlywheelIterationRequest = { FlywheelArn: {}; ClientRequestToken?: {} | undefined }
type StartFlywheelIterationResponse = {
  FlywheelArn?: {} | undefined
  FlywheelIterationId?: {} | undefined
}
type StartKeyPhrasesDetectionJobRequest = {
  InputDataConfig: {
    S3Uri: {}
    InputFormat?: {} | undefined
    DocumentReaderConfig?:
      | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
      | undefined
  }
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  LanguageCode: {}
  ClientRequestToken?: {} | undefined
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  Tags?: {} | undefined
}
type StartKeyPhrasesDetectionJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
}
type StartPiiEntitiesDetectionJobRequest = {
  InputDataConfig: {
    S3Uri: {}
    InputFormat?: {} | undefined
    DocumentReaderConfig?:
      | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
      | undefined
  }
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  Mode: {}
  RedactionConfig?:
    | { PiiEntityTypes?: {} | undefined; MaskMode?: {} | undefined; MaskCharacter?: {} | undefined }
    | undefined
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  LanguageCode: {}
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type StartPiiEntitiesDetectionJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
}
type StartSentimentDetectionJobRequest = {
  InputDataConfig: {
    S3Uri: {}
    InputFormat?: {} | undefined
    DocumentReaderConfig?:
      | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
      | undefined
  }
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  LanguageCode: {}
  ClientRequestToken?: {} | undefined
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  Tags?: {} | undefined
}
type StartSentimentDetectionJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
}
type StartTargetedSentimentDetectionJobRequest = {
  InputDataConfig: InputDataConfig
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  LanguageCode: {}
  ClientRequestToken?: {} | undefined
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: VpcConfig | undefined
  Tags?: {} | undefined
}
type StartTargetedSentimentDetectionJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
}
type StartTopicsDetectionJobRequest = {
  InputDataConfig: {
    S3Uri: {}
    InputFormat?: {} | undefined
    DocumentReaderConfig?:
      | { DocumentReadAction: {}; DocumentReadMode?: {} | undefined; FeatureTypes?: {} | undefined }
      | undefined
  }
  OutputDataConfig: { S3Uri: {}; KmsKeyId?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  NumberOfTopics?: {} | undefined
  ClientRequestToken?: {} | undefined
  VolumeKmsKeyId?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  Tags?: {} | undefined
}
type StartTopicsDetectionJobResponse = {
  JobId?: {} | undefined
  JobArn?: {} | undefined
  JobStatus?: {} | undefined
}
type StopDominantLanguageDetectionJobRequest = { JobId: {} }
type StopDominantLanguageDetectionJobResponse = {
  JobId?: {} | undefined
  JobStatus?: {} | undefined
}
type StopEntitiesDetectionJobRequest = { JobId: {} }
type StopEntitiesDetectionJobResponse = { JobId?: {} | undefined; JobStatus?: {} | undefined }
type StopEventsDetectionJobRequest = { JobId: {} }
type StopEventsDetectionJobResponse = { JobId?: {} | undefined; JobStatus?: {} | undefined }
type StopKeyPhrasesDetectionJobRequest = { JobId: {} }
type StopKeyPhrasesDetectionJobResponse = { JobId?: {} | undefined; JobStatus?: {} | undefined }
type StopPiiEntitiesDetectionJobRequest = { JobId: {} }
type StopPiiEntitiesDetectionJobResponse = { JobId?: {} | undefined; JobStatus?: {} | undefined }
type StopSentimentDetectionJobRequest = { JobId: {} }
type StopSentimentDetectionJobResponse = { JobId?: {} | undefined; JobStatus?: {} | undefined }
type StopTargetedSentimentDetectionJobRequest = { JobId: {} }
type StopTargetedSentimentDetectionJobResponse = {
  JobId?: {} | undefined
  JobStatus?: {} | undefined
}
type StopTrainingDocumentClassifierRequest = { DocumentClassifierArn: {} }
type StopTrainingDocumentClassifierResponse = { [x: string]: unknown }
type StopTrainingEntityRecognizerRequest = { EntityRecognizerArn: {} }
type StopTrainingEntityRecognizerResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type ConcurrentModificationException = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type TooManyTagKeysException = { [x: string]: unknown }
type UpdateEndpointRequest = {
  EndpointArn: {}
  DesiredModelArn?: {} | undefined
  DesiredInferenceUnits?: {} | undefined
  DesiredDataAccessRoleArn?: {} | undefined
  FlywheelArn?: {} | undefined
}
type UpdateEndpointResponse = { DesiredModelArn?: {} | undefined }
type UpdateFlywheelRequest = {
  FlywheelArn: {}
  ActiveModelArn?: {} | undefined
  DataAccessRoleArn?: {} | undefined
  DataSecurityConfig?:
    | {
        ModelKmsKeyId?: {} | undefined
        VolumeKmsKeyId?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
}
type UpdateFlywheelResponse = {
  FlywheelProperties?:
    | {
        FlywheelArn?: {} | undefined
        ActiveModelArn?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        TaskConfig?:
          | {
              LanguageCode: {}
              DocumentClassificationConfig?: { Mode: {}; Labels?: {} | undefined } | undefined
              EntityRecognitionConfig?: { EntityTypes: {} } | undefined
            }
          | undefined
        DataLakeS3Uri?: {} | undefined
        DataSecurityConfig?:
          | {
              ModelKmsKeyId?: {} | undefined
              VolumeKmsKeyId?: {} | undefined
              DataLakeKmsKeyId?: {} | undefined
              VpcConfig?: VpcConfig | undefined
            }
          | undefined
        Status?: {} | undefined
        ModelType?: {} | undefined
        Message?: {} | undefined
        CreationTime?: {} | undefined
        LastModifiedTime?: {} | undefined
        LatestFlywheelIteration?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectDominantLanguageRequest }
            output: BatchDetectDominantLanguageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectDominantLanguageRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectDominantLanguageRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectDominantLanguageRequest }
            output: BatchSizeLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectDominantLanguageRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectEntities': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectEntitiesRequest }
            output: BatchDetectEntitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectEntitiesRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectEntitiesRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectEntitiesRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectEntitiesRequest }
            output: BatchSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectEntitiesRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectKeyPhrasesRequest }
            output: BatchDetectKeyPhrasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectKeyPhrasesRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectKeyPhrasesRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectKeyPhrasesRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectKeyPhrasesRequest }
            output: BatchSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectKeyPhrasesRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSentimentRequest }
            output: BatchDetectSentimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSentimentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSentimentRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSentimentRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSentimentRequest }
            output: BatchSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSentimentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSyntaxRequest }
            output: BatchDetectSyntaxResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSyntaxRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSyntaxRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSyntaxRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSyntaxRequest }
            output: BatchSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectSyntaxRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectTargetedSentimentRequest }
            output: BatchDetectTargetedSentimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectTargetedSentimentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectTargetedSentimentRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectTargetedSentimentRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectTargetedSentimentRequest }
            output: BatchSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.BatchDetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDetectTargetedSentimentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ClassifyDocument': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ClassifyDocument'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClassifyDocumentRequest }
            output: ClassifyDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ClassifyDocument'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClassifyDocumentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ClassifyDocument'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClassifyDocumentRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ClassifyDocument'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClassifyDocumentRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ClassifyDocument'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClassifyDocumentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ContainsPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContainsPiiEntitiesRequest }
            output: ContainsPiiEntitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ContainsPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContainsPiiEntitiesRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ContainsPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContainsPiiEntitiesRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ContainsPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContainsPiiEntitiesRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ContainsPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContainsPiiEntitiesRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.CreateDataset': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDataset'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: CreateDocumentClassifierResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDocumentClassifierRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.CreateEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: CreateEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: CreateEntityRecognizerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEntityRecognizerRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.CreateFlywheel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: CreateFlywheelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.CreateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlywheelRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDocumentClassifierRequest }
            output: DeleteDocumentClassifierResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDocumentClassifierRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDocumentClassifierRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDocumentClassifierRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDocumentClassifierRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDocumentClassifierRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDocumentClassifierRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DeleteEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointRequest }
            output: DeleteEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEntityRecognizerRequest }
            output: DeleteEntityRecognizerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEntityRecognizerRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEntityRecognizerRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEntityRecognizerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEntityRecognizerRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEntityRecognizerRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEntityRecognizerRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DeleteFlywheel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlywheelRequest }
            output: DeleteFlywheelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlywheelRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlywheelRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlywheelRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlywheelRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlywheelRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlywheelRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourcePolicyRequest }
            output: DeleteResourcePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourcePolicyRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourcePolicyRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DeleteResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourcePolicyRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeDataset': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDataset'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassificationJobRequest }
            output: DescribeDocumentClassificationJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassificationJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassificationJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassificationJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassificationJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassifierRequest }
            output: DescribeDocumentClassifierResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassifierRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassifierRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassifierRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDocumentClassifierRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDominantLanguageDetectionJobRequest }
            output: DescribeDominantLanguageDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDominantLanguageDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDominantLanguageDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDominantLanguageDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDominantLanguageDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndpointRequest }
            output: DescribeEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndpointRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndpointRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndpointRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndpointRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntitiesDetectionJobRequest }
            output: DescribeEntitiesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntitiesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntitiesDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntitiesDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntitiesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntityRecognizerRequest }
            output: DescribeEntityRecognizerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntityRecognizerRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntityRecognizerRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntityRecognizerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEntityRecognizerRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsDetectionJobRequest }
            output: DescribeEventsDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeFlywheel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelRequest }
            output: DescribeFlywheelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelIterationRequest }
            output: DescribeFlywheelIterationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelIterationRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelIterationRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelIterationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlywheelIterationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeKeyPhrasesDetectionJobRequest }
            output: DescribeKeyPhrasesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeKeyPhrasesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeKeyPhrasesDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeKeyPhrasesDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeKeyPhrasesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribePiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePiiEntitiesDetectionJobRequest }
            output: DescribePiiEntitiesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribePiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePiiEntitiesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribePiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePiiEntitiesDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribePiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePiiEntitiesDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribePiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePiiEntitiesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeResourcePolicyRequest }
            output: DescribeResourcePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeResourcePolicyRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeResourcePolicyRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeResourcePolicyRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSentimentDetectionJobRequest }
            output: DescribeSentimentDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSentimentDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSentimentDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSentimentDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSentimentDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetedSentimentDetectionJobRequest }
            output: DescribeTargetedSentimentDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetedSentimentDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetedSentimentDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetedSentimentDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetedSentimentDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTopicsDetectionJobRequest }
            output: DescribeTopicsDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTopicsDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTopicsDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTopicsDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DescribeTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTopicsDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectDominantLanguageRequest }
            output: DetectDominantLanguageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectDominantLanguageRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectDominantLanguageRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectDominantLanguage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectDominantLanguageRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DetectEntities': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectEntitiesRequest }
            output: DetectEntitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectEntitiesRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectEntitiesRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectEntitiesRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectEntitiesRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectEntitiesRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectKeyPhrasesRequest }
            output: DetectKeyPhrasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectKeyPhrasesRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectKeyPhrasesRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectKeyPhrasesRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectKeyPhrases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectKeyPhrasesRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DetectPiiEntities': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectPiiEntitiesRequest }
            output: DetectPiiEntitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectPiiEntitiesRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectPiiEntitiesRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectPiiEntitiesRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectPiiEntities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectPiiEntitiesRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DetectSentiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSentimentRequest }
            output: DetectSentimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSentimentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSentimentRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSentimentRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSentimentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DetectSyntax': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSyntaxRequest }
            output: DetectSyntaxResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSyntaxRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSyntaxRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSyntaxRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectSyntax'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectSyntaxRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTargetedSentimentRequest }
            output: DetectTargetedSentimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTargetedSentimentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTargetedSentimentRequest }
            output: TextSizeLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTargetedSentimentRequest }
            output: UnsupportedLanguageException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.DetectTargetedSentiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTargetedSentimentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ImportModel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: ImportModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ImportModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportModelRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListDatasets': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDatasets'
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDatasets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDatasets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDatasets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDatasets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDatasets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassificationJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassificationJobsRequest }
            output: ListDocumentClassificationJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassificationJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassificationJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassificationJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassificationJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassificationJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassificationJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassificationJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassificationJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifierSummaries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifierSummariesRequest }
            output: ListDocumentClassifierSummariesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifierSummaries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifierSummariesRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifierSummaries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifierSummariesRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifierSummaries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifierSummariesRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifiers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifiersRequest }
            output: ListDocumentClassifiersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifiers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifiersRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifiers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifiersRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifiers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifiersRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDocumentClassifiers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDocumentClassifiersRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDominantLanguageDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDominantLanguageDetectionJobsRequest }
            output: ListDominantLanguageDetectionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDominantLanguageDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDominantLanguageDetectionJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDominantLanguageDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDominantLanguageDetectionJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDominantLanguageDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDominantLanguageDetectionJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListDominantLanguageDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDominantLanguageDetectionJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListEndpoints': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEndpoints'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEndpointsRequest }
            output: ListEndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEndpoints'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEndpointsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEndpoints'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEndpointsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEndpoints'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEndpointsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntitiesDetectionJobsRequest }
            output: ListEntitiesDetectionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntitiesDetectionJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntitiesDetectionJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntitiesDetectionJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntitiesDetectionJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizerSummaries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizerSummariesRequest }
            output: ListEntityRecognizerSummariesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizerSummaries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizerSummariesRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizerSummaries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizerSummariesRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizerSummaries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizerSummariesRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizersRequest }
            output: ListEntityRecognizersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizersRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizersRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizersRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEntityRecognizers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEntityRecognizersRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEventsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEventsDetectionJobsRequest }
            output: ListEventsDetectionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEventsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEventsDetectionJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEventsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEventsDetectionJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEventsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEventsDetectionJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListEventsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListEventsDetectionJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheelIterationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelIterationHistoryRequest }
            output: ListFlywheelIterationHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheelIterationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelIterationHistoryRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheelIterationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelIterationHistoryRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheelIterationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelIterationHistoryRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheelIterationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelIterationHistoryRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheelIterationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelIterationHistoryRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListFlywheels': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelsRequest }
            output: ListFlywheelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListFlywheels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFlywheelsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListKeyPhrasesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListKeyPhrasesDetectionJobsRequest }
            output: ListKeyPhrasesDetectionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListKeyPhrasesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListKeyPhrasesDetectionJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListKeyPhrasesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListKeyPhrasesDetectionJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListKeyPhrasesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListKeyPhrasesDetectionJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListKeyPhrasesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListKeyPhrasesDetectionJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListPiiEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPiiEntitiesDetectionJobsRequest }
            output: ListPiiEntitiesDetectionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListPiiEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPiiEntitiesDetectionJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListPiiEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPiiEntitiesDetectionJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListPiiEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPiiEntitiesDetectionJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListPiiEntitiesDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPiiEntitiesDetectionJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSentimentDetectionJobsRequest }
            output: ListSentimentDetectionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSentimentDetectionJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSentimentDetectionJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSentimentDetectionJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSentimentDetectionJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTagsForResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTargetedSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTargetedSentimentDetectionJobsRequest }
            output: ListTargetedSentimentDetectionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTargetedSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTargetedSentimentDetectionJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTargetedSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTargetedSentimentDetectionJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTargetedSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTargetedSentimentDetectionJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTargetedSentimentDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTargetedSentimentDetectionJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTopicsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsDetectionJobsRequest }
            output: ListTopicsDetectionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTopicsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsDetectionJobsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTopicsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsDetectionJobsRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTopicsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsDetectionJobsRequest }
            output: InvalidFilterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.ListTopicsDetectionJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsDetectionJobsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.PutResourcePolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.PutResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourcePolicyRequest }
            output: PutResourcePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.PutResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourcePolicyRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.PutResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourcePolicyRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.PutResourcePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourcePolicyRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: StartDocumentClassificationJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDocumentClassificationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDocumentClassificationJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDominantLanguageDetectionJobRequest }
            output: StartDominantLanguageDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDominantLanguageDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDominantLanguageDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDominantLanguageDetectionJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDominantLanguageDetectionJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDominantLanguageDetectionJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDominantLanguageDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: StartEntitiesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEntitiesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEventsDetectionJobRequest }
            output: StartEventsDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEventsDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEventsDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEventsDetectionJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEventsDetectionJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEventsDetectionJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartEventsDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFlywheelIterationRequest }
            output: StartFlywheelIterationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFlywheelIterationRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFlywheelIterationRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFlywheelIterationRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFlywheelIterationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartFlywheelIteration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFlywheelIterationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartKeyPhrasesDetectionJobRequest }
            output: StartKeyPhrasesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartKeyPhrasesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartKeyPhrasesDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartKeyPhrasesDetectionJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartKeyPhrasesDetectionJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartKeyPhrasesDetectionJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartKeyPhrasesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPiiEntitiesDetectionJobRequest }
            output: StartPiiEntitiesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPiiEntitiesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPiiEntitiesDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPiiEntitiesDetectionJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPiiEntitiesDetectionJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPiiEntitiesDetectionJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPiiEntitiesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSentimentDetectionJobRequest }
            output: StartSentimentDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSentimentDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSentimentDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSentimentDetectionJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSentimentDetectionJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSentimentDetectionJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSentimentDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTargetedSentimentDetectionJobRequest }
            output: StartTargetedSentimentDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTargetedSentimentDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTargetedSentimentDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTargetedSentimentDetectionJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTargetedSentimentDetectionJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTargetedSentimentDetectionJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTargetedSentimentDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTopicsDetectionJobRequest }
            output: StartTopicsDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTopicsDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTopicsDetectionJobRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTopicsDetectionJobRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTopicsDetectionJobRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTopicsDetectionJobRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StartTopicsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTopicsDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDominantLanguageDetectionJobRequest }
            output: StopDominantLanguageDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDominantLanguageDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDominantLanguageDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopDominantLanguageDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDominantLanguageDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopEntitiesDetectionJobRequest }
            output: StopEntitiesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopEntitiesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopEntitiesDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopEntitiesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopEventsDetectionJobRequest }
            output: StopEventsDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopEventsDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopEventsDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopEventsDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopEventsDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopKeyPhrasesDetectionJobRequest }
            output: StopKeyPhrasesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopKeyPhrasesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopKeyPhrasesDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopKeyPhrasesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopKeyPhrasesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopPiiEntitiesDetectionJobRequest }
            output: StopPiiEntitiesDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopPiiEntitiesDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopPiiEntitiesDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopPiiEntitiesDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopPiiEntitiesDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopSentimentDetectionJobRequest }
            output: StopSentimentDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopSentimentDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopSentimentDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopSentimentDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTargetedSentimentDetectionJobRequest }
            output: StopTargetedSentimentDetectionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTargetedSentimentDetectionJobRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTargetedSentimentDetectionJobRequest }
            output: JobNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTargetedSentimentDetectionJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTargetedSentimentDetectionJobRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingDocumentClassifierRequest }
            output: StopTrainingDocumentClassifierResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingDocumentClassifierRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingDocumentClassifierRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingDocumentClassifierRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingDocumentClassifier'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingDocumentClassifierRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingEntityRecognizerRequest }
            output: StopTrainingEntityRecognizerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingEntityRecognizerRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingEntityRecognizerRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingEntityRecognizerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.StopTrainingEntityRecognizer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingEntityRecognizerRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.TagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UntagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: TooManyTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.UpdateEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointRequest }
            output: UpdateEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointRequest }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointRequest }
            output: ResourceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=Comprehend_20171127.UpdateFlywheel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFlywheelRequest }
            output: UpdateFlywheelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFlywheelRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFlywheelRequest }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFlywheelRequest }
            output: KmsKeyValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFlywheelRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'Comprehend_20171127.UpdateFlywheel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFlywheelRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
