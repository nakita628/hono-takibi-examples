type AcceptQualificationRequestRequest = {
  QualificationRequestId: {}
  IntegerValue?: {} | undefined
}
type AcceptQualificationRequestResponse = { [x: string]: unknown }
type ApproveAssignmentRequest = {
  AssignmentId: {}
  RequesterFeedback?: {} | undefined
  OverrideRejection?: {} | undefined
}
type ApproveAssignmentResponse = { [x: string]: unknown }
type AssociateQualificationWithWorkerRequest = {
  QualificationTypeId: {}
  WorkerId: {}
  IntegerValue?: {} | undefined
  SendNotification?: {} | undefined
}
type AssociateQualificationWithWorkerResponse = { [x: string]: unknown }
type CreateAdditionalAssignmentsForHITRequest = {
  HITId: {}
  NumberOfAdditionalAssignments: {}
  UniqueRequestToken?: {} | undefined
}
type CreateAdditionalAssignmentsForHITResponse = { [x: string]: unknown }
type CreateHITRequest = {
  MaxAssignments?: {} | undefined
  AutoApprovalDelayInSeconds?: {} | undefined
  LifetimeInSeconds: {}
  AssignmentDurationInSeconds: {}
  Reward: {}
  Title: {}
  Keywords?: {} | undefined
  Description: {}
  Question?: {} | undefined
  RequesterAnnotation?: {} | undefined
  QualificationRequirements?: {} | undefined
  UniqueRequestToken?: {} | undefined
  AssignmentReviewPolicy?: { PolicyName: {}; Parameters?: {} | undefined } | undefined
  HITReviewPolicy?: { PolicyName: {}; Parameters?: {} | undefined } | undefined
  HITLayoutId?: {} | undefined
  HITLayoutParameters?: {} | undefined
}
type CurrencyAmount = string
type CreateHITResponse = {
  HIT?:
    | {
        HITId?: {} | undefined
        HITTypeId?: {} | undefined
        HITGroupId?: {} | undefined
        HITLayoutId?: {} | undefined
        CreationTime?: {} | undefined
        Title?: {} | undefined
        Description?: {} | undefined
        Question?: {} | undefined
        Keywords?: {} | undefined
        HITStatus?: {} | undefined
        MaxAssignments?: {} | undefined
        Reward?: CurrencyAmount | undefined
        AutoApprovalDelayInSeconds?: {} | undefined
        Expiration?: {} | undefined
        AssignmentDurationInSeconds?: {} | undefined
        RequesterAnnotation?: {} | undefined
        QualificationRequirements?: {} | undefined
        HITReviewStatus?: {} | undefined
        NumberOfAssignmentsPending?: {} | undefined
        NumberOfAssignmentsAvailable?: {} | undefined
        NumberOfAssignmentsCompleted?: {} | undefined
      }
    | undefined
}
type CreateHITTypeRequest = {
  AutoApprovalDelayInSeconds?: {} | undefined
  AssignmentDurationInSeconds: {}
  Reward: {}
  Title: {}
  Keywords?: {} | undefined
  Description: {}
  QualificationRequirements?: {} | undefined
}
type CreateHITTypeResponse = { HITTypeId?: {} | undefined }
type CreateHITWithHITTypeRequest = {
  HITTypeId: {}
  MaxAssignments?: {} | undefined
  LifetimeInSeconds: {}
  Question?: {} | undefined
  RequesterAnnotation?: {} | undefined
  UniqueRequestToken?: {} | undefined
  AssignmentReviewPolicy?: { PolicyName: {}; Parameters?: {} | undefined } | undefined
  HITReviewPolicy?: { PolicyName: {}; Parameters?: {} | undefined } | undefined
  HITLayoutId?: {} | undefined
  HITLayoutParameters?: {} | undefined
}
type CreateHITWithHITTypeResponse = {
  HIT?:
    | {
        HITId?: {} | undefined
        HITTypeId?: {} | undefined
        HITGroupId?: {} | undefined
        HITLayoutId?: {} | undefined
        CreationTime?: {} | undefined
        Title?: {} | undefined
        Description?: {} | undefined
        Question?: {} | undefined
        Keywords?: {} | undefined
        HITStatus?: {} | undefined
        MaxAssignments?: {} | undefined
        Reward?: CurrencyAmount | undefined
        AutoApprovalDelayInSeconds?: {} | undefined
        Expiration?: {} | undefined
        AssignmentDurationInSeconds?: {} | undefined
        RequesterAnnotation?: {} | undefined
        QualificationRequirements?: {} | undefined
        HITReviewStatus?: {} | undefined
        NumberOfAssignmentsPending?: {} | undefined
        NumberOfAssignmentsAvailable?: {} | undefined
        NumberOfAssignmentsCompleted?: {} | undefined
      }
    | undefined
}
type CreateQualificationTypeRequest = {
  Name: {}
  Keywords?: {} | undefined
  Description: {}
  QualificationTypeStatus: {}
  RetryDelayInSeconds?: {} | undefined
  Test?: {} | undefined
  AnswerKey?: {} | undefined
  TestDurationInSeconds?: {} | undefined
  AutoGranted?: {} | undefined
  AutoGrantedValue?: {} | undefined
}
type CreateQualificationTypeResponse = {
  QualificationType?:
    | {
        QualificationTypeId?: {} | undefined
        CreationTime?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Keywords?: {} | undefined
        QualificationTypeStatus?: {} | undefined
        Test?: {} | undefined
        TestDurationInSeconds?: {} | undefined
        AnswerKey?: {} | undefined
        RetryDelayInSeconds?: {} | undefined
        IsRequestable?: {} | undefined
        AutoGranted?: {} | undefined
        AutoGrantedValue?: {} | undefined
      }
    | undefined
}
type CreateWorkerBlockRequest = { WorkerId: {}; Reason: {} }
type CreateWorkerBlockResponse = { [x: string]: unknown }
type DeleteHITRequest = { HITId: {} }
type DeleteHITResponse = { [x: string]: unknown }
type DeleteQualificationTypeRequest = { QualificationTypeId: {} }
type DeleteQualificationTypeResponse = { [x: string]: unknown }
type DeleteWorkerBlockRequest = { WorkerId: {}; Reason?: {} | undefined }
type DeleteWorkerBlockResponse = { [x: string]: unknown }
type DisassociateQualificationFromWorkerRequest = {
  WorkerId: {}
  QualificationTypeId: {}
  Reason?: {} | undefined
}
type DisassociateQualificationFromWorkerResponse = { [x: string]: unknown }
type GetAccountBalanceRequest = { [x: string]: unknown }
type GetAccountBalanceResponse = {
  AvailableBalance?: CurrencyAmount | undefined
  OnHoldBalance?: CurrencyAmount | undefined
}
type GetAssignmentRequest = { AssignmentId: {} }
type GetAssignmentResponse = {
  Assignment?:
    | {
        AssignmentId?: {} | undefined
        WorkerId?: {} | undefined
        HITId?: {} | undefined
        AssignmentStatus?: {} | undefined
        AutoApprovalTime?: {} | undefined
        AcceptTime?: {} | undefined
        SubmitTime?: {} | undefined
        ApprovalTime?: {} | undefined
        RejectionTime?: {} | undefined
        Deadline?: {} | undefined
        Answer?: {} | undefined
        RequesterFeedback?: {} | undefined
      }
    | undefined
  HIT?:
    | {
        HITId?: {} | undefined
        HITTypeId?: {} | undefined
        HITGroupId?: {} | undefined
        HITLayoutId?: {} | undefined
        CreationTime?: {} | undefined
        Title?: {} | undefined
        Description?: {} | undefined
        Question?: {} | undefined
        Keywords?: {} | undefined
        HITStatus?: {} | undefined
        MaxAssignments?: {} | undefined
        Reward?: CurrencyAmount | undefined
        AutoApprovalDelayInSeconds?: {} | undefined
        Expiration?: {} | undefined
        AssignmentDurationInSeconds?: {} | undefined
        RequesterAnnotation?: {} | undefined
        QualificationRequirements?: {} | undefined
        HITReviewStatus?: {} | undefined
        NumberOfAssignmentsPending?: {} | undefined
        NumberOfAssignmentsAvailable?: {} | undefined
        NumberOfAssignmentsCompleted?: {} | undefined
      }
    | undefined
}
type GetFileUploadURLRequest = { AssignmentId: {}; QuestionIdentifier: {} }
type GetFileUploadURLResponse = { FileUploadURL?: {} | undefined }
type GetHITRequest = { HITId: {} }
type GetHITResponse = {
  HIT?:
    | {
        HITId?: {} | undefined
        HITTypeId?: {} | undefined
        HITGroupId?: {} | undefined
        HITLayoutId?: {} | undefined
        CreationTime?: {} | undefined
        Title?: {} | undefined
        Description?: {} | undefined
        Question?: {} | undefined
        Keywords?: {} | undefined
        HITStatus?: {} | undefined
        MaxAssignments?: {} | undefined
        Reward?: CurrencyAmount | undefined
        AutoApprovalDelayInSeconds?: {} | undefined
        Expiration?: {} | undefined
        AssignmentDurationInSeconds?: {} | undefined
        RequesterAnnotation?: {} | undefined
        QualificationRequirements?: {} | undefined
        HITReviewStatus?: {} | undefined
        NumberOfAssignmentsPending?: {} | undefined
        NumberOfAssignmentsAvailable?: {} | undefined
        NumberOfAssignmentsCompleted?: {} | undefined
      }
    | undefined
}
type GetQualificationScoreRequest = { QualificationTypeId: {}; WorkerId: {} }
type Locale = { Country: {}; Subdivision?: {} | undefined }
type GetQualificationScoreResponse = {
  Qualification?:
    | {
        QualificationTypeId?: {} | undefined
        WorkerId?: {} | undefined
        GrantTime?: {} | undefined
        IntegerValue?: {} | undefined
        LocaleValue?: Locale | undefined
        Status?: {} | undefined
      }
    | undefined
}
type GetQualificationTypeRequest = { QualificationTypeId: {} }
type GetQualificationTypeResponse = {
  QualificationType?:
    | {
        QualificationTypeId?: {} | undefined
        CreationTime?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Keywords?: {} | undefined
        QualificationTypeStatus?: {} | undefined
        Test?: {} | undefined
        TestDurationInSeconds?: {} | undefined
        AnswerKey?: {} | undefined
        RetryDelayInSeconds?: {} | undefined
        IsRequestable?: {} | undefined
        AutoGranted?: {} | undefined
        AutoGrantedValue?: {} | undefined
      }
    | undefined
}
type ResultSize = number
type ListAssignmentsForHITRequest = {
  HITId: {}
  NextToken?: {} | undefined
  MaxResults?: ResultSize | undefined
  AssignmentStatuses?: {} | undefined
}
type PaginationToken = string
type ListAssignmentsForHITResponse = {
  NextToken?: PaginationToken | undefined
  NumResults?: {} | undefined
  Assignments?: {} | undefined
}
type ListBonusPaymentsRequest = {
  HITId?: {} | undefined
  AssignmentId?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: ResultSize | undefined
}
type ListBonusPaymentsResponse = {
  NumResults?: {} | undefined
  NextToken?: PaginationToken | undefined
  BonusPayments?: {} | undefined
}
type ListHITsRequest = { NextToken?: {} | undefined; MaxResults?: ResultSize | undefined }
type ListHITsResponse = {
  NextToken?: PaginationToken | undefined
  NumResults?: {} | undefined
  HITs?: {} | undefined
}
type ListHITsForQualificationTypeRequest = {
  QualificationTypeId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListHITsForQualificationTypeResponse = {
  NextToken?: PaginationToken | undefined
  NumResults?: {} | undefined
  HITs?: {} | undefined
}
type ListQualificationRequestsRequest = {
  QualificationTypeId?: {} | undefined
  NextToken?: PaginationToken | undefined
  MaxResults?: {} | undefined
}
type ListQualificationRequestsResponse = {
  NumResults?: {} | undefined
  NextToken?: PaginationToken | undefined
  QualificationRequests?: {} | undefined
}
type ListQualificationTypesRequest = {
  Query?: {} | undefined
  MustBeRequestable: {}
  MustBeOwnedByCaller?: {} | undefined
  NextToken?: PaginationToken | undefined
  MaxResults?: {} | undefined
}
type ListQualificationTypesResponse = {
  NumResults?: {} | undefined
  NextToken?: PaginationToken | undefined
  QualificationTypes?: {} | undefined
}
type ListReviewPolicyResultsForHITRequest = {
  HITId: {}
  PolicyLevels?: {} | undefined
  RetrieveActions?: {} | undefined
  RetrieveResults?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListReviewPolicyResultsForHITResponse = {
  HITId?: {} | undefined
  AssignmentReviewPolicy?: { PolicyName: {}; Parameters?: {} | undefined } | undefined
  HITReviewPolicy?: { PolicyName: {}; Parameters?: {} | undefined } | undefined
  AssignmentReviewReport?:
    | { ReviewResults?: {} | undefined; ReviewActions?: {} | undefined }
    | undefined
  HITReviewReport?: { ReviewResults?: {} | undefined; ReviewActions?: {} | undefined } | undefined
  NextToken?: PaginationToken | undefined
}
type ListReviewableHITsRequest = {
  HITTypeId?: {} | undefined
  Status?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListReviewableHITsResponse = {
  NextToken?: PaginationToken | undefined
  NumResults?: {} | undefined
  HITs?: {} | undefined
}
type ListWorkerBlocksRequest = { NextToken?: {} | undefined; MaxResults?: ResultSize | undefined }
type ListWorkerBlocksResponse = {
  NextToken?: PaginationToken | undefined
  NumResults?: {} | undefined
  WorkerBlocks?: {} | undefined
}
type ListWorkersWithQualificationTypeRequest = {
  QualificationTypeId: {}
  Status?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListWorkersWithQualificationTypeResponse = {
  NextToken?: PaginationToken | undefined
  NumResults?: {} | undefined
  Qualifications?: {} | undefined
}
type NotifyWorkersRequest = { Subject: {}; MessageText: {}; WorkerIds: {} }
type NotifyWorkersResponse = { NotifyWorkersFailureStatuses?: {} | undefined }
type RejectAssignmentRequest = { AssignmentId: {}; RequesterFeedback: {} }
type RejectAssignmentResponse = { [x: string]: unknown }
type RejectQualificationRequestRequest = { QualificationRequestId: {}; Reason?: {} | undefined }
type RejectQualificationRequestResponse = { [x: string]: unknown }
type SendBonusRequest = {
  WorkerId: {}
  BonusAmount: {}
  AssignmentId: {}
  Reason: {}
  UniqueRequestToken?: {} | undefined
}
type SendBonusResponse = { [x: string]: unknown }
type SendTestEventNotificationRequest = {
  Notification: { Destination: {}; Transport: {}; Version: {}; EventTypes: {} }
  TestEventType: {}
}
type SendTestEventNotificationResponse = { [x: string]: unknown }
type UpdateExpirationForHITRequest = { HITId: {}; ExpireAt: {} }
type UpdateExpirationForHITResponse = { [x: string]: unknown }
type UpdateHITReviewStatusRequest = { HITId: {}; Revert?: {} | undefined }
type UpdateHITReviewStatusResponse = { [x: string]: unknown }
type UpdateHITTypeOfHITRequest = { HITId: {}; HITTypeId: {} }
type UpdateHITTypeOfHITResponse = { [x: string]: unknown }
type UpdateNotificationSettingsRequest = {
  HITTypeId: {}
  Notification?: { Destination: {}; Transport: {}; Version: {}; EventTypes: {} } | undefined
  Active?: {} | undefined
}
type UpdateNotificationSettingsResponse = { [x: string]: unknown }
type UpdateQualificationTypeRequest = {
  QualificationTypeId: {}
  Description?: {} | undefined
  QualificationTypeStatus?: {} | undefined
  Test?: {} | undefined
  AnswerKey?: {} | undefined
  TestDurationInSeconds?: {} | undefined
  RetryDelayInSeconds?: {} | undefined
  AutoGranted?: {} | undefined
  AutoGrantedValue?: {} | undefined
}
type UpdateQualificationTypeResponse = {
  QualificationType?:
    | {
        QualificationTypeId?: {} | undefined
        CreationTime?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Keywords?: {} | undefined
        QualificationTypeStatus?: {} | undefined
        Test?: {} | undefined
        TestDurationInSeconds?: {} | undefined
        AnswerKey?: {} | undefined
        RetryDelayInSeconds?: {} | undefined
        IsRequestable?: {} | undefined
        AutoGranted?: {} | undefined
        AutoGrantedValue?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.AcceptQualificationRequest'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcceptQualificationRequestRequest }
        output: AcceptQualificationRequestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ApproveAssignment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ApproveAssignmentRequest }
        output: ApproveAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.AssociateQualificationWithWorker'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateQualificationWithWorkerRequest }
        output: AssociateQualificationWithWorkerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAdditionalAssignmentsForHITRequest }
        output: CreateAdditionalAssignmentsForHITResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.CreateHIT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHITRequest }
        output: CreateHITResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.CreateHITType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHITTypeRequest }
        output: CreateHITTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.CreateHITWithHITType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHITWithHITTypeRequest }
        output: CreateHITWithHITTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.CreateQualificationType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateQualificationTypeRequest }
        output: CreateQualificationTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.CreateWorkerBlock'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWorkerBlockRequest }
        output: CreateWorkerBlockResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.DeleteHIT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteHITRequest }
        output: DeleteHITResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.DeleteQualificationType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteQualificationTypeRequest }
        output: DeleteQualificationTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.DeleteWorkerBlock'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWorkerBlockRequest }
        output: DeleteWorkerBlockResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateQualificationFromWorkerRequest }
        output: DisassociateQualificationFromWorkerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.GetAccountBalance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAccountBalanceRequest }
        output: GetAccountBalanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.GetAssignment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAssignmentRequest }
        output: GetAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.GetFileUploadURL'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFileUploadURLRequest }
        output: GetFileUploadURLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.GetHIT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetHITRequest }
        output: GetHITResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.GetQualificationScore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQualificationScoreRequest }
        output: GetQualificationScoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.GetQualificationType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQualificationTypeRequest }
        output: GetQualificationTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListAssignmentsForHIT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAssignmentsForHITRequest }
        output: ListAssignmentsForHITResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListBonusPayments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBonusPaymentsRequest }
        output: ListBonusPaymentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListHITs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHITsRequest }
        output: ListHITsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListHITsForQualificationType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHITsForQualificationTypeRequest }
        output: ListHITsForQualificationTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListQualificationRequests'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListQualificationRequestsRequest }
        output: ListQualificationRequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListQualificationTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListQualificationTypesRequest }
        output: ListQualificationTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReviewPolicyResultsForHITRequest }
        output: ListReviewPolicyResultsForHITResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListReviewableHITs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReviewableHITsRequest }
        output: ListReviewableHITsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListWorkerBlocks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWorkerBlocksRequest }
        output: ListWorkerBlocksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.ListWorkersWithQualificationType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWorkersWithQualificationTypeRequest }
        output: ListWorkersWithQualificationTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.NotifyWorkers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyWorkersRequest }
        output: NotifyWorkersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.RejectAssignment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RejectAssignmentRequest }
        output: RejectAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.RejectQualificationRequest'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RejectQualificationRequestRequest }
        output: RejectQualificationRequestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.SendBonus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendBonusRequest }
        output: SendBonusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.SendTestEventNotification'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendTestEventNotificationRequest }
        output: SendTestEventNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.UpdateExpirationForHIT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateExpirationForHITRequest }
        output: UpdateExpirationForHITResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.UpdateHITReviewStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateHITReviewStatusRequest }
        output: UpdateHITReviewStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateHITTypeOfHITRequest }
        output: UpdateHITTypeOfHITResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.UpdateNotificationSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateNotificationSettingsRequest }
        output: UpdateNotificationSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MTurkRequesterServiceV20170117.UpdateQualificationType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateQualificationTypeRequest }
        output: UpdateQualificationTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
