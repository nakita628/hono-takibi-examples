type BatchGetMetricDataQuery = {
  Id: {}
  Namespace: {}
  Metric: {}
  Dimensions?: {} | undefined
  StartDate: {}
  EndDate: {}
}
type BatchGetMetricDataResponse = { Results?: {} | undefined; Errors?: {} | undefined }
type BadRequestException = { [x: string]: unknown }
type InternalServiceErrorException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type Tag = { Key: {}; Value: {} }
type CreateConfigurationSetResponse = { [x: string]: unknown }
type AlreadyExistsException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type ConcurrentModificationException = { [x: string]: unknown }
type ListConfigurationSetsResponse = {
  ConfigurationSets?: {} | undefined
  NextToken?: {} | undefined
}
type CreateConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type GetConfigurationSetEventDestinationsResponse = { EventDestinations?: {} | undefined }
type TopicPreference = { TopicName: {}; SubscriptionStatus: {} }
type CreateContactResponse = { [x: string]: unknown }
type ListContactsResponse = { Contacts?: {} | undefined; NextToken?: {} | undefined }
type Topic = {
  TopicName: {}
  DisplayName: {}
  Description?: {} | undefined
  DefaultSubscriptionStatus: {}
}
type CreateContactListResponse = { [x: string]: unknown }
type ListContactListsResponse = { ContactLists?: {} | undefined; NextToken?: {} | undefined }
type CreateCustomVerificationEmailTemplateResponse = { [x: string]: unknown }
type ListCustomVerificationEmailTemplatesResponse = {
  CustomVerificationEmailTemplates?: {} | undefined
  NextToken?: {} | undefined
}
type CreateDedicatedIpPoolResponse = { [x: string]: unknown }
type ListDedicatedIpPoolsResponse = {
  DedicatedIpPools?: {} | undefined
  NextToken?: {} | undefined
}
type CreateDeliverabilityTestReportResponse = { ReportId: {}; DeliverabilityTestStatus: {} }
type AccountSuspendedException = { [x: string]: unknown }
type SendingPausedException = { [x: string]: unknown }
type MessageRejected = { [x: string]: unknown }
type MailFromDomainNotVerifiedException = { [x: string]: unknown }
type CreateEmailIdentityResponse = {
  IdentityType?: {} | undefined
  VerifiedForSendingStatus?: {} | undefined
  DkimAttributes?:
    | {
        SigningEnabled?: {} | undefined
        Status?: {} | undefined
        Tokens?: {} | undefined
        SigningAttributesOrigin?: {} | undefined
        NextSigningKeyLength?: {} | undefined
        CurrentSigningKeyLength?: {} | undefined
        LastKeyGenerationTimestamp?: {} | undefined
      }
    | undefined
}
type ListEmailIdentitiesResponse = { EmailIdentities?: {} | undefined; NextToken?: {} | undefined }
type CreateEmailIdentityPolicyResponse = { [x: string]: unknown }
type DeleteEmailIdentityPolicyResponse = { [x: string]: unknown }
type UpdateEmailIdentityPolicyResponse = { [x: string]: unknown }
type CreateEmailTemplateResponse = { [x: string]: unknown }
type ListEmailTemplatesResponse = { TemplatesMetadata?: {} | undefined; NextToken?: {} | undefined }
type CreateImportJobResponse = { JobId?: {} | undefined }
type ListImportJobsResponse = { ImportJobs?: {} | undefined; NextToken?: {} | undefined }
type DeleteConfigurationSetResponse = { [x: string]: unknown }
type GetConfigurationSetResponse = {
  ConfigurationSetName?: {} | undefined
  TrackingOptions?: { CustomRedirectDomain: {} } | undefined
  DeliveryOptions?: { TlsPolicy?: {} | undefined; SendingPoolName?: {} | undefined } | undefined
  ReputationOptions?:
    | { ReputationMetricsEnabled?: {} | undefined; LastFreshStart?: {} | undefined }
    | undefined
  SendingOptions?: { SendingEnabled?: {} | undefined } | undefined
  Tags?: {} | undefined
  SuppressionOptions?: { SuppressedReasons?: {} | undefined } | undefined
  VdmOptions?:
    | {
        DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
        GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
      }
    | undefined
}
type DeleteConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type UpdateConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type DeleteContactResponse = { [x: string]: unknown }
type GetContactResponse = {
  ContactListName?: {} | undefined
  EmailAddress?: {} | undefined
  TopicPreferences?: {} | undefined
  TopicDefaultPreferences?: {} | undefined
  UnsubscribeAll?: {} | undefined
  AttributesData?: {} | undefined
  CreatedTimestamp?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
}
type UpdateContactResponse = { [x: string]: unknown }
type DeleteContactListResponse = { [x: string]: unknown }
type GetContactListResponse = {
  ContactListName?: {} | undefined
  Topics?: {} | undefined
  Description?: {} | undefined
  CreatedTimestamp?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  Tags?: {} | undefined
}
type UpdateContactListResponse = { [x: string]: unknown }
type DeleteCustomVerificationEmailTemplateResponse = { [x: string]: unknown }
type GetCustomVerificationEmailTemplateResponse = {
  TemplateName?: {} | undefined
  FromEmailAddress?: {} | undefined
  TemplateSubject?: {} | undefined
  TemplateContent?: {} | undefined
  SuccessRedirectionURL?: {} | undefined
  FailureRedirectionURL?: {} | undefined
}
type UpdateCustomVerificationEmailTemplateResponse = { [x: string]: unknown }
type DeleteDedicatedIpPoolResponse = { [x: string]: unknown }
type GetDedicatedIpPoolResponse = {
  DedicatedIpPool?: { PoolName: {}; ScalingMode: {} } | undefined
}
type DeleteEmailIdentityResponse = { [x: string]: unknown }
type GetEmailIdentityResponse = {
  IdentityType?: {} | undefined
  FeedbackForwardingStatus?: {} | undefined
  VerifiedForSendingStatus?: {} | undefined
  DkimAttributes?:
    | {
        SigningEnabled?: {} | undefined
        Status?: {} | undefined
        Tokens?: {} | undefined
        SigningAttributesOrigin?: {} | undefined
        NextSigningKeyLength?: {} | undefined
        CurrentSigningKeyLength?: {} | undefined
        LastKeyGenerationTimestamp?: {} | undefined
      }
    | undefined
  MailFromAttributes?:
    | { MailFromDomain: {}; MailFromDomainStatus: {}; BehaviorOnMxFailure: {} }
    | undefined
  Policies?: {} | undefined
  Tags?: {} | undefined
  ConfigurationSetName?: {} | undefined
  VerificationStatus?: {} | undefined
}
type DeleteEmailTemplateResponse = { [x: string]: unknown }
type GetEmailTemplateResponse = {
  TemplateName: {}
  TemplateContent: { Subject?: {} | undefined; Text?: {} | undefined; Html?: {} | undefined }
}
type UpdateEmailTemplateResponse = { [x: string]: unknown }
type DeleteSuppressedDestinationResponse = { [x: string]: unknown }
type GetSuppressedDestinationResponse = {
  SuppressedDestination: {
    EmailAddress: {}
    Reason: {}
    LastUpdateTime: {}
    Attributes?: { MessageId?: {} | undefined; FeedbackId?: {} | undefined } | undefined
  }
}
type GetAccountResponse = {
  DedicatedIpAutoWarmupEnabled?: {} | undefined
  EnforcementStatus?: {} | undefined
  ProductionAccessEnabled?: {} | undefined
  SendQuota?:
    | {
        Max24HourSend?: {} | undefined
        MaxSendRate?: {} | undefined
        SentLast24Hours?: {} | undefined
      }
    | undefined
  SendingEnabled?: {} | undefined
  SuppressionAttributes?: { SuppressedReasons?: {} | undefined } | undefined
  Details?:
    | {
        MailType?: {} | undefined
        WebsiteURL?: {} | undefined
        ContactLanguage?: {} | undefined
        UseCaseDescription?: {} | undefined
        AdditionalContactEmailAddresses?: {} | undefined
        ReviewDetails?: { Status?: {} | undefined; CaseId?: {} | undefined } | undefined
      }
    | undefined
  VdmAttributes?:
    | {
        VdmEnabled: {}
        DashboardAttributes?: { EngagementMetrics?: {} | undefined } | undefined
        GuardianAttributes?: { OptimizedSharedDelivery?: {} | undefined } | undefined
      }
    | undefined
}
type BlacklistItemName = string
type GetBlacklistReportsResponse = { BlacklistReport: {} }
type GetDedicatedIpResponse = {
  DedicatedIp?:
    | { Ip: {}; WarmupStatus: {}; WarmupPercentage: {}; PoolName?: {} | undefined }
    | undefined
}
type GetDedicatedIpsResponse = { DedicatedIps?: {} | undefined; NextToken?: {} | undefined }
type GetDeliverabilityDashboardOptionsResponse = {
  DashboardEnabled: {}
  SubscriptionExpiryDate?: {} | undefined
  AccountStatus?: {} | undefined
  ActiveSubscribedDomains?: {} | undefined
  PendingExpirationSubscribedDomains?: {} | undefined
}
type DomainDeliverabilityTrackingOption = {
  Domain?: {} | undefined
  SubscriptionStartDate?: {} | undefined
  InboxPlacementTrackingOption?:
    | { Global?: {} | undefined; TrackedIsps?: {} | undefined }
    | undefined
}
type PutDeliverabilityDashboardOptionResponse = { [x: string]: unknown }
type GetDeliverabilityTestReportResponse = {
  DeliverabilityTestReport: {
    ReportId?: {} | undefined
    ReportName?: {} | undefined
    Subject?: {} | undefined
    FromEmailAddress?: {} | undefined
    CreateDate?: {} | undefined
    DeliverabilityTestStatus?: {} | undefined
  }
  OverallPlacement: {
    InboxPercentage?: {} | undefined
    SpamPercentage?: {} | undefined
    MissingPercentage?: {} | undefined
    SpfPercentage?: {} | undefined
    DkimPercentage?: {} | undefined
  }
  IspPlacements: {}
  Message?: {} | undefined
  Tags?: {} | undefined
}
type GetDomainDeliverabilityCampaignResponse = {
  DomainDeliverabilityCampaign: {
    CampaignId?: {} | undefined
    ImageUrl?: {} | undefined
    Subject?: {} | undefined
    FromAddress?: {} | undefined
    SendingIps?: {} | undefined
    FirstSeenDateTime?: {} | undefined
    LastSeenDateTime?: {} | undefined
    InboxCount?: {} | undefined
    SpamCount?: {} | undefined
    ReadRate?: {} | undefined
    DeleteRate?: {} | undefined
    ReadDeleteRate?: {} | undefined
    ProjectedVolume?: {} | undefined
    Esps?: {} | undefined
  }
}
type GetDomainStatisticsReportResponse = {
  OverallVolume: {
    VolumeStatistics?:
      | {
          InboxRawCount?: {} | undefined
          SpamRawCount?: {} | undefined
          ProjectedInbox?: {} | undefined
          ProjectedSpam?: {} | undefined
        }
      | undefined
    ReadRatePercent?: {} | undefined
    DomainIspPlacements?: {} | undefined
  }
  DailyVolumes: {}
}
type GetEmailIdentityPoliciesResponse = { Policies?: {} | undefined }
type GetImportJobResponse = {
  JobId?: {} | undefined
  ImportDestination?:
    | {
        SuppressionListDestination?: { SuppressionListImportAction: {} } | undefined
        ContactListDestination?: { ContactListName: {}; ContactListImportAction: {} } | undefined
      }
    | undefined
  ImportDataSource?: { S3Url: {}; DataFormat: {} } | undefined
  FailureInfo?: { FailedRecordsS3Url?: {} | undefined; ErrorMessage?: {} | undefined } | undefined
  JobStatus?: {} | undefined
  CreatedTimestamp?: {} | undefined
  CompletedTimestamp?: {} | undefined
  ProcessedRecordsCount?: {} | undefined
  FailedRecordsCount?: {} | undefined
}
type ListDeliverabilityTestReportsResponse = {
  DeliverabilityTestReports: {}
  NextToken?: {} | undefined
}
type ListDomainDeliverabilityCampaignsResponse = {
  DomainDeliverabilityCampaigns: {}
  NextToken?: {} | undefined
}
type ListRecommendationFilterValue = string
type ListRecommendationsResponse = { Recommendations?: {} | undefined; NextToken?: {} | undefined }
type SuppressionListReason = 'BOUNCE' | 'COMPLAINT'
type ListSuppressedDestinationsResponse = {
  SuppressedDestinationSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type InvalidNextTokenException = { [x: string]: unknown }
type PutSuppressedDestinationResponse = { [x: string]: unknown }
type ListTagsForResourceResponse = { Tags: {} }
type PutAccountDedicatedIpWarmupAttributesResponse = { [x: string]: unknown }
type AdditionalContactEmailAddress = string
type PutAccountDetailsResponse = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type PutAccountSendingAttributesResponse = { [x: string]: unknown }
type PutAccountSuppressionAttributesResponse = { [x: string]: unknown }
type PutAccountVdmAttributesResponse = { [x: string]: unknown }
type PutConfigurationSetDeliveryOptionsResponse = { [x: string]: unknown }
type PutConfigurationSetReputationOptionsResponse = { [x: string]: unknown }
type PutConfigurationSetSendingOptionsResponse = { [x: string]: unknown }
type PutConfigurationSetSuppressionOptionsResponse = { [x: string]: unknown }
type PutConfigurationSetTrackingOptionsResponse = { [x: string]: unknown }
type PutConfigurationSetVdmOptionsResponse = { [x: string]: unknown }
type PutDedicatedIpInPoolResponse = { [x: string]: unknown }
type PutDedicatedIpPoolScalingAttributesResponse = { [x: string]: unknown }
type PutDedicatedIpWarmupAttributesResponse = { [x: string]: unknown }
type PutEmailIdentityConfigurationSetAttributesResponse = { [x: string]: unknown }
type PutEmailIdentityDkimAttributesResponse = { [x: string]: unknown }
type PutEmailIdentityDkimSigningAttributesResponse = {
  DkimStatus?: {} | undefined
  DkimTokens?: {} | undefined
}
type PutEmailIdentityFeedbackAttributesResponse = { [x: string]: unknown }
type PutEmailIdentityMailFromAttributesResponse = { [x: string]: unknown }
type EmailAddress = string
type MessageTag = { Name: {}; Value: {} }
type BulkEmailEntry = {
  Destination: {
    ToAddresses?: {} | undefined
    CcAddresses?: {} | undefined
    BccAddresses?: {} | undefined
  }
  ReplacementTags?: {} | undefined
  ReplacementEmailContent?:
    | { ReplacementTemplate?: { ReplacementTemplateData?: {} | undefined } | undefined }
    | undefined
}
type SendBulkEmailResponse = { BulkEmailEntryResults: {} }
type SendCustomVerificationEmailResponse = { MessageId?: {} | undefined }
type SendEmailResponse = { MessageId?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TestRenderEmailTemplateResponse = { RenderedTemplate: {} }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/email/metrics/batch': {
      $post:
        | {
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
            } & { json: { Queries: BatchGetMetricDataQuery[] } }
            output: BatchGetMetricDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { Queries: BatchGetMetricDataQuery[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { Queries: BatchGetMetricDataQuery[] } }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { Queries: BatchGetMetricDataQuery[] } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            } & { json: { Queries: BatchGetMetricDataQuery[] } }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v2/email/configuration-sets': {
      $post:
        | {
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
                ConfigurationSetName: string
                TrackingOptions?: { CustomRedirectDomain?: {} | undefined } | undefined
                DeliveryOptions?:
                  | { TlsPolicy?: {} | undefined; SendingPoolName?: {} | undefined }
                  | undefined
                ReputationOptions?:
                  | { ReputationMetricsEnabled?: {} | undefined; LastFreshStart?: {} | undefined }
                  | undefined
                SendingOptions?: { SendingEnabled?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
                SuppressionOptions?: { SuppressedReasons?: {} | undefined } | undefined
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: CreateConfigurationSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                ConfigurationSetName: string
                TrackingOptions?: { CustomRedirectDomain?: {} | undefined } | undefined
                DeliveryOptions?:
                  | { TlsPolicy?: {} | undefined; SendingPoolName?: {} | undefined }
                  | undefined
                ReputationOptions?:
                  | { ReputationMetricsEnabled?: {} | undefined; LastFreshStart?: {} | undefined }
                  | undefined
                SendingOptions?: { SendingEnabled?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
                SuppressionOptions?: { SuppressedReasons?: {} | undefined } | undefined
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                ConfigurationSetName: string
                TrackingOptions?: { CustomRedirectDomain?: {} | undefined } | undefined
                DeliveryOptions?:
                  | { TlsPolicy?: {} | undefined; SendingPoolName?: {} | undefined }
                  | undefined
                ReputationOptions?:
                  | { ReputationMetricsEnabled?: {} | undefined; LastFreshStart?: {} | undefined }
                  | undefined
                SendingOptions?: { SendingEnabled?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
                SuppressionOptions?: { SuppressedReasons?: {} | undefined } | undefined
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                ConfigurationSetName: string
                TrackingOptions?: { CustomRedirectDomain?: {} | undefined } | undefined
                DeliveryOptions?:
                  | { TlsPolicy?: {} | undefined; SendingPoolName?: {} | undefined }
                  | undefined
                ReputationOptions?:
                  | { ReputationMetricsEnabled?: {} | undefined; LastFreshStart?: {} | undefined }
                  | undefined
                SendingOptions?: { SendingEnabled?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
                SuppressionOptions?: { SuppressedReasons?: {} | undefined } | undefined
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                ConfigurationSetName: string
                TrackingOptions?: { CustomRedirectDomain?: {} | undefined } | undefined
                DeliveryOptions?:
                  | { TlsPolicy?: {} | undefined; SendingPoolName?: {} | undefined }
                  | undefined
                ReputationOptions?:
                  | { ReputationMetricsEnabled?: {} | undefined; LastFreshStart?: {} | undefined }
                  | undefined
                SendingOptions?: { SendingEnabled?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
                SuppressionOptions?: { SuppressedReasons?: {} | undefined } | undefined
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                ConfigurationSetName: string
                TrackingOptions?: { CustomRedirectDomain?: {} | undefined } | undefined
                DeliveryOptions?:
                  | { TlsPolicy?: {} | undefined; SendingPoolName?: {} | undefined }
                  | undefined
                ReputationOptions?:
                  | { ReputationMetricsEnabled?: {} | undefined; LastFreshStart?: {} | undefined }
                  | undefined
                SendingOptions?: { SendingEnabled?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
                SuppressionOptions?: { SuppressedReasons?: {} | undefined } | undefined
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                ConfigurationSetName: string
                TrackingOptions?: { CustomRedirectDomain?: {} | undefined } | undefined
                DeliveryOptions?:
                  | { TlsPolicy?: {} | undefined; SendingPoolName?: {} | undefined }
                  | undefined
                ReputationOptions?:
                  | { ReputationMetricsEnabled?: {} | undefined; LastFreshStart?: {} | undefined }
                  | undefined
                SendingOptions?: { SendingEnabled?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
                SuppressionOptions?: { SuppressedReasons?: {} | undefined } | undefined
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: ListConfigurationSetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations': {
      $post:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestinationName: string
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: CreateConfigurationSetEventDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestinationName: string
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestinationName: string
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestinationName: string
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestinationName: string
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestinationName: string
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: GetConfigurationSetEventDestinationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/contact-lists/:ContactListName/contacts': {
      $post:
        | {
            input: { param: { ContactListName: string } } & {
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
                EmailAddress: string
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: CreateContactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactListName: string } } & {
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
                EmailAddress: string
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ContactListName: string } } & {
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
                EmailAddress: string
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ContactListName: string } } & {
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
                EmailAddress: string
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ContactListName: string } } & {
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
                EmailAddress: string
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { ContactListName: string } } & {
              query: { PageSize?: number | undefined; NextToken?: string | undefined }
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
                Filter?:
                  | {
                      FilteredStatus?: {} | undefined
                      TopicFilter?:
                        | {
                            TopicName?: {} | undefined
                            UseDefaultIfPreferenceUnavailable?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ListContactsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactListName: string } } & {
              query: { PageSize?: number | undefined; NextToken?: string | undefined }
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
                Filter?:
                  | {
                      FilteredStatus?: {} | undefined
                      TopicFilter?:
                        | {
                            TopicName?: {} | undefined
                            UseDefaultIfPreferenceUnavailable?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ContactListName: string } } & {
              query: { PageSize?: number | undefined; NextToken?: string | undefined }
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
                Filter?:
                  | {
                      FilteredStatus?: {} | undefined
                      TopicFilter?:
                        | {
                            TopicName?: {} | undefined
                            UseDefaultIfPreferenceUnavailable?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ContactListName: string } } & {
              query: { PageSize?: number | undefined; NextToken?: string | undefined }
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
                Filter?:
                  | {
                      FilteredStatus?: {} | undefined
                      TopicFilter?:
                        | {
                            TopicName?: {} | undefined
                            UseDefaultIfPreferenceUnavailable?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/contact-lists': {
      $post:
        | {
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
                ContactListName: string
                Topics?: Topic[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: CreateContactListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                ContactListName: string
                Topics?: Topic[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                ContactListName: string
                Topics?: Topic[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                ContactListName: string
                Topics?: Topic[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                ContactListName: string
                Topics?: Topic[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { query: { PageSize?: number | undefined; NextToken?: string | undefined } } & {
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
            output: ListContactListsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageSize?: number | undefined; NextToken?: string | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { PageSize?: number | undefined; NextToken?: string | undefined } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/custom-verification-email-templates': {
      $post:
        | {
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
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: CreateCustomVerificationEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: ListCustomVerificationEmailTemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/dedicated-ip-pools': {
      $post:
        | {
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
                PoolName: string
                Tags?: Tag[] | undefined
                ScalingMode?: 'STANDARD' | 'MANAGED' | undefined
              }
            }
            output: CreateDedicatedIpPoolResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                PoolName: string
                Tags?: Tag[] | undefined
                ScalingMode?: 'STANDARD' | 'MANAGED' | undefined
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                PoolName: string
                Tags?: Tag[] | undefined
                ScalingMode?: 'STANDARD' | 'MANAGED' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                PoolName: string
                Tags?: Tag[] | undefined
                ScalingMode?: 'STANDARD' | 'MANAGED' | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                PoolName: string
                Tags?: Tag[] | undefined
                ScalingMode?: 'STANDARD' | 'MANAGED' | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                PoolName: string
                Tags?: Tag[] | undefined
                ScalingMode?: 'STANDARD' | 'MANAGED' | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: ListDedicatedIpPoolsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/deliverability-dashboard/test': {
      $post:
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: CreateDeliverabilityTestReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: AccountSuspendedException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: SendingPausedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: MessageRejected
            outputFormat: 'json'
            status: 482
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: MailFromDomainNotVerifiedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 487
          }
        | {
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
                ReportName?: string | undefined
                FromEmailAddress: string
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                Tags?: Tag[] | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/v2/email/identities': {
      $post:
        | {
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
                EmailIdentity: string
                Tags?: Tag[] | undefined
                DkimSigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
                ConfigurationSetName?: string | undefined
              }
            }
            output: CreateEmailIdentityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                EmailIdentity: string
                Tags?: Tag[] | undefined
                DkimSigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
                ConfigurationSetName?: string | undefined
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                EmailIdentity: string
                Tags?: Tag[] | undefined
                DkimSigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
                ConfigurationSetName?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                EmailIdentity: string
                Tags?: Tag[] | undefined
                DkimSigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
                ConfigurationSetName?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                EmailIdentity: string
                Tags?: Tag[] | undefined
                DkimSigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
                ConfigurationSetName?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                EmailIdentity: string
                Tags?: Tag[] | undefined
                DkimSigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
                ConfigurationSetName?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                EmailIdentity: string
                Tags?: Tag[] | undefined
                DkimSigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
                ConfigurationSetName?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: ListEmailIdentitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/identities/:EmailIdentity/policies/:PolicyName': {
      $post:
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: CreateEmailIdentityPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
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
            output: DeleteEmailIdentityPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: UpdateEmailIdentityPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string; PolicyName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Policy: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/templates': {
      $post:
        | {
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
                TemplateName: string
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: CreateEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                TemplateName: string
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                TemplateName: string
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                TemplateName: string
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                TemplateName: string
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: ListEmailTemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/import-jobs': {
      $post:
        | {
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
                ImportDestination: {
                  SuppressionListDestination?: { SuppressionListImportAction: {} } | undefined
                  ContactListDestination?:
                    | { ContactListName: {}; ContactListImportAction: {} }
                    | undefined
                }
                ImportDataSource: { S3Url?: {} | undefined; DataFormat?: {} | undefined }
              }
            }
            output: CreateImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                ImportDestination: {
                  SuppressionListDestination?: { SuppressionListImportAction: {} } | undefined
                  ContactListDestination?:
                    | { ContactListName: {}; ContactListImportAction: {} }
                    | undefined
                }
                ImportDataSource: { S3Url?: {} | undefined; DataFormat?: {} | undefined }
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                ImportDestination: {
                  SuppressionListDestination?: { SuppressionListImportAction: {} } | undefined
                  ContactListDestination?:
                    | { ContactListName: {}; ContactListImportAction: {} }
                    | undefined
                }
                ImportDataSource: { S3Url?: {} | undefined; DataFormat?: {} | undefined }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                ImportDestination: {
                  SuppressionListDestination?: { SuppressionListImportAction: {} } | undefined
                  ContactListDestination?:
                    | { ContactListName: {}; ContactListImportAction: {} }
                    | undefined
                }
                ImportDataSource: { S3Url?: {} | undefined; DataFormat?: {} | undefined }
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
              json: { ImportDestinationType?: 'SUPPRESSION_LIST' | 'CONTACT_LIST' | undefined }
            }
            output: ListImportJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
              json: { ImportDestinationType?: 'SUPPRESSION_LIST' | 'CONTACT_LIST' | undefined }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
              json: { ImportDestinationType?: 'SUPPRESSION_LIST' | 'CONTACT_LIST' | undefined }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName': {
      $delete:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: DeleteConfigurationSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: GetConfigurationSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName': {
      $delete:
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            output: DeleteConfigurationSetEventDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: UpdateConfigurationSetEventDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination: {
                  Enabled?: {} | undefined
                  MatchingEventTypes?: {} | undefined
                  KinesisFirehoseDestination?: { IamRoleArn: {}; DeliveryStreamArn: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SnsDestination?: { TopicArn: {} } | undefined
                  PinpointDestination?: { ApplicationArn?: {} | undefined } | undefined
                }
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress': {
      $delete:
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
            output: DeleteContactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
            output: GetContactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: UpdateContactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ContactListName: string; EmailAddress: string } } & {
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
                TopicPreferences?: TopicPreference[] | undefined
                UnsubscribeAll?: boolean | undefined
                AttributesData?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v2/email/contact-lists/:ContactListName': {
      $delete:
        | {
            input: { param: { ContactListName: string } } & {
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
            output: DeleteContactListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactListName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ContactListName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ContactListName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ContactListName: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { ContactListName: string } } & {
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
            output: GetContactListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactListName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ContactListName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ContactListName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: { param: { ContactListName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Topics?: Topic[] | undefined; Description?: string | undefined } }
            output: UpdateContactListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactListName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Topics?: Topic[] | undefined; Description?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ContactListName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Topics?: Topic[] | undefined; Description?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ContactListName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Topics?: Topic[] | undefined; Description?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ContactListName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Topics?: Topic[] | undefined; Description?: string | undefined } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v2/email/custom-verification-email-templates/:TemplateName': {
      $delete:
        | {
            input: { param: { TemplateName: string } } & {
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
            output: DeleteCustomVerificationEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { TemplateName: string } } & {
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
            output: GetCustomVerificationEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: { param: { TemplateName: string } } & {
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
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: UpdateCustomVerificationEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TemplateName: string } } & {
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
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TemplateName: string } } & {
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
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TemplateName: string } } & {
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
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/dedicated-ip-pools/:PoolName': {
      $delete:
        | {
            input: { param: { PoolName: string } } & {
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
            output: DeleteDedicatedIpPoolResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PoolName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { PoolName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { PoolName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { PoolName: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { PoolName: string } } & {
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
            output: GetDedicatedIpPoolResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PoolName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { PoolName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { PoolName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/identities/:EmailIdentity': {
      $delete:
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: DeleteEmailIdentityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: GetEmailIdentityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/templates/:TemplateName': {
      $delete:
        | {
            input: { param: { TemplateName: string } } & {
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
            output: DeleteEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { TemplateName: string } } & {
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
            output: GetEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TemplateName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: { param: { TemplateName: string } } & {
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
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: UpdateEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TemplateName: string } } & {
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
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TemplateName: string } } & {
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
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TemplateName: string } } & {
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
                TemplateContent: {
                  Subject?: {} | undefined
                  Text?: {} | undefined
                  Html?: {} | undefined
                }
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/suppression/addresses/:EmailAddress': {
      $delete:
        | {
            input: { param: { EmailAddress: string } } & {
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
            output: DeleteSuppressedDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailAddress: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailAddress: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailAddress: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { EmailAddress: string } } & {
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
            output: GetSuppressedDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailAddress: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailAddress: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailAddress: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/account': {
      $get:
        | {
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
            }
            output: GetAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/deliverability-dashboard/blacklist-report#BlacklistItemNames': {
      $get:
        | {
            input: { query: { BlacklistItemNames: BlacklistItemName[] } } & {
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
            output: GetBlacklistReportsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { BlacklistItemNames: BlacklistItemName[] } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { BlacklistItemNames: BlacklistItemName[] } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { BlacklistItemNames: BlacklistItemName[] } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/dedicated-ips/:IP': {
      $get:
        | {
            input: { param: { IP: string } } & {
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
            output: GetDedicatedIpResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IP: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IP: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IP: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/dedicated-ips': {
      $get:
        | {
            input: {
              query: {
                PoolName?: string | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: GetDedicatedIpsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                PoolName?: string | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                PoolName?: string | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                PoolName?: string | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/deliverability-dashboard': {
      $get:
        | {
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
            }
            output: GetDeliverabilityDashboardOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
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
                DashboardEnabled: boolean
                SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined
              }
            }
            output: PutDeliverabilityDashboardOptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                DashboardEnabled: boolean
                SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                DashboardEnabled: boolean
                SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                DashboardEnabled: boolean
                SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                DashboardEnabled: boolean
                SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                DashboardEnabled: boolean
                SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v2/email/deliverability-dashboard/test-reports/:ReportId': {
      $get:
        | {
            input: { param: { ReportId: string } } & {
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
            output: GetDeliverabilityTestReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReportId: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ReportId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ReportId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/deliverability-dashboard/campaigns/:CampaignId': {
      $get:
        | {
            input: { param: { CampaignId: string } } & {
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
            output: GetDomainDeliverabilityCampaignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CampaignId: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CampaignId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CampaignId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/deliverability-dashboard/statistics-report/:Domain#StartDate&EndDate': {
      $get:
        | {
            input: { param: { Domain: string } } & {
              query: { StartDate: string; EndDate: string }
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
            output: GetDomainStatisticsReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Domain: string } } & {
              query: { StartDate: string; EndDate: string }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Domain: string } } & {
              query: { StartDate: string; EndDate: string }
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Domain: string } } & {
              query: { StartDate: string; EndDate: string }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/identities/:EmailIdentity/policies': {
      $get:
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: GetEmailIdentityPoliciesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/import-jobs/:JobId': {
      $get:
        | {
            input: { param: { JobId: string } } & {
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
            output: GetImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { JobId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { JobId: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/deliverability-dashboard/test-reports': {
      $get:
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: ListDeliverabilityTestReportsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: number | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/deliverability-dashboard/domains/:SubscribedDomain/campaigns#StartDate&EndDate': {
      $get:
        | {
            input: { param: { SubscribedDomain: string } } & {
              query: {
                StartDate: string
                EndDate: string
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: ListDomainDeliverabilityCampaignsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { SubscribedDomain: string } } & {
              query: {
                StartDate: string
                EndDate: string
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { SubscribedDomain: string } } & {
              query: {
                StartDate: string
                EndDate: string
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { SubscribedDomain: string } } & {
              query: {
                StartDate: string
                EndDate: string
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/vdm/recommendations': {
      $post:
        | {
            input: { query: { PageSize?: string | undefined; NextToken?: string | undefined } } & {
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
                Filter?: { [x: string]: ListRecommendationFilterValue } | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
              }
            }
            output: ListRecommendationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageSize?: string | undefined; NextToken?: string | undefined } } & {
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
                Filter?: { [x: string]: ListRecommendationFilterValue } | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { PageSize?: string | undefined; NextToken?: string | undefined } } & {
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
                Filter?: { [x: string]: ListRecommendationFilterValue } | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { PageSize?: string | undefined; NextToken?: string | undefined } } & {
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
                Filter?: { [x: string]: ListRecommendationFilterValue } | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/suppression/addresses': {
      $get:
        | {
            input: {
              query: {
                Reason?: SuppressionListReason[] | undefined
                StartDate?: string | undefined
                EndDate?: string | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: ListSuppressedDestinationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Reason?: SuppressionListReason[] | undefined
                StartDate?: string | undefined
                EndDate?: string | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                Reason?: SuppressionListReason[] | undefined
                StartDate?: string | undefined
                EndDate?: string | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                Reason?: SuppressionListReason[] | undefined
                StartDate?: string | undefined
                EndDate?: string | undefined
                NextToken?: string | undefined
                PageSize?: number | undefined
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
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
            } & { json: { EmailAddress: string; Reason: 'BOUNCE' | 'COMPLAINT' } }
            output: PutSuppressedDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { EmailAddress: string; Reason: 'BOUNCE' | 'COMPLAINT' } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { EmailAddress: string; Reason: 'BOUNCE' | 'COMPLAINT' } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/tags#ResourceArn': {
      $get:
        | {
            input: { query: { ResourceArn: string } } & {
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
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ResourceArn: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { ResourceArn: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { ResourceArn: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/account/dedicated-ips/warmup': {
      $put:
        | {
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
            } & { json: { AutoWarmupEnabled?: boolean | undefined } }
            output: PutAccountDedicatedIpWarmupAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { AutoWarmupEnabled?: boolean | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { AutoWarmupEnabled?: boolean | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/account/details': {
      $post:
        | {
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
                MailType: 'MARKETING' | 'TRANSACTIONAL'
                WebsiteURL: string
                ContactLanguage?: 'EN' | 'JA' | undefined
                UseCaseDescription: string
                AdditionalContactEmailAddresses?: AdditionalContactEmailAddress[] | undefined
                ProductionAccessEnabled?: boolean | undefined
              }
            }
            output: PutAccountDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                MailType: 'MARKETING' | 'TRANSACTIONAL'
                WebsiteURL: string
                ContactLanguage?: 'EN' | 'JA' | undefined
                UseCaseDescription: string
                AdditionalContactEmailAddresses?: AdditionalContactEmailAddress[] | undefined
                ProductionAccessEnabled?: boolean | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                MailType: 'MARKETING' | 'TRANSACTIONAL'
                WebsiteURL: string
                ContactLanguage?: 'EN' | 'JA' | undefined
                UseCaseDescription: string
                AdditionalContactEmailAddresses?: AdditionalContactEmailAddress[] | undefined
                ProductionAccessEnabled?: boolean | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                MailType: 'MARKETING' | 'TRANSACTIONAL'
                WebsiteURL: string
                ContactLanguage?: 'EN' | 'JA' | undefined
                UseCaseDescription: string
                AdditionalContactEmailAddresses?: AdditionalContactEmailAddress[] | undefined
                ProductionAccessEnabled?: boolean | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/account/sending': {
      $put:
        | {
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
            } & { json: { SendingEnabled?: boolean | undefined } }
            output: PutAccountSendingAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { SendingEnabled?: boolean | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { SendingEnabled?: boolean | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/account/suppression': {
      $put:
        | {
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
            } & { json: { SuppressedReasons?: SuppressionListReason[] | undefined } }
            output: PutAccountSuppressionAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { SuppressedReasons?: SuppressionListReason[] | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { SuppressedReasons?: SuppressionListReason[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/account/vdm': {
      $put:
        | {
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
                VdmAttributes: {
                  VdmEnabled?: {} | undefined
                  DashboardAttributes?: { EngagementMetrics?: {} | undefined } | undefined
                  GuardianAttributes?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                }
              }
            }
            output: PutAccountVdmAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                VdmAttributes: {
                  VdmEnabled?: {} | undefined
                  DashboardAttributes?: { EngagementMetrics?: {} | undefined } | undefined
                  GuardianAttributes?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                }
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                VdmAttributes: {
                  VdmEnabled?: {} | undefined
                  DashboardAttributes?: { EngagementMetrics?: {} | undefined } | undefined
                  GuardianAttributes?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                }
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName/delivery-options': {
      $put:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                TlsPolicy?: 'REQUIRE' | 'OPTIONAL' | undefined
                SendingPoolName?: string | undefined
              }
            }
            output: PutConfigurationSetDeliveryOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                TlsPolicy?: 'REQUIRE' | 'OPTIONAL' | undefined
                SendingPoolName?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                TlsPolicy?: 'REQUIRE' | 'OPTIONAL' | undefined
                SendingPoolName?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                TlsPolicy?: 'REQUIRE' | 'OPTIONAL' | undefined
                SendingPoolName?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName/reputation-options': {
      $put:
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReputationMetricsEnabled?: boolean | undefined } }
            output: PutConfigurationSetReputationOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReputationMetricsEnabled?: boolean | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReputationMetricsEnabled?: boolean | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReputationMetricsEnabled?: boolean | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName/sending': {
      $put:
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SendingEnabled?: boolean | undefined } }
            output: PutConfigurationSetSendingOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SendingEnabled?: boolean | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SendingEnabled?: boolean | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SendingEnabled?: boolean | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName/suppression-options': {
      $put:
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SuppressedReasons?: SuppressionListReason[] | undefined } }
            output: PutConfigurationSetSuppressionOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SuppressedReasons?: SuppressionListReason[] | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SuppressedReasons?: SuppressionListReason[] | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SuppressedReasons?: SuppressionListReason[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName/tracking-options': {
      $put:
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomRedirectDomain?: string | undefined } }
            output: PutConfigurationSetTrackingOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomRedirectDomain?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomRedirectDomain?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomRedirectDomain?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/configuration-sets/:ConfigurationSetName/vdm-options': {
      $put:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: PutConfigurationSetVdmOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                VdmOptions?:
                  | {
                      DashboardOptions?: { EngagementMetrics?: {} | undefined } | undefined
                      GuardianOptions?: { OptimizedSharedDelivery?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/dedicated-ips/:IP/pool': {
      $put:
        | {
            input: { param: { IP: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DestinationPoolName: string } }
            output: PutDedicatedIpInPoolResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IP: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DestinationPoolName: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IP: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DestinationPoolName: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IP: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DestinationPoolName: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/dedicated-ip-pools/:PoolName/scaling': {
      $put:
        | {
            input: { param: { PoolName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ScalingMode: 'STANDARD' | 'MANAGED' } }
            output: PutDedicatedIpPoolScalingAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PoolName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ScalingMode: 'STANDARD' | 'MANAGED' } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { PoolName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ScalingMode: 'STANDARD' | 'MANAGED' } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { PoolName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ScalingMode: 'STANDARD' | 'MANAGED' } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { PoolName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ScalingMode: 'STANDARD' | 'MANAGED' } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v2/email/dedicated-ips/:IP/warmup': {
      $put:
        | {
            input: { param: { IP: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WarmupPercentage: number } }
            output: PutDedicatedIpWarmupAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IP: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WarmupPercentage: number } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IP: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WarmupPercentage: number } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IP: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WarmupPercentage: number } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/identities/:EmailIdentity/configuration-set': {
      $put:
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: PutEmailIdentityConfigurationSetAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/identities/:EmailIdentity/dkim': {
      $put:
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SigningEnabled?: boolean | undefined } }
            output: PutEmailIdentityDkimAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SigningEnabled?: boolean | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SigningEnabled?: boolean | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { SigningEnabled?: boolean | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/email/identities/:EmailIdentity/dkim/signing': {
      $put:
        | {
            input: { param: { EmailIdentity: string } } & {
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
                SigningAttributesOrigin: 'AWS_SES' | 'EXTERNAL'
                SigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
              }
            }
            output: PutEmailIdentityDkimSigningAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
                SigningAttributesOrigin: 'AWS_SES' | 'EXTERNAL'
                SigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
                SigningAttributesOrigin: 'AWS_SES' | 'EXTERNAL'
                SigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
                SigningAttributesOrigin: 'AWS_SES' | 'EXTERNAL'
                SigningAttributes?:
                  | {
                      DomainSigningSelector?: {} | undefined
                      DomainSigningPrivateKey?: {} | undefined
                      NextSigningKeyLength?: {} | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/identities/:EmailIdentity/feedback': {
      $put:
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { EmailForwardingEnabled?: boolean | undefined } }
            output: PutEmailIdentityFeedbackAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { EmailForwardingEnabled?: boolean | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { EmailForwardingEnabled?: boolean | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { EmailForwardingEnabled?: boolean | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/identities/:EmailIdentity/mail-from': {
      $put:
        | {
            input: { param: { EmailIdentity: string } } & {
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
                MailFromDomain?: string | undefined
                BehaviorOnMxFailure?: 'USE_DEFAULT_VALUE' | 'REJECT_MESSAGE' | undefined
              }
            }
            output: PutEmailIdentityMailFromAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
                MailFromDomain?: string | undefined
                BehaviorOnMxFailure?: 'USE_DEFAULT_VALUE' | 'REJECT_MESSAGE' | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
                MailFromDomain?: string | undefined
                BehaviorOnMxFailure?: 'USE_DEFAULT_VALUE' | 'REJECT_MESSAGE' | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { EmailIdentity: string } } & {
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
                MailFromDomain?: string | undefined
                BehaviorOnMxFailure?: 'USE_DEFAULT_VALUE' | 'REJECT_MESSAGE' | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/outbound-bulk-emails': {
      $post:
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: SendBulkEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: AccountSuspendedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: SendingPausedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: MessageRejected
            outputFormat: 'json'
            status: 484
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: MailFromDomainNotVerifiedException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                DefaultEmailTags?: MessageTag[] | undefined
                DefaultContent: {
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                BulkEmailEntries: BulkEmailEntry[]
                ConfigurationSetName?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/v2/email/outbound-custom-verification-emails': {
      $post:
        | {
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
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
              }
            }
            output: SendCustomVerificationEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
              }
            }
            output: MessageRejected
            outputFormat: 'json'
            status: 482
          }
        | {
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
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
              }
            }
            output: SendingPausedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
              }
            }
            output: MailFromDomainNotVerifiedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v2/email/outbound-emails': {
      $post:
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: SendEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: AccountSuspendedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: SendingPausedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: MessageRejected
            outputFormat: 'json'
            status: 484
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: MailFromDomainNotVerifiedException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
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
                FromEmailAddress?: string | undefined
                FromEmailAddressIdentityArn?: string | undefined
                Destination?:
                  | {
                      ToAddresses?: {} | undefined
                      CcAddresses?: {} | undefined
                      BccAddresses?: {} | undefined
                    }
                  | undefined
                ReplyToAddresses?: EmailAddress[] | undefined
                FeedbackForwardingEmailAddress?: string | undefined
                FeedbackForwardingEmailAddressIdentityArn?: string | undefined
                Content: {
                  Simple?:
                    | {
                        Subject: { Data: {}; Charset?: {} | undefined }
                        Body: {
                          Text?: { Data: {}; Charset?: {} | undefined } | undefined
                          Html?: { Data: {}; Charset?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  Raw?: { Data: {} } | undefined
                  Template?:
                    | {
                        TemplateName?: {} | undefined
                        TemplateArn?: {} | undefined
                        TemplateData?: {} | undefined
                      }
                    | undefined
                }
                EmailTags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                ListManagementOptions?:
                  | { ContactListName?: {} | undefined; TopicName?: {} | undefined }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/v2/email/tags': {
      $post:
        | {
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v2/email/templates/:TemplateName/render': {
      $post:
        | {
            input: { param: { TemplateName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { TemplateData: string } }
            output: TestRenderEmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TemplateName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { TemplateData: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TemplateName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { TemplateData: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TemplateName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { TemplateData: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v2/email/tags#ResourceArn&TagKeys': {
      $delete:
        | {
            input: { query: { ResourceArn: string; TagKeys: TagKey[] } } & {
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
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ResourceArn: string; TagKeys: TagKey[] } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { ResourceArn: string; TagKeys: TagKey[] } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { ResourceArn: string; TagKeys: TagKey[] } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { ResourceArn: string; TagKeys: TagKey[] } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
