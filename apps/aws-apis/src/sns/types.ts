type Delegate = string
type Action = string
type AddPermissionInput = { TopicArn: {}; Label: {}; AWSAccountId: {}; ActionName: {} }
type CheckIfPhoneNumberIsOptedOutResponse = { isOptedOut?: {} | undefined }
type CheckIfPhoneNumberIsOptedOutInput = { phoneNumber: {} }
type ConfirmSubscriptionResponse = { SubscriptionArn?: {} | undefined }
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
type CreateSMSSandboxPhoneNumberInput = { PhoneNumber: {}; LanguageCode?: {} | undefined }
type AttributeValue = string
type Tag = { Key: {}; Value: {} }
type CreateTopicResponse = { TopicArn?: {} | undefined }
type CreateTopicInput = {
  Name: {}
  Attributes?: {} | undefined
  Tags?: {} | undefined
  DataProtectionPolicy?: {} | undefined
}
type DeleteEndpointInput = { EndpointArn: {} }
type DeletePlatformApplicationInput = { PlatformApplicationArn: {} }
type DeleteSMSSandboxPhoneNumberResult = { [x: string]: unknown }
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
type VerifySMSSandboxPhoneNumberInput = { PhoneNumber: {}; OneTimePassword: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AddPermission': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CheckIfPhoneNumberIsOptedOut': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ConfirmSubscription': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CreatePlatformApplication': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CreatePlatformEndpoint': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CreateSMSSandboxPhoneNumber': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CreateTopic': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteEndpoint': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeletePlatformApplication': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteSMSSandboxPhoneNumber': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteTopic': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=GetDataProtectionPolicy': {
      $get: {
        input: {
          query: { ResourceArn: string; Action: 'GetDataProtectionPolicy'; Version: '2010-03-31' }
        } & {
          header: {
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
      $post: {
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
    }
  } & {
    '/#Action=GetEndpointAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=GetPlatformApplicationAttributes': {
      $get: {
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
      $post: {
        input: { query: { Action: 'GetPlatformApplicationAttributes'; Version: '2010-03-31' } } & {
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
    }
  } & {
    '/#Action=GetSMSAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=GetSMSSandboxAccountStatus': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=GetSubscriptionAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=GetTopicAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListEndpointsByPlatformApplication': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListOriginationNumbers': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListPhoneNumbersOptedOut': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListPlatformApplications': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListSMSSandboxPhoneNumbers': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListSubscriptions': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListSubscriptionsByTopic': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListTagsForResource': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListTopics': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=OptInPhoneNumber': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=Publish': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=PublishBatch': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=PutDataProtectionPolicy': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=RemovePermission': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=SetEndpointAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=SetPlatformApplicationAttributes': {
      $get: {
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
      $post: {
        input: { query: { Action: 'SetPlatformApplicationAttributes'; Version: '2010-03-31' } } & {
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
    }
  } & {
    '/#Action=SetSMSAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=SetSubscriptionAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=SetTopicAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=Subscribe': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=TagResource': {
      $get: {
        input: {
          query: { ResourceArn: string; Tags: Tag[]; Action: 'TagResource'; Version: '2010-03-31' }
        } & {
          header: {
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
      $post: {
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
    }
  } & {
    '/#Action=Unsubscribe': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=UntagResource': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=VerifySMSSandboxPhoneNumber': {
      $get: {
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
      $post: {
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
    }
  },
  '/'
>
export default routes
