type S3DestinationConfiguration = {
  RoleARN: {}
  BucketARN: {}
  Prefix?: {} | undefined
  ErrorOutputPrefix?: {} | undefined
  BufferingHints?: { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined } | undefined
  CompressionFormat?: {} | undefined
  EncryptionConfiguration?:
    | {
        NoEncryptionConfig?: {} | undefined
        KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
      }
    | undefined
  CloudWatchLoggingOptions?:
    | { Enabled?: {} | undefined; LogGroupName?: {} | undefined; LogStreamName?: {} | undefined }
    | undefined
}
type ProcessingConfiguration = { Enabled?: {} | undefined; Processors?: {} | undefined }
type CloudWatchLoggingOptions = {
  Enabled?: {} | undefined
  LogGroupName?: {} | undefined
  LogStreamName?: {} | undefined
}
type VpcConfiguration = { SubnetIds: {}; RoleARN: {}; SecurityGroupIds: {} }
type CreateDeliveryStreamInput = {
  DeliveryStreamName: {}
  DeliveryStreamType?: {} | undefined
  KinesisStreamSourceConfiguration?: { KinesisStreamARN: {}; RoleARN: {} } | undefined
  DeliveryStreamEncryptionConfigurationInput?: { KeyARN?: {} | undefined; KeyType: {} } | undefined
  S3DestinationConfiguration?:
    | {
        RoleARN: {}
        BucketARN: {}
        Prefix?: {} | undefined
        ErrorOutputPrefix?: {} | undefined
        BufferingHints?:
          | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
          | undefined
        CompressionFormat?: {} | undefined
        EncryptionConfiguration?:
          | {
              NoEncryptionConfig?: {} | undefined
              KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
            }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
      }
    | undefined
  ExtendedS3DestinationConfiguration?:
    | {
        RoleARN: {}
        BucketARN: {}
        Prefix?: {} | undefined
        ErrorOutputPrefix?: {} | undefined
        BufferingHints?:
          | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
          | undefined
        CompressionFormat?: {} | undefined
        EncryptionConfiguration?:
          | {
              NoEncryptionConfig?: {} | undefined
              KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
            }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
        ProcessingConfiguration?:
          | { Enabled?: {} | undefined; Processors?: {} | undefined }
          | undefined
        S3BackupMode?: {} | undefined
        S3BackupConfiguration?:
          | {
              RoleARN: {}
              BucketARN: {}
              Prefix?: {} | undefined
              ErrorOutputPrefix?: {} | undefined
              BufferingHints?:
                | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
                | undefined
              CompressionFormat?: {} | undefined
              EncryptionConfiguration?:
                | {
                    NoEncryptionConfig?: {} | undefined
                    KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
                  }
                | undefined
              CloudWatchLoggingOptions?:
                | {
                    Enabled?: {} | undefined
                    LogGroupName?: {} | undefined
                    LogStreamName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        DataFormatConversionConfiguration?:
          | {
              SchemaConfiguration?:
                | {
                    RoleARN?: {} | undefined
                    CatalogId?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    Region?: {} | undefined
                    VersionId?: {} | undefined
                  }
                | undefined
              InputFormatConfiguration?:
                | {
                    Deserializer?:
                      | {
                          OpenXJsonSerDe?:
                            | {
                                ConvertDotsInJsonKeysToUnderscores?: {} | undefined
                                CaseInsensitive?: {} | undefined
                                ColumnToJsonKeyMappings?: {} | undefined
                              }
                            | undefined
                          HiveJsonSerDe?: { TimestampFormats?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              OutputFormatConfiguration?:
                | {
                    Serializer?:
                      | {
                          ParquetSerDe?:
                            | {
                                BlockSizeBytes?: {} | undefined
                                PageSizeBytes?: {} | undefined
                                Compression?: {} | undefined
                                EnableDictionaryCompression?: {} | undefined
                                MaxPaddingBytes?: {} | undefined
                                WriterVersion?: {} | undefined
                              }
                            | undefined
                          OrcSerDe?:
                            | {
                                StripeSizeBytes?: {} | undefined
                                BlockSizeBytes?: {} | undefined
                                RowIndexStride?: {} | undefined
                                EnablePadding?: {} | undefined
                                PaddingTolerance?: {} | undefined
                                Compression?: {} | undefined
                                BloomFilterColumns?: {} | undefined
                                BloomFilterFalsePositiveProbability?: {} | undefined
                                DictionaryKeyThreshold?: {} | undefined
                                FormatVersion?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              Enabled?: {} | undefined
            }
          | undefined
        DynamicPartitioningConfiguration?:
          | {
              RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
              Enabled?: {} | undefined
            }
          | undefined
      }
    | undefined
  RedshiftDestinationConfiguration?:
    | {
        RoleARN: {}
        ClusterJDBCURL: {}
        CopyCommand: {
          DataTableName: {}
          DataTableColumns?: {} | undefined
          CopyOptions?: {} | undefined
        }
        Username: {}
        Password: {}
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3Configuration: {
          RoleARN: {}
          BucketARN: {}
          Prefix?: {} | undefined
          ErrorOutputPrefix?: {} | undefined
          BufferingHints?:
            | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
            | undefined
          CompressionFormat?: {} | undefined
          EncryptionConfiguration?:
            | {
                NoEncryptionConfig?: {} | undefined
                KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
              }
            | undefined
          CloudWatchLoggingOptions?:
            | {
                Enabled?: {} | undefined
                LogGroupName?: {} | undefined
                LogStreamName?: {} | undefined
              }
            | undefined
        }
        ProcessingConfiguration?:
          | { Enabled?: {} | undefined; Processors?: {} | undefined }
          | undefined
        S3BackupMode?: {} | undefined
        S3BackupConfiguration?:
          | {
              RoleARN: {}
              BucketARN: {}
              Prefix?: {} | undefined
              ErrorOutputPrefix?: {} | undefined
              BufferingHints?:
                | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
                | undefined
              CompressionFormat?: {} | undefined
              EncryptionConfiguration?:
                | {
                    NoEncryptionConfig?: {} | undefined
                    KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
                  }
                | undefined
              CloudWatchLoggingOptions?:
                | {
                    Enabled?: {} | undefined
                    LogGroupName?: {} | undefined
                    LogStreamName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
      }
    | undefined
  ElasticsearchDestinationConfiguration?:
    | {
        RoleARN: {}
        DomainARN?: {} | undefined
        ClusterEndpoint?: {} | undefined
        IndexName: {}
        TypeName?: {} | undefined
        IndexRotationPeriod?: {} | undefined
        BufferingHints?:
          | { IntervalInSeconds?: {} | undefined; SizeInMBs?: {} | undefined }
          | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3BackupMode?: {} | undefined
        S3Configuration: {
          RoleARN: {}
          BucketARN: {}
          Prefix?: {} | undefined
          ErrorOutputPrefix?: {} | undefined
          BufferingHints?:
            | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
            | undefined
          CompressionFormat?: {} | undefined
          EncryptionConfiguration?:
            | {
                NoEncryptionConfig?: {} | undefined
                KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
              }
            | undefined
          CloudWatchLoggingOptions?:
            | {
                Enabled?: {} | undefined
                LogGroupName?: {} | undefined
                LogStreamName?: {} | undefined
              }
            | undefined
        }
        ProcessingConfiguration?:
          | { Enabled?: {} | undefined; Processors?: {} | undefined }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
        VpcConfiguration?: { SubnetIds: {}; RoleARN: {}; SecurityGroupIds: {} } | undefined
      }
    | undefined
  AmazonopensearchserviceDestinationConfiguration?:
    | {
        RoleARN: {}
        DomainARN?: {} | undefined
        ClusterEndpoint?: {} | undefined
        IndexName: {}
        TypeName?: {} | undefined
        IndexRotationPeriod?: {} | undefined
        BufferingHints?:
          | { IntervalInSeconds?: {} | undefined; SizeInMBs?: {} | undefined }
          | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3BackupMode?: {} | undefined
        S3Configuration: S3DestinationConfiguration
        ProcessingConfiguration?: ProcessingConfiguration | undefined
        CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined
        VpcConfiguration?: VpcConfiguration | undefined
      }
    | undefined
  SplunkDestinationConfiguration?:
    | {
        HECEndpoint: {}
        HECEndpointType: {}
        HECToken: {}
        HECAcknowledgmentTimeoutInSeconds?: {} | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3BackupMode?: {} | undefined
        S3Configuration: {
          RoleARN: {}
          BucketARN: {}
          Prefix?: {} | undefined
          ErrorOutputPrefix?: {} | undefined
          BufferingHints?:
            | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
            | undefined
          CompressionFormat?: {} | undefined
          EncryptionConfiguration?:
            | {
                NoEncryptionConfig?: {} | undefined
                KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
              }
            | undefined
          CloudWatchLoggingOptions?:
            | {
                Enabled?: {} | undefined
                LogGroupName?: {} | undefined
                LogStreamName?: {} | undefined
              }
            | undefined
        }
        ProcessingConfiguration?:
          | { Enabled?: {} | undefined; Processors?: {} | undefined }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
      }
    | undefined
  HttpEndpointDestinationConfiguration?:
    | {
        EndpointConfiguration: { Url: {}; Name?: {} | undefined; AccessKey?: {} | undefined }
        BufferingHints?:
          | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
          | undefined
        CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined
        RequestConfiguration?:
          | { ContentEncoding?: {} | undefined; CommonAttributes?: {} | undefined }
          | undefined
        ProcessingConfiguration?: ProcessingConfiguration | undefined
        RoleARN?: {} | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3BackupMode?: {} | undefined
        S3Configuration: S3DestinationConfiguration
      }
    | undefined
  Tags?: {} | undefined
  AmazonOpenSearchServerlessDestinationConfiguration?:
    | {
        RoleARN: {}
        CollectionEndpoint?: {} | undefined
        IndexName: {}
        BufferingHints?:
          | { IntervalInSeconds?: {} | undefined; SizeInMBs?: {} | undefined }
          | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3BackupMode?: {} | undefined
        S3Configuration: S3DestinationConfiguration
        ProcessingConfiguration?: ProcessingConfiguration | undefined
        CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined
        VpcConfiguration?: VpcConfiguration | undefined
      }
    | undefined
}
type CreateDeliveryStreamOutput = { DeliveryStreamARN?: {} | undefined }
type DeleteDeliveryStreamInput = { DeliveryStreamName: {}; AllowForceDelete?: {} | undefined }
type DeleteDeliveryStreamOutput = { [x: string]: unknown }
type DescribeDeliveryStreamInput = {
  DeliveryStreamName: {}
  Limit?: {} | undefined
  ExclusiveStartDestinationId?: {} | undefined
}
type DescribeDeliveryStreamOutput = {
  DeliveryStreamDescription: {
    DeliveryStreamName: {}
    DeliveryStreamARN: {}
    DeliveryStreamStatus: {}
    FailureDescription?: { Type: {}; Details: {} } | undefined
    DeliveryStreamEncryptionConfiguration?:
      | {
          KeyARN?: {} | undefined
          KeyType?: {} | undefined
          Status?: {} | undefined
          FailureDescription?: { Type: {}; Details: {} } | undefined
        }
      | undefined
    DeliveryStreamType: {}
    VersionId: {}
    CreateTimestamp?: {} | undefined
    LastUpdateTimestamp?: {} | undefined
    Source?:
      | {
          KinesisStreamSourceDescription?:
            | {
                KinesisStreamARN?: {} | undefined
                RoleARN?: {} | undefined
                DeliveryStartTimestamp?: {} | undefined
              }
            | undefined
        }
      | undefined
    Destinations: {}
    HasMoreDestinations: {}
  }
}
type ListDeliveryStreamsInput = {
  Limit?: {} | undefined
  DeliveryStreamType?: {} | undefined
  ExclusiveStartDeliveryStreamName?: {} | undefined
}
type ListDeliveryStreamsOutput = { DeliveryStreamNames: {}; HasMoreDeliveryStreams: {} }
type ListTagsForDeliveryStreamInput = {
  DeliveryStreamName: {}
  ExclusiveStartTagKey?: {} | undefined
  Limit?: {} | undefined
}
type ListTagsForDeliveryStreamOutput = { Tags: {}; HasMoreTags: {} }
type PutRecordInput = { DeliveryStreamName: {}; Record: { Data: {} } }
type PutRecordOutput = { RecordId: {}; Encrypted?: {} | undefined }
type PutRecordBatchInput = { DeliveryStreamName: {}; Records: {} }
type PutRecordBatchOutput = { FailedPutCount: {}; Encrypted?: {} | undefined; RequestResponses: {} }
type StartDeliveryStreamEncryptionInput = {
  DeliveryStreamName: {}
  DeliveryStreamEncryptionConfigurationInput?: { KeyARN?: {} | undefined; KeyType: {} } | undefined
}
type StartDeliveryStreamEncryptionOutput = { [x: string]: unknown }
type StopDeliveryStreamEncryptionInput = { DeliveryStreamName: {} }
type StopDeliveryStreamEncryptionOutput = { [x: string]: unknown }
type TagDeliveryStreamInput = { DeliveryStreamName: {}; Tags: {} }
type TagDeliveryStreamOutput = { [x: string]: unknown }
type UntagDeliveryStreamInput = { DeliveryStreamName: {}; TagKeys: {} }
type UntagDeliveryStreamOutput = { [x: string]: unknown }
type S3DestinationUpdate = {
  RoleARN?: {} | undefined
  BucketARN?: {} | undefined
  Prefix?: {} | undefined
  ErrorOutputPrefix?: {} | undefined
  BufferingHints?: { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined } | undefined
  CompressionFormat?: {} | undefined
  EncryptionConfiguration?:
    | {
        NoEncryptionConfig?: {} | undefined
        KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
      }
    | undefined
  CloudWatchLoggingOptions?:
    | { Enabled?: {} | undefined; LogGroupName?: {} | undefined; LogStreamName?: {} | undefined }
    | undefined
}
type UpdateDestinationInput = {
  DeliveryStreamName: {}
  CurrentDeliveryStreamVersionId: {}
  DestinationId: {}
  S3DestinationUpdate?:
    | {
        RoleARN?: {} | undefined
        BucketARN?: {} | undefined
        Prefix?: {} | undefined
        ErrorOutputPrefix?: {} | undefined
        BufferingHints?:
          | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
          | undefined
        CompressionFormat?: {} | undefined
        EncryptionConfiguration?:
          | {
              NoEncryptionConfig?: {} | undefined
              KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
            }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
      }
    | undefined
  ExtendedS3DestinationUpdate?:
    | {
        RoleARN?: {} | undefined
        BucketARN?: {} | undefined
        Prefix?: {} | undefined
        ErrorOutputPrefix?: {} | undefined
        BufferingHints?:
          | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
          | undefined
        CompressionFormat?: {} | undefined
        EncryptionConfiguration?:
          | {
              NoEncryptionConfig?: {} | undefined
              KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
            }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
        ProcessingConfiguration?:
          | { Enabled?: {} | undefined; Processors?: {} | undefined }
          | undefined
        S3BackupMode?: {} | undefined
        S3BackupUpdate?:
          | {
              RoleARN?: {} | undefined
              BucketARN?: {} | undefined
              Prefix?: {} | undefined
              ErrorOutputPrefix?: {} | undefined
              BufferingHints?:
                | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
                | undefined
              CompressionFormat?: {} | undefined
              EncryptionConfiguration?:
                | {
                    NoEncryptionConfig?: {} | undefined
                    KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
                  }
                | undefined
              CloudWatchLoggingOptions?:
                | {
                    Enabled?: {} | undefined
                    LogGroupName?: {} | undefined
                    LogStreamName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        DataFormatConversionConfiguration?:
          | {
              SchemaConfiguration?:
                | {
                    RoleARN?: {} | undefined
                    CatalogId?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    Region?: {} | undefined
                    VersionId?: {} | undefined
                  }
                | undefined
              InputFormatConfiguration?:
                | {
                    Deserializer?:
                      | {
                          OpenXJsonSerDe?:
                            | {
                                ConvertDotsInJsonKeysToUnderscores?: {} | undefined
                                CaseInsensitive?: {} | undefined
                                ColumnToJsonKeyMappings?: {} | undefined
                              }
                            | undefined
                          HiveJsonSerDe?: { TimestampFormats?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              OutputFormatConfiguration?:
                | {
                    Serializer?:
                      | {
                          ParquetSerDe?:
                            | {
                                BlockSizeBytes?: {} | undefined
                                PageSizeBytes?: {} | undefined
                                Compression?: {} | undefined
                                EnableDictionaryCompression?: {} | undefined
                                MaxPaddingBytes?: {} | undefined
                                WriterVersion?: {} | undefined
                              }
                            | undefined
                          OrcSerDe?:
                            | {
                                StripeSizeBytes?: {} | undefined
                                BlockSizeBytes?: {} | undefined
                                RowIndexStride?: {} | undefined
                                EnablePadding?: {} | undefined
                                PaddingTolerance?: {} | undefined
                                Compression?: {} | undefined
                                BloomFilterColumns?: {} | undefined
                                BloomFilterFalsePositiveProbability?: {} | undefined
                                DictionaryKeyThreshold?: {} | undefined
                                FormatVersion?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              Enabled?: {} | undefined
            }
          | undefined
        DynamicPartitioningConfiguration?:
          | {
              RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
              Enabled?: {} | undefined
            }
          | undefined
      }
    | undefined
  RedshiftDestinationUpdate?:
    | {
        RoleARN?: {} | undefined
        ClusterJDBCURL?: {} | undefined
        CopyCommand?:
          | { DataTableName: {}; DataTableColumns?: {} | undefined; CopyOptions?: {} | undefined }
          | undefined
        Username?: {} | undefined
        Password?: {} | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3Update?:
          | {
              RoleARN?: {} | undefined
              BucketARN?: {} | undefined
              Prefix?: {} | undefined
              ErrorOutputPrefix?: {} | undefined
              BufferingHints?:
                | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
                | undefined
              CompressionFormat?: {} | undefined
              EncryptionConfiguration?:
                | {
                    NoEncryptionConfig?: {} | undefined
                    KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
                  }
                | undefined
              CloudWatchLoggingOptions?:
                | {
                    Enabled?: {} | undefined
                    LogGroupName?: {} | undefined
                    LogStreamName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ProcessingConfiguration?:
          | { Enabled?: {} | undefined; Processors?: {} | undefined }
          | undefined
        S3BackupMode?: {} | undefined
        S3BackupUpdate?:
          | {
              RoleARN?: {} | undefined
              BucketARN?: {} | undefined
              Prefix?: {} | undefined
              ErrorOutputPrefix?: {} | undefined
              BufferingHints?:
                | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
                | undefined
              CompressionFormat?: {} | undefined
              EncryptionConfiguration?:
                | {
                    NoEncryptionConfig?: {} | undefined
                    KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
                  }
                | undefined
              CloudWatchLoggingOptions?:
                | {
                    Enabled?: {} | undefined
                    LogGroupName?: {} | undefined
                    LogStreamName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
      }
    | undefined
  ElasticsearchDestinationUpdate?:
    | {
        RoleARN?: {} | undefined
        DomainARN?: {} | undefined
        ClusterEndpoint?: {} | undefined
        IndexName?: {} | undefined
        TypeName?: {} | undefined
        IndexRotationPeriod?: {} | undefined
        BufferingHints?:
          | { IntervalInSeconds?: {} | undefined; SizeInMBs?: {} | undefined }
          | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3Update?:
          | {
              RoleARN?: {} | undefined
              BucketARN?: {} | undefined
              Prefix?: {} | undefined
              ErrorOutputPrefix?: {} | undefined
              BufferingHints?:
                | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
                | undefined
              CompressionFormat?: {} | undefined
              EncryptionConfiguration?:
                | {
                    NoEncryptionConfig?: {} | undefined
                    KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
                  }
                | undefined
              CloudWatchLoggingOptions?:
                | {
                    Enabled?: {} | undefined
                    LogGroupName?: {} | undefined
                    LogStreamName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ProcessingConfiguration?:
          | { Enabled?: {} | undefined; Processors?: {} | undefined }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
      }
    | undefined
  AmazonopensearchserviceDestinationUpdate?:
    | {
        RoleARN?: {} | undefined
        DomainARN?: {} | undefined
        ClusterEndpoint?: {} | undefined
        IndexName?: {} | undefined
        TypeName?: {} | undefined
        IndexRotationPeriod?: {} | undefined
        BufferingHints?:
          | { IntervalInSeconds?: {} | undefined; SizeInMBs?: {} | undefined }
          | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3Update?: S3DestinationUpdate | undefined
        ProcessingConfiguration?: ProcessingConfiguration | undefined
        CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined
      }
    | undefined
  SplunkDestinationUpdate?:
    | {
        HECEndpoint?: {} | undefined
        HECEndpointType?: {} | undefined
        HECToken?: {} | undefined
        HECAcknowledgmentTimeoutInSeconds?: {} | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3BackupMode?: {} | undefined
        S3Update?:
          | {
              RoleARN?: {} | undefined
              BucketARN?: {} | undefined
              Prefix?: {} | undefined
              ErrorOutputPrefix?: {} | undefined
              BufferingHints?:
                | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
                | undefined
              CompressionFormat?: {} | undefined
              EncryptionConfiguration?:
                | {
                    NoEncryptionConfig?: {} | undefined
                    KMSEncryptionConfig?: { AWSKMSKeyARN: {} } | undefined
                  }
                | undefined
              CloudWatchLoggingOptions?:
                | {
                    Enabled?: {} | undefined
                    LogGroupName?: {} | undefined
                    LogStreamName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ProcessingConfiguration?:
          | { Enabled?: {} | undefined; Processors?: {} | undefined }
          | undefined
        CloudWatchLoggingOptions?:
          | {
              Enabled?: {} | undefined
              LogGroupName?: {} | undefined
              LogStreamName?: {} | undefined
            }
          | undefined
      }
    | undefined
  HttpEndpointDestinationUpdate?:
    | {
        EndpointConfiguration?:
          | { Url: {}; Name?: {} | undefined; AccessKey?: {} | undefined }
          | undefined
        BufferingHints?:
          | { SizeInMBs?: {} | undefined; IntervalInSeconds?: {} | undefined }
          | undefined
        CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined
        RequestConfiguration?:
          | { ContentEncoding?: {} | undefined; CommonAttributes?: {} | undefined }
          | undefined
        ProcessingConfiguration?: ProcessingConfiguration | undefined
        RoleARN?: {} | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3BackupMode?: {} | undefined
        S3Update?: S3DestinationUpdate | undefined
      }
    | undefined
  AmazonOpenSearchServerlessDestinationUpdate?:
    | {
        RoleARN?: {} | undefined
        CollectionEndpoint?: {} | undefined
        IndexName?: {} | undefined
        BufferingHints?:
          | { IntervalInSeconds?: {} | undefined; SizeInMBs?: {} | undefined }
          | undefined
        RetryOptions?: { DurationInSeconds?: {} | undefined } | undefined
        S3Update?: S3DestinationUpdate | undefined
        ProcessingConfiguration?: ProcessingConfiguration | undefined
        CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined
      }
    | undefined
}
type UpdateDestinationOutput = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Firehose_20150804.CreateDeliveryStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.CreateDeliveryStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDeliveryStreamInput }
        output: CreateDeliveryStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.DeleteDeliveryStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDeliveryStreamInput }
        output: DeleteDeliveryStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.DescribeDeliveryStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDeliveryStreamInput }
        output: DescribeDeliveryStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.ListDeliveryStreams': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.ListDeliveryStreams'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDeliveryStreamsInput }
        output: ListDeliveryStreamsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.ListTagsForDeliveryStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForDeliveryStreamInput }
        output: ListTagsForDeliveryStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.PutRecord': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.PutRecord'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRecordInput }
        output: PutRecordOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.PutRecordBatch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.PutRecordBatch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRecordBatchInput }
        output: PutRecordBatchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.StartDeliveryStreamEncryption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDeliveryStreamEncryptionInput }
        output: StartDeliveryStreamEncryptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.StopDeliveryStreamEncryption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopDeliveryStreamEncryptionInput }
        output: StopDeliveryStreamEncryptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.TagDeliveryStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.TagDeliveryStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagDeliveryStreamInput }
        output: TagDeliveryStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.UntagDeliveryStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.UntagDeliveryStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagDeliveryStreamInput }
        output: UntagDeliveryStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Firehose_20150804.UpdateDestination': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Firehose_20150804.UpdateDestination'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDestinationInput }
        output: UpdateDestinationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
