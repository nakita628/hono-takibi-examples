import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const OverLimitSchema = z.any().openapi('OverLimit')

const LongSchema = z.int().openapi('Long')

const CancelMessageMoveTaskResultSchema = z
  .object({
    ApproximateNumberOfMessagesMoved: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The approximate number of messages already moved to the destination queue.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelMessageMoveTaskResult')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const UnsupportedOperationSchema = z.any().openapi('UnsupportedOperation')

const MessageNotInflightSchema = z.any().openapi('MessageNotInflight')

const ReceiptHandleIsInvalidSchema = z.any().openapi('ReceiptHandleIsInvalid')

const ChangeMessageVisibilityBatchResultEntrySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a message whose visibility timeout has been changed successfully.',
        }),
    ),
  })
  .openapi({
    required: ['Id'],
    description:
      'Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code> ',
  })
  .openapi('ChangeMessageVisibilityBatchResultEntry')

const ChangeMessageVisibilityBatchResultEntryListSchema = z
  .array(
    ChangeMessageVisibilityBatchResultEntrySchema.and(
      z.any().openapi({ xml: { name: 'ChangeMessageVisibilityBatchResultEntry' } }),
    ),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('ChangeMessageVisibilityBatchResultEntryList')

const BooleanSchema = z.boolean().openapi('Boolean')

const BatchResultErrorEntrySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The <code>Id</code> of an entry in a batch request.' }),
    ),
    SenderFault: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the error happened due to the caller of the batch API action.',
        }),
    ),
    Code: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'An error code representing why the action failed on this entry.',
        }),
    ),
    Message: StringSchema.and(
      z.any().openapi({ description: 'A message explaining why the action failed on this entry.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'SenderFault', 'Code'],
    description:
      'Gives a detailed description of the result of an action on each entry in the request.',
  })
  .openapi('BatchResultErrorEntry')

const BatchResultErrorEntryListSchema = z
  .array(
    BatchResultErrorEntrySchema.and(z.any().openapi({ xml: { name: 'BatchResultErrorEntry' } })),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('BatchResultErrorEntryList')

const ChangeMessageVisibilityBatchResultSchema = z
  .object({
    Successful: ChangeMessageVisibilityBatchResultEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> items.',
        }),
    ),
    Failed: BatchResultErrorEntryListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code> <a>BatchResultErrorEntry</a> </code> items.' }),
    ),
  })
  .openapi({
    required: ['Successful', 'Failed'],
    description:
      'For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.',
  })
  .openapi('ChangeMessageVisibilityBatchResult')

const IntegerSchema = z.int().openapi('Integer')

const ChangeMessageVisibilityBatchRequestEntrySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An identifier for this particular receipt handle used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request.</p> <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p> </note>',
        }),
    ),
    ReceiptHandle: StringSchema.and(z.any().openapi({ description: 'A receipt handle.' })),
    VisibilityTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: "The new value (in seconds) for the message's visibility timeout.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'ReceiptHandle'],
    description:
      'Encloses a receipt handle and an entry ID for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code> ',
  })
  .openapi('ChangeMessageVisibilityBatchRequestEntry')

const TooManyEntriesInBatchRequestSchema = z.any().openapi('TooManyEntriesInBatchRequest')

const EmptyBatchRequestSchema = z.any().openapi('EmptyBatchRequest')

const BatchEntryIdsNotDistinctSchema = z.any().openapi('BatchEntryIdsNotDistinct')

const InvalidBatchEntryIdSchema = z.any().openapi('InvalidBatchEntryId')

const CreateQueueResultSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL of the created Amazon SQS queue.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns the <code>QueueUrl</code> attribute of the created queue.',
    required: [],
  })
  .openapi('CreateQueueResult')

const TagValueSchema = z.string().openapi('TagValue')

const QueueDeletedRecentlySchema = z.any().openapi('QueueDeletedRecently')

const QueueNameExistsSchema = z.any().openapi('QueueNameExists')

const InvalidIdFormatSchema = z.any().openapi('InvalidIdFormat')

const DeleteMessageBatchResultEntrySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'Represents a successfully deleted message.' }),
    ),
  })
  .openapi({
    required: ['Id'],
    description:
      'Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code> ',
  })
  .openapi('DeleteMessageBatchResultEntry')

const DeleteMessageBatchResultEntryListSchema = z
  .array(
    DeleteMessageBatchResultEntrySchema.and(
      z.any().openapi({ xml: { name: 'DeleteMessageBatchResultEntry' } }),
    ),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('DeleteMessageBatchResultEntryList')

const DeleteMessageBatchResultSchema = z
  .object({
    Successful: DeleteMessageBatchResultEntryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code> <a>DeleteMessageBatchResultEntry</a> </code> items.',
        }),
    ),
    Failed: BatchResultErrorEntryListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code> <a>BatchResultErrorEntry</a> </code> items.' }),
    ),
  })
  .openapi({
    required: ['Successful', 'Failed'],
    description:
      "For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.",
  })
  .openapi('DeleteMessageBatchResult')

const DeleteMessageBatchRequestEntrySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for this particular receipt handle. This is used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request.</p> <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p> </note>',
        }),
    ),
    ReceiptHandle: StringSchema.and(z.any().openapi({ description: 'A receipt handle.' })),
  })
  .openapi({
    required: ['Id', 'ReceiptHandle'],
    description: 'Encloses a receipt handle and an identifier for it.',
  })
  .openapi('DeleteMessageBatchRequestEntry')

const QueueAttributeMapSchema = z
  .record(z.string(), StringSchema)
  .openapi({ xml: { wrapped: false } })
  .openapi('QueueAttributeMap')

const GetQueueAttributesResultSchema = z
  .object({
    Attributes: QueueAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Attribute' },
          description: 'A map of attributes to their respective values.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of returned queue attributes.', required: [] })
  .openapi('GetQueueAttributesResult')

const QueueAttributeNameSchema = z
  .enum([
    'All',
    'Policy',
    'VisibilityTimeout',
    'MaximumMessageSize',
    'MessageRetentionPeriod',
    'ApproximateNumberOfMessages',
    'ApproximateNumberOfMessagesNotVisible',
    'CreatedTimestamp',
    'LastModifiedTimestamp',
    'QueueArn',
    'ApproximateNumberOfMessagesDelayed',
    'DelaySeconds',
    'ReceiveMessageWaitTimeSeconds',
    'RedrivePolicy',
    'FifoQueue',
    'ContentBasedDeduplication',
    'KmsMasterKeyId',
    'KmsDataKeyReusePeriodSeconds',
    'DeduplicationScope',
    'FifoThroughputLimit',
    'RedriveAllowPolicy',
    'SqsManagedSseEnabled',
  ])
  .openapi('QueueAttributeName')

const InvalidAttributeNameSchema = z.any().openapi('InvalidAttributeName')

const GetQueueUrlResultSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL of the queue.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon SQS Developer Guide</i>.',
    required: [],
  })
  .openapi('GetQueueUrlResult')

const QueueDoesNotExistSchema = z.any().openapi('QueueDoesNotExist')

const QueueUrlListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'QueueUrl' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('QueueUrlList')

const TokenSchema = z.string().openapi('Token')

const ListDeadLetterSourceQueuesResultSchema = z
  .object({
    queueUrls: QueueUrlListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of source queue URLs that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token to include in the next request. Token value is <code>null</code> if there are no additional results to request, or if you did not set <code>MaxResults</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['queueUrls'], description: 'A list of your dead letter source queues.' })
  .openapi('ListDeadLetterSourceQueuesResult')

const ListMessageMoveTasksResultEntrySchema = z
  .object({
    TaskHandle: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier associated with a message movement task. When this field is returned in the response of the <code>ListMessageMoveTasks</code> action, it is only populated for tasks that are in RUNNING status.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the message movement task. Possible values are: RUNNING, COMPLETED, CANCELLING, CANCELLED, and FAILED.',
        }),
    ).exactOptional(),
    SourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the queue that contains the messages to be moved to another queue.',
        }),
    ).exactOptional(),
    DestinationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the destination queue if it has been specified in the <code>StartMessageMoveTask</code> request. If a <code>DestinationArn</code> has not been specified in the <code>StartMessageMoveTask</code> request, this field value will be NULL.',
        }),
    ).exactOptional(),
    MaxNumberOfMessagesPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of messages to be moved per second (the message movement rate), if it has been specified in the <code>StartMessageMoveTask</code> request. If a <code>MaxNumberOfMessagesPerSecond</code> has not been specified in the <code>StartMessageMoveTask</code> request, this field value will be NULL.',
        }),
    ).exactOptional(),
    ApproximateNumberOfMessagesMoved: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The approximate number of messages already moved to the destination queue.',
        }),
    ).exactOptional(),
    ApproximateNumberOfMessagesToMove: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of messages to be moved from the source queue. This number is obtained at the time of starting the message movement task.',
        }),
    ).exactOptional(),
    FailureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The task failure reason (only included if the task status is FAILED).',
        }),
    ).exactOptional(),
    StartedTimestamp: LongSchema.and(
      z.any().openapi({ description: 'The timestamp of starting the message movement task.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the details of a message movement task. ', required: [] })
  .openapi('ListMessageMoveTasksResultEntry')

const ListMessageMoveTasksResultEntryListSchema = z
  .array(
    ListMessageMoveTasksResultEntrySchema.and(
      z.any().openapi({ xml: { name: 'ListMessageMoveTasksResultEntry' } }),
    ),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('ListMessageMoveTasksResultEntryList')

const ListMessageMoveTasksResultSchema = z
  .object({
    Results: ListMessageMoveTasksResultEntryListSchema.and(
      z.any().openapi({ description: 'A list of message movement tasks and their attributes.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMessageMoveTasksResult')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .openapi({ xml: { wrapped: false } })
  .openapi('TagMap')

const ListQueueTagsResultSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Tag' },
          description: 'The list of all tags added to the specified queue.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListQueueTagsResult')

const ListQueuesResultSchema = z
  .object({
    QueueUrls: QueueUrlListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of queue URLs, up to 1,000 entries, or the value of <code>MaxResults</code> that you sent in the request.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token to include in the next request. Token value is <code>null</code> if there are no additional results to request, or if you did not set <code>MaxResults</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of your queues.', required: [] })
  .openapi('ListQueuesResult')

const PurgeQueueInProgressSchema = z.any().openapi('PurgeQueueInProgress')

const MessageSystemAttributeMapSchema = z
  .record(z.string(), StringSchema)
  .openapi({ xml: { wrapped: false } })
  .openapi('MessageSystemAttributeMap')

const BinarySchema = z.string().openapi('Binary')

const StringListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'StringListValue' } })))
  .openapi('StringList')

const BinaryListSchema = z
  .array(BinarySchema.and(z.any().openapi({ xml: { name: 'BinaryListValue' } })))
  .openapi('BinaryList')

const MessageAttributeValueSchema = z
  .object({
    StringValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Strings are Unicode with UTF-8 binary encoding. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable Characters</a>.',
        }),
    ).exactOptional(),
    BinaryValue: BinarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.',
        }),
    ).exactOptional(),
    StringListValues: StringListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'StringListValue' },
          description: 'Not implemented. Reserved for future use.',
        }),
    ).exactOptional(),
    BinaryListValues: BinaryListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'BinaryListValue' },
          description: 'Not implemented. Reserved for future use.',
        }),
    ).exactOptional(),
    DataType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon SQS supports the following logical data types: <code>String</code>, <code>Number</code>, and <code>Binary</code>. For the <code>Number</code> data type, you must use <code>StringValue</code>.</p> <p>You can also append custom labels. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['DataType'],
    description:
      '<p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KiB or 262,144 bytes).</p>',
    xml: { wrapped: false },
  })
  .openapi('MessageAttributeValue')

const MessageBodyAttributeMapSchema = z
  .record(z.string(), MessageAttributeValueSchema)
  .openapi({ xml: { wrapped: false } })
  .openapi('MessageBodyAttributeMap')

const MessageSchema = z
  .object({
    MessageId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the message. A <code>MessageId</code>is considered unique across all Amazon Web Services accounts for an extended period of time.',
        }),
    ).exactOptional(),
    ReceiptHandle: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier associated with the act of receiving the message. A new receipt handle is returned every time you receive a message. When deleting a message, you provide the last received receipt handle to delete the message.',
        }),
    ).exactOptional(),
    MD5OfBody: StringSchema.and(
      z.any().openapi({ description: 'An MD5 digest of the non-URL-encoded message body string.' }),
    ).exactOptional(),
    Body: StringSchema.and(
      z.any().openapi({ description: "The message's contents (not URL-encoded)." }),
    ).exactOptional(),
    Attributes: MessageSystemAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Attribute' },
          description:
            '<p>A map of the attributes requested in <code> <a>ReceiveMessage</a> </code> to their respective values. Supported attributes:</p> <ul> <li> <p> <code>ApproximateReceiveCount</code> </p> </li> <li> <p> <code>ApproximateFirstReceiveTimestamp</code> </p> </li> <li> <p> <code>MessageDeduplicationId</code> </p> </li> <li> <p> <code>MessageGroupId</code> </p> </li> <li> <p> <code>SenderId</code> </p> </li> <li> <p> <code>SentTimestamp</code> </p> </li> <li> <p> <code>SequenceNumber</code> </p> </li> </ul> <p> <code>ApproximateFirstReceiveTimestamp</code> and <code>SentTimestamp</code> are each returned as an integer representing the <a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds.</p>',
        }),
    ).exactOptional(),
    MD5OfMessageAttributes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.',
        }),
    ).exactOptional(),
    MessageAttributes: MessageBodyAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'MessageAttribute' },
          description:
            'Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS message attributes</a> in the <i>Amazon SQS Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An Amazon SQS message.', required: [] })
  .openapi('Message')

const MessageListSchema = z
  .array(MessageSchema.and(z.any().openapi({ xml: { name: 'Message' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('MessageList')

const ReceiveMessageResultSchema = z
  .object({
    Messages: MessageListSchema.and(
      z.any().openapi({ description: 'A list of messages.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of received messages.', required: [] })
  .openapi('ReceiveMessageResult')

const MessageAttributeNameSchema = z.string().openapi('MessageAttributeName')

const SendMessageResultSchema = z
  .object({
    MD5OfMessageBody: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.',
        }),
    ).exactOptional(),
    MD5OfMessageAttributes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.',
        }),
    ).exactOptional(),
    MD5OfMessageSystemAttributes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An MD5 digest of the non-URL-encoded message system attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest.',
        }),
    ).exactOptional(),
    MessageId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An attribute containing the <code>MessageId</code> of the message sent to the queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>. ',
        }),
    ).exactOptional(),
    SequenceNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The large, non-consecutive number that Amazon SQS assigns to each message.</p> <p>The length of <code>SequenceNumber</code> is 128 bits. <code>SequenceNumber</code> continues to increase for a particular <code>MessageGroupId</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.',
    required: [],
  })
  .openapi('SendMessageResult')

const MessageSystemAttributeValueSchema = z
  .object({
    StringValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Strings are Unicode with UTF-8 binary encoding. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable Characters</a>.',
        }),
    ).exactOptional(),
    BinaryValue: BinarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.',
        }),
    ).exactOptional(),
    StringListValues: StringListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'StringListValue' },
          description: 'Not implemented. Reserved for future use.',
        }),
    ).exactOptional(),
    BinaryListValues: BinaryListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'BinaryListValue' },
          description: 'Not implemented. Reserved for future use.',
        }),
    ).exactOptional(),
    DataType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon SQS supports the following logical data types: <code>String</code>, <code>Number</code>, and <code>Binary</code>. For the <code>Number</code> data type, you must use <code>StringValue</code>.</p> <p>You can also append custom labels. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['DataType'],
    description:
      '<p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p>',
    xml: { wrapped: false },
  })
  .openapi('MessageSystemAttributeValue')

const InvalidMessageContentsSchema = z.any().openapi('InvalidMessageContents')

const SendMessageBatchResultEntrySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'An identifier for the message in this batch.' }),
    ),
    MessageId: StringSchema.and(z.any().openapi({ description: 'An identifier for the message.' })),
    MD5OfMessageBody: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.',
        }),
    ),
    MD5OfMessageAttributes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.',
        }),
    ).exactOptional(),
    MD5OfMessageSystemAttributes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An MD5 digest of the non-URL-encoded message system attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.',
        }),
    ).exactOptional(),
    SequenceNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The large, non-consecutive number that Amazon SQS assigns to each message.</p> <p>The length of <code>SequenceNumber</code> is 128 bits. As <code>SequenceNumber</code> continues to increase for a particular <code>MessageGroupId</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'MessageId', 'MD5OfMessageBody'],
    description:
      'Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code> ',
  })
  .openapi('SendMessageBatchResultEntry')

const SendMessageBatchResultEntryListSchema = z
  .array(
    SendMessageBatchResultEntrySchema.and(
      z.any().openapi({ xml: { name: 'SendMessageBatchResultEntry' } }),
    ),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('SendMessageBatchResultEntryList')

const SendMessageBatchResultSchema = z
  .object({
    Successful: SendMessageBatchResultEntryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code> <a>SendMessageBatchResultEntry</a> </code> items.',
        }),
    ),
    Failed: BatchResultErrorEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of <code> <a>BatchResultErrorEntry</a> </code> items with error details about each message that can't be enqueued.",
        }),
    ),
  })
  .openapi({
    required: ['Successful', 'Failed'],
    description:
      'For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.',
  })
  .openapi('SendMessageBatchResult')

const MessageBodySystemAttributeMapSchema = z
  .record(z.string(), MessageSystemAttributeValueSchema)
  .openapi({ xml: { wrapped: false } })
  .openapi('MessageBodySystemAttributeMap')

const SendMessageBatchRequestEntrySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An identifier for a message in this batch used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request.</p> <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p> </note>',
        }),
    ),
    MessageBody: StringSchema.and(z.any().openapi({ description: 'The body of the message.' })),
    DelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The length of time, in seconds, for which a specific message is delayed. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue is applied. </p> <note> <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p> </note>",
        }),
    ).exactOptional(),
    MessageAttributes: MessageBodyAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'MessageAttribute' },
          description:
            'Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS message attributes</a> in the <i>Amazon SQS Developer Guide</i>.',
        }),
    ).exactOptional(),
    MessageSystemAttributes: MessageBodySystemAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'MessageSystemAttribute' },
          description:
            "<p>The message system attribute to send Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p> <important> <ul> <li> <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>. Its type must be <code>String</code> and its value must be a correctly formatted X-Ray trace header string.</p> </li> <li> <p>The size of a message system attribute doesn't count towards the total size of a message.</p> </li> </ul> </important>",
        }),
    ).exactOptional(),
    MessageDeduplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of messages within a 5-minute minimum deduplication interval. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, subsequent messages with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html\"> Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> <note> <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p> <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p> <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p> </note> <p>The length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</code>).</p> <p>For best practices of using <code>MessageDeduplicationId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html\">Using the MessageDeduplicationId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p>",
        }),
    ).exactOptional(),
    MessageGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.</p> <ul> <li> <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p> </li> <li> <p> <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't specify a <code>MessageGroupId</code>.</p> </li> </ul> <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>For best practices of using <code>MessageGroupId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html\">Using the MessageGroupId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p> <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p> </important>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'MessageBody'],
    description:
      'Contains the details of a single Amazon SQS message along with an <code>Id</code>.',
  })
  .openapi('SendMessageBatchRequestEntry')

const BatchRequestTooLongSchema = z.any().openapi('BatchRequestTooLong')

const StartMessageMoveTaskResultSchema = z
  .object({
    TaskHandle: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier associated with a message movement task. You can use this identifier to cancel a specified message movement task using the <code>CancelMessageMoveTask</code> action.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartMessageMoveTaskResult')

const TagKeySchema = z.string().openapi('TagKey')

const AWSAccountIdListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'AWSAccountId' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('AWSAccountIdList')

const ActionNameListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'ActionName' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('ActionNameList')

const AddPermissionRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue to which permissions are added.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    Label: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identification of the permission you're setting (for example, <code>AliceSendMessage</code>). Maximum 80 characters. Allowed characters include alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).",
        }),
    ),
    AWSAccountIds: AWSAccountIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account numbers of the <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principals</a> who are to receive permission. For information about locating the Amazon Web Services account identification, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html#sqs-api-request-authentication">Your Amazon Web Services Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.',
        }),
    ),
    Actions: ActionNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action the client wants to allow for the specified principal. Valid values: the name of any action or <code>*</code>.</p> <p>For more information about these actions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-overview-of-managing-access.html">Overview of Managing Access Permissions to Your Amazon Simple Queue Service Resource</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>Specifying <code>SendMessage</code>, <code>DeleteMessage</code>, or <code>ChangeMessageVisibility</code> for <code>ActionName.n</code> also grants permissions for the corresponding batch versions of those actions: <code>SendMessageBatch</code>, <code>DeleteMessageBatch</code>, and <code>ChangeMessageVisibilityBatch</code>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['QueueUrl', 'Label', 'AWSAccountIds', 'Actions'],
    title: 'AddPermissionRequest',
    description: '<p/>',
  })
  .openapi('AddPermissionRequest')

const AttributeNameListSchema = z
  .array(QueueAttributeNameSchema.and(z.any().openapi({ xml: { name: 'AttributeName' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('AttributeNameList')

const BoxedIntegerSchema = z.int().openapi('BoxedInteger')

const CancelMessageMoveTaskRequestSchema = z
  .object({
    TaskHandle: StringSchema.and(
      z.any().openapi({ description: 'An identifier associated with a message movement task.' }),
    ),
  })
  .openapi({ required: ['TaskHandle'], title: 'CancelMessageMoveTaskRequest' })
  .openapi('CancelMessageMoveTaskRequest')

const ChangeMessageVisibilityBatchRequestEntryListSchema = z
  .array(
    ChangeMessageVisibilityBatchRequestEntrySchema.and(
      z.any().openapi({ xml: { name: 'ChangeMessageVisibilityBatchRequestEntry' } }),
    ),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('ChangeMessageVisibilityBatchRequestEntryList')

const ChangeMessageVisibilityBatchRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The URL of the Amazon SQS queue whose messages' visibility is changed.</p> <p>Queue URLs and names are case-sensitive.</p>",
        }),
    ),
    Entries: ChangeMessageVisibilityBatchRequestEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the receipt handles of the messages for which the visibility timeout must be changed.',
        }),
    ),
  })
  .openapi({
    required: ['QueueUrl', 'Entries'],
    title: 'ChangeMessageVisibilityBatchRequest',
    description: '<p/>',
  })
  .openapi('ChangeMessageVisibilityBatchRequest')

const ChangeMessageVisibilityRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The URL of the Amazon SQS queue whose message's visibility is changed.</p> <p>Queue URLs and names are case-sensitive.</p>",
        }),
    ),
    ReceiptHandle: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The receipt handle associated with the message, whose visibility timeout is changed. This parameter is returned by the <code> <a>ReceiveMessage</a> </code> action.',
        }),
    ),
    VisibilityTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The new value for the message's visibility timeout (in seconds). Values range: <code>0</code> to <code>43200</code>. Maximum: 12 hours.",
        }),
    ),
  })
  .openapi({
    required: ['QueueUrl', 'ReceiptHandle', 'VisibilityTimeout'],
    title: 'ChangeMessageVisibilityRequest',
  })
  .openapi('ChangeMessageVisibilityRequest')

const CreateQueueRequestSchema = z
  .object({
    QueueName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the new queue. The following limits apply to this name:</p> <ul> <li> <p>A queue name can have up to 80 characters.</p> </li> <li> <p>Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> </li> <li> <p>A FIFO queue name must end with the <code>.fifo</code> suffix.</p> </li> </ul> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    Attributes: QueueAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Attribute' },
          description:
            '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateQueue</code> action uses:</p> <ul> <li> <p> <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0. </p> </li> <li> <p> <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). </p> </li> <li> <p> <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days). When you change a queue\'s attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – The queue\'s policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code> <a>ReceiveMessage</a> </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. </p> </li> <li> <p> <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. While the alias of the Amazon Web Services managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i> </code>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a> </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>FifoQueue</code> – Designates a queue as FIFO. Valid values are <code>true</code> and <code>false</code>. If you don\'t specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue. You can provide this attribute only during queue creation. You can\'t change it for an existing queue. When you set this attribute, you must also provide the <code>MessageGroupId</code> for your messages explicitly.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication. Valid values are <code>true</code> and <code>false</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. Note the following: </p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren\'t able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don\'t provide a <code>MessageDeduplicationId</code> and the queue doesn\'t have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Tag' },
          description:
            '<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn\'t recommended.</p> </li> <li> <p>Tags don\'t have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>To be able to tag a queue on creation, you must have the <code>sqs:CreateQueue</code> and <code>sqs:TagQueue</code> permissions.</p> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueueName'], title: 'CreateQueueRequest', description: '<p/>' })
  .openapi('CreateQueueRequest')

const DeleteMessageBatchRequestEntryListSchema = z
  .array(
    DeleteMessageBatchRequestEntrySchema.and(
      z.any().openapi({ xml: { name: 'DeleteMessageBatchRequestEntry' } }),
    ),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('DeleteMessageBatchRequestEntryList')

const DeleteMessageBatchRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue from which messages are deleted.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    Entries: DeleteMessageBatchRequestEntryListSchema.and(
      z.any().openapi({ description: 'Lists the receipt handles for the messages to be deleted.' }),
    ),
  })
  .openapi({
    required: ['QueueUrl', 'Entries'],
    title: 'DeleteMessageBatchRequest',
    description: '<p/>',
  })
  .openapi('DeleteMessageBatchRequest')

const DeleteMessageRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue from which messages are deleted.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    ReceiptHandle: StringSchema.and(
      z.any().openapi({ description: 'The receipt handle associated with the message to delete.' }),
    ),
  })
  .openapi({
    required: ['QueueUrl', 'ReceiptHandle'],
    title: 'DeleteMessageRequest',
    description: '<p/>',
  })
  .openapi('DeleteMessageRequest')

const DeleteQueueRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue to delete.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
  })
  .openapi({ required: ['QueueUrl'], title: 'DeleteQueueRequest', description: '<p/>' })
  .openapi('DeleteQueueRequest')

const GetQueueAttributesRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue whose attribute information is retrieved.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    AttributeNames: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of attributes for which to retrieve information.</p> <p>The <code>AttributeNames</code> parameter is optional, but if you don\'t specify values for this parameter, the request returns empty results.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note> <p>The following attributes are supported:</p> <important> <p>The <code>ApproximateNumberOfMessagesDelayed</code>, <code>ApproximateNumberOfMessagesNotVisible</code>, and <code>ApproximateNumberOfMessages</code> metrics may not achieve consistency until at least 1 minute after the producers stop sending messages. This period is required for the queue metadata to reach eventual consistency. </p> </important> <ul> <li> <p> <code>All</code> – Returns all values. </p> </li> <li> <p> <code>ApproximateNumberOfMessages</code> – Returns the approximate number of messages available for retrieval from the queue.</p> </li> <li> <p> <code>ApproximateNumberOfMessagesDelayed</code> – Returns the approximate number of messages in the queue that are delayed and not available for reading immediately. This can happen when the queue is configured as a delay queue or when a message has been sent with a delay parameter.</p> </li> <li> <p> <code>ApproximateNumberOfMessagesNotVisible</code> – Returns the approximate number of messages that are in flight. Messages are considered to be <i>in flight</i> if they have been sent to a client but have not yet been deleted or have not yet reached the end of their visibility window. </p> </li> <li> <p> <code>CreatedTimestamp</code> – Returns the time when the queue was created in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a>).</p> </li> <li> <p> <code>DelaySeconds</code> – Returns the default delay on the queue in seconds.</p> </li> <li> <p> <code>LastModifiedTimestamp</code> – Returns the time when the queue was last changed in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a>).</p> </li> <li> <p> <code>MaximumMessageSize</code> – Returns the limit of how many bytes a message can contain before Amazon SQS rejects it.</p> </li> <li> <p> <code>MessageRetentionPeriod</code> – Returns the length of time, in seconds, for which Amazon SQS retains a message. When you change a queue\'s attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – Returns the policy of the queue.</p> </li> <li> <p> <code>QueueArn</code> – Returns the Amazon resource name (ARN) of the queue.</p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – Returns the length of time, in seconds, for which the <code>ReceiveMessage</code> action waits for a message to arrive. </p> </li> <li> <p> <code>VisibilityTimeout</code> – Returns the visibility timeout for the queue. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – Returns the ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – Returns the length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>. </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Returns information about whether the queue is using SSE-SQS encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>FifoQueue</code> – Returns information about whether the queue is FIFO. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note> </li> <li> <p> <code>ContentBasedDeduplication</code> – Returns whether content-based deduplication is enabled for the queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueueUrl'], title: 'GetQueueAttributesRequest', description: '<p/>' })
  .openapi('GetQueueAttributesRequest')

const GetQueueUrlRequestSchema = z
  .object({
    QueueName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the queue whose URL must be fetched. Maximum 80 characters. Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    QueueOwnerAWSAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account ID of the account that created the queue.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueueName'], title: 'GetQueueUrlRequest', description: '<p/>' })
  .openapi('GetQueueUrlRequest')

const ListDeadLetterSourceQueuesRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of a dead-letter queue.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'Pagination token to request the next set of results.' }),
    ).exactOptional(),
    MaxResults: BoxedIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['QueueUrl'],
    title: 'ListDeadLetterSourceQueuesRequest',
    description: '<p/>',
  })
  .openapi('ListDeadLetterSourceQueuesRequest')

const ListMessageMoveTasksRequestSchema = z
  .object({
    SourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the queue whose message movement tasks are to be listed.',
        }),
    ),
    MaxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to include in the response. The default is 1, which provides the most recent message movement task. The upper limit is 10.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceArn'], title: 'ListMessageMoveTasksRequest' })
  .openapi('ListMessageMoveTasksRequest')

const ListQueueTagsRequestSchema = z
  .object({ QueueUrl: StringSchema.and(z.any().openapi({ description: 'The URL of the queue.' })) })
  .openapi({ required: ['QueueUrl'], title: 'ListQueueTagsRequest' })
  .openapi('ListQueueTagsRequest')

const ListQueuesRequestSchema = z
  .object({
    QueueNamePrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'Pagination token to request the next set of results.' }),
    ).exactOptional(),
    MaxResults: BoxedIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListQueuesRequest', description: '<p/>', required: [] })
  .openapi('ListQueuesRequest')

const MessageAttributeNameListSchema = z
  .array(MessageAttributeNameSchema.and(z.any().openapi({ xml: { name: 'MessageAttributeName' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('MessageAttributeNameList')

const MessageSystemAttributeNameSchema = z
  .enum([
    'SenderId',
    'SentTimestamp',
    'ApproximateReceiveCount',
    'ApproximateFirstReceiveTimestamp',
    'SequenceNumber',
    'MessageDeduplicationId',
    'MessageGroupId',
    'AWSTraceHeader',
    'DeadLetterQueueSourceArn',
  ])
  .openapi('MessageSystemAttributeName')

const MessageSystemAttributeNameForSendsSchema = z
  .literal('AWSTraceHeader')
  .openapi('MessageSystemAttributeNameForSends')

const PurgeQueueRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the queue from which the <code>PurgeQueue</code> action deletes messages.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
  })
  .openapi({ required: ['QueueUrl'], title: 'PurgeQueueRequest', description: '<p/>' })
  .openapi('PurgeQueueRequest')

const ReceiveMessageRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue from which messages are received.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    AttributeNames: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of attributes that need to be returned along with each message. These attributes include:</p> <ul> <li> <p> <code>All</code> – Returns all values.</p> </li> <li> <p> <code>ApproximateFirstReceiveTimestamp</code> – Returns the time the message was first received from the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p> </li> <li> <p> <code>ApproximateReceiveCount</code> – Returns the number of times a message has been received across all queues but not deleted.</p> </li> <li> <p> <code>AWSTraceHeader</code> – Returns the X-Ray trace header string. </p> </li> <li> <p> <code>SenderId</code> </p> <ul> <li> <p>For a user, returns the user ID, for example <code>ABCDEFGHI1JKLMNOPQ23R</code>.</p> </li> <li> <p>For an IAM role, returns the IAM role ID, for example <code>ABCDE1F2GH3I4JK5LMNOP:i-a123b456</code>.</p> </li> </ul> </li> <li> <p> <code>SentTimestamp</code> – Returns the time the message was sent to the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> <li> <p> <code>MessageDeduplicationId</code> – Returns the value provided by the producer that calls the <code> <a>SendMessage</a> </code> action.</p> </li> <li> <p> <code>MessageGroupId</code> – Returns the value provided by the producer that calls the <code> <a>SendMessage</a> </code> action. Messages with the same <code>MessageGroupId</code> are returned in sequence.</p> </li> <li> <p> <code>SequenceNumber</code> – Returns the value provided by Amazon SQS.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MessageAttributeNames: MessageAttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the message attribute, where <i>N</i> is the index.</p> <ul> <li> <p>The name can contain alphanumeric characters and the underscore (<code>_</code>), hyphen (<code>-</code>), and period (<code>.</code>).</p> </li> <li> <p>The name is case-sensitive and must be unique among all attribute names for the message.</p> </li> <li> <p>The name must not start with AWS-reserved prefixes such as <code>AWS.</code> or <code>Amazon.</code> (or any casing variants).</p> </li> <li> <p>The name must not start or end with a period (<code>.</code>), and it should not have periods in succession (<code>..</code>).</p> </li> <li> <p>The name can be up to 256 characters long.</p> </li> </ul> <p>When using <code>ReceiveMessage</code>, you can send a list of attribute names to receive, or you can return all of the attributes by specifying <code>All</code> or <code>.*</code> in your request. You can also use all message attributes starting with a prefix, for example <code>bar.*</code>.</p>',
        }),
    ).exactOptional(),
    MaxNumberOfMessages: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of messages to return. Amazon SQS never returns more messages than this value (however, fewer messages might be returned). Valid values: 1 to 10. Default: 1.',
        }),
    ).exactOptional(),
    VisibilityTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a <code>ReceiveMessage</code> request.',
        }),
    ).exactOptional(),
    WaitTimeSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the call returns successfully with an empty list of messages.</p> <important> <p>To avoid HTTP errors, ensure that the HTTP response timeout for <code>ReceiveMessage</code> requests is longer than the <code>WaitTimeSeconds</code> parameter. For example, with the Java SDK, you can set HTTP transport settings using the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/nio/netty/NettyNioAsyncHttpClient.html"> NettyNioAsyncHttpClient</a> for asynchronous clients, or the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/apache/ApacheHttpClient.html"> ApacheHttpClient</a> for synchronous clients. </p> </important>',
        }),
    ).exactOptional(),
    ReceiveRequestAttemptId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of <code>ReceiveMessage</code> calls. If a networking issue occurs after a <code>ReceiveMessage</code> action, and instead of a response you receive a generic error, it is possible to retry the same action with an identical <code>ReceiveRequestAttemptId</code> to retrieve the same set of messages, even if their visibility timeout has not yet expired.</p> <ul> <li> <p>You can use <code>ReceiveRequestAttemptId</code> only for 5 minutes after a <code>ReceiveMessage</code> action.</p> </li> <li> <p>When you set <code>FifoQueue</code>, a caller of the <code>ReceiveMessage</code> action can provide a <code>ReceiveRequestAttemptId</code> explicitly.</p> </li> <li> <p>If a caller of the <code>ReceiveMessage</code> action doesn\'t provide a <code>ReceiveRequestAttemptId</code>, Amazon SQS generates a <code>ReceiveRequestAttemptId</code>.</p> </li> <li> <p>It is possible to retry the <code>ReceiveMessage</code> action with the same <code>ReceiveRequestAttemptId</code> if none of the messages have been modified (deleted or had their visibility changes).</p> </li> <li> <p>During a visibility timeout, subsequent calls with the same <code>ReceiveRequestAttemptId</code> return the same messages and receipt handles. If a retry occurs within the deduplication interval, it resets the visibility timeout. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p>If a caller of the <code>ReceiveMessage</code> action still processes messages when the visibility timeout expires and messages become visible, another worker consuming from the same queue can receive the same messages and therefore process duplicates. Also, if a consumer whose message processing time is longer than the visibility timeout tries to delete the processed messages, the action fails with an error.</p> <p>To mitigate this effect, ensure that your application observes a safe threshold before the visibility timeout expires and extend the visibility timeout as necessary.</p> </important> </li> <li> <p>While messages with a particular <code>MessageGroupId</code> are invisible, no more messages belonging to the same <code>MessageGroupId</code> are returned until the visibility timeout expires. You can still receive messages with another <code>MessageGroupId</code> as long as it is also visible.</p> </li> <li> <p>If a caller of <code>ReceiveMessage</code> can\'t track the <code>ReceiveRequestAttemptId</code>, no retries work until the original visibility timeout expires. As a result, delays might occur but the messages in the queue remain in a strict order.</p> </li> </ul> <p>The maximum length of <code>ReceiveRequestAttemptId</code> is 128 characters. <code>ReceiveRequestAttemptId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!"#$%&amp;\'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</code>).</p> <p>For best practices of using <code>ReceiveRequestAttemptId</code>, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-receiverequestattemptid-request-parameter.html">Using the ReceiveRequestAttemptId Request Parameter</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueueUrl'], title: 'ReceiveMessageRequest', description: '<p/>' })
  .openapi('ReceiveMessageRequest')

const RemovePermissionRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue from which permissions are removed.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    Label: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identification of the permission to remove. This is the label added using the <code> <a>AddPermission</a> </code> action.',
        }),
    ),
  })
  .openapi({
    required: ['QueueUrl', 'Label'],
    title: 'RemovePermissionRequest',
    description: '<p/>',
  })
  .openapi('RemovePermissionRequest')

const SendMessageBatchRequestEntryListSchema = z
  .array(
    SendMessageBatchRequestEntrySchema.and(
      z.any().openapi({ xml: { name: 'SendMessageBatchRequestEntry' } }),
    ),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('SendMessageBatchRequestEntryList')

const SendMessageBatchRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue to which batched messages are sent.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    Entries: SendMessageBatchRequestEntryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code> <a>SendMessageBatchRequestEntry</a> </code> items.',
        }),
    ),
  })
  .openapi({
    required: ['QueueUrl', 'Entries'],
    title: 'SendMessageBatchRequest',
    description: '<p/>',
  })
  .openapi('SendMessageBatchRequest')

const SendMessageRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue to which a message is sent.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    MessageBody: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The message to send. The minimum size is one character. The maximum size is 256 KiB.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>',
        }),
    ),
    DelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue applies. </p> <note> <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p> </note>",
        }),
    ).exactOptional(),
    MessageAttributes: MessageBodyAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'MessageAttribute' },
          description:
            'Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS message attributes</a> in the <i>Amazon SQS Developer Guide</i>.',
        }),
    ).exactOptional(),
    MessageSystemAttributes: MessageBodySystemAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'MessageSystemAttribute' },
          description:
            "<p>The message system attribute to send. Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p> <important> <ul> <li> <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>. Its type must be <code>String</code> and its value must be a correctly formatted X-Ray trace header string.</p> </li> <li> <p>The size of a message system attribute doesn't count towards the total size of a message.</p> </li> </ul> </important>",
        }),
    ).exactOptional(),
    MessageDeduplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any messages sent with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered during the 5-minute deduplication interval. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html\"> Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> <note> <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p> <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p> <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p> </note> <p>The maximum length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</code>).</p> <p>For best practices of using <code>MessageDeduplicationId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html\">Using the MessageDeduplicationId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p>",
        }),
    ).exactOptional(),
    MessageGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.</p> <ul> <li> <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p> </li> <li> <p> <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't specify a <code>MessageGroupId</code>.</p> </li> </ul> <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>For best practices of using <code>MessageGroupId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html\">Using the MessageGroupId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p> <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p> </important>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['QueueUrl', 'MessageBody'],
    title: 'SendMessageRequest',
    description: '<p/>',
  })
  .openapi('SendMessageRequest')

const SetQueueAttributesRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon SQS queue whose attributes are set.</p> <p>Queue URLs and names are case-sensitive.</p>',
        }),
    ),
    Attributes: QueueAttributeMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Attribute' },
          description:
            '<p>A map of attributes to set.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetQueueAttributes</code> action uses:</p> <ul> <li> <p> <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0. </p> </li> <li> <p> <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) up to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). </p> </li> <li> <p> <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer representing seconds, from 60 (1 minute) to 1,209,600 (14 days). Default: 345,600 (4 days). When you change a queue\'s attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – The queue\'s policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>Identity and Access Management User Guide</i>. </p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code> <a>ReceiveMessage</a> </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. </p> </li> <li> <p> <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. While the alias of the AWS-managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i> </code>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>. </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. Note the following: </p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren\'t able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don\'t provide a <code>MessageDeduplicationId</code> and the queue doesn\'t have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['QueueUrl', 'Attributes'],
    title: 'SetQueueAttributesRequest',
    description: '<p/>',
  })
  .openapi('SetQueueAttributesRequest')

const StartMessageMoveTaskRequestSchema = z
  .object({
    SourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the queue that contains the messages to be moved to another queue. Currently, only ARNs of dead-letter queues (DLQs) whose sources are other Amazon SQS queues are accepted. DLQs whose sources are non-SQS queues, such as Lambda or Amazon SNS topics, are not currently supported.',
        }),
    ),
    DestinationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the queue that receives the moved messages. You can use this field to specify the destination queue where you would like to redrive messages. If this field is left blank, the messages will be redriven back to their respective original source queues.',
        }),
    ).exactOptional(),
    MaxNumberOfMessagesPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of messages to be moved per second (the message movement rate). You can use this field to define a fixed message movement rate. The maximum value for messages per second is 500. If this field is left blank, the system will optimize the rate based on the queue message backlog size, which may vary throughout the duration of the message movement task.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceArn'], title: 'StartMessageMoveTaskRequest' })
  .openapi('StartMessageMoveTaskRequest')

const TagKeyListSchema = z
  .array(TagKeySchema.and(z.any().openapi({ xml: { name: 'TagKey' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('TagKeyList')

const TagQueueRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(z.any().openapi({ description: 'The URL of the queue.' })),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'The list of tags to be added to the specified queue.' }),
    ),
  })
  .openapi({ required: ['QueueUrl', 'Tags'], title: 'TagQueueRequest' })
  .openapi('TagQueueRequest')

const UntagQueueRequestSchema = z
  .object({
    QueueUrl: StringSchema.and(z.any().openapi({ description: 'The URL of the queue.' })),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The list of tags to be removed from the specified queue.' }),
    ),
  })
  .openapi({ required: ['QueueUrl', 'TagKeys'], title: 'UntagQueueRequest' })
  .openapi('UntagQueueRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getAccountNumberQueueNameActionAddPermissionRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=AddPermission',
  description:
    '<p>Adds a permission to a queue for a specific <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of seven actions per statement.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> <li> <p>Amazon SQS <code>AddPermission</code> does not support adding a non-account principal.</p> </li> </ul> </note> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'GET_AddPermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Label: z
        .string()
        .openapi({
          param: {
            name: 'Label',
            in: 'query',
            required: true,
            description:
              "The unique identification of the permission you're setting (for example, <code>AliceSendMessage</code>). Maximum 80 characters. Allowed characters include alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).",
            schema: { type: 'string' },
          },
        }),
      AWSAccountIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'AWSAccountId' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'AWSAccountIds',
            in: 'query',
            required: true,
            description:
              'The Amazon Web Services account numbers of the <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principals</a> who are to receive permission. For information about locating the Amazon Web Services account identification, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html#sqs-api-request-authentication">Your Amazon Web Services Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/String' }, { xml: { name: 'AWSAccountId' } }],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      Actions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'ActionName' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'Actions',
            in: 'query',
            required: true,
            description:
              '<p>The action the client wants to allow for the specified principal. Valid values: the name of any action or <code>*</code>.</p> <p>For more information about these actions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-overview-of-managing-access.html">Overview of Managing Access Permissions to Your Amazon Simple Queue Service Resource</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>Specifying <code>SendMessage</code>, <code>DeleteMessage</code>, or <code>ChangeMessageVisibility</code> for <code>ActionName.n</code> also grants permissions for the corresponding batch versions of those actions: <code>SendMessageBatch</code>, <code>DeleteMessageBatch</code>, and <code>ChangeMessageVisibilityBatch</code>.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/String' }, { xml: { name: 'ActionName' } }],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      Action: z
        .literal('AddPermission')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddPermission'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: { description: 'OverLimit', content: { 'text/xml': { schema: OverLimitSchema } } },
  },
})

export const postActionAddPermissionRoute = createRoute({
  method: 'post',
  path: '/#Action=AddPermission',
  description:
    '<p>Adds a permission to a queue for a specific <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of seven actions per statement.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> <li> <p>Amazon SQS <code>AddPermission</code> does not support adding a non-account principal.</p> </li> </ul> </note> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'POST_AddPermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('AddPermission')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddPermission'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddPermissionRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: { description: 'OverLimit', content: { 'text/xml': { schema: OverLimitSchema } } },
  },
})

export const getActionCancelMessageMoveTaskRoute = createRoute({
  method: 'get',
  path: '/#Action=CancelMessageMoveTask',
  description:
    '<p>Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>',
  operationId: 'GET_CancelMessageMoveTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TaskHandle: z
        .string()
        .openapi({
          param: {
            name: 'TaskHandle',
            in: 'query',
            required: true,
            description: 'An identifier associated with a message movement task.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('CancelMessageMoveTask')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CancelMessageMoveTask'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CancelMessageMoveTaskResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const postActionCancelMessageMoveTaskRoute = createRoute({
  method: 'post',
  path: '/#Action=CancelMessageMoveTask',
  description:
    '<p>Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>',
  operationId: 'POST_CancelMessageMoveTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('CancelMessageMoveTask')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CancelMessageMoveTask'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CancelMessageMoveTaskRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CancelMessageMoveTaskResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionChangeMessageVisibilityRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=ChangeMessageVisibility',
  description:
    '<p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call with <code>VisibilityTimeout</code> set to 10 seconds, the 10 seconds begin to count from the time that you make the <code>ChangeMessageVisibility</code> call. Thus, any attempt to change the visibility timeout or to delete that message 10 seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of in flight messages.</p> <p>Limits that apply to in flight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they\'re processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn\'t automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn\'t saved in memory for that message. If you don\'t delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>',
  operationId: 'GET_ChangeMessageVisibility',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ReceiptHandle: z
        .string()
        .openapi({
          param: {
            name: 'ReceiptHandle',
            in: 'query',
            required: true,
            description:
              'The receipt handle associated with the message, whose visibility timeout is changed. This parameter is returned by the <code> <a>ReceiveMessage</a> </code> action.',
            schema: { type: 'string' },
          },
        }),
      VisibilityTimeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'VisibilityTimeout',
            in: 'query',
            required: true,
            description:
              "The new value for the message's visibility timeout (in seconds). Values range: <code>0</code> to <code>43200</code>. Maximum: 12 hours.",
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('ChangeMessageVisibility')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ChangeMessageVisibility'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'MessageNotInflight',
      content: { 'text/xml': { schema: MessageNotInflightSchema } },
    },
    481: {
      description: 'ReceiptHandleIsInvalid',
      content: { 'text/xml': { schema: ReceiptHandleIsInvalidSchema } },
    },
  },
})

export const postActionChangeMessageVisibilityRoute = createRoute({
  method: 'post',
  path: '/#Action=ChangeMessageVisibility',
  description:
    '<p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call with <code>VisibilityTimeout</code> set to 10 seconds, the 10 seconds begin to count from the time that you make the <code>ChangeMessageVisibility</code> call. Thus, any attempt to change the visibility timeout or to delete that message 10 seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of in flight messages.</p> <p>Limits that apply to in flight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they\'re processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn\'t automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn\'t saved in memory for that message. If you don\'t delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>',
  operationId: 'POST_ChangeMessageVisibility',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ChangeMessageVisibility')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ChangeMessageVisibility'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ChangeMessageVisibilityRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'MessageNotInflight',
      content: { 'text/xml': { schema: MessageNotInflightSchema } },
    },
    481: {
      description: 'ReceiptHandleIsInvalid',
      content: { 'text/xml': { schema: ReceiptHandleIsInvalidSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionChangeMessageVisibilityBatchRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=ChangeMessageVisibilityBatch',
  description:
    '<p>Changes the visibility timeout of multiple messages. This is a batch version of <code> <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response. You can send up to 10 <code> <a>ChangeMessageVisibility</a> </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>',
  operationId: 'GET_ChangeMessageVisibilityBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Entries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Id: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>An identifier for this particular receipt handle used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request.</p> <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p> </note>',
                    }),
                ),
                ReceiptHandle: StringSchema.and(
                  z.any().openapi({ description: 'A receipt handle.' }),
                ),
                VisibilityTimeout: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    IntegerSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The new value (in seconds) for the message's visibility timeout.",
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                required: ['Id', 'ReceiptHandle'],
                description:
                  'Encloses a receipt handle and an entry ID for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code> ',
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'ChangeMessageVisibilityBatchRequestEntry' } }),
              ),
          ),
        )
        .openapi({
          param: {
            name: 'Entries',
            in: 'query',
            required: true,
            description:
              'Lists the receipt handles of the messages for which the visibility timeout must be changed.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    required: ['Id', 'ReceiptHandle'],
                    properties: {
                      Id: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            description:
                              '<p>An identifier for this particular receipt handle used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request.</p> <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p> </note>',
                          },
                        ],
                      },
                      ReceiptHandle: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'A receipt handle.' },
                        ],
                      },
                      VisibilityTimeout: {
                        allOf: [
                          { $ref: '#/components/schemas/Integer' },
                          {
                            description:
                              "The new value (in seconds) for the message's visibility timeout.",
                          },
                        ],
                      },
                    },
                    description:
                      'Encloses a receipt handle and an entry ID for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code> ',
                  },
                  { xml: { name: 'ChangeMessageVisibilityBatchRequestEntry' } },
                ],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      Action: z
        .literal('ChangeMessageVisibilityBatch')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ChangeMessageVisibilityBatch'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ChangeMessageVisibilityBatchResultSchema } },
    },
    480: {
      description: 'TooManyEntriesInBatchRequest',
      content: { 'text/xml': { schema: TooManyEntriesInBatchRequestSchema } },
    },
    481: {
      description: 'EmptyBatchRequest',
      content: { 'text/xml': { schema: EmptyBatchRequestSchema } },
    },
    482: {
      description: 'BatchEntryIdsNotDistinct',
      content: { 'text/xml': { schema: BatchEntryIdsNotDistinctSchema } },
    },
    483: {
      description: 'InvalidBatchEntryId',
      content: { 'text/xml': { schema: InvalidBatchEntryIdSchema } },
    },
  },
})

export const postActionChangeMessageVisibilityBatchRoute = createRoute({
  method: 'post',
  path: '/#Action=ChangeMessageVisibilityBatch',
  description:
    '<p>Changes the visibility timeout of multiple messages. This is a batch version of <code> <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response. You can send up to 10 <code> <a>ChangeMessageVisibility</a> </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>',
  operationId: 'POST_ChangeMessageVisibilityBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ChangeMessageVisibilityBatch')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ChangeMessageVisibilityBatch'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ChangeMessageVisibilityBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ChangeMessageVisibilityBatchResultSchema } },
    },
    480: {
      description: 'TooManyEntriesInBatchRequest',
      content: { 'text/xml': { schema: TooManyEntriesInBatchRequestSchema } },
    },
    481: {
      description: 'EmptyBatchRequest',
      content: { 'text/xml': { schema: EmptyBatchRequestSchema } },
    },
    482: {
      description: 'BatchEntryIdsNotDistinct',
      content: { 'text/xml': { schema: BatchEntryIdsNotDistinctSchema } },
    },
    483: {
      description: 'InvalidBatchEntryId',
      content: { 'text/xml': { schema: InvalidBatchEntryIdSchema } },
    },
  },
})

export const getActionCreateQueueRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateQueue',
  description:
    "<p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving\">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html\">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>",
  operationId: 'GET_CreateQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['Attribute', 'Tag']
        const taken: string[] = ['QueueName', 'Action', 'Version']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          QueueName: z
            .string()
            .openapi({
              param: {
                name: 'QueueName',
                in: 'query',
                required: true,
                description:
                  '<p>The name of the new queue. The following limits apply to this name:</p> <ul> <li> <p>A queue name can have up to 80 characters.</p> </li> <li> <p>Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> </li> <li> <p>A FIFO queue name must end with the <code>.fifo</code> suffix.</p> </li> </ul> <p>Queue URLs and names are case-sensitive.</p>',
                schema: { type: 'string' },
              },
            }),
          Attribute: z
            .record(z.string(), StringSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'Attribute',
                in: 'query',
                required: false,
                description:
                  '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateQueue</code> action uses:</p> <ul> <li> <p> <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0. </p> </li> <li> <p> <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). </p> </li> <li> <p> <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days). When you change a queue\'s attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – The queue\'s policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code> <a>ReceiveMessage</a> </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. </p> </li> <li> <p> <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. While the alias of the Amazon Web Services managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i> </code>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a> </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>FifoQueue</code> – Designates a queue as FIFO. Valid values are <code>true</code> and <code>false</code>. If you don\'t specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue. You can provide this attribute only during queue creation. You can\'t change it for an existing queue. When you set this attribute, you must also provide the <code>MessageGroupId</code> for your messages explicitly.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication. Valid values are <code>true</code> and <code>false</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. Note the following: </p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren\'t able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don\'t provide a <code>MessageDeduplicationId</code> and the queue doesn\'t have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                  xml: { wrapped: false },
                },
              },
              xml: { wrapped: false },
            }),
          Tag: z
            .record(z.string(), TagValueSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'Tag',
                in: 'query',
                required: false,
                description:
                  '<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn\'t recommended.</p> </li> <li> <p>Tags don\'t have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>To be able to tag a queue on creation, you must have the <code>sqs:CreateQueue</code> and <code>sqs:TagQueue</code> permissions.</p> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/TagValue' },
                  xml: { wrapped: false },
                },
              },
              xml: { wrapped: false },
            }),
          Action: z
            .literal('CreateQueue')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateQueue'] },
              },
            }),
          Version: z
            .literal('2012-11-05')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2012-11-05'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateQueueResultSchema } } },
    480: {
      description: 'QueueDeletedRecently',
      content: { 'text/xml': { schema: QueueDeletedRecentlySchema } },
    },
    481: {
      description: 'QueueNameExists',
      content: { 'text/xml': { schema: QueueNameExistsSchema } },
    },
  },
})

export const postActionCreateQueueRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateQueue',
  description:
    "<p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving\">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html\">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>",
  operationId: 'POST_CreateQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('CreateQueue')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateQueue'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateQueueRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateQueueResultSchema } } },
    480: {
      description: 'QueueDeletedRecently',
      content: { 'text/xml': { schema: QueueDeletedRecentlySchema } },
    },
    481: {
      description: 'QueueNameExists',
      content: { 'text/xml': { schema: QueueNameExistsSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionDeleteMessageRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=DeleteMessage',
  description:
    '<p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message will not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>',
  operationId: 'GET_DeleteMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ReceiptHandle: z
        .string()
        .openapi({
          param: {
            name: 'ReceiptHandle',
            in: 'query',
            required: true,
            description: 'The receipt handle associated with the message to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteMessage')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteMessage'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidIdFormat',
      content: { 'text/xml': { schema: InvalidIdFormatSchema } },
    },
    481: {
      description: 'ReceiptHandleIsInvalid',
      content: { 'text/xml': { schema: ReceiptHandleIsInvalidSchema } },
    },
  },
})

export const postActionDeleteMessageRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteMessage',
  description:
    '<p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message will not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>',
  operationId: 'POST_DeleteMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteMessage')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteMessage'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteMessageRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidIdFormat',
      content: { 'text/xml': { schema: InvalidIdFormatSchema } },
    },
    481: {
      description: 'ReceiptHandleIsInvalid',
      content: { 'text/xml': { schema: ReceiptHandleIsInvalidSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionDeleteMessageBatchRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=DeleteMessageBatch',
  description:
    '<p>Deletes up to ten messages from the specified queue. This is a batch version of <code> <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>',
  operationId: 'GET_DeleteMessageBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Entries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            DeleteMessageBatchRequestEntrySchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'DeleteMessageBatchRequestEntry' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'Entries',
            in: 'query',
            required: true,
            description: 'Lists the receipt handles for the messages to be deleted.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/DeleteMessageBatchRequestEntry' },
                  { xml: { name: 'DeleteMessageBatchRequestEntry' } },
                ],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      Action: z
        .literal('DeleteMessageBatch')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteMessageBatch'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteMessageBatchResultSchema } },
    },
    480: {
      description: 'TooManyEntriesInBatchRequest',
      content: { 'text/xml': { schema: TooManyEntriesInBatchRequestSchema } },
    },
    481: {
      description: 'EmptyBatchRequest',
      content: { 'text/xml': { schema: EmptyBatchRequestSchema } },
    },
    482: {
      description: 'BatchEntryIdsNotDistinct',
      content: { 'text/xml': { schema: BatchEntryIdsNotDistinctSchema } },
    },
    483: {
      description: 'InvalidBatchEntryId',
      content: { 'text/xml': { schema: InvalidBatchEntryIdSchema } },
    },
  },
})

export const postActionDeleteMessageBatchRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteMessageBatch',
  description:
    '<p>Deletes up to ten messages from the specified queue. This is a batch version of <code> <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>',
  operationId: 'POST_DeleteMessageBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteMessageBatch')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteMessageBatch'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteMessageBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteMessageBatchResultSchema } },
    },
    480: {
      description: 'TooManyEntriesInBatchRequest',
      content: { 'text/xml': { schema: TooManyEntriesInBatchRequestSchema } },
    },
    481: {
      description: 'EmptyBatchRequest',
      content: { 'text/xml': { schema: EmptyBatchRequestSchema } },
    },
    482: {
      description: 'BatchEntryIdsNotDistinct',
      content: { 'text/xml': { schema: BatchEntryIdsNotDistinctSchema } },
    },
    483: {
      description: 'InvalidBatchEntryId',
      content: { 'text/xml': { schema: InvalidBatchEntryIdSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionDeleteQueueRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=DeleteQueue',
  description:
    '<p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue\'s contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>The delete operation uses the HTTP <code>GET</code> verb.</p> </note>',
  operationId: 'GET_DeleteQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      Action: z
        .literal('DeleteQueue')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteQueue'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionDeleteQueueRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteQueue',
  description:
    '<p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue\'s contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>The delete operation uses the HTTP <code>GET</code> verb.</p> </note>',
  operationId: 'POST_DeleteQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteQueue')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteQueue'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteQueueRequestSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getAccountNumberQueueNameActionGetQueueAttributesRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=GetQueueAttributes',
  description:
    '<p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>',
  operationId: 'GET_GetQueueAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      AttributeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            QueueAttributeNameSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'AttributeName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AttributeNames',
            in: 'query',
            required: false,
            description:
              '<p>A list of attributes for which to retrieve information.</p> <p>The <code>AttributeNames</code> parameter is optional, but if you don\'t specify values for this parameter, the request returns empty results.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note> <p>The following attributes are supported:</p> <important> <p>The <code>ApproximateNumberOfMessagesDelayed</code>, <code>ApproximateNumberOfMessagesNotVisible</code>, and <code>ApproximateNumberOfMessages</code> metrics may not achieve consistency until at least 1 minute after the producers stop sending messages. This period is required for the queue metadata to reach eventual consistency. </p> </important> <ul> <li> <p> <code>All</code> – Returns all values. </p> </li> <li> <p> <code>ApproximateNumberOfMessages</code> – Returns the approximate number of messages available for retrieval from the queue.</p> </li> <li> <p> <code>ApproximateNumberOfMessagesDelayed</code> – Returns the approximate number of messages in the queue that are delayed and not available for reading immediately. This can happen when the queue is configured as a delay queue or when a message has been sent with a delay parameter.</p> </li> <li> <p> <code>ApproximateNumberOfMessagesNotVisible</code> – Returns the approximate number of messages that are in flight. Messages are considered to be <i>in flight</i> if they have been sent to a client but have not yet been deleted or have not yet reached the end of their visibility window. </p> </li> <li> <p> <code>CreatedTimestamp</code> – Returns the time when the queue was created in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a>).</p> </li> <li> <p> <code>DelaySeconds</code> – Returns the default delay on the queue in seconds.</p> </li> <li> <p> <code>LastModifiedTimestamp</code> – Returns the time when the queue was last changed in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a>).</p> </li> <li> <p> <code>MaximumMessageSize</code> – Returns the limit of how many bytes a message can contain before Amazon SQS rejects it.</p> </li> <li> <p> <code>MessageRetentionPeriod</code> – Returns the length of time, in seconds, for which Amazon SQS retains a message. When you change a queue\'s attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – Returns the policy of the queue.</p> </li> <li> <p> <code>QueueArn</code> – Returns the Amazon resource name (ARN) of the queue.</p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – Returns the length of time, in seconds, for which the <code>ReceiveMessage</code> action waits for a message to arrive. </p> </li> <li> <p> <code>VisibilityTimeout</code> – Returns the visibility timeout for the queue. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – Returns the ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – Returns the length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>. </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Returns information about whether the queue is using SSE-SQS encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>FifoQueue</code> – Returns information about whether the queue is FIFO. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note> </li> <li> <p> <code>ContentBasedDeduplication</code> – Returns whether content-based deduplication is enabled for the queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/QueueAttributeName' },
                  { xml: { name: 'AttributeName' } },
                ],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      Action: z
        .literal('GetQueueAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetQueueAttributes'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetQueueAttributesResultSchema } },
    },
    480: {
      description: 'InvalidAttributeName',
      content: { 'text/xml': { schema: InvalidAttributeNameSchema } },
    },
  },
})

export const postActionGetQueueAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetQueueAttributes',
  description:
    '<p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>',
  operationId: 'POST_GetQueueAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('GetQueueAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetQueueAttributes'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetQueueAttributesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetQueueAttributesResultSchema } },
    },
    480: {
      description: 'InvalidAttributeName',
      content: { 'text/xml': { schema: InvalidAttributeNameSchema } },
    },
  },
})

export const getActionGetQueueUrlRoute = createRoute({
  method: 'get',
  path: '/#Action=GetQueueUrl',
  description:
    '<p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue\'s owner. The queue\'s owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>',
  operationId: 'GET_GetQueueUrl',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      QueueName: z
        .string()
        .openapi({
          param: {
            name: 'QueueName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the queue whose URL must be fetched. Maximum 80 characters. Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> <p>Queue URLs and names are case-sensitive.</p>',
            schema: { type: 'string' },
          },
        }),
      QueueOwnerAWSAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'QueueOwnerAWSAccountId',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services account ID of the account that created the queue.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetQueueUrl')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetQueueUrl'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetQueueUrlResultSchema } } },
    480: {
      description: 'QueueDoesNotExist',
      content: { 'text/xml': { schema: QueueDoesNotExistSchema } },
    },
  },
})

export const postActionGetQueueUrlRoute = createRoute({
  method: 'post',
  path: '/#Action=GetQueueUrl',
  description:
    '<p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue\'s owner. The queue\'s owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>',
  operationId: 'POST_GetQueueUrl',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('GetQueueUrl')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetQueueUrl'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetQueueUrlRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetQueueUrlResultSchema } } },
    480: {
      description: 'QueueDoesNotExist',
      content: { 'text/xml': { schema: QueueDoesNotExistSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionListDeadLetterSourceQueuesRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=ListDeadLetterSourceQueues',
  description:
    '<p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
  operationId: 'GET_ListDeadLetterSourceQueues',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: 'Pagination token to request the next set of results.',
            schema: { type: 'string' },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('ListDeadLetterSourceQueues')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListDeadLetterSourceQueues'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDeadLetterSourceQueuesResultSchema } },
    },
    480: {
      description: 'QueueDoesNotExist',
      content: { 'text/xml': { schema: QueueDoesNotExistSchema } },
    },
  },
})

export const postActionListDeadLetterSourceQueuesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListDeadLetterSourceQueues',
  description:
    '<p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
  operationId: 'POST_ListDeadLetterSourceQueues',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      Action: z
        .literal('ListDeadLetterSourceQueues')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListDeadLetterSourceQueues'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListDeadLetterSourceQueuesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDeadLetterSourceQueuesResultSchema } },
    },
    480: {
      description: 'QueueDoesNotExist',
      content: { 'text/xml': { schema: QueueDoesNotExistSchema } },
    },
  },
})

export const getActionListMessageMoveTasksRoute = createRoute({
  method: 'get',
  path: '/#Action=ListMessageMoveTasks',
  description:
    '<p>Gets the most recent message movement tasks (up to 10) under a specific source queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>',
  operationId: 'GET_ListMessageMoveTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      SourceArn: z
        .string()
        .openapi({
          param: {
            name: 'SourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the queue whose message movement tasks are to be listed.',
            schema: { type: 'string' },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to include in the response. The default is 1, which provides the most recent message movement task. The upper limit is 10.',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('ListMessageMoveTasks')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListMessageMoveTasks'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListMessageMoveTasksResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const postActionListMessageMoveTasksRoute = createRoute({
  method: 'post',
  path: '/#Action=ListMessageMoveTasks',
  description:
    '<p>Gets the most recent message movement tasks (up to 10) under a specific source queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>',
  operationId: 'POST_ListMessageMoveTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ListMessageMoveTasks')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListMessageMoveTasks'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListMessageMoveTasksRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListMessageMoveTasksResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionListQueueTagsRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=ListQueueTags',
  description:
    '<p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'GET_ListQueueTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      Action: z
        .literal('ListQueueTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListQueueTags'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListQueueTagsResultSchema } } },
  },
})

export const postActionListQueueTagsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListQueueTags',
  description:
    '<p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'POST_ListQueueTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ListQueueTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListQueueTags'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListQueueTagsRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListQueueTagsResultSchema } } },
  },
})

export const getActionListQueuesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListQueues',
  description:
    '<p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'GET_ListQueues',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      QueueNamePrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'QueueNamePrefix',
            in: 'query',
            required: false,
            description:
              '<p>A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned.</p> <p>Queue URLs and names are case-sensitive.</p>',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: 'Pagination token to request the next set of results.',
            schema: { type: 'string' },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('ListQueues')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListQueues'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListQueuesResultSchema } } },
  },
})

export const postActionListQueuesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListQueues',
  description:
    '<p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'POST_ListQueues',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      Action: z
        .literal('ListQueues')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListQueues'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListQueuesRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListQueuesResultSchema } } },
  },
})

export const getAccountNumberQueueNameActionPurgeQueueRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=PurgeQueue',
  description:
    "<p>Deletes available messages in a queue (including in-flight messages) specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>",
  operationId: 'GET_PurgeQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      Action: z
        .literal('PurgeQueue')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PurgeQueue'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'QueueDoesNotExist',
      content: { 'text/xml': { schema: QueueDoesNotExistSchema } },
    },
    481: {
      description: 'PurgeQueueInProgress',
      content: { 'text/xml': { schema: PurgeQueueInProgressSchema } },
    },
  },
})

export const postActionPurgeQueueRoute = createRoute({
  method: 'post',
  path: '/#Action=PurgeQueue',
  description:
    "<p>Deletes available messages in a queue (including in-flight messages) specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>",
  operationId: 'POST_PurgeQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('PurgeQueue')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PurgeQueue'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PurgeQueueRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'QueueDoesNotExist',
      content: { 'text/xml': { schema: QueueDoesNotExistSchema } },
    },
    481: {
      description: 'PurgeQueueInProgress',
      content: { 'text/xml': { schema: PurgeQueueInProgressSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionReceiveMessageRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=ReceiveMessage',
  description:
    '<p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don\'t include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn\'t deleted or a message whose visibility isn\'t extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>',
  operationId: 'GET_ReceiveMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      AttributeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            QueueAttributeNameSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'AttributeName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AttributeNames',
            in: 'query',
            required: false,
            description:
              '<p>A list of attributes that need to be returned along with each message. These attributes include:</p> <ul> <li> <p> <code>All</code> – Returns all values.</p> </li> <li> <p> <code>ApproximateFirstReceiveTimestamp</code> – Returns the time the message was first received from the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p> </li> <li> <p> <code>ApproximateReceiveCount</code> – Returns the number of times a message has been received across all queues but not deleted.</p> </li> <li> <p> <code>AWSTraceHeader</code> – Returns the X-Ray trace header string. </p> </li> <li> <p> <code>SenderId</code> </p> <ul> <li> <p>For a user, returns the user ID, for example <code>ABCDEFGHI1JKLMNOPQ23R</code>.</p> </li> <li> <p>For an IAM role, returns the IAM role ID, for example <code>ABCDE1F2GH3I4JK5LMNOP:i-a123b456</code>.</p> </li> </ul> </li> <li> <p> <code>SentTimestamp</code> – Returns the time the message was sent to the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> <li> <p> <code>MessageDeduplicationId</code> – Returns the value provided by the producer that calls the <code> <a>SendMessage</a> </code> action.</p> </li> <li> <p> <code>MessageGroupId</code> – Returns the value provided by the producer that calls the <code> <a>SendMessage</a> </code> action. Messages with the same <code>MessageGroupId</code> are returned in sequence.</p> </li> <li> <p> <code>SequenceNumber</code> – Returns the value provided by Amazon SQS.</p> </li> </ul>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/QueueAttributeName' },
                  { xml: { name: 'AttributeName' } },
                ],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      MessageAttributeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            MessageAttributeNameSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'MessageAttributeName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MessageAttributeNames',
            in: 'query',
            required: false,
            description:
              '<p>The name of the message attribute, where <i>N</i> is the index.</p> <ul> <li> <p>The name can contain alphanumeric characters and the underscore (<code>_</code>), hyphen (<code>-</code>), and period (<code>.</code>).</p> </li> <li> <p>The name is case-sensitive and must be unique among all attribute names for the message.</p> </li> <li> <p>The name must not start with AWS-reserved prefixes such as <code>AWS.</code> or <code>Amazon.</code> (or any casing variants).</p> </li> <li> <p>The name must not start or end with a period (<code>.</code>), and it should not have periods in succession (<code>..</code>).</p> </li> <li> <p>The name can be up to 256 characters long.</p> </li> </ul> <p>When using <code>ReceiveMessage</code>, you can send a list of attribute names to receive, or you can return all of the attributes by specifying <code>All</code> or <code>.*</code> in your request. You can also use all message attributes starting with a prefix, for example <code>bar.*</code>.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/MessageAttributeName' },
                  { xml: { name: 'MessageAttributeName' } },
                ],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      MaxNumberOfMessages: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxNumberOfMessages',
            in: 'query',
            required: false,
            description:
              'The maximum number of messages to return. Amazon SQS never returns more messages than this value (however, fewer messages might be returned). Valid values: 1 to 10. Default: 1.',
            schema: { type: 'integer' },
          },
        }),
      VisibilityTimeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'VisibilityTimeout',
            in: 'query',
            required: false,
            description:
              'The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a <code>ReceiveMessage</code> request.',
            schema: { type: 'integer' },
          },
        }),
      WaitTimeSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'WaitTimeSeconds',
            in: 'query',
            required: false,
            description:
              '<p>The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the call returns successfully with an empty list of messages.</p> <important> <p>To avoid HTTP errors, ensure that the HTTP response timeout for <code>ReceiveMessage</code> requests is longer than the <code>WaitTimeSeconds</code> parameter. For example, with the Java SDK, you can set HTTP transport settings using the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/nio/netty/NettyNioAsyncHttpClient.html"> NettyNioAsyncHttpClient</a> for asynchronous clients, or the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/apache/ApacheHttpClient.html"> ApacheHttpClient</a> for synchronous clients. </p> </important>',
            schema: { type: 'integer' },
          },
        }),
      ReceiveRequestAttemptId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReceiveRequestAttemptId',
            in: 'query',
            required: false,
            description:
              '<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of <code>ReceiveMessage</code> calls. If a networking issue occurs after a <code>ReceiveMessage</code> action, and instead of a response you receive a generic error, it is possible to retry the same action with an identical <code>ReceiveRequestAttemptId</code> to retrieve the same set of messages, even if their visibility timeout has not yet expired.</p> <ul> <li> <p>You can use <code>ReceiveRequestAttemptId</code> only for 5 minutes after a <code>ReceiveMessage</code> action.</p> </li> <li> <p>When you set <code>FifoQueue</code>, a caller of the <code>ReceiveMessage</code> action can provide a <code>ReceiveRequestAttemptId</code> explicitly.</p> </li> <li> <p>If a caller of the <code>ReceiveMessage</code> action doesn\'t provide a <code>ReceiveRequestAttemptId</code>, Amazon SQS generates a <code>ReceiveRequestAttemptId</code>.</p> </li> <li> <p>It is possible to retry the <code>ReceiveMessage</code> action with the same <code>ReceiveRequestAttemptId</code> if none of the messages have been modified (deleted or had their visibility changes).</p> </li> <li> <p>During a visibility timeout, subsequent calls with the same <code>ReceiveRequestAttemptId</code> return the same messages and receipt handles. If a retry occurs within the deduplication interval, it resets the visibility timeout. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p>If a caller of the <code>ReceiveMessage</code> action still processes messages when the visibility timeout expires and messages become visible, another worker consuming from the same queue can receive the same messages and therefore process duplicates. Also, if a consumer whose message processing time is longer than the visibility timeout tries to delete the processed messages, the action fails with an error.</p> <p>To mitigate this effect, ensure that your application observes a safe threshold before the visibility timeout expires and extend the visibility timeout as necessary.</p> </important> </li> <li> <p>While messages with a particular <code>MessageGroupId</code> are invisible, no more messages belonging to the same <code>MessageGroupId</code> are returned until the visibility timeout expires. You can still receive messages with another <code>MessageGroupId</code> as long as it is also visible.</p> </li> <li> <p>If a caller of <code>ReceiveMessage</code> can\'t track the <code>ReceiveRequestAttemptId</code>, no retries work until the original visibility timeout expires. As a result, delays might occur but the messages in the queue remain in a strict order.</p> </li> </ul> <p>The maximum length of <code>ReceiveRequestAttemptId</code> is 128 characters. <code>ReceiveRequestAttemptId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!"#$%&amp;\'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</code>).</p> <p>For best practices of using <code>ReceiveRequestAttemptId</code>, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-receiverequestattemptid-request-parameter.html">Using the ReceiveRequestAttemptId Request Parameter</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ReceiveMessage')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ReceiveMessage'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReceiveMessageResultSchema } },
    },
    480: { description: 'OverLimit', content: { 'text/xml': { schema: OverLimitSchema } } },
  },
})

export const postActionReceiveMessageRoute = createRoute({
  method: 'post',
  path: '/#Action=ReceiveMessage',
  description:
    '<p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don\'t include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn\'t deleted or a message whose visibility isn\'t extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>',
  operationId: 'POST_ReceiveMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ReceiveMessage')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ReceiveMessage'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ReceiveMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReceiveMessageResultSchema } },
    },
    480: { description: 'OverLimit', content: { 'text/xml': { schema: OverLimitSchema } } },
  },
})

export const getAccountNumberQueueNameActionRemovePermissionRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=RemovePermission',
  description:
    '<p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>',
  operationId: 'GET_RemovePermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Label: z
        .string()
        .openapi({
          param: {
            name: 'Label',
            in: 'query',
            required: true,
            description:
              'The identification of the permission to remove. This is the label added using the <code> <a>AddPermission</a> </code> action.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('RemovePermission')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemovePermission'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionRemovePermissionRoute = createRoute({
  method: 'post',
  path: '/#Action=RemovePermission',
  description:
    '<p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>',
  operationId: 'POST_RemovePermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('RemovePermission')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemovePermission'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemovePermissionRequestSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getAccountNumberQueueNameActionSendMessageRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=SendMessage',
  description:
    '<p>Delivers a message to the specified queue.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>',
  operationId: 'GET_SendMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['MessageAttribute', 'MessageSystemAttribute']
        const taken: string[] = [
          'MessageBody',
          'DelaySeconds',
          'MessageDeduplicationId',
          'MessageGroupId',
          'Action',
          'Version',
        ]
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          MessageBody: z
            .string()
            .openapi({
              param: {
                name: 'MessageBody',
                in: 'query',
                required: true,
                description:
                  '<p>The message to send. The minimum size is one character. The maximum size is 256 KiB.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>',
                schema: { type: 'string' },
              },
            }),
          DelaySeconds: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'DelaySeconds',
                in: 'query',
                required: false,
                description:
                  "<p> The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue applies. </p> <note> <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p> </note>",
                schema: { type: 'integer' },
              },
            }),
          MessageAttribute: z
            .record(z.string(), MessageAttributeValueSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageAttribute',
                in: 'query',
                required: false,
                description:
                  'Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS message attributes</a> in the <i>Amazon SQS Developer Guide</i>.',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/MessageAttributeValue' },
                  xml: { wrapped: false },
                },
              },
              xml: { wrapped: false },
            }),
          MessageSystemAttribute: z
            .record(z.string(), MessageSystemAttributeValueSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageSystemAttribute',
                in: 'query',
                required: false,
                description:
                  "<p>The message system attribute to send. Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p> <important> <ul> <li> <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>. Its type must be <code>String</code> and its value must be a correctly formatted X-Ray trace header string.</p> </li> <li> <p>The size of a message system attribute doesn't count towards the total size of a message.</p> </li> </ul> </important>",
                schema: {
                  type: 'object',
                  additionalProperties: {
                    $ref: '#/components/schemas/MessageSystemAttributeValue',
                  },
                  xml: { wrapped: false },
                },
              },
              xml: { wrapped: false },
            }),
          MessageDeduplicationId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageDeduplicationId',
                in: 'query',
                required: false,
                description:
                  "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any messages sent with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered during the 5-minute deduplication interval. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html\"> Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> <note> <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p> <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p> <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p> </note> <p>The maximum length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</code>).</p> <p>For best practices of using <code>MessageDeduplicationId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html\">Using the MessageDeduplicationId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p>",
                schema: { type: 'string' },
              },
            }),
          MessageGroupId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageGroupId',
                in: 'query',
                required: false,
                description:
                  "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.</p> <ul> <li> <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p> </li> <li> <p> <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't specify a <code>MessageGroupId</code>.</p> </li> </ul> <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>For best practices of using <code>MessageGroupId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html\">Using the MessageGroupId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p> <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p> </important>",
                schema: { type: 'string' },
              },
            }),
          Action: z
            .literal('SendMessage')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SendMessage'] },
              },
            }),
          Version: z
            .literal('2012-11-05')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2012-11-05'] },
              },
            }),
        }),
      ),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SendMessageResultSchema } } },
    480: {
      description: 'InvalidMessageContents',
      content: { 'text/xml': { schema: InvalidMessageContentsSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const postActionSendMessageRoute = createRoute({
  method: 'post',
  path: '/#Action=SendMessage',
  description:
    '<p>Delivers a message to the specified queue.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>',
  operationId: 'POST_SendMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('SendMessage')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendMessage'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SendMessageRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SendMessageResultSchema } } },
    480: {
      description: 'InvalidMessageContents',
      content: { 'text/xml': { schema: InvalidMessageContentsSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionSendMessageBatchRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=SendMessageBatch',
  description:
    '<p>You can use <code>SendMessageBatch</code> to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of <code> <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p> <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KiB (262,144 bytes).</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important> <p>If you don\'t specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p>',
  operationId: 'GET_SendMessageBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Entries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Id: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>An identifier for a message in this batch used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request.</p> <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p> </note>',
                    }),
                ),
                MessageBody: StringSchema.and(
                  z.any().openapi({ description: 'The body of the message.' }),
                ),
                DelaySeconds: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    IntegerSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The length of time, in seconds, for which a specific message is delayed. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue is applied. </p> <note> <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p> </note>",
                      }),
                  )
                  .exactOptional(),
                MessageAttributes: MessageBodyAttributeMapSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({
                    xml: { name: 'MessageAttribute' },
                    description:
                      'Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS message attributes</a> in the <i>Amazon SQS Developer Guide</i>.',
                  }),
                ).exactOptional(),
                MessageSystemAttributes: MessageBodySystemAttributeMapSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({
                    xml: { name: 'MessageSystemAttribute' },
                    description:
                      "<p>The message system attribute to send Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p> <important> <ul> <li> <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>. Its type must be <code>String</code> and its value must be a correctly formatted X-Ray trace header string.</p> </li> <li> <p>The size of a message system attribute doesn't count towards the total size of a message.</p> </li> </ul> </important>",
                  }),
                ).exactOptional(),
                MessageDeduplicationId: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of messages within a 5-minute minimum deduplication interval. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, subsequent messages with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html\"> Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> <note> <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p> <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p> <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p> </note> <p>The length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</code>).</p> <p>For best practices of using <code>MessageDeduplicationId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html\">Using the MessageDeduplicationId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p>",
                    }),
                ).exactOptional(),
                MessageGroupId: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.</p> <ul> <li> <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p> </li> <li> <p> <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't specify a <code>MessageGroupId</code>.</p> </li> </ul> <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>For best practices of using <code>MessageGroupId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html\">Using the MessageGroupId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p> <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p> </important>",
                    }),
                ).exactOptional(),
              })
              .openapi({
                required: ['Id', 'MessageBody'],
                description:
                  'Contains the details of a single Amazon SQS message along with an <code>Id</code>.',
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'SendMessageBatchRequestEntry' } }),
              ),
          ),
        )
        .openapi({
          param: {
            name: 'Entries',
            in: 'query',
            required: true,
            description: 'A list of <code> <a>SendMessageBatchRequestEntry</a> </code> items.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    required: ['Id', 'MessageBody'],
                    properties: {
                      Id: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            description:
                              '<p>An identifier for a message in this batch used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request.</p> <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p> </note>',
                          },
                        ],
                      },
                      MessageBody: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'The body of the message.' },
                        ],
                      },
                      DelaySeconds: {
                        allOf: [
                          { $ref: '#/components/schemas/Integer' },
                          {
                            description:
                              "<p>The length of time, in seconds, for which a specific message is delayed. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue is applied. </p> <note> <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p> </note>",
                          },
                        ],
                      },
                      MessageAttributes: {
                        allOf: [
                          { $ref: '#/components/schemas/MessageBodyAttributeMap' },
                          {
                            xml: { name: 'MessageAttribute' },
                            description:
                              'Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS message attributes</a> in the <i>Amazon SQS Developer Guide</i>.',
                          },
                        ],
                      },
                      MessageSystemAttributes: {
                        allOf: [
                          { $ref: '#/components/schemas/MessageBodySystemAttributeMap' },
                          {
                            xml: { name: 'MessageSystemAttribute' },
                            description:
                              "<p>The message system attribute to send Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p> <important> <ul> <li> <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>. Its type must be <code>String</code> and its value must be a correctly formatted X-Ray trace header string.</p> </li> <li> <p>The size of a message system attribute doesn't count towards the total size of a message.</p> </li> </ul> </important>",
                          },
                        ],
                      },
                      MessageDeduplicationId: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            description:
                              "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of messages within a 5-minute minimum deduplication interval. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, subsequent messages with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html\"> Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> <note> <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p> <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p> <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p> </note> <p>The length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</code>).</p> <p>For best practices of using <code>MessageDeduplicationId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html\">Using the MessageDeduplicationId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p>",
                          },
                        ],
                      },
                      MessageGroupId: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            description:
                              "<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.</p> <ul> <li> <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p> </li> <li> <p> <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't specify a <code>MessageGroupId</code>.</p> </li> </ul> <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>For best practices of using <code>MessageGroupId</code>, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html\">Using the MessageGroupId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p> <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p> </important>",
                          },
                        ],
                      },
                    },
                    description:
                      'Contains the details of a single Amazon SQS message along with an <code>Id</code>.',
                  },
                  { xml: { name: 'SendMessageBatchRequestEntry' } },
                ],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      Action: z
        .literal('SendMessageBatch')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendMessageBatch'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendMessageBatchResultSchema } },
    },
    480: {
      description: 'TooManyEntriesInBatchRequest',
      content: { 'text/xml': { schema: TooManyEntriesInBatchRequestSchema } },
    },
    481: {
      description: 'EmptyBatchRequest',
      content: { 'text/xml': { schema: EmptyBatchRequestSchema } },
    },
    482: {
      description: 'BatchEntryIdsNotDistinct',
      content: { 'text/xml': { schema: BatchEntryIdsNotDistinctSchema } },
    },
    483: {
      description: 'BatchRequestTooLong',
      content: { 'text/xml': { schema: BatchRequestTooLongSchema } },
    },
    484: {
      description: 'InvalidBatchEntryId',
      content: { 'text/xml': { schema: InvalidBatchEntryIdSchema } },
    },
    485: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const postActionSendMessageBatchRoute = createRoute({
  method: 'post',
  path: '/#Action=SendMessageBatch',
  description:
    '<p>You can use <code>SendMessageBatch</code> to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of <code> <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p> <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KiB (262,144 bytes).</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important> <p>If you don\'t specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p>',
  operationId: 'POST_SendMessageBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('SendMessageBatch')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendMessageBatch'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SendMessageBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendMessageBatchResultSchema } },
    },
    480: {
      description: 'TooManyEntriesInBatchRequest',
      content: { 'text/xml': { schema: TooManyEntriesInBatchRequestSchema } },
    },
    481: {
      description: 'EmptyBatchRequest',
      content: { 'text/xml': { schema: EmptyBatchRequestSchema } },
    },
    482: {
      description: 'BatchEntryIdsNotDistinct',
      content: { 'text/xml': { schema: BatchEntryIdsNotDistinctSchema } },
    },
    483: {
      description: 'BatchRequestTooLong',
      content: { 'text/xml': { schema: BatchRequestTooLongSchema } },
    },
    484: {
      description: 'InvalidBatchEntryId',
      content: { 'text/xml': { schema: InvalidBatchEntryIdSchema } },
    },
    485: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionSetQueueAttributesRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=SetQueueAttributes',
  description:
    '<p>Sets the value of one or more queue attributes. When you change a queue\'s attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>',
  operationId: 'GET_SetQueueAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['Attribute']
        const taken: string[] = ['Action', 'Version']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          Attribute: z
            .record(z.string(), StringSchema)
            .openapi({
              param: {
                name: 'Attribute',
                in: 'query',
                required: true,
                description:
                  '<p>A map of attributes to set.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetQueueAttributes</code> action uses:</p> <ul> <li> <p> <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0. </p> </li> <li> <p> <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) up to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). </p> </li> <li> <p> <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer representing seconds, from 60 (1 minute) to 1,209,600 (14 days). Default: 345,600 (4 days). When you change a queue\'s attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – The queue\'s policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>Identity and Access Management User Guide</i>. </p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code> <a>ReceiveMessage</a> </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. </p> </li> <li> <p> <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. While the alias of the AWS-managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i> </code>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>. </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. Note the following: </p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren\'t able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don\'t provide a <code>MessageDeduplicationId</code> and the queue doesn\'t have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                  xml: { wrapped: false },
                },
              },
              xml: { wrapped: false },
            }),
          Action: z
            .literal('SetQueueAttributes')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SetQueueAttributes'] },
              },
            }),
          Version: z
            .literal('2012-11-05')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2012-11-05'] },
              },
            }),
        }),
      ),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidAttributeName',
      content: { 'text/xml': { schema: InvalidAttributeNameSchema } },
    },
  },
})

export const postActionSetQueueAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=SetQueueAttributes',
  description:
    '<p>Sets the value of one or more queue attributes. When you change a queue\'s attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>',
  operationId: 'POST_SetQueueAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('SetQueueAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetQueueAttributes'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetQueueAttributesRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidAttributeName',
      content: { 'text/xml': { schema: InvalidAttributeNameSchema } },
    },
  },
})

export const getActionStartMessageMoveTaskRoute = createRoute({
  method: 'get',
  path: '/#Action=StartMessageMoveTask',
  description:
    '<p>Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from queues that are configured as <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported.</p> </li> <li> <p>In dead-letter queues redrive context, the <code>StartMessageMoveTask</code> the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue.</p> </li> <li> <p>Currently, only standard queues support redrive. FIFO queues don\'t support redrive.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>',
  operationId: 'GET_StartMessageMoveTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      SourceArn: z
        .string()
        .openapi({
          param: {
            name: 'SourceArn',
            in: 'query',
            required: true,
            description:
              'The ARN of the queue that contains the messages to be moved to another queue. Currently, only ARNs of dead-letter queues (DLQs) whose sources are other Amazon SQS queues are accepted. DLQs whose sources are non-SQS queues, such as Lambda or Amazon SNS topics, are not currently supported.',
            schema: { type: 'string' },
          },
        }),
      DestinationArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DestinationArn',
            in: 'query',
            required: false,
            description:
              'The ARN of the queue that receives the moved messages. You can use this field to specify the destination queue where you would like to redrive messages. If this field is left blank, the messages will be redriven back to their respective original source queues.',
            schema: { type: 'string' },
          },
        }),
      MaxNumberOfMessagesPerSecond: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxNumberOfMessagesPerSecond',
            in: 'query',
            required: false,
            description:
              'The number of messages to be moved per second (the message movement rate). You can use this field to define a fixed message movement rate. The maximum value for messages per second is 500. If this field is left blank, the system will optimize the rate based on the queue message backlog size, which may vary throughout the duration of the message movement task.',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('StartMessageMoveTask')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StartMessageMoveTask'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StartMessageMoveTaskResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const postActionStartMessageMoveTaskRoute = createRoute({
  method: 'post',
  path: '/#Action=StartMessageMoveTask',
  description:
    '<p>Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from queues that are configured as <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported.</p> </li> <li> <p>In dead-letter queues redrive context, the <code>StartMessageMoveTask</code> the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue.</p> </li> <li> <p>Currently, only standard queues support redrive. FIFO queues don\'t support redrive.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>',
  operationId: 'POST_StartMessageMoveTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('StartMessageMoveTask')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StartMessageMoveTask'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: StartMessageMoveTaskRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StartMessageMoveTaskResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const getAccountNumberQueueNameActionTagQueueRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=TagQueue',
  description:
    '<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn\'t recommended.</p> </li> <li> <p>Tags don\'t have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'GET_TagQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['Tags']
        const taken: string[] = ['Action', 'Version']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          Tags: z
            .record(z.string(), TagValueSchema)
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: true,
                description: 'The list of tags to be added to the specified queue.',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/TagValue' },
                  xml: { wrapped: false },
                },
              },
              xml: { wrapped: false },
            }),
          Action: z
            .literal('TagQueue')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['TagQueue'] },
              },
            }),
          Version: z
            .literal('2012-11-05')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2012-11-05'] },
              },
            }),
        }),
      ),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionTagQueueRoute = createRoute({
  method: 'post',
  path: '/#Action=TagQueue',
  description:
    '<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn\'t recommended.</p> </li> <li> <p>Tags don\'t have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'POST_TagQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('TagQueue')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TagQueue'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: TagQueueRequestSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getAccountNumberQueueNameActionUntagQueueRoute = createRoute({
  method: 'get',
  path: '/{AccountNumber}/{QueueName}/#Action=UntagQueue',
  description:
    '<p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'GET_UntagQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagKeySchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'TagKey' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'TagKeys',
            in: 'query',
            required: true,
            description: 'The list of tags to be removed from the specified queue.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/TagKey' }, { xml: { name: 'TagKey' } }],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      Action: z
        .literal('UntagQueue')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UntagQueue'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    params: z.object({
      AccountNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'AccountNumber',
            required: true,
            description: 'The AWS account number',
            schema: { type: 'integer' },
          },
        }),
      QueueName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'QueueName',
            required: true,
            description: 'The name of the queue',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionUntagQueueRoute = createRoute({
  method: 'post',
  path: '/#Action=UntagQueue',
  description:
    '<p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don\'t apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>',
  operationId: 'POST_UntagQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('UntagQueue')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UntagQueue'] },
          },
        }),
      Version: z
        .literal('2012-11-05')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-11-05'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UntagQueueRequestSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})
