type EventTypeId = string
type Target = { TargetType?: {} | undefined; TargetAddress?: {} | undefined }
type TagValue = string
type CreateNotificationRuleResult = { Arn?: {} | undefined }
type DeleteNotificationRuleResult = { Arn?: {} | undefined }
type DeleteTargetResult = { [x: string]: unknown }
type DescribeNotificationRuleResult = {
  Arn: {}
  Name?: {} | undefined
  EventTypes?: {} | undefined
  Resource?: {} | undefined
  Targets?: {} | undefined
  DetailType?: {} | undefined
  CreatedBy?: {} | undefined
  Status?: {} | undefined
  CreatedTimestamp?: {} | undefined
  LastModifiedTimestamp?: {} | undefined
  Tags?: {} | undefined
}
type ListEventTypesFilter = { Name: {}; Value: {} }
type ListEventTypesResult = { EventTypes?: {} | undefined; NextToken?: {} | undefined }
type ListNotificationRulesFilter = { Name: {}; Value: {} }
type ListNotificationRulesResult = {
  NextToken?: {} | undefined
  NotificationRules?: {} | undefined
}
type ListTagsForResourceResult = { Tags?: {} | undefined }
type ListTargetsFilter = { Name: {}; Value: {} }
type ListTargetsResult = { Targets?: {} | undefined; NextToken?: {} | undefined }
type SubscribeResult = { Arn?: {} | undefined }
type TagResourceResult = { Tags?: {} | undefined }
type UnsubscribeResult = { Arn: {} }
type TagKey = string
type UntagResourceResult = { [x: string]: unknown }
type UpdateNotificationRuleResult = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/createNotificationRule': {
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
            Name: string
            EventTypeIds: EventTypeId[]
            Resource: string
            Targets: Target[]
            DetailType: 'BASIC' | 'FULL'
            ClientRequestToken?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
            Status?: 'ENABLED' | 'DISABLED' | undefined
          }
        }
        output: CreateNotificationRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deleteNotificationRule': {
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
        } & { json: { Arn: string } }
        output: DeleteNotificationRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deleteTarget': {
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
        } & { json: { TargetAddress: string; ForceUnsubscribeAll?: boolean | undefined } }
        output: DeleteTargetResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeNotificationRule': {
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
        } & { json: { Arn: string } }
        output: DescribeNotificationRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listEventTypes': {
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
            Filters?: ListEventTypesFilter[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListEventTypesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listNotificationRules': {
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
            Filters?: ListNotificationRulesFilter[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListNotificationRulesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listTagsForResource': {
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
        } & { json: { Arn: string } }
        output: ListTagsForResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listTargets': {
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
            Filters?: ListTargetsFilter[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListTargetsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribe': {
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
            Arn: string
            Target: { TargetType?: {} | undefined; TargetAddress?: {} | undefined }
            ClientRequestToken?: string | undefined
          }
        }
        output: SubscribeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagResource': {
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
        } & { json: { Arn: string; Tags: { [x: string]: TagValue } } }
        output: TagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/unsubscribe': {
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
        } & { json: { Arn: string; TargetAddress: string } }
        output: UnsubscribeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/untagResource/:resourceArn#tagKeys': {
      $post: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateNotificationRule': {
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
            Arn: string
            Name?: string | undefined
            Status?: 'ENABLED' | 'DISABLED' | undefined
            EventTypeIds?: EventTypeId[] | undefined
            Targets?: Target[] | undefined
            DetailType?: 'BASIC' | 'FULL' | undefined
          }
        }
        output: UpdateNotificationRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
