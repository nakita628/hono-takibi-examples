type Topic = { name?: string | undefined }
type OidcToken = { audience?: string | undefined; serviceAccountEmail?: string | undefined }
type PushConfig = {
  attributes?: { [x: string]: string } | undefined
  oidcToken?: OidcToken | undefined
  pushEndpoint?: string | undefined
}
type Subscription = {
  ackDeadlineSeconds?: number | undefined
  name?: string | undefined
  pushConfig?: PushConfig | undefined
  topic?: string | undefined
}
type ListSubscriptionsResponse = {
  nextPageToken?: string | undefined
  subscriptions?: Subscription[] | undefined
}
type ListTopicsResponse = { nextPageToken?: string | undefined; topics?: Topic[] | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
type Empty = { [x: string]: unknown }
type AcknowledgeRequest = { ackIds?: string[] | undefined }
type ModifyAckDeadlineRequest = {
  ackDeadlineSeconds?: number | undefined
  ackId?: string | undefined
  ackIds?: string[] | undefined
}
type ModifyPushConfigRequest = { pushConfig?: PushConfig | undefined }
type PullRequest = { maxMessages?: number | undefined; returnImmediately?: boolean | undefined }
type PubsubMessage = {
  attributes?: { [x: string]: string } | undefined
  data?: string | undefined
  messageId?: string | undefined
  publishTime?: string | undefined
}
type ReceivedMessage = { ackId?: string | undefined; message?: PubsubMessage | undefined }
type PullResponse = { receivedMessages?: ReceivedMessage[] | undefined }
type ListTopicSubscriptionsResponse = {
  nextPageToken?: string | undefined
  subscriptions?: string[] | undefined
}
type PublishRequest = { messages?: PubsubMessage[] | undefined }
type PublishResponse = { messageIds?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta2/:name': {
      $put: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Topic }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:project/subscriptions': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:project/topics': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListTopicsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:subscription': {
      $delete: {
        input: { param: { subscription: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { subscription: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:subscription:acknowledge': {
      $post: {
        input: { param: { subscription: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AcknowledgeRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:subscription:modifyAckDeadline': {
      $post: {
        input: { param: { subscription: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ModifyAckDeadlineRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:subscription:modifyPushConfig': {
      $post: {
        input: { param: { subscription: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ModifyPushConfigRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:subscription:pull': {
      $post: {
        input: { param: { subscription: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PullRequest }
        output: PullResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:topic': {
      $delete: {
        input: { param: { topic: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { topic: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:topic/subscriptions': {
      $get: {
        input: { param: { topic: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListTopicSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:topic:publish': {
      $post: {
        input: { param: { topic: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PublishRequest }
        output: PublishResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
