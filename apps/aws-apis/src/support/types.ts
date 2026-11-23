type AddAttachmentsToSetRequest = { attachmentSetId?: {} | undefined; attachments: {} }
type AddAttachmentsToSetResponse = { attachmentSetId?: {} | undefined; expiryTime?: {} | undefined }
type AddCommunicationToCaseRequest = {
  caseId?: {} | undefined
  communicationBody: {}
  ccEmailAddresses?: {} | undefined
  attachmentSetId?: {} | undefined
}
type AddCommunicationToCaseResponse = { result?: {} | undefined }
type CreateCaseRequest = {
  subject: {}
  serviceCode?: {} | undefined
  severityCode?: {} | undefined
  categoryCode?: {} | undefined
  communicationBody: {}
  ccEmailAddresses?: {} | undefined
  language?: {} | undefined
  issueType?: {} | undefined
  attachmentSetId?: {} | undefined
}
type CreateCaseResponse = { caseId?: {} | undefined }
type DescribeAttachmentRequest = { attachmentId: {} }
type DescribeAttachmentResponse = {
  attachment?: { fileName?: {} | undefined; data?: {} | undefined } | undefined
}
type DescribeCasesRequest = {
  caseIdList?: {} | undefined
  displayId?: {} | undefined
  afterTime?: {} | undefined
  beforeTime?: {} | undefined
  includeResolvedCases?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  language?: {} | undefined
  includeCommunications?: {} | undefined
}
type DescribeCasesResponse = { cases?: {} | undefined; nextToken?: {} | undefined }
type DescribeCommunicationsRequest = {
  caseId: {}
  beforeTime?: {} | undefined
  afterTime?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeCommunicationsResponse = {
  communications?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeServicesRequest = { serviceCodeList?: {} | undefined; language?: {} | undefined }
type DescribeServicesResponse = { services?: {} | undefined }
type DescribeSeverityLevelsRequest = { language?: {} | undefined }
type DescribeSeverityLevelsResponse = { severityLevels?: {} | undefined }
type DescribeTrustedAdvisorCheckRefreshStatusesRequest = { checkIds: {} }
type DescribeTrustedAdvisorCheckRefreshStatusesResponse = { statuses: {} }
type DescribeTrustedAdvisorCheckResultRequest = { checkId: {}; language?: {} | undefined }
type TrustedAdvisorResourcesSummary = {
  resourcesProcessed: {}
  resourcesFlagged: {}
  resourcesIgnored: {}
  resourcesSuppressed: {}
}
type DescribeTrustedAdvisorCheckResultResponse = {
  result?:
    | {
        checkId: {}
        timestamp: {}
        status: {}
        resourcesSummary: TrustedAdvisorResourcesSummary
        categorySpecificSummary: {
          costOptimizing?:
            | { estimatedMonthlySavings: {}; estimatedPercentMonthlySavings: {} }
            | undefined
        }
        flaggedResources: {}
      }
    | undefined
}
type DescribeTrustedAdvisorCheckSummariesRequest = { checkIds: {} }
type DescribeTrustedAdvisorCheckSummariesResponse = { summaries: {} }
type DescribeTrustedAdvisorChecksRequest = { language: {} }
type DescribeTrustedAdvisorChecksResponse = { checks: {} }
type RefreshTrustedAdvisorCheckRequest = { checkId: {} }
type RefreshTrustedAdvisorCheckResponse = {
  status: { checkId: {}; status: {}; millisUntilNextRefreshable: {} }
}
type ResolveCaseRequest = { caseId?: {} | undefined }
type ResolveCaseResponse = { initialCaseStatus?: {} | undefined; finalCaseStatus?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.AddAttachmentsToSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddAttachmentsToSetRequest }
        output: AddAttachmentsToSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.AddCommunicationToCase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddCommunicationToCaseRequest }
        output: AddCommunicationToCaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.CreateCase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.CreateCase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCaseRequest }
        output: CreateCaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeAttachment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeAttachment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAttachmentRequest }
        output: DescribeAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeCases': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeCases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCasesRequest }
        output: DescribeCasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeCommunications': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeCommunications'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCommunicationsRequest }
        output: DescribeCommunicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeServices': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeServices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeServicesRequest }
        output: DescribeServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeSeverityLevels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSeverityLevelsRequest }
        output: DescribeSeverityLevelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTrustedAdvisorCheckRefreshStatusesRequest }
        output: DescribeTrustedAdvisorCheckRefreshStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeTrustedAdvisorCheckResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTrustedAdvisorCheckResultRequest }
        output: DescribeTrustedAdvisorCheckResultResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTrustedAdvisorCheckSummariesRequest }
        output: DescribeTrustedAdvisorCheckSummariesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.DescribeTrustedAdvisorChecks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTrustedAdvisorChecksRequest }
        output: DescribeTrustedAdvisorChecksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.RefreshTrustedAdvisorCheck'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RefreshTrustedAdvisorCheckRequest }
        output: RefreshTrustedAdvisorCheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.ResolveCase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSupport_20130415.ResolveCase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResolveCaseRequest }
        output: ResolveCaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
