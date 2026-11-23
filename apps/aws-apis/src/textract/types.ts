type AnalyzeDocumentRequest = {
  Document: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  FeatureTypes: {}
  HumanLoopConfig?:
    | {
        HumanLoopName: {}
        FlowDefinitionArn: {}
        DataAttributes?: { ContentClassifiers?: {} | undefined } | undefined
      }
    | undefined
  QueriesConfig?: { Queries: {} } | undefined
}
type AnalyzeDocumentResponse = {
  DocumentMetadata?: { Pages?: {} | undefined } | undefined
  Blocks?: {} | undefined
  HumanLoopActivationOutput?:
    | {
        HumanLoopArn?: {} | undefined
        HumanLoopActivationReasons?: {} | undefined
        HumanLoopActivationConditionsEvaluationResults?: {} | undefined
      }
    | undefined
  AnalyzeDocumentModelVersion?: {} | undefined
}
type Document = {
  Bytes?: {} | undefined
  S3Object?:
    | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
    | undefined
}
type AnalyzeExpenseRequest = { Document: Document }
type DocumentMetadata = { Pages?: {} | undefined }
type AnalyzeExpenseResponse = {
  DocumentMetadata?: DocumentMetadata | undefined
  ExpenseDocuments?: {} | undefined
}
type AnalyzeIDRequest = { DocumentPages: {} }
type AnalyzeIDResponse = {
  IdentityDocuments?: {} | undefined
  DocumentMetadata?: DocumentMetadata | undefined
  AnalyzeIDModelVersion?: {} | undefined
}
type DetectDocumentTextRequest = {
  Document: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
}
type DetectDocumentTextResponse = {
  DocumentMetadata?: { Pages?: {} | undefined } | undefined
  Blocks?: {} | undefined
  DetectDocumentTextModelVersion?: {} | undefined
}
type GetDocumentAnalysisRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetDocumentAnalysisResponse = {
  DocumentMetadata?: { Pages?: {} | undefined } | undefined
  JobStatus?: {} | undefined
  NextToken?: {} | undefined
  Blocks?: {} | undefined
  Warnings?: {} | undefined
  StatusMessage?: {} | undefined
  AnalyzeDocumentModelVersion?: {} | undefined
}
type GetDocumentTextDetectionRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetDocumentTextDetectionResponse = {
  DocumentMetadata?: { Pages?: {} | undefined } | undefined
  JobStatus?: {} | undefined
  NextToken?: {} | undefined
  Blocks?: {} | undefined
  Warnings?: {} | undefined
  StatusMessage?: {} | undefined
  DetectDocumentTextModelVersion?: {} | undefined
}
type GetExpenseAnalysisRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetExpenseAnalysisResponse = {
  DocumentMetadata?: { Pages?: {} | undefined } | undefined
  JobStatus?: {} | undefined
  NextToken?: {} | undefined
  ExpenseDocuments?: {} | undefined
  Warnings?: {} | undefined
  StatusMessage?: {} | undefined
  AnalyzeExpenseModelVersion?: {} | undefined
}
type GetLendingAnalysisRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetLendingAnalysisResponse = {
  DocumentMetadata?: DocumentMetadata | undefined
  JobStatus?: {} | undefined
  NextToken?: {} | undefined
  Results?: {} | undefined
  Warnings?: {} | undefined
  StatusMessage?: {} | undefined
  AnalyzeLendingModelVersion?: {} | undefined
}
type GetLendingAnalysisSummaryRequest = { JobId: {} }
type GetLendingAnalysisSummaryResponse = {
  DocumentMetadata?: DocumentMetadata | undefined
  JobStatus?: {} | undefined
  Summary?:
    | { DocumentGroups?: {} | undefined; UndetectedDocumentTypes?: {} | undefined }
    | undefined
  Warnings?: {} | undefined
  StatusMessage?: {} | undefined
  AnalyzeLendingModelVersion?: {} | undefined
}
type QueriesConfig = { Queries: {} }
type StartDocumentAnalysisRequest = {
  DocumentLocation: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  FeatureTypes: {}
  ClientRequestToken?: {} | undefined
  JobTag?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  OutputConfig?: { S3Bucket: {}; S3Prefix?: {} | undefined } | undefined
  KMSKeyId?: {} | undefined
  QueriesConfig?: QueriesConfig | undefined
}
type StartDocumentAnalysisResponse = { JobId?: {} | undefined }
type StartDocumentTextDetectionRequest = {
  DocumentLocation: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  ClientRequestToken?: {} | undefined
  JobTag?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  OutputConfig?: { S3Bucket: {}; S3Prefix?: {} | undefined } | undefined
  KMSKeyId?: {} | undefined
}
type StartDocumentTextDetectionResponse = { JobId?: {} | undefined }
type StartExpenseAnalysisRequest = {
  DocumentLocation: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  ClientRequestToken?: {} | undefined
  JobTag?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  OutputConfig?: { S3Bucket: {}; S3Prefix?: {} | undefined } | undefined
  KMSKeyId?: {} | undefined
}
type StartExpenseAnalysisResponse = { JobId?: {} | undefined }
type DocumentLocation = {
  S3Object?:
    | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
    | undefined
}
type NotificationChannel = { SNSTopicArn: {}; RoleArn: {} }
type OutputConfig = { S3Bucket: {}; S3Prefix?: {} | undefined }
type StartLendingAnalysisRequest = {
  DocumentLocation: DocumentLocation
  ClientRequestToken?: {} | undefined
  JobTag?: {} | undefined
  NotificationChannel?: NotificationChannel | undefined
  OutputConfig?: OutputConfig | undefined
  KMSKeyId?: {} | undefined
}
type StartLendingAnalysisResponse = { JobId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Textract.AnalyzeDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.AnalyzeDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AnalyzeDocumentRequest }
        output: AnalyzeDocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.AnalyzeExpense': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.AnalyzeExpense'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AnalyzeExpenseRequest }
        output: AnalyzeExpenseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.AnalyzeID': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.AnalyzeID'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AnalyzeIDRequest }
        output: AnalyzeIDResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.DetectDocumentText': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.DetectDocumentText'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetectDocumentTextRequest }
        output: DetectDocumentTextResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.GetDocumentAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.GetDocumentAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDocumentAnalysisRequest }
        output: GetDocumentAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.GetDocumentTextDetection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.GetDocumentTextDetection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDocumentTextDetectionRequest }
        output: GetDocumentTextDetectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.GetExpenseAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.GetExpenseAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetExpenseAnalysisRequest }
        output: GetExpenseAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.GetLendingAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.GetLendingAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLendingAnalysisRequest }
        output: GetLendingAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.GetLendingAnalysisSummary': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.GetLendingAnalysisSummary'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLendingAnalysisSummaryRequest }
        output: GetLendingAnalysisSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.StartDocumentAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.StartDocumentAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDocumentAnalysisRequest }
        output: StartDocumentAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.StartDocumentTextDetection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.StartDocumentTextDetection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDocumentTextDetectionRequest }
        output: StartDocumentTextDetectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.StartExpenseAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.StartExpenseAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartExpenseAnalysisRequest }
        output: StartExpenseAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Textract.StartLendingAnalysis': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Textract.StartLendingAnalysis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartLendingAnalysisRequest }
        output: StartLendingAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
