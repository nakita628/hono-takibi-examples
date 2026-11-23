type Tag = { Key: {}; Value: {} }
type CreateConfigurationSetResponse = { [x: string]: unknown }
type ListConfigurationSetsResponse = {
  ConfigurationSets?: {} | undefined
  NextToken?: {} | undefined
}
type CreateConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type GetConfigurationSetEventDestinationsResponse = { EventDestinations?: {} | undefined }
type CreateDedicatedIpPoolResponse = { [x: string]: unknown }
type ListDedicatedIpPoolsResponse = {
  DedicatedIpPools?: {} | undefined
  NextToken?: {} | undefined
}
type CreateDeliverabilityTestReportResponse = { ReportId: {}; DeliverabilityTestStatus: {} }
type CreateEmailIdentityResponse = {
  IdentityType?: {} | undefined
  VerifiedForSendingStatus?: {} | undefined
  DkimAttributes?:
    | { SigningEnabled?: {} | undefined; Status?: {} | undefined; Tokens?: {} | undefined }
    | undefined
}
type ListEmailIdentitiesResponse = { EmailIdentities?: {} | undefined; NextToken?: {} | undefined }
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
}
type DeleteConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type UpdateConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type DeleteDedicatedIpPoolResponse = { [x: string]: unknown }
type DeleteEmailIdentityResponse = { [x: string]: unknown }
type GetEmailIdentityResponse = {
  IdentityType?: {} | undefined
  FeedbackForwardingStatus?: {} | undefined
  VerifiedForSendingStatus?: {} | undefined
  DkimAttributes?:
    | { SigningEnabled?: {} | undefined; Status?: {} | undefined; Tokens?: {} | undefined }
    | undefined
  MailFromAttributes?:
    | { MailFromDomain: {}; MailFromDomainStatus: {}; BehaviorOnMxFailure: {} }
    | undefined
  Tags?: {} | undefined
}
type GetAccountResponse = {
  SendQuota?:
    | {
        Max24HourSend?: {} | undefined
        MaxSendRate?: {} | undefined
        SentLast24Hours?: {} | undefined
      }
    | undefined
  SendingEnabled?: {} | undefined
  DedicatedIpAutoWarmupEnabled?: {} | undefined
  EnforcementStatus?: {} | undefined
  ProductionAccessEnabled?: {} | undefined
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
type ListDeliverabilityTestReportsResponse = {
  DeliverabilityTestReports: {}
  NextToken?: {} | undefined
}
type ListDomainDeliverabilityCampaignsResponse = {
  DomainDeliverabilityCampaigns: {}
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags: {} }
type PutAccountDedicatedIpWarmupAttributesResponse = { [x: string]: unknown }
type PutAccountSendingAttributesResponse = { [x: string]: unknown }
type PutConfigurationSetDeliveryOptionsResponse = { [x: string]: unknown }
type PutConfigurationSetReputationOptionsResponse = { [x: string]: unknown }
type PutConfigurationSetSendingOptionsResponse = { [x: string]: unknown }
type PutConfigurationSetTrackingOptionsResponse = { [x: string]: unknown }
type PutDedicatedIpInPoolResponse = { [x: string]: unknown }
type PutDedicatedIpWarmupAttributesResponse = { [x: string]: unknown }
type PutEmailIdentityDkimAttributesResponse = { [x: string]: unknown }
type PutEmailIdentityFeedbackAttributesResponse = { [x: string]: unknown }
type PutEmailIdentityMailFromAttributesResponse = { [x: string]: unknown }
type EmailAddress = string
type MessageTag = { Name: {}; Value: {} }
type SendEmailResponse = { MessageId?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/email/configuration-sets': {
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
          }
        }
        output: CreateConfigurationSetResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
    }
  } & {
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations': {
      $post: {
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
      $get: {
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
    }
  } & {
    '/v1/email/dedicated-ip-pools': {
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
        } & { json: { PoolName: string; Tags?: Tag[] | undefined } }
        output: CreateDedicatedIpPoolResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
    }
  } & {
    '/v1/email/deliverability-dashboard/test': {
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
              Template?: { TemplateArn?: {} | undefined; TemplateData?: {} | undefined } | undefined
            }
            Tags?: Tag[] | undefined
          }
        }
        output: CreateDeliverabilityTestReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/identities': {
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
        } & { json: { EmailIdentity: string; Tags?: Tag[] | undefined } }
        output: CreateEmailIdentityResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
    }
  } & {
    '/v1/email/configuration-sets/:ConfigurationSetName': {
      $delete: {
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
      $get: {
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
    }
  } & {
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName': {
      $delete: {
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
      $put: {
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
    }
  } & {
    '/v1/email/dedicated-ip-pools/:PoolName': {
      $delete: {
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
    }
  } & {
    '/v1/email/identities/:EmailIdentity': {
      $delete: {
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
      $get: {
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
    }
  } & {
    '/v1/email/account': {
      $get: {
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
    }
  } & {
    '/v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames': {
      $get: {
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
    }
  } & {
    '/v1/email/dedicated-ips/:IP': {
      $get: {
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
    }
  } & {
    '/v1/email/dedicated-ips': {
      $get: {
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
    }
  } & {
    '/v1/email/deliverability-dashboard': {
      $get: {
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
            DashboardEnabled: boolean
            SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined
          }
        }
        output: PutDeliverabilityDashboardOptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/deliverability-dashboard/test-reports/:ReportId': {
      $get: {
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
    }
  } & {
    '/v1/email/deliverability-dashboard/campaigns/:CampaignId': {
      $get: {
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
    }
  } & {
    '/v1/email/deliverability-dashboard/statistics-report/:Domain#StartDate&EndDate': {
      $get: {
        input: { param: { Domain: string } } & { query: { StartDate: string; EndDate: string } } & {
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
    }
  } & {
    '/v1/email/deliverability-dashboard/test-reports': {
      $get: {
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
    }
  } & {
    '/v1/email/deliverability-dashboard/domains/:SubscribedDomain/campaigns#StartDate&EndDate': {
      $get: {
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
    }
  } & {
    '/v1/email/tags#ResourceArn': {
      $get: {
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
    }
  } & {
    '/v1/email/account/dedicated-ips/warmup': {
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
        } & { json: { AutoWarmupEnabled?: boolean | undefined } }
        output: PutAccountDedicatedIpWarmupAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/account/sending': {
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
        } & { json: { SendingEnabled?: boolean | undefined } }
        output: PutAccountSendingAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/configuration-sets/:ConfigurationSetName/delivery-options': {
      $put: {
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
    }
  } & {
    '/v1/email/configuration-sets/:ConfigurationSetName/reputation-options': {
      $put: {
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
    }
  } & {
    '/v1/email/configuration-sets/:ConfigurationSetName/sending': {
      $put: {
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
    }
  } & {
    '/v1/email/configuration-sets/:ConfigurationSetName/tracking-options': {
      $put: {
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
    }
  } & {
    '/v1/email/dedicated-ips/:IP/pool': {
      $put: {
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
    }
  } & {
    '/v1/email/dedicated-ips/:IP/warmup': {
      $put: {
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
    }
  } & {
    '/v1/email/identities/:EmailIdentity/dkim': {
      $put: {
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
    }
  } & {
    '/v1/email/identities/:EmailIdentity/feedback': {
      $put: {
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
    }
  } & {
    '/v1/email/identities/:EmailIdentity/mail-from': {
      $put: {
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
    }
  } & {
    '/v1/email/outbound-emails': {
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
            FromEmailAddress?: string | undefined
            Destination: {
              ToAddresses?: {} | undefined
              CcAddresses?: {} | undefined
              BccAddresses?: {} | undefined
            }
            ReplyToAddresses?: EmailAddress[] | undefined
            FeedbackForwardingEmailAddress?: string | undefined
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
              Template?: { TemplateArn?: {} | undefined; TemplateData?: {} | undefined } | undefined
            }
            EmailTags?: MessageTag[] | undefined
            ConfigurationSetName?: string | undefined
          }
        }
        output: SendEmailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/tags': {
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
        } & { json: { ResourceArn: string; Tags: Tag[] } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/tags#ResourceArn&TagKeys': {
      $delete: {
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
    }
  },
  '/'
>
export default routes
