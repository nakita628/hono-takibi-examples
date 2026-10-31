import { createRoute, z } from '@hono/zod-openapi'

const CompleteAttachmentUploadResponseSchema = z
  .object({})
  .openapi('CompleteAttachmentUploadResponse')

const ArtifactIdSchema = z.string().min(1).max(256).openapi('ArtifactId')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const PreSignedConnectionUrlSchema = z.string().min(1).max(2000).openapi('PreSignedConnectionUrl')

const ISO8601DatetimeSchema = z.string().openapi('ISO8601Datetime')

const WebsocketSchema = z
  .object({
    Url: PreSignedConnectionUrlSchema.and(
      z.any().openapi({ description: 'The URL of the websocket.' }),
    ).exactOptional(),
    ConnectionExpiry: ISO8601DatetimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The URL expiration timestamp in ISO date format.</p> <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: "The websocket for the participant's connection.", required: [] })
  .openapi('Websocket')

const ParticipantTokenSchema = z.string().min(1).max(1000).openapi('ParticipantToken')

const ConnectionCredentialsSchema = z
  .object({
    ConnectionToken: ParticipantTokenSchema.and(
      z.any().openapi({ description: 'The connection token.' }),
    ).exactOptional(),
    Expiry: ISO8601DatetimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The expiration of the token.</p> <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Connection credentials. ', required: [] })
  .openapi('ConnectionCredentials')

const CreateParticipantConnectionResponseSchema = z
  .object({
    Websocket: WebsocketSchema.and(
      z.any().openapi({ description: "Creates the participant's websocket connection." }),
    ).exactOptional(),
    ConnectionCredentials: ConnectionCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Creates the participant's connection credentials. The authentication token associated with the participant's connection.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateParticipantConnectionResponse')

const ConnectionTypeSchema = z
  .enum(['WEBSOCKET', 'CONNECTION_CREDENTIALS'])
  .openapi('ConnectionType')

const DisconnectParticipantResponseSchema = z.object({}).openapi('DisconnectParticipantResponse')

const PreSignedAttachmentUrlSchema = z.string().min(1).max(2000).openapi('PreSignedAttachmentUrl')

const GetAttachmentResponseSchema = z
  .object({
    Url: PreSignedAttachmentUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the pre-signed URL that can be used for uploading the file to Amazon S3 when used in response to <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_StartAttachmentUpload.html">StartAttachmentUpload</a>.',
        }),
    ).exactOptional(),
    UrlExpiry: ISO8601DatetimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAttachmentResponse')

const ContactIdSchema = z.string().min(1).max(256).openapi('ContactId')

const InstantSchema = z.string().min(1).max(100).openapi('Instant')

const ChatContentSchema = z.string().min(1).max(16384).openapi('ChatContent')

const ChatContentTypeSchema = z.string().min(1).max(100).openapi('ChatContentType')

const ChatItemIdSchema = z.string().min(1).max(256).openapi('ChatItemId')

const ChatItemTypeSchema = z
  .enum([
    'TYPING',
    'PARTICIPANT_JOINED',
    'PARTICIPANT_LEFT',
    'CHAT_ENDED',
    'TRANSFER_SUCCEEDED',
    'TRANSFER_FAILED',
    'MESSAGE',
    'EVENT',
    'ATTACHMENT',
    'CONNECTION_ACK',
    'MESSAGE_DELIVERED',
    'MESSAGE_READ',
  ])
  .openapi('ChatItemType')

const ParticipantIdSchema = z.string().min(1).max(256).openapi('ParticipantId')

const DisplayNameSchema = z.string().min(1).max(256).openapi('DisplayName')

const ParticipantRoleSchema = z.enum(['AGENT', 'CUSTOMER', 'SYSTEM']).openapi('ParticipantRole')

const ContentTypeSchema = z.string().min(1).max(255).openapi('ContentType')

const AttachmentNameSchema = z.string().min(1).max(256).openapi('AttachmentName')

const ArtifactStatusSchema = z
  .enum(['APPROVED', 'REJECTED', 'IN_PROGRESS'])
  .openapi('ArtifactStatus')

const AttachmentItemSchema = z
  .object({
    ContentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.',
        }),
    ).exactOptional(),
    AttachmentId: ArtifactIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the attachment.' }),
    ).exactOptional(),
    AttachmentName: AttachmentNameSchema.and(
      z.any().openapi({ description: 'A case-sensitive name of the attachment being uploaded.' }),
    ).exactOptional(),
    Status: ArtifactStatusSchema.and(
      z.any().openapi({ description: 'Status of the attachment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.',
    required: [],
  })
  .openapi('AttachmentItem')

const AttachmentsSchema = z.array(AttachmentItemSchema).openapi('Attachments')

const ReceiptSchema = z
  .object({
    DeliveredTimestamp: InstantSchema.and(
      z.any().openapi({ description: 'The time when the message was delivered to the recipient.' }),
    ).exactOptional(),
    ReadTimestamp: InstantSchema.and(
      z.any().openapi({ description: 'The time when the message was read by the recipient.' }),
    ).exactOptional(),
    RecipientParticipantId: ParticipantIdSchema.and(
      z.any().openapi({ description: 'The identifier of the recipient of the message. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The receipt for the message delivered to the recipient.', required: [] })
  .openapi('Receipt')

const ReceiptsSchema = z.array(ReceiptSchema).openapi('Receipts')

const MessageMetadataSchema = z
  .object({
    MessageId: ChatItemIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the message that contains the metadata information. ',
        }),
    ).exactOptional(),
    Receipts: ReceiptsSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of receipt information for a message for different recipients.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains metadata related to a message.', required: [] })
  .openapi('MessageMetadata')

const ItemSchema = z
  .object({
    AbsoluteTime: InstantSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time when the message or event was sent.</p> <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>",
        }),
    ).exactOptional(),
    Content: ChatContentSchema.and(
      z.any().openapi({ description: 'The content of the message or event.' }),
    ).exactOptional(),
    ContentType: ChatContentTypeSchema.and(
      z.any().openapi({ description: 'The type of content of the item.' }),
    ).exactOptional(),
    Id: ChatItemIdSchema.and(
      z.any().openapi({ description: 'The ID of the item.' }),
    ).exactOptional(),
    Type: ChatItemTypeSchema.and(
      z.any().openapi({ description: 'Type of the item: message or event. ' }),
    ).exactOptional(),
    ParticipantId: ParticipantIdSchema.and(
      z.any().openapi({ description: 'The ID of the sender in the session.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The chat display name of the sender.' }),
    ).exactOptional(),
    ParticipantRole: ParticipantRoleSchema.and(
      z
        .any()
        .openapi({
          description: 'The role of the sender. For example, is it a customer, agent, or system.',
        }),
    ).exactOptional(),
    Attachments: AttachmentsSchema.and(
      z.any().openapi({ description: 'Provides information about the attachments.' }),
    ).exactOptional(),
    MessageMetadata: MessageMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata related to the message. Currently this supports only information related to message receipts.',
        }),
    ).exactOptional(),
    RelatedContactId: ContactIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contactId on which the transcript item was originally sent. This field is only populated for persistent chats when the transcript item is from the past chat session. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.',
        }),
    ).exactOptional(),
    ContactId: ContactIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contactId on which the transcript item was originally sent. This field is populated only when the transcript item is from the current chat session.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An item - message or event - that has been sent. ', required: [] })
  .openapi('Item')

const TranscriptSchema = z.array(ItemSchema).openapi('Transcript')

const NextTokenSchema = z.string().min(1).max(1000).openapi('NextToken')

const GetTranscriptResponseSchema = z
  .object({
    InitialContactId: ContactIdSchema.and(
      z.any().openapi({ description: 'The initial contact ID for the contact. ' }),
    ).exactOptional(),
    Transcript: TranscriptSchema.and(
      z.any().openapi({ description: 'The list of messages in the session.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTranscriptResponse')

const MostRecentSchema = z.int().min(0).max(100).openapi('MostRecent')

const SendEventResponseSchema = z
  .object({
    Id: ChatItemIdSchema.and(
      z.any().openapi({ description: 'The ID of the response.' }),
    ).exactOptional(),
    AbsoluteTime: InstantSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time when the event was sent.</p> <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendEventResponse')

const SendMessageResponseSchema = z
  .object({
    Id: ChatItemIdSchema.and(
      z.any().openapi({ description: 'The ID of the message.' }),
    ).exactOptional(),
    AbsoluteTime: InstantSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time when the message was sent.</p> <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendMessageResponse')

const UploadMetadataUrlSchema = z.string().min(1).max(2000).openapi('UploadMetadataUrl')

const UploadMetadataSignedHeadersValueSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi('UploadMetadataSignedHeadersValue')

const UploadMetadataSignedHeadersSchema = z
  .record(z.string(), UploadMetadataSignedHeadersValueSchema)
  .openapi('UploadMetadataSignedHeaders')

const UploadMetadataSchema = z
  .object({
    Url: UploadMetadataUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the pre-signed URL that can be used for uploading the file to Amazon S3 when used in response to <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_StartAttachmentUpload.html">StartAttachmentUpload</a>.',
        }),
    ).exactOptional(),
    UrlExpiry: ISO8601DatetimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.",
        }),
    ).exactOptional(),
    HeadersToInclude: UploadMetadataSignedHeadersSchema.and(
      z
        .any()
        .openapi({
          description: 'The headers to be provided while uploading the file to the URL.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Fields to be used while uploading the attachment.', required: [] })
  .openapi('UploadMetadata')

const StartAttachmentUploadResponseSchema = z
  .object({
    AttachmentId: ArtifactIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the attachment.' }),
    ).exactOptional(),
    UploadMetadata: UploadMetadataSchema.and(
      z.any().openapi({ description: 'Fields to be used while uploading the attachment.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartAttachmentUploadResponse')

const AttachmentIdListSchema = z.array(ArtifactIdSchema).length(1).openapi('AttachmentIdList')

const AttachmentSizeInBytesSchema = z.int().min(1).openapi('AttachmentSizeInBytes')

const BoolSchema = z.boolean().openapi('Bool')

const ClientTokenSchema = z.string().max(500).openapi('ClientToken')

const NonEmptyClientTokenSchema = z.string().min(1).max(500).openapi('NonEmptyClientToken')

const CompleteAttachmentUploadRequestSchema = z
  .object({
    AttachmentIds: AttachmentIdListSchema.and(
      z.any().openapi({ description: 'A list of unique identifiers for the attachments.' }),
    ),
    ClientToken: NonEmptyClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
        }),
    ),
  })
  .openapi({ required: ['AttachmentIds', 'ClientToken'], title: 'CompleteAttachmentUploadRequest' })
  .openapi('CompleteAttachmentUploadRequest')

const ConnectionTypeListSchema = z.array(ConnectionTypeSchema).min(1).openapi('ConnectionTypeList')

const CreateParticipantConnectionRequestSchema = z
  .object({
    Type: ConnectionTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Type of connection information required. This can be omitted if <code>ConnectParticipant</code> is <code>true</code>.',
        }),
    ).exactOptional(),
    ConnectParticipant: BoolSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Connect Participant is used to mark the participant as connected for customer participant in message streaming, as well as for agent or manager participant in non-streaming chats.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateParticipantConnectionRequest', required: [] })
  .openapi('CreateParticipantConnectionRequest')

const DisconnectParticipantRequestSchema = z
  .object({
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DisconnectParticipantRequest', required: [] })
  .openapi('DisconnectParticipantRequest')

const GetAttachmentRequestSchema = z
  .object({
    AttachmentId: ArtifactIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the attachment.' }),
    ),
  })
  .openapi({ required: ['AttachmentId'], title: 'GetAttachmentRequest' })
  .openapi('GetAttachmentRequest')

const MaxResultsSchema = z.int().min(0).max(100).openapi('MaxResults')

const ScanDirectionSchema = z.enum(['FORWARD', 'BACKWARD']).openapi('ScanDirection')

const SortKeySchema = z.enum(['DESCENDING', 'ASCENDING']).openapi('SortKey')

const StartPositionSchema = z
  .object({
    Id: ChatItemIdSchema.and(
      z.any().openapi({ description: 'The ID of the message or event where to start. ' }),
    ).exactOptional(),
    AbsoluteTime: InstantSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time in ISO format where to start.</p> <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>",
        }),
    ).exactOptional(),
    MostRecent: MostRecentSchema.and(
      z
        .any()
        .openapi({
          description: 'The start position of the most recent message where you want to start. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filtering option for where to start. For example, if you sent 100 messages, start with message 50. ',
    required: [],
  })
  .openapi('StartPosition')

const GetTranscriptRequestSchema = z
  .object({
    ContactId: ContactIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contactId from the current contact chain for which transcript is needed.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in the page. Default: 10. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.',
        }),
    ).exactOptional(),
    ScanDirection: ScanDirectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. ',
        }),
    ).exactOptional(),
    SortOrder: SortKeySchema.and(
      z.any().openapi({ description: 'The sort order for the records. Default: DESCENDING.' }),
    ).exactOptional(),
    StartPosition: StartPositionSchema.and(
      z.any().openapi({ description: 'A filtering option for where to start.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetTranscriptRequest', required: [] })
  .openapi('GetTranscriptRequest')

const SendEventRequestSchema = z
  .object({
    ContentType: ChatContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.delivered</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.read</p> </li> </ul>',
        }),
    ),
    Content: ChatContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The content of the event to be sent (for example, message text). For content related to message receipts, this is supported in the form of a JSON string.</p> <p>Sample Content: "{\\"messageId\\":\\"11111111-aaaa-bbbb-cccc-EXAMPLE01234\\"}"</p>',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContentType'], title: 'SendEventRequest' })
  .openapi('SendEventRequest')

const SendMessageRequestSchema = z
  .object({
    ContentType: ChatContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the content. Supported types are <code>text/plain</code>, <code>text/markdown</code>, <code>application/json</code>, and <code>application/vnd.amazonaws.connect.message.interactive.response</code>.',
        }),
    ),
    Content: ChatContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The content of the message. </p> <ul> <li> <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length Constraints are Minimum of 1, Maximum of 1024. </p> </li> <li> <p>For <code>application/json</code>, the Length Constraints are Minimum of 1, Maximum of 12000. </p> </li> <li> <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the Length Constraints are Minimum of 1, Maximum of 12288.</p> </li> </ul>',
        }),
    ),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContentType', 'Content'], title: 'SendMessageRequest' })
  .openapi('SendMessageRequest')

const StartAttachmentUploadRequestSchema = z
  .object({
    ContentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.',
        }),
    ),
    AttachmentSizeInBytes: AttachmentSizeInBytesSchema.and(
      z.any().openapi({ description: 'The size of the attachment in bytes.' }),
    ),
    AttachmentName: AttachmentNameSchema.and(
      z.any().openapi({ description: 'A case-sensitive name of the attachment being uploaded.' }),
    ),
    ClientToken: NonEmptyClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
        }),
    ),
  })
  .openapi({
    required: ['ContentType', 'AttachmentSizeInBytes', 'AttachmentName', 'ClientToken'],
    title: 'StartAttachmentUploadRequest',
  })
  .openapi('StartAttachmentUploadRequest')

const UploadMetadataSignedHeadersKeySchema = z
  .string()
  .min(1)
  .max(128)
  .openapi('UploadMetadataSignedHeadersKey')

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

export const postParticipantCompleteAttachmentUploadXAmzBearerRoute = createRoute({
  method: 'post',
  path: '/participant/complete-attachment-upload#X-Amz-Bearer',
  description:
    '<p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>',
  operationId: 'CompleteAttachmentUpload',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Bearer': z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          param: {
            name: 'X-Amz-Bearer',
            in: 'header',
            required: true,
            description: "The authentication token associated with the participant's connection.",
            schema: { type: 'string', minLength: 1, maxLength: 1000 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AttachmentIds: z
                .array(ArtifactIdSchema)
                .length(1)
                .openapi({ description: 'A list of unique identifiers for the attachments.' }),
              ClientToken: z
                .string()
                .min(1)
                .max(500)
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
                }),
            })
            .openapi({ required: ['AttachmentIds', 'ClientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompleteAttachmentUploadResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postParticipantConnectionXAmzBearerRoute = createRoute({
  method: 'post',
  path: '/participant/connection#X-Amz-Bearer',
  description:
    '<p>Creates the participant\'s connection. </p> <note> <p> <code>ParticipantToken</code> is used for invoking this API instead of <code>ConnectionToken</code>.</p> </note> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <p> <b>Message streaming support</b>: This API can also be used together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p> <b>Feature specifications</b>: For information about feature specifications, such as the allowed number of open websocket connections per participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>',
  operationId: 'CreateParticipantConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Bearer': z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          param: {
            name: 'X-Amz-Bearer',
            in: 'header',
            required: true,
            description:
              '<p>This is a header parameter.</p> <p>The ParticipantToken as obtained from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html">StartChatContact</a> API response.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 1000 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Type: z
                .array(ConnectionTypeSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Type of connection information required. This can be omitted if <code>ConnectParticipant</code> is <code>true</code>.',
                }),
              ConnectParticipant: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Amazon Connect Participant is used to mark the participant as connected for customer participant in message streaming, as well as for agent or manager participant in non-streaming chats.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateParticipantConnectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postParticipantDisconnectXAmzBearerRoute = createRoute({
  method: 'post',
  path: '/participant/disconnect#X-Amz-Bearer',
  description:
    '<p>Disconnects a participant. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>',
  operationId: 'DisconnectParticipant',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Bearer': z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          param: {
            name: 'X-Amz-Bearer',
            in: 'header',
            required: true,
            description: "The authentication token associated with the participant's connection.",
            schema: { type: 'string', minLength: 1, maxLength: 1000 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ClientToken: z
                .string()
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisconnectParticipantResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postParticipantAttachmentXAmzBearerRoute = createRoute({
  method: 'post',
  path: '/participant/attachment#X-Amz-Bearer',
  description:
    '<p>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>',
  operationId: 'GetAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Bearer': z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          param: {
            name: 'X-Amz-Bearer',
            in: 'header',
            required: true,
            description: "The authentication token associated with the participant's connection.",
            schema: { type: 'string', minLength: 1, maxLength: 1000 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AttachmentId: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'A unique identifier for the attachment.' }),
            })
            .openapi({ required: ['AttachmentId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAttachmentResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postParticipantTranscriptXAmzBearerRoute = createRoute({
  method: 'post',
  path: '/participant/transcript#X-Amz-Bearer',
  description:
    '<p>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>',
  operationId: 'GetTranscript',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Bearer': z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          param: {
            name: 'X-Amz-Bearer',
            in: 'header',
            required: true,
            description: "The authentication token associated with the participant's connection.",
            schema: { type: 'string', minLength: 1, maxLength: 1000 },
          },
        }),
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ContactId: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The contactId from the current contact chain for which transcript is needed.',
                }),
              MaxResults: z
                .int()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the page. Default: 10. ',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.',
                }),
              ScanDirection: z
                .enum(['FORWARD', 'BACKWARD'])
                .exactOptional()
                .openapi({
                  description:
                    'The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. ',
                }),
              SortOrder: z
                .enum(['DESCENDING', 'ASCENDING'])
                .exactOptional()
                .openapi({ description: 'The sort order for the records. Default: DESCENDING.' }),
              StartPosition: z
                .object({
                  Id: ChatItemIdSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The ID of the message or event where to start. ' }),
                  ).exactOptional(),
                  AbsoluteTime: InstantSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The time in ISO format where to start.</p> <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>",
                      }),
                  ).exactOptional(),
                  MostRecent: MostRecentSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The start position of the most recent message where you want to start. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A filtering option for where to start. For example, if you sent 100 messages, start with message 50. ',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTranscriptResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postParticipantEventXAmzBearerRoute = createRoute({
  method: 'post',
  path: '/participant/event#X-Amz-Bearer',
  description:
    '<p>Sends an event. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>',
  operationId: 'SendEvent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Bearer': z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          param: {
            name: 'X-Amz-Bearer',
            in: 'header',
            required: true,
            description: "The authentication token associated with the participant's connection.",
            schema: { type: 'string', minLength: 1, maxLength: 1000 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ContentType: z
                .string()
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.delivered</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.read</p> </li> </ul>',
                }),
              Content: z
                .string()
                .min(1)
                .max(16384)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The content of the event to be sent (for example, message text). For content related to message receipts, this is supported in the form of a JSON string.</p> <p>Sample Content: "{\\"messageId\\":\\"11111111-aaaa-bbbb-cccc-EXAMPLE01234\\"}"</p>',
                }),
              ClientToken: z
                .string()
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
                }),
            })
            .openapi({ required: ['ContentType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendEventResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postParticipantMessageXAmzBearerRoute = createRoute({
  method: 'post',
  path: '/participant/message#X-Amz-Bearer',
  description:
    '<p>Sends a message.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>',
  operationId: 'SendMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Bearer': z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          param: {
            name: 'X-Amz-Bearer',
            in: 'header',
            required: true,
            description: 'The authentication token associated with the connection.',
            schema: { type: 'string', minLength: 1, maxLength: 1000 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ContentType: z
                .string()
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'The type of the content. Supported types are <code>text/plain</code>, <code>text/markdown</code>, <code>application/json</code>, and <code>application/vnd.amazonaws.connect.message.interactive.response</code>.',
                }),
              Content: z
                .string()
                .min(1)
                .max(16384)
                .openapi({
                  description:
                    '<p>The content of the message. </p> <ul> <li> <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length Constraints are Minimum of 1, Maximum of 1024. </p> </li> <li> <p>For <code>application/json</code>, the Length Constraints are Minimum of 1, Maximum of 12000. </p> </li> <li> <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the Length Constraints are Minimum of 1, Maximum of 12288.</p> </li> </ul>',
                }),
              ClientToken: z
                .string()
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
                }),
            })
            .openapi({ required: ['ContentType', 'Content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendMessageResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postParticipantStartAttachmentUploadXAmzBearerRoute = createRoute({
  method: 'post',
  path: '/participant/start-attachment-upload#X-Amz-Bearer',
  description:
    '<p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>',
  operationId: 'StartAttachmentUpload',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Bearer': z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          param: {
            name: 'X-Amz-Bearer',
            in: 'header',
            required: true,
            description: "The authentication token associated with the participant's connection.",
            schema: { type: 'string', minLength: 1, maxLength: 1000 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ContentType: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.',
                }),
              AttachmentSizeInBytes: z
                .int()
                .min(1)
                .openapi({ description: 'The size of the attachment in bytes.' }),
              AttachmentName: z
                .string()
                .min(1)
                .max(256)
                .openapi({
                  description: 'A case-sensitive name of the attachment being uploaded.',
                }),
              ClientToken: z
                .string()
                .min(1)
                .max(500)
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.',
                }),
            })
            .openapi({
              required: ['ContentType', 'AttachmentSizeInBytes', 'AttachmentName', 'ClientToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartAttachmentUploadResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})
