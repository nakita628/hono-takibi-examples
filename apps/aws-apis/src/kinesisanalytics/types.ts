type AddApplicationCloudWatchLoggingOptionRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  CloudWatchLoggingOption: { LogStreamARN: {}; RoleARN: {} }
}
type AddApplicationCloudWatchLoggingOptionResponse = { [x: string]: unknown }
type AddApplicationInputRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  Input: {
    NamePrefix: {}
    InputProcessingConfiguration?:
      | { InputLambdaProcessor: { ResourceARN: {}; RoleARN: {} } }
      | undefined
    KinesisStreamsInput?: { ResourceARN: {}; RoleARN: {} } | undefined
    KinesisFirehoseInput?: { ResourceARN: {}; RoleARN: {} } | undefined
    InputParallelism?: { Count?: {} | undefined } | undefined
    InputSchema: {
      RecordFormat: {
        RecordFormatType: {}
        MappingParameters?:
          | {
              JSONMappingParameters?: { RecordRowPath: {} } | undefined
              CSVMappingParameters?:
                | { RecordRowDelimiter: {}; RecordColumnDelimiter: {} }
                | undefined
            }
          | undefined
      }
      RecordEncoding?: {} | undefined
      RecordColumns: {}
    }
  }
}
type AddApplicationInputResponse = { [x: string]: unknown }
type AddApplicationInputProcessingConfigurationRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  InputId: {}
  InputProcessingConfiguration: { InputLambdaProcessor: { ResourceARN: {}; RoleARN: {} } }
}
type AddApplicationInputProcessingConfigurationResponse = { [x: string]: unknown }
type AddApplicationOutputRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  Output: {
    Name: {}
    KinesisStreamsOutput?: { ResourceARN: {}; RoleARN: {} } | undefined
    KinesisFirehoseOutput?: { ResourceARN: {}; RoleARN: {} } | undefined
    LambdaOutput?: { ResourceARN: {}; RoleARN: {} } | undefined
    DestinationSchema: { RecordFormatType: {} }
  }
}
type AddApplicationOutputResponse = { [x: string]: unknown }
type AddApplicationReferenceDataSourceRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  ReferenceDataSource: {
    TableName: {}
    S3ReferenceDataSource?: { BucketARN: {}; FileKey: {}; ReferenceRoleARN: {} } | undefined
    ReferenceSchema: {
      RecordFormat: {
        RecordFormatType: {}
        MappingParameters?:
          | {
              JSONMappingParameters?: { RecordRowPath: {} } | undefined
              CSVMappingParameters?:
                | { RecordRowDelimiter: {}; RecordColumnDelimiter: {} }
                | undefined
            }
          | undefined
      }
      RecordEncoding?: {} | undefined
      RecordColumns: {}
    }
  }
}
type AddApplicationReferenceDataSourceResponse = { [x: string]: unknown }
type CreateApplicationRequest = {
  ApplicationName: {}
  ApplicationDescription?: {} | undefined
  Inputs?: {} | undefined
  Outputs?: {} | undefined
  CloudWatchLoggingOptions?: {} | undefined
  ApplicationCode?: {} | undefined
  Tags?: {} | undefined
}
type CreateApplicationResponse = {
  ApplicationSummary: { ApplicationName: {}; ApplicationARN: {}; ApplicationStatus: {} }
}
type DeleteApplicationRequest = { ApplicationName: {}; CreateTimestamp: {} }
type DeleteApplicationResponse = { [x: string]: unknown }
type DeleteApplicationCloudWatchLoggingOptionRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  CloudWatchLoggingOptionId: {}
}
type DeleteApplicationCloudWatchLoggingOptionResponse = { [x: string]: unknown }
type DeleteApplicationInputProcessingConfigurationRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  InputId: {}
}
type DeleteApplicationInputProcessingConfigurationResponse = { [x: string]: unknown }
type DeleteApplicationOutputRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  OutputId: {}
}
type DeleteApplicationOutputResponse = { [x: string]: unknown }
type DeleteApplicationReferenceDataSourceRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  ReferenceId: {}
}
type DeleteApplicationReferenceDataSourceResponse = { [x: string]: unknown }
type DescribeApplicationRequest = { ApplicationName: {} }
type DescribeApplicationResponse = {
  ApplicationDetail: {
    ApplicationName: {}
    ApplicationDescription?: {} | undefined
    ApplicationARN: {}
    ApplicationStatus: {}
    CreateTimestamp?: {} | undefined
    LastUpdateTimestamp?: {} | undefined
    InputDescriptions?: {} | undefined
    OutputDescriptions?: {} | undefined
    ReferenceDataSourceDescriptions?: {} | undefined
    CloudWatchLoggingOptionDescriptions?: {} | undefined
    ApplicationCode?: {} | undefined
    ApplicationVersionId: {}
  }
}
type DiscoverInputSchemaRequest = {
  ResourceARN?: {} | undefined
  RoleARN?: {} | undefined
  InputStartingPositionConfiguration?: { InputStartingPosition?: {} | undefined } | undefined
  S3Configuration?: { RoleARN: {}; BucketARN: {}; FileKey: {} } | undefined
  InputProcessingConfiguration?:
    | { InputLambdaProcessor: { ResourceARN: {}; RoleARN: {} } }
    | undefined
}
type DiscoverInputSchemaResponse = {
  InputSchema?:
    | {
        RecordFormat: {
          RecordFormatType: {}
          MappingParameters?:
            | {
                JSONMappingParameters?: { RecordRowPath: {} } | undefined
                CSVMappingParameters?:
                  | { RecordRowDelimiter: {}; RecordColumnDelimiter: {} }
                  | undefined
              }
            | undefined
        }
        RecordEncoding?: {} | undefined
        RecordColumns: {}
      }
    | undefined
  ParsedInputRecords?: {} | undefined
  ProcessedInputRecords?: {} | undefined
  RawInputRecords?: {} | undefined
}
type ListApplicationsRequest = {
  Limit?: {} | undefined
  ExclusiveStartApplicationName?: {} | undefined
}
type ListApplicationsResponse = { ApplicationSummaries: {}; HasMoreApplications: {} }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type StartApplicationRequest = { ApplicationName: {}; InputConfigurations: {} }
type StartApplicationResponse = { [x: string]: unknown }
type StopApplicationRequest = { ApplicationName: {} }
type StopApplicationResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateApplicationRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  ApplicationUpdate: {
    InputUpdates?: {} | undefined
    ApplicationCodeUpdate?: {} | undefined
    OutputUpdates?: {} | undefined
    ReferenceDataSourceUpdates?: {} | undefined
    CloudWatchLoggingOptionUpdates?: {} | undefined
  }
}
type UpdateApplicationResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationCloudWatchLoggingOptionRequest }
        output: AddApplicationCloudWatchLoggingOptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.AddApplicationInput'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationInputRequest }
        output: AddApplicationInputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationInputProcessingConfigurationRequest }
        output: AddApplicationInputProcessingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.AddApplicationOutput'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationOutputRequest }
        output: AddApplicationOutputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.AddApplicationReferenceDataSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationReferenceDataSourceRequest }
        output: AddApplicationReferenceDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.CreateApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateApplicationRequest }
        output: CreateApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.DeleteApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationRequest }
        output: DeleteApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationCloudWatchLoggingOptionRequest }
        output: DeleteApplicationCloudWatchLoggingOptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationInputProcessingConfigurationRequest }
        output: DeleteApplicationInputProcessingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.DeleteApplicationOutput'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationOutputRequest }
        output: DeleteApplicationOutputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationReferenceDataSourceRequest }
        output: DeleteApplicationReferenceDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.DescribeApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeApplicationRequest }
        output: DescribeApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.DiscoverInputSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DiscoverInputSchemaRequest }
        output: DiscoverInputSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.ListApplications': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.ListApplications'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListApplicationsRequest }
        output: ListApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.ListTagsForResource'
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
    '/#X-Amz-Target=KinesisAnalytics_20150814.StartApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.StartApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartApplicationRequest }
        output: StartApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.StopApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.StopApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopApplicationRequest }
        output: StopApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20150814.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.TagResource'
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
    '/#X-Amz-Target=KinesisAnalytics_20150814.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.UntagResource'
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
    '/#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20150814.UpdateApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApplicationRequest }
        output: UpdateApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
