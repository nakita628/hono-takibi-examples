type DescribeEntitiesDetectionV2JobRequest = { JobId: {} }
type DescribeEntitiesDetectionV2JobResponse = {
  ComprehendMedicalAsyncJobProperties?:
    | {
        JobId?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        ExpirationTime?: {} | undefined
        InputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
        OutputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        ManifestFilePath?: {} | undefined
        KMSKey?: {} | undefined
        ModelVersion?: {} | undefined
      }
    | undefined
}
type DescribeICD10CMInferenceJobRequest = { JobId: {} }
type DescribeICD10CMInferenceJobResponse = {
  ComprehendMedicalAsyncJobProperties?:
    | {
        JobId?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        ExpirationTime?: {} | undefined
        InputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
        OutputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        ManifestFilePath?: {} | undefined
        KMSKey?: {} | undefined
        ModelVersion?: {} | undefined
      }
    | undefined
}
type DescribePHIDetectionJobRequest = { JobId: {} }
type DescribePHIDetectionJobResponse = {
  ComprehendMedicalAsyncJobProperties?:
    | {
        JobId?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        ExpirationTime?: {} | undefined
        InputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
        OutputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        ManifestFilePath?: {} | undefined
        KMSKey?: {} | undefined
        ModelVersion?: {} | undefined
      }
    | undefined
}
type DescribeRxNormInferenceJobRequest = { JobId: {} }
type DescribeRxNormInferenceJobResponse = {
  ComprehendMedicalAsyncJobProperties?:
    | {
        JobId?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        Message?: {} | undefined
        SubmitTime?: {} | undefined
        EndTime?: {} | undefined
        ExpirationTime?: {} | undefined
        InputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
        OutputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
        LanguageCode?: {} | undefined
        DataAccessRoleArn?: {} | undefined
        ManifestFilePath?: {} | undefined
        KMSKey?: {} | undefined
        ModelVersion?: {} | undefined
      }
    | undefined
}
type DescribeSNOMEDCTInferenceJobRequest = { JobId: {} }
type ComprehendMedicalAsyncJobProperties = {
  JobId?: {} | undefined
  JobName?: {} | undefined
  JobStatus?: {} | undefined
  Message?: {} | undefined
  SubmitTime?: {} | undefined
  EndTime?: {} | undefined
  ExpirationTime?: {} | undefined
  InputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
  OutputDataConfig?: { S3Bucket: {}; S3Key?: {} | undefined } | undefined
  LanguageCode?: {} | undefined
  DataAccessRoleArn?: {} | undefined
  ManifestFilePath?: {} | undefined
  KMSKey?: {} | undefined
  ModelVersion?: {} | undefined
}
type DescribeSNOMEDCTInferenceJobResponse = {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | undefined
}
type DetectEntitiesRequest = { Text: {} }
type DetectEntitiesResponse = {
  Entities: {}
  UnmappedAttributes?: {} | undefined
  PaginationToken?: {} | undefined
  ModelVersion: {}
}
type DetectEntitiesV2Request = { Text: {} }
type DetectEntitiesV2Response = {
  Entities: {}
  UnmappedAttributes?: {} | undefined
  PaginationToken?: {} | undefined
  ModelVersion: {}
}
type DetectPHIRequest = { Text: {} }
type DetectPHIResponse = { Entities: {}; PaginationToken?: {} | undefined; ModelVersion: {} }
type InferICD10CMRequest = { Text: {} }
type InferICD10CMResponse = {
  Entities: {}
  PaginationToken?: {} | undefined
  ModelVersion?: {} | undefined
}
type InferRxNormRequest = { Text: {} }
type InferRxNormResponse = {
  Entities: {}
  PaginationToken?: {} | undefined
  ModelVersion?: {} | undefined
}
type InferSNOMEDCTRequest = { Text: {} }
type InferSNOMEDCTResponse = {
  Entities: {}
  PaginationToken?: {} | undefined
  ModelVersion?: {} | undefined
  SNOMEDCTDetails?:
    | { Edition?: {} | undefined; Language?: {} | undefined; VersionDate?: {} | undefined }
    | undefined
  Characters?: { OriginalTextCharacters?: {} | undefined } | undefined
}
type ListEntitiesDetectionV2JobsRequest = {
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
type ListEntitiesDetectionV2JobsResponse = {
  ComprehendMedicalAsyncJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListICD10CMInferenceJobsRequest = {
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
type ListICD10CMInferenceJobsResponse = {
  ComprehendMedicalAsyncJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListPHIDetectionJobsRequest = {
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
type ListPHIDetectionJobsResponse = {
  ComprehendMedicalAsyncJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListRxNormInferenceJobsRequest = {
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
type ListRxNormInferenceJobsResponse = {
  ComprehendMedicalAsyncJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ComprehendMedicalAsyncJobFilter = {
  JobName?: {} | undefined
  JobStatus?: {} | undefined
  SubmitTimeBefore?: {} | undefined
  SubmitTimeAfter?: {} | undefined
}
type ListSNOMEDCTInferenceJobsRequest = {
  Filter?: ComprehendMedicalAsyncJobFilter | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListSNOMEDCTInferenceJobsResponse = {
  ComprehendMedicalAsyncJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type StartEntitiesDetectionV2JobRequest = {
  InputDataConfig: { S3Bucket: {}; S3Key?: {} | undefined }
  OutputDataConfig: { S3Bucket: {}; S3Key?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  ClientRequestToken?: {} | undefined
  KMSKey?: {} | undefined
  LanguageCode: {}
}
type StartEntitiesDetectionV2JobResponse = { JobId?: {} | undefined }
type StartICD10CMInferenceJobRequest = {
  InputDataConfig: { S3Bucket: {}; S3Key?: {} | undefined }
  OutputDataConfig: { S3Bucket: {}; S3Key?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  ClientRequestToken?: {} | undefined
  KMSKey?: {} | undefined
  LanguageCode: {}
}
type StartICD10CMInferenceJobResponse = { JobId?: {} | undefined }
type StartPHIDetectionJobRequest = {
  InputDataConfig: { S3Bucket: {}; S3Key?: {} | undefined }
  OutputDataConfig: { S3Bucket: {}; S3Key?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  ClientRequestToken?: {} | undefined
  KMSKey?: {} | undefined
  LanguageCode: {}
}
type StartPHIDetectionJobResponse = { JobId?: {} | undefined }
type StartRxNormInferenceJobRequest = {
  InputDataConfig: { S3Bucket: {}; S3Key?: {} | undefined }
  OutputDataConfig: { S3Bucket: {}; S3Key?: {} | undefined }
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  ClientRequestToken?: {} | undefined
  KMSKey?: {} | undefined
  LanguageCode: {}
}
type StartRxNormInferenceJobResponse = { JobId?: {} | undefined }
type InputDataConfig = { S3Bucket: {}; S3Key?: {} | undefined }
type OutputDataConfig = { S3Bucket: {}; S3Key?: {} | undefined }
type StartSNOMEDCTInferenceJobRequest = {
  InputDataConfig: InputDataConfig
  OutputDataConfig: OutputDataConfig
  DataAccessRoleArn: {}
  JobName?: {} | undefined
  ClientRequestToken?: {} | undefined
  KMSKey?: {} | undefined
  LanguageCode: {}
}
type StartSNOMEDCTInferenceJobResponse = { JobId?: {} | undefined }
type StopEntitiesDetectionV2JobRequest = { JobId: {} }
type StopEntitiesDetectionV2JobResponse = { JobId?: {} | undefined }
type StopICD10CMInferenceJobRequest = { JobId: {} }
type StopICD10CMInferenceJobResponse = { JobId?: {} | undefined }
type StopPHIDetectionJobRequest = { JobId: {} }
type StopPHIDetectionJobResponse = { JobId?: {} | undefined }
type StopRxNormInferenceJobRequest = { JobId: {} }
type StopRxNormInferenceJobResponse = { JobId?: {} | undefined }
type StopSNOMEDCTInferenceJobRequest = { JobId: {} }
type StopSNOMEDCTInferenceJobResponse = { JobId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEntitiesDetectionV2JobRequest }
        output: DescribeEntitiesDetectionV2JobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.DescribeICD10CMInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeICD10CMInferenceJobRequest }
        output: DescribeICD10CMInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.DescribePHIDetectionJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePHIDetectionJobRequest }
        output: DescribePHIDetectionJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.DescribeRxNormInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRxNormInferenceJobRequest }
        output: DescribeRxNormInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSNOMEDCTInferenceJobRequest }
        output: DescribeSNOMEDCTInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectEntities': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.DetectEntities'
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
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.DetectEntitiesV2'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetectEntitiesV2Request }
        output: DetectEntitiesV2Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectPHI': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.DetectPHI'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetectPHIRequest }
        output: DetectPHIResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.InferICD10CM'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: InferICD10CMRequest }
        output: InferICD10CMResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.InferRxNorm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: InferRxNormRequest }
        output: InferRxNormResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.InferSNOMEDCT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: InferSNOMEDCTRequest }
        output: InferSNOMEDCTResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEntitiesDetectionV2JobsRequest }
        output: ListEntitiesDetectionV2JobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.ListICD10CMInferenceJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListICD10CMInferenceJobsRequest }
        output: ListICD10CMInferenceJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.ListPHIDetectionJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPHIDetectionJobsRequest }
        output: ListPHIDetectionJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.ListRxNormInferenceJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRxNormInferenceJobsRequest }
        output: ListRxNormInferenceJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSNOMEDCTInferenceJobsRequest }
        output: ListSNOMEDCTInferenceJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StartEntitiesDetectionV2Job'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartEntitiesDetectionV2JobRequest }
        output: StartEntitiesDetectionV2JobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StartICD10CMInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartICD10CMInferenceJobRequest }
        output: StartICD10CMInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StartPHIDetectionJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartPHIDetectionJobRequest }
        output: StartPHIDetectionJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StartRxNormInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartRxNormInferenceJobRequest }
        output: StartRxNormInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StartSNOMEDCTInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartSNOMEDCTInferenceJobRequest }
        output: StartSNOMEDCTInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StopEntitiesDetectionV2Job'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopEntitiesDetectionV2JobRequest }
        output: StopEntitiesDetectionV2JobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StopICD10CMInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopICD10CMInferenceJobRequest }
        output: StopICD10CMInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StopPHIDetectionJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopPHIDetectionJobRequest }
        output: StopPHIDetectionJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StopRxNormInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopRxNormInferenceJobRequest }
        output: StopRxNormInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComprehendMedical_20181030.StopSNOMEDCTInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopSNOMEDCTInferenceJobRequest }
        output: StopSNOMEDCTInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
