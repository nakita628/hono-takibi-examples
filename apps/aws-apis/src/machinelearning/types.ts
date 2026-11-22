type AddTagsInput = { Tags: {}; ResourceId: {}; ResourceType: {} }
type AddTagsOutput = { ResourceId?: {} | undefined; ResourceType?: {} | undefined }
type InvalidInputException = { [x: string]: unknown }
type InvalidTagException = { [x: string]: unknown }
type TagLimitExceededException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type CreateBatchPredictionInput = {
  BatchPredictionId: {}
  BatchPredictionName?: {} | undefined
  MLModelId: {}
  BatchPredictionDataSourceId: {}
  OutputUri: {}
}
type CreateBatchPredictionOutput = { BatchPredictionId?: {} | undefined }
type IdempotentParameterMismatchException = { [x: string]: unknown }
type RDSDatabaseName = string
type RDSDatabaseUsername = string
type RDSDatabasePassword = string
type CreateDataSourceFromRDSInput = {
  DataSourceId: {}
  DataSourceName?: {} | undefined
  RDSData: {
    DatabaseInformation: { InstanceIdentifier: {}; DatabaseName: RDSDatabaseName }
    SelectSqlQuery: {}
    DatabaseCredentials: { Username: RDSDatabaseUsername; Password: RDSDatabasePassword }
    S3StagingLocation: {}
    DataRearrangement?: {} | undefined
    DataSchema?: {} | undefined
    DataSchemaUri?: {} | undefined
    ResourceRole: {}
    ServiceRole: {}
    SubnetId: {}
    SecurityGroupIds: {}
  }
  RoleARN: {}
  ComputeStatistics?: {} | undefined
}
type CreateDataSourceFromRDSOutput = { DataSourceId?: {} | undefined }
type RedshiftDatabaseName = string
type RedshiftClusterIdentifier = string
type RedshiftDatabaseUsername = string
type RedshiftDatabasePassword = string
type CreateDataSourceFromRedshiftInput = {
  DataSourceId: {}
  DataSourceName?: {} | undefined
  DataSpec: {
    DatabaseInformation: {
      DatabaseName: RedshiftDatabaseName
      ClusterIdentifier: RedshiftClusterIdentifier
    }
    SelectSqlQuery: {}
    DatabaseCredentials: { Username: RedshiftDatabaseUsername; Password: RedshiftDatabasePassword }
    S3StagingLocation: {}
    DataRearrangement?: {} | undefined
    DataSchema?: {} | undefined
    DataSchemaUri?: {} | undefined
  }
  RoleARN: {}
  ComputeStatistics?: {} | undefined
}
type CreateDataSourceFromRedshiftOutput = { DataSourceId?: {} | undefined }
type CreateDataSourceFromS3Input = {
  DataSourceId: {}
  DataSourceName?: {} | undefined
  DataSpec: {
    DataLocationS3: {}
    DataRearrangement?: {} | undefined
    DataSchema?: {} | undefined
    DataSchemaLocationS3?: {} | undefined
  }
  ComputeStatistics?: {} | undefined
}
type CreateDataSourceFromS3Output = { DataSourceId?: {} | undefined }
type CreateEvaluationInput = {
  EvaluationId: {}
  EvaluationName?: {} | undefined
  MLModelId: {}
  EvaluationDataSourceId: {}
}
type CreateEvaluationOutput = { EvaluationId?: {} | undefined }
type CreateMLModelInput = {
  MLModelId: {}
  MLModelName?: {} | undefined
  MLModelType: {}
  Parameters?: {} | undefined
  TrainingDataSourceId: {}
  Recipe?: {} | undefined
  RecipeUri?: {} | undefined
}
type CreateMLModelOutput = { MLModelId?: {} | undefined }
type CreateRealtimeEndpointInput = { MLModelId: {} }
type CreateRealtimeEndpointOutput = {
  MLModelId?: {} | undefined
  RealtimeEndpointInfo?:
    | {
        PeakRequestsPerSecond?: {} | undefined
        CreatedAt?: {} | undefined
        EndpointUrl?: {} | undefined
        EndpointStatus?: {} | undefined
      }
    | undefined
}
type DeleteBatchPredictionInput = { BatchPredictionId: {} }
type DeleteBatchPredictionOutput = { BatchPredictionId?: {} | undefined }
type DeleteDataSourceInput = { DataSourceId: {} }
type DeleteDataSourceOutput = { DataSourceId?: {} | undefined }
type DeleteEvaluationInput = { EvaluationId: {} }
type DeleteEvaluationOutput = { EvaluationId?: {} | undefined }
type DeleteMLModelInput = { MLModelId: {} }
type DeleteMLModelOutput = { MLModelId?: {} | undefined }
type DeleteRealtimeEndpointInput = { MLModelId: {} }
type DeleteRealtimeEndpointOutput = {
  MLModelId?: {} | undefined
  RealtimeEndpointInfo?:
    | {
        PeakRequestsPerSecond?: {} | undefined
        CreatedAt?: {} | undefined
        EndpointUrl?: {} | undefined
        EndpointStatus?: {} | undefined
      }
    | undefined
}
type DeleteTagsInput = { TagKeys: {}; ResourceId: {}; ResourceType: {} }
type DeleteTagsOutput = { ResourceId?: {} | undefined; ResourceType?: {} | undefined }
type DescribeBatchPredictionsInput = {
  FilterVariable?: {} | undefined
  EQ?: {} | undefined
  GT?: {} | undefined
  LT?: {} | undefined
  GE?: {} | undefined
  LE?: {} | undefined
  NE?: {} | undefined
  Prefix?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeBatchPredictionsOutput = { Results?: {} | undefined; NextToken?: {} | undefined }
type DescribeDataSourcesInput = {
  FilterVariable?: {} | undefined
  EQ?: {} | undefined
  GT?: {} | undefined
  LT?: {} | undefined
  GE?: {} | undefined
  LE?: {} | undefined
  NE?: {} | undefined
  Prefix?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeDataSourcesOutput = { Results?: {} | undefined; NextToken?: {} | undefined }
type DescribeEvaluationsInput = {
  FilterVariable?: {} | undefined
  EQ?: {} | undefined
  GT?: {} | undefined
  LT?: {} | undefined
  GE?: {} | undefined
  LE?: {} | undefined
  NE?: {} | undefined
  Prefix?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeEvaluationsOutput = { Results?: {} | undefined; NextToken?: {} | undefined }
type DescribeMLModelsInput = {
  FilterVariable?: {} | undefined
  EQ?: {} | undefined
  GT?: {} | undefined
  LT?: {} | undefined
  GE?: {} | undefined
  LE?: {} | undefined
  NE?: {} | undefined
  Prefix?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeMLModelsOutput = { Results?: {} | undefined; NextToken?: {} | undefined }
type DescribeTagsInput = { ResourceId: {}; ResourceType: {} }
type DescribeTagsOutput = {
  ResourceId?: {} | undefined
  ResourceType?: {} | undefined
  Tags?: {} | undefined
}
type GetBatchPredictionInput = { BatchPredictionId: {} }
type GetBatchPredictionOutput = {
  BatchPredictionId?: {} | undefined
  MLModelId?: {} | undefined
  BatchPredictionDataSourceId?: {} | undefined
  InputDataLocationS3?: {} | undefined
  CreatedByIamUser?: {} | undefined
  CreatedAt?: {} | undefined
  LastUpdatedAt?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  OutputUri?: {} | undefined
  LogUri?: {} | undefined
  Message?: {} | undefined
  ComputeTime?: {} | undefined
  FinishedAt?: {} | undefined
  StartedAt?: {} | undefined
  TotalRecordCount?: {} | undefined
  InvalidRecordCount?: {} | undefined
}
type GetDataSourceInput = { DataSourceId: {}; Verbose?: {} | undefined }
type RedshiftDatabase = {
  DatabaseName: RedshiftDatabaseName
  ClusterIdentifier: RedshiftClusterIdentifier
}
type RedshiftMetadata = {
  RedshiftDatabase?: RedshiftDatabase | undefined
  DatabaseUserName?: RedshiftDatabaseUsername | undefined
  SelectSqlQuery?: {} | undefined
}
type RDSMetadata = {
  Database?: { InstanceIdentifier: {}; DatabaseName: RDSDatabaseName } | undefined
  DatabaseUserName?: RDSDatabaseUsername | undefined
  SelectSqlQuery?: {} | undefined
  ResourceRole?: {} | undefined
  ServiceRole?: {} | undefined
  DataPipelineId?: {} | undefined
}
type RoleARN = string
type GetDataSourceOutput = {
  DataSourceId?: {} | undefined
  DataLocationS3?: {} | undefined
  DataRearrangement?: {} | undefined
  CreatedByIamUser?: {} | undefined
  CreatedAt?: {} | undefined
  LastUpdatedAt?: {} | undefined
  DataSizeInBytes?: {} | undefined
  NumberOfFiles?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  LogUri?: {} | undefined
  Message?: {} | undefined
  RedshiftMetadata?: RedshiftMetadata | undefined
  RDSMetadata?: RDSMetadata | undefined
  RoleARN?: RoleARN | undefined
  ComputeStatistics?: {} | undefined
  ComputeTime?: {} | undefined
  FinishedAt?: {} | undefined
  StartedAt?: {} | undefined
  DataSourceSchema?: {} | undefined
}
type GetEvaluationInput = { EvaluationId: {} }
type PerformanceMetricsPropertyValue = string
type PerformanceMetricsProperties = { [x: string]: PerformanceMetricsPropertyValue }
type GetEvaluationOutput = {
  EvaluationId?: {} | undefined
  MLModelId?: {} | undefined
  EvaluationDataSourceId?: {} | undefined
  InputDataLocationS3?: {} | undefined
  CreatedByIamUser?: {} | undefined
  CreatedAt?: {} | undefined
  LastUpdatedAt?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  PerformanceMetrics?: { Properties?: PerformanceMetricsProperties | undefined } | undefined
  LogUri?: {} | undefined
  Message?: {} | undefined
  ComputeTime?: {} | undefined
  FinishedAt?: {} | undefined
  StartedAt?: {} | undefined
}
type GetMLModelInput = { MLModelId: {}; Verbose?: {} | undefined }
type LongType = number
type GetMLModelOutput = {
  MLModelId?: {} | undefined
  TrainingDataSourceId?: {} | undefined
  CreatedByIamUser?: {} | undefined
  CreatedAt?: {} | undefined
  LastUpdatedAt?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  SizeInBytes?: LongType | undefined
  EndpointInfo?:
    | {
        PeakRequestsPerSecond?: {} | undefined
        CreatedAt?: {} | undefined
        EndpointUrl?: {} | undefined
        EndpointStatus?: {} | undefined
      }
    | undefined
  TrainingParameters?: {} | undefined
  InputDataLocationS3?: {} | undefined
  MLModelType?: {} | undefined
  ScoreThreshold?: {} | undefined
  ScoreThresholdLastUpdatedAt?: {} | undefined
  LogUri?: {} | undefined
  Message?: {} | undefined
  ComputeTime?: {} | undefined
  FinishedAt?: {} | undefined
  StartedAt?: {} | undefined
  Recipe?: {} | undefined
  Schema?: {} | undefined
}
type VariableValue = string
type Record = { [x: string]: VariableValue }
type VipURL = string
type PredictInput = { MLModelId: {}; Record: Record; PredictEndpoint: VipURL }
type ScoreValue = number
type ScoreValuePerLabelMap = { [x: string]: ScoreValue }
type DetailsValue = string
type DetailsMap = { [x: string]: DetailsValue }
type Prediction = {
  predictedLabel?: {} | undefined
  predictedValue?: {} | undefined
  predictedScores?: ScoreValuePerLabelMap | undefined
  details?: DetailsMap | undefined
}
type PredictOutput = { Prediction?: Prediction | undefined }
type LimitExceededException = { [x: string]: unknown }
type PredictorNotMountedException = { [x: string]: unknown }
type UpdateBatchPredictionInput = { BatchPredictionId: {}; BatchPredictionName: {} }
type UpdateBatchPredictionOutput = { BatchPredictionId?: {} | undefined }
type UpdateDataSourceInput = { DataSourceId: {}; DataSourceName: {} }
type UpdateDataSourceOutput = { DataSourceId?: {} | undefined }
type UpdateEvaluationInput = { EvaluationId: {}; EvaluationName: {} }
type UpdateEvaluationOutput = { EvaluationId?: {} | undefined }
type UpdateMLModelInput = {
  MLModelId: {}
  MLModelName?: {} | undefined
  ScoreThreshold?: {} | undefined
}
type UpdateMLModelOutput = { MLModelId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonML_20141212.AddTags': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.AddTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: AddTagsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.AddTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.AddTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: InvalidTagException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.AddTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: TagLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.AddTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.AddTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBatchPredictionInput }
            output: CreateBatchPredictionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBatchPredictionInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBatchPredictionInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBatchPredictionInput }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromRDS'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromRDSInput }
            output: CreateDataSourceFromRDSOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromRDS'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromRDSInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromRDS'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromRDSInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromRDS'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromRDSInput }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromRedshift'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromRedshiftInput }
            output: CreateDataSourceFromRedshiftOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromRedshift'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromRedshiftInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromRedshift'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromRedshiftInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromRedshift'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromRedshiftInput }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromS3Input }
            output: CreateDataSourceFromS3Output
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromS3Input }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromS3Input }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateDataSourceFromS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataSourceFromS3Input }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.CreateEvaluation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEvaluationInput }
            output: CreateEvaluationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEvaluationInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEvaluationInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEvaluationInput }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.CreateMLModel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMLModelInput }
            output: CreateMLModelOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMLModelInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMLModelInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMLModelInput }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateRealtimeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRealtimeEndpointInput }
            output: CreateRealtimeEndpointOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateRealtimeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRealtimeEndpointInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateRealtimeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRealtimeEndpointInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.CreateRealtimeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRealtimeEndpointInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBatchPredictionInput }
            output: DeleteBatchPredictionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBatchPredictionInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBatchPredictionInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBatchPredictionInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DeleteDataSource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDataSourceInput }
            output: DeleteDataSourceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDataSourceInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDataSourceInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDataSourceInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DeleteEvaluation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEvaluationInput }
            output: DeleteEvaluationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEvaluationInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEvaluationInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEvaluationInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DeleteMLModel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMLModelInput }
            output: DeleteMLModelOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMLModelInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMLModelInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMLModelInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteRealtimeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRealtimeEndpointInput }
            output: DeleteRealtimeEndpointOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteRealtimeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRealtimeEndpointInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteRealtimeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRealtimeEndpointInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteRealtimeEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRealtimeEndpointInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DeleteTags': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsInput }
            output: DeleteTagsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsInput }
            output: InvalidTagException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DeleteTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTagsInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeBatchPredictions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBatchPredictionsInput }
            output: DescribeBatchPredictionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeBatchPredictions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBatchPredictionsInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeBatchPredictions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBatchPredictionsInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DescribeDataSources': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeDataSources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDataSourcesInput }
            output: DescribeDataSourcesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeDataSources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDataSourcesInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeDataSources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDataSourcesInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DescribeEvaluations': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEvaluationsInput }
            output: DescribeEvaluationsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEvaluationsInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEvaluationsInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DescribeMLModels': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeMLModels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMLModelsInput }
            output: DescribeMLModelsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeMLModels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMLModelsInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeMLModels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMLModelsInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.DescribeTags': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsInput }
            output: DescribeTagsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.DescribeTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.GetBatchPrediction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetBatchPredictionInput }
            output: GetBatchPredictionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetBatchPredictionInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetBatchPredictionInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetBatchPredictionInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.GetDataSource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataSourceInput }
            output: GetDataSourceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataSourceInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataSourceInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataSourceInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.GetEvaluation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEvaluationInput }
            output: GetEvaluationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEvaluationInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEvaluationInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEvaluationInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.GetMLModel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetMLModelInput }
            output: GetMLModelOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetMLModelInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetMLModelInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.GetMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetMLModelInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.Predict': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.Predict'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PredictInput }
            output: PredictOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.Predict'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PredictInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.Predict'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PredictInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.Predict'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PredictInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.Predict'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PredictInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.Predict'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PredictInput }
            output: PredictorNotMountedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBatchPredictionInput }
            output: UpdateBatchPredictionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBatchPredictionInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBatchPredictionInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateBatchPrediction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBatchPredictionInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.UpdateDataSource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDataSourceInput }
            output: UpdateDataSourceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDataSourceInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDataSourceInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateDataSource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDataSourceInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.UpdateEvaluation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEvaluationInput }
            output: UpdateEvaluationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEvaluationInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEvaluationInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEvaluationInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonML_20141212.UpdateMLModel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMLModelInput }
            output: UpdateMLModelOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMLModelInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMLModelInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonML_20141212.UpdateMLModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMLModelInput }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
