type CloneReceiptRuleSetResponse = { [x: string]: unknown }
type RuleSetDoesNotExistException = { [x: string]: unknown }
type AlreadyExistsException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type CloneReceiptRuleSetRequest = { RuleSetName: {}; OriginalRuleSetName: {} }
type CreateConfigurationSetResponse = { [x: string]: unknown }
type ConfigurationSetAlreadyExistsException = { [x: string]: unknown }
type InvalidConfigurationSetException = { [x: string]: unknown }
type CreateConfigurationSetRequest = { ConfigurationSet: { Name: {} } }
type CreateConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type ConfigurationSetDoesNotExistException = { [x: string]: unknown }
type EventDestinationAlreadyExistsException = { [x: string]: unknown }
type InvalidCloudWatchDestinationException = { [x: string]: unknown }
type InvalidFirehoseDestinationException = { [x: string]: unknown }
type InvalidSNSDestinationException = { [x: string]: unknown }
type CreateConfigurationSetEventDestinationRequest = {
  ConfigurationSetName: {}
  EventDestination: {
    Name: {}
    Enabled?: {} | undefined
    MatchingEventTypes: {}
    KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
    CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
    SNSDestination?: { TopicARN: {} } | undefined
  }
}
type CreateConfigurationSetTrackingOptionsResponse = { [x: string]: unknown }
type TrackingOptionsAlreadyExistsException = { [x: string]: unknown }
type InvalidTrackingOptionsException = { [x: string]: unknown }
type TrackingOptions = { CustomRedirectDomain?: {} | undefined }
type CreateConfigurationSetTrackingOptionsRequest = {
  ConfigurationSetName: {}
  TrackingOptions: TrackingOptions
}
type CustomVerificationEmailTemplateAlreadyExistsException = { [x: string]: unknown }
type FromEmailAddressNotVerifiedException = { [x: string]: unknown }
type CustomVerificationEmailInvalidContentException = { [x: string]: unknown }
type CreateCustomVerificationEmailTemplateRequest = {
  TemplateName: {}
  FromEmailAddress: {}
  TemplateSubject: {}
  TemplateContent: {}
  SuccessRedirectionURL: {}
  FailureRedirectionURL: {}
}
type CreateReceiptFilterResponse = { [x: string]: unknown }
type CreateReceiptFilterRequest = { Filter: { Name: {}; IpFilter: { Policy: {}; Cidr: {} } } }
type CreateReceiptRuleResponse = { [x: string]: unknown }
type InvalidSnsTopicException = { [x: string]: unknown }
type InvalidS3ConfigurationException = { [x: string]: unknown }
type InvalidLambdaFunctionException = { [x: string]: unknown }
type RuleDoesNotExistException = { [x: string]: unknown }
type CreateReceiptRuleRequest = {
  RuleSetName: {}
  After?: {} | undefined
  Rule: {
    Name: {}
    Enabled?: {} | undefined
    TlsPolicy?: {} | undefined
    Recipients?: {} | undefined
    Actions?: {} | undefined
    ScanEnabled?: {} | undefined
  }
}
type CreateReceiptRuleSetResponse = { [x: string]: unknown }
type CreateReceiptRuleSetRequest = { RuleSetName: {} }
type CreateTemplateResponse = { [x: string]: unknown }
type InvalidTemplateException = { [x: string]: unknown }
type CreateTemplateRequest = {
  Template: {
    TemplateName: {}
    SubjectPart?: {} | undefined
    TextPart?: {} | undefined
    HtmlPart?: {} | undefined
  }
}
type DeleteConfigurationSetResponse = { [x: string]: unknown }
type DeleteConfigurationSetRequest = { ConfigurationSetName: {} }
type DeleteConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type EventDestinationDoesNotExistException = { [x: string]: unknown }
type DeleteConfigurationSetEventDestinationRequest = {
  ConfigurationSetName: {}
  EventDestinationName: {}
}
type DeleteConfigurationSetTrackingOptionsResponse = { [x: string]: unknown }
type TrackingOptionsDoesNotExistException = { [x: string]: unknown }
type DeleteConfigurationSetTrackingOptionsRequest = { ConfigurationSetName: {} }
type DeleteCustomVerificationEmailTemplateRequest = { TemplateName: {} }
type DeleteIdentityResponse = { [x: string]: unknown }
type DeleteIdentityRequest = { Identity: {} }
type DeleteIdentityPolicyResponse = { [x: string]: unknown }
type DeleteIdentityPolicyRequest = { Identity: {}; PolicyName: {} }
type DeleteReceiptFilterResponse = { [x: string]: unknown }
type DeleteReceiptFilterRequest = { FilterName: {} }
type DeleteReceiptRuleResponse = { [x: string]: unknown }
type DeleteReceiptRuleRequest = { RuleSetName: {}; RuleName: {} }
type DeleteReceiptRuleSetResponse = { [x: string]: unknown }
type CannotDeleteException = { [x: string]: unknown }
type DeleteReceiptRuleSetRequest = { RuleSetName: {} }
type DeleteTemplateResponse = { [x: string]: unknown }
type DeleteTemplateRequest = { TemplateName: {} }
type DeleteVerifiedEmailAddressRequest = { EmailAddress: {} }
type DescribeActiveReceiptRuleSetResponse = {
  Metadata?: { Name?: {} | undefined; CreatedTimestamp?: {} | undefined } | undefined
  Rules?: {} | undefined
}
type DescribeActiveReceiptRuleSetRequest = { [x: string]: unknown }
type ConfigurationSetAttribute =
  | 'eventDestinations'
  | 'trackingOptions'
  | 'deliveryOptions'
  | 'reputationOptions'
type DeliveryOptions = { TlsPolicy?: {} | undefined }
type DescribeConfigurationSetResponse = {
  ConfigurationSet?: { Name: {} } | undefined
  EventDestinations?: {} | undefined
  TrackingOptions?: { CustomRedirectDomain?: {} | undefined } | undefined
  DeliveryOptions?: DeliveryOptions | undefined
  ReputationOptions?:
    | {
        SendingEnabled?: {} | undefined
        ReputationMetricsEnabled?: {} | undefined
        LastFreshStart?: {} | undefined
      }
    | undefined
}
type DescribeConfigurationSetRequest = {
  ConfigurationSetName: {}
  ConfigurationSetAttributeNames?: {} | undefined
}
type DescribeReceiptRuleResponse = {
  Rule?:
    | {
        Name: {}
        Enabled?: {} | undefined
        TlsPolicy?: {} | undefined
        Recipients?: {} | undefined
        Actions?: {} | undefined
        ScanEnabled?: {} | undefined
      }
    | undefined
}
type DescribeReceiptRuleRequest = { RuleSetName: {}; RuleName: {} }
type DescribeReceiptRuleSetResponse = {
  Metadata?: { Name?: {} | undefined; CreatedTimestamp?: {} | undefined } | undefined
  Rules?: {} | undefined
}
type DescribeReceiptRuleSetRequest = { RuleSetName: {} }
type GetAccountSendingEnabledResponse = { Enabled?: {} | undefined }
type GetCustomVerificationEmailTemplateResponse = {
  TemplateName?: {} | undefined
  FromEmailAddress?: {} | undefined
  TemplateSubject?: {} | undefined
  TemplateContent?: {} | undefined
  SuccessRedirectionURL?: {} | undefined
  FailureRedirectionURL?: {} | undefined
}
type CustomVerificationEmailTemplateDoesNotExistException = { [x: string]: unknown }
type GetCustomVerificationEmailTemplateRequest = { TemplateName: {} }
type Identity = string
type GetIdentityDkimAttributesResponse = { DkimAttributes: {} }
type GetIdentityDkimAttributesRequest = { Identities: {} }
type GetIdentityMailFromDomainAttributesResponse = { MailFromDomainAttributes: {} }
type GetIdentityMailFromDomainAttributesRequest = { Identities: {} }
type GetIdentityNotificationAttributesResponse = { NotificationAttributes: {} }
type GetIdentityNotificationAttributesRequest = { Identities: {} }
type PolicyName = string
type GetIdentityPoliciesResponse = { Policies: {} }
type GetIdentityPoliciesRequest = { Identity: {}; PolicyNames: {} }
type GetIdentityVerificationAttributesResponse = { VerificationAttributes: {} }
type GetIdentityVerificationAttributesRequest = { Identities: {} }
type GetSendQuotaResponse = {
  Max24HourSend?: {} | undefined
  MaxSendRate?: {} | undefined
  SentLast24Hours?: {} | undefined
}
type GetSendStatisticsResponse = { SendDataPoints?: {} | undefined }
type Template = {
  TemplateName: {}
  SubjectPart?: {} | undefined
  TextPart?: {} | undefined
  HtmlPart?: {} | undefined
}
type GetTemplateResponse = { Template?: Template | undefined }
type TemplateDoesNotExistException = { [x: string]: unknown }
type GetTemplateRequest = { TemplateName: {} }
type ListConfigurationSetsResponse = {
  ConfigurationSets?: {} | undefined
  NextToken?: {} | undefined
}
type ListConfigurationSetsRequest = { NextToken?: {} | undefined; MaxItems?: {} | undefined }
type ListCustomVerificationEmailTemplatesResponse = {
  CustomVerificationEmailTemplates?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomVerificationEmailTemplatesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListIdentitiesResponse = { Identities: {}; NextToken?: {} | undefined }
type ListIdentitiesRequest = {
  IdentityType?: {} | undefined
  NextToken?: {} | undefined
  MaxItems?: {} | undefined
}
type ListIdentityPoliciesResponse = { PolicyNames: {} }
type ListIdentityPoliciesRequest = { Identity: {} }
type ListReceiptFiltersResponse = { Filters?: {} | undefined }
type ListReceiptFiltersRequest = { [x: string]: unknown }
type ListReceiptRuleSetsResponse = { RuleSets?: {} | undefined; NextToken?: {} | undefined }
type ListReceiptRuleSetsRequest = { NextToken?: {} | undefined }
type ListTemplatesResponse = { TemplatesMetadata?: {} | undefined; NextToken?: {} | undefined }
type ListTemplatesRequest = { NextToken?: {} | undefined; MaxItems?: {} | undefined }
type ListVerifiedEmailAddressesResponse = { VerifiedEmailAddresses?: {} | undefined }
type PutConfigurationSetDeliveryOptionsResponse = { [x: string]: unknown }
type InvalidDeliveryOptionsException = { [x: string]: unknown }
type PutConfigurationSetDeliveryOptionsRequest = {
  ConfigurationSetName: {}
  DeliveryOptions?: { TlsPolicy?: {} | undefined } | undefined
}
type PutIdentityPolicyResponse = { [x: string]: unknown }
type InvalidPolicyException = { [x: string]: unknown }
type PutIdentityPolicyRequest = { Identity: {}; PolicyName: {}; Policy: {} }
type ReceiptRuleName = string
type ReorderReceiptRuleSetResponse = { [x: string]: unknown }
type ReorderReceiptRuleSetRequest = { RuleSetName: {}; RuleNames: {} }
type BouncedRecipientInfo = {
  Recipient: {}
  RecipientArn?: {} | undefined
  BounceType?: {} | undefined
  RecipientDsnFields?:
    | {
        FinalRecipient?: {} | undefined
        Action: {}
        RemoteMta?: {} | undefined
        Status: {}
        DiagnosticCode?: {} | undefined
        LastAttemptDate?: {} | undefined
        ExtensionFields?: {} | undefined
      }
    | undefined
}
type SendBounceResponse = { MessageId?: {} | undefined }
type MessageRejected = { [x: string]: unknown }
type SendBounceRequest = {
  OriginalMessageId: {}
  BounceSender: {}
  Explanation?: {} | undefined
  MessageDsn?:
    | { ReportingMta: {}; ArrivalDate?: {} | undefined; ExtensionFields?: {} | undefined }
    | undefined
  BouncedRecipientInfoList: {}
  BounceSenderArn?: {} | undefined
}
type Address = string
type MessageTag = { Name: {}; Value: {} }
type Destination = {
  ToAddresses?: {} | undefined
  CcAddresses?: {} | undefined
  BccAddresses?: {} | undefined
}
type BulkEmailDestination = {
  Destination: Destination
  ReplacementTags?: {} | undefined
  ReplacementTemplateData?: {} | undefined
}
type SendBulkTemplatedEmailResponse = { Status: {} }
type MailFromDomainNotVerifiedException = { [x: string]: unknown }
type ConfigurationSetSendingPausedException = { [x: string]: unknown }
type AccountSendingPausedException = { [x: string]: unknown }
type SendBulkTemplatedEmailRequest = {
  Source: {}
  SourceArn?: {} | undefined
  ReplyToAddresses?: {} | undefined
  ReturnPath?: {} | undefined
  ReturnPathArn?: {} | undefined
  ConfigurationSetName?: {} | undefined
  DefaultTags?: {} | undefined
  Template: {}
  TemplateArn?: {} | undefined
  DefaultTemplateData?: {} | undefined
  Destinations: {}
}
type SendCustomVerificationEmailResponse = { MessageId?: {} | undefined }
type ProductionAccessNotGrantedException = { [x: string]: unknown }
type SendCustomVerificationEmailRequest = {
  EmailAddress: {}
  TemplateName: {}
  ConfigurationSetName?: {} | undefined
}
type SendEmailResponse = { MessageId: {} }
type SendEmailRequest = {
  Source: {}
  Destination: {
    ToAddresses?: {} | undefined
    CcAddresses?: {} | undefined
    BccAddresses?: {} | undefined
  }
  Message: {
    Subject: { Data: {}; Charset?: {} | undefined }
    Body: {
      Text?: { Data: {}; Charset?: {} | undefined } | undefined
      Html?: { Data: {}; Charset?: {} | undefined } | undefined
    }
  }
  ReplyToAddresses?: {} | undefined
  ReturnPath?: {} | undefined
  SourceArn?: {} | undefined
  ReturnPathArn?: {} | undefined
  Tags?: {} | undefined
  ConfigurationSetName?: {} | undefined
}
type SendRawEmailResponse = { MessageId: {} }
type SendRawEmailRequest = {
  Source?: {} | undefined
  Destinations?: {} | undefined
  RawMessage: { Data: {} }
  FromArn?: {} | undefined
  SourceArn?: {} | undefined
  ReturnPathArn?: {} | undefined
  Tags?: {} | undefined
  ConfigurationSetName?: {} | undefined
}
type SendTemplatedEmailResponse = { MessageId: {} }
type SendTemplatedEmailRequest = {
  Source: {}
  Destination: {
    ToAddresses?: {} | undefined
    CcAddresses?: {} | undefined
    BccAddresses?: {} | undefined
  }
  ReplyToAddresses?: {} | undefined
  ReturnPath?: {} | undefined
  SourceArn?: {} | undefined
  ReturnPathArn?: {} | undefined
  Tags?: {} | undefined
  ConfigurationSetName?: {} | undefined
  Template: {}
  TemplateArn?: {} | undefined
  TemplateData: {}
}
type SetActiveReceiptRuleSetResponse = { [x: string]: unknown }
type SetActiveReceiptRuleSetRequest = { RuleSetName?: {} | undefined }
type SetIdentityDkimEnabledResponse = { [x: string]: unknown }
type SetIdentityDkimEnabledRequest = { Identity: {}; DkimEnabled: {} }
type SetIdentityFeedbackForwardingEnabledResponse = { [x: string]: unknown }
type SetIdentityFeedbackForwardingEnabledRequest = { Identity: {}; ForwardingEnabled: {} }
type SetIdentityHeadersInNotificationsEnabledResponse = { [x: string]: unknown }
type SetIdentityHeadersInNotificationsEnabledRequest = {
  Identity: {}
  NotificationType: {}
  Enabled: {}
}
type SetIdentityMailFromDomainResponse = { [x: string]: unknown }
type SetIdentityMailFromDomainRequest = {
  Identity: {}
  MailFromDomain?: {} | undefined
  BehaviorOnMXFailure?: {} | undefined
}
type SetIdentityNotificationTopicResponse = { [x: string]: unknown }
type SetIdentityNotificationTopicRequest = {
  Identity: {}
  NotificationType: {}
  SnsTopic?: {} | undefined
}
type SetReceiptRulePositionResponse = { [x: string]: unknown }
type SetReceiptRulePositionRequest = { RuleSetName: {}; RuleName: {}; After?: {} | undefined }
type TestRenderTemplateResponse = { RenderedTemplate?: {} | undefined }
type InvalidRenderingParameterException = { [x: string]: unknown }
type MissingRenderingAttributeException = { [x: string]: unknown }
type TestRenderTemplateRequest = { TemplateName: {}; TemplateData: {} }
type UpdateAccountSendingEnabledRequest = { Enabled?: {} | undefined }
type UpdateConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type UpdateConfigurationSetEventDestinationRequest = {
  ConfigurationSetName: {}
  EventDestination: {
    Name: {}
    Enabled?: {} | undefined
    MatchingEventTypes: {}
    KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
    CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
    SNSDestination?: { TopicARN: {} } | undefined
  }
}
type UpdateConfigurationSetReputationMetricsEnabledRequest = {
  ConfigurationSetName: {}
  Enabled: {}
}
type UpdateConfigurationSetSendingEnabledRequest = { ConfigurationSetName: {}; Enabled: {} }
type UpdateConfigurationSetTrackingOptionsResponse = { [x: string]: unknown }
type UpdateConfigurationSetTrackingOptionsRequest = {
  ConfigurationSetName: {}
  TrackingOptions: TrackingOptions
}
type UpdateCustomVerificationEmailTemplateRequest = {
  TemplateName: {}
  FromEmailAddress?: {} | undefined
  TemplateSubject?: {} | undefined
  TemplateContent?: {} | undefined
  SuccessRedirectionURL?: {} | undefined
  FailureRedirectionURL?: {} | undefined
}
type UpdateReceiptRuleResponse = { [x: string]: unknown }
type UpdateReceiptRuleRequest = {
  RuleSetName: {}
  Rule: {
    Name: {}
    Enabled?: {} | undefined
    TlsPolicy?: {} | undefined
    Recipients?: {} | undefined
    Actions?: {} | undefined
    ScanEnabled?: {} | undefined
  }
}
type UpdateTemplateResponse = { [x: string]: unknown }
type UpdateTemplateRequest = { Template: Template }
type VerifyDomainDkimResponse = { DkimTokens: {} }
type VerifyDomainDkimRequest = { Domain: {} }
type VerifyDomainIdentityResponse = { VerificationToken: {} }
type VerifyDomainIdentityRequest = { Domain: {} }
type VerifyEmailAddressRequest = { EmailAddress: {} }
type VerifyEmailIdentityResponse = { [x: string]: unknown }
type VerifyEmailIdentityRequest = { EmailAddress: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=CloneReceiptRuleSet': {
      $get:
        | {
            input: {
              query: {
                RuleSetName: string
                OriginalRuleSetName: string
                Action: 'CloneReceiptRuleSet'
                Version: '2010-12-01'
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
            output: CloneReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName: string
                OriginalRuleSetName: string
                Action: 'CloneReceiptRuleSet'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RuleSetName: string
                OriginalRuleSetName: string
                Action: 'CloneReceiptRuleSet'
                Version: '2010-12-01'
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
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                RuleSetName: string
                OriginalRuleSetName: string
                Action: 'CloneReceiptRuleSet'
                Version: '2010-12-01'
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CloneReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CloneReceiptRuleSetRequest }
            output: CloneReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CloneReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CloneReceiptRuleSetRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CloneReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CloneReceiptRuleSetRequest }
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CloneReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CloneReceiptRuleSetRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=CreateConfigurationSet': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSet: { Name: {} }
                Action: 'CreateConfigurationSet'
                Version: '2010-12-01'
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
            output: CreateConfigurationSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSet: { Name: {} }
                Action: 'CreateConfigurationSet'
                Version: '2010-12-01'
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
            output: ConfigurationSetAlreadyExistsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ConfigurationSet: { Name: {} }
                Action: 'CreateConfigurationSet'
                Version: '2010-12-01'
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
            output: InvalidConfigurationSetException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ConfigurationSet: { Name: {} }
                Action: 'CreateConfigurationSet'
                Version: '2010-12-01'
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CreateConfigurationSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConfigurationSetRequest }
            output: CreateConfigurationSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateConfigurationSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConfigurationSetRequest }
            output: ConfigurationSetAlreadyExistsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateConfigurationSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConfigurationSetRequest }
            output: InvalidConfigurationSetException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateConfigurationSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConfigurationSetRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=CreateConfigurationSetEventDestination': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'CreateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: CreateConfigurationSetEventDestinationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'CreateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'CreateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: EventDestinationAlreadyExistsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'CreateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: InvalidCloudWatchDestinationException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'CreateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: InvalidFirehoseDestinationException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'CreateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: InvalidSNSDestinationException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'CreateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: {
              query: { Action: 'CreateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetEventDestinationRequest }
            output: CreateConfigurationSetEventDestinationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetEventDestinationRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetEventDestinationRequest }
            output: EventDestinationAlreadyExistsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetEventDestinationRequest }
            output: InvalidCloudWatchDestinationException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetEventDestinationRequest }
            output: InvalidFirehoseDestinationException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetEventDestinationRequest }
            output: InvalidSNSDestinationException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetEventDestinationRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=CreateConfigurationSetTrackingOptions': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                TrackingOptions: { CustomRedirectDomain?: {} | undefined }
                Action: 'CreateConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: CreateConfigurationSetTrackingOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                TrackingOptions: { CustomRedirectDomain?: {} | undefined }
                Action: 'CreateConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                TrackingOptions: { CustomRedirectDomain?: {} | undefined }
                Action: 'CreateConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: TrackingOptionsAlreadyExistsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                TrackingOptions: { CustomRedirectDomain?: {} | undefined }
                Action: 'CreateConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: InvalidTrackingOptionsException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: { Action: 'CreateConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetTrackingOptionsRequest }
            output: CreateConfigurationSetTrackingOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetTrackingOptionsRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetTrackingOptionsRequest }
            output: TrackingOptionsAlreadyExistsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'CreateConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: CreateConfigurationSetTrackingOptionsRequest }
            output: InvalidTrackingOptionsException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=CreateCustomVerificationEmailTemplate': {
      $get:
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
                Action: 'CreateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
                Action: 'CreateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: CustomVerificationEmailTemplateAlreadyExistsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
                Action: 'CreateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: FromEmailAddressNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
                Action: 'CreateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: CustomVerificationEmailInvalidContentException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress: string
                TemplateSubject: string
                TemplateContent: string
                SuccessRedirectionURL: string
                FailureRedirectionURL: string
                Action: 'CreateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: { Action: 'CreateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: CreateCustomVerificationEmailTemplateRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { Action: 'CreateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: CreateCustomVerificationEmailTemplateRequest }
            output: CustomVerificationEmailTemplateAlreadyExistsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'CreateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: CreateCustomVerificationEmailTemplateRequest }
            output: FromEmailAddressNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'CreateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: CreateCustomVerificationEmailTemplateRequest }
            output: CustomVerificationEmailInvalidContentException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'CreateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: CreateCustomVerificationEmailTemplateRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=CreateReceiptFilter': {
      $get:
        | {
            input: {
              query: {
                Filter: { Name: {}; IpFilter: { Policy: {}; Cidr: {} } }
                Action: 'CreateReceiptFilter'
                Version: '2010-12-01'
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
            output: CreateReceiptFilterResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Filter: { Name: {}; IpFilter: { Policy: {}; Cidr: {} } }
                Action: 'CreateReceiptFilter'
                Version: '2010-12-01'
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Filter: { Name: {}; IpFilter: { Policy: {}; Cidr: {} } }
                Action: 'CreateReceiptFilter'
                Version: '2010-12-01'
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
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'CreateReceiptFilter'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptFilterRequest }
            output: CreateReceiptFilterResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateReceiptFilter'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptFilterRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateReceiptFilter'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptFilterRequest }
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=CreateReceiptRule': {
      $get:
        | {
            input: {
              query: {
                RuleSetName: string
                After?: string | undefined
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'CreateReceiptRule'
                Version: '2010-12-01'
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
            output: CreateReceiptRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName: string
                After?: string | undefined
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'CreateReceiptRule'
                Version: '2010-12-01'
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
            output: InvalidSnsTopicException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RuleSetName: string
                After?: string | undefined
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'CreateReceiptRule'
                Version: '2010-12-01'
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
            output: InvalidS3ConfigurationException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                RuleSetName: string
                After?: string | undefined
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'CreateReceiptRule'
                Version: '2010-12-01'
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
            output: InvalidLambdaFunctionException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                RuleSetName: string
                After?: string | undefined
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'CreateReceiptRule'
                Version: '2010-12-01'
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
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                RuleSetName: string
                After?: string | undefined
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'CreateReceiptRule'
                Version: '2010-12-01'
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
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                RuleSetName: string
                After?: string | undefined
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'CreateReceiptRule'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                RuleSetName: string
                After?: string | undefined
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'CreateReceiptRule'
                Version: '2010-12-01'
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'CreateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleRequest }
            output: CreateReceiptRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleRequest }
            output: InvalidSnsTopicException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleRequest }
            output: InvalidS3ConfigurationException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleRequest }
            output: InvalidLambdaFunctionException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleRequest }
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleRequest }
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=CreateReceiptRuleSet': {
      $get:
        | {
            input: {
              query: { RuleSetName: string; Action: 'CreateReceiptRuleSet'; Version: '2010-12-01' }
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
            output: CreateReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { RuleSetName: string; Action: 'CreateReceiptRuleSet'; Version: '2010-12-01' }
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
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { RuleSetName: string; Action: 'CreateReceiptRuleSet'; Version: '2010-12-01' }
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'CreateReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleSetRequest }
            output: CreateReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleSetRequest }
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReceiptRuleSetRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=CreateTemplate': {
      $get:
        | {
            input: {
              query: {
                Template: {
                  TemplateName: {}
                  SubjectPart?: {} | undefined
                  TextPart?: {} | undefined
                  HtmlPart?: {} | undefined
                }
                Action: 'CreateTemplate'
                Version: '2010-12-01'
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
            output: CreateTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Template: {
                  TemplateName: {}
                  SubjectPart?: {} | undefined
                  TextPart?: {} | undefined
                  HtmlPart?: {} | undefined
                }
                Action: 'CreateTemplate'
                Version: '2010-12-01'
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
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Template: {
                  TemplateName: {}
                  SubjectPart?: {} | undefined
                  TextPart?: {} | undefined
                  HtmlPart?: {} | undefined
                }
                Action: 'CreateTemplate'
                Version: '2010-12-01'
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
            output: InvalidTemplateException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Template: {
                  TemplateName: {}
                  SubjectPart?: {} | undefined
                  TextPart?: {} | undefined
                  HtmlPart?: {} | undefined
                }
                Action: 'CreateTemplate'
                Version: '2010-12-01'
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CreateTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTemplateRequest }
            output: CreateTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTemplateRequest }
            output: AlreadyExistsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTemplateRequest }
            output: InvalidTemplateException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTemplateRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DeleteConfigurationSet': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Action: 'DeleteConfigurationSet'
                Version: '2010-12-01'
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
            output: DeleteConfigurationSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Action: 'DeleteConfigurationSet'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DeleteConfigurationSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigurationSetRequest }
            output: DeleteConfigurationSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteConfigurationSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigurationSetRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DeleteConfigurationSetEventDestination': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestinationName: string
                Action: 'DeleteConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: DeleteConfigurationSetEventDestinationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestinationName: string
                Action: 'DeleteConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestinationName: string
                Action: 'DeleteConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: EventDestinationDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'DeleteConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: DeleteConfigurationSetEventDestinationRequest }
            output: DeleteConfigurationSetEventDestinationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DeleteConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: DeleteConfigurationSetEventDestinationRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'DeleteConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: DeleteConfigurationSetEventDestinationRequest }
            output: EventDestinationDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteConfigurationSetTrackingOptions': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Action: 'DeleteConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: DeleteConfigurationSetTrackingOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Action: 'DeleteConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Action: 'DeleteConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: TrackingOptionsDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'DeleteConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: DeleteConfigurationSetTrackingOptionsRequest }
            output: DeleteConfigurationSetTrackingOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DeleteConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: DeleteConfigurationSetTrackingOptionsRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'DeleteConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: DeleteConfigurationSetTrackingOptionsRequest }
            output: TrackingOptionsDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteCustomVerificationEmailTemplate': {
      $get: {
        input: {
          query: {
            TemplateName: string
            Action: 'DeleteCustomVerificationEmailTemplate'
            Version: '2010-12-01'
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
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'DeleteCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
        } & { json: DeleteCustomVerificationEmailTemplateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteIdentity': {
      $get: {
        input: { query: { Identity: string; Action: 'DeleteIdentity'; Version: '2010-12-01' } } & {
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
        output: DeleteIdentityResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteIdentity'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteIdentityRequest }
        output: DeleteIdentityResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteIdentityPolicy': {
      $get: {
        input: {
          query: {
            Identity: string
            PolicyName: string
            Action: 'DeleteIdentityPolicy'
            Version: '2010-12-01'
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
        output: DeleteIdentityPolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteIdentityPolicy'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteIdentityPolicyRequest }
        output: DeleteIdentityPolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteReceiptFilter': {
      $get: {
        input: {
          query: { FilterName: string; Action: 'DeleteReceiptFilter'; Version: '2010-12-01' }
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
        output: DeleteReceiptFilterResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteReceiptFilter'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteReceiptFilterRequest }
        output: DeleteReceiptFilterResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteReceiptRule': {
      $get:
        | {
            input: {
              query: {
                RuleSetName: string
                RuleName: string
                Action: 'DeleteReceiptRule'
                Version: '2010-12-01'
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
            output: DeleteReceiptRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName: string
                RuleName: string
                Action: 'DeleteReceiptRule'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DeleteReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReceiptRuleRequest }
            output: DeleteReceiptRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReceiptRuleRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DeleteReceiptRuleSet': {
      $get:
        | {
            input: {
              query: { RuleSetName: string; Action: 'DeleteReceiptRuleSet'; Version: '2010-12-01' }
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
            output: DeleteReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { RuleSetName: string; Action: 'DeleteReceiptRuleSet'; Version: '2010-12-01' }
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
            output: CannotDeleteException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DeleteReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReceiptRuleSetRequest }
            output: DeleteReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReceiptRuleSetRequest }
            output: CannotDeleteException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DeleteTemplate': {
      $get: {
        input: {
          query: { TemplateName: string; Action: 'DeleteTemplate'; Version: '2010-12-01' }
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
        output: DeleteTemplateResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteTemplate'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTemplateRequest }
        output: DeleteTemplateResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteVerifiedEmailAddress': {
      $get: {
        input: {
          query: {
            EmailAddress: string
            Action: 'DeleteVerifiedEmailAddress'
            Version: '2010-12-01'
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
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteVerifiedEmailAddress'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteVerifiedEmailAddressRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DescribeActiveReceiptRuleSet': {
      $get: {
        input: { query: { Action: 'DescribeActiveReceiptRuleSet'; Version: '2010-12-01' } } & {
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
        output: DescribeActiveReceiptRuleSetResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeActiveReceiptRuleSet'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeActiveReceiptRuleSetRequest }
        output: DescribeActiveReceiptRuleSetResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeConfigurationSet': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                ConfigurationSetAttributeNames?: ConfigurationSetAttribute[] | undefined
                Action: 'DescribeConfigurationSet'
                Version: '2010-12-01'
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
            output: DescribeConfigurationSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                ConfigurationSetAttributeNames?: ConfigurationSetAttribute[] | undefined
                Action: 'DescribeConfigurationSet'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeConfigurationSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationSetRequest }
            output: DescribeConfigurationSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeConfigurationSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationSetRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeReceiptRule': {
      $get:
        | {
            input: {
              query: {
                RuleSetName: string
                RuleName: string
                Action: 'DescribeReceiptRule'
                Version: '2010-12-01'
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
            output: DescribeReceiptRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName: string
                RuleName: string
                Action: 'DescribeReceiptRule'
                Version: '2010-12-01'
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
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RuleSetName: string
                RuleName: string
                Action: 'DescribeReceiptRule'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DescribeReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReceiptRuleRequest }
            output: DescribeReceiptRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReceiptRuleRequest }
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReceiptRuleRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeReceiptRuleSet': {
      $get:
        | {
            input: {
              query: {
                RuleSetName: string
                Action: 'DescribeReceiptRuleSet'
                Version: '2010-12-01'
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
            output: DescribeReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName: string
                Action: 'DescribeReceiptRuleSet'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReceiptRuleSetRequest }
            output: DescribeReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReceiptRuleSetRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=GetAccountSendingEnabled': {
      $get: {
        input: { query: { Action: 'GetAccountSendingEnabled'; Version: '2010-12-01' } } & {
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
        output: GetAccountSendingEnabledResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetAccountSendingEnabled'; Version: '2010-12-01' } } & {
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
        output: GetAccountSendingEnabledResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetCustomVerificationEmailTemplate': {
      $get:
        | {
            input: {
              query: {
                TemplateName: string
                Action: 'GetCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: GetCustomVerificationEmailTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TemplateName: string
                Action: 'GetCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: CustomVerificationEmailTemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'GetCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: GetCustomVerificationEmailTemplateRequest }
            output: GetCustomVerificationEmailTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'GetCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: GetCustomVerificationEmailTemplateRequest }
            output: CustomVerificationEmailTemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=GetIdentityDkimAttributes': {
      $get: {
        input: {
          query: {
            Identities: Identity[]
            Action: 'GetIdentityDkimAttributes'
            Version: '2010-12-01'
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
        output: GetIdentityDkimAttributesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetIdentityDkimAttributes'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetIdentityDkimAttributesRequest }
        output: GetIdentityDkimAttributesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetIdentityMailFromDomainAttributes': {
      $get: {
        input: {
          query: {
            Identities: Identity[]
            Action: 'GetIdentityMailFromDomainAttributes'
            Version: '2010-12-01'
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
        output: GetIdentityMailFromDomainAttributesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'GetIdentityMailFromDomainAttributes'; Version: '2010-12-01' }
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
        } & { json: GetIdentityMailFromDomainAttributesRequest }
        output: GetIdentityMailFromDomainAttributesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetIdentityNotificationAttributes': {
      $get: {
        input: {
          query: {
            Identities: Identity[]
            Action: 'GetIdentityNotificationAttributes'
            Version: '2010-12-01'
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
        output: GetIdentityNotificationAttributesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetIdentityNotificationAttributes'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetIdentityNotificationAttributesRequest }
        output: GetIdentityNotificationAttributesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetIdentityPolicies': {
      $get: {
        input: {
          query: {
            Identity: string
            PolicyNames: PolicyName[]
            Action: 'GetIdentityPolicies'
            Version: '2010-12-01'
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
        output: GetIdentityPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetIdentityPolicies'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetIdentityPoliciesRequest }
        output: GetIdentityPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetIdentityVerificationAttributes': {
      $get: {
        input: {
          query: {
            Identities: Identity[]
            Action: 'GetIdentityVerificationAttributes'
            Version: '2010-12-01'
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
        output: GetIdentityVerificationAttributesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetIdentityVerificationAttributes'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetIdentityVerificationAttributesRequest }
        output: GetIdentityVerificationAttributesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetSendQuota': {
      $get: {
        input: { query: { Action: 'GetSendQuota'; Version: '2010-12-01' } } & {
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
        output: GetSendQuotaResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetSendQuota'; Version: '2010-12-01' } } & {
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
        output: GetSendQuotaResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetSendStatistics': {
      $get: {
        input: { query: { Action: 'GetSendStatistics'; Version: '2010-12-01' } } & {
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
        output: GetSendStatisticsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetSendStatistics'; Version: '2010-12-01' } } & {
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
        output: GetSendStatisticsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetTemplate': {
      $get:
        | {
            input: {
              query: { TemplateName: string; Action: 'GetTemplate'; Version: '2010-12-01' }
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
            output: GetTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { TemplateName: string; Action: 'GetTemplate'; Version: '2010-12-01' }
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
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'GetTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTemplateRequest }
            output: GetTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTemplateRequest }
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=ListConfigurationSets': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListConfigurationSets'
            Version: '2010-12-01'
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
        output: ListConfigurationSetsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListConfigurationSets'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListConfigurationSetsRequest }
        output: ListConfigurationSetsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListCustomVerificationEmailTemplates': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Action: 'ListCustomVerificationEmailTemplates'
            Version: '2010-12-01'
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
        output: ListCustomVerificationEmailTemplatesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListCustomVerificationEmailTemplates'
            Version: '2010-12-01'
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
        } & { json: ListCustomVerificationEmailTemplatesRequest }
        output: ListCustomVerificationEmailTemplatesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListIdentities': {
      $get: {
        input: {
          query: {
            IdentityType?: 'EmailAddress' | 'Domain' | undefined
            NextToken?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListIdentities'
            Version: '2010-12-01'
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
        output: ListIdentitiesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            NextToken?: string | undefined
            Action: 'ListIdentities'
            Version: '2010-12-01'
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
        } & { json: ListIdentitiesRequest }
        output: ListIdentitiesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListIdentityPolicies': {
      $get: {
        input: {
          query: { Identity: string; Action: 'ListIdentityPolicies'; Version: '2010-12-01' }
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
        output: ListIdentityPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListIdentityPolicies'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListIdentityPoliciesRequest }
        output: ListIdentityPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListReceiptFilters': {
      $get: {
        input: { query: { Action: 'ListReceiptFilters'; Version: '2010-12-01' } } & {
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
        output: ListReceiptFiltersResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListReceiptFilters'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReceiptFiltersRequest }
        output: ListReceiptFiltersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListReceiptRuleSets': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            Action: 'ListReceiptRuleSets'
            Version: '2010-12-01'
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
        output: ListReceiptRuleSetsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListReceiptRuleSets'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReceiptRuleSetsRequest }
        output: ListReceiptRuleSetsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListTemplates': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListTemplates'
            Version: '2010-12-01'
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
        output: ListTemplatesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListTemplates'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTemplatesRequest }
        output: ListTemplatesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListVerifiedEmailAddresses': {
      $get: {
        input: { query: { Action: 'ListVerifiedEmailAddresses'; Version: '2010-12-01' } } & {
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
        output: ListVerifiedEmailAddressesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListVerifiedEmailAddresses'; Version: '2010-12-01' } } & {
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
        output: ListVerifiedEmailAddressesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutConfigurationSetDeliveryOptions': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                DeliveryOptions?: { TlsPolicy?: {} | undefined } | undefined
                Action: 'PutConfigurationSetDeliveryOptions'
                Version: '2010-12-01'
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
            output: PutConfigurationSetDeliveryOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                DeliveryOptions?: { TlsPolicy?: {} | undefined } | undefined
                Action: 'PutConfigurationSetDeliveryOptions'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                DeliveryOptions?: { TlsPolicy?: {} | undefined } | undefined
                Action: 'PutConfigurationSetDeliveryOptions'
                Version: '2010-12-01'
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
            output: InvalidDeliveryOptionsException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'PutConfigurationSetDeliveryOptions'; Version: '2010-12-01' }
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
            } & { json: PutConfigurationSetDeliveryOptionsRequest }
            output: PutConfigurationSetDeliveryOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'PutConfigurationSetDeliveryOptions'; Version: '2010-12-01' }
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
            } & { json: PutConfigurationSetDeliveryOptionsRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'PutConfigurationSetDeliveryOptions'; Version: '2010-12-01' }
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
            } & { json: PutConfigurationSetDeliveryOptionsRequest }
            output: InvalidDeliveryOptionsException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=PutIdentityPolicy': {
      $get:
        | {
            input: {
              query: {
                Identity: string
                PolicyName: string
                Policy: string
                Action: 'PutIdentityPolicy'
                Version: '2010-12-01'
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
            output: PutIdentityPolicyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Identity: string
                PolicyName: string
                Policy: string
                Action: 'PutIdentityPolicy'
                Version: '2010-12-01'
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
            output: InvalidPolicyException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'PutIdentityPolicy'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutIdentityPolicyRequest }
            output: PutIdentityPolicyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'PutIdentityPolicy'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutIdentityPolicyRequest }
            output: InvalidPolicyException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=ReorderReceiptRuleSet': {
      $get:
        | {
            input: {
              query: {
                RuleSetName: string
                RuleNames: ReceiptRuleName[]
                Action: 'ReorderReceiptRuleSet'
                Version: '2010-12-01'
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
            output: ReorderReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName: string
                RuleNames: ReceiptRuleName[]
                Action: 'ReorderReceiptRuleSet'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RuleSetName: string
                RuleNames: ReceiptRuleName[]
                Action: 'ReorderReceiptRuleSet'
                Version: '2010-12-01'
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
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ReorderReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ReorderReceiptRuleSetRequest }
            output: ReorderReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ReorderReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ReorderReceiptRuleSetRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ReorderReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ReorderReceiptRuleSetRequest }
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=SendBounce': {
      $get:
        | {
            input: {
              query: {
                OriginalMessageId: string
                BounceSender: string
                Explanation?: string | undefined
                MessageDsn?:
                  | {
                      ReportingMta: {}
                      ArrivalDate?: {} | undefined
                      ExtensionFields?: {} | undefined
                    }
                  | undefined
                BouncedRecipientInfoList: BouncedRecipientInfo[]
                BounceSenderArn?: string | undefined
                Action: 'SendBounce'
                Version: '2010-12-01'
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
            output: SendBounceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                OriginalMessageId: string
                BounceSender: string
                Explanation?: string | undefined
                MessageDsn?:
                  | {
                      ReportingMta: {}
                      ArrivalDate?: {} | undefined
                      ExtensionFields?: {} | undefined
                    }
                  | undefined
                BouncedRecipientInfoList: BouncedRecipientInfo[]
                BounceSenderArn?: string | undefined
                Action: 'SendBounce'
                Version: '2010-12-01'
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
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'SendBounce'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBounceRequest }
            output: SendBounceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SendBounce'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBounceRequest }
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=SendBulkTemplatedEmail': {
      $get:
        | {
            input: {
              query: {
                Source: string
                SourceArn?: string | undefined
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                ReturnPathArn?: string | undefined
                ConfigurationSetName?: string | undefined
                DefaultTags?: MessageTag[] | undefined
                Template: string
                TemplateArn?: string | undefined
                DefaultTemplateData?: string | undefined
                Destinations: BulkEmailDestination[]
                Action: 'SendBulkTemplatedEmail'
                Version: '2010-12-01'
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
            output: SendBulkTemplatedEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Source: string
                SourceArn?: string | undefined
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                ReturnPathArn?: string | undefined
                ConfigurationSetName?: string | undefined
                DefaultTags?: MessageTag[] | undefined
                Template: string
                TemplateArn?: string | undefined
                DefaultTemplateData?: string | undefined
                Destinations: BulkEmailDestination[]
                Action: 'SendBulkTemplatedEmail'
                Version: '2010-12-01'
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
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Source: string
                SourceArn?: string | undefined
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                ReturnPathArn?: string | undefined
                ConfigurationSetName?: string | undefined
                DefaultTags?: MessageTag[] | undefined
                Template: string
                TemplateArn?: string | undefined
                DefaultTemplateData?: string | undefined
                Destinations: BulkEmailDestination[]
                Action: 'SendBulkTemplatedEmail'
                Version: '2010-12-01'
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
            output: MailFromDomainNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Source: string
                SourceArn?: string | undefined
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                ReturnPathArn?: string | undefined
                ConfigurationSetName?: string | undefined
                DefaultTags?: MessageTag[] | undefined
                Template: string
                TemplateArn?: string | undefined
                DefaultTemplateData?: string | undefined
                Destinations: BulkEmailDestination[]
                Action: 'SendBulkTemplatedEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Source: string
                SourceArn?: string | undefined
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                ReturnPathArn?: string | undefined
                ConfigurationSetName?: string | undefined
                DefaultTags?: MessageTag[] | undefined
                Template: string
                TemplateArn?: string | undefined
                DefaultTemplateData?: string | undefined
                Destinations: BulkEmailDestination[]
                Action: 'SendBulkTemplatedEmail'
                Version: '2010-12-01'
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
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Source: string
                SourceArn?: string | undefined
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                ReturnPathArn?: string | undefined
                ConfigurationSetName?: string | undefined
                DefaultTags?: MessageTag[] | undefined
                Template: string
                TemplateArn?: string | undefined
                DefaultTemplateData?: string | undefined
                Destinations: BulkEmailDestination[]
                Action: 'SendBulkTemplatedEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetSendingPausedException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                Source: string
                SourceArn?: string | undefined
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                ReturnPathArn?: string | undefined
                ConfigurationSetName?: string | undefined
                DefaultTags?: MessageTag[] | undefined
                Template: string
                TemplateArn?: string | undefined
                DefaultTemplateData?: string | undefined
                Destinations: BulkEmailDestination[]
                Action: 'SendBulkTemplatedEmail'
                Version: '2010-12-01'
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
            output: AccountSendingPausedException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'SendBulkTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBulkTemplatedEmailRequest }
            output: SendBulkTemplatedEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SendBulkTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBulkTemplatedEmailRequest }
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SendBulkTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBulkTemplatedEmailRequest }
            output: MailFromDomainNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SendBulkTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBulkTemplatedEmailRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SendBulkTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBulkTemplatedEmailRequest }
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'SendBulkTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBulkTemplatedEmailRequest }
            output: ConfigurationSetSendingPausedException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'SendBulkTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendBulkTemplatedEmailRequest }
            output: AccountSendingPausedException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=SendCustomVerificationEmail': {
      $get:
        | {
            input: {
              query: {
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
                Action: 'SendCustomVerificationEmail'
                Version: '2010-12-01'
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
            output: SendCustomVerificationEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
                Action: 'SendCustomVerificationEmail'
                Version: '2010-12-01'
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
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
                Action: 'SendCustomVerificationEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
                Action: 'SendCustomVerificationEmail'
                Version: '2010-12-01'
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
            output: CustomVerificationEmailTemplateDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
                Action: 'SendCustomVerificationEmail'
                Version: '2010-12-01'
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
            output: FromEmailAddressNotVerifiedException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                EmailAddress: string
                TemplateName: string
                ConfigurationSetName?: string | undefined
                Action: 'SendCustomVerificationEmail'
                Version: '2010-12-01'
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
            output: ProductionAccessNotGrantedException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'SendCustomVerificationEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCustomVerificationEmailRequest }
            output: SendCustomVerificationEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SendCustomVerificationEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCustomVerificationEmailRequest }
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SendCustomVerificationEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCustomVerificationEmailRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SendCustomVerificationEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCustomVerificationEmailRequest }
            output: CustomVerificationEmailTemplateDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SendCustomVerificationEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCustomVerificationEmailRequest }
            output: FromEmailAddressNotVerifiedException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'SendCustomVerificationEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCustomVerificationEmailRequest }
            output: ProductionAccessNotGrantedException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=SendEmail': {
      $get:
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                Message: {
                  Subject: { Data: {}; Charset?: {} | undefined }
                  Body: {
                    Text?: { Data: {}; Charset?: {} | undefined } | undefined
                    Html?: { Data: {}; Charset?: {} | undefined } | undefined
                  }
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendEmail'
                Version: '2010-12-01'
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
            output: SendEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                Message: {
                  Subject: { Data: {}; Charset?: {} | undefined }
                  Body: {
                    Text?: { Data: {}; Charset?: {} | undefined } | undefined
                    Html?: { Data: {}; Charset?: {} | undefined } | undefined
                  }
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendEmail'
                Version: '2010-12-01'
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
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                Message: {
                  Subject: { Data: {}; Charset?: {} | undefined }
                  Body: {
                    Text?: { Data: {}; Charset?: {} | undefined } | undefined
                    Html?: { Data: {}; Charset?: {} | undefined } | undefined
                  }
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendEmail'
                Version: '2010-12-01'
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
            output: MailFromDomainNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                Message: {
                  Subject: { Data: {}; Charset?: {} | undefined }
                  Body: {
                    Text?: { Data: {}; Charset?: {} | undefined } | undefined
                    Html?: { Data: {}; Charset?: {} | undefined } | undefined
                  }
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                Message: {
                  Subject: { Data: {}; Charset?: {} | undefined }
                  Body: {
                    Text?: { Data: {}; Charset?: {} | undefined } | undefined
                    Html?: { Data: {}; Charset?: {} | undefined } | undefined
                  }
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetSendingPausedException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                Message: {
                  Subject: { Data: {}; Charset?: {} | undefined }
                  Body: {
                    Text?: { Data: {}; Charset?: {} | undefined } | undefined
                    Html?: { Data: {}; Charset?: {} | undefined } | undefined
                  }
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendEmail'
                Version: '2010-12-01'
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
            output: AccountSendingPausedException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'SendEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendEmailRequest }
            output: SendEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SendEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendEmailRequest }
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SendEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendEmailRequest }
            output: MailFromDomainNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SendEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendEmailRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SendEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendEmailRequest }
            output: ConfigurationSetSendingPausedException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'SendEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendEmailRequest }
            output: AccountSendingPausedException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=SendRawEmail': {
      $get:
        | {
            input: {
              query: {
                Source?: string | undefined
                Destinations?: Address[] | undefined
                RawMessage: { Data: {} }
                FromArn?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendRawEmail'
                Version: '2010-12-01'
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
            output: SendRawEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Source?: string | undefined
                Destinations?: Address[] | undefined
                RawMessage: { Data: {} }
                FromArn?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendRawEmail'
                Version: '2010-12-01'
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
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Source?: string | undefined
                Destinations?: Address[] | undefined
                RawMessage: { Data: {} }
                FromArn?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendRawEmail'
                Version: '2010-12-01'
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
            output: MailFromDomainNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Source?: string | undefined
                Destinations?: Address[] | undefined
                RawMessage: { Data: {} }
                FromArn?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendRawEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Source?: string | undefined
                Destinations?: Address[] | undefined
                RawMessage: { Data: {} }
                FromArn?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendRawEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetSendingPausedException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Source?: string | undefined
                Destinations?: Address[] | undefined
                RawMessage: { Data: {} }
                FromArn?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Action: 'SendRawEmail'
                Version: '2010-12-01'
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
            output: AccountSendingPausedException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'SendRawEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendRawEmailRequest }
            output: SendRawEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SendRawEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendRawEmailRequest }
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SendRawEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendRawEmailRequest }
            output: MailFromDomainNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SendRawEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendRawEmailRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SendRawEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendRawEmailRequest }
            output: ConfigurationSetSendingPausedException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'SendRawEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendRawEmailRequest }
            output: AccountSendingPausedException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=SendTemplatedEmail': {
      $get:
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Template: string
                TemplateArn?: string | undefined
                TemplateData: string
                Action: 'SendTemplatedEmail'
                Version: '2010-12-01'
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
            output: SendTemplatedEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Template: string
                TemplateArn?: string | undefined
                TemplateData: string
                Action: 'SendTemplatedEmail'
                Version: '2010-12-01'
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
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Template: string
                TemplateArn?: string | undefined
                TemplateData: string
                Action: 'SendTemplatedEmail'
                Version: '2010-12-01'
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
            output: MailFromDomainNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Template: string
                TemplateArn?: string | undefined
                TemplateData: string
                Action: 'SendTemplatedEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Template: string
                TemplateArn?: string | undefined
                TemplateData: string
                Action: 'SendTemplatedEmail'
                Version: '2010-12-01'
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
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Template: string
                TemplateArn?: string | undefined
                TemplateData: string
                Action: 'SendTemplatedEmail'
                Version: '2010-12-01'
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
            output: ConfigurationSetSendingPausedException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                Source: string
                Destination: {
                  ToAddresses?: {} | undefined
                  CcAddresses?: {} | undefined
                  BccAddresses?: {} | undefined
                }
                ReplyToAddresses?: Address[] | undefined
                ReturnPath?: string | undefined
                SourceArn?: string | undefined
                ReturnPathArn?: string | undefined
                Tags?: MessageTag[] | undefined
                ConfigurationSetName?: string | undefined
                Template: string
                TemplateArn?: string | undefined
                TemplateData: string
                Action: 'SendTemplatedEmail'
                Version: '2010-12-01'
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
            output: AccountSendingPausedException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'SendTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTemplatedEmailRequest }
            output: SendTemplatedEmailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SendTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTemplatedEmailRequest }
            output: MessageRejected
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SendTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTemplatedEmailRequest }
            output: MailFromDomainNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SendTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTemplatedEmailRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SendTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTemplatedEmailRequest }
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'SendTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTemplatedEmailRequest }
            output: ConfigurationSetSendingPausedException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'SendTemplatedEmail'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTemplatedEmailRequest }
            output: AccountSendingPausedException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=SetActiveReceiptRuleSet': {
      $get:
        | {
            input: {
              query: {
                RuleSetName?: string | undefined
                Action: 'SetActiveReceiptRuleSet'
                Version: '2010-12-01'
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
            output: SetActiveReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName?: string | undefined
                Action: 'SetActiveReceiptRuleSet'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'SetActiveReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetActiveReceiptRuleSetRequest }
            output: SetActiveReceiptRuleSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SetActiveReceiptRuleSet'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetActiveReceiptRuleSetRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=SetIdentityDkimEnabled': {
      $get: {
        input: {
          query: {
            Identity: string
            DkimEnabled: boolean
            Action: 'SetIdentityDkimEnabled'
            Version: '2010-12-01'
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
        output: SetIdentityDkimEnabledResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'SetIdentityDkimEnabled'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetIdentityDkimEnabledRequest }
        output: SetIdentityDkimEnabledResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetIdentityFeedbackForwardingEnabled': {
      $get: {
        input: {
          query: {
            Identity: string
            ForwardingEnabled: boolean
            Action: 'SetIdentityFeedbackForwardingEnabled'
            Version: '2010-12-01'
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
        output: SetIdentityFeedbackForwardingEnabledResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'SetIdentityFeedbackForwardingEnabled'; Version: '2010-12-01' }
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
        } & { json: SetIdentityFeedbackForwardingEnabledRequest }
        output: SetIdentityFeedbackForwardingEnabledResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetIdentityHeadersInNotificationsEnabled': {
      $get: {
        input: {
          query: {
            Identity: string
            NotificationType: 'Bounce' | 'Complaint' | 'Delivery'
            Enabled: boolean
            Action: 'SetIdentityHeadersInNotificationsEnabled'
            Version: '2010-12-01'
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
        output: SetIdentityHeadersInNotificationsEnabledResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'SetIdentityHeadersInNotificationsEnabled'; Version: '2010-12-01' }
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
        } & { json: SetIdentityHeadersInNotificationsEnabledRequest }
        output: SetIdentityHeadersInNotificationsEnabledResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetIdentityMailFromDomain': {
      $get: {
        input: {
          query: {
            Identity: string
            MailFromDomain?: string | undefined
            BehaviorOnMXFailure?: 'UseDefaultValue' | 'RejectMessage' | undefined
            Action: 'SetIdentityMailFromDomain'
            Version: '2010-12-01'
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
        output: SetIdentityMailFromDomainResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'SetIdentityMailFromDomain'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetIdentityMailFromDomainRequest }
        output: SetIdentityMailFromDomainResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetIdentityNotificationTopic': {
      $get: {
        input: {
          query: {
            Identity: string
            NotificationType: 'Bounce' | 'Complaint' | 'Delivery'
            SnsTopic?: string | undefined
            Action: 'SetIdentityNotificationTopic'
            Version: '2010-12-01'
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
        output: SetIdentityNotificationTopicResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'SetIdentityNotificationTopic'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetIdentityNotificationTopicRequest }
        output: SetIdentityNotificationTopicResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetReceiptRulePosition': {
      $get:
        | {
            input: {
              query: {
                RuleSetName: string
                RuleName: string
                After?: string | undefined
                Action: 'SetReceiptRulePosition'
                Version: '2010-12-01'
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
            output: SetReceiptRulePositionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName: string
                RuleName: string
                After?: string | undefined
                Action: 'SetReceiptRulePosition'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RuleSetName: string
                RuleName: string
                After?: string | undefined
                Action: 'SetReceiptRulePosition'
                Version: '2010-12-01'
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
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'SetReceiptRulePosition'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetReceiptRulePositionRequest }
            output: SetReceiptRulePositionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SetReceiptRulePosition'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetReceiptRulePositionRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetReceiptRulePosition'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetReceiptRulePositionRequest }
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=TestRenderTemplate': {
      $get:
        | {
            input: {
              query: {
                TemplateName: string
                TemplateData: string
                Action: 'TestRenderTemplate'
                Version: '2010-12-01'
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
            output: TestRenderTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TemplateName: string
                TemplateData: string
                Action: 'TestRenderTemplate'
                Version: '2010-12-01'
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
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TemplateName: string
                TemplateData: string
                Action: 'TestRenderTemplate'
                Version: '2010-12-01'
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
            output: InvalidRenderingParameterException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TemplateName: string
                TemplateData: string
                Action: 'TestRenderTemplate'
                Version: '2010-12-01'
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
            output: MissingRenderingAttributeException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'TestRenderTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestRenderTemplateRequest }
            output: TestRenderTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'TestRenderTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestRenderTemplateRequest }
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'TestRenderTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestRenderTemplateRequest }
            output: InvalidRenderingParameterException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'TestRenderTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestRenderTemplateRequest }
            output: MissingRenderingAttributeException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=UpdateAccountSendingEnabled': {
      $get: {
        input: {
          query: {
            Enabled?: boolean | undefined
            Action: 'UpdateAccountSendingEnabled'
            Version: '2010-12-01'
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
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateAccountSendingEnabled'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAccountSendingEnabledRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateConfigurationSetEventDestination': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'UpdateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: UpdateConfigurationSetEventDestinationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'UpdateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'UpdateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: EventDestinationDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'UpdateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: InvalidCloudWatchDestinationException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'UpdateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: InvalidFirehoseDestinationException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                EventDestination: {
                  Name: {}
                  Enabled?: {} | undefined
                  MatchingEventTypes: {}
                  KinesisFirehoseDestination?: { IAMRoleARN: {}; DeliveryStreamARN: {} } | undefined
                  CloudWatchDestination?: { DimensionConfigurations: {} } | undefined
                  SNSDestination?: { TopicARN: {} } | undefined
                }
                Action: 'UpdateConfigurationSetEventDestination'
                Version: '2010-12-01'
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
            output: InvalidSNSDestinationException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetEventDestinationRequest }
            output: UpdateConfigurationSetEventDestinationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetEventDestinationRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetEventDestinationRequest }
            output: EventDestinationDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetEventDestinationRequest }
            output: InvalidCloudWatchDestinationException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetEventDestinationRequest }
            output: InvalidFirehoseDestinationException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetEventDestination'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetEventDestinationRequest }
            output: InvalidSNSDestinationException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=UpdateConfigurationSetReputationMetricsEnabled': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Enabled: boolean
                Action: 'UpdateConfigurationSetReputationMetricsEnabled'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Enabled: boolean
                Action: 'UpdateConfigurationSetReputationMetricsEnabled'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                Action: 'UpdateConfigurationSetReputationMetricsEnabled'
                Version: '2010-12-01'
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
            } & { json: UpdateConfigurationSetReputationMetricsEnabledRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                Action: 'UpdateConfigurationSetReputationMetricsEnabled'
                Version: '2010-12-01'
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
            } & { json: UpdateConfigurationSetReputationMetricsEnabledRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=UpdateConfigurationSetSendingEnabled': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Enabled: boolean
                Action: 'UpdateConfigurationSetSendingEnabled'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                Enabled: boolean
                Action: 'UpdateConfigurationSetSendingEnabled'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetSendingEnabled'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetSendingEnabledRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetSendingEnabled'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetSendingEnabledRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=UpdateConfigurationSetTrackingOptions': {
      $get:
        | {
            input: {
              query: {
                ConfigurationSetName: string
                TrackingOptions: { CustomRedirectDomain?: {} | undefined }
                Action: 'UpdateConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: UpdateConfigurationSetTrackingOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                TrackingOptions: { CustomRedirectDomain?: {} | undefined }
                Action: 'UpdateConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                TrackingOptions: { CustomRedirectDomain?: {} | undefined }
                Action: 'UpdateConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: TrackingOptionsDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ConfigurationSetName: string
                TrackingOptions: { CustomRedirectDomain?: {} | undefined }
                Action: 'UpdateConfigurationSetTrackingOptions'
                Version: '2010-12-01'
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
            output: InvalidTrackingOptionsException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetTrackingOptionsRequest }
            output: UpdateConfigurationSetTrackingOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetTrackingOptionsRequest }
            output: ConfigurationSetDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetTrackingOptionsRequest }
            output: TrackingOptionsDoesNotExistException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'UpdateConfigurationSetTrackingOptions'; Version: '2010-12-01' }
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
            } & { json: UpdateConfigurationSetTrackingOptionsRequest }
            output: InvalidTrackingOptionsException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=UpdateCustomVerificationEmailTemplate': {
      $get:
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress?: string | undefined
                TemplateSubject?: string | undefined
                TemplateContent?: string | undefined
                SuccessRedirectionURL?: string | undefined
                FailureRedirectionURL?: string | undefined
                Action: 'UpdateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress?: string | undefined
                TemplateSubject?: string | undefined
                TemplateContent?: string | undefined
                SuccessRedirectionURL?: string | undefined
                FailureRedirectionURL?: string | undefined
                Action: 'UpdateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: CustomVerificationEmailTemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress?: string | undefined
                TemplateSubject?: string | undefined
                TemplateContent?: string | undefined
                SuccessRedirectionURL?: string | undefined
                FailureRedirectionURL?: string | undefined
                Action: 'UpdateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: FromEmailAddressNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TemplateName: string
                FromEmailAddress?: string | undefined
                TemplateSubject?: string | undefined
                TemplateContent?: string | undefined
                SuccessRedirectionURL?: string | undefined
                FailureRedirectionURL?: string | undefined
                Action: 'UpdateCustomVerificationEmailTemplate'
                Version: '2010-12-01'
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
            output: CustomVerificationEmailInvalidContentException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: { Action: 'UpdateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: UpdateCustomVerificationEmailTemplateRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { Action: 'UpdateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: UpdateCustomVerificationEmailTemplateRequest }
            output: CustomVerificationEmailTemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'UpdateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: UpdateCustomVerificationEmailTemplateRequest }
            output: FromEmailAddressNotVerifiedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'UpdateCustomVerificationEmailTemplate'; Version: '2010-12-01' }
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
            } & { json: UpdateCustomVerificationEmailTemplateRequest }
            output: CustomVerificationEmailInvalidContentException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=UpdateReceiptRule': {
      $get:
        | {
            input: {
              query: {
                RuleSetName: string
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'UpdateReceiptRule'
                Version: '2010-12-01'
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
            output: UpdateReceiptRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleSetName: string
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'UpdateReceiptRule'
                Version: '2010-12-01'
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
            output: InvalidSnsTopicException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RuleSetName: string
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'UpdateReceiptRule'
                Version: '2010-12-01'
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
            output: InvalidS3ConfigurationException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                RuleSetName: string
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'UpdateReceiptRule'
                Version: '2010-12-01'
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
            output: InvalidLambdaFunctionException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                RuleSetName: string
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'UpdateReceiptRule'
                Version: '2010-12-01'
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
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                RuleSetName: string
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'UpdateReceiptRule'
                Version: '2010-12-01'
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
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                RuleSetName: string
                Rule: {
                  Name: {}
                  Enabled?: {} | undefined
                  TlsPolicy?: {} | undefined
                  Recipients?: {} | undefined
                  Actions?: {} | undefined
                  ScanEnabled?: {} | undefined
                }
                Action: 'UpdateReceiptRule'
                Version: '2010-12-01'
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
            output: LimitExceededException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'UpdateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateReceiptRuleRequest }
            output: UpdateReceiptRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateReceiptRuleRequest }
            output: InvalidSnsTopicException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateReceiptRuleRequest }
            output: InvalidS3ConfigurationException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'UpdateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateReceiptRuleRequest }
            output: InvalidLambdaFunctionException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'UpdateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateReceiptRuleRequest }
            output: RuleSetDoesNotExistException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'UpdateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateReceiptRuleRequest }
            output: RuleDoesNotExistException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'UpdateReceiptRule'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateReceiptRuleRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=UpdateTemplate': {
      $get:
        | {
            input: {
              query: {
                Template: {
                  TemplateName: {}
                  SubjectPart?: {} | undefined
                  TextPart?: {} | undefined
                  HtmlPart?: {} | undefined
                }
                Action: 'UpdateTemplate'
                Version: '2010-12-01'
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
            output: UpdateTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Template: {
                  TemplateName: {}
                  SubjectPart?: {} | undefined
                  TextPart?: {} | undefined
                  HtmlPart?: {} | undefined
                }
                Action: 'UpdateTemplate'
                Version: '2010-12-01'
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
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Template: {
                  TemplateName: {}
                  SubjectPart?: {} | undefined
                  TextPart?: {} | undefined
                  HtmlPart?: {} | undefined
                }
                Action: 'UpdateTemplate'
                Version: '2010-12-01'
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
            output: InvalidTemplateException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'UpdateTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTemplateRequest }
            output: UpdateTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTemplateRequest }
            output: TemplateDoesNotExistException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTemplateRequest }
            output: InvalidTemplateException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=VerifyDomainDkim': {
      $get: {
        input: { query: { Domain: string; Action: 'VerifyDomainDkim'; Version: '2010-12-01' } } & {
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
        output: VerifyDomainDkimResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'VerifyDomainDkim'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifyDomainDkimRequest }
        output: VerifyDomainDkimResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=VerifyDomainIdentity': {
      $get: {
        input: {
          query: { Domain: string; Action: 'VerifyDomainIdentity'; Version: '2010-12-01' }
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
        output: VerifyDomainIdentityResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'VerifyDomainIdentity'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifyDomainIdentityRequest }
        output: VerifyDomainIdentityResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=VerifyEmailAddress': {
      $get: {
        input: {
          query: { EmailAddress: string; Action: 'VerifyEmailAddress'; Version: '2010-12-01' }
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
      $post: {
        input: { query: { Action: 'VerifyEmailAddress'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifyEmailAddressRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=VerifyEmailIdentity': {
      $get: {
        input: {
          query: { EmailAddress: string; Action: 'VerifyEmailIdentity'; Version: '2010-12-01' }
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
        output: VerifyEmailIdentityResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'VerifyEmailIdentity'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifyEmailIdentityRequest }
        output: VerifyEmailIdentityResponse
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
