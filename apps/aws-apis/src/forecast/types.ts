type EncryptionConfig = { RoleArn: {}; KMSKeyArn: {} }
type CreateAutoPredictorRequest = {
  PredictorName: {}
  ForecastHorizon?: {} | undefined
  ForecastTypes?: {} | undefined
  ForecastDimensions?: {} | undefined
  ForecastFrequency?: {} | undefined
  DataConfig?:
    | {
        DatasetGroupArn: {}
        AttributeConfigs?: {} | undefined
        AdditionalDatasets?: {} | undefined
      }
    | undefined
  EncryptionConfig?: EncryptionConfig | undefined
  ReferencePredictorArn?: {} | undefined
  OptimizationMetric?: {} | undefined
  ExplainPredictor?: {} | undefined
  Tags?: {} | undefined
  MonitorConfig?: { MonitorName: {} } | undefined
  TimeAlignmentBoundary?:
    | {
        Month?: {} | undefined
        DayOfMonth?: {} | undefined
        DayOfWeek?: {} | undefined
        Hour?: {} | undefined
      }
    | undefined
}
type CreateAutoPredictorResponse = { PredictorArn?: {} | undefined }
type CreateDatasetRequest = {
  DatasetName: {}
  Domain: {}
  DatasetType: {}
  DataFrequency?: {} | undefined
  Schema: { Attributes?: {} | undefined }
  EncryptionConfig?: { RoleArn: {}; KMSKeyArn: {} } | undefined
  Tags?: {} | undefined
}
type CreateDatasetResponse = { DatasetArn?: {} | undefined }
type CreateDatasetGroupRequest = {
  DatasetGroupName: {}
  Domain: {}
  DatasetArns?: {} | undefined
  Tags?: {} | undefined
}
type CreateDatasetGroupResponse = { DatasetGroupArn?: {} | undefined }
type CreateDatasetImportJobRequest = {
  DatasetImportJobName: {}
  DatasetArn: {}
  DataSource: { S3Config: { Path: {}; RoleArn: {}; KMSKeyArn?: {} | undefined } }
  TimestampFormat?: {} | undefined
  TimeZone?: {} | undefined
  UseGeolocationForTimeZone?: {} | undefined
  GeolocationFormat?: {} | undefined
  Tags?: {} | undefined
  Format?: {} | undefined
  ImportMode?: {} | undefined
}
type CreateDatasetImportJobResponse = { DatasetImportJobArn?: {} | undefined }
type DataSource = { S3Config: { Path: {}; RoleArn: {}; KMSKeyArn?: {} | undefined } }
type Schema = { Attributes?: {} | undefined }
type CreateExplainabilityRequest = {
  ExplainabilityName: {}
  ResourceArn: {}
  ExplainabilityConfig: { TimeSeriesGranularity: {}; TimePointGranularity: {} }
  DataSource?: DataSource | undefined
  Schema?: Schema | undefined
  EnableVisualization?: {} | undefined
  StartDateTime?: {} | undefined
  EndDateTime?: {} | undefined
  Tags?: {} | undefined
}
type CreateExplainabilityResponse = { ExplainabilityArn?: {} | undefined }
type DataDestination = { S3Config: { Path: {}; RoleArn: {}; KMSKeyArn?: {} | undefined } }
type CreateExplainabilityExportRequest = {
  ExplainabilityExportName: {}
  ExplainabilityArn: {}
  Destination: DataDestination
  Tags?: {} | undefined
  Format?: {} | undefined
}
type CreateExplainabilityExportResponse = { ExplainabilityExportArn?: {} | undefined }
type CreateForecastRequest = {
  ForecastName: {}
  PredictorArn: {}
  ForecastTypes?: {} | undefined
  Tags?: {} | undefined
  TimeSeriesSelector?:
    | {
        TimeSeriesIdentifiers?:
          | {
              DataSource?: DataSource | undefined
              Schema?: Schema | undefined
              Format?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type CreateForecastResponse = { ForecastArn?: {} | undefined }
type CreateForecastExportJobRequest = {
  ForecastExportJobName: {}
  ForecastArn: {}
  Destination: { S3Config: { Path: {}; RoleArn: {}; KMSKeyArn?: {} | undefined } }
  Tags?: {} | undefined
  Format?: {} | undefined
}
type CreateForecastExportJobResponse = { ForecastExportJobArn?: {} | undefined }
type CreateMonitorRequest = { MonitorName: {}; ResourceArn: {}; Tags?: {} | undefined }
type CreateMonitorResponse = { MonitorArn?: {} | undefined }
type CreatePredictorRequest = {
  PredictorName: {}
  AlgorithmArn?: {} | undefined
  ForecastHorizon: {}
  ForecastTypes?: {} | undefined
  PerformAutoML?: {} | undefined
  AutoMLOverrideStrategy?: {} | undefined
  PerformHPO?: {} | undefined
  TrainingParameters?: {} | undefined
  EvaluationParameters?:
    | { NumberOfBacktestWindows?: {} | undefined; BackTestWindowOffset?: {} | undefined }
    | undefined
  HPOConfig?:
    | {
        ParameterRanges?:
          | {
              CategoricalParameterRanges?: {} | undefined
              ContinuousParameterRanges?: {} | undefined
              IntegerParameterRanges?: {} | undefined
            }
          | undefined
      }
    | undefined
  InputDataConfig: { DatasetGroupArn: {}; SupplementaryFeatures?: {} | undefined }
  FeaturizationConfig: {
    ForecastFrequency: {}
    ForecastDimensions?: {} | undefined
    Featurizations?: {} | undefined
  }
  EncryptionConfig?: { RoleArn: {}; KMSKeyArn: {} } | undefined
  Tags?: {} | undefined
  OptimizationMetric?: {} | undefined
}
type CreatePredictorResponse = { PredictorArn?: {} | undefined }
type CreatePredictorBacktestExportJobRequest = {
  PredictorBacktestExportJobName: {}
  PredictorArn: {}
  Destination: DataDestination
  Tags?: {} | undefined
  Format?: {} | undefined
}
type CreatePredictorBacktestExportJobResponse = { PredictorBacktestExportJobArn?: {} | undefined }
type CreateWhatIfAnalysisRequest = {
  WhatIfAnalysisName: {}
  ForecastArn: {}
  TimeSeriesSelector?:
    | {
        TimeSeriesIdentifiers?:
          | {
              DataSource?: DataSource | undefined
              Schema?: Schema | undefined
              Format?: {} | undefined
            }
          | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type CreateWhatIfAnalysisResponse = { WhatIfAnalysisArn?: {} | undefined }
type S3Config = { Path: {}; RoleArn: {}; KMSKeyArn?: {} | undefined }
type CreateWhatIfForecastRequest = {
  WhatIfForecastName: {}
  WhatIfAnalysisArn: {}
  TimeSeriesTransformations?: {} | undefined
  TimeSeriesReplacementsDataSource?:
    | {
        S3Config: S3Config
        Schema: Schema
        Format?: {} | undefined
        TimestampFormat?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type CreateWhatIfForecastResponse = { WhatIfForecastArn?: {} | undefined }
type CreateWhatIfForecastExportRequest = {
  WhatIfForecastExportName: {}
  WhatIfForecastArns: {}
  Destination: { S3Config: { Path: {}; RoleArn: {}; KMSKeyArn?: {} | undefined } }
  Tags?: {} | undefined
  Format?: {} | undefined
}
type CreateWhatIfForecastExportResponse = { WhatIfForecastExportArn?: {} | undefined }
type DeleteDatasetRequest = { DatasetArn: {} }
type DeleteDatasetGroupRequest = { DatasetGroupArn: {} }
type DeleteDatasetImportJobRequest = { DatasetImportJobArn: {} }
type DeleteExplainabilityRequest = { ExplainabilityArn: {} }
type DeleteExplainabilityExportRequest = { ExplainabilityExportArn: {} }
type DeleteForecastRequest = { ForecastArn: {} }
type DeleteForecastExportJobRequest = { ForecastExportJobArn: {} }
type DeleteMonitorRequest = { MonitorArn: {} }
type DeletePredictorRequest = { PredictorArn: {} }
type DeletePredictorBacktestExportJobRequest = { PredictorBacktestExportJobArn: {} }
type DeleteResourceTreeRequest = { ResourceArn: {} }
type DeleteWhatIfAnalysisRequest = { WhatIfAnalysisArn: {} }
type DeleteWhatIfForecastRequest = { WhatIfForecastArn: {} }
type DeleteWhatIfForecastExportRequest = { WhatIfForecastExportArn: {} }
type DescribeAutoPredictorRequest = { PredictorArn: {} }
type DescribeAutoPredictorResponse = {
  PredictorArn?: {} | undefined
  PredictorName?: {} | undefined
  ForecastHorizon?: {} | undefined
  ForecastTypes?: {} | undefined
  ForecastFrequency?: {} | undefined
  ForecastDimensions?: {} | undefined
  DatasetImportJobArns?: {} | undefined
  DataConfig?:
    | {
        DatasetGroupArn: {}
        AttributeConfigs?: {} | undefined
        AdditionalDatasets?: {} | undefined
      }
    | undefined
  EncryptionConfig?: EncryptionConfig | undefined
  ReferencePredictorSummary?: { Arn?: {} | undefined; State?: {} | undefined } | undefined
  EstimatedTimeRemainingInMinutes?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  OptimizationMetric?: {} | undefined
  ExplainabilityInfo?: { ExplainabilityArn?: {} | undefined; Status?: {} | undefined } | undefined
  MonitorInfo?: { MonitorArn?: {} | undefined; Status?: {} | undefined } | undefined
  TimeAlignmentBoundary?:
    | {
        Month?: {} | undefined
        DayOfMonth?: {} | undefined
        DayOfWeek?: {} | undefined
        Hour?: {} | undefined
      }
    | undefined
}
type DescribeDatasetRequest = { DatasetArn: {} }
type DescribeDatasetResponse = {
  DatasetArn?: {} | undefined
  DatasetName?: {} | undefined
  Domain?: {} | undefined
  DatasetType?: {} | undefined
  DataFrequency?: {} | undefined
  Schema?: { Attributes?: {} | undefined } | undefined
  EncryptionConfig?: { RoleArn: {}; KMSKeyArn: {} } | undefined
  Status?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
}
type DescribeDatasetGroupRequest = { DatasetGroupArn: {} }
type DescribeDatasetGroupResponse = {
  DatasetGroupName?: {} | undefined
  DatasetGroupArn?: {} | undefined
  DatasetArns?: {} | undefined
  Domain?: {} | undefined
  Status?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
}
type DescribeDatasetImportJobRequest = { DatasetImportJobArn: {} }
type DescribeDatasetImportJobResponse = {
  DatasetImportJobName?: {} | undefined
  DatasetImportJobArn?: {} | undefined
  DatasetArn?: {} | undefined
  TimestampFormat?: {} | undefined
  TimeZone?: {} | undefined
  UseGeolocationForTimeZone?: {} | undefined
  GeolocationFormat?: {} | undefined
  DataSource?: { S3Config: { Path: {}; RoleArn: {}; KMSKeyArn?: {} | undefined } } | undefined
  EstimatedTimeRemainingInMinutes?: {} | undefined
  FieldStatistics?: {} | undefined
  DataSize?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  Format?: {} | undefined
  ImportMode?: {} | undefined
}
type DescribeExplainabilityRequest = { ExplainabilityArn: {} }
type DescribeExplainabilityResponse = {
  ExplainabilityArn?: {} | undefined
  ExplainabilityName?: {} | undefined
  ResourceArn?: {} | undefined
  ExplainabilityConfig?: { TimeSeriesGranularity: {}; TimePointGranularity: {} } | undefined
  EnableVisualization?: {} | undefined
  DataSource?: DataSource | undefined
  Schema?: Schema | undefined
  StartDateTime?: {} | undefined
  EndDateTime?: {} | undefined
  EstimatedTimeRemainingInMinutes?: {} | undefined
  Message?: {} | undefined
  Status?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
}
type DescribeExplainabilityExportRequest = { ExplainabilityExportArn: {} }
type DescribeExplainabilityExportResponse = {
  ExplainabilityExportArn?: {} | undefined
  ExplainabilityExportName?: {} | undefined
  ExplainabilityArn?: {} | undefined
  Destination?: DataDestination | undefined
  Message?: {} | undefined
  Status?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  Format?: {} | undefined
}
type DescribeForecastRequest = { ForecastArn: {} }
type DescribeForecastResponse = {
  ForecastArn?: {} | undefined
  ForecastName?: {} | undefined
  ForecastTypes?: {} | undefined
  PredictorArn?: {} | undefined
  DatasetGroupArn?: {} | undefined
  EstimatedTimeRemainingInMinutes?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  TimeSeriesSelector?:
    | {
        TimeSeriesIdentifiers?:
          | {
              DataSource?: DataSource | undefined
              Schema?: Schema | undefined
              Format?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeForecastExportJobRequest = { ForecastExportJobArn: {} }
type DescribeForecastExportJobResponse = {
  ForecastExportJobArn?: {} | undefined
  ForecastExportJobName?: {} | undefined
  ForecastArn?: {} | undefined
  Destination?: { S3Config: { Path: {}; RoleArn: {}; KMSKeyArn?: {} | undefined } } | undefined
  Message?: {} | undefined
  Status?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  Format?: {} | undefined
}
type DescribeMonitorRequest = { MonitorArn: {} }
type DescribeMonitorResponse = {
  MonitorName?: {} | undefined
  MonitorArn?: {} | undefined
  ResourceArn?: {} | undefined
  Status?: {} | undefined
  LastEvaluationTime?: {} | undefined
  LastEvaluationState?: {} | undefined
  Baseline?: { PredictorBaseline?: { BaselineMetrics?: {} | undefined } | undefined } | undefined
  Message?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  EstimatedEvaluationTimeRemainingInMinutes?: {} | undefined
}
type DescribePredictorRequest = { PredictorArn: {} }
type DescribePredictorResponse = {
  PredictorArn?: {} | undefined
  PredictorName?: {} | undefined
  AlgorithmArn?: {} | undefined
  AutoMLAlgorithmArns?: {} | undefined
  ForecastHorizon?: {} | undefined
  ForecastTypes?: {} | undefined
  PerformAutoML?: {} | undefined
  AutoMLOverrideStrategy?: {} | undefined
  PerformHPO?: {} | undefined
  TrainingParameters?: {} | undefined
  EvaluationParameters?:
    | { NumberOfBacktestWindows?: {} | undefined; BackTestWindowOffset?: {} | undefined }
    | undefined
  HPOConfig?:
    | {
        ParameterRanges?:
          | {
              CategoricalParameterRanges?: {} | undefined
              ContinuousParameterRanges?: {} | undefined
              IntegerParameterRanges?: {} | undefined
            }
          | undefined
      }
    | undefined
  InputDataConfig?: { DatasetGroupArn: {}; SupplementaryFeatures?: {} | undefined } | undefined
  FeaturizationConfig?:
    | {
        ForecastFrequency: {}
        ForecastDimensions?: {} | undefined
        Featurizations?: {} | undefined
      }
    | undefined
  EncryptionConfig?: { RoleArn: {}; KMSKeyArn: {} } | undefined
  PredictorExecutionDetails?: { PredictorExecutions?: {} | undefined } | undefined
  EstimatedTimeRemainingInMinutes?: {} | undefined
  IsAutoPredictor?: {} | undefined
  DatasetImportJobArns?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  OptimizationMetric?: {} | undefined
}
type DescribePredictorBacktestExportJobRequest = { PredictorBacktestExportJobArn: {} }
type DescribePredictorBacktestExportJobResponse = {
  PredictorBacktestExportJobArn?: {} | undefined
  PredictorBacktestExportJobName?: {} | undefined
  PredictorArn?: {} | undefined
  Destination?: DataDestination | undefined
  Message?: {} | undefined
  Status?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  Format?: {} | undefined
}
type DescribeWhatIfAnalysisRequest = { WhatIfAnalysisArn: {} }
type TimeSeriesSelector = {
  TimeSeriesIdentifiers?:
    | { DataSource?: DataSource | undefined; Schema?: Schema | undefined; Format?: {} | undefined }
    | undefined
}
type DescribeWhatIfAnalysisResponse = {
  WhatIfAnalysisName?: {} | undefined
  WhatIfAnalysisArn?: {} | undefined
  ForecastArn?: {} | undefined
  EstimatedTimeRemainingInMinutes?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  TimeSeriesSelector?: TimeSeriesSelector | undefined
}
type DescribeWhatIfForecastRequest = { WhatIfForecastArn: {} }
type DescribeWhatIfForecastResponse = {
  WhatIfForecastName?: {} | undefined
  WhatIfForecastArn?: {} | undefined
  WhatIfAnalysisArn?: {} | undefined
  EstimatedTimeRemainingInMinutes?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  TimeSeriesTransformations?: {} | undefined
  TimeSeriesReplacementsDataSource?:
    | {
        S3Config: S3Config
        Schema: Schema
        Format?: {} | undefined
        TimestampFormat?: {} | undefined
      }
    | undefined
  ForecastTypes?: {} | undefined
}
type DescribeWhatIfForecastExportRequest = { WhatIfForecastExportArn: {} }
type DescribeWhatIfForecastExportResponse = {
  WhatIfForecastExportArn?: {} | undefined
  WhatIfForecastExportName?: {} | undefined
  WhatIfForecastArns?: {} | undefined
  Destination?: DataDestination | undefined
  Message?: {} | undefined
  Status?: {} | undefined
  CreationTime?: {} | undefined
  EstimatedTimeRemainingInMinutes?: {} | undefined
  LastModificationTime?: {} | undefined
  Format?: {} | undefined
}
type GetAccuracyMetricsRequest = { PredictorArn: {} }
type GetAccuracyMetricsResponse = {
  PredictorEvaluationResults?: {} | undefined
  IsAutoPredictor?: {} | undefined
  AutoMLOverrideStrategy?: {} | undefined
  OptimizationMetric?: {} | undefined
}
type ListDatasetGroupsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListDatasetGroupsResponse = { DatasetGroups?: {} | undefined; NextToken?: {} | undefined }
type ListDatasetImportJobsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListDatasetImportJobsResponse = {
  DatasetImportJobs?: {} | undefined
  NextToken?: {} | undefined
}
type ListDatasetsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListDatasetsResponse = { Datasets?: {} | undefined; NextToken?: {} | undefined }
type ListExplainabilitiesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListExplainabilitiesResponse = {
  Explainabilities?: {} | undefined
  NextToken?: {} | undefined
}
type ListExplainabilityExportsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListExplainabilityExportsResponse = {
  ExplainabilityExports?: {} | undefined
  NextToken?: {} | undefined
}
type ListForecastExportJobsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListForecastExportJobsResponse = {
  ForecastExportJobs?: {} | undefined
  NextToken?: {} | undefined
}
type ListForecastsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListForecastsResponse = { Forecasts?: {} | undefined; NextToken?: {} | undefined }
type ListMonitorEvaluationsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  MonitorArn: {}
  Filters?: {} | undefined
}
type ListMonitorEvaluationsResponse = {
  NextToken?: {} | undefined
  PredictorMonitorEvaluations?: {} | undefined
}
type ListMonitorsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListMonitorsResponse = { Monitors?: {} | undefined; NextToken?: {} | undefined }
type ListPredictorBacktestExportJobsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListPredictorBacktestExportJobsResponse = {
  PredictorBacktestExportJobs?: {} | undefined
  NextToken?: {} | undefined
}
type ListPredictorsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListPredictorsResponse = { Predictors?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListWhatIfAnalysesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListWhatIfAnalysesResponse = { WhatIfAnalyses?: {} | undefined; NextToken?: {} | undefined }
type ListWhatIfForecastExportsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListWhatIfForecastExportsResponse = {
  WhatIfForecastExports?: {} | undefined
  NextToken?: {} | undefined
}
type ListWhatIfForecastsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListWhatIfForecastsResponse = { WhatIfForecasts?: {} | undefined; NextToken?: {} | undefined }
type ResumeResourceRequest = { ResourceArn: {} }
type StopResourceRequest = { ResourceArn: {} }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateDatasetGroupRequest = { DatasetGroupArn: {}; DatasetArns: {} }
type UpdateDatasetGroupResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonForecast.CreateAutoPredictor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateAutoPredictor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAutoPredictorRequest }
        output: CreateAutoPredictorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateDataset'
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
    '/#X-Amz-Target=AmazonForecast.CreateDatasetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateDatasetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatasetGroupRequest }
        output: CreateDatasetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateDatasetImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateDatasetImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatasetImportJobRequest }
        output: CreateDatasetImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateExplainability': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateExplainability'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateExplainabilityRequest }
        output: CreateExplainabilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateExplainabilityExport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateExplainabilityExport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateExplainabilityExportRequest }
        output: CreateExplainabilityExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateForecastRequest }
        output: CreateForecastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateForecastExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateForecastExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateForecastExportJobRequest }
        output: CreateForecastExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateMonitor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateMonitor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateMonitorRequest }
        output: CreateMonitorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreatePredictor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreatePredictor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePredictorRequest }
        output: CreatePredictorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreatePredictorBacktestExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePredictorBacktestExportJobRequest }
        output: CreatePredictorBacktestExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateWhatIfAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWhatIfAnalysisRequest }
        output: CreateWhatIfAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateWhatIfForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWhatIfForecastRequest }
        output: CreateWhatIfForecastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.CreateWhatIfForecastExport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWhatIfForecastExportRequest }
        output: CreateWhatIfForecastExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteDataset'
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
    '/#X-Amz-Target=AmazonForecast.DeleteDatasetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteDatasetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDatasetGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteDatasetImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDatasetImportJobRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteExplainability': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteExplainability'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteExplainabilityRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteExplainabilityExport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteExplainabilityExportRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteForecastRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteForecastExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteForecastExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteForecastExportJobRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteMonitor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteMonitor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMonitorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeletePredictor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeletePredictor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePredictorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeletePredictorBacktestExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePredictorBacktestExportJobRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteResourceTree': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteResourceTree'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourceTreeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteWhatIfAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWhatIfAnalysisRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteWhatIfForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWhatIfForecastRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DeleteWhatIfForecastExport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWhatIfForecastExportRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeAutoPredictor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeAutoPredictor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAutoPredictorRequest }
        output: DescribeAutoPredictorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeDataset'
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
    '/#X-Amz-Target=AmazonForecast.DescribeDatasetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeDatasetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDatasetGroupRequest }
        output: DescribeDatasetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeDatasetImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDatasetImportJobRequest }
        output: DescribeDatasetImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeExplainability': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeExplainability'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeExplainabilityRequest }
        output: DescribeExplainabilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeExplainabilityExport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeExplainabilityExportRequest }
        output: DescribeExplainabilityExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeForecastRequest }
        output: DescribeForecastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeForecastExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeForecastExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeForecastExportJobRequest }
        output: DescribeForecastExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeMonitor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeMonitor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMonitorRequest }
        output: DescribeMonitorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribePredictor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribePredictor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePredictorRequest }
        output: DescribePredictorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribePredictorBacktestExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePredictorBacktestExportJobRequest }
        output: DescribePredictorBacktestExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeWhatIfAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWhatIfAnalysisRequest }
        output: DescribeWhatIfAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeWhatIfForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWhatIfForecastRequest }
        output: DescribeWhatIfForecastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.DescribeWhatIfForecastExport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWhatIfForecastExportRequest }
        output: DescribeWhatIfForecastExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.GetAccuracyMetrics': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.GetAccuracyMetrics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAccuracyMetricsRequest }
        output: GetAccuracyMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListDatasetGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListDatasetGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatasetGroupsRequest }
        output: ListDatasetGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListDatasetImportJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListDatasetImportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatasetImportJobsRequest }
        output: ListDatasetImportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListDatasets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListDatasets'
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
    '/#X-Amz-Target=AmazonForecast.ListExplainabilities': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListExplainabilities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListExplainabilitiesRequest }
        output: ListExplainabilitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListExplainabilityExports': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListExplainabilityExports'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListExplainabilityExportsRequest }
        output: ListExplainabilityExportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListForecastExportJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListForecastExportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListForecastExportJobsRequest }
        output: ListForecastExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListForecasts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListForecasts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListForecastsRequest }
        output: ListForecastsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListMonitorEvaluations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListMonitorEvaluations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMonitorEvaluationsRequest }
        output: ListMonitorEvaluationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListMonitors': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListMonitors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMonitorsRequest }
        output: ListMonitorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListPredictorBacktestExportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPredictorBacktestExportJobsRequest }
        output: ListPredictorBacktestExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListPredictors': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListPredictors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPredictorsRequest }
        output: ListPredictorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListTagsForResource'
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
    '/#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListWhatIfAnalyses'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWhatIfAnalysesRequest }
        output: ListWhatIfAnalysesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListWhatIfForecastExports'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWhatIfForecastExportsRequest }
        output: ListWhatIfForecastExportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ListWhatIfForecasts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonForecast.ListWhatIfForecasts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWhatIfForecastsRequest }
        output: ListWhatIfForecastsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.ResumeResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.ResumeResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResumeResourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.StopResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.StopResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopResourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonForecast.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.TagResource'
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
    '/#X-Amz-Target=AmazonForecast.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.UntagResource'
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
    '/#X-Amz-Target=AmazonForecast.UpdateDatasetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonForecast.UpdateDatasetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDatasetGroupRequest }
        output: UpdateDatasetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
