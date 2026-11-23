type Delegate = string
type Action = string
type InvalidParameterException = { [x: string]: unknown }
type InternalErrorException = { [x: string]: unknown }
type AuthorizationErrorException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type AddPermissionInput = { TopicArn: {}; Label: {}; AWSAccountId: {}; ActionName: {} }
type CheckIfPhoneNumberIsOptedOutResponse = { isOptedOut?: {} | undefined }
type ThrottledException = { [x: string]: unknown }
type CheckIfPhoneNumberIsOptedOutInput = { phoneNumber: {} }
type ConfirmSubscriptionResponse = { SubscriptionArn?: {} | undefined }
type SubscriptionLimitExceededException = { [x: string]: unknown }
type FilterPolicyLimitExceededException = { [x: string]: unknown }
type ConfirmSubscriptionInput = {
  TopicArn: {}
  Token: {}
  AuthenticateOnUnsubscribe?: {} | undefined
}
type String = string
type CreatePlatformApplicationResponse = { PlatformApplicationArn?: {} | undefined }
type CreatePlatformApplicationInput = { Name: {}; Platform: {}; Attributes: {} }
type CreateEndpointResponse = { EndpointArn?: {} | undefined }
type CreatePlatformEndpointInput = {
  PlatformApplicationArn: {}
  Token: {}
  CustomUserData?: {} | undefined
  Attributes?: {} | undefined
}
type CreateSMSSandboxPhoneNumberResult = { [x: string]: unknown }
type OptedOutException = { [x: string]: unknown }
type UserErrorException = { [x: string]: unknown }
type CreateSMSSandboxPhoneNumberInput = { PhoneNumber: {}; LanguageCode?: {} | undefined }
type AttributeValue = string
type Tag = { Key: {}; Value: {} }
type CreateTopicResponse = { TopicArn?: {} | undefined }
type TopicLimitExceededException = { [x: string]: unknown }
type InvalidSecurityException = { [x: string]: unknown }
type TagLimitExceededException = { [x: string]: unknown }
type StaleTagException = { [x: string]: unknown }
type TagPolicyException = { [x: string]: unknown }
type ConcurrentAccessException = { [x: string]: unknown }
type CreateTopicInput = {
  Name: {}
  Attributes?: {} | undefined
  Tags?: {} | undefined
  DataProtectionPolicy?: {} | undefined
}
type DeleteEndpointInput = { EndpointArn: {} }
type DeletePlatformApplicationInput = { PlatformApplicationArn: {} }
type DeleteSMSSandboxPhoneNumberResult = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type DeleteSMSSandboxPhoneNumberInput = { PhoneNumber: {} }
type DeleteTopicInput = { TopicArn: {} }
type GetDataProtectionPolicyResponse = { DataProtectionPolicy?: {} | undefined }
type GetDataProtectionPolicyInput = { ResourceArn: {} }
type GetEndpointAttributesResponse = { Attributes?: {} | undefined }
type GetEndpointAttributesInput = { EndpointArn: {} }
type GetPlatformApplicationAttributesResponse = { Attributes?: {} | undefined }
type GetPlatformApplicationAttributesInput = { PlatformApplicationArn: {} }
type GetSMSAttributesResponse = { attributes?: {} | undefined }
type GetSMSAttributesInput = { attributes?: {} | undefined }
type GetSMSSandboxAccountStatusResult = { IsInSandbox: {} }
type GetSMSSandboxAccountStatusInput = { [x: string]: unknown }
type GetSubscriptionAttributesResponse = { Attributes?: {} | undefined }
type GetSubscriptionAttributesInput = { SubscriptionArn: {} }
type GetTopicAttributesResponse = { Attributes?: {} | undefined }
type GetTopicAttributesInput = { TopicArn: {} }
type ListEndpointsByPlatformApplicationResponse = {
  Endpoints?: {} | undefined
  NextToken?: {} | undefined
}
type ListEndpointsByPlatformApplicationInput = {
  PlatformApplicationArn: {}
  NextToken?: {} | undefined
}
type ListOriginationNumbersResult = { NextToken?: {} | undefined; PhoneNumbers?: {} | undefined }
type ValidationException = { [x: string]: unknown }
type ListOriginationNumbersRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListPhoneNumbersOptedOutResponse = {
  phoneNumbers?: {} | undefined
  nextToken?: {} | undefined
}
type ListPhoneNumbersOptedOutInput = { nextToken?: {} | undefined }
type ListPlatformApplicationsResponse = {
  PlatformApplications?: {} | undefined
  NextToken?: {} | undefined
}
type ListPlatformApplicationsInput = { NextToken?: {} | undefined }
type ListSMSSandboxPhoneNumbersResult = { PhoneNumbers: {}; NextToken?: {} | undefined }
type ListSMSSandboxPhoneNumbersInput = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListSubscriptionsResponse = { Subscriptions?: {} | undefined; NextToken?: {} | undefined }
type ListSubscriptionsInput = { NextToken?: {} | undefined }
type ListSubscriptionsByTopicResponse = {
  Subscriptions?: {} | undefined
  NextToken?: {} | undefined
}
type ListSubscriptionsByTopicInput = { TopicArn: {}; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTopicsResponse = { Topics?: {} | undefined; NextToken?: {} | undefined }
type ListTopicsInput = { NextToken?: {} | undefined }
type OptInPhoneNumberResponse = { [x: string]: unknown }
type OptInPhoneNumberInput = { phoneNumber: {} }
type MessageAttributeValue = {
  DataType: {}
  StringValue?: {} | undefined
  BinaryValue?: {} | undefined
}
type PublishResponse = { MessageId?: {} | undefined; SequenceNumber?: {} | undefined }
type InvalidParameterValueException = { [x: string]: unknown }
type EndpointDisabledException = { [x: string]: unknown }
type PlatformApplicationDisabledException = { [x: string]: unknown }
type KMSDisabledException = { [x: string]: unknown }
type KMSInvalidStateException = { [x: string]: unknown }
type KMSNotFoundException = { [x: string]: unknown }
type KMSOptInRequired = { [x: string]: unknown }
type KMSThrottlingException = { [x: string]: unknown }
type KMSAccessDeniedException = { [x: string]: unknown }
type PublishInput = {
  TopicArn?: {} | undefined
  TargetArn?: {} | undefined
  PhoneNumber?: {} | undefined
  Message: {}
  Subject?: {} | undefined
  MessageStructure?: {} | undefined
  MessageAttributes?: {} | undefined
  MessageDeduplicationId?: {} | undefined
  MessageGroupId?: {} | undefined
}
type PublishBatchRequestEntry = {
  Id: {}
  Message: {}
  Subject?: {} | undefined
  MessageStructure?: {} | undefined
  MessageAttributes?: {} | undefined
  MessageDeduplicationId?: {} | undefined
  MessageGroupId?: {} | undefined
}
type PublishBatchResponse = { Successful?: {} | undefined; Failed?: {} | undefined }
type BatchEntryIdsNotDistinctException = { [x: string]: unknown }
type BatchRequestTooLongException = { [x: string]: unknown }
type EmptyBatchRequestException = { [x: string]: unknown }
type InvalidBatchEntryIdException = { [x: string]: unknown }
type TooManyEntriesInBatchRequestException = { [x: string]: unknown }
type PublishBatchInput = { TopicArn: {}; PublishBatchRequestEntries: {} }
type PutDataProtectionPolicyInput = { ResourceArn: {}; DataProtectionPolicy: {} }
type RemovePermissionInput = { TopicArn: {}; Label: {} }
type SetEndpointAttributesInput = { EndpointArn: {}; Attributes: {} }
type SetPlatformApplicationAttributesInput = { PlatformApplicationArn: {}; Attributes: {} }
type SetSMSAttributesResponse = { [x: string]: unknown }
type SetSMSAttributesInput = { attributes: {} }
type SetSubscriptionAttributesInput = {
  SubscriptionArn: {}
  AttributeName: {}
  AttributeValue?: {} | undefined
}
type SetTopicAttributesInput = { TopicArn: {}; AttributeName: {}; AttributeValue?: {} | undefined }
type SubscribeResponse = { SubscriptionArn?: {} | undefined }
type SubscribeInput = {
  TopicArn: {}
  Protocol: {}
  Endpoint?: {} | undefined
  Attributes?: {} | undefined
  ReturnSubscriptionArn?: {} | undefined
}
type TagResourceResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type UnsubscribeInput = { SubscriptionArn: {} }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type VerifySMSSandboxPhoneNumberResult = { [x: string]: unknown }
type VerificationException = { [x: string]: unknown }
type VerifySMSSandboxPhoneNumberInput = { PhoneNumber: {}; OneTimePassword: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AddPermission': {
      $get:
        | {
            input: {
              query: {
                TopicArn: string
                Label: string
                AWSAccountId: Delegate[]
                ActionName: Action[]
                Action: 'AddPermission'
                Version: '2010-03-31'
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
                TopicArn: string
                Label: string
                AWSAccountId: Delegate[]
                ActionName: Action[]
                Action: 'AddPermission'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TopicArn: string
                Label: string
                AWSAccountId: Delegate[]
                ActionName: Action[]
                Action: 'AddPermission'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TopicArn: string
                Label: string
                AWSAccountId: Delegate[]
                ActionName: Action[]
                Action: 'AddPermission'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TopicArn: string
                Label: string
                AWSAccountId: Delegate[]
                ActionName: Action[]
                Action: 'AddPermission'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'AddPermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddPermissionInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'AddPermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddPermissionInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AddPermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddPermissionInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AddPermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddPermissionInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'AddPermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddPermissionInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=CheckIfPhoneNumberIsOptedOut': {
      $get:
        | {
            input: {
              query: {
                phoneNumber: string
                Action: 'CheckIfPhoneNumberIsOptedOut'
                Version: '2010-03-31'
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
            output: CheckIfPhoneNumberIsOptedOutResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                phoneNumber: string
                Action: 'CheckIfPhoneNumberIsOptedOut'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                phoneNumber: string
                Action: 'CheckIfPhoneNumberIsOptedOut'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                phoneNumber: string
                Action: 'CheckIfPhoneNumberIsOptedOut'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                phoneNumber: string
                Action: 'CheckIfPhoneNumberIsOptedOut'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'CheckIfPhoneNumberIsOptedOut'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckIfPhoneNumberIsOptedOutInput }
            output: CheckIfPhoneNumberIsOptedOutResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CheckIfPhoneNumberIsOptedOut'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckIfPhoneNumberIsOptedOutInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CheckIfPhoneNumberIsOptedOut'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckIfPhoneNumberIsOptedOutInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CheckIfPhoneNumberIsOptedOut'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckIfPhoneNumberIsOptedOutInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CheckIfPhoneNumberIsOptedOut'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CheckIfPhoneNumberIsOptedOutInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=ConfirmSubscription': {
      $get:
        | {
            input: {
              query: {
                TopicArn: string
                Token: string
                AuthenticateOnUnsubscribe?: string | undefined
                Action: 'ConfirmSubscription'
                Version: '2010-03-31'
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
            output: ConfirmSubscriptionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TopicArn: string
                Token: string
                AuthenticateOnUnsubscribe?: string | undefined
                Action: 'ConfirmSubscription'
                Version: '2010-03-31'
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
            output: SubscriptionLimitExceededException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TopicArn: string
                Token: string
                AuthenticateOnUnsubscribe?: string | undefined
                Action: 'ConfirmSubscription'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TopicArn: string
                Token: string
                AuthenticateOnUnsubscribe?: string | undefined
                Action: 'ConfirmSubscription'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TopicArn: string
                Token: string
                AuthenticateOnUnsubscribe?: string | undefined
                Action: 'ConfirmSubscription'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                TopicArn: string
                Token: string
                AuthenticateOnUnsubscribe?: string | undefined
                Action: 'ConfirmSubscription'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                TopicArn: string
                Token: string
                AuthenticateOnUnsubscribe?: string | undefined
                Action: 'ConfirmSubscription'
                Version: '2010-03-31'
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
            output: FilterPolicyLimitExceededException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'ConfirmSubscription'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmSubscriptionInput }
            output: ConfirmSubscriptionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ConfirmSubscription'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmSubscriptionInput }
            output: SubscriptionLimitExceededException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ConfirmSubscription'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmSubscriptionInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ConfirmSubscription'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmSubscriptionInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ConfirmSubscription'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmSubscriptionInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ConfirmSubscription'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmSubscriptionInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'ConfirmSubscription'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmSubscriptionInput }
            output: FilterPolicyLimitExceededException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=CreatePlatformApplication': {
      $get:
        | {
            input: {
              query: {
                Name: string
                Platform: string
                Attributes: { [x: string]: String }
                Action: 'CreatePlatformApplication'
                Version: '2010-03-31'
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
            output: CreatePlatformApplicationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name: string
                Platform: string
                Attributes: { [x: string]: String }
                Action: 'CreatePlatformApplication'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Name: string
                Platform: string
                Attributes: { [x: string]: String }
                Action: 'CreatePlatformApplication'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Name: string
                Platform: string
                Attributes: { [x: string]: String }
                Action: 'CreatePlatformApplication'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CreatePlatformApplication'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformApplicationInput }
            output: CreatePlatformApplicationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreatePlatformApplication'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformApplicationInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreatePlatformApplication'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformApplicationInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreatePlatformApplication'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformApplicationInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=CreatePlatformEndpoint': {
      $get:
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Token: string
                CustomUserData?: string | undefined
                Attributes?: { [x: string]: String } | undefined
                Action: 'CreatePlatformEndpoint'
                Version: '2010-03-31'
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
            output: CreateEndpointResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Token: string
                CustomUserData?: string | undefined
                Attributes?: { [x: string]: String } | undefined
                Action: 'CreatePlatformEndpoint'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Token: string
                CustomUserData?: string | undefined
                Attributes?: { [x: string]: String } | undefined
                Action: 'CreatePlatformEndpoint'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Token: string
                CustomUserData?: string | undefined
                Attributes?: { [x: string]: String } | undefined
                Action: 'CreatePlatformEndpoint'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Token: string
                CustomUserData?: string | undefined
                Attributes?: { [x: string]: String } | undefined
                Action: 'CreatePlatformEndpoint'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'CreatePlatformEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformEndpointInput }
            output: CreateEndpointResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreatePlatformEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformEndpointInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreatePlatformEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformEndpointInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreatePlatformEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformEndpointInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreatePlatformEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformEndpointInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=CreateSMSSandboxPhoneNumber': {
      $get:
        | {
            input: {
              query: {
                PhoneNumber: string
                LanguageCode?:
                  | 'en-US'
                  | 'en-GB'
                  | 'es-419'
                  | 'es-ES'
                  | 'de-DE'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'pt-BR'
                  | 'kr-KR'
                  | 'zh-CN'
                  | 'zh-TW'
                  | undefined
                Action: 'CreateSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: CreateSMSSandboxPhoneNumberResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                LanguageCode?:
                  | 'en-US'
                  | 'en-GB'
                  | 'es-419'
                  | 'es-ES'
                  | 'de-DE'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'pt-BR'
                  | 'kr-KR'
                  | 'zh-CN'
                  | 'zh-TW'
                  | undefined
                Action: 'CreateSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                LanguageCode?:
                  | 'en-US'
                  | 'en-GB'
                  | 'es-419'
                  | 'es-ES'
                  | 'de-DE'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'pt-BR'
                  | 'kr-KR'
                  | 'zh-CN'
                  | 'zh-TW'
                  | undefined
                Action: 'CreateSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                LanguageCode?:
                  | 'en-US'
                  | 'en-GB'
                  | 'es-419'
                  | 'es-ES'
                  | 'de-DE'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'pt-BR'
                  | 'kr-KR'
                  | 'zh-CN'
                  | 'zh-TW'
                  | undefined
                Action: 'CreateSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                LanguageCode?:
                  | 'en-US'
                  | 'en-GB'
                  | 'es-419'
                  | 'es-ES'
                  | 'de-DE'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'pt-BR'
                  | 'kr-KR'
                  | 'zh-CN'
                  | 'zh-TW'
                  | undefined
                Action: 'CreateSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: OptedOutException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                LanguageCode?:
                  | 'en-US'
                  | 'en-GB'
                  | 'es-419'
                  | 'es-ES'
                  | 'de-DE'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'pt-BR'
                  | 'kr-KR'
                  | 'zh-CN'
                  | 'zh-TW'
                  | undefined
                Action: 'CreateSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: UserErrorException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                LanguageCode?:
                  | 'en-US'
                  | 'en-GB'
                  | 'es-419'
                  | 'es-ES'
                  | 'de-DE'
                  | 'fr-CA'
                  | 'fr-FR'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'pt-BR'
                  | 'kr-KR'
                  | 'zh-CN'
                  | 'zh-TW'
                  | undefined
                Action: 'CreateSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'CreateSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSMSSandboxPhoneNumberInput }
            output: CreateSMSSandboxPhoneNumberResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSMSSandboxPhoneNumberInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSMSSandboxPhoneNumberInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSMSSandboxPhoneNumberInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSMSSandboxPhoneNumberInput }
            output: OptedOutException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSMSSandboxPhoneNumberInput }
            output: UserErrorException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSMSSandboxPhoneNumberInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=CreateTopic': {
      $get:
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: CreateTopicResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: TopicLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: TagLimitExceededException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: StaleTagException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: TagPolicyException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                Name: string
                Attributes?: { [x: string]: AttributeValue } | undefined
                Tags?: Tag[] | undefined
                DataProtectionPolicy?: string | undefined
                Action: 'CreateTopic'
                Version: '2010-03-31'
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
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 488
          }
      $post:
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: CreateTopicResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: TopicLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: TagLimitExceededException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: StaleTagException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: TagPolicyException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'CreateTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTopicInput }
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 488
          }
    }
  } & {
    '/#Action=DeleteEndpoint': {
      $get:
        | {
            input: {
              query: { EndpointArn: string; Action: 'DeleteEndpoint'; Version: '2010-03-31' }
            } & {
              header: {
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
              query: { EndpointArn: string; Action: 'DeleteEndpoint'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { EndpointArn: string; Action: 'DeleteEndpoint'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { EndpointArn: string; Action: 'DeleteEndpoint'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DeleteEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteEndpoint'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DeletePlatformApplication': {
      $get:
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Action: 'DeletePlatformApplication'
                Version: '2010-03-31'
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
                PlatformApplicationArn: string
                Action: 'DeletePlatformApplication'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Action: 'DeletePlatformApplication'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Action: 'DeletePlatformApplication'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DeletePlatformApplication'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformApplicationInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeletePlatformApplication'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformApplicationInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeletePlatformApplication'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformApplicationInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeletePlatformApplication'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformApplicationInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DeleteSMSSandboxPhoneNumber': {
      $get:
        | {
            input: {
              query: {
                PhoneNumber: string
                Action: 'DeleteSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: DeleteSMSSandboxPhoneNumberResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                Action: 'DeleteSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                Action: 'DeleteSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                Action: 'DeleteSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                Action: 'DeleteSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                Action: 'DeleteSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: UserErrorException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                Action: 'DeleteSMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'DeleteSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSMSSandboxPhoneNumberInput }
            output: DeleteSMSSandboxPhoneNumberResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSMSSandboxPhoneNumberInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSMSSandboxPhoneNumberInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSMSSandboxPhoneNumberInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSMSSandboxPhoneNumberInput }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DeleteSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSMSSandboxPhoneNumberInput }
            output: UserErrorException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'DeleteSMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSMSSandboxPhoneNumberInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=DeleteTopic': {
      $get:
        | {
            input: { query: { TopicArn: string; Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
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
            input: { query: { TopicArn: string; Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { TopicArn: string; Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { TopicArn: string; Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { TopicArn: string; Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
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
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { TopicArn: string; Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: StaleTagException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { TopicArn: string; Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TagPolicyException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { TopicArn: string; Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTopicInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTopicInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTopicInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTopicInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTopicInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTopicInput }
            output: StaleTagException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTopicInput }
            output: TagPolicyException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'DeleteTopic'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTopicInput }
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=GetDataProtectionPolicy': {
      $get:
        | {
            input: {
              query: {
                ResourceArn: string
                Action: 'GetDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: GetDataProtectionPolicyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Action: 'GetDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Action: 'GetDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Action: 'GetDataProtectionPolicy'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Action: 'GetDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Action: 'GetDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'GetDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataProtectionPolicyInput }
            output: GetDataProtectionPolicyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataProtectionPolicyInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'GetDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataProtectionPolicyInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'GetDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataProtectionPolicyInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'GetDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataProtectionPolicyInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'GetDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDataProtectionPolicyInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=GetEndpointAttributes': {
      $get:
        | {
            input: {
              query: { EndpointArn: string; Action: 'GetEndpointAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetEndpointAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { EndpointArn: string; Action: 'GetEndpointAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { EndpointArn: string; Action: 'GetEndpointAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { EndpointArn: string; Action: 'GetEndpointAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { EndpointArn: string; Action: 'GetEndpointAttributes'; Version: '2010-03-31' }
            } & {
              header: {
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
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'GetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEndpointAttributesInput }
            output: GetEndpointAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEndpointAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'GetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEndpointAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'GetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEndpointAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'GetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetEndpointAttributesInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=GetPlatformApplicationAttributes': {
      $get:
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Action: 'GetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            output: GetPlatformApplicationAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Action: 'GetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Action: 'GetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Action: 'GetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Action: 'GetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: { Action: 'GetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPlatformApplicationAttributesInput }
            output: GetPlatformApplicationAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'GetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPlatformApplicationAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'GetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPlatformApplicationAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'GetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPlatformApplicationAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'GetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPlatformApplicationAttributesInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=GetSMSAttributes': {
      $get:
        | {
            input: {
              query: {
                attributes?: String[] | undefined
                Action: 'GetSMSAttributes'
                Version: '2010-03-31'
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
            output: GetSMSAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                attributes?: String[] | undefined
                Action: 'GetSMSAttributes'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                attributes?: String[] | undefined
                Action: 'GetSMSAttributes'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                attributes?: String[] | undefined
                Action: 'GetSMSAttributes'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                attributes?: String[] | undefined
                Action: 'GetSMSAttributes'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'GetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSAttributesInput }
            output: GetSMSAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSAttributesInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'GetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'GetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'GetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=GetSMSSandboxAccountStatus': {
      $get:
        | {
            input: { query: { Action: 'GetSMSSandboxAccountStatus'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetSMSSandboxAccountStatusResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetSMSSandboxAccountStatus'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'GetSMSSandboxAccountStatus'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'GetSMSSandboxAccountStatus'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottledException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'GetSMSSandboxAccountStatus'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSSandboxAccountStatusInput }
            output: GetSMSSandboxAccountStatusResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetSMSSandboxAccountStatus'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSSandboxAccountStatusInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'GetSMSSandboxAccountStatus'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSSandboxAccountStatusInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'GetSMSSandboxAccountStatus'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSMSSandboxAccountStatusInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=GetSubscriptionAttributes': {
      $get:
        | {
            input: {
              query: {
                SubscriptionArn: string
                Action: 'GetSubscriptionAttributes'
                Version: '2010-03-31'
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
            output: GetSubscriptionAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SubscriptionArn: string
                Action: 'GetSubscriptionAttributes'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SubscriptionArn: string
                Action: 'GetSubscriptionAttributes'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                SubscriptionArn: string
                Action: 'GetSubscriptionAttributes'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                SubscriptionArn: string
                Action: 'GetSubscriptionAttributes'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'GetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSubscriptionAttributesInput }
            output: GetSubscriptionAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSubscriptionAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'GetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSubscriptionAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'GetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSubscriptionAttributesInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'GetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSubscriptionAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=GetTopicAttributes': {
      $get:
        | {
            input: {
              query: { TopicArn: string; Action: 'GetTopicAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetTopicAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { TopicArn: string; Action: 'GetTopicAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { TopicArn: string; Action: 'GetTopicAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { TopicArn: string; Action: 'GetTopicAttributes'; Version: '2010-03-31' }
            } & {
              header: {
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
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { TopicArn: string; Action: 'GetTopicAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: { TopicArn: string; Action: 'GetTopicAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'GetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTopicAttributesInput }
            output: GetTopicAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTopicAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'GetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTopicAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'GetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTopicAttributesInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'GetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTopicAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'GetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTopicAttributesInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=ListEndpointsByPlatformApplication': {
      $get:
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            output: ListEndpointsByPlatformApplicationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            } & { json: ListEndpointsByPlatformApplicationInput }
            output: ListEndpointsByPlatformApplicationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            } & { json: ListEndpointsByPlatformApplicationInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            } & { json: ListEndpointsByPlatformApplicationInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            } & { json: ListEndpointsByPlatformApplicationInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListEndpointsByPlatformApplication'
                Version: '2010-03-31'
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
            } & { json: ListEndpointsByPlatformApplicationInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=ListOriginationNumbers': {
      $get:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            output: ListOriginationNumbersResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            } & { json: ListOriginationNumbersRequest }
            output: ListOriginationNumbersResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            } & { json: ListOriginationNumbersRequest }
            output: InternalErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            } & { json: ListOriginationNumbersRequest }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            } & { json: ListOriginationNumbersRequest }
            output: ThrottledException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            } & { json: ListOriginationNumbersRequest }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListOriginationNumbers'
                Version: '2010-03-31'
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
            } & { json: ListOriginationNumbersRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=ListPhoneNumbersOptedOut': {
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            output: ListPhoneNumbersOptedOutResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            } & { json: ListPhoneNumbersOptedOutInput }
            output: ListPhoneNumbersOptedOutResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            } & { json: ListPhoneNumbersOptedOutInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            } & { json: ListPhoneNumbersOptedOutInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            } & { json: ListPhoneNumbersOptedOutInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                Action: 'ListPhoneNumbersOptedOut'
                Version: '2010-03-31'
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
            } & { json: ListPhoneNumbersOptedOutInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=ListPlatformApplications': {
      $get:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListPlatformApplications'
                Version: '2010-03-31'
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
            output: ListPlatformApplicationsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListPlatformApplications'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListPlatformApplications'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListPlatformApplications'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListPlatformApplications'
                Version: '2010-03-31'
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
            } & { json: ListPlatformApplicationsInput }
            output: ListPlatformApplicationsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListPlatformApplications'
                Version: '2010-03-31'
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
            } & { json: ListPlatformApplicationsInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListPlatformApplications'
                Version: '2010-03-31'
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
            } & { json: ListPlatformApplicationsInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListPlatformApplications'
                Version: '2010-03-31'
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
            } & { json: ListPlatformApplicationsInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=ListSMSSandboxPhoneNumbers': {
      $get:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            output: ListSMSSandboxPhoneNumbersResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            } & { json: ListSMSSandboxPhoneNumbersInput }
            output: ListSMSSandboxPhoneNumbersResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            } & { json: ListSMSSandboxPhoneNumbersInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            } & { json: ListSMSSandboxPhoneNumbersInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            } & { json: ListSMSSandboxPhoneNumbersInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            } & { json: ListSMSSandboxPhoneNumbersInput }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                MaxResults?: string | undefined
                NextToken?: string | undefined
                Action: 'ListSMSSandboxPhoneNumbers'
                Version: '2010-03-31'
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
            } & { json: ListSMSSandboxPhoneNumbersInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=ListSubscriptions': {
      $get:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptions'
                Version: '2010-03-31'
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
            output: ListSubscriptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptions'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptions'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptions'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptions'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsInput }
            output: ListSubscriptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptions'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptions'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptions'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=ListSubscriptionsByTopic': {
      $get:
        | {
            input: {
              query: {
                TopicArn: string
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            output: ListSubscriptionsByTopicResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TopicArn: string
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TopicArn: string
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TopicArn: string
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TopicArn: string
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsByTopicInput }
            output: ListSubscriptionsByTopicResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsByTopicInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsByTopicInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsByTopicInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'ListSubscriptionsByTopic'
                Version: '2010-03-31'
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
            } & { json: ListSubscriptionsByTopicInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=ListTagsForResource': {
      $get:
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-03-31' }
            } & {
              header: {
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
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TagPolicyException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-03-31' } } & {
              header: {
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
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: TagPolicyException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=ListTopics': {
      $get:
        | {
            input: {
              query: { NextToken?: string | undefined; Action: 'ListTopics'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListTopicsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { NextToken?: string | undefined; Action: 'ListTopics'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { NextToken?: string | undefined; Action: 'ListTopics'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { NextToken?: string | undefined; Action: 'ListTopics'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: { NextToken?: string | undefined; Action: 'ListTopics'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsInput }
            output: ListTopicsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { NextToken?: string | undefined; Action: 'ListTopics'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { NextToken?: string | undefined; Action: 'ListTopics'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { NextToken?: string | undefined; Action: 'ListTopics'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTopicsInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=OptInPhoneNumber': {
      $get:
        | {
            input: {
              query: { phoneNumber: string; Action: 'OptInPhoneNumber'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: OptInPhoneNumberResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { phoneNumber: string; Action: 'OptInPhoneNumber'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottledException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { phoneNumber: string; Action: 'OptInPhoneNumber'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { phoneNumber: string; Action: 'OptInPhoneNumber'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { phoneNumber: string; Action: 'OptInPhoneNumber'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'OptInPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: OptInPhoneNumberInput }
            output: OptInPhoneNumberResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'OptInPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: OptInPhoneNumberInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'OptInPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: OptInPhoneNumberInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'OptInPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: OptInPhoneNumberInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'OptInPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: OptInPhoneNumberInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=Publish': {
      $get:
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: PublishResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: InvalidParameterValueException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: EndpointDisabledException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: PlatformApplicationDisabledException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: KMSDisabledException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: KMSInvalidStateException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: KMSNotFoundException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: KMSOptInRequired
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: KMSThrottlingException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: KMSAccessDeniedException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                TopicArn?: string | undefined
                TargetArn?: string | undefined
                PhoneNumber?: string | undefined
                Message: string
                Subject?: string | undefined
                MessageStructure?: string | undefined
                MessageAttributes?: { [x: string]: MessageAttributeValue } | undefined
                MessageDeduplicationId?: string | undefined
                MessageGroupId?: string | undefined
                Action: 'Publish'
                Version: '2010-03-31'
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
            output: ValidationException
            outputFormat: 'text'
            status: 494
          }
      $post:
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: PublishResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: InvalidParameterValueException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: EndpointDisabledException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: PlatformApplicationDisabledException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: KMSDisabledException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: KMSInvalidStateException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: KMSNotFoundException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: KMSOptInRequired
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: KMSThrottlingException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: KMSAccessDeniedException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'Publish'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishInput }
            output: ValidationException
            outputFormat: 'text'
            status: 494
          }
    }
  } & {
    '/#Action=PublishBatch': {
      $get:
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: PublishBatchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: InvalidParameterValueException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: EndpointDisabledException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: PlatformApplicationDisabledException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: BatchEntryIdsNotDistinctException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: BatchRequestTooLongException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: EmptyBatchRequestException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: InvalidBatchEntryIdException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: TooManyEntriesInBatchRequestException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: KMSDisabledException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: KMSInvalidStateException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: KMSNotFoundException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: KMSOptInRequired
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: KMSThrottlingException
            outputFormat: 'text'
            status: 496
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: KMSAccessDeniedException
            outputFormat: 'text'
            status: 497
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 498
          }
        | {
            input: {
              query: {
                TopicArn: string
                PublishBatchRequestEntries: PublishBatchRequestEntry[]
                Action: 'PublishBatch'
                Version: '2010-03-31'
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
            output: ValidationException
            outputFormat: 'text'
            status: 499
          }
      $post:
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: PublishBatchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: InvalidParameterValueException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: EndpointDisabledException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: PlatformApplicationDisabledException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: BatchEntryIdsNotDistinctException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: BatchRequestTooLongException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: EmptyBatchRequestException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: InvalidBatchEntryIdException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: TooManyEntriesInBatchRequestException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: KMSDisabledException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: KMSInvalidStateException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: KMSNotFoundException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: KMSOptInRequired
            outputFormat: 'text'
            status: 495
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: KMSThrottlingException
            outputFormat: 'text'
            status: 496
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: KMSAccessDeniedException
            outputFormat: 'text'
            status: 497
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 498
          }
        | {
            input: { query: { Action: 'PublishBatch'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishBatchInput }
            output: ValidationException
            outputFormat: 'text'
            status: 499
          }
    }
  } & {
    '/#Action=PutDataProtectionPolicy': {
      $get:
        | {
            input: {
              query: {
                ResourceArn: string
                DataProtectionPolicy: string
                Action: 'PutDataProtectionPolicy'
                Version: '2010-03-31'
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
                ResourceArn: string
                DataProtectionPolicy: string
                Action: 'PutDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceArn: string
                DataProtectionPolicy: string
                Action: 'PutDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceArn: string
                DataProtectionPolicy: string
                Action: 'PutDataProtectionPolicy'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ResourceArn: string
                DataProtectionPolicy: string
                Action: 'PutDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ResourceArn: string
                DataProtectionPolicy: string
                Action: 'PutDataProtectionPolicy'
                Version: '2010-03-31'
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
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'PutDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDataProtectionPolicyInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'PutDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDataProtectionPolicyInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'PutDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDataProtectionPolicyInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'PutDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDataProtectionPolicyInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'PutDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDataProtectionPolicyInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'PutDataProtectionPolicy'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDataProtectionPolicyInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=RemovePermission': {
      $get:
        | {
            input: {
              query: {
                TopicArn: string
                Label: string
                Action: 'RemovePermission'
                Version: '2010-03-31'
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
                TopicArn: string
                Label: string
                Action: 'RemovePermission'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TopicArn: string
                Label: string
                Action: 'RemovePermission'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TopicArn: string
                Label: string
                Action: 'RemovePermission'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TopicArn: string
                Label: string
                Action: 'RemovePermission'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'RemovePermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemovePermissionInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'RemovePermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemovePermissionInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RemovePermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemovePermissionInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'RemovePermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemovePermissionInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'RemovePermission'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemovePermissionInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=SetEndpointAttributes': {
      $get:
        | {
            input: {
              query: {
                EndpointArn: string
                Attributes: { [x: string]: String }
                Action: 'SetEndpointAttributes'
                Version: '2010-03-31'
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
                EndpointArn: string
                Attributes: { [x: string]: String }
                Action: 'SetEndpointAttributes'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                EndpointArn: string
                Attributes: { [x: string]: String }
                Action: 'SetEndpointAttributes'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                EndpointArn: string
                Attributes: { [x: string]: String }
                Action: 'SetEndpointAttributes'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                EndpointArn: string
                Attributes: { [x: string]: String }
                Action: 'SetEndpointAttributes'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'SetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetEndpointAttributesInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'SetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetEndpointAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetEndpointAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetEndpointAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SetEndpointAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetEndpointAttributesInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=SetPlatformApplicationAttributes': {
      $get:
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Attributes: { [x: string]: String }
                Action: 'SetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
                PlatformApplicationArn: string
                Attributes: { [x: string]: String }
                Action: 'SetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Attributes: { [x: string]: String }
                Action: 'SetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Attributes: { [x: string]: String }
                Action: 'SetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                PlatformApplicationArn: string
                Attributes: { [x: string]: String }
                Action: 'SetPlatformApplicationAttributes'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: { Action: 'SetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetPlatformApplicationAttributesInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { Action: 'SetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetPlatformApplicationAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'SetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetPlatformApplicationAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'SetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetPlatformApplicationAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'SetPlatformApplicationAttributes'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetPlatformApplicationAttributesInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=SetSMSAttributes': {
      $get:
        | {
            input: {
              query: {
                attributes: { [x: string]: String }
                Action: 'SetSMSAttributes'
                Version: '2010-03-31'
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
            output: SetSMSAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                attributes: { [x: string]: String }
                Action: 'SetSMSAttributes'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                attributes: { [x: string]: String }
                Action: 'SetSMSAttributes'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                attributes: { [x: string]: String }
                Action: 'SetSMSAttributes'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                attributes: { [x: string]: String }
                Action: 'SetSMSAttributes'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'SetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSMSAttributesInput }
            output: SetSMSAttributesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSMSAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSMSAttributesInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSMSAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SetSMSAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSMSAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=SetSubscriptionAttributes': {
      $get:
        | {
            input: {
              query: {
                SubscriptionArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetSubscriptionAttributes'
                Version: '2010-03-31'
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
                SubscriptionArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetSubscriptionAttributes'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SubscriptionArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetSubscriptionAttributes'
                Version: '2010-03-31'
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
            output: FilterPolicyLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                SubscriptionArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetSubscriptionAttributes'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                SubscriptionArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetSubscriptionAttributes'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                SubscriptionArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetSubscriptionAttributes'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'SetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubscriptionAttributesInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'SetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubscriptionAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubscriptionAttributesInput }
            output: FilterPolicyLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubscriptionAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubscriptionAttributesInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'SetSubscriptionAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubscriptionAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=SetTopicAttributes': {
      $get:
        | {
            input: {
              query: {
                TopicArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetTopicAttributes'
                Version: '2010-03-31'
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
                TopicArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetTopicAttributes'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TopicArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetTopicAttributes'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TopicArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetTopicAttributes'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TopicArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetTopicAttributes'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                TopicArn: string
                AttributeName: string
                AttributeValue?: string | undefined
                Action: 'SetTopicAttributes'
                Version: '2010-03-31'
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
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'SetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTopicAttributesInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'SetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTopicAttributesInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTopicAttributesInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTopicAttributesInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTopicAttributesInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'SetTopicAttributes'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTopicAttributesInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=Subscribe': {
      $get:
        | {
            input: {
              query: {
                TopicArn: string
                Protocol: string
                Endpoint?: string | undefined
                Attributes?: { [x: string]: AttributeValue } | undefined
                ReturnSubscriptionArn?: boolean | undefined
                Action: 'Subscribe'
                Version: '2010-03-31'
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
            output: SubscribeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TopicArn: string
                Protocol: string
                Endpoint?: string | undefined
                Attributes?: { [x: string]: AttributeValue } | undefined
                ReturnSubscriptionArn?: boolean | undefined
                Action: 'Subscribe'
                Version: '2010-03-31'
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
            output: SubscriptionLimitExceededException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TopicArn: string
                Protocol: string
                Endpoint?: string | undefined
                Attributes?: { [x: string]: AttributeValue } | undefined
                ReturnSubscriptionArn?: boolean | undefined
                Action: 'Subscribe'
                Version: '2010-03-31'
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
            output: FilterPolicyLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TopicArn: string
                Protocol: string
                Endpoint?: string | undefined
                Attributes?: { [x: string]: AttributeValue } | undefined
                ReturnSubscriptionArn?: boolean | undefined
                Action: 'Subscribe'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TopicArn: string
                Protocol: string
                Endpoint?: string | undefined
                Attributes?: { [x: string]: AttributeValue } | undefined
                ReturnSubscriptionArn?: boolean | undefined
                Action: 'Subscribe'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                TopicArn: string
                Protocol: string
                Endpoint?: string | undefined
                Attributes?: { [x: string]: AttributeValue } | undefined
                ReturnSubscriptionArn?: boolean | undefined
                Action: 'Subscribe'
                Version: '2010-03-31'
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
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                TopicArn: string
                Protocol: string
                Endpoint?: string | undefined
                Attributes?: { [x: string]: AttributeValue } | undefined
                ReturnSubscriptionArn?: boolean | undefined
                Action: 'Subscribe'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                TopicArn: string
                Protocol: string
                Endpoint?: string | undefined
                Attributes?: { [x: string]: AttributeValue } | undefined
                ReturnSubscriptionArn?: boolean | undefined
                Action: 'Subscribe'
                Version: '2010-03-31'
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
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'Subscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubscribeInput }
            output: SubscribeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'Subscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubscribeInput }
            output: SubscriptionLimitExceededException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'Subscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubscribeInput }
            output: FilterPolicyLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'Subscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubscribeInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'Subscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubscribeInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'Subscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubscribeInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'Subscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubscribeInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'Subscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubscribeInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=TagResource': {
      $get:
        | {
            input: {
              query: {
                ResourceArn: string
                Tags: Tag[]
                Action: 'TagResource'
                Version: '2010-03-31'
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
            output: TagResourceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Tags: Tag[]
                Action: 'TagResource'
                Version: '2010-03-31'
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
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Tags: Tag[]
                Action: 'TagResource'
                Version: '2010-03-31'
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
            output: TagLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Tags: Tag[]
                Action: 'TagResource'
                Version: '2010-03-31'
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
            output: StaleTagException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Tags: Tag[]
                Action: 'TagResource'
                Version: '2010-03-31'
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
            output: TagPolicyException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Tags: Tag[]
                Action: 'TagResource'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Tags: Tag[]
                Action: 'TagResource'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                ResourceArn: string
                Tags: Tag[]
                Action: 'TagResource'
                Version: '2010-03-31'
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
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'TagResource'; Version: '2010-03-31' } } & {
              header: {
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
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'TagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'TagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TagLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'TagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: StaleTagException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'TagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TagPolicyException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'TagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'TagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'TagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=Unsubscribe': {
      $get:
        | {
            input: {
              query: { SubscriptionArn: string; Action: 'Unsubscribe'; Version: '2010-03-31' }
            } & {
              header: {
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
              query: { SubscriptionArn: string; Action: 'Unsubscribe'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { SubscriptionArn: string; Action: 'Unsubscribe'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { SubscriptionArn: string; Action: 'Unsubscribe'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { SubscriptionArn: string; Action: 'Unsubscribe'; Version: '2010-03-31' }
            } & {
              header: {
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
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: { SubscriptionArn: string; Action: 'Unsubscribe'; Version: '2010-03-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'Unsubscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnsubscribeInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'Unsubscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnsubscribeInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'Unsubscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnsubscribeInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'Unsubscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnsubscribeInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'Unsubscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnsubscribeInput }
            output: NotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'Unsubscribe'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnsubscribeInput }
            output: InvalidSecurityException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=UntagResource': {
      $get:
        | {
            input: {
              query: {
                ResourceArn: string
                TagKeys: TagKey[]
                Action: 'UntagResource'
                Version: '2010-03-31'
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
            output: UntagResourceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagKeys: TagKey[]
                Action: 'UntagResource'
                Version: '2010-03-31'
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
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagKeys: TagKey[]
                Action: 'UntagResource'
                Version: '2010-03-31'
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
            output: TagLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagKeys: TagKey[]
                Action: 'UntagResource'
                Version: '2010-03-31'
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
            output: StaleTagException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagKeys: TagKey[]
                Action: 'UntagResource'
                Version: '2010-03-31'
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
            output: TagPolicyException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagKeys: TagKey[]
                Action: 'UntagResource'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagKeys: TagKey[]
                Action: 'UntagResource'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagKeys: TagKey[]
                Action: 'UntagResource'
                Version: '2010-03-31'
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
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'UntagResource'; Version: '2010-03-31' } } & {
              header: {
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
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UntagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UntagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: TagLimitExceededException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'UntagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: StaleTagException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'UntagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: TagPolicyException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'UntagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'UntagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'UntagResource'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ConcurrentAccessException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=VerifySMSSandboxPhoneNumber': {
      $get:
        | {
            input: {
              query: {
                PhoneNumber: string
                OneTimePassword: string
                Action: 'VerifySMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: VerifySMSSandboxPhoneNumberResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                OneTimePassword: string
                Action: 'VerifySMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                OneTimePassword: string
                Action: 'VerifySMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                OneTimePassword: string
                Action: 'VerifySMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                OneTimePassword: string
                Action: 'VerifySMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                OneTimePassword: string
                Action: 'VerifySMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: VerificationException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                PhoneNumber: string
                OneTimePassword: string
                Action: 'VerifySMSSandboxPhoneNumber'
                Version: '2010-03-31'
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
            output: ThrottledException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'VerifySMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: VerifySMSSandboxPhoneNumberInput }
            output: VerifySMSSandboxPhoneNumberResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'VerifySMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: VerifySMSSandboxPhoneNumberInput }
            output: AuthorizationErrorException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'VerifySMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: VerifySMSSandboxPhoneNumberInput }
            output: InternalErrorException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'VerifySMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: VerifySMSSandboxPhoneNumberInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'VerifySMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: VerifySMSSandboxPhoneNumberInput }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'VerifySMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: VerifySMSSandboxPhoneNumberInput }
            output: VerificationException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'VerifySMSSandboxPhoneNumber'; Version: '2010-03-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: VerifySMSSandboxPhoneNumberInput }
            output: ThrottledException
            outputFormat: 'text'
            status: 485
          }
    }
  },
  '/'
>
export default routes
