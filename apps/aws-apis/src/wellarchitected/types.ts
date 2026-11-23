type LensAlias = string
type ShareId = string
type CreateLensShareOutput = { ShareId?: ShareId | undefined }
type NextToken = string
type ListLensSharesOutput = {
  LensShareSummaries?: {} | undefined
  NextToken?: NextToken | undefined
}
type CreateLensVersionOutput = { LensArn?: {} | undefined; LensVersion?: {} | undefined }
type WorkloadId = string
type MilestoneNumber = number
type CreateMilestoneOutput = {
  WorkloadId?: WorkloadId | undefined
  MilestoneNumber?: MilestoneNumber | undefined
}
type AwsAccountId = string
type AwsRegion = string
type WorkloadNonAwsRegion = string
type PillarId = string
type TagValue = string
type ApplicationArn = string
type WorkloadArn = string
type CreateWorkloadOutput = {
  WorkloadId?: WorkloadId | undefined
  WorkloadArn?: WorkloadArn | undefined
}
type CreateWorkloadShareOutput = {
  WorkloadId?: WorkloadId | undefined
  ShareId?: ShareId | undefined
}
type SharedWith = string
type PermissionType = 'READONLY' | 'CONTRIBUTOR'
type ShareStatus =
  | 'ACCEPTED'
  | 'REJECTED'
  | 'PENDING'
  | 'REVOKED'
  | 'EXPIRED'
  | 'ASSOCIATING'
  | 'ASSOCIATED'
  | 'FAILED'
type WorkloadShareSummary = {
  ShareId?: ShareId | undefined
  SharedWith?: SharedWith | undefined
  PermissionType?: PermissionType | undefined
  Status?: ShareStatus | undefined
  StatusMessage?: {} | undefined
}
type WorkloadShareSummaries = WorkloadShareSummary[]
type ListWorkloadSharesOutput = {
  WorkloadId?: WorkloadId | undefined
  WorkloadShareSummaries?: WorkloadShareSummaries | undefined
  NextToken?: NextToken | undefined
}
type ExportLensOutput = { LensJSON?: {} | undefined }
type QuestionId = string
type QuestionTitle = string
type QuestionDescription = string
type ImprovementPlanUrl = string
type HelpfulResourceUrl = string
type ChoiceId = string
type ChoiceTitle = string
type ChoiceDescription = string
type Choice = {
  ChoiceId?: ChoiceId | undefined
  Title?: ChoiceTitle | undefined
  Description?: ChoiceDescription | undefined
  HelpfulResource?: { DisplayText?: {} | undefined; Url?: {} | undefined } | undefined
  ImprovementPlan?: { DisplayText?: {} | undefined; Url?: {} | undefined } | undefined
  AdditionalResources?: {} | undefined
}
type Choices = Choice[]
type SelectedChoices = ChoiceId[]
type IsApplicable = boolean
type Risk = 'UNANSWERED' | 'HIGH' | 'MEDIUM' | 'NONE' | 'NOT_APPLICABLE'
type Notes = string
type Answer = {
  QuestionId?: QuestionId | undefined
  PillarId?: PillarId | undefined
  QuestionTitle?: QuestionTitle | undefined
  QuestionDescription?: QuestionDescription | undefined
  ImprovementPlanUrl?: ImprovementPlanUrl | undefined
  HelpfulResourceUrl?: HelpfulResourceUrl | undefined
  HelpfulResourceDisplayText?: {} | undefined
  Choices?: Choices | undefined
  SelectedChoices?: SelectedChoices | undefined
  ChoiceAnswers?: {} | undefined
  IsApplicable?: IsApplicable | undefined
  Risk?: Risk | undefined
  Notes?: Notes | undefined
  Reason?: {} | undefined
}
type GetAnswerOutput = {
  WorkloadId?: WorkloadId | undefined
  MilestoneNumber?: MilestoneNumber | undefined
  LensAlias?: LensAlias | undefined
  LensArn?: {} | undefined
  Answer?: Answer | undefined
}
type ChoiceUpdate = { Status: {}; Reason?: {} | undefined; Notes?: {} | undefined }
type UpdateAnswerOutput = {
  WorkloadId?: WorkloadId | undefined
  LensAlias?: LensAlias | undefined
  LensArn?: {} | undefined
  Answer?: Answer | undefined
}
type Base64String = string
type GetConsolidatedReportOutput = {
  Metrics?: {} | undefined
  NextToken?: NextToken | undefined
  Base64String?: Base64String | undefined
}
type LensName = string
type LensDescription = string
type GetLensOutput = {
  Lens?:
    | {
        LensArn?: {} | undefined
        LensVersion?: {} | undefined
        Name?: LensName | undefined
        Description?: LensDescription | undefined
        Owner?: {} | undefined
        ShareInvitationId?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type PillarName = string
type Count = number
type RiskCounts = { [x: string]: Count }
type PillarReviewSummary = {
  PillarId?: PillarId | undefined
  PillarName?: PillarName | undefined
  Notes?: Notes | undefined
  RiskCounts?: RiskCounts | undefined
}
type PillarReviewSummaries = PillarReviewSummary[]
type Timestamp = string
type LensReview = {
  LensAlias?: LensAlias | undefined
  LensArn?: {} | undefined
  LensVersion?: {} | undefined
  LensName?: LensName | undefined
  LensStatus?: {} | undefined
  PillarReviewSummaries?: PillarReviewSummaries | undefined
  UpdatedAt?: Timestamp | undefined
  Notes?: Notes | undefined
  RiskCounts?: RiskCounts | undefined
  NextToken?: NextToken | undefined
}
type GetLensReviewOutput = {
  WorkloadId?: WorkloadId | undefined
  MilestoneNumber?: MilestoneNumber | undefined
  LensReview?: LensReview | undefined
}
type UpdateLensReviewOutput = {
  WorkloadId?: WorkloadId | undefined
  LensReview?: LensReview | undefined
}
type LensReviewReport = {
  LensAlias?: LensAlias | undefined
  LensArn?: {} | undefined
  Base64String?: Base64String | undefined
}
type GetLensReviewReportOutput = {
  WorkloadId?: WorkloadId | undefined
  MilestoneNumber?: MilestoneNumber | undefined
  LensReviewReport?: LensReviewReport | undefined
}
type VersionDifferences = { PillarDifferences?: {} | undefined }
type GetLensVersionDifferenceOutput = {
  LensAlias?: LensAlias | undefined
  LensArn?: {} | undefined
  BaseLensVersion?: {} | undefined
  TargetLensVersion?: {} | undefined
  LatestLensVersion?: {} | undefined
  VersionDifferences?: VersionDifferences | undefined
}
type MilestoneName = string
type WorkloadName = string
type WorkloadDescription = string
type WorkloadEnvironment = 'PRODUCTION' | 'PREPRODUCTION'
type WorkloadAccountIds = AwsAccountId[]
type WorkloadAwsRegions = AwsRegion[]
type WorkloadNonAwsRegions = WorkloadNonAwsRegion[]
type WorkloadArchitecturalDesign = string
type WorkloadReviewOwner = string
type WorkloadIndustryType = string
type WorkloadIndustry = string
type WorkloadImprovementStatus =
  | 'NOT_APPLICABLE'
  | 'NOT_STARTED'
  | 'IN_PROGRESS'
  | 'COMPLETE'
  | 'RISK_ACKNOWLEDGED'
type WorkloadPillarPriorities = PillarId[]
type WorkloadLenses = LensAlias[]
type Workload = {
  WorkloadId?: WorkloadId | undefined
  WorkloadArn?: WorkloadArn | undefined
  WorkloadName?: WorkloadName | undefined
  Description?: WorkloadDescription | undefined
  Environment?: WorkloadEnvironment | undefined
  UpdatedAt?: Timestamp | undefined
  AccountIds?: WorkloadAccountIds | undefined
  AwsRegions?: WorkloadAwsRegions | undefined
  NonAwsRegions?: WorkloadNonAwsRegions | undefined
  ArchitecturalDesign?: WorkloadArchitecturalDesign | undefined
  ReviewOwner?: WorkloadReviewOwner | undefined
  ReviewRestrictionDate?: Timestamp | undefined
  IsReviewOwnerUpdateAcknowledged?: {} | undefined
  IndustryType?: WorkloadIndustryType | undefined
  Industry?: WorkloadIndustry | undefined
  Notes?: Notes | undefined
  ImprovementStatus?: WorkloadImprovementStatus | undefined
  RiskCounts?: RiskCounts | undefined
  PillarPriorities?: WorkloadPillarPriorities | undefined
  Lenses?: WorkloadLenses | undefined
  Owner?: AwsAccountId | undefined
  ShareInvitationId?: {} | undefined
  Tags?: {} | undefined
  DiscoveryConfig?: { TrustedAdvisorIntegrationStatus?: {} | undefined } | undefined
  Applications?: {} | undefined
}
type Milestone = {
  MilestoneNumber?: MilestoneNumber | undefined
  MilestoneName?: MilestoneName | undefined
  RecordedAt?: Timestamp | undefined
  Workload?: Workload | undefined
}
type GetMilestoneOutput = { WorkloadId?: WorkloadId | undefined; Milestone?: Milestone | undefined }
type GetWorkloadOutput = { Workload?: Workload | undefined }
type UpdateWorkloadOutput = { Workload?: Workload | undefined }
type ImportLensOutput = { LensArn?: {} | undefined; Status?: {} | undefined }
type AnswerSummary = {
  QuestionId?: QuestionId | undefined
  PillarId?: PillarId | undefined
  QuestionTitle?: QuestionTitle | undefined
  Choices?: Choices | undefined
  SelectedChoices?: SelectedChoices | undefined
  ChoiceAnswerSummaries?: {} | undefined
  IsApplicable?: IsApplicable | undefined
  Risk?: Risk | undefined
  Reason?: {} | undefined
}
type AnswerSummaries = AnswerSummary[]
type ListAnswersOutput = {
  WorkloadId?: WorkloadId | undefined
  MilestoneNumber?: MilestoneNumber | undefined
  LensAlias?: LensAlias | undefined
  LensArn?: {} | undefined
  AnswerSummaries?: AnswerSummaries | undefined
  NextToken?: NextToken | undefined
}
type ListCheckDetailsOutput = { CheckDetails?: {} | undefined; NextToken?: NextToken | undefined }
type ListCheckSummariesOutput = {
  CheckSummaries?: {} | undefined
  NextToken?: NextToken | undefined
}
type ImprovementSummary = {
  QuestionId?: QuestionId | undefined
  PillarId?: PillarId | undefined
  QuestionTitle?: QuestionTitle | undefined
  Risk?: Risk | undefined
  ImprovementPlanUrl?: ImprovementPlanUrl | undefined
  ImprovementPlans?: {} | undefined
}
type ImprovementSummaries = ImprovementSummary[]
type ListLensReviewImprovementsOutput = {
  WorkloadId?: WorkloadId | undefined
  MilestoneNumber?: MilestoneNumber | undefined
  LensAlias?: LensAlias | undefined
  LensArn?: {} | undefined
  ImprovementSummaries?: ImprovementSummaries | undefined
  NextToken?: NextToken | undefined
}
type LensReviewSummary = {
  LensAlias?: LensAlias | undefined
  LensArn?: {} | undefined
  LensVersion?: {} | undefined
  LensName?: LensName | undefined
  LensStatus?: {} | undefined
  UpdatedAt?: Timestamp | undefined
  RiskCounts?: RiskCounts | undefined
}
type LensReviewSummaries = LensReviewSummary[]
type ListLensReviewsOutput = {
  WorkloadId?: WorkloadId | undefined
  MilestoneNumber?: MilestoneNumber | undefined
  LensReviewSummaries?: LensReviewSummaries | undefined
  NextToken?: NextToken | undefined
}
type LensSummary = {
  LensArn?: {} | undefined
  LensAlias?: LensAlias | undefined
  LensName?: LensName | undefined
  LensType?: {} | undefined
  Description?: LensDescription | undefined
  CreatedAt?: Timestamp | undefined
  UpdatedAt?: Timestamp | undefined
  LensVersion?: {} | undefined
  Owner?: AwsAccountId | undefined
  LensStatus?: {} | undefined
}
type LensSummaries = LensSummary[]
type ListLensesOutput = {
  LensSummaries?: LensSummaries | undefined
  NextToken?: NextToken | undefined
}
type WorkloadSummary = {
  WorkloadId?: WorkloadId | undefined
  WorkloadArn?: WorkloadArn | undefined
  WorkloadName?: WorkloadName | undefined
  Owner?: AwsAccountId | undefined
  UpdatedAt?: Timestamp | undefined
  Lenses?: WorkloadLenses | undefined
  RiskCounts?: RiskCounts | undefined
  ImprovementStatus?: WorkloadImprovementStatus | undefined
}
type MilestoneSummary = {
  MilestoneNumber?: MilestoneNumber | undefined
  MilestoneName?: MilestoneName | undefined
  RecordedAt?: Timestamp | undefined
  WorkloadSummary?: WorkloadSummary | undefined
}
type MilestoneSummaries = MilestoneSummary[]
type ListMilestonesOutput = {
  WorkloadId?: WorkloadId | undefined
  MilestoneSummaries?: MilestoneSummaries | undefined
  NextToken?: NextToken | undefined
}
type ListNotificationsOutput = {
  NotificationSummaries?: {} | undefined
  NextToken?: NextToken | undefined
}
type ListShareInvitationsOutput = {
  ShareInvitationSummaries?: {} | undefined
  NextToken?: NextToken | undefined
}
type ListTagsForResourceOutput = { Tags?: {} | undefined }
type TagResourceOutput = { [x: string]: unknown }
type WorkloadSummaries = WorkloadSummary[]
type ListWorkloadsOutput = {
  WorkloadSummaries?: WorkloadSummaries | undefined
  NextToken?: NextToken | undefined
}
type TagKey = string
type UntagResourceOutput = { [x: string]: unknown }
type UpdateShareInvitationOutput = {
  ShareInvitation?:
    | {
        ShareInvitationId?: {} | undefined
        ShareResourceType?: {} | undefined
        WorkloadId?: WorkloadId | undefined
        LensAlias?: LensAlias | undefined
        LensArn?: {} | undefined
      }
    | undefined
}
type WorkloadShare = {
  ShareId?: ShareId | undefined
  SharedBy?: AwsAccountId | undefined
  SharedWith?: SharedWith | undefined
  PermissionType?: PermissionType | undefined
  Status?: ShareStatus | undefined
  WorkloadName?: WorkloadName | undefined
  WorkloadId?: WorkloadId | undefined
}
type UpdateWorkloadShareOutput = {
  WorkloadId?: WorkloadId | undefined
  WorkloadShare?: WorkloadShare | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/workloads/:WorkloadId/associateLenses': {
      $patch: {
        input: { param: { WorkloadId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { LensAliases: LensAlias[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lenses/:LensAlias/shares': {
      $post: {
        input: { param: { LensAlias: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { SharedWith: string; ClientRequestToken: string } }
        output: CreateLensShareOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { LensAlias: string } } & {
          query: {
            SharedWithPrefix?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Status?:
              | 'ACCEPTED'
              | 'REJECTED'
              | 'PENDING'
              | 'REVOKED'
              | 'EXPIRED'
              | 'ASSOCIATING'
              | 'ASSOCIATED'
              | 'FAILED'
              | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListLensSharesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lenses/:LensAlias/versions': {
      $post: {
        input: { param: { LensAlias: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            LensVersion: string
            IsMajorVersion?: boolean | undefined
            ClientRequestToken: string
          }
        }
        output: CreateLensVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/milestones': {
      $post: {
        input: { param: { WorkloadId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MilestoneName: string; ClientRequestToken: string } }
        output: CreateMilestoneOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            WorkloadName: string
            Description: string
            Environment: 'PRODUCTION' | 'PREPRODUCTION'
            AccountIds?: AwsAccountId[] | undefined
            AwsRegions?: AwsRegion[] | undefined
            NonAwsRegions?: WorkloadNonAwsRegion[] | undefined
            PillarPriorities?: PillarId[] | undefined
            ArchitecturalDesign?: string | undefined
            ReviewOwner?: string | undefined
            IndustryType?: string | undefined
            Industry?: string | undefined
            Lenses: LensAlias[]
            Notes?: string | undefined
            ClientRequestToken: string
            Tags?: { [x: string]: TagValue } | undefined
            DiscoveryConfig?: { TrustedAdvisorIntegrationStatus?: {} | undefined } | undefined
            Applications?: ApplicationArn[] | undefined
          }
        }
        output: CreateWorkloadOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/shares': {
      $post: {
        input: { param: { WorkloadId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            SharedWith: string
            PermissionType: 'READONLY' | 'CONTRIBUTOR'
            ClientRequestToken: string
          }
        }
        output: CreateWorkloadShareOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { WorkloadId: string } } & {
          query: {
            SharedWithPrefix?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Status?:
              | 'ACCEPTED'
              | 'REJECTED'
              | 'PENDING'
              | 'REVOKED'
              | 'EXPIRED'
              | 'ASSOCIATING'
              | 'ASSOCIATED'
              | 'FAILED'
              | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListWorkloadSharesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lenses/:LensAlias#ClientRequestToken&LensStatus': {
      $delete: {
        input: { param: { LensAlias: string } } & {
          query: { ClientRequestToken: string; LensStatus: 'ALL' | 'DRAFT' | 'PUBLISHED' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lenses/:LensAlias/shares/:ShareId#ClientRequestToken': {
      $delete: {
        input: { param: { ShareId: string; LensAlias: string } } & {
          query: { ClientRequestToken: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId#ClientRequestToken': {
      $delete: {
        input: { param: { WorkloadId: string } } & { query: { ClientRequestToken: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/shares/:ShareId#ClientRequestToken': {
      $delete: {
        input: { param: { ShareId: string; WorkloadId: string } } & {
          query: { ClientRequestToken: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/disassociateLenses': {
      $patch: {
        input: { param: { WorkloadId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { LensAliases: LensAlias[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lenses/:LensAlias/export': {
      $get: {
        input: { param: { LensAlias: string } } & {
          query: { LensVersion?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExportLensOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/lensReviews/:LensAlias/answers/:QuestionId': {
      $get: {
        input: { param: { WorkloadId: string; LensAlias: string; QuestionId: string } } & {
          query: { MilestoneNumber?: number | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAnswerOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { WorkloadId: string; LensAlias: string; QuestionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            SelectedChoices?: ChoiceId[] | undefined
            ChoiceUpdates?: { [x: string]: ChoiceUpdate } | undefined
            Notes?: string | undefined
            IsApplicable?: boolean | undefined
            Reason?:
              | 'OUT_OF_SCOPE'
              | 'BUSINESS_PRIORITIES'
              | 'ARCHITECTURE_CONSTRAINTS'
              | 'OTHER'
              | 'NONE'
              | undefined
          }
        }
        output: UpdateAnswerOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consolidatedReport#Format': {
      $get: {
        input: {
          query: {
            Format: 'PDF' | 'JSON'
            IncludeSharedResources?: boolean | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetConsolidatedReportOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lenses/:LensAlias': {
      $get: {
        input: { param: { LensAlias: string } } & {
          query: { LensVersion?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetLensOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/lensReviews/:LensAlias': {
      $get: {
        input: { param: { WorkloadId: string; LensAlias: string } } & {
          query: { MilestoneNumber?: number | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetLensReviewOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { WorkloadId: string; LensAlias: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { LensNotes?: string | undefined; PillarNotes?: { [x: string]: Notes } | undefined }
        }
        output: UpdateLensReviewOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/lensReviews/:LensAlias/report': {
      $get: {
        input: { param: { WorkloadId: string; LensAlias: string } } & {
          query: { MilestoneNumber?: number | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetLensReviewReportOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lenses/:LensAlias/versionDifference': {
      $get: {
        input: { param: { LensAlias: string } } & {
          query: { BaseLensVersion?: string | undefined; TargetLensVersion?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetLensVersionDifferenceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/milestones/:MilestoneNumber': {
      $get: {
        input: { param: { WorkloadId: string; MilestoneNumber: number } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMilestoneOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId': {
      $get: {
        input: { param: { WorkloadId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetWorkloadOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { WorkloadId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            WorkloadName?: string | undefined
            Description?: string | undefined
            Environment?: 'PRODUCTION' | 'PREPRODUCTION' | undefined
            AccountIds?: AwsAccountId[] | undefined
            AwsRegions?: AwsRegion[] | undefined
            NonAwsRegions?: WorkloadNonAwsRegion[] | undefined
            PillarPriorities?: PillarId[] | undefined
            ArchitecturalDesign?: string | undefined
            ReviewOwner?: string | undefined
            IsReviewOwnerUpdateAcknowledged?: boolean | undefined
            IndustryType?: string | undefined
            Industry?: string | undefined
            Notes?: string | undefined
            ImprovementStatus?:
              | 'NOT_APPLICABLE'
              | 'NOT_STARTED'
              | 'IN_PROGRESS'
              | 'COMPLETE'
              | 'RISK_ACKNOWLEDGED'
              | undefined
            DiscoveryConfig?: { TrustedAdvisorIntegrationStatus?: {} | undefined } | undefined
            Applications?: ApplicationArn[] | undefined
          }
        }
        output: UpdateWorkloadOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/importLens': {
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            LensAlias?: string | undefined
            JSONString: string
            ClientRequestToken: string
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: ImportLensOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/lensReviews/:LensAlias/answers': {
      $get: {
        input: { param: { WorkloadId: string; LensAlias: string } } & {
          query: {
            PillarId?: string | undefined
            MilestoneNumber?: number | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAnswersOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/checks': {
      $post: {
        input: { param: { WorkloadId: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            LensArn: string
            PillarId: string
            QuestionId: string
            ChoiceId: string
          }
        }
        output: ListCheckDetailsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/checkSummaries': {
      $post: {
        input: { param: { WorkloadId: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            LensArn: string
            PillarId: string
            QuestionId: string
            ChoiceId: string
          }
        }
        output: ListCheckSummariesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/lensReviews/:LensAlias/improvements': {
      $get: {
        input: { param: { WorkloadId: string; LensAlias: string } } & {
          query: {
            PillarId?: string | undefined
            MilestoneNumber?: number | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListLensReviewImprovementsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/lensReviews': {
      $get: {
        input: { param: { WorkloadId: string } } & {
          query: {
            MilestoneNumber?: number | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListLensReviewsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lenses': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            LensType?: 'AWS_OFFICIAL' | 'CUSTOM_SHARED' | 'CUSTOM_SELF' | undefined
            LensStatus?: 'ALL' | 'DRAFT' | 'PUBLISHED' | undefined
            LensName?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListLensesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/milestonesSummaries': {
      $post: {
        input: { param: { WorkloadId: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
        output: ListMilestonesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            WorkloadId?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListNotificationsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/shareInvitations': {
      $get: {
        input: {
          query: {
            WorkloadNamePrefix?: string | undefined
            LensNamePrefix?: string | undefined
            ShareResourceType?: 'WORKLOAD' | 'LENS' | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListShareInvitationsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:WorkloadArn': {
      $get: {
        input: { param: { WorkloadArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { WorkloadArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { [x: string]: TagValue } } }
        output: TagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloadsSummaries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            WorkloadNamePrefix?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListWorkloadsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:WorkloadArn#tagKeys': {
      $delete: {
        input: { param: { WorkloadArn: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-settings': {
      $patch: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { OrganizationSharingStatus?: 'ENABLED' | 'DISABLED' | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shareInvitations/:ShareInvitationId': {
      $patch: {
        input: { param: { ShareInvitationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ShareInvitationAction: 'ACCEPT' | 'REJECT' } }
        output: UpdateShareInvitationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/shares/:ShareId': {
      $patch: {
        input: { param: { ShareId: string; WorkloadId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { PermissionType: 'READONLY' | 'CONTRIBUTOR' } }
        output: UpdateWorkloadShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workloads/:WorkloadId/lensReviews/:LensAlias/upgrade': {
      $put: {
        input: { param: { WorkloadId: string; LensAlias: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MilestoneName: string; ClientRequestToken?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
