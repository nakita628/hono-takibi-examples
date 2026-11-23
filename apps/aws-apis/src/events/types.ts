type ActivateEventSourceRequest = { Name: {} }
type CancelReplayRequest = { ReplayName: {} }
type CancelReplayResponse = {
  ReplayArn?: {} | undefined
  State?: {} | undefined
  StateReason?: {} | undefined
}
type CreateApiDestinationRequest = {
  Name: {}
  Description?: {} | undefined
  ConnectionArn: {}
  InvocationEndpoint: {}
  HttpMethod: {}
  InvocationRateLimitPerSecond?: {} | undefined
}
type CreateApiDestinationResponse = {
  ApiDestinationArn?: {} | undefined
  ApiDestinationState?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
}
type CreateArchiveRequest = {
  ArchiveName: {}
  EventSourceArn: {}
  Description?: {} | undefined
  EventPattern?: {} | undefined
  RetentionDays?: {} | undefined
}
type CreateArchiveResponse = {
  ArchiveArn?: {} | undefined
  State?: {} | undefined
  StateReason?: {} | undefined
  CreationTime?: {} | undefined
}
type CreateConnectionRequest = {
  Name: {}
  Description?: {} | undefined
  AuthorizationType: {}
  AuthParameters: {
    BasicAuthParameters?: { Username: {}; Password: {} } | undefined
    OAuthParameters?:
      | {
          ClientParameters: { ClientID: {}; ClientSecret: {} }
          AuthorizationEndpoint: {}
          HttpMethod: {}
          OAuthHttpParameters?:
            | {
                HeaderParameters?: {} | undefined
                QueryStringParameters?: {} | undefined
                BodyParameters?: {} | undefined
              }
            | undefined
        }
      | undefined
    ApiKeyAuthParameters?: { ApiKeyName: {}; ApiKeyValue: {} } | undefined
    InvocationHttpParameters?:
      | {
          HeaderParameters?: {} | undefined
          QueryStringParameters?: {} | undefined
          BodyParameters?: {} | undefined
        }
      | undefined
  }
}
type CreateConnectionResponse = {
  ConnectionArn?: {} | undefined
  ConnectionState?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
}
type CreateEventBusRequest = { Name: {}; EventSourceName?: {} | undefined; Tags?: {} | undefined }
type CreateEventBusResponse = { EventBusArn?: {} | undefined }
type CreatePartnerEventSourceRequest = { Name: {}; Account: {} }
type CreatePartnerEventSourceResponse = { EventSourceArn?: {} | undefined }
type DeactivateEventSourceRequest = { Name: {} }
type DeauthorizeConnectionRequest = { Name: {} }
type DeauthorizeConnectionResponse = {
  ConnectionArn?: {} | undefined
  ConnectionState?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  LastAuthorizedTime?: {} | undefined
}
type DeleteApiDestinationRequest = { Name: {} }
type DeleteApiDestinationResponse = { [x: string]: unknown }
type DeleteArchiveRequest = { ArchiveName: {} }
type DeleteArchiveResponse = { [x: string]: unknown }
type DeleteConnectionRequest = { Name: {} }
type DeleteConnectionResponse = {
  ConnectionArn?: {} | undefined
  ConnectionState?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  LastAuthorizedTime?: {} | undefined
}
type DeleteEventBusRequest = { Name: {} }
type DeletePartnerEventSourceRequest = { Name: {}; Account: {} }
type DeleteRuleRequest = { Name: {}; EventBusName?: {} | undefined; Force?: {} | undefined }
type DescribeApiDestinationRequest = { Name: {} }
type DescribeApiDestinationResponse = {
  ApiDestinationArn?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  ApiDestinationState?: {} | undefined
  ConnectionArn?: {} | undefined
  InvocationEndpoint?: {} | undefined
  HttpMethod?: {} | undefined
  InvocationRateLimitPerSecond?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
}
type DescribeArchiveRequest = { ArchiveName: {} }
type DescribeArchiveResponse = {
  ArchiveArn?: {} | undefined
  ArchiveName?: {} | undefined
  EventSourceArn?: {} | undefined
  Description?: {} | undefined
  EventPattern?: {} | undefined
  State?: {} | undefined
  StateReason?: {} | undefined
  RetentionDays?: {} | undefined
  SizeBytes?: {} | undefined
  EventCount?: {} | undefined
  CreationTime?: {} | undefined
}
type DescribeConnectionRequest = { Name: {} }
type DescribeConnectionResponse = {
  ConnectionArn?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  ConnectionState?: {} | undefined
  StateReason?: {} | undefined
  AuthorizationType?: {} | undefined
  SecretArn?: {} | undefined
  AuthParameters?:
    | {
        BasicAuthParameters?: { Username?: {} | undefined } | undefined
        OAuthParameters?:
          | {
              ClientParameters?: { ClientID?: {} | undefined } | undefined
              AuthorizationEndpoint?: {} | undefined
              HttpMethod?: {} | undefined
              OAuthHttpParameters?:
                | {
                    HeaderParameters?: {} | undefined
                    QueryStringParameters?: {} | undefined
                    BodyParameters?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ApiKeyAuthParameters?: { ApiKeyName?: {} | undefined } | undefined
        InvocationHttpParameters?:
          | {
              HeaderParameters?: {} | undefined
              QueryStringParameters?: {} | undefined
              BodyParameters?: {} | undefined
            }
          | undefined
      }
    | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  LastAuthorizedTime?: {} | undefined
}
type DescribeEventBusRequest = { Name?: {} | undefined }
type DescribeEventBusResponse = {
  Name?: {} | undefined
  Arn?: {} | undefined
  Policy?: {} | undefined
}
type DescribeEventSourceRequest = { Name: {} }
type DescribeEventSourceResponse = {
  Arn?: {} | undefined
  CreatedBy?: {} | undefined
  CreationTime?: {} | undefined
  ExpirationTime?: {} | undefined
  Name?: {} | undefined
  State?: {} | undefined
}
type DescribePartnerEventSourceRequest = { Name: {} }
type DescribePartnerEventSourceResponse = { Arn?: {} | undefined; Name?: {} | undefined }
type DescribeReplayRequest = { ReplayName: {} }
type DescribeReplayResponse = {
  ReplayName?: {} | undefined
  ReplayArn?: {} | undefined
  Description?: {} | undefined
  State?: {} | undefined
  StateReason?: {} | undefined
  EventSourceArn?: {} | undefined
  Destination?: { Arn: {}; FilterArns?: {} | undefined } | undefined
  EventStartTime?: {} | undefined
  EventEndTime?: {} | undefined
  EventLastReplayedTime?: {} | undefined
  ReplayStartTime?: {} | undefined
  ReplayEndTime?: {} | undefined
}
type DescribeRuleRequest = { Name: {}; EventBusName?: {} | undefined }
type DescribeRuleResponse = {
  Name?: {} | undefined
  Arn?: {} | undefined
  EventPattern?: {} | undefined
  ScheduleExpression?: {} | undefined
  State?: {} | undefined
  Description?: {} | undefined
  RoleArn?: {} | undefined
  ManagedBy?: {} | undefined
  EventBusName?: {} | undefined
  CreatedBy?: {} | undefined
}
type DisableRuleRequest = { Name: {}; EventBusName?: {} | undefined }
type EnableRuleRequest = { Name: {}; EventBusName?: {} | undefined }
type ListApiDestinationsRequest = {
  NamePrefix?: {} | undefined
  ConnectionArn?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListApiDestinationsResponse = { ApiDestinations?: {} | undefined; NextToken?: {} | undefined }
type ListArchivesRequest = {
  NamePrefix?: {} | undefined
  EventSourceArn?: {} | undefined
  State?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListArchivesResponse = { Archives?: {} | undefined; NextToken?: {} | undefined }
type ListConnectionsRequest = {
  NamePrefix?: {} | undefined
  ConnectionState?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListConnectionsResponse = { Connections?: {} | undefined; NextToken?: {} | undefined }
type ListEventBusesRequest = {
  NamePrefix?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListEventBusesResponse = { EventBuses?: {} | undefined; NextToken?: {} | undefined }
type ListEventSourcesRequest = {
  NamePrefix?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListEventSourcesResponse = { EventSources?: {} | undefined; NextToken?: {} | undefined }
type ListPartnerEventSourceAccountsRequest = {
  EventSourceName: {}
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListPartnerEventSourceAccountsResponse = {
  PartnerEventSourceAccounts?: {} | undefined
  NextToken?: {} | undefined
}
type ListPartnerEventSourcesRequest = {
  NamePrefix: {}
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListPartnerEventSourcesResponse = {
  PartnerEventSources?: {} | undefined
  NextToken?: {} | undefined
}
type ListReplaysRequest = {
  NamePrefix?: {} | undefined
  State?: {} | undefined
  EventSourceArn?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListReplaysResponse = { Replays?: {} | undefined; NextToken?: {} | undefined }
type ListRuleNamesByTargetRequest = {
  TargetArn: {}
  EventBusName?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListRuleNamesByTargetResponse = { RuleNames?: {} | undefined; NextToken?: {} | undefined }
type ListRulesRequest = {
  NamePrefix?: {} | undefined
  EventBusName?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListRulesResponse = { Rules?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListTargetsByRuleRequest = {
  Rule: {}
  EventBusName?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListTargetsByRuleResponse = { Targets?: {} | undefined; NextToken?: {} | undefined }
type PutEventsRequest = { Entries: {} }
type PutEventsResponse = { FailedEntryCount?: {} | undefined; Entries?: {} | undefined }
type PutPartnerEventsRequest = { Entries: {} }
type PutPartnerEventsResponse = { FailedEntryCount?: {} | undefined; Entries?: {} | undefined }
type PutPermissionRequest = {
  EventBusName?: {} | undefined
  Action?: {} | undefined
  Principal?: {} | undefined
  StatementId?: {} | undefined
  Condition?: { Type: {}; Key: {}; Value: {} } | undefined
  Policy?: {} | undefined
}
type PutRuleRequest = {
  Name: {}
  ScheduleExpression?: {} | undefined
  EventPattern?: {} | undefined
  State?: {} | undefined
  Description?: {} | undefined
  RoleArn?: {} | undefined
  Tags?: {} | undefined
  EventBusName?: {} | undefined
}
type PutRuleResponse = { RuleArn?: {} | undefined }
type PutTargetsRequest = { Rule: {}; EventBusName?: {} | undefined; Targets: {} }
type PutTargetsResponse = { FailedEntryCount?: {} | undefined; FailedEntries?: {} | undefined }
type RemovePermissionRequest = {
  StatementId?: {} | undefined
  RemoveAllPermissions?: {} | undefined
  EventBusName?: {} | undefined
}
type RemoveTargetsRequest = {
  Rule: {}
  EventBusName?: {} | undefined
  Ids: {}
  Force?: {} | undefined
}
type RemoveTargetsResponse = { FailedEntryCount?: {} | undefined; FailedEntries?: {} | undefined }
type StartReplayRequest = {
  ReplayName: {}
  Description?: {} | undefined
  EventSourceArn: {}
  EventStartTime: {}
  EventEndTime: {}
  Destination: { Arn: {}; FilterArns?: {} | undefined }
}
type StartReplayResponse = {
  ReplayArn?: {} | undefined
  State?: {} | undefined
  StateReason?: {} | undefined
  ReplayStartTime?: {} | undefined
}
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type TestEventPatternRequest = { EventPattern: {}; Event: {} }
type TestEventPatternResponse = { Result?: {} | undefined }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateApiDestinationRequest = {
  Name: {}
  Description?: {} | undefined
  ConnectionArn?: {} | undefined
  InvocationEndpoint?: {} | undefined
  HttpMethod?: {} | undefined
  InvocationRateLimitPerSecond?: {} | undefined
}
type UpdateApiDestinationResponse = {
  ApiDestinationArn?: {} | undefined
  ApiDestinationState?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
}
type UpdateArchiveRequest = {
  ArchiveName: {}
  Description?: {} | undefined
  EventPattern?: {} | undefined
  RetentionDays?: {} | undefined
}
type UpdateArchiveResponse = {
  ArchiveArn?: {} | undefined
  State?: {} | undefined
  StateReason?: {} | undefined
  CreationTime?: {} | undefined
}
type UpdateConnectionRequest = {
  Name: {}
  Description?: {} | undefined
  AuthorizationType?: {} | undefined
  AuthParameters?:
    | {
        BasicAuthParameters?: { Username?: {} | undefined; Password?: {} | undefined } | undefined
        OAuthParameters?:
          | {
              ClientParameters?:
                | { ClientID?: {} | undefined; ClientSecret?: {} | undefined }
                | undefined
              AuthorizationEndpoint?: {} | undefined
              HttpMethod?: {} | undefined
              OAuthHttpParameters?:
                | {
                    HeaderParameters?: {} | undefined
                    QueryStringParameters?: {} | undefined
                    BodyParameters?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ApiKeyAuthParameters?:
          | { ApiKeyName?: {} | undefined; ApiKeyValue?: {} | undefined }
          | undefined
        InvocationHttpParameters?:
          | {
              HeaderParameters?: {} | undefined
              QueryStringParameters?: {} | undefined
              BodyParameters?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateConnectionResponse = {
  ConnectionArn?: {} | undefined
  ConnectionState?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  LastAuthorizedTime?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSEvents.ActivateEventSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ActivateEventSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ActivateEventSourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.CancelReplay': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.CancelReplay'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelReplayRequest }
        output: CancelReplayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.CreateApiDestination': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.CreateApiDestination'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateApiDestinationRequest }
        output: CreateApiDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.CreateArchive': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.CreateArchive'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateArchiveRequest }
        output: CreateArchiveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.CreateConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.CreateConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConnectionRequest }
        output: CreateConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.CreateEventBus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.CreateEventBus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEventBusRequest }
        output: CreateEventBusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.CreatePartnerEventSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.CreatePartnerEventSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePartnerEventSourceRequest }
        output: CreatePartnerEventSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DeactivateEventSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DeactivateEventSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeactivateEventSourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DeauthorizeConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DeauthorizeConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeauthorizeConnectionRequest }
        output: DeauthorizeConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DeleteApiDestination': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DeleteApiDestination'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApiDestinationRequest }
        output: DeleteApiDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DeleteArchive': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DeleteArchive'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteArchiveRequest }
        output: DeleteArchiveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DeleteConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DeleteConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConnectionRequest }
        output: DeleteConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DeleteEventBus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DeleteEventBus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEventBusRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DeletePartnerEventSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DeletePartnerEventSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePartnerEventSourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DeleteRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DeleteRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRuleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DescribeApiDestination': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DescribeApiDestination'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeApiDestinationRequest }
        output: DescribeApiDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DescribeArchive': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DescribeArchive'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeArchiveRequest }
        output: DescribeArchiveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DescribeConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DescribeConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeConnectionRequest }
        output: DescribeConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DescribeEventBus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DescribeEventBus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventBusRequest }
        output: DescribeEventBusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DescribeEventSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DescribeEventSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventSourceRequest }
        output: DescribeEventSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DescribePartnerEventSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DescribePartnerEventSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePartnerEventSourceRequest }
        output: DescribePartnerEventSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DescribeReplay': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DescribeReplay'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReplayRequest }
        output: DescribeReplayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DescribeRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DescribeRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRuleRequest }
        output: DescribeRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.DisableRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.DisableRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableRuleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.EnableRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.EnableRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableRuleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListApiDestinations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListApiDestinations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListApiDestinationsRequest }
        output: ListApiDestinationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListArchives': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListArchives'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListArchivesRequest }
        output: ListArchivesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListConnections': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListConnections'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListConnectionsRequest }
        output: ListConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListEventBuses': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListEventBuses'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEventBusesRequest }
        output: ListEventBusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListEventSources': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListEventSources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEventSourcesRequest }
        output: ListEventSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListPartnerEventSourceAccounts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPartnerEventSourceAccountsRequest }
        output: ListPartnerEventSourceAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListPartnerEventSources': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListPartnerEventSources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPartnerEventSourcesRequest }
        output: ListPartnerEventSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListReplays': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListReplays'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReplaysRequest }
        output: ListReplaysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListRuleNamesByTarget': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListRuleNamesByTarget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRuleNamesByTargetRequest }
        output: ListRuleNamesByTargetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRulesRequest }
        output: ListRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListTagsForResource'
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
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.ListTargetsByRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.ListTargetsByRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTargetsByRuleRequest }
        output: ListTargetsByRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.PutEvents': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.PutEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutEventsRequest }
        output: PutEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.PutPartnerEvents': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.PutPartnerEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutPartnerEventsRequest }
        output: PutPartnerEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.PutPermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.PutPermission'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutPermissionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.PutRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.PutRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRuleRequest }
        output: PutRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.PutTargets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.PutTargets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutTargetsRequest }
        output: PutTargetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.RemovePermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.RemovePermission'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemovePermissionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.RemoveTargets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.RemoveTargets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTargetsRequest }
        output: RemoveTargetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.StartReplay': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.StartReplay'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartReplayRequest }
        output: StartReplayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.TagResource'
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
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.TestEventPattern': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.TestEventPattern'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TestEventPatternRequest }
        output: TestEventPatternResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.UntagResource'
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
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.UpdateApiDestination': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.UpdateApiDestination'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApiDestinationRequest }
        output: UpdateApiDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.UpdateArchive': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.UpdateArchive'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateArchiveRequest }
        output: UpdateArchiveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEvents.UpdateConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEvents.UpdateConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateConnectionRequest }
        output: UpdateConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
