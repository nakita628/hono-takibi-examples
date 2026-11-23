type CreateFHIRDatastoreRequest = {
  DatastoreName?: {} | undefined
  DatastoreTypeVersion: {}
  SseConfiguration?: { KmsEncryptionConfig: { CmkType: {}; KmsKeyId?: {} | undefined } } | undefined
  PreloadDataConfig?: { PreloadDataType: {} } | undefined
  ClientToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateFHIRDatastoreResponse = {
  DatastoreId: {}
  DatastoreArn: {}
  DatastoreStatus: {}
  DatastoreEndpoint: {}
}
type DeleteFHIRDatastoreRequest = { DatastoreId?: {} | undefined }
type DeleteFHIRDatastoreResponse = {
  DatastoreId: {}
  DatastoreArn: {}
  DatastoreStatus: {}
  DatastoreEndpoint: {}
}
type DescribeFHIRDatastoreRequest = { DatastoreId?: {} | undefined }
type DescribeFHIRDatastoreResponse = {
  DatastoreProperties: {
    DatastoreId: {}
    DatastoreArn: {}
    DatastoreName?: {} | undefined
    DatastoreStatus: {}
    CreatedAt?: {} | undefined
    DatastoreTypeVersion: {}
    DatastoreEndpoint: {}
    SseConfiguration?:
      | { KmsEncryptionConfig: { CmkType: {}; KmsKeyId?: {} | undefined } }
      | undefined
    PreloadDataConfig?: { PreloadDataType: {} } | undefined
  }
}
type DescribeFHIRExportJobRequest = { DatastoreId: {}; JobId: {} }
type DescribeFHIRExportJobResponse = {
  ExportJobProperties: {
    JobId: {}
    JobName?: {} | undefined
    JobStatus: {}
    SubmitTime: {}
    EndTime?: {} | undefined
    DatastoreId: {}
    OutputDataConfig: { S3Configuration?: { S3Uri: {}; KmsKeyId: {} } | undefined }
    DataAccessRoleArn?: {} | undefined
    Message?: {} | undefined
  }
}
type DescribeFHIRImportJobRequest = { DatastoreId: {}; JobId: {} }
type OutputDataConfig = { S3Configuration?: { S3Uri: {}; KmsKeyId: {} } | undefined }
type DescribeFHIRImportJobResponse = {
  ImportJobProperties: {
    JobId: {}
    JobName?: {} | undefined
    JobStatus: {}
    SubmitTime: {}
    EndTime?: {} | undefined
    DatastoreId: {}
    InputDataConfig: { S3Uri?: {} | undefined }
    JobOutputDataConfig?: OutputDataConfig | undefined
    DataAccessRoleArn?: {} | undefined
    Message?: {} | undefined
  }
}
type ListFHIRDatastoresRequest = {
  Filter?:
    | {
        DatastoreName?: {} | undefined
        DatastoreStatus?: {} | undefined
        CreatedBefore?: {} | undefined
        CreatedAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListFHIRDatastoresResponse = { DatastorePropertiesList: {}; NextToken?: {} | undefined }
type ListFHIRExportJobsRequest = {
  DatastoreId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  JobName?: {} | undefined
  JobStatus?: {} | undefined
  SubmittedBefore?: {} | undefined
  SubmittedAfter?: {} | undefined
}
type ListFHIRExportJobsResponse = { ExportJobPropertiesList: {}; NextToken?: {} | undefined }
type ListFHIRImportJobsRequest = {
  DatastoreId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  JobName?: {} | undefined
  JobStatus?: {} | undefined
  SubmittedBefore?: {} | undefined
  SubmittedAfter?: {} | undefined
}
type ListFHIRImportJobsResponse = { ImportJobPropertiesList: {}; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type StartFHIRExportJobRequest = {
  JobName?: {} | undefined
  OutputDataConfig: { S3Configuration?: { S3Uri: {}; KmsKeyId: {} } | undefined }
  DatastoreId: {}
  DataAccessRoleArn: {}
  ClientToken: {}
}
type StartFHIRExportJobResponse = { JobId: {}; JobStatus: {}; DatastoreId?: {} | undefined }
type StartFHIRImportJobRequest = {
  JobName?: {} | undefined
  InputDataConfig: { S3Uri?: {} | undefined }
  JobOutputDataConfig: OutputDataConfig
  DatastoreId: {}
  DataAccessRoleArn: {}
  ClientToken: {}
}
type StartFHIRImportJobResponse = { JobId: {}; JobStatus: {}; DatastoreId?: {} | undefined }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=HealthLake.CreateFHIRDatastore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.CreateFHIRDatastore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFHIRDatastoreRequest }
        output: CreateFHIRDatastoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.DeleteFHIRDatastore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.DeleteFHIRDatastore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFHIRDatastoreRequest }
        output: DeleteFHIRDatastoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.DescribeFHIRDatastore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.DescribeFHIRDatastore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFHIRDatastoreRequest }
        output: DescribeFHIRDatastoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.DescribeFHIRExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.DescribeFHIRExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFHIRExportJobRequest }
        output: DescribeFHIRExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.DescribeFHIRImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.DescribeFHIRImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFHIRImportJobRequest }
        output: DescribeFHIRImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.ListFHIRDatastores': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'HealthLake.ListFHIRDatastores'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFHIRDatastoresRequest }
        output: ListFHIRDatastoresResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.ListFHIRExportJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'HealthLake.ListFHIRExportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFHIRExportJobsRequest }
        output: ListFHIRExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.ListFHIRImportJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'HealthLake.ListFHIRImportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFHIRImportJobsRequest }
        output: ListFHIRImportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.ListTagsForResource'
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
    '/#X-Amz-Target=HealthLake.StartFHIRExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.StartFHIRExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartFHIRExportJobRequest }
        output: StartFHIRExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.StartFHIRImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.StartFHIRImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartFHIRImportJobRequest }
        output: StartFHIRImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=HealthLake.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.TagResource'
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
    '/#X-Amz-Target=HealthLake.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'HealthLake.UntagResource'
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
  },
  '/'
>
export default routes
