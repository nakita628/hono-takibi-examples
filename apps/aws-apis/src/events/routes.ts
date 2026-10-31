import { createRoute, z } from '@hono/zod-openapi'

const EventSourceNameSchema = z
  .string()
  .regex(/aws\.partner(\/[\.\-_A-Za-z0-9]+){2,}/)
  .min(1)
  .max(256)
  .openapi('EventSourceName')

const ActivateEventSourceRequestSchema = z
  .object({
    Name: EventSourceNameSchema.and(
      z.any().openapi({ description: 'The name of the partner event source to activate.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'ActivateEventSourceRequest' })
  .openapi('ActivateEventSourceRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const InvalidStateExceptionSchema = z.any().openapi('InvalidStateException')

const InternalExceptionSchema = z.any().openapi('InternalException')

const OperationDisabledExceptionSchema = z.any().openapi('OperationDisabledException')

const ReplayArnSchema = z
  .string()
  .regex(/^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:.+\/[\.\-_A-Za-z0-9]+$/)
  .min(1)
  .max(1600)
  .openapi('ReplayArn')

const ReplayStateSchema = z
  .enum(['STARTING', 'RUNNING', 'CANCELLING', 'COMPLETED', 'CANCELLED', 'FAILED'])
  .openapi('ReplayState')

const ReplayStateReasonSchema = z.string().regex(/.*/).max(512).openapi('ReplayStateReason')

const CancelReplayResponseSchema = z
  .object({
    ReplayArn: ReplayArnSchema.and(
      z.any().openapi({ description: 'The ARN of the replay to cancel.' }),
    ).exactOptional(),
    State: ReplayStateSchema.and(
      z.any().openapi({ description: 'The current state of the replay.' }),
    ).exactOptional(),
    StateReason: ReplayStateReasonSchema.and(
      z.any().openapi({ description: 'The reason that the replay is in the current state.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelReplayResponse')

const ReplayNameSchema = z
  .string()
  .regex(/[\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(64)
  .openapi('ReplayName')

const CancelReplayRequestSchema = z
  .object({
    ReplayName: ReplayNameSchema.and(
      z.any().openapi({ description: 'The name of the replay to cancel.' }),
    ),
  })
  .openapi({ required: ['ReplayName'], title: 'CancelReplayRequest' })
  .openapi('CancelReplayRequest')

const IllegalStatusExceptionSchema = z.any().openapi('IllegalStatusException')

const ApiDestinationArnSchema = z
  .string()
  .regex(
    /^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:api-destination\/[\.\-_A-Za-z0-9]+\/[\-A-Za-z0-9]+$/,
  )
  .min(1)
  .max(1600)
  .openapi('ApiDestinationArn')

const ApiDestinationStateSchema = z.enum(['ACTIVE', 'INACTIVE']).openapi('ApiDestinationState')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const CreateApiDestinationResponseSchema = z
  .object({
    ApiDestinationArn: ApiDestinationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the API destination that was created by the request.',
        }),
    ).exactOptional(),
    ApiDestinationState: ApiDestinationStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The state of the API destination that was created by the request.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp indicating the time that the API destination was created.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating the time that the API destination was last modified.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateApiDestinationResponse')

const ApiDestinationNameSchema = z
  .string()
  .regex(/[\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(64)
  .openapi('ApiDestinationName')

const ApiDestinationDescriptionSchema = z
  .string()
  .regex(/.*/)
  .max(512)
  .openapi('ApiDestinationDescription')

const ConnectionArnSchema = z
  .string()
  .regex(
    /^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:connection\/[\.\-_A-Za-z0-9]+\/[\-A-Za-z0-9]+$/,
  )
  .min(1)
  .max(1600)
  .openapi('ConnectionArn')

const HttpsEndpointSchema = z
  .string()
  .regex(/^((%[0-9A-Fa-f]{2}|[-()_.!~*';\/?:@\x26=+$,A-Za-z0-9])+)([).!';\/?:,])?$/)
  .min(1)
  .max(2048)
  .openapi('HttpsEndpoint')

const ApiDestinationHttpMethodSchema = z
  .enum(['POST', 'GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'])
  .openapi('ApiDestinationHttpMethod')

const ApiDestinationInvocationRateLimitPerSecondSchema = z
  .int()
  .min(1)
  .openapi('ApiDestinationInvocationRateLimitPerSecond')

const CreateApiDestinationRequestSchema = z
  .object({
    Name: ApiDestinationNameSchema.and(
      z.any().openapi({ description: 'The name for the API destination to create.' }),
    ),
    Description: ApiDestinationDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the API destination to create.' }),
    ).exactOptional(),
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the connection to use for the API destination. The destination endpoint must support the authorization type specified for the connection.',
        }),
    ),
    InvocationEndpoint: HttpsEndpointSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL to the HTTP invocation endpoint for the API destination.',
        }),
    ),
    HttpMethod: ApiDestinationHttpMethodSchema.and(
      z
        .any()
        .openapi({
          description: 'The method to use for the request to the HTTP invocation endpoint.',
        }),
    ),
    InvocationRateLimitPerSecond: ApiDestinationInvocationRateLimitPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of requests per second to send to the HTTP invocation endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'ConnectionArn', 'InvocationEndpoint', 'HttpMethod'],
    title: 'CreateApiDestinationRequest',
  })
  .openapi('CreateApiDestinationRequest')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ArchiveArnSchema = z
  .string()
  .regex(/^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:.+\/.+$/)
  .min(1)
  .max(1600)
  .openapi('ArchiveArn')

const ArchiveStateSchema = z
  .enum(['ENABLED', 'DISABLED', 'CREATING', 'UPDATING', 'CREATE_FAILED', 'UPDATE_FAILED'])
  .openapi('ArchiveState')

const ArchiveStateReasonSchema = z.string().regex(/.*/).max(512).openapi('ArchiveStateReason')

const CreateArchiveResponseSchema = z
  .object({
    ArchiveArn: ArchiveArnSchema.and(
      z.any().openapi({ description: 'The ARN of the archive that was created.' }),
    ).exactOptional(),
    State: ArchiveStateSchema.and(
      z.any().openapi({ description: 'The state of the archive that was created.' }),
    ).exactOptional(),
    StateReason: ArchiveStateReasonSchema.and(
      z.any().openapi({ description: 'The reason that the archive is in the state.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the archive was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateArchiveResponse')

const ArchiveNameSchema = z
  .string()
  .regex(/[\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(48)
  .openapi('ArchiveName')

const ArnSchema = z.string().min(1).max(1600).openapi('Arn')

const ArchiveDescriptionSchema = z.string().regex(/.*/).max(512).openapi('ArchiveDescription')

const EventPatternSchema = z.string().openapi('EventPattern')

const RetentionDaysSchema = z.int().min(0).openapi('RetentionDays')

const CreateArchiveRequestSchema = z
  .object({
    ArchiveName: ArchiveNameSchema.and(
      z.any().openapi({ description: 'The name for the archive to create.' }),
    ),
    EventSourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the event bus that sends events to the archive.' }),
    ),
    Description: ArchiveDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the archive.' }),
    ).exactOptional(),
    EventPattern: EventPatternSchema.and(
      z
        .any()
        .openapi({ description: 'An event pattern to use to filter events sent to the archive.' }),
    ).exactOptional(),
    RetentionDays: RetentionDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days to retain events for. Default value is 0. If set to 0, events are retained indefinitely',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ArchiveName', 'EventSourceArn'], title: 'CreateArchiveRequest' })
  .openapi('CreateArchiveRequest')

const InvalidEventPatternExceptionSchema = z.any().openapi('InvalidEventPatternException')

const ConnectionStateSchema = z
  .enum([
    'CREATING',
    'UPDATING',
    'DELETING',
    'AUTHORIZED',
    'DEAUTHORIZED',
    'AUTHORIZING',
    'DEAUTHORIZING',
  ])
  .openapi('ConnectionState')

const CreateConnectionResponseSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the connection that was created by the request.' }),
    ).exactOptional(),
    ConnectionState: ConnectionStateSchema.and(
      z
        .any()
        .openapi({ description: 'The state of the connection that was created by the request.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A time stamp for the time that the connection was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectionResponse')

const ConnectionNameSchema = z
  .string()
  .regex(/[\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(64)
  .openapi('ConnectionName')

const ConnectionDescriptionSchema = z.string().regex(/.*/).max(512).openapi('ConnectionDescription')

const ConnectionAuthorizationTypeSchema = z
  .enum(['BASIC', 'OAUTH_CLIENT_CREDENTIALS', 'API_KEY'])
  .openapi('ConnectionAuthorizationType')

const AuthHeaderParametersSchema = z
  .string()
  .regex(/^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$/)
  .min(1)
  .max(512)
  .openapi('AuthHeaderParameters')

const CreateConnectionBasicAuthRequestParametersSchema = z
  .object({
    Username: AuthHeaderParametersSchema.and(
      z.any().openapi({ description: 'The user name to use for Basic authorization.' }),
    ),
    Password: AuthHeaderParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The password associated with the user name to use for Basic authorization.',
        }),
    ),
  })
  .openapi({
    required: ['Username', 'Password'],
    description: 'Contains the Basic authorization parameters to use for the connection.',
  })
  .openapi('CreateConnectionBasicAuthRequestParameters')

const CreateConnectionOAuthClientRequestParametersSchema = z
  .object({
    ClientID: AuthHeaderParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The client ID to use for OAuth authorization for the connection.',
        }),
    ),
    ClientSecret: AuthHeaderParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The client secret associated with the client ID to use for OAuth authorization for the connection.',
        }),
    ),
  })
  .openapi({
    required: ['ClientID', 'ClientSecret'],
    description: 'Contains the Basic authorization parameters to use for the connection.',
  })
  .openapi('CreateConnectionOAuthClientRequestParameters')

const ConnectionOAuthHttpMethodSchema = z
  .enum(['GET', 'POST', 'PUT'])
  .openapi('ConnectionOAuthHttpMethod')

const HeaderKeySchema = z
  .string()
  .regex(/^[!#$%&'*+-.^_`|~0-9a-zA-Z]+$/)
  .max(512)
  .openapi('HeaderKey')

const HeaderValueSchema = z
  .string()
  .regex(/^[ \t]*[\x20-\x7E]+([ \t]+[\x20-\x7E]+)*[ \t]*$/)
  .max(512)
  .openapi('HeaderValue')

const BooleanSchema = z.boolean().openapi('Boolean')

const ConnectionHeaderParameterSchema = z
  .object({
    Key: HeaderKeySchema.and(
      z.any().openapi({ description: 'The key for the parameter.' }),
    ).exactOptional(),
    Value: HeaderValueSchema.and(
      z.any().openapi({ description: 'The value associated with the key.' }),
    ).exactOptional(),
    IsValueSecret: BooleanSchema.and(
      z.any().openapi({ description: 'Specified whether the value is a secret.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB.',
    required: [],
  })
  .openapi('ConnectionHeaderParameter')

const ConnectionHeaderParametersListSchema = z
  .array(ConnectionHeaderParameterSchema)
  .min(0)
  .max(100)
  .openapi('ConnectionHeaderParametersList')

const QueryStringKeySchema = z
  .string()
  .regex(/[^\x00-\x1F\x7F]+/)
  .max(512)
  .openapi('QueryStringKey')

const QueryStringValueSchema = z
  .string()
  .regex(/[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F]+/)
  .max(512)
  .openapi('QueryStringValue')

const ConnectionQueryStringParameterSchema = z
  .object({
    Key: QueryStringKeySchema.and(
      z.any().openapi({ description: 'The key for a query string parameter.' }),
    ).exactOptional(),
    Value: QueryStringValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The value associated with the key for the query string parameter.',
        }),
    ).exactOptional(),
    IsValueSecret: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the value is secret.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.',
    required: [],
  })
  .openapi('ConnectionQueryStringParameter')

const ConnectionQueryStringParametersListSchema = z
  .array(ConnectionQueryStringParameterSchema)
  .min(0)
  .max(100)
  .openapi('ConnectionQueryStringParametersList')

const StringSchema = z.string().openapi('String')

const ConnectionBodyParameterSchema = z
  .object({
    Key: StringSchema.and(
      z.any().openapi({ description: 'The key for the parameter.' }),
    ).exactOptional(),
    Value: StringSchema.and(
      z.any().openapi({ description: 'The value associated with the key.' }),
    ).exactOptional(),
    IsValueSecret: BooleanSchema.and(
      z.any().openapi({ description: 'Specified whether the value is secret.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB.',
    required: [],
  })
  .openapi('ConnectionBodyParameter')

const ConnectionBodyParametersListSchema = z
  .array(ConnectionBodyParameterSchema)
  .min(0)
  .max(100)
  .openapi('ConnectionBodyParametersList')

const ConnectionHttpParametersSchema = z
  .object({
    HeaderParameters: ConnectionHeaderParametersListSchema.and(
      z.any().openapi({ description: 'Contains additional header parameters for the connection.' }),
    ).exactOptional(),
    QueryStringParameters: ConnectionQueryStringParametersListSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains additional query string parameters for the connection.',
        }),
    ).exactOptional(),
    BodyParameters: ConnectionBodyParametersListSchema.and(
      z
        .any()
        .openapi({ description: 'Contains additional body string parameters for the connection.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains additional parameters for the connection.', required: [] })
  .openapi('ConnectionHttpParameters')

const CreateConnectionOAuthRequestParametersSchema = z
  .object({
    ClientParameters: CreateConnectionOAuthClientRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CreateConnectionOAuthClientRequestParameters</code> object that contains the client parameters for OAuth authorization.',
        }),
    ),
    AuthorizationEndpoint: HttpsEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL to the authorization endpoint when OAuth is specified as the authorization type.',
        }),
    ),
    HttpMethod: ConnectionOAuthHttpMethodSchema.and(
      z.any().openapi({ description: 'The method to use for the authorization request.' }),
    ),
    OAuthHttpParameters: ConnectionHttpParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ConnectionHttpParameters</code> object that contains details about the additional parameters to use for the connection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientParameters', 'AuthorizationEndpoint', 'HttpMethod'],
    description: 'Contains the OAuth authorization parameters to use for the connection.',
  })
  .openapi('CreateConnectionOAuthRequestParameters')

const CreateConnectionApiKeyAuthRequestParametersSchema = z
  .object({
    ApiKeyName: AuthHeaderParametersSchema.and(
      z.any().openapi({ description: 'The name of the API key to use for authorization.' }),
    ),
    ApiKeyValue: AuthHeaderParametersSchema.and(
      z.any().openapi({ description: 'The value for the API key to use for authorization.' }),
    ),
  })
  .openapi({
    required: ['ApiKeyName', 'ApiKeyValue'],
    description: 'Contains the API key authorization parameters for the connection.',
  })
  .openapi('CreateConnectionApiKeyAuthRequestParameters')

const CreateConnectionAuthRequestParametersSchema = z
  .object({
    BasicAuthParameters: CreateConnectionBasicAuthRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CreateConnectionBasicAuthRequestParameters</code> object that contains the Basic authorization parameters to use for the connection.',
        }),
    ).exactOptional(),
    OAuthParameters: CreateConnectionOAuthRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CreateConnectionOAuthRequestParameters</code> object that contains the OAuth authorization parameters to use for the connection.',
        }),
    ).exactOptional(),
    ApiKeyAuthParameters: CreateConnectionApiKeyAuthRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CreateConnectionApiKeyAuthRequestParameters</code> object that contains the API key authorization parameters to use for the connection.',
        }),
    ).exactOptional(),
    InvocationHttpParameters: ConnectionHttpParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ConnectionHttpParameters</code> object that contains the API key authorization parameters to use for the connection. Note that if you include additional parameters for the target of a rule via <code>HttpParameters</code>, including query strings, the parameters added for the connection take precedence.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the authorization parameters for the connection.',
    required: [],
  })
  .openapi('CreateConnectionAuthRequestParameters')

const CreateConnectionRequestSchema = z
  .object({
    Name: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name for the connection to create.' }),
    ),
    Description: ConnectionDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the connection to create.' }),
    ).exactOptional(),
    AuthorizationType: ConnectionAuthorizationTypeSchema.and(
      z.any().openapi({ description: 'The type of authorization to use for the connection.' }),
    ),
    AuthParameters: CreateConnectionAuthRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CreateConnectionAuthRequestParameters</code> object that contains the authorization parameters to use to authorize with the endpoint. ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'AuthorizationType', 'AuthParameters'],
    title: 'CreateConnectionRequest',
  })
  .openapi('CreateConnectionRequest')

const CreateEventBusResponseSchema = z
  .object({
    EventBusArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the new event bus.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEventBusResponse')

const EventBusNameSchema = z
  .string()
  .regex(/[\/\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(256)
  .openapi('EventBusName')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.',
        }),
    ),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value for the specified tag key.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateEventBusRequestSchema = z
  .object({
    Name: EventBusNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the new event bus. </p> <p>Event bus names cannot contain the / character. You can't use the name <code>default</code> for a custom event bus, as this name is already used for your account's default event bus.</p> <p>If this is a partner event bus, the name must exactly match the name of the partner event source that this event bus is matched to.</p>",
        }),
    ),
    EventSourceName: EventSourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags to associate with the event bus.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateEventBusRequest' })
  .openapi('CreateEventBusRequest')

const CreatePartnerEventSourceResponseSchema = z
  .object({
    EventSourceArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the partner event source.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePartnerEventSourceResponse')

const AccountIdSchema = z
  .string()
  .regex(/\d{12}/)
  .length(12)
  .openapi('AccountId')

const CreatePartnerEventSourceRequestSchema = z
  .object({
    Name: EventSourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the partner event source. This name must be unique and must be in the format <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code>. The Amazon Web Services account that wants to use this partner event source must create a partner event bus with a name that matches the name of the partner event source.',
        }),
    ),
    Account: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID that is permitted to create a matching partner event bus for this partner event source.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Account'], title: 'CreatePartnerEventSourceRequest' })
  .openapi('CreatePartnerEventSourceRequest')

const DeactivateEventSourceRequestSchema = z
  .object({
    Name: EventSourceNameSchema.and(
      z.any().openapi({ description: 'The name of the partner event source to deactivate.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeactivateEventSourceRequest' })
  .openapi('DeactivateEventSourceRequest')

const DeauthorizeConnectionResponseSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the connection that authorization was removed from.' }),
    ).exactOptional(),
    ConnectionState: ConnectionStateSchema.and(
      z.any().openapi({ description: 'The state of the connection.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A time stamp for the time that the connection was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last updated.',
        }),
    ).exactOptional(),
    LastAuthorizedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last authorized.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeauthorizeConnectionResponse')

const DeauthorizeConnectionRequestSchema = z
  .object({
    Name: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection to remove authorization from.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeauthorizeConnectionRequest' })
  .openapi('DeauthorizeConnectionRequest')

const DeleteApiDestinationResponseSchema = z.object({}).openapi('DeleteApiDestinationResponse')

const DeleteApiDestinationRequestSchema = z
  .object({
    Name: ApiDestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the destination to delete.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteApiDestinationRequest' })
  .openapi('DeleteApiDestinationRequest')

const DeleteArchiveResponseSchema = z.object({}).openapi('DeleteArchiveResponse')

const DeleteArchiveRequestSchema = z
  .object({
    ArchiveName: ArchiveNameSchema.and(
      z.any().openapi({ description: 'The name of the archive to delete.' }),
    ),
  })
  .openapi({ required: ['ArchiveName'], title: 'DeleteArchiveRequest' })
  .openapi('DeleteArchiveRequest')

const DeleteConnectionResponseSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the connection that was deleted.' }),
    ).exactOptional(),
    ConnectionState: ConnectionStateSchema.and(
      z.any().openapi({ description: 'The state of the connection before it was deleted.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A time stamp for the time that the connection was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp for the time that the connection was last modified before it was deleted.',
        }),
    ).exactOptional(),
    LastAuthorizedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp for the time that the connection was last authorized before it wa deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteConnectionResponse')

const DeleteConnectionRequestSchema = z
  .object({
    Name: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection to delete.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteConnectionRequest' })
  .openapi('DeleteConnectionRequest')

const DeleteEventBusRequestSchema = z
  .object({
    Name: EventBusNameSchema.and(
      z.any().openapi({ description: 'The name of the event bus to delete.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteEventBusRequest' })
  .openapi('DeleteEventBusRequest')

const DeletePartnerEventSourceRequestSchema = z
  .object({
    Name: EventSourceNameSchema.and(
      z.any().openapi({ description: 'The name of the event source to delete.' }),
    ),
    Account: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID of the Amazon Web Services customer that the event source was created for.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Account'], title: 'DeletePartnerEventSourceRequest' })
  .openapi('DeletePartnerEventSourceRequest')

const RuleNameSchema = z
  .string()
  .regex(/[\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(64)
  .openapi('RuleName')

const EventBusNameOrArnSchema = z
  .string()
  .regex(/(arn:aws[\w-]*:events:[a-z]{2}-[a-z]+-[\w-]+:[0-9]{12}:event-bus\/)?[\/\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(1600)
  .openapi('EventBusNameOrArn')

const DeleteRuleRequestSchema = z
  .object({
    Name: RuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
    Force: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify <code>Force</code> as <code>True</code> to delete the rule. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using <code>DescribeRule</code> or <code>ListRules</code> and checking the <code>ManagedBy</code> field of the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'DeleteRuleRequest' })
  .openapi('DeleteRuleRequest')

const ManagedRuleExceptionSchema = z.any().openapi('ManagedRuleException')

const DescribeApiDestinationResponseSchema = z
  .object({
    ApiDestinationArn: ApiDestinationArnSchema.and(
      z.any().openapi({ description: 'The ARN of the API destination retrieved.' }),
    ).exactOptional(),
    Name: ApiDestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the API destination retrieved.' }),
    ).exactOptional(),
    Description: ApiDestinationDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the API destination retrieved.' }),
    ).exactOptional(),
    ApiDestinationState: ApiDestinationStateSchema.and(
      z.any().openapi({ description: 'The state of the API destination retrieved.' }),
    ).exactOptional(),
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the connection specified for the API destination retrieved.',
        }),
    ).exactOptional(),
    InvocationEndpoint: HttpsEndpointSchema.and(
      z.any().openapi({ description: 'The URL to use to connect to the HTTP endpoint.' }),
    ).exactOptional(),
    HttpMethod: ApiDestinationHttpMethodSchema.and(
      z.any().openapi({ description: 'The method to use to connect to the HTTP endpoint.' }),
    ).exactOptional(),
    InvocationRateLimitPerSecond: ApiDestinationInvocationRateLimitPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of invocations per second to specified for the API destination. Note that if you set the invocation rate maximum to a value lower the rate necessary to send all events received on to the destination HTTP endpoint, some events may not be delivered within the 24-hour retry window. If you plan to set the rate lower than the rate necessary to deliver all events, consider using a dead-letter queue to catch events that are not delivered within 24 hours.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the API destination was created.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the API destination was last modified.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeApiDestinationResponse')

const DescribeApiDestinationRequestSchema = z
  .object({
    Name: ApiDestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the API destination to retrieve.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DescribeApiDestinationRequest' })
  .openapi('DescribeApiDestinationRequest')

const LongSchema = z.int().openapi('Long')

const DescribeArchiveResponseSchema = z
  .object({
    ArchiveArn: ArchiveArnSchema.and(
      z.any().openapi({ description: 'The ARN of the archive.' }),
    ).exactOptional(),
    ArchiveName: ArchiveNameSchema.and(
      z.any().openapi({ description: 'The name of the archive.' }),
    ).exactOptional(),
    EventSourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the event source associated with the archive.' }),
    ).exactOptional(),
    Description: ArchiveDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the archive.' }),
    ).exactOptional(),
    EventPattern: EventPatternSchema.and(
      z
        .any()
        .openapi({ description: 'The event pattern used to filter events sent to the archive.' }),
    ).exactOptional(),
    State: ArchiveStateSchema.and(
      z.any().openapi({ description: 'The state of the archive.' }),
    ).exactOptional(),
    StateReason: ArchiveStateReasonSchema.and(
      z.any().openapi({ description: 'The reason that the archive is in the state.' }),
    ).exactOptional(),
    RetentionDays: RetentionDaysSchema.and(
      z.any().openapi({ description: 'The number of days to retain events for in the archive.' }),
    ).exactOptional(),
    SizeBytes: LongSchema.and(
      z.any().openapi({ description: 'The size of the archive in bytes.' }),
    ).exactOptional(),
    EventCount: LongSchema.and(
      z.any().openapi({ description: 'The number of events in the archive.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the archive was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeArchiveResponse')

const DescribeArchiveRequestSchema = z
  .object({
    ArchiveName: ArchiveNameSchema.and(
      z.any().openapi({ description: 'The name of the archive to retrieve.' }),
    ),
  })
  .openapi({ required: ['ArchiveName'], title: 'DescribeArchiveRequest' })
  .openapi('DescribeArchiveRequest')

const ConnectionStateReasonSchema = z.string().regex(/.*/).max(512).openapi('ConnectionStateReason')

const SecretsManagerSecretArnSchema = z
  .string()
  .regex(
    /^arn:aws([a-z]|\-)*:secretsmanager:([a-z]|\d|\-)*:([0-9]{12})?:secret:[\/_+=\.@\-A-Za-z0-9]+$/,
  )
  .min(20)
  .max(2048)
  .openapi('SecretsManagerSecretArn')

const ConnectionBasicAuthResponseParametersSchema = z
  .object({
    Username: AuthHeaderParametersSchema.and(
      z.any().openapi({ description: 'The user name to use for Basic authorization.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the authorization parameters for the connection if Basic is specified as the authorization type.',
    required: [],
  })
  .openapi('ConnectionBasicAuthResponseParameters')

const ConnectionOAuthClientResponseParametersSchema = z
  .object({
    ClientID: AuthHeaderParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The client ID associated with the response to the connection request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the client response parameters for the connection when OAuth is specified as the authorization type.',
    required: [],
  })
  .openapi('ConnectionOAuthClientResponseParameters')

const ConnectionOAuthResponseParametersSchema = z
  .object({
    ClientParameters: ConnectionOAuthClientResponseParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ConnectionOAuthClientResponseParameters</code> object that contains details about the client parameters returned when OAuth is specified as the authorization type.',
        }),
    ).exactOptional(),
    AuthorizationEndpoint: HttpsEndpointSchema.and(
      z.any().openapi({ description: 'The URL to the HTTP endpoint that authorized the request.' }),
    ).exactOptional(),
    HttpMethod: ConnectionOAuthHttpMethodSchema.and(
      z.any().openapi({ description: 'The method used to connect to the HTTP endpoint.' }),
    ).exactOptional(),
    OAuthHttpParameters: ConnectionHttpParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The additional HTTP parameters used for the OAuth authorization request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the response parameters when OAuth is specified as the authorization type.',
    required: [],
  })
  .openapi('ConnectionOAuthResponseParameters')

const ConnectionApiKeyAuthResponseParametersSchema = z
  .object({
    ApiKeyName: AuthHeaderParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the header to use for the <code>APIKeyValue</code> used for authorization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the authorization parameters for the connection if API Key is specified as the authorization type.',
    required: [],
  })
  .openapi('ConnectionApiKeyAuthResponseParameters')

const ConnectionAuthResponseParametersSchema = z
  .object({
    BasicAuthParameters: ConnectionBasicAuthResponseParametersSchema.and(
      z.any().openapi({ description: 'The authorization parameters for Basic authorization.' }),
    ).exactOptional(),
    OAuthParameters: ConnectionOAuthResponseParametersSchema.and(
      z.any().openapi({ description: 'The OAuth parameters to use for authorization.' }),
    ).exactOptional(),
    ApiKeyAuthParameters: ConnectionApiKeyAuthResponseParametersSchema.and(
      z.any().openapi({ description: 'The API Key parameters to use for authorization.' }),
    ).exactOptional(),
    InvocationHttpParameters: ConnectionHttpParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional parameters for the connection that are passed through with every invocation to the HTTP endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the authorization parameters to use for the connection.',
    required: [],
  })
  .openapi('ConnectionAuthResponseParameters')

const DescribeConnectionResponseSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the connection retrieved.' }),
    ).exactOptional(),
    Name: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection retrieved.' }),
    ).exactOptional(),
    Description: ConnectionDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the connection retrieved.' }),
    ).exactOptional(),
    ConnectionState: ConnectionStateSchema.and(
      z.any().openapi({ description: 'The state of the connection retrieved.' }),
    ).exactOptional(),
    StateReason: ConnectionStateReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason that the connection is in the current connection state.',
        }),
    ).exactOptional(),
    AuthorizationType: ConnectionAuthorizationTypeSchema.and(
      z.any().openapi({ description: 'The type of authorization specified for the connection.' }),
    ).exactOptional(),
    SecretArn: SecretsManagerSecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the secret created from the authorization parameters specified for the connection.',
        }),
    ).exactOptional(),
    AuthParameters: ConnectionAuthResponseParametersSchema.and(
      z
        .any()
        .openapi({ description: 'The parameters to use for authorization for the connection.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A time stamp for the time that the connection was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last modified.',
        }),
    ).exactOptional(),
    LastAuthorizedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last authorized.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectionResponse')

const DescribeConnectionRequestSchema = z
  .object({
    Name: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection to retrieve.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DescribeConnectionRequest' })
  .openapi('DescribeConnectionRequest')

const DescribeEventBusResponseSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the event bus. Currently, this is always <code>default</code>.',
        }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the account permitted to write events to the current account.',
        }),
    ).exactOptional(),
    Policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy that enables the external account to send events to your account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventBusResponse')

const DescribeEventBusRequestSchema = z
  .object({
    Name: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus to show details for. If you omit this, the default event bus is displayed.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventBusRequest', required: [] })
  .openapi('DescribeEventBusRequest')

const EventSourceStateSchema = z.enum(['PENDING', 'ACTIVE', 'DELETED']).openapi('EventSourceState')

const DescribeEventSourceResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the partner event source.' }),
    ).exactOptional(),
    CreatedBy: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the SaaS partner that created the event source.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the event source was created.' }),
    ).exactOptional(),
    ExpirationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the event source will expire if you do not create a matching event bus.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the partner event source.' }),
    ).exactOptional(),
    State: EventSourceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventSourceResponse')

const DescribeEventSourceRequestSchema = z
  .object({
    Name: EventSourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the partner event source to display the details of.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DescribeEventSourceRequest' })
  .openapi('DescribeEventSourceRequest')

const DescribePartnerEventSourceResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the event source.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the event source.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePartnerEventSourceResponse')

const DescribePartnerEventSourceRequestSchema = z
  .object({
    Name: EventSourceNameSchema.and(
      z.any().openapi({ description: 'The name of the event source to display.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DescribePartnerEventSourceRequest' })
  .openapi('DescribePartnerEventSourceRequest')

const ReplayDescriptionSchema = z.string().regex(/.*/).max(512).openapi('ReplayDescription')

const ReplayDestinationFiltersSchema = z.array(ArnSchema).openapi('ReplayDestinationFilters')

const ReplayDestinationSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the event bus to replay event to. You can replay events only to the event bus specified to create the archive.',
        }),
    ),
    FilterArns: ReplayDestinationFiltersSchema.and(
      z.any().openapi({ description: 'A list of ARNs for rules to replay events to.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn'],
    description: 'A <code>ReplayDestination</code> object that contains details about a replay.',
  })
  .openapi('ReplayDestination')

const DescribeReplayResponseSchema = z
  .object({
    ReplayName: ReplayNameSchema.and(
      z.any().openapi({ description: 'The name of the replay.' }),
    ).exactOptional(),
    ReplayArn: ReplayArnSchema.and(
      z.any().openapi({ description: 'The ARN of the replay.' }),
    ).exactOptional(),
    Description: ReplayDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the replay.' }),
    ).exactOptional(),
    State: ReplayStateSchema.and(
      z.any().openapi({ description: 'The current state of the replay.' }),
    ).exactOptional(),
    StateReason: ReplayStateReasonSchema.and(
      z.any().openapi({ description: 'The reason that the replay is in the current state.' }),
    ).exactOptional(),
    EventSourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the archive events were replayed from.' }),
    ).exactOptional(),
    Destination: ReplayDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ReplayDestination</code> object that contains details about the replay.',
        }),
    ).exactOptional(),
    EventStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time stamp of the first event that was last replayed from the archive.',
        }),
    ).exactOptional(),
    EventEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time stamp for the last event that was replayed from the archive.',
        }),
    ).exactOptional(),
    EventLastReplayedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the event was last replayed.' }),
    ).exactOptional(),
    ReplayStartTime: TimestampSchema.and(
      z.any().openapi({ description: 'A time stamp for the time that the replay started.' }),
    ).exactOptional(),
    ReplayEndTime: TimestampSchema.and(
      z.any().openapi({ description: 'A time stamp for the time that the replay stopped.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReplayResponse')

const DescribeReplayRequestSchema = z
  .object({
    ReplayName: ReplayNameSchema.and(
      z.any().openapi({ description: 'The name of the replay to retrieve.' }),
    ),
  })
  .openapi({ required: ['ReplayName'], title: 'DescribeReplayRequest' })
  .openapi('DescribeReplayRequest')

const RuleArnSchema = z.string().min(1).max(1600).openapi('RuleArn')

const ScheduleExpressionSchema = z.string().max(256).openapi('ScheduleExpression')

const RuleStateSchema = z.enum(['ENABLED', 'DISABLED']).openapi('RuleState')

const RuleDescriptionSchema = z.string().max(512).openapi('RuleDescription')

const RoleArnSchema = z.string().min(1).max(1600).openapi('RoleArn')

const ManagedBySchema = z.string().min(1).max(128).openapi('ManagedBy')

const CreatedBySchema = z.string().min(1).max(128).openapi('CreatedBy')

const DescribeRuleResponseSchema = z
  .object({
    Name: RuleNameSchema.and(
      z.any().openapi({ description: 'The name of the rule.' }),
    ).exactOptional(),
    Arn: RuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rule.' }),
    ).exactOptional(),
    EventPattern: EventPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.',
        }),
    ).exactOptional(),
    ScheduleExpression: ScheduleExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".',
        }),
    ).exactOptional(),
    State: RuleStateSchema.and(
      z.any().openapi({ description: 'Specifies whether the rule is enabled or disabled.' }),
    ).exactOptional(),
    Description: RuleDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the rule.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the IAM role associated with the rule.',
        }),
    ).exactOptional(),
    ManagedBy: ManagedBySchema.and(
      z
        .any()
        .openapi({
          description:
            'If this is a managed rule, created by an Amazon Web Services service on your behalf, this field displays the principal name of the Amazon Web Services service that created the rule.',
        }),
    ).exactOptional(),
    EventBusName: EventBusNameSchema.and(
      z.any().openapi({ description: 'The name of the event bus associated with the rule.' }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The account ID of the user that created the rule. If you use <code>PutRule</code> to put a rule on an event bus in another account, the other account is the owner of the rule, and the rule ARN includes the account ID for that account. However, the value for <code>CreatedBy</code> is the account ID as the account that created the rule in the other account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRuleResponse')

const DescribeRuleRequestSchema = z
  .object({
    Name: RuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'DescribeRuleRequest' })
  .openapi('DescribeRuleRequest')

const DisableRuleRequestSchema = z
  .object({
    Name: RuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'DisableRuleRequest' })
  .openapi('DisableRuleRequest')

const EnableRuleRequestSchema = z
  .object({
    Name: RuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'EnableRuleRequest' })
  .openapi('EnableRuleRequest')

const ApiDestinationSchema = z
  .object({
    ApiDestinationArn: ApiDestinationArnSchema.and(
      z.any().openapi({ description: 'The ARN of the API destination.' }),
    ).exactOptional(),
    Name: ApiDestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the API destination.' }),
    ).exactOptional(),
    ApiDestinationState: ApiDestinationStateSchema.and(
      z.any().openapi({ description: 'The state of the API destination.' }),
    ).exactOptional(),
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the connection specified for the API destination.' }),
    ).exactOptional(),
    InvocationEndpoint: HttpsEndpointSchema.and(
      z.any().openapi({ description: 'The URL to the endpoint for the API destination.' }),
    ).exactOptional(),
    HttpMethod: ApiDestinationHttpMethodSchema.and(
      z.any().openapi({ description: 'The method to use to connect to the HTTP endpoint.' }),
    ).exactOptional(),
    InvocationRateLimitPerSecond: ApiDestinationInvocationRateLimitPerSecondSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of invocations per second to send to the HTTP endpoint.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the API destination was created.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the API destination was last modified.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details about an API destination.', required: [] })
  .openapi('ApiDestination')

const ApiDestinationResponseListSchema = z
  .array(ApiDestinationSchema)
  .openapi('ApiDestinationResponseList')

const NextTokenSchema = z.string().min(1).max(2048).openapi('NextToken')

const ListApiDestinationsResponseSchema = z
  .object({
    ApiDestinations: ApiDestinationResponseListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ApiDestination</code> objects that include information about an API destination.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token you can use in a subsequent request to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApiDestinationsResponse')

const LimitMax100Schema = z.int().min(1).max(100).openapi('LimitMax100')

const ListApiDestinationsRequestSchema = z
  .object({
    NamePrefix: ApiDestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name prefix to filter results returned. Only API destinations with a name that starts with the prefix are returned.',
        }),
    ).exactOptional(),
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the connection specified for the API destination.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of API destinations to include in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListApiDestinationsRequest', required: [] })
  .openapi('ListApiDestinationsRequest')

const ArchiveSchema = z
  .object({
    ArchiveName: ArchiveNameSchema.and(
      z.any().openapi({ description: 'The name of the archive.' }),
    ).exactOptional(),
    EventSourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the event bus associated with the archive. Only events from this event bus are sent to the archive.',
        }),
    ).exactOptional(),
    State: ArchiveStateSchema.and(
      z.any().openapi({ description: 'The current state of the archive.' }),
    ).exactOptional(),
    StateReason: ArchiveStateReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'A description for the reason that the archive is in the current state.',
        }),
    ).exactOptional(),
    RetentionDays: RetentionDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days to retain events in the archive before they are deleted.',
        }),
    ).exactOptional(),
    SizeBytes: LongSchema.and(
      z.any().openapi({ description: 'The size of the archive, in bytes.' }),
    ).exactOptional(),
    EventCount: LongSchema.and(
      z.any().openapi({ description: 'The number of events in the archive.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time stamp for the time that the archive was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An <code>Archive</code> object that contains details about an archive.',
    required: [],
  })
  .openapi('Archive')

const ArchiveResponseListSchema = z.array(ArchiveSchema).openapi('ArchiveResponseList')

const ListArchivesResponseSchema = z
  .object({
    Archives: ArchiveResponseListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Archive</code> objects that include details about an archive.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListArchivesResponse')

const ListArchivesRequestSchema = z
  .object({
    NamePrefix: ArchiveNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name prefix to filter the archives returned. Only archives with name that match the prefix are returned.',
        }),
    ).exactOptional(),
    EventSourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the event source associated with the archive.' }),
    ).exactOptional(),
    State: ArchiveStateSchema.and(
      z.any().openapi({ description: 'The state of the archive.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListArchivesRequest', required: [] })
  .openapi('ListArchivesRequest')

const ConnectionSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the connection.' }),
    ).exactOptional(),
    Name: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection.' }),
    ).exactOptional(),
    ConnectionState: ConnectionStateSchema.and(
      z.any().openapi({ description: 'The state of the connection.' }),
    ).exactOptional(),
    StateReason: ConnectionStateReasonSchema.and(
      z
        .any()
        .openapi({ description: 'The reason that the connection is in the connection state.' }),
    ).exactOptional(),
    AuthorizationType: ConnectionAuthorizationTypeSchema.and(
      z.any().openapi({ description: 'The authorization type specified for the connection.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A time stamp for the time that the connection was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last modified.',
        }),
    ).exactOptional(),
    LastAuthorizedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last authorized.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a connection.', required: [] })
  .openapi('Connection')

const ConnectionResponseListSchema = z.array(ConnectionSchema).openapi('ConnectionResponseList')

const ListConnectionsResponseSchema = z
  .object({
    Connections: ConnectionResponseListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of connections objects that include details about the connections.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token you can use in a subsequent request to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConnectionsResponse')

const ListConnectionsRequestSchema = z
  .object({
    NamePrefix: ConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name prefix to filter results returned. Only connections with a name that starts with the prefix are returned.',
        }),
    ).exactOptional(),
    ConnectionState: ConnectionStateSchema.and(
      z.any().openapi({ description: 'The state of the connection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of connections to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListConnectionsRequest', required: [] })
  .openapi('ListConnectionsRequest')

const EventBusSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the event bus.' }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the event bus.' }),
    ).exactOptional(),
    Policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions policy of the event bus, describing which other Amazon Web Services accounts can write events to this event bus.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An event bus receives events from a source and routes them to rules associated with that event bus. Your account's default event bus receives events from Amazon Web Services services. A custom event bus can receive events from your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications.",
    required: [],
  })
  .openapi('EventBus')

const EventBusListSchema = z.array(EventBusSchema).openapi('EventBusList')

const ListEventBusesResponseSchema = z
  .object({
    EventBuses: EventBusListSchema.and(
      z.any().openapi({ description: 'This list of event buses.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventBusesResponse')

const ListEventBusesRequestSchema = z
  .object({
    NamePrefix: EventBusNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifying this limits the results to only those event buses with names that start with the specified prefix.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEventBusesRequest', required: [] })
  .openapi('ListEventBusesRequest')

const EventSourceSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the event source.' }),
    ).exactOptional(),
    CreatedBy: StringSchema.and(
      z.any().openapi({ description: 'The name of the partner that created the event source.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the event source was created.' }),
    ).exactOptional(),
    ExpirationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time that the event source will expire, if the Amazon Web Services account doesn't create a matching event bus for it.",
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the event source.' }),
    ).exactOptional(),
    State: EventSourceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.",
    required: [],
  })
  .openapi('EventSource')

const EventSourceListSchema = z.array(EventSourceSchema).openapi('EventSourceList')

const ListEventSourcesResponseSchema = z
  .object({
    EventSources: EventSourceListSchema.and(
      z.any().openapi({ description: 'The list of event sources.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventSourcesResponse')

const EventSourceNamePrefixSchema = z
  .string()
  .regex(/[\/\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(256)
  .openapi('EventSourceNamePrefix')

const ListEventSourcesRequestSchema = z
  .object({
    NamePrefix: EventSourceNamePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifying this limits the results to only those partner event sources with names that start with the specified prefix.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEventSourcesRequest', required: [] })
  .openapi('ListEventSourcesRequest')

const PartnerEventSourceAccountSchema = z
  .object({
    Account: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID that the partner event source was offered to.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the event source was created.' }),
    ).exactOptional(),
    ExpirationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time that the event source will expire, if the Amazon Web Services account doesn't create a matching event bus for it.",
        }),
    ).exactOptional(),
    State: EventSourceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The Amazon Web Services account that a partner event source has been offered to.',
    required: [],
  })
  .openapi('PartnerEventSourceAccount')

const PartnerEventSourceAccountListSchema = z
  .array(PartnerEventSourceAccountSchema)
  .openapi('PartnerEventSourceAccountList')

const ListPartnerEventSourceAccountsResponseSchema = z
  .object({
    PartnerEventSourceAccounts: PartnerEventSourceAccountListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of partner event sources returned by the operation.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPartnerEventSourceAccountsResponse')

const ListPartnerEventSourceAccountsRequestSchema = z
  .object({
    EventSourceName: EventSourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the partner event source to display account information about.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned by a previous call to this operation. Specifying this retrieves the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EventSourceName'], title: 'ListPartnerEventSourceAccountsRequest' })
  .openapi('ListPartnerEventSourceAccountsRequest')

const PartnerEventSourceSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the partner event source.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the partner event source.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.",
    required: [],
  })
  .openapi('PartnerEventSource')

const PartnerEventSourceListSchema = z
  .array(PartnerEventSourceSchema)
  .openapi('PartnerEventSourceList')

const ListPartnerEventSourcesResponseSchema = z
  .object({
    PartnerEventSources: PartnerEventSourceListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of partner event sources returned by the operation.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPartnerEventSourcesResponse')

const PartnerEventSourceNamePrefixSchema = z
  .string()
  .regex(/aws\.partner\/[\.\-_A-Za-z0-9]+\/[\/\.\-_A-Za-z0-9]*/)
  .min(1)
  .max(256)
  .openapi('PartnerEventSourceNamePrefix')

const ListPartnerEventSourcesRequestSchema = z
  .object({
    NamePrefix: PartnerEventSourceNamePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify this, the results are limited to only those partner event sources that start with the string you specify.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned by a previous call to this operation. Specifying this retrieves the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z
        .any()
        .openapi({
          description:
            'pecifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['NamePrefix'], title: 'ListPartnerEventSourcesRequest' })
  .openapi('ListPartnerEventSourcesRequest')

const ReplaySchema = z
  .object({
    ReplayName: ReplayNameSchema.and(
      z.any().openapi({ description: 'The name of the replay.' }),
    ).exactOptional(),
    EventSourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the archive to replay event from.' }),
    ).exactOptional(),
    State: ReplayStateSchema.and(
      z.any().openapi({ description: 'The current state of the replay.' }),
    ).exactOptional(),
    StateReason: ReplayStateReasonSchema.and(
      z.any().openapi({ description: 'A description of why the replay is in the current state.' }),
    ).exactOptional(),
    EventStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp for the time to start replaying events. This is determined by the time in the event as described in <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEventsRequestEntry.html#eventbridge-Type-PutEventsRequestEntry-Time">Time</a>.',
        }),
    ).exactOptional(),
    EventEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp for the time to start replaying events. Any event with a creation time prior to the <code>EventEndTime</code> specified is replayed.',
        }),
    ).exactOptional(),
    EventLastReplayedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A time stamp for the time that the last event was replayed.' }),
    ).exactOptional(),
    ReplayStartTime: TimestampSchema.and(
      z.any().openapi({ description: 'A time stamp for the time that the replay started.' }),
    ).exactOptional(),
    ReplayEndTime: TimestampSchema.and(
      z.any().openapi({ description: 'A time stamp for the time that the replay completed.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A <code>Replay</code> object that contains details about a replay.',
    required: [],
  })
  .openapi('Replay')

const ReplayListSchema = z.array(ReplaySchema).openapi('ReplayList')

const ListReplaysResponseSchema = z
  .object({
    Replays: ReplayListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Replay</code> objects that contain information about the replay.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReplaysResponse')

const ListReplaysRequestSchema = z
  .object({
    NamePrefix: ReplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name prefix to filter the replays returned. Only replays with name that match the prefix are returned.',
        }),
    ).exactOptional(),
    State: ReplayStateSchema.and(
      z.any().openapi({ description: 'The state of the replay.' }),
    ).exactOptional(),
    EventSourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the archive from which the events are replayed.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of replays to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReplaysRequest', required: [] })
  .openapi('ListReplaysRequest')

const RuleNameListSchema = z.array(RuleNameSchema).openapi('RuleNameList')

const ListRuleNamesByTargetResponseSchema = z
  .object({
    RuleNames: RuleNameListSchema.and(
      z.any().openapi({ description: 'The names of the rules that can invoke the given target.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether there are additional results to retrieve. If there are no more results, the value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRuleNamesByTargetResponse')

const TargetArnSchema = z.string().min(1).max(1600).openapi('TargetArn')

const ListRuleNamesByTargetRequestSchema = z
  .object({
    TargetArn: TargetArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target resource.' }),
    ),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus to list rules for. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetArn'], title: 'ListRuleNamesByTargetRequest' })
  .openapi('ListRuleNamesByTargetRequest')

const RuleSchema = z
  .object({
    Name: RuleNameSchema.and(
      z.any().openapi({ description: 'The name of the rule.' }),
    ).exactOptional(),
    Arn: RuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rule.' }),
    ).exactOptional(),
    EventPattern: EventPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event pattern of the rule. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.',
        }),
    ).exactOptional(),
    State: RuleStateSchema.and(
      z.any().openapi({ description: 'The state of the rule.' }),
    ).exactOptional(),
    Description: RuleDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the rule.' }),
    ).exactOptional(),
    ScheduleExpression: ScheduleExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html">Creating an Amazon EventBridge rule that runs on a schedule</a>.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the role that is used for target invocation.</p> <p>If you're setting an event bus in another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure, instead of here in this parameter.</p>",
        }),
    ).exactOptional(),
    ManagedBy: ManagedBySchema.and(
      z
        .any()
        .openapi({
          description:
            'If the rule was created on behalf of your account by an Amazon Web Services service, this field displays the principal name of the service that created the rule.',
        }),
    ).exactOptional(),
    EventBusName: EventBusNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a rule in Amazon EventBridge.',
    required: [],
  })
  .openapi('Rule')

const RuleResponseListSchema = z.array(RuleSchema).openapi('RuleResponseList')

const ListRulesResponseSchema = z
  .object({
    Rules: RuleResponseListSchema.and(
      z.any().openapi({ description: 'The rules that match the specified criteria.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether there are additional results to retrieve. If there are no more results, the value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRulesResponse')

const ListRulesRequestSchema = z
  .object({
    NamePrefix: RuleNameSchema.and(
      z.any().openapi({ description: 'The prefix matching the rule name.' }),
    ).exactOptional(),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus to list the rules for. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRulesRequest', required: [] })
  .openapi('ListRulesRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of tag keys and values associated with the resource you specified',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the EventBridge resource for which you want to view tags.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TargetIdSchema = z
  .string()
  .regex(/[\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(64)
  .openapi('TargetId')

const TargetInputSchema = z.string().max(8192).openapi('TargetInput')

const TargetInputPathSchema = z.string().max(256).openapi('TargetInputPath')

const TransformerPathsSchema = z
  .record(z.string(), TargetInputPathSchema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('TransformerPaths')

const TransformerInputSchema = z.string().min(1).max(8192).openapi('TransformerInput')

const InputTransformerSchema = z
  .object({
    InputPathsMap: TransformerPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Map of JSON paths to be extracted from the event. You can then insert these in the template in <code>InputTemplate</code> to produce the output you want to be sent to the target.</p> <p> <code>InputPathsMap</code> is an array key-value pairs, where each value is a valid JSON path. You can have as many as 100 key-value pairs. You must use JSON dot notation, not bracket notation.</p> <p>The keys cannot start with "Amazon Web Services." </p>',
        }),
    ).exactOptional(),
    InputTemplate: TransformerInputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Input template where you specify placeholders that will be filled with the values of the keys from <code>InputPathsMap</code> to customize the data sent to the target. Enclose each <code>InputPathsMaps</code> value in brackets: &lt;<i>value</i>&gt; The InputTemplate must be valid JSON.</p> <p>If <code>InputTemplate</code> is a JSON object (surrounded by curly braces), the following restrictions apply:</p> <ul> <li> <p>The placeholder cannot be used as an object key.</p> </li> </ul> <p>The following example shows the syntax for using <code>InputPathsMap</code> and <code>InputTemplate</code>.</p> <p> <code> "InputTransformer":</code> </p> <p> <code>{</code> </p> <p> <code>"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},</code> </p> <p> <code>"InputTemplate": "&lt;instance&gt; is in state &lt;status&gt;"</code> </p> <p> <code>}</code> </p> <p>To have the <code>InputTemplate</code> include quote marks within a JSON string, escape each quote marks with a slash, as in the following example:</p> <p> <code> "InputTransformer":</code> </p> <p> <code>{</code> </p> <p> <code>"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},</code> </p> <p> <code>"InputTemplate": "&lt;instance&gt; is in state \\"&lt;status&gt;\\""</code> </p> <p> <code>}</code> </p> <p>The <code>InputTemplate</code> can also be valid JSON with varibles in quotes or out, as in the following example:</p> <p> <code> "InputTransformer":</code> </p> <p> <code>{</code> </p> <p> <code>"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},</code> </p> <p> <code>"InputTemplate": \'{"myInstance": &lt;instance&gt;,"myStatus": "&lt;instance&gt; is in state \\"&lt;status&gt;\\""}\'</code> </p> <p> <code>}</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['InputTemplate'],
    description:
      'Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.',
  })
  .openapi('InputTransformer')

const TargetPartitionKeyPathSchema = z.string().max(256).openapi('TargetPartitionKeyPath')

const KinesisParametersSchema = z
  .object({
    PartitionKeyPath: TargetPartitionKeyPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON path to be extracted from the event and used as the partition key. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key">Amazon Kinesis Streams Key Concepts</a> in the <i>Amazon Kinesis Streams Developer Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['PartitionKeyPath'],
    description:
      'This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key.',
  })
  .openapi('KinesisParameters')

const RunCommandTargetKeySchema = z
  .string()
  .regex(/^[\p{L}\p{Z}\p{N}_.:\/=+\-@]*$/u)
  .min(1)
  .max(128)
  .openapi('RunCommandTargetKey')

const RunCommandTargetValueSchema = z.string().min(1).max(256).openapi('RunCommandTargetValue')

const RunCommandTargetValuesSchema = z
  .array(RunCommandTargetValueSchema)
  .min(1)
  .max(50)
  .openapi('RunCommandTargetValues')

const RunCommandTargetSchema = z
  .object({
    Key: RunCommandTargetKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Can be either <code>tag:</code> <i>tag-key</i> or <code>InstanceIds</code>.',
        }),
    ),
    Values: RunCommandTargetValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>Key</code> is <code>tag:</code> <i>tag-key</i>, <code>Values</code> is a list of tag values. If <code>Key</code> is <code>InstanceIds</code>, <code>Values</code> is a list of Amazon EC2 instance IDs.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Values'],
    description:
      'Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.',
  })
  .openapi('RunCommandTarget')

const RunCommandTargetsSchema = z
  .array(RunCommandTargetSchema)
  .min(1)
  .max(5)
  .openapi('RunCommandTargets')

const RunCommandParametersSchema = z
  .object({
    RunCommandTargets: RunCommandTargetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Currently, we support including only one RunCommandTarget block, which specifies either an array of InstanceIds or a tag.',
        }),
    ),
  })
  .openapi({
    required: ['RunCommandTargets'],
    description:
      'This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. ',
  })
  .openapi('RunCommandParameters')

const LimitMin1Schema = z.int().min(1).openapi('LimitMin1')

const LaunchTypeSchema = z.enum(['EC2', 'FARGATE', 'EXTERNAL']).openapi('LaunchType')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const AssignPublicIpSchema = z.enum(['ENABLED', 'DISABLED']).openapi('AssignPublicIp')

const AwsVpcConfigurationSchema = z
  .object({
    Subnets: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.',
        }),
    ),
    SecurityGroups: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.',
        }),
    ).exactOptional(),
    AssignPublicIp: AssignPublicIpSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Subnets'],
    description:
      'This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.',
  })
  .openapi('AwsVpcConfiguration')

const NetworkConfigurationSchema = z
  .object({
    awsvpcConfiguration: AwsVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This structure specifies the network configuration for an ECS task.',
    required: [],
  })
  .openapi('NetworkConfiguration')

const CapacityProviderSchema = z.string().min(1).max(255).openapi('CapacityProvider')

const CapacityProviderStrategyItemWeightSchema = z
  .int()
  .min(0)
  .max(1000)
  .openapi('CapacityProviderStrategyItemWeight')

const CapacityProviderStrategyItemBaseSchema = z
  .int()
  .min(0)
  .max(100000)
  .openapi('CapacityProviderStrategyItemBase')

const CapacityProviderStrategyItemSchema = z
  .object({
    capacityProvider: CapacityProviderSchema.and(
      z.any().openapi({ description: 'The short name of the capacity provider.' }),
    ),
    weight: CapacityProviderStrategyItemWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.',
        }),
    ).exactOptional(),
    base: CapacityProviderStrategyItemBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['capacityProvider'],
    description:
      'The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.',
  })
  .openapi('CapacityProviderStrategyItem')

const CapacityProviderStrategySchema = z
  .array(CapacityProviderStrategyItemSchema)
  .max(6)
  .openapi('CapacityProviderStrategy')

const PlacementConstraintTypeSchema = z
  .enum(['distinctInstance', 'memberOf'])
  .openapi('PlacementConstraintType')

const PlacementConstraintExpressionSchema = z
  .string()
  .max(2000)
  .openapi('PlacementConstraintExpression')

const PlacementConstraintSchema = z
  .object({
    type: PlacementConstraintTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates. ',
        }),
    ).exactOptional(),
    expression: PlacementConstraintExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is <code>distinctInstance</code>. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the Amazon Elastic Container Service Developer Guide. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide.',
    required: [],
  })
  .openapi('PlacementConstraint')

const PlacementConstraintsSchema = z
  .array(PlacementConstraintSchema)
  .max(10)
  .openapi('PlacementConstraints')

const PlacementStrategyTypeSchema = z
  .enum(['random', 'spread', 'binpack'])
  .openapi('PlacementStrategyType')

const PlacementStrategyFieldSchema = z.string().max(255).openapi('PlacementStrategyField')

const PlacementStrategySchema = z
  .object({
    type: PlacementStrategyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task). ',
        }),
    ).exactOptional(),
    field: PlacementStrategyFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            'The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide.',
    required: [],
  })
  .openapi('PlacementStrategy')

const PlacementStrategiesSchema = z
  .array(PlacementStrategySchema)
  .max(5)
  .openapi('PlacementStrategies')

const PropagateTagsSchema = z.literal('TASK_DEFINITION').openapi('PropagateTags')

const ReferenceIdSchema = z.string().max(1024).openapi('ReferenceId')

const EcsParametersSchema = z
  .object({
    TaskDefinitionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the task definition to use if the event target is an Amazon ECS task. ',
        }),
    ),
    TaskCount: LimitMin1Schema.and(
      z
        .any()
        .openapi({
          description:
            'The number of tasks to create based on <code>TaskDefinition</code>. The default is 1.',
        }),
    ).exactOptional(),
    LaunchType: LaunchTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The <code>FARGATE</code> value is supported only in the Regions where Fargate witt Amazon ECS is supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">Fargate on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.',
        }),
    ).exactOptional(),
    NetworkConfiguration: NetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use this structure if the Amazon ECS task uses the <code>awsvpc</code> network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if <code>LaunchType</code> is <code>FARGATE</code> because the <code>awsvpc</code> mode is required for Fargate tasks.</p> <p>If you specify <code>NetworkConfiguration</code> when the target ECS task does not use the <code>awsvpc</code> network mode, the task fails.</p>',
        }),
    ).exactOptional(),
    PlatformVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as <code>1.1.0</code>.</p> <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Group: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an ECS task group for the task. The maximum length is 255 characters.',
        }),
    ).exactOptional(),
    CapacityProviderStrategy: CapacityProviderStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The capacity provider strategy to use for the task.</p> <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code> parameter must be omitted. If no <code>capacityProviderStrategy</code> or launchType is specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used. </p>',
        }),
    ).exactOptional(),
    EnableECSManagedTags: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to enable Amazon ECS managed tags for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the Amazon Elastic Container Service Developer Guide. ',
        }),
    ).exactOptional(),
    EnableExecuteCommand: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.',
        }),
    ).exactOptional(),
    PlacementConstraints: PlacementConstraintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).',
        }),
    ).exactOptional(),
    PlacementStrategy: PlacementStrategiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task. ',
        }),
    ).exactOptional(),
    PropagateTags: PropagateTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action. ',
        }),
    ).exactOptional(),
    ReferenceId: ReferenceIdSchema.and(
      z.any().openapi({ description: 'The reference ID to use for the task.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags">RunTask</a> in the Amazon ECS API Reference.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TaskDefinitionArn'],
    description: 'The custom parameters to be used when the target is an Amazon ECS task.',
  })
  .openapi('EcsParameters')

const IntegerSchema = z.int().openapi('Integer')

const BatchArrayPropertiesSchema = z
  .object({
    Size: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.',
    required: [],
  })
  .openapi('BatchArrayProperties')

const BatchRetryStrategySchema = z
  .object({
    Attempts: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of times to attempt to retry, if the job fails. Valid values are 1–10.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.',
    required: [],
  })
  .openapi('BatchRetryStrategy')

const BatchParametersSchema = z
  .object({
    JobDefinition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN or name of the job definition to use if the event target is an Batch job. This job definition must already exist.',
        }),
    ),
    JobName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name to use for this execution of the job, if the target is an Batch job.',
        }),
    ),
    ArrayProperties: BatchArrayPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.',
        }),
    ).exactOptional(),
    RetryStrategy: BatchRetryStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry strategy to use for failed jobs, if the target is an Batch job. The retry strategy is the number of times to retry the failed job execution. Valid values are 1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the job definition.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['JobDefinition', 'JobName'],
    description: 'The custom parameters to be used when the target is an Batch job.',
  })
  .openapi('BatchParameters')

const MessageGroupIdSchema = z.string().openapi('MessageGroupId')

const SqsParametersSchema = z
  .object({
    MessageGroupId: MessageGroupIdSchema.and(
      z.any().openapi({ description: 'The FIFO message group ID to use as the target.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This structure includes the custom parameter to be used when the target is an SQS FIFO queue.',
    required: [],
  })
  .openapi('SqsParameters')

const PathParameterSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .openapi('PathParameter')

const PathParameterListSchema = z.array(PathParameterSchema).openapi('PathParameterList')

const HeaderParametersMapSchema = z
  .record(z.string(), HeaderValueSchema)
  .openapi('HeaderParametersMap')

const QueryStringParametersMapSchema = z
  .record(z.string(), QueryStringValueSchema)
  .openapi('QueryStringParametersMap')

const HttpParametersSchema = z
  .object({
    PathParameterValues: PathParameterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").',
        }),
    ).exactOptional(),
    HeaderParameters: HeaderParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.',
        }),
    ).exactOptional(),
    QueryStringParameters: QueryStringParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.',
    required: [],
  })
  .openapi('HttpParameters')

const RedshiftSecretManagerArnSchema = z
  .string()
  .regex(/(^arn:aws([a-z]|\-)*:secretsmanager:[a-z0-9-.]+:.*)|(\$(\.[\w_-]+(\[(\d+|\*)\])*)*)/)
  .min(1)
  .max(1600)
  .openapi('RedshiftSecretManagerArn')

const DatabaseSchema = z.string().min(1).max(64).openapi('Database')

const DbUserSchema = z.string().min(1).max(128).openapi('DbUser')

const SqlSchema = z.string().min(1).max(100000).openapi('Sql')

const StatementNameSchema = z.string().min(1).max(500).openapi('StatementName')

const RedshiftDataParametersSchema = z
  .object({
    SecretManagerArn: RedshiftSecretManagerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the secret that enables access to the database. Required when authenticating using Amazon Web Services Secrets Manager.',
        }),
    ).exactOptional(),
    Database: DatabaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the database. Required when authenticating using temporary credentials.',
        }),
    ),
    DbUser: DbUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database user name. Required when authenticating using temporary credentials.',
        }),
    ).exactOptional(),
    Sql: SqlSchema.and(z.any().openapi({ description: 'The SQL statement text to run.' })),
    StatementName: StatementNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the SQL statement. You can name the SQL statement when you create it to identify the query.',
        }),
    ).exactOptional(),
    WithEvent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to send an event back to EventBridge after the SQL statement runs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Database', 'Sql'],
    description:
      'These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.',
  })
  .openapi('RedshiftDataParameters')

const SageMakerPipelineParameterNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*$/)
  .min(1)
  .max(256)
  .openapi('SageMakerPipelineParameterName')

const SageMakerPipelineParameterValueSchema = z
  .string()
  .max(1024)
  .openapi('SageMakerPipelineParameterValue')

const SageMakerPipelineParameterSchema = z
  .object({
    Name: SageMakerPipelineParameterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of parameter to start execution of a SageMaker Model Building Pipeline.',
        }),
    ),
    Value: SageMakerPipelineParameterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Value of parameter to start execution of a SageMaker Model Building Pipeline.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.',
  })
  .openapi('SageMakerPipelineParameter')

const SageMakerPipelineParameterListSchema = z
  .array(SageMakerPipelineParameterSchema)
  .min(0)
  .max(200)
  .openapi('SageMakerPipelineParameterList')

const SageMakerPipelineParametersSchema = z
  .object({
    PipelineParameterList: SageMakerPipelineParameterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of Parameter names and values for SageMaker Model Building Pipeline execution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.',
    required: [],
  })
  .openapi('SageMakerPipelineParameters')

const ResourceArnSchema = z.string().min(1).max(1600).openapi('ResourceArn')

const DeadLetterConfigSchema = z
  .object({
    Arn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the SQS queue specified as the target for the dead-letter queue.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.',
    required: [],
  })
  .openapi('DeadLetterConfig')

const MaximumRetryAttemptsSchema = z.int().min(0).max(185).openapi('MaximumRetryAttempts')

const MaximumEventAgeInSecondsSchema = z
  .int()
  .min(60)
  .max(86400)
  .openapi('MaximumEventAgeInSeconds')

const RetryPolicySchema = z
  .object({
    MaximumRetryAttempts: MaximumRetryAttemptsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of retry attempts to make before the request fails. Retry attempts continue until either the maximum number of attempts is made or until the duration of the <code>MaximumEventAgeInSeconds</code> is met.',
        }),
    ).exactOptional(),
    MaximumEventAgeInSeconds: MaximumEventAgeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of time, in seconds, to continue to make retry attempts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A <code>RetryPolicy</code> object that includes information about the retry policy settings.',
    required: [],
  })
  .openapi('RetryPolicy')

const TargetSchema = z
  .object({
    Id: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the target. We recommend using a memorable and unique string.',
        }),
    ),
    Arn: TargetArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target.' }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If one rule triggers multiple targets, you can use a different IAM role for each target.',
        }),
    ).exactOptional(),
    Input: TargetInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data Interchange Format</a>.',
        }),
    ).exactOptional(),
    InputPath: TargetInputPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the JSONPath that is used for extracting part of the matched event when passing it to the target. You must use JSON dot notation, not bracket notation. For more information about JSON paths, see <a href="http://goessner.net/articles/JsonPath/">JSONPath</a>.',
        }),
    ).exactOptional(),
    InputTransformer: InputTransformerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.',
        }),
    ).exactOptional(),
    KinesisParameters: KinesisParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom parameter you can use to control the shard assignment, when the target is a Kinesis data stream. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key.',
        }),
    ).exactOptional(),
    RunCommandParameters: RunCommandParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Parameters used when you are using the rule to invoke Amazon EC2 Run Command.',
        }),
    ).exactOptional(),
    EcsParameters: EcsParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the Amazon ECS task definition and task count to be used, if the event target is an Amazon ECS task. For more information about Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Task Definitions </a> in the <i>Amazon EC2 Container Service Developer Guide</i>.',
        }),
    ).exactOptional(),
    BatchParameters: BatchParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the event target is an Batch job, this contains the job definition, job name, and other parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/jobs.html">Jobs</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    SqsParameters: SqsParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the message group ID to use when the target is a FIFO queue.</p> <p>If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.</p>',
        }),
    ).exactOptional(),
    HttpParameters: HttpParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or EventBridge ApiDestination.</p> <p>If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence.</p>",
        }),
    ).exactOptional(),
    RedshiftDataParameters: RedshiftDataParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the Amazon Redshift Data API parameters to use when the target is a Amazon Redshift cluster.</p> <p>If you specify a Amazon Redshift Cluster as a Target, you can use this to specify parameters to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.</p>',
        }),
    ).exactOptional(),
    SageMakerPipelineParameters: SageMakerPipelineParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the SageMaker Model Building Pipeline parameters to start execution of a SageMaker Model Building Pipeline.</p> <p>If you specify a SageMaker Model Building Pipeline as a target, you can use this to specify parameters to start a pipeline execution based on EventBridge events.</p>',
        }),
    ).exactOptional(),
    DeadLetterConfig: DeadLetterConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>DeadLetterConfig</code> that defines the target queue to send dead-letter queue events to.',
        }),
    ).exactOptional(),
    RetryPolicy: RetryPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RetryPolicy</code> object that contains the retry policy configuration to use for the dead-letter queue.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'Arn'],
    description:
      '<p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>',
  })
  .openapi('Target')

const TargetListSchema = z.array(TargetSchema).min(1).max(100).openapi('TargetList')

const ListTargetsByRuleResponseSchema = z
  .object({
    Targets: TargetListSchema.and(
      z.any().openapi({ description: 'The targets assigned to the rule.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether there are additional results to retrieve. If there are no more results, the value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTargetsByRuleResponse')

const ListTargetsByRuleRequestSchema = z
  .object({
    Rule: RuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token returned by a previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Limit: LimitMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Rule'], title: 'ListTargetsByRuleRequest' })
  .openapi('ListTargetsByRuleRequest')

const EventIdSchema = z.string().openapi('EventId')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const PutEventsResultEntrySchema = z
  .object({
    EventId: EventIdSchema.and(
      z.any().openapi({ description: 'The ID of the event.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The error code that indicates why the event submission failed.' }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The error message that explains why the event submission failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents an event that failed to be submitted.', required: [] })
  .openapi('PutEventsResultEntry')

const PutEventsResultEntryListSchema = z
  .array(PutEventsResultEntrySchema)
  .openapi('PutEventsResultEntryList')

const PutEventsResponseSchema = z
  .object({
    FailedEntryCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of failed entries.' }),
    ).exactOptional(),
    Entries: PutEventsResultEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The successfully and unsuccessfully ingested events results. If the ingestion was successful, the entry has the event ID in it. Otherwise, you can use the error code and error message to identify the problem with the entry.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutEventsResponse')

const EventTimeSchema = z.iso.datetime({ offset: true }).openapi('EventTime')

const EventResourceSchema = z.string().openapi('EventResource')

const EventResourceListSchema = z.array(EventResourceSchema).openapi('EventResourceList')

const NonPartnerEventBusNameOrArnSchema = z
  .string()
  .regex(/(arn:aws[\w-]*:events:[a-z]{2}-[a-z]+-[\w-]+:[0-9]{12}:event-bus\/)?[\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(1600)
  .openapi('NonPartnerEventBusNameOrArn')

const TraceHeaderSchema = z.string().min(1).max(500).openapi('TraceHeader')

const PutEventsRequestEntrySchema = z
  .object({
    Time: EventTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time stamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no time stamp is provided, the time stamp of the <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">PutEvents</a> call is used.',
        }),
    ).exactOptional(),
    Source: StringSchema.and(
      z.any().openapi({ description: 'The source of the event.' }),
    ).exactOptional(),
    Resources: EventResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.',
        }),
    ).exactOptional(),
    DetailType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Free-form string used to decide what fields to expect in the event detail.',
        }),
    ).exactOptional(),
    Detail: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid JSON string. There is no other schema imposed. The JSON string may contain fields and nested subobjects.',
        }),
    ).exactOptional(),
    EventBusName: NonPartnerEventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus to receive the event. Only the rules that are associated with this event bus are used to match the event. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
    TraceHeader: TraceHeaderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An X-Ray trade header, which is an http header (X-Amzn-Trace-Id) that contains the trace-id associated with the event.</p> <p>To learn more about X-Ray trace headers, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-tracingheader">Tracing header</a> in the X-Ray Developer Guide.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents an event to be submitted.', required: [] })
  .openapi('PutEventsRequestEntry')

const PutEventsRequestEntryListSchema = z
  .array(PutEventsRequestEntrySchema)
  .min(1)
  .max(10)
  .openapi('PutEventsRequestEntryList')

const PutEventsRequestSchema = z
  .object({
    Entries: PutEventsRequestEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on.',
        }),
    ),
  })
  .openapi({ required: ['Entries'], title: 'PutEventsRequest' })
  .openapi('PutEventsRequest')

const PutPartnerEventsResultEntrySchema = z
  .object({
    EventId: EventIdSchema.and(
      z.any().openapi({ description: 'The ID of the event.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The error code that indicates why the event submission failed.' }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The error message that explains why the event submission failed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents an event that a partner tried to generate, but failed.',
    required: [],
  })
  .openapi('PutPartnerEventsResultEntry')

const PutPartnerEventsResultEntryListSchema = z
  .array(PutPartnerEventsResultEntrySchema)
  .openapi('PutPartnerEventsResultEntryList')

const PutPartnerEventsResponseSchema = z
  .object({
    FailedEntryCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of events from this operation that could not be written to the partner event bus.',
        }),
    ).exactOptional(),
    Entries: PutPartnerEventsResultEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of events from this operation that were successfully written to the partner event bus.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutPartnerEventsResponse')

const PutPartnerEventsRequestEntrySchema = z
  .object({
    Time: EventTimeSchema.and(
      z.any().openapi({ description: 'The date and time of the event.' }),
    ).exactOptional(),
    Source: EventSourceNameSchema.and(
      z.any().openapi({ description: 'The event source that is generating the entry.' }),
    ).exactOptional(),
    Resources: EventResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.',
        }),
    ).exactOptional(),
    DetailType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A free-form string used to decide what fields to expect in the event detail.',
        }),
    ).exactOptional(),
    Detail: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid JSON string. There is no other schema imposed. The JSON string may contain fields and nested subobjects.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The details about an event generated by an SaaS partner.',
    required: [],
  })
  .openapi('PutPartnerEventsRequestEntry')

const PutPartnerEventsRequestEntryListSchema = z
  .array(PutPartnerEventsRequestEntrySchema)
  .min(1)
  .max(20)
  .openapi('PutPartnerEventsRequestEntryList')

const PutPartnerEventsRequestSchema = z
  .object({
    Entries: PutPartnerEventsRequestEntryListSchema.and(
      z.any().openapi({ description: 'The list of events to write to the event bus.' }),
    ),
  })
  .openapi({ required: ['Entries'], title: 'PutPartnerEventsRequest' })
  .openapi('PutPartnerEventsRequest')

const NonPartnerEventBusNameSchema = z
  .string()
  .regex(/[\.\-_A-Za-z0-9]+/)
  .min(1)
  .max(256)
  .openapi('NonPartnerEventBusName')

const ActionSchema = z
  .string()
  .regex(/events:[a-zA-Z]+/)
  .min(1)
  .max(64)
  .openapi('Action')

const PrincipalSchema = z
  .string()
  .regex(/(\d{12}|\*)/)
  .min(1)
  .max(12)
  .openapi('Principal')

const StatementIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_]+/)
  .min(1)
  .max(64)
  .openapi('StatementId')

const ConditionSchema = z
  .object({
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of condition. Currently the only supported value is <code>StringEquals</code>.',
        }),
    ),
    Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the key for the condition. Currently the only supported key is <code>aws:PrincipalOrgID</code>.',
        }),
    ),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the value for the key. Currently, this must be the ID of the organization.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Key', 'Value'],
    description:
      '<p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain Amazon Web Services organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the Amazon Web Services organization. Following is an example value for <code>Condition</code>:</p> <p> <code>\'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}\'</code> </p>',
  })
  .openapi('Condition')

const PutPermissionRequestSchema = z
  .object({
    EventBusName: NonPartnerEventBusNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
    Action: ActionSchema.and(
      z
        .any()
        .openapi({ description: 'The action that you are enabling the other account to perform.' }),
    ).exactOptional(),
    Principal: PrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The 12-digit Amazon Web Services account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus.</p> <p>If you specify "*" without specifying <code>Condition</code>, avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an <code>account</code> field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.</p>',
        }),
    ).exactOptional(),
    StatementId: StatementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier string for the external account that you are granting permissions to. If you later want to revoke the permission for this external account, specify this <code>StatementId</code> when you run <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html">RemovePermission</a>.',
        }),
    ).exactOptional(),
    Condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain Amazon Web Services organization. For more information about Amazon Web Services Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What Is Amazon Web Services Organizations</a> in the <i>Amazon Web Services Organizations User Guide</i>.</p> <p>If you specify <code>Condition</code> with an Amazon Web Services organization ID, and specify "*" as the value for <code>Principal</code>, you grant permission to all the accounts in the named organization.</p> <p>The <code>Condition</code> is a JSON string which must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields.</p>',
        }),
    ).exactOptional(),
    Policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string that describes the permission policy statement. You can include a <code>Policy</code> parameter in the request instead of using the <code>StatementId</code>, <code>Action</code>, <code>Principal</code>, or <code>Condition</code> parameters.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutPermissionRequest', required: [] })
  .openapi('PutPermissionRequest')

const PolicyLengthExceededExceptionSchema = z.any().openapi('PolicyLengthExceededException')

const PutRuleResponseSchema = z
  .object({
    RuleArn: RuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rule.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRuleResponse')

const PutRuleRequestSchema = z
  .object({
    Name: RuleNameSchema.and(
      z.any().openapi({ description: 'The name of the rule that you are creating or updating.' }),
    ),
    ScheduleExpression: ScheduleExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5 minutes)".',
        }),
    ).exactOptional(),
    EventPattern: EventPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.',
        }),
    ).exactOptional(),
    State: RuleStateSchema.and(
      z.any().openapi({ description: 'Indicates whether the rule is enabled or disabled.' }),
    ).exactOptional(),
    Description: RuleDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the rule.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p> <p>If you're setting an event bus in another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure, instead of here in this parameter.</p>",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The list of key-value pairs to associate with the rule.' }),
    ).exactOptional(),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus to associate with this rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'PutRuleRequest' })
  .openapi('PutRuleRequest')

const PutTargetsResultEntrySchema = z
  .object({
    TargetId: TargetIdSchema.and(
      z.any().openapi({ description: 'The ID of the target.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code that indicates why the target addition failed. If the value is <code>ConcurrentModificationException</code>, too many requests were made at the same time.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The error message that explains why the target addition failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a target that failed to be added to a rule.', required: [] })
  .openapi('PutTargetsResultEntry')

const PutTargetsResultEntryListSchema = z
  .array(PutTargetsResultEntrySchema)
  .openapi('PutTargetsResultEntryList')

const PutTargetsResponseSchema = z
  .object({
    FailedEntryCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of failed entries.' }),
    ).exactOptional(),
    FailedEntries: PutTargetsResultEntryListSchema.and(
      z.any().openapi({ description: 'The failed target entries.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutTargetsResponse')

const PutTargetsRequestSchema = z
  .object({
    Rule: RuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
    Targets: TargetListSchema.and(
      z.any().openapi({ description: 'The targets to update or add to the rule.' }),
    ),
  })
  .openapi({ required: ['Rule', 'Targets'], title: 'PutTargetsRequest' })
  .openapi('PutTargetsRequest')

const RemovePermissionRequestSchema = z
  .object({
    StatementId: StatementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The statement ID corresponding to the account that is no longer allowed to put events to the default event bus.',
        }),
    ).exactOptional(),
    RemoveAllPermissions: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether to remove all permissions.' }),
    ).exactOptional(),
    EventBusName: NonPartnerEventBusNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the event bus to revoke permissions for. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'RemovePermissionRequest', required: [] })
  .openapi('RemovePermissionRequest')

const RemoveTargetsResultEntrySchema = z
  .object({
    TargetId: TargetIdSchema.and(
      z.any().openapi({ description: 'The ID of the target.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code that indicates why the target removal failed. If the value is <code>ConcurrentModificationException</code>, too many requests were made at the same time.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({ description: 'The error message that explains why the target removal failed.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a target that failed to be removed from a rule.',
    required: [],
  })
  .openapi('RemoveTargetsResultEntry')

const RemoveTargetsResultEntryListSchema = z
  .array(RemoveTargetsResultEntrySchema)
  .openapi('RemoveTargetsResultEntryList')

const RemoveTargetsResponseSchema = z
  .object({
    FailedEntryCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of failed entries.' }),
    ).exactOptional(),
    FailedEntries: RemoveTargetsResultEntryListSchema.and(
      z.any().openapi({ description: 'The failed target entries.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveTargetsResponse')

const TargetIdListSchema = z.array(TargetIdSchema).min(1).max(100).openapi('TargetIdList')

const RemoveTargetsRequestSchema = z
  .object({
    Rule: RuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    EventBusName: EventBusNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.',
        }),
    ).exactOptional(),
    Ids: TargetIdListSchema.and(
      z.any().openapi({ description: 'The IDs of the targets to remove from the rule.' }),
    ),
    Force: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify <code>Force</code> as <code>True</code> to remove targets. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using <code>DescribeRule</code> or <code>ListRules</code> and checking the <code>ManagedBy</code> field of the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Rule', 'Ids'], title: 'RemoveTargetsRequest' })
  .openapi('RemoveTargetsRequest')

const StartReplayResponseSchema = z
  .object({
    ReplayArn: ReplayArnSchema.and(
      z.any().openapi({ description: 'The ARN of the replay.' }),
    ).exactOptional(),
    State: ReplayStateSchema.and(
      z.any().openapi({ description: 'The state of the replay.' }),
    ).exactOptional(),
    StateReason: ReplayStateReasonSchema.and(
      z.any().openapi({ description: 'The reason that the replay is in the state.' }),
    ).exactOptional(),
    ReplayStartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the replay started.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartReplayResponse')

const StartReplayRequestSchema = z
  .object({
    ReplayName: ReplayNameSchema.and(
      z.any().openapi({ description: 'The name of the replay to start.' }),
    ),
    Description: ReplayDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the replay to start.' }),
    ).exactOptional(),
    EventSourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the archive to replay events from.' }),
    ),
    EventStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp for the time to start replaying events. Only events that occurred between the <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.',
        }),
    ),
    EventEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp for the time to stop replaying events. Only events that occurred between the <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.',
        }),
    ),
    Destination: ReplayDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ReplayDestination</code> object that includes details about the destination for the replay.',
        }),
    ),
  })
  .openapi({
    required: ['ReplayName', 'EventSourceArn', 'EventStartTime', 'EventEndTime', 'Destination'],
    title: 'StartReplayRequest',
  })
  .openapi('StartReplayRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: ArnSchema.and(
      z
        .any()
        .openapi({
          description: "The ARN of the EventBridge resource that you're adding tags to.",
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of key-value pairs to associate with the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TestEventPatternResponseSchema = z
  .object({
    Result: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether the event matches the event pattern.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestEventPatternResponse')

const TestEventPatternRequestSchema = z
  .object({
    EventPattern: EventPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.',
        }),
    ),
    Event: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The event, in JSON format, to test against the event pattern. The JSON must follow the format specified in <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/aws-events.html">Amazon Web Services Events</a>, and the following fields are mandatory:</p> <ul> <li> <p> <code>id</code> </p> </li> <li> <p> <code>account</code> </p> </li> <li> <p> <code>source</code> </p> </li> <li> <p> <code>time</code> </p> </li> <li> <p> <code>region</code> </p> </li> <li> <p> <code>resources</code> </p> </li> <li> <p> <code>detail-type</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['EventPattern', 'Event'], title: 'TestEventPatternRequest' })
  .openapi('TestEventPatternRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the EventBridge resource from which you are removing tags.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The list of tag keys to remove from the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApiDestinationResponseSchema = z
  .object({
    ApiDestinationArn: ApiDestinationArnSchema.and(
      z.any().openapi({ description: 'The ARN of the API destination that was updated.' }),
    ).exactOptional(),
    ApiDestinationState: ApiDestinationStateSchema.and(
      z.any().openapi({ description: 'The state of the API destination that was updated.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the API destination was created.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the API destination was last modified.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateApiDestinationResponse')

const UpdateApiDestinationRequestSchema = z
  .object({
    Name: ApiDestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the API destination to update.' }),
    ),
    Description: ApiDestinationDescriptionSchema.and(
      z.any().openapi({ description: 'The name of the API destination to update.' }),
    ).exactOptional(),
    ConnectionArn: ConnectionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the connection to use for the API destination.' }),
    ).exactOptional(),
    InvocationEndpoint: HttpsEndpointSchema.and(
      z.any().openapi({ description: 'The URL to the endpoint to use for the API destination.' }),
    ).exactOptional(),
    HttpMethod: ApiDestinationHttpMethodSchema.and(
      z.any().openapi({ description: 'The method to use for the API destination.' }),
    ).exactOptional(),
    InvocationRateLimitPerSecond: ApiDestinationInvocationRateLimitPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of invocations per second to send to the API destination.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateApiDestinationRequest' })
  .openapi('UpdateApiDestinationRequest')

const UpdateArchiveResponseSchema = z
  .object({
    ArchiveArn: ArchiveArnSchema.and(
      z.any().openapi({ description: 'The ARN of the archive.' }),
    ).exactOptional(),
    State: ArchiveStateSchema.and(
      z.any().openapi({ description: 'The state of the archive.' }),
    ).exactOptional(),
    StateReason: ArchiveStateReasonSchema.and(
      z.any().openapi({ description: 'The reason that the archive is in the current state.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the archive was updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateArchiveResponse')

const UpdateArchiveRequestSchema = z
  .object({
    ArchiveName: ArchiveNameSchema.and(
      z.any().openapi({ description: 'The name of the archive to update.' }),
    ),
    Description: ArchiveDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the archive.' }),
    ).exactOptional(),
    EventPattern: EventPatternSchema.and(
      z
        .any()
        .openapi({ description: 'The event pattern to use to filter events sent to the archive.' }),
    ).exactOptional(),
    RetentionDays: RetentionDaysSchema.and(
      z.any().openapi({ description: 'The number of days to retain events in the archive.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ArchiveName'], title: 'UpdateArchiveRequest' })
  .openapi('UpdateArchiveRequest')

const UpdateConnectionResponseSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the connection that was updated.' }),
    ).exactOptional(),
    ConnectionState: ConnectionStateSchema.and(
      z.any().openapi({ description: 'The state of the connection that was updated.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A time stamp for the time that the connection was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last modified.',
        }),
    ).exactOptional(),
    LastAuthorizedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A time stamp for the time that the connection was last authorized.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectionResponse')

const UpdateConnectionBasicAuthRequestParametersSchema = z
  .object({
    Username: AuthHeaderParametersSchema.and(
      z.any().openapi({ description: 'The user name to use for Basic authorization.' }),
    ).exactOptional(),
    Password: AuthHeaderParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The password associated with the user name to use for Basic authorization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the Basic authorization parameters for the connection.',
    required: [],
  })
  .openapi('UpdateConnectionBasicAuthRequestParameters')

const UpdateConnectionOAuthClientRequestParametersSchema = z
  .object({
    ClientID: AuthHeaderParametersSchema.and(
      z.any().openapi({ description: 'The client ID to use for OAuth authorization.' }),
    ).exactOptional(),
    ClientSecret: AuthHeaderParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The client secret assciated with the client ID to use for OAuth authorization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the OAuth authorization parameters to use for the connection.',
    required: [],
  })
  .openapi('UpdateConnectionOAuthClientRequestParameters')

const UpdateConnectionOAuthRequestParametersSchema = z
  .object({
    ClientParameters: UpdateConnectionOAuthClientRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>UpdateConnectionOAuthClientRequestParameters</code> object that contains the client parameters to use for the connection when OAuth is specified as the authorization type.',
        }),
    ).exactOptional(),
    AuthorizationEndpoint: HttpsEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL to the authorization endpoint when OAuth is specified as the authorization type.',
        }),
    ).exactOptional(),
    HttpMethod: ConnectionOAuthHttpMethodSchema.and(
      z.any().openapi({ description: 'The method used to connect to the HTTP endpoint.' }),
    ).exactOptional(),
    OAuthHttpParameters: ConnectionHttpParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The additional HTTP parameters used for the OAuth authorization request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the OAuth request parameters to use for the connection.',
    required: [],
  })
  .openapi('UpdateConnectionOAuthRequestParameters')

const UpdateConnectionApiKeyAuthRequestParametersSchema = z
  .object({
    ApiKeyName: AuthHeaderParametersSchema.and(
      z.any().openapi({ description: 'The name of the API key to use for authorization.' }),
    ).exactOptional(),
    ApiKeyValue: AuthHeaderParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The value associated with teh API key to use for authorization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the API key authorization parameters to use to update the connection.',
    required: [],
  })
  .openapi('UpdateConnectionApiKeyAuthRequestParameters')

const UpdateConnectionAuthRequestParametersSchema = z
  .object({
    BasicAuthParameters: UpdateConnectionBasicAuthRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>UpdateConnectionBasicAuthRequestParameters</code> object that contains the authorization parameters for Basic authorization.',
        }),
    ).exactOptional(),
    OAuthParameters: UpdateConnectionOAuthRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>UpdateConnectionOAuthRequestParameters</code> object that contains the authorization parameters for OAuth authorization.',
        }),
    ).exactOptional(),
    ApiKeyAuthParameters: UpdateConnectionApiKeyAuthRequestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>UpdateConnectionApiKeyAuthRequestParameters</code> object that contains the authorization parameters for API key authorization.',
        }),
    ).exactOptional(),
    InvocationHttpParameters: ConnectionHttpParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ConnectionHttpParameters</code> object that contains the additional parameters to use for the connection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the additional parameters to use for the connection.',
    required: [],
  })
  .openapi('UpdateConnectionAuthRequestParameters')

const UpdateConnectionRequestSchema = z
  .object({
    Name: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection to update.' }),
    ),
    Description: ConnectionDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the connection.' }),
    ).exactOptional(),
    AuthorizationType: ConnectionAuthorizationTypeSchema.and(
      z.any().openapi({ description: 'The type of authorization to use for the connection.' }),
    ).exactOptional(),
    AuthParameters: UpdateConnectionAuthRequestParametersSchema.and(
      z.any().openapi({ description: 'The authorization parameters to use for the connection.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateConnectionRequest' })
  .openapi('UpdateConnectionRequest')

const InputTransformerPathKeySchema = z
  .string()
  .regex(/[A-Za-z0-9\_\-]+/)
  .min(1)
  .max(256)
  .openapi('InputTransformerPathKey')

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

export const postXAmzTargetAWSEventsActivateEventSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ActivateEventSource',
  description:
    'Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.',
  operationId: 'ActivateEventSource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ActivateEventSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ActivateEventSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ActivateEventSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    484: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsCancelReplayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.CancelReplay',
  description: 'Cancels the specified replay.',
  operationId: 'CancelReplay',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.CancelReplay')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.CancelReplay'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelReplayRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelReplayResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'IllegalStatusException',
      content: { 'application/json': { schema: IllegalStatusExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsCreateApiDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.CreateApiDestination',
  description:
    'Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.',
  operationId: 'CreateApiDestination',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.CreateApiDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.CreateApiDestination'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateApiDestinationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApiDestinationResponseSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsCreateArchiveRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.CreateArchive',
  description:
    'Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.',
  operationId: 'CreateArchive',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.CreateArchive')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.CreateArchive'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateArchiveRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateArchiveResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidEventPatternException',
      content: { 'application/json': { schema: InvalidEventPatternExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsCreateConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.CreateConnection',
  description:
    'Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.',
  operationId: 'CreateConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.CreateConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.CreateConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectionResponseSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsCreateEventBusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.CreateEventBus',
  description:
    'Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.',
  operationId: 'CreateEventBus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.CreateEventBus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.CreateEventBus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEventBusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEventBusResponseSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsCreatePartnerEventSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.CreatePartnerEventSource',
  description:
    "<p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>",
  operationId: 'CreatePartnerEventSource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.CreatePartnerEventSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.CreatePartnerEventSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePartnerEventSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePartnerEventSourceResponseSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDeactivateEventSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DeactivateEventSource',
  description:
    '<p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>',
  operationId: 'DeactivateEventSource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DeactivateEventSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DeactivateEventSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeactivateEventSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    484: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDeauthorizeConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DeauthorizeConnection',
  description:
    'Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.',
  operationId: 'DeauthorizeConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DeauthorizeConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DeauthorizeConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeauthorizeConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeauthorizeConnectionResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDeleteApiDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DeleteApiDestination',
  description: 'Deletes the specified API destination.',
  operationId: 'DeleteApiDestination',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DeleteApiDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DeleteApiDestination'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApiDestinationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApiDestinationResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDeleteArchiveRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DeleteArchive',
  description: 'Deletes the specified archive.',
  operationId: 'DeleteArchive',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DeleteArchive')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DeleteArchive'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteArchiveRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteArchiveResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDeleteConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DeleteConnection',
  description: 'Deletes a connection.',
  operationId: 'DeleteConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DeleteConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DeleteConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectionResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDeleteEventBusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DeleteEventBus',
  description:
    "Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.",
  operationId: 'DeleteEventBus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DeleteEventBus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DeleteEventBus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEventBusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDeletePartnerEventSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DeletePartnerEventSource',
  description:
    '<p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>',
  operationId: 'DeletePartnerEventSource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DeletePartnerEventSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DeletePartnerEventSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePartnerEventSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDeleteRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DeleteRule',
  description:
    '<p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>',
  operationId: 'DeleteRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DeleteRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DeleteRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteRuleRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ManagedRuleException',
      content: { 'application/json': { schema: ManagedRuleExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDescribeApiDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DescribeApiDestination',
  description: 'Retrieves details about an API destination.',
  operationId: 'DescribeApiDestination',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DescribeApiDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DescribeApiDestination'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeApiDestinationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeApiDestinationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDescribeArchiveRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DescribeArchive',
  description: 'Retrieves details about an archive.',
  operationId: 'DescribeArchive',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DescribeArchive')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DescribeArchive'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeArchiveRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeArchiveResponseSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDescribeConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DescribeConnection',
  description: 'Retrieves details about a connection.',
  operationId: 'DescribeConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DescribeConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DescribeConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDescribeEventBusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DescribeEventBus',
  description:
    '<p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>',
  operationId: 'DescribeEventBus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DescribeEventBus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DescribeEventBus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventBusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventBusResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDescribeEventSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DescribeEventSource',
  description:
    'This operation lists details about a partner event source that is shared with your account.',
  operationId: 'DescribeEventSource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DescribeEventSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DescribeEventSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventSourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDescribePartnerEventSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DescribePartnerEventSource',
  description:
    'An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.',
  operationId: 'DescribePartnerEventSource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DescribePartnerEventSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DescribePartnerEventSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePartnerEventSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePartnerEventSourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDescribeReplayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DescribeReplay',
  description:
    'Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.',
  operationId: 'DescribeReplay',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DescribeReplay')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DescribeReplay'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeReplayRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReplayResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDescribeRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DescribeRule',
  description:
    '<p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>',
  operationId: 'DescribeRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DescribeRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DescribeRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRuleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsDisableRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.DisableRule',
  description:
    "<p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>",
  operationId: 'DisableRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.DisableRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.DisableRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DisableRuleRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'ManagedRuleException',
      content: { 'application/json': { schema: ManagedRuleExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsEnableRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.EnableRule',
  description:
    '<p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>',
  operationId: 'EnableRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.EnableRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.EnableRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnableRuleRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'ManagedRuleException',
      content: { 'application/json': { schema: ManagedRuleExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListApiDestinationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListApiDestinations',
  description: 'Retrieves a list of API destination in the account in the current Region.',
  operationId: 'ListApiDestinations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListApiDestinations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListApiDestinations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListApiDestinationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApiDestinationsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListArchivesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListArchives',
  description:
    'Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.',
  operationId: 'ListArchives',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListArchives')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListArchives'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListArchivesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListArchivesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListConnectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListConnections',
  description: 'Retrieves a list of connections from the account.',
  operationId: 'ListConnections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListConnections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListConnections'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListConnectionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConnectionsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListEventBusesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListEventBuses',
  description:
    'Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.',
  operationId: 'ListEventBuses',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListEventBuses')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListEventBuses'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEventBusesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventBusesResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListEventSourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListEventSources',
  description:
    'You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.',
  operationId: 'ListEventSources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListEventSources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListEventSources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEventSourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventSourcesResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListPartnerEventSourceAccountsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts',
  description:
    'An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.',
  operationId: 'ListPartnerEventSourceAccounts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListPartnerEventSourceAccounts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListPartnerEventSourceAccounts'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListPartnerEventSourceAccountsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPartnerEventSourceAccountsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListPartnerEventSourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListPartnerEventSources',
  description:
    'An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.',
  operationId: 'ListPartnerEventSources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListPartnerEventSources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListPartnerEventSources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListPartnerEventSourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPartnerEventSourcesResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListReplaysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListReplays',
  description:
    'Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.',
  operationId: 'ListReplays',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListReplays')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListReplays'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListReplaysRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReplaysResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListRuleNamesByTargetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListRuleNamesByTarget',
  description:
    'Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.',
  operationId: 'ListRuleNamesByTarget',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListRuleNamesByTarget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListRuleNamesByTarget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRuleNamesByTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRuleNamesByTargetResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListRules',
  description:
    '<p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>',
  operationId: 'ListRules',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListRules'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListRulesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRulesResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListTagsForResource',
  description:
    'Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsListTargetsByRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.ListTargetsByRule',
  description: 'Lists the targets assigned to the specified rule.',
  operationId: 'ListTargetsByRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.ListTargetsByRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.ListTargetsByRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTargetsByRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTargetsByRuleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsPutEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.PutEvents',
  description: 'Sends custom events to Amazon EventBridge so that they can be matched to rules.',
  operationId: 'PutEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.PutEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.PutEvents'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutEventsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutEventsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsPutPartnerEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.PutPartnerEvents',
  description:
    "This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.",
  operationId: 'PutPartnerEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.PutPartnerEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.PutPartnerEvents'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutPartnerEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPartnerEventsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsPutPermissionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.PutPermission',
  description:
    '<p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account\'s event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account\'s event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>',
  operationId: 'PutPermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.PutPermission')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.PutPermission'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutPermissionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyLengthExceededException',
      content: { 'application/json': { schema: PolicyLengthExceededExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsPutRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.PutRule',
  description:
    '<p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account\'s default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>',
  operationId: 'PutRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.PutRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.PutRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutRuleRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRuleResponseSchema } },
    },
    480: {
      description: 'InvalidEventPatternException',
      content: { 'application/json': { schema: InvalidEventPatternExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ManagedRuleException',
      content: { 'application/json': { schema: ManagedRuleExceptionSchema } },
    },
    484: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsPutTargetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.PutTargets',
  description:
    '<p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p>Amazon API Gateway REST API endpoints</p> </li> <li> <p>API Gateway</p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch Logs group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>Amazon EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>Amazon EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>StopInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>Event bus in a different Amazon Web Services account or Region.</p> <p>You can use an event bus in the US East (N. Virginia) us-east-1, US West (Oregon) us-west-2, or Europe (Ireland) eu-west-1 Regions as a target for a rule.</p> </li> <li> <p>Firehose delivery stream (Kinesis Data Firehose)</p> </li> <li> <p>Inspector assessment template (Amazon Inspector)</p> </li> <li> <p>Kinesis stream (Kinesis Data Stream)</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift clusters (Data API statement execution)</p> </li> <li> <p>Amazon SNS topic</p> </li> <li> <p>Amazon SQS queues (includes FIFO queues</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>SSM OpsItem</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>Step Functions state machines</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account\'s event bus as a target of the rules in your account. To send the matched events to the other account, specify that account\'s event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>',
  operationId: 'PutTargets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.PutTargets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.PutTargets'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutTargetsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutTargetsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ManagedRuleException',
      content: { 'application/json': { schema: ManagedRuleExceptionSchema } },
    },
    484: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsRemovePermissionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.RemovePermission',
  description:
    'Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.',
  operationId: 'RemovePermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.RemovePermission')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.RemovePermission'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemovePermissionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'OperationDisabledException',
      content: { 'application/json': { schema: OperationDisabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsRemoveTargetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.RemoveTargets',
  description:
    '<p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>',
  operationId: 'RemoveTargets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.RemoveTargets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.RemoveTargets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveTargetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveTargetsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'ManagedRuleException',
      content: { 'application/json': { schema: ManagedRuleExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsStartReplayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.StartReplay',
  description:
    'Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.',
  operationId: 'StartReplay',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.StartReplay')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.StartReplay'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartReplayRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartReplayResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidEventPatternException',
      content: { 'application/json': { schema: InvalidEventPatternExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.TagResource',
  description:
    "<p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>",
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'ManagedRuleException',
      content: { 'application/json': { schema: ManagedRuleExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsTestEventPatternRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.TestEventPattern',
  description:
    '<p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>',
  operationId: 'TestEventPattern',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.TestEventPattern')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.TestEventPattern'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TestEventPatternRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestEventPatternResponseSchema } },
    },
    480: {
      description: 'InvalidEventPatternException',
      content: { 'application/json': { schema: InvalidEventPatternExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.UntagResource',
  description:
    'Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ManagedRuleException',
      content: { 'application/json': { schema: ManagedRuleExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsUpdateApiDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.UpdateApiDestination',
  description: 'Updates an API destination.',
  operationId: 'UpdateApiDestination',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.UpdateApiDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.UpdateApiDestination'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateApiDestinationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApiDestinationResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsUpdateArchiveRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.UpdateArchive',
  description: 'Updates the specified archive.',
  operationId: 'UpdateArchive',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.UpdateArchive')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.UpdateArchive'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateArchiveRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateArchiveResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidEventPatternException',
      content: { 'application/json': { schema: InvalidEventPatternExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEventsUpdateConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEvents.UpdateConnection',
  description: 'Updates settings for a connection.',
  operationId: 'UpdateConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSEvents.UpdateConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEvents.UpdateConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConnectionResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
