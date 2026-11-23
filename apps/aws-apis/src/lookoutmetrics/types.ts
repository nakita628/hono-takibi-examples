type ActivateAnomalyDetectorResponse = { [x: string]: unknown }
type BackTestAnomalyDetectorResponse = { [x: string]: unknown }
type TagValue = string
type CreateAlertResponse = { AlertArn?: {} | undefined }
type CreateAnomalyDetectorResponse = { AnomalyDetectorArn?: {} | undefined }
type Metric = { MetricName: {}; AggregationFunction: {}; Namespace?: {} | undefined }
type ColumnName = string
type S3SourceConfig = {
  RoleArn?: {} | undefined
  TemplatedPathList?: {} | undefined
  HistoricalDataPathList?: {} | undefined
  FileFormatDescriptor?:
    | {
        CsvFormatDescriptor?:
          | {
              FileCompression?: {} | undefined
              Charset?: {} | undefined
              ContainsHeader?: {} | undefined
              Delimiter?: {} | undefined
              HeaderList?: {} | undefined
              QuoteSymbol?: {} | undefined
            }
          | undefined
        JsonFormatDescriptor?:
          | { FileCompression?: {} | undefined; Charset?: {} | undefined }
          | undefined
      }
    | undefined
}
type MetricSetDimensionFilter = { Name?: {} | undefined; FilterList?: {} | undefined }
type CreateMetricSetResponse = { MetricSetArn?: {} | undefined }
type DeactivateAnomalyDetectorResponse = { [x: string]: unknown }
type DeleteAlertResponse = { [x: string]: unknown }
type DeleteAnomalyDetectorResponse = { [x: string]: unknown }
type DescribeAlertResponse = {
  Alert?:
    | {
        Action?:
          | {
              SNSConfiguration?:
                | { RoleArn: {}; SnsTopicArn: {}; SnsFormat?: {} | undefined }
                | undefined
              LambdaConfiguration?: { RoleArn: {}; LambdaArn: {} } | undefined
            }
          | undefined
        AlertDescription?: {} | undefined
        AlertArn?: {} | undefined
        AnomalyDetectorArn?: {} | undefined
        AlertName?: {} | undefined
        AlertSensitivityThreshold?: {} | undefined
        AlertType?: {} | undefined
        AlertStatus?: {} | undefined
        LastModificationTime?: {} | undefined
        CreationTime?: {} | undefined
        AlertFilters?:
          | { MetricList?: {} | undefined; DimensionFilterList?: {} | undefined }
          | undefined
      }
    | undefined
}
type DescribeAnomalyDetectionExecutionsResponse = {
  ExecutionList?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAnomalyDetectorResponse = {
  AnomalyDetectorArn?: {} | undefined
  AnomalyDetectorName?: {} | undefined
  AnomalyDetectorDescription?: {} | undefined
  AnomalyDetectorConfig?: { AnomalyDetectorFrequency?: {} | undefined } | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  Status?: {} | undefined
  FailureReason?: {} | undefined
  KmsKeyArn?: {} | undefined
  FailureType?: {} | undefined
}
type DescribeMetricSetResponse = {
  MetricSetArn?: {} | undefined
  AnomalyDetectorArn?: {} | undefined
  MetricSetName?: {} | undefined
  MetricSetDescription?: {} | undefined
  CreationTime?: {} | undefined
  LastModificationTime?: {} | undefined
  Offset?: {} | undefined
  MetricList?: {} | undefined
  TimestampColumn?: { ColumnName?: {} | undefined; ColumnFormat?: {} | undefined } | undefined
  DimensionList?: {} | undefined
  MetricSetFrequency?: {} | undefined
  Timezone?: {} | undefined
  MetricSource?:
    | {
        S3SourceConfig?: S3SourceConfig | undefined
        AppFlowConfig?: { RoleArn?: {} | undefined; FlowName?: {} | undefined } | undefined
        CloudWatchConfig?:
          | {
              RoleArn?: {} | undefined
              BackTestConfiguration?: { RunBackTestMode: {} } | undefined
            }
          | undefined
        RDSSourceConfig?:
          | {
              DBInstanceIdentifier?: {} | undefined
              DatabaseHost?: {} | undefined
              DatabasePort?: {} | undefined
              SecretManagerArn?: {} | undefined
              DatabaseName?: {} | undefined
              TableName?: {} | undefined
              RoleArn?: {} | undefined
              VpcConfiguration?: { SubnetIdList: {}; SecurityGroupIdList: {} } | undefined
            }
          | undefined
        RedshiftSourceConfig?:
          | {
              ClusterIdentifier?: {} | undefined
              DatabaseHost?: {} | undefined
              DatabasePort?: {} | undefined
              SecretManagerArn?: {} | undefined
              DatabaseName?: {} | undefined
              TableName?: {} | undefined
              RoleArn?: {} | undefined
              VpcConfiguration?: { SubnetIdList: {}; SecurityGroupIdList: {} } | undefined
            }
          | undefined
        AthenaSourceConfig?:
          | {
              RoleArn?: {} | undefined
              DatabaseName?: {} | undefined
              DataCatalog?: {} | undefined
              TableName?: {} | undefined
              WorkGroupName?: {} | undefined
              S3ResultsPath?: {} | undefined
              BackTestConfiguration?: { RunBackTestMode: {} } | undefined
            }
          | undefined
      }
    | undefined
  DimensionFilterList?: {} | undefined
}
type DetectMetricSetConfigResponse = {
  DetectedMetricSetConfig?:
    | {
        Offset?:
          | {
              Value?:
                | {
                    S?: {} | undefined
                    N?: {} | undefined
                    B?: {} | undefined
                    SS?: {} | undefined
                    NS?: {} | undefined
                    BS?: {} | undefined
                  }
                | undefined
              Confidence?: {} | undefined
              Message?: {} | undefined
            }
          | undefined
        MetricSetFrequency?:
          | {
              Value?:
                | {
                    S?: {} | undefined
                    N?: {} | undefined
                    B?: {} | undefined
                    SS?: {} | undefined
                    NS?: {} | undefined
                    BS?: {} | undefined
                  }
                | undefined
              Confidence?: {} | undefined
              Message?: {} | undefined
            }
          | undefined
        MetricSource?:
          | {
              S3SourceConfig?:
                | {
                    FileFormatDescriptor?:
                      | {
                          CsvFormatDescriptor?:
                            | {
                                FileCompression?:
                                  | {
                                      Value?:
                                        | {
                                            S?: {} | undefined
                                            N?: {} | undefined
                                            B?: {} | undefined
                                            SS?: {} | undefined
                                            NS?: {} | undefined
                                            BS?: {} | undefined
                                          }
                                        | undefined
                                      Confidence?: {} | undefined
                                      Message?: {} | undefined
                                    }
                                  | undefined
                                Charset?:
                                  | {
                                      Value?:
                                        | {
                                            S?: {} | undefined
                                            N?: {} | undefined
                                            B?: {} | undefined
                                            SS?: {} | undefined
                                            NS?: {} | undefined
                                            BS?: {} | undefined
                                          }
                                        | undefined
                                      Confidence?: {} | undefined
                                      Message?: {} | undefined
                                    }
                                  | undefined
                                ContainsHeader?:
                                  | {
                                      Value?:
                                        | {
                                            S?: {} | undefined
                                            N?: {} | undefined
                                            B?: {} | undefined
                                            SS?: {} | undefined
                                            NS?: {} | undefined
                                            BS?: {} | undefined
                                          }
                                        | undefined
                                      Confidence?: {} | undefined
                                      Message?: {} | undefined
                                    }
                                  | undefined
                                Delimiter?:
                                  | {
                                      Value?:
                                        | {
                                            S?: {} | undefined
                                            N?: {} | undefined
                                            B?: {} | undefined
                                            SS?: {} | undefined
                                            NS?: {} | undefined
                                            BS?: {} | undefined
                                          }
                                        | undefined
                                      Confidence?: {} | undefined
                                      Message?: {} | undefined
                                    }
                                  | undefined
                                HeaderList?:
                                  | {
                                      Value?:
                                        | {
                                            S?: {} | undefined
                                            N?: {} | undefined
                                            B?: {} | undefined
                                            SS?: {} | undefined
                                            NS?: {} | undefined
                                            BS?: {} | undefined
                                          }
                                        | undefined
                                      Confidence?: {} | undefined
                                      Message?: {} | undefined
                                    }
                                  | undefined
                                QuoteSymbol?:
                                  | {
                                      Value?:
                                        | {
                                            S?: {} | undefined
                                            N?: {} | undefined
                                            B?: {} | undefined
                                            SS?: {} | undefined
                                            NS?: {} | undefined
                                            BS?: {} | undefined
                                          }
                                        | undefined
                                      Confidence?: {} | undefined
                                      Message?: {} | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          JsonFormatDescriptor?:
                            | {
                                FileCompression?:
                                  | {
                                      Value?:
                                        | {
                                            S?: {} | undefined
                                            N?: {} | undefined
                                            B?: {} | undefined
                                            SS?: {} | undefined
                                            NS?: {} | undefined
                                            BS?: {} | undefined
                                          }
                                        | undefined
                                      Confidence?: {} | undefined
                                      Message?: {} | undefined
                                    }
                                  | undefined
                                Charset?:
                                  | {
                                      Value?:
                                        | {
                                            S?: {} | undefined
                                            N?: {} | undefined
                                            B?: {} | undefined
                                            SS?: {} | undefined
                                            NS?: {} | undefined
                                            BS?: {} | undefined
                                          }
                                        | undefined
                                      Confidence?: {} | undefined
                                      Message?: {} | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetAnomalyGroupResponse = {
  AnomalyGroup?:
    | {
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        AnomalyGroupId?: {} | undefined
        AnomalyGroupScore?: {} | undefined
        PrimaryMetricName?: {} | undefined
        MetricLevelImpactList?: {} | undefined
      }
    | undefined
}
type GetDataQualityMetricsResponse = { AnomalyDetectorDataQualityMetricList?: {} | undefined }
type GetFeedbackResponse = {
  AnomalyGroupTimeSeriesFeedback?: {} | undefined
  NextToken?: {} | undefined
}
type FileFormatDescriptor = {
  CsvFormatDescriptor?:
    | {
        FileCompression?: {} | undefined
        Charset?: {} | undefined
        ContainsHeader?: {} | undefined
        Delimiter?: {} | undefined
        HeaderList?: {} | undefined
        QuoteSymbol?: {} | undefined
      }
    | undefined
  JsonFormatDescriptor?: { FileCompression?: {} | undefined; Charset?: {} | undefined } | undefined
}
type GetSampleDataResponse = { HeaderValues?: {} | undefined; SampleRows?: {} | undefined }
type ListAlertsResponse = { AlertSummaryList?: {} | undefined; NextToken?: {} | undefined }
type ListAnomalyDetectorsResponse = {
  AnomalyDetectorSummaryList?: {} | undefined
  NextToken?: {} | undefined
}
type ListAnomalyGroupRelatedMetricsResponse = {
  InterMetricImpactList?: {} | undefined
  NextToken?: {} | undefined
}
type ListAnomalyGroupSummariesResponse = {
  AnomalyGroupSummaryList?: {} | undefined
  AnomalyGroupStatistics?:
    | {
        EvaluationStartDate?: {} | undefined
        TotalCount?: {} | undefined
        ItemizedMetricStatsList?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
}
type ListAnomalyGroupTimeSeriesResponse = {
  AnomalyGroupId?: {} | undefined
  MetricName?: {} | undefined
  TimestampList?: {} | undefined
  NextToken?: {} | undefined
  TimeSeriesList?: {} | undefined
}
type ListMetricSetsResponse = { MetricSetSummaryList?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type PutFeedbackResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAlertResponse = { AlertArn?: {} | undefined }
type UpdateAnomalyDetectorResponse = { AnomalyDetectorArn?: {} | undefined }
type UpdateMetricSetResponse = { MetricSetArn?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ActivateAnomalyDetector': {
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
        } & { json: { AnomalyDetectorArn: string } }
        output: ActivateAnomalyDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BackTestAnomalyDetector': {
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
        } & { json: { AnomalyDetectorArn: string } }
        output: BackTestAnomalyDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateAlert': {
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
            AlertName: string
            AlertSensitivityThreshold?: number | undefined
            AlertDescription?: string | undefined
            AnomalyDetectorArn: string
            Action: {
              SNSConfiguration?:
                | { RoleArn: {}; SnsTopicArn: {}; SnsFormat?: {} | undefined }
                | undefined
              LambdaConfiguration?: { RoleArn: {}; LambdaArn: {} } | undefined
            }
            Tags?: { [x: string]: TagValue } | undefined
            AlertFilters?:
              | { MetricList?: {} | undefined; DimensionFilterList?: {} | undefined }
              | undefined
          }
        }
        output: CreateAlertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateAnomalyDetector': {
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
            AnomalyDetectorName: string
            AnomalyDetectorDescription?: string | undefined
            AnomalyDetectorConfig: { AnomalyDetectorFrequency?: {} | undefined }
            KmsKeyArn?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateAnomalyDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateMetricSet': {
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
            AnomalyDetectorArn: string
            MetricSetName: string
            MetricSetDescription?: string | undefined
            MetricList: Metric[]
            Offset?: number | undefined
            TimestampColumn?:
              | { ColumnName?: {} | undefined; ColumnFormat?: {} | undefined }
              | undefined
            DimensionList?: ColumnName[] | undefined
            MetricSetFrequency?: 'P1D' | 'PT1H' | 'PT10M' | 'PT5M' | undefined
            MetricSource: {
              S3SourceConfig?: S3SourceConfig | undefined
              AppFlowConfig?: { RoleArn?: {} | undefined; FlowName?: {} | undefined } | undefined
              CloudWatchConfig?:
                | {
                    RoleArn?: {} | undefined
                    BackTestConfiguration?: { RunBackTestMode: {} } | undefined
                  }
                | undefined
              RDSSourceConfig?:
                | {
                    DBInstanceIdentifier?: {} | undefined
                    DatabaseHost?: {} | undefined
                    DatabasePort?: {} | undefined
                    SecretManagerArn?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    RoleArn?: {} | undefined
                    VpcConfiguration?: { SubnetIdList: {}; SecurityGroupIdList: {} } | undefined
                  }
                | undefined
              RedshiftSourceConfig?:
                | {
                    ClusterIdentifier?: {} | undefined
                    DatabaseHost?: {} | undefined
                    DatabasePort?: {} | undefined
                    SecretManagerArn?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    RoleArn?: {} | undefined
                    VpcConfiguration?: { SubnetIdList: {}; SecurityGroupIdList: {} } | undefined
                  }
                | undefined
              AthenaSourceConfig?:
                | {
                    RoleArn?: {} | undefined
                    DatabaseName?: {} | undefined
                    DataCatalog?: {} | undefined
                    TableName?: {} | undefined
                    WorkGroupName?: {} | undefined
                    S3ResultsPath?: {} | undefined
                    BackTestConfiguration?: { RunBackTestMode: {} } | undefined
                  }
                | undefined
            }
            Timezone?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
            DimensionFilterList?: MetricSetDimensionFilter[] | undefined
          }
        }
        output: CreateMetricSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeactivateAnomalyDetector': {
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
        } & { json: { AnomalyDetectorArn: string } }
        output: DeactivateAnomalyDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteAlert': {
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
        } & { json: { AlertArn: string } }
        output: DeleteAlertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteAnomalyDetector': {
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
        } & { json: { AnomalyDetectorArn: string } }
        output: DeleteAnomalyDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeAlert': {
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
        } & { json: { AlertArn: string } }
        output: DescribeAlertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeAnomalyDetectionExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            AnomalyDetectorArn: string
            Timestamp?: string | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: DescribeAnomalyDetectionExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeAnomalyDetector': {
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
        } & { json: { AnomalyDetectorArn: string } }
        output: DescribeAnomalyDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeMetricSet': {
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
        } & { json: { MetricSetArn: string } }
        output: DescribeMetricSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DetectMetricSetConfig': {
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
            AnomalyDetectorArn: string
            AutoDetectionMetricSource: {
              S3SourceConfig?:
                | { TemplatedPathList?: {} | undefined; HistoricalDataPathList?: {} | undefined }
                | undefined
            }
          }
        }
        output: DetectMetricSetConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetAnomalyGroup': {
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
        } & { json: { AnomalyGroupId: string; AnomalyDetectorArn: string } }
        output: GetAnomalyGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetDataQualityMetrics': {
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
        } & { json: { AnomalyDetectorArn: string; MetricSetArn?: string | undefined } }
        output: GetDataQualityMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetFeedback': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            AnomalyDetectorArn: string
            AnomalyGroupTimeSeriesFeedback: {
              AnomalyGroupId?: {} | undefined
              TimeSeriesId?: {} | undefined
            }
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: GetFeedbackResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetSampleData': {
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
            S3SourceConfig?:
              | {
                  RoleArn?: {} | undefined
                  TemplatedPathList?: {} | undefined
                  HistoricalDataPathList?: {} | undefined
                  FileFormatDescriptor?: FileFormatDescriptor | undefined
                }
              | undefined
          }
        }
        output: GetSampleDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListAlerts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            AnomalyDetectorArn?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListAlertsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListAnomalyDetectors': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
        output: ListAnomalyDetectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListAnomalyGroupRelatedMetrics': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            AnomalyDetectorArn: string
            AnomalyGroupId: string
            RelationshipTypeFilter?:
              | 'CAUSE_OF_INPUT_ANOMALY_GROUP'
              | 'EFFECT_OF_INPUT_ANOMALY_GROUP'
              | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListAnomalyGroupRelatedMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListAnomalyGroupSummaries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            AnomalyDetectorArn: string
            SensitivityThreshold: number
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListAnomalyGroupSummariesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListAnomalyGroupTimeSeries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            AnomalyDetectorArn: string
            AnomalyGroupId: string
            MetricName: string
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListAnomalyGroupTimeSeriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListMetricSets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            AnomalyDetectorArn?: string | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListMetricSetsResponse
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
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/PutFeedback': {
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
            AnomalyDetectorArn: string
            AnomalyGroupTimeSeriesFeedback: {
              AnomalyGroupId?: {} | undefined
              TimeSeriesId?: {} | undefined
              IsAnomaly?: {} | undefined
            }
          }
        }
        output: PutFeedbackResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
        status: 204
      }
    }
  } & {
    '/UpdateAlert': {
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
            AlertArn: string
            AlertDescription?: string | undefined
            AlertSensitivityThreshold?: number | undefined
            Action?:
              | {
                  SNSConfiguration?:
                    | { RoleArn: {}; SnsTopicArn: {}; SnsFormat?: {} | undefined }
                    | undefined
                  LambdaConfiguration?: { RoleArn: {}; LambdaArn: {} } | undefined
                }
              | undefined
            AlertFilters?:
              | { MetricList?: {} | undefined; DimensionFilterList?: {} | undefined }
              | undefined
          }
        }
        output: UpdateAlertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateAnomalyDetector': {
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
            AnomalyDetectorArn: string
            KmsKeyArn?: string | undefined
            AnomalyDetectorDescription?: string | undefined
            AnomalyDetectorConfig?: { AnomalyDetectorFrequency?: {} | undefined } | undefined
          }
        }
        output: UpdateAnomalyDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateMetricSet': {
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
            MetricSetArn: string
            MetricSetDescription?: string | undefined
            MetricList?: Metric[] | undefined
            Offset?: number | undefined
            TimestampColumn?:
              | { ColumnName?: {} | undefined; ColumnFormat?: {} | undefined }
              | undefined
            DimensionList?: ColumnName[] | undefined
            MetricSetFrequency?: 'P1D' | 'PT1H' | 'PT10M' | 'PT5M' | undefined
            MetricSource?:
              | {
                  S3SourceConfig?: S3SourceConfig | undefined
                  AppFlowConfig?:
                    | { RoleArn?: {} | undefined; FlowName?: {} | undefined }
                    | undefined
                  CloudWatchConfig?:
                    | {
                        RoleArn?: {} | undefined
                        BackTestConfiguration?: { RunBackTestMode: {} } | undefined
                      }
                    | undefined
                  RDSSourceConfig?:
                    | {
                        DBInstanceIdentifier?: {} | undefined
                        DatabaseHost?: {} | undefined
                        DatabasePort?: {} | undefined
                        SecretManagerArn?: {} | undefined
                        DatabaseName?: {} | undefined
                        TableName?: {} | undefined
                        RoleArn?: {} | undefined
                        VpcConfiguration?: { SubnetIdList: {}; SecurityGroupIdList: {} } | undefined
                      }
                    | undefined
                  RedshiftSourceConfig?:
                    | {
                        ClusterIdentifier?: {} | undefined
                        DatabaseHost?: {} | undefined
                        DatabasePort?: {} | undefined
                        SecretManagerArn?: {} | undefined
                        DatabaseName?: {} | undefined
                        TableName?: {} | undefined
                        RoleArn?: {} | undefined
                        VpcConfiguration?: { SubnetIdList: {}; SecurityGroupIdList: {} } | undefined
                      }
                    | undefined
                  AthenaSourceConfig?:
                    | {
                        RoleArn?: {} | undefined
                        DatabaseName?: {} | undefined
                        DataCatalog?: {} | undefined
                        TableName?: {} | undefined
                        WorkGroupName?: {} | undefined
                        S3ResultsPath?: {} | undefined
                        BackTestConfiguration?: { RunBackTestMode: {} } | undefined
                      }
                    | undefined
                }
              | undefined
            DimensionFilterList?: MetricSetDimensionFilter[] | undefined
          }
        }
        output: UpdateMetricSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
