type AddPermissionRequest = { QueueUrl: {}; Label: {}; AWSAccountIds: {}; Actions: {} }
type CancelMessageMoveTaskResult = { ApproximateNumberOfMessagesMoved?: {} | undefined }
type CancelMessageMoveTaskRequest = { TaskHandle: {} }
type ChangeMessageVisibilityRequest = { QueueUrl: {}; ReceiptHandle: {}; VisibilityTimeout: {} }
type ChangeMessageVisibilityBatchResult = { Successful: {}; Failed: {} }
type ChangeMessageVisibilityBatchRequest = { QueueUrl: {}; Entries: {} }
type String = string
type TagValue = string
type CreateQueueResult = { QueueUrl?: {} | undefined }
type CreateQueueRequest = { QueueName: {}; Attributes?: {} | undefined; tags?: {} | undefined }
type DeleteMessageRequest = { QueueUrl: {}; ReceiptHandle: {} }
type DeleteMessageBatchResult = { Successful: {}; Failed: {} }
type DeleteMessageBatchRequest = { QueueUrl: {}; Entries: {} }
type DeleteQueueRequest = { QueueUrl: {} }
type GetQueueAttributesResult = { Attributes?: {} | undefined }
type GetQueueAttributesRequest = { QueueUrl: {}; AttributeNames?: {} | undefined }
type GetQueueUrlResult = { QueueUrl?: {} | undefined }
type GetQueueUrlRequest = { QueueName: {}; QueueOwnerAWSAccountId?: {} | undefined }
type ListDeadLetterSourceQueuesResult = { queueUrls: {}; NextToken?: {} | undefined }
type ListDeadLetterSourceQueuesRequest = {
  QueueUrl: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListMessageMoveTasksResult = { Results?: {} | undefined }
type ListMessageMoveTasksRequest = { SourceArn: {}; MaxResults?: {} | undefined }
type ListQueueTagsResult = { Tags?: {} | undefined }
type ListQueueTagsRequest = { QueueUrl: {} }
type ListQueuesResult = { QueueUrls?: {} | undefined; NextToken?: {} | undefined }
type ListQueuesRequest = {
  QueueNamePrefix?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type PurgeQueueRequest = { QueueUrl: {} }
type ReceiveMessageResult = { Messages?: {} | undefined }
type ReceiveMessageRequest = {
  QueueUrl: {}
  AttributeNames?: {} | undefined
  MessageAttributeNames?: {} | undefined
  MaxNumberOfMessages?: {} | undefined
  VisibilityTimeout?: {} | undefined
  WaitTimeSeconds?: {} | undefined
  ReceiveRequestAttemptId?: {} | undefined
}
type RemovePermissionRequest = { QueueUrl: {}; Label: {} }
type MessageAttributeValue = {
  StringValue?: {} | undefined
  BinaryValue?: {} | undefined
  StringListValues?: {} | undefined
  BinaryListValues?: {} | undefined
  DataType: {}
}
type MessageSystemAttributeValue = {
  StringValue?: {} | undefined
  BinaryValue?: {} | undefined
  StringListValues?: {} | undefined
  BinaryListValues?: {} | undefined
  DataType: {}
}
type SendMessageResult = {
  MD5OfMessageBody?: {} | undefined
  MD5OfMessageAttributes?: {} | undefined
  MD5OfMessageSystemAttributes?: {} | undefined
  MessageId?: {} | undefined
  SequenceNumber?: {} | undefined
}
type SendMessageRequest = {
  QueueUrl: {}
  MessageBody: {}
  DelaySeconds?: {} | undefined
  MessageAttributes?: {} | undefined
  MessageSystemAttributes?: {} | undefined
  MessageDeduplicationId?: {} | undefined
  MessageGroupId?: {} | undefined
}
type SendMessageBatchResult = { Successful: {}; Failed: {} }
type SendMessageBatchRequest = { QueueUrl: {}; Entries: {} }
type SetQueueAttributesRequest = { QueueUrl: {}; Attributes: {} }
type StartMessageMoveTaskResult = { TaskHandle?: {} | undefined }
type StartMessageMoveTaskRequest = {
  SourceArn: {}
  DestinationArn?: {} | undefined
  MaxNumberOfMessagesPerSecond?: {} | undefined
}
type TagQueueRequest = { QueueUrl: {}; Tags: {} }
type UntagQueueRequest = { QueueUrl: {}; TagKeys: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:AccountNumber/:QueueName/#Action=AddPermission': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            Label: string
            AWSAccountIds: {}[]
            Actions: {}[]
            Action: 'AddPermission'
            Version: '2012-11-05'
          }
        } & {
          header: {
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
    '/#Action=AddPermission': {
      $post: {
        input: { query: { Action: 'AddPermission'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddPermissionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=CancelMessageMoveTask': {
      $get: {
        input: {
          query: { TaskHandle: string; Action: 'CancelMessageMoveTask'; Version: '2012-11-05' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CancelMessageMoveTaskResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CancelMessageMoveTask'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelMessageMoveTaskRequest }
        output: CancelMessageMoveTaskResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=ChangeMessageVisibility': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            ReceiptHandle: string
            VisibilityTimeout: number
            Action: 'ChangeMessageVisibility'
            Version: '2012-11-05'
          }
        } & {
          header: {
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
    '/#Action=ChangeMessageVisibility': {
      $post: {
        input: { query: { Action: 'ChangeMessageVisibility'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ChangeMessageVisibilityRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=ChangeMessageVisibilityBatch': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            Entries: { Id: {}; ReceiptHandle: {}; VisibilityTimeout?: {} | undefined }[]
            Action: 'ChangeMessageVisibilityBatch'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ChangeMessageVisibilityBatchResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ChangeMessageVisibilityBatch': {
      $post: {
        input: { query: { Action: 'ChangeMessageVisibilityBatch'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ChangeMessageVisibilityBatchRequest }
        output: ChangeMessageVisibilityBatchResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateQueue': {
      $get: {
        input: {
          query: {
            QueueName: string
            Attribute?: { [x: string]: String } | undefined
            Tag?: { [x: string]: TagValue } | undefined
            Action: 'CreateQueue'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateQueueResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateQueue'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateQueueRequest }
        output: CreateQueueResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=DeleteMessage': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: { ReceiptHandle: string; Action: 'DeleteMessage'; Version: '2012-11-05' }
        } & {
          header: {
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
    '/#Action=DeleteMessage': {
      $post: {
        input: { query: { Action: 'DeleteMessage'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMessageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=DeleteMessageBatch': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            Entries: { Id: {}; ReceiptHandle: {} }[]
            Action: 'DeleteMessageBatch'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteMessageBatchResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteMessageBatch': {
      $post: {
        input: { query: { Action: 'DeleteMessageBatch'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMessageBatchRequest }
        output: DeleteMessageBatchResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=DeleteQueue': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: { Action: 'DeleteQueue'; Version: '2012-11-05' }
        } & {
          header: {
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
    '/#Action=DeleteQueue': {
      $post: {
        input: { query: { Action: 'DeleteQueue'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteQueueRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=GetQueueAttributes': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            AttributeNames?: {}[] | undefined
            Action: 'GetQueueAttributes'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetQueueAttributesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetQueueAttributes': {
      $post: {
        input: { query: { Action: 'GetQueueAttributes'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQueueAttributesRequest }
        output: GetQueueAttributesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetQueueUrl': {
      $get: {
        input: {
          query: {
            QueueName: string
            QueueOwnerAWSAccountId?: string | undefined
            Action: 'GetQueueUrl'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetQueueUrlResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetQueueUrl'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQueueUrlRequest }
        output: GetQueueUrlResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=ListDeadLetterSourceQueues': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Action: 'ListDeadLetterSourceQueues'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDeadLetterSourceQueuesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListDeadLetterSourceQueues': {
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListDeadLetterSourceQueues'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDeadLetterSourceQueuesRequest }
        output: ListDeadLetterSourceQueuesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListMessageMoveTasks': {
      $get: {
        input: {
          query: {
            SourceArn: string
            MaxResults?: number | undefined
            Action: 'ListMessageMoveTasks'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListMessageMoveTasksResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListMessageMoveTasks'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMessageMoveTasksRequest }
        output: ListMessageMoveTasksResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=ListQueueTags': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: { Action: 'ListQueueTags'; Version: '2012-11-05' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListQueueTagsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListQueueTags': {
      $post: {
        input: { query: { Action: 'ListQueueTags'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListQueueTagsRequest }
        output: ListQueueTagsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListQueues': {
      $get: {
        input: {
          query: {
            QueueNamePrefix?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Action: 'ListQueues'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListQueuesResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListQueues'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListQueuesRequest }
        output: ListQueuesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=PurgeQueue': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: { Action: 'PurgeQueue'; Version: '2012-11-05' }
        } & {
          header: {
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
    '/#Action=PurgeQueue': {
      $post: {
        input: { query: { Action: 'PurgeQueue'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PurgeQueueRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=ReceiveMessage': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            AttributeNames?: {}[] | undefined
            MessageAttributeNames?: {}[] | undefined
            MaxNumberOfMessages?: number | undefined
            VisibilityTimeout?: number | undefined
            WaitTimeSeconds?: number | undefined
            ReceiveRequestAttemptId?: string | undefined
            Action: 'ReceiveMessage'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReceiveMessageResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ReceiveMessage': {
      $post: {
        input: { query: { Action: 'ReceiveMessage'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ReceiveMessageRequest }
        output: ReceiveMessageResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=RemovePermission': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: { Label: string; Action: 'RemovePermission'; Version: '2012-11-05' }
        } & {
          header: {
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
    '/#Action=RemovePermission': {
      $post: {
        input: { query: { Action: 'RemovePermission'; Version: '2012-11-05' } } & {
          header: {
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
    '/:AccountNumber/:QueueName/#Action=SendMessage': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            MessageBody: string
            DelaySeconds?: number | undefined
            MessageAttribute?: { [x: string]: MessageAttributeValue } | undefined
            MessageSystemAttribute?: { [x: string]: MessageSystemAttributeValue } | undefined
            MessageDeduplicationId?: string | undefined
            MessageGroupId?: string | undefined
            Action: 'SendMessage'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SendMessageResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SendMessage': {
      $post: {
        input: { query: { Action: 'SendMessage'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendMessageRequest }
        output: SendMessageResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=SendMessageBatch': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            Entries: {
              Id: {}
              MessageBody: {}
              DelaySeconds?: {} | undefined
              MessageAttributes?: {} | undefined
              MessageSystemAttributes?: {} | undefined
              MessageDeduplicationId?: {} | undefined
              MessageGroupId?: {} | undefined
            }[]
            Action: 'SendMessageBatch'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SendMessageBatchResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SendMessageBatch': {
      $post: {
        input: { query: { Action: 'SendMessageBatch'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendMessageBatchRequest }
        output: SendMessageBatchResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=SetQueueAttributes': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: {
            Attribute: { [x: string]: String }
            Action: 'SetQueueAttributes'
            Version: '2012-11-05'
          }
        } & {
          header: {
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
    '/#Action=SetQueueAttributes': {
      $post: {
        input: { query: { Action: 'SetQueueAttributes'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetQueueAttributesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=StartMessageMoveTask': {
      $get: {
        input: {
          query: {
            SourceArn: string
            DestinationArn?: string | undefined
            MaxNumberOfMessagesPerSecond?: number | undefined
            Action: 'StartMessageMoveTask'
            Version: '2012-11-05'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartMessageMoveTaskResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StartMessageMoveTask'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartMessageMoveTaskRequest }
        output: StartMessageMoveTaskResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=TagQueue': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: { Tags: { [x: string]: TagValue }; Action: 'TagQueue'; Version: '2012-11-05' }
        } & {
          header: {
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
    '/#Action=TagQueue': {
      $post: {
        input: { query: { Action: 'TagQueue'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagQueueRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:AccountNumber/:QueueName/#Action=UntagQueue': {
      $get: {
        input: { param: { AccountNumber: number; QueueName: string } } & {
          query: { TagKeys: {}[]; Action: 'UntagQueue'; Version: '2012-11-05' }
        } & {
          header: {
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
    '/#Action=UntagQueue': {
      $post: {
        input: { query: { Action: 'UntagQueue'; Version: '2012-11-05' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagQueueRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
