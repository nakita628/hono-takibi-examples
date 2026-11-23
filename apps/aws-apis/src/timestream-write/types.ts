type DataModelConfiguration = {
  DataModel?:
    | {
        TimeColumn?: {} | undefined
        TimeUnit?: {} | undefined
        DimensionMappings: {}
        MultiMeasureMappings?:
          | { TargetMultiMeasureName?: {} | undefined; MultiMeasureAttributeMappings: {} }
          | undefined
        MixedMeasureMappings?: {} | undefined
        MeasureNameColumn?: {} | undefined
      }
    | undefined
  DataModelS3Configuration?: { BucketName?: {} | undefined; ObjectKey?: {} | undefined } | undefined
}
type CsvConfiguration = {
  ColumnSeparator?: {} | undefined
  EscapeChar?: {} | undefined
  QuoteChar?: {} | undefined
  NullValue?: {} | undefined
  TrimWhiteSpace?: {} | undefined
}
type ReportConfiguration = {
  ReportS3Configuration?:
    | {
        BucketName: {}
        ObjectKeyPrefix?: {} | undefined
        EncryptionOption?: {} | undefined
        KmsKeyId?: {} | undefined
      }
    | undefined
}
type CreateBatchLoadTaskRequest = {
  ClientToken?: {} | undefined
  DataModelConfiguration?: DataModelConfiguration | undefined
  DataSourceConfiguration: {
    DataSourceS3Configuration: { BucketName: {}; ObjectKeyPrefix?: {} | undefined }
    CsvConfiguration?: CsvConfiguration | undefined
    DataFormat: {}
  }
  ReportConfiguration: ReportConfiguration
  TargetDatabaseName: {}
  TargetTableName: {}
  RecordVersion?: {} | undefined
}
type CreateBatchLoadTaskResponse = { TaskId: {} }
type CreateDatabaseRequest = { DatabaseName: {}; KmsKeyId?: {} | undefined; Tags?: {} | undefined }
type CreateDatabaseResponse = {
  Database?:
    | {
        Arn?: {} | undefined
        DatabaseName?: {} | undefined
        TableCount?: {} | undefined
        KmsKeyId?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type CreateTableRequest = {
  DatabaseName: {}
  TableName: {}
  RetentionProperties?:
    | { MemoryStoreRetentionPeriodInHours: {}; MagneticStoreRetentionPeriodInDays: {} }
    | undefined
  Tags?: {} | undefined
  MagneticStoreWriteProperties?:
    | {
        EnableMagneticStoreWrites: {}
        MagneticStoreRejectedDataLocation?:
          | {
              S3Configuration?:
                | {
                    BucketName?: {} | undefined
                    ObjectKeyPrefix?: {} | undefined
                    EncryptionOption?: {} | undefined
                    KmsKeyId?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CreateTableResponse = {
  Table?:
    | {
        Arn?: {} | undefined
        TableName?: {} | undefined
        DatabaseName?: {} | undefined
        TableStatus?: {} | undefined
        RetentionProperties?:
          | { MemoryStoreRetentionPeriodInHours: {}; MagneticStoreRetentionPeriodInDays: {} }
          | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        MagneticStoreWriteProperties?:
          | {
              EnableMagneticStoreWrites: {}
              MagneticStoreRejectedDataLocation?:
                | {
                    S3Configuration?:
                      | {
                          BucketName?: {} | undefined
                          ObjectKeyPrefix?: {} | undefined
                          EncryptionOption?: {} | undefined
                          KmsKeyId?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DeleteDatabaseRequest = { DatabaseName: {} }
type DeleteTableRequest = { DatabaseName: {}; TableName: {} }
type DescribeBatchLoadTaskRequest = { TaskId: {} }
type DescribeBatchLoadTaskResponse = {
  BatchLoadTaskDescription: {
    TaskId?: {} | undefined
    ErrorMessage?: {} | undefined
    DataSourceConfiguration?:
      | {
          DataSourceS3Configuration: { BucketName: {}; ObjectKeyPrefix?: {} | undefined }
          CsvConfiguration?: CsvConfiguration | undefined
          DataFormat: {}
        }
      | undefined
    ProgressReport?:
      | {
          RecordsProcessed?: {} | undefined
          RecordsIngested?: {} | undefined
          ParseFailures?: {} | undefined
          RecordIngestionFailures?: {} | undefined
          FileFailures?: {} | undefined
          BytesMetered?: {} | undefined
        }
      | undefined
    ReportConfiguration?:
      | {
          ReportS3Configuration?:
            | {
                BucketName: {}
                ObjectKeyPrefix?: {} | undefined
                EncryptionOption?: {} | undefined
                KmsKeyId?: {} | undefined
              }
            | undefined
        }
      | undefined
    DataModelConfiguration?:
      | {
          DataModel?:
            | {
                TimeColumn?: {} | undefined
                TimeUnit?: {} | undefined
                DimensionMappings: {}
                MultiMeasureMappings?:
                  | { TargetMultiMeasureName?: {} | undefined; MultiMeasureAttributeMappings: {} }
                  | undefined
                MixedMeasureMappings?: {} | undefined
                MeasureNameColumn?: {} | undefined
              }
            | undefined
          DataModelS3Configuration?:
            | { BucketName?: {} | undefined; ObjectKey?: {} | undefined }
            | undefined
        }
      | undefined
    TargetDatabaseName?: {} | undefined
    TargetTableName?: {} | undefined
    TaskStatus?: {} | undefined
    RecordVersion?: {} | undefined
    CreationTime?: {} | undefined
    LastUpdatedTime?: {} | undefined
    ResumableUntil?: {} | undefined
  }
}
type DescribeDatabaseRequest = { DatabaseName: {} }
type DescribeDatabaseResponse = {
  Database?:
    | {
        Arn?: {} | undefined
        DatabaseName?: {} | undefined
        TableCount?: {} | undefined
        KmsKeyId?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type DescribeEndpointsRequest = { [x: string]: unknown }
type DescribeEndpointsResponse = { Endpoints: {} }
type DescribeTableRequest = { DatabaseName: {}; TableName: {} }
type DescribeTableResponse = {
  Table?:
    | {
        Arn?: {} | undefined
        TableName?: {} | undefined
        DatabaseName?: {} | undefined
        TableStatus?: {} | undefined
        RetentionProperties?:
          | { MemoryStoreRetentionPeriodInHours: {}; MagneticStoreRetentionPeriodInDays: {} }
          | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        MagneticStoreWriteProperties?:
          | {
              EnableMagneticStoreWrites: {}
              MagneticStoreRejectedDataLocation?:
                | {
                    S3Configuration?:
                      | {
                          BucketName?: {} | undefined
                          ObjectKeyPrefix?: {} | undefined
                          EncryptionOption?: {} | undefined
                          KmsKeyId?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type ListBatchLoadTasksRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  TaskStatus?: {} | undefined
}
type ListBatchLoadTasksResponse = { NextToken?: {} | undefined; BatchLoadTasks?: {} | undefined }
type ListDatabasesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListDatabasesResponse = { Databases?: {} | undefined; NextToken?: {} | undefined }
type ListTablesRequest = {
  DatabaseName?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTablesResponse = { Tables?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ResumeBatchLoadTaskRequest = { TaskId: {} }
type ResumeBatchLoadTaskResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateDatabaseRequest = { DatabaseName: {}; KmsKeyId: {} }
type Database = {
  Arn?: {} | undefined
  DatabaseName?: {} | undefined
  TableCount?: {} | undefined
  KmsKeyId?: {} | undefined
  CreationTime?: {} | undefined
  LastUpdatedTime?: {} | undefined
}
type UpdateDatabaseResponse = { Database?: Database | undefined }
type UpdateTableRequest = {
  DatabaseName: {}
  TableName: {}
  RetentionProperties?:
    | { MemoryStoreRetentionPeriodInHours: {}; MagneticStoreRetentionPeriodInDays: {} }
    | undefined
  MagneticStoreWriteProperties?:
    | {
        EnableMagneticStoreWrites: {}
        MagneticStoreRejectedDataLocation?:
          | {
              S3Configuration?:
                | {
                    BucketName?: {} | undefined
                    ObjectKeyPrefix?: {} | undefined
                    EncryptionOption?: {} | undefined
                    KmsKeyId?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateTableResponse = {
  Table?:
    | {
        Arn?: {} | undefined
        TableName?: {} | undefined
        DatabaseName?: {} | undefined
        TableStatus?: {} | undefined
        RetentionProperties?:
          | { MemoryStoreRetentionPeriodInHours: {}; MagneticStoreRetentionPeriodInDays: {} }
          | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        MagneticStoreWriteProperties?:
          | {
              EnableMagneticStoreWrites: {}
              MagneticStoreRejectedDataLocation?:
                | {
                    S3Configuration?:
                      | {
                          BucketName?: {} | undefined
                          ObjectKeyPrefix?: {} | undefined
                          EncryptionOption?: {} | undefined
                          KmsKeyId?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type WriteRecordsRequest = {
  DatabaseName: {}
  TableName: {}
  CommonAttributes?:
    | {
        Dimensions?: {} | undefined
        MeasureName?: {} | undefined
        MeasureValue?: {} | undefined
        MeasureValueType?: {} | undefined
        Time?: {} | undefined
        TimeUnit?: {} | undefined
        Version?: {} | undefined
        MeasureValues?: {} | undefined
      }
    | undefined
  Records: {}
}
type WriteRecordsResponse = {
  RecordsIngested?:
    | { Total?: {} | undefined; MemoryStore?: {} | undefined; MagneticStore?: {} | undefined }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.CreateBatchLoadTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBatchLoadTaskRequest }
        output: CreateBatchLoadTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.CreateDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.CreateDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatabaseRequest }
        output: CreateDatabaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.CreateTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.CreateTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTableRequest }
        output: CreateTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DeleteDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DeleteDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDatabaseRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DeleteTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DeleteTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTableRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DescribeBatchLoadTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBatchLoadTaskRequest }
        output: DescribeBatchLoadTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DescribeDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DescribeDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDatabaseRequest }
        output: DescribeDatabaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DescribeEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DescribeEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointsRequest }
        output: DescribeEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DescribeTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DescribeTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTableRequest }
        output: DescribeTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Timestream_20181101.ListBatchLoadTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBatchLoadTasksRequest }
        output: ListBatchLoadTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.ListDatabases': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Timestream_20181101.ListDatabases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatabasesRequest }
        output: ListDatabasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.ListTables': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Timestream_20181101.ListTables'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTablesRequest }
        output: ListTablesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.ListTagsForResource'
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
    '/#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.ResumeBatchLoadTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResumeBatchLoadTaskRequest }
        output: ResumeBatchLoadTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.TagResource'
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
    '/#X-Amz-Target=Timestream_20181101.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.UntagResource'
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
    '/#X-Amz-Target=Timestream_20181101.UpdateDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.UpdateDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDatabaseRequest }
        output: UpdateDatabaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.UpdateTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.UpdateTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateTableRequest }
        output: UpdateTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.WriteRecords': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.WriteRecords'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: WriteRecordsRequest }
        output: WriteRecordsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
