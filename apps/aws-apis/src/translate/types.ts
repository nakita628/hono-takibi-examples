type EncryptionKey = { Type: {}; Id: {} }
type CreateParallelDataRequest = {
  Name: {}
  Description?: {} | undefined
  ParallelDataConfig: { S3Uri: {}; Format: {} }
  EncryptionKey?: EncryptionKey | undefined
  ClientToken: {}
  Tags?: {} | undefined
}
type CreateParallelDataResponse = { Name?: {} | undefined; Status?: {} | undefined }
type DeleteParallelDataRequest = { Name: {} }
type DeleteParallelDataResponse = { Name?: {} | undefined; Status?: {} | undefined }
type DeleteTerminologyRequest = { Name: {} }
type DescribeTextTranslationJobRequest = { JobId: {} }
type DescribeTextTranslationJobResponse = {
  TextTranslationJobProperties?:
    | {
        JobId?: {} | undefined
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        JobDetails?:
          | {
              TranslatedDocumentsCount?: {} | undefined
              DocumentsWithErrorsCount?: {} | undefined
              InputDocumentsCount?: {} | undefined
            }
          | undefined
        SourceLanguageCode?: {} | undefined
        TargetLanguageCodes?: {} | undefined
        TerminologyNames?: {} | undefined
        ParallelDataNames?: {} | undefined
        Message?: {} | undefined
        SubmittedTime?: {} | undefined
        EndTime?: {} | undefined
        InputDataConfig?: { S3Uri: {}; ContentType: {} } | undefined
        OutputDataConfig?: { S3Uri: {}; EncryptionKey?: EncryptionKey | undefined } | undefined
        DataAccessRoleArn?: {} | undefined
        Settings?: { Formality?: {} | undefined; Profanity?: {} | undefined } | undefined
      }
    | undefined
}
type GetParallelDataRequest = { Name: {} }
type GetParallelDataResponse = {
  ParallelDataProperties?:
    | {
        Name?: {} | undefined
        Arn?: {} | undefined
        Description?: {} | undefined
        Status?: {} | undefined
        SourceLanguageCode?: {} | undefined
        TargetLanguageCodes?: {} | undefined
        ParallelDataConfig?: { S3Uri: {}; Format: {} } | undefined
        Message?: {} | undefined
        ImportedDataSize?: {} | undefined
        ImportedRecordCount?: {} | undefined
        FailedRecordCount?: {} | undefined
        SkippedRecordCount?: {} | undefined
        EncryptionKey?: EncryptionKey | undefined
        CreatedAt?: {} | undefined
        LastUpdatedAt?: {} | undefined
        LatestUpdateAttemptStatus?: {} | undefined
        LatestUpdateAttemptAt?: {} | undefined
      }
    | undefined
  DataLocation?: { RepositoryType: {}; Location: {} } | undefined
  AuxiliaryDataLocation?: { RepositoryType: {}; Location: {} } | undefined
  LatestUpdateAttemptAuxiliaryDataLocation?: { RepositoryType: {}; Location: {} } | undefined
}
type GetTerminologyRequest = { Name: {}; TerminologyDataFormat?: {} | undefined }
type GetTerminologyResponse = {
  TerminologyProperties?:
    | {
        Name?: {} | undefined
        Description?: {} | undefined
        Arn?: {} | undefined
        SourceLanguageCode?: {} | undefined
        TargetLanguageCodes?: {} | undefined
        EncryptionKey?: { Type: {}; Id: {} } | undefined
        SizeBytes?: {} | undefined
        TermCount?: {} | undefined
        CreatedAt?: {} | undefined
        LastUpdatedAt?: {} | undefined
        Directionality?: {} | undefined
        Message?: {} | undefined
        SkippedTermCount?: {} | undefined
        Format?: {} | undefined
      }
    | undefined
  TerminologyDataLocation?: { RepositoryType: {}; Location: {} } | undefined
  AuxiliaryDataLocation?: { RepositoryType: {}; Location: {} } | undefined
}
type ImportTerminologyRequest = {
  Name: {}
  MergeStrategy: {}
  Description?: {} | undefined
  TerminologyData: { File: {}; Format: {}; Directionality?: {} | undefined }
  EncryptionKey?: { Type: {}; Id: {} } | undefined
  Tags?: {} | undefined
}
type ImportTerminologyResponse = {
  TerminologyProperties?:
    | {
        Name?: {} | undefined
        Description?: {} | undefined
        Arn?: {} | undefined
        SourceLanguageCode?: {} | undefined
        TargetLanguageCodes?: {} | undefined
        EncryptionKey?: { Type: {}; Id: {} } | undefined
        SizeBytes?: {} | undefined
        TermCount?: {} | undefined
        CreatedAt?: {} | undefined
        LastUpdatedAt?: {} | undefined
        Directionality?: {} | undefined
        Message?: {} | undefined
        SkippedTermCount?: {} | undefined
        Format?: {} | undefined
      }
    | undefined
  AuxiliaryDataLocation?: { RepositoryType: {}; Location: {} } | undefined
}
type ListLanguagesRequest = {
  DisplayLanguageCode?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListLanguagesResponse = {
  Languages?: {} | undefined
  DisplayLanguageCode?: {} | undefined
  NextToken?: {} | undefined
}
type ListParallelDataRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListParallelDataResponse = {
  ParallelDataPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListTerminologiesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListTerminologiesResponse = {
  TerminologyPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type ListTextTranslationJobsRequest = {
  Filter?:
    | {
        JobName?: {} | undefined
        JobStatus?: {} | undefined
        SubmittedBeforeTime?: {} | undefined
        SubmittedAfterTime?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTextTranslationJobsResponse = {
  TextTranslationJobPropertiesList?: {} | undefined
  NextToken?: {} | undefined
}
type StartTextTranslationJobRequest = {
  JobName?: {} | undefined
  InputDataConfig: { S3Uri: {}; ContentType: {} }
  OutputDataConfig: { S3Uri: {}; EncryptionKey?: EncryptionKey | undefined }
  DataAccessRoleArn: {}
  SourceLanguageCode: {}
  TargetLanguageCodes: {}
  TerminologyNames?: {} | undefined
  ParallelDataNames?: {} | undefined
  ClientToken: {}
  Settings?: { Formality?: {} | undefined; Profanity?: {} | undefined } | undefined
}
type StartTextTranslationJobResponse = { JobId?: {} | undefined; JobStatus?: {} | undefined }
type StopTextTranslationJobRequest = { JobId: {} }
type StopTextTranslationJobResponse = { JobId?: {} | undefined; JobStatus?: {} | undefined }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type TranslationSettings = { Formality?: {} | undefined; Profanity?: {} | undefined }
type TranslateDocumentRequest = {
  Document: { Content: {}; ContentType: {} }
  TerminologyNames?: {} | undefined
  SourceLanguageCode: {}
  TargetLanguageCode: {}
  Settings?: TranslationSettings | undefined
}
type TranslateDocumentResponse = {
  TranslatedDocument: { Content: {} }
  SourceLanguageCode: {}
  TargetLanguageCode: {}
  AppliedTerminologies?: {} | undefined
  AppliedSettings?: TranslationSettings | undefined
}
type TranslateTextRequest = {
  Text: {}
  TerminologyNames?: {} | undefined
  SourceLanguageCode: {}
  TargetLanguageCode: {}
  Settings?: { Formality?: {} | undefined; Profanity?: {} | undefined } | undefined
}
type TranslateTextResponse = {
  TranslatedText: {}
  SourceLanguageCode: {}
  TargetLanguageCode: {}
  AppliedTerminologies?: {} | undefined
  AppliedSettings?: { Formality?: {} | undefined; Profanity?: {} | undefined } | undefined
}
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateParallelDataRequest = {
  Name: {}
  Description?: {} | undefined
  ParallelDataConfig: { S3Uri: {}; Format: {} }
  ClientToken: {}
}
type UpdateParallelDataResponse = {
  Name?: {} | undefined
  Status?: {} | undefined
  LatestUpdateAttemptStatus?: {} | undefined
  LatestUpdateAttemptAt?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.CreateParallelData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateParallelDataRequest }
        output: CreateParallelDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.DeleteParallelData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteParallelDataRequest }
        output: DeleteParallelDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.DeleteTerminology'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTerminologyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.DescribeTextTranslationJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTextTranslationJobRequest }
        output: DescribeTextTranslationJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.GetParallelData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetParallelDataRequest }
        output: GetParallelDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.GetTerminology'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTerminologyRequest }
        output: GetTerminologyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.ImportTerminology'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportTerminologyRequest }
        output: ImportTerminologyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.ListLanguages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLanguagesRequest }
        output: ListLanguagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.ListParallelData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListParallelDataRequest }
        output: ListParallelDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.ListTagsForResource'
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
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.ListTerminologies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTerminologiesRequest }
        output: ListTerminologiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.ListTextTranslationJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTextTranslationJobsRequest }
        output: ListTextTranslationJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.StartTextTranslationJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartTextTranslationJobRequest }
        output: StartTextTranslationJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.StopTextTranslationJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopTextTranslationJobRequest }
        output: StopTextTranslationJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.TagResource'
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
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.TranslateDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TranslateDocumentRequest }
        output: TranslateDocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.TranslateText'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TranslateTextRequest }
        output: TranslateTextResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.UntagResource'
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
    '/#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShineFrontendService_20170701.UpdateParallelData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateParallelDataRequest }
        output: UpdateParallelDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
