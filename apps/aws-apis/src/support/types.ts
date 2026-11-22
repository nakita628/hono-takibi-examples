type AddAttachmentsToSetRequest = { attachmentSetId?: {} | undefined; attachments: {} }
type AddAttachmentsToSetResponse = { attachmentSetId?: {} | undefined; expiryTime?: {} | undefined }
type InternalServerError = { [x: string]: unknown }
type AttachmentSetIdNotFound = { [x: string]: unknown }
type AttachmentSetExpired = { [x: string]: unknown }
type AttachmentSetSizeLimitExceeded = { [x: string]: unknown }
type AttachmentLimitExceeded = { [x: string]: unknown }
type AddCommunicationToCaseRequest = {
  caseId?: {} | undefined
  communicationBody: {}
  ccEmailAddresses?: {} | undefined
  attachmentSetId?: {} | undefined
}
type AddCommunicationToCaseResponse = { result?: {} | undefined }
type CaseIdNotFound = { [x: string]: unknown }
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
type CaseCreationLimitExceeded = { [x: string]: unknown }
type DescribeAttachmentRequest = { attachmentId: {} }
type DescribeAttachmentResponse = {
  attachment?: { fileName?: {} | undefined; data?: {} | undefined } | undefined
}
type DescribeAttachmentLimitExceeded = { [x: string]: unknown }
type AttachmentIdNotFound = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AttachmentSetIdNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AttachmentSetExpired
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AttachmentSetSizeLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AttachmentLimitExceeded
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: CaseIdNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AttachmentSetIdNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AttachmentSetExpired
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.CreateCase': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: CaseCreationLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AttachmentSetIdNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AttachmentSetExpired
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeAttachment': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: DescribeAttachmentLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AttachmentIdNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeCases': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: CaseIdNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeCommunications': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: CaseIdNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeServices': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSSupport_20130415.ResolveCase': {
      $post:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: CaseIdNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
