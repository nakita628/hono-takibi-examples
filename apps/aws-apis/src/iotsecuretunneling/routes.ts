import { createRoute, z } from '@hono/zod-openapi'

const CloseTunnelResponseSchema = z.object({}).openapi('CloseTunnelResponse')

const TunnelIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_\-+=:]{1,128}/)
  .openapi('TunnelId')

const DeleteFlagSchema = z.boolean().openapi('DeleteFlag')

const CloseTunnelRequestSchema = z
  .object({
    tunnelId: TunnelIdSchema.and(
      z.any().openapi({ description: 'The ID of the tunnel to close.' }),
    ),
    delete: DeleteFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to true, IoT Secure Tunneling deletes the tunnel data immediately.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['tunnelId'], title: 'CloseTunnelRequest' })
  .openapi('CloseTunnelRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const TunnelArnSchema = z.string().min(1).max(1600).openapi('TunnelArn')

const TunnelStatusSchema = z.enum(['OPEN', 'CLOSED']).openapi('TunnelStatus')

const ConnectionStatusSchema = z.enum(['CONNECTED', 'DISCONNECTED']).openapi('ConnectionStatus')

const DateTypeSchema = z.iso.datetime({ offset: true }).openapi('DateType')

const ConnectionStateSchema = z
  .object({
    status: ConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The connection status of the tunnel. Valid values are <code>CONNECTED</code> and <code>DISCONNECTED</code>.',
        }),
    ).exactOptional(),
    lastUpdatedAt: DateTypeSchema.and(
      z.any().openapi({ description: 'The last time the connection status was updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The state of a connection.', required: [] })
  .openapi('ConnectionState')

const DescriptionSchema = z
  .string()
  .regex(/[^\p{C}]{1,2048}/u)
  .openapi('Description')

const ThingNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9:_-]+/)
  .min(1)
  .max(128)
  .openapi('ThingName')

const ServiceSchema = z
  .string()
  .regex(/[a-zA-Z0-9:_-]+/)
  .min(1)
  .max(128)
  .openapi('Service')

const ServiceListSchema = z.array(ServiceSchema).min(1).openapi('ServiceList')

const DestinationConfigSchema = z
  .object({
    thingName: ThingNameSchema.and(
      z.any().openapi({ description: 'The name of the IoT thing to which you want to connect.' }),
    ).exactOptional(),
    services: ServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of service names that identify the target application. The IoT client running on the destination device reads this value and uses it to look up a port or an IP address and a port. The IoT client instantiates the local proxy, which uses this information to connect to the destination application.',
        }),
    ),
  })
  .openapi({ required: ['services'], description: 'The destination configuration.' })
  .openapi('DestinationConfig')

const TimeoutInMinSchema = z.int().min(1).max(720).openapi('TimeoutInMin')

const TimeoutConfigSchema = z
  .object({
    maxLifetimeTimeoutMinutes: TimeoutInMinSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of time (in minutes) a tunnel can remain open. If not specified, maxLifetimeTimeoutMinutes defaults to 720 minutes. Valid values are from 1 minute to 12 hours (720 minutes) ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Tunnel timeout configuration.', required: [] })
  .openapi('TimeoutConfig')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })),
    value: TagValueSchema.and(z.any().openapi({ description: 'The value of the tag.' })),
  })
  .openapi({
    required: ['key', 'value'],
    description:
      'An arbitary key/value pair used to add searchable metadata to secure tunnel resources.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(200).openapi('TagList')

const TunnelSchema = z
  .object({
    tunnelId: TunnelIdSchema.and(
      z.any().openapi({ description: 'A unique alpha-numeric ID that identifies a tunnel.' }),
    ).exactOptional(),
    tunnelArn: TunnelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a tunnel.' }),
    ).exactOptional(),
    status: TunnelStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The status of a tunnel. Valid values are: Open and Closed.' }),
    ).exactOptional(),
    sourceConnectionState: ConnectionStateSchema.and(
      z.any().openapi({ description: 'The connection state of the source application.' }),
    ).exactOptional(),
    destinationConnectionState: ConnectionStateSchema.and(
      z.any().openapi({ description: 'The connection state of the destination application.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the tunnel.' }),
    ).exactOptional(),
    destinationConfig: DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination configuration that specifies the thing name of the destination device and a service name that the local proxy uses to connect to the destination application.',
        }),
    ).exactOptional(),
    timeoutConfig: TimeoutConfigSchema.and(
      z.any().openapi({ description: 'Timeout configuration for the tunnel.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tag metadata associated with the secure tunnel.' }),
    ).exactOptional(),
    createdAt: DateTypeSchema.and(
      z.any().openapi({ description: 'The time when the tunnel was created.' }),
    ).exactOptional(),
    lastUpdatedAt: DateTypeSchema.and(
      z.any().openapi({ description: 'The last time the tunnel was updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A connection between a source computer and a destination device.',
    required: [],
  })
  .openapi('Tunnel')

const DescribeTunnelResponseSchema = z
  .object({
    tunnel: TunnelSchema.and(
      z.any().openapi({ description: 'The tunnel being described.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTunnelResponse')

const DescribeTunnelRequestSchema = z
  .object({
    tunnelId: TunnelIdSchema.and(z.any().openapi({ description: 'The tunnel to describe.' })),
  })
  .openapi({ required: ['tunnelId'], title: 'DescribeTunnelRequest' })
  .openapi('DescribeTunnelRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the specified resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The resource ARN.' }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TunnelSummarySchema = z
  .object({
    tunnelId: TunnelIdSchema.and(
      z.any().openapi({ description: 'The unique alpha-numeric identifier for the tunnel.' }),
    ).exactOptional(),
    tunnelArn: TunnelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the tunnel. ' }),
    ).exactOptional(),
    status: TunnelStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The status of a tunnel. Valid values are: Open and Closed.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the tunnel.' }),
    ).exactOptional(),
    createdAt: DateTypeSchema.and(
      z.any().openapi({ description: 'The time the tunnel was created.' }),
    ).exactOptional(),
    lastUpdatedAt: DateTypeSchema.and(
      z.any().openapi({ description: 'The time the tunnel was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the tunnel.', required: [] })
  .openapi('TunnelSummary')

const TunnelSummaryListSchema = z.array(TunnelSummarySchema).openapi('TunnelSummaryList')

const NextTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9_=-]{1,4096}/)
  .openapi('NextToken')

const ListTunnelsResponseSchema = z
  .object({
    tunnelSummaries: TunnelSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A short description of the tunnels in an Amazon Web Services account.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTunnelsResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListTunnelsRequestSchema = z
  .object({
    thingName: ThingNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the IoT thing associated with the destination device.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return at once.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTunnelsRequest', required: [] })
  .openapi('ListTunnelsRequest')

const ClientAccessTokenSchema = z.string().openapi('ClientAccessToken')

const OpenTunnelResponseSchema = z
  .object({
    tunnelId: TunnelIdSchema.and(
      z.any().openapi({ description: 'A unique alpha-numeric tunnel ID.' }),
    ).exactOptional(),
    tunnelArn: TunnelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name for the tunnel.' }),
    ).exactOptional(),
    sourceAccessToken: ClientAccessTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access token the source local proxy uses to connect to IoT Secure Tunneling.',
        }),
    ).exactOptional(),
    destinationAccessToken: ClientAccessTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access token the destination local proxy uses to connect to IoT Secure Tunneling.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpenTunnelResponse')

const OpenTunnelRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A short text description of the tunnel. ' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of tag metadata.' }),
    ).exactOptional(),
    destinationConfig: DestinationConfigSchema.and(
      z.any().openapi({ description: 'The destination configuration for the OpenTunnel request.' }),
    ).exactOptional(),
    timeoutConfig: TimeoutConfigSchema.and(
      z.any().openapi({ description: 'Timeout configuration for a tunnel.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'OpenTunnelRequest', required: [] })
  .openapi('OpenTunnelRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const RotateTunnelAccessTokenResponseSchema = z
  .object({
    tunnelArn: TunnelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name for the tunnel.' }),
    ).exactOptional(),
    sourceAccessToken: ClientAccessTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The client access token that the source local proxy uses to connect to IoT Secure Tunneling.',
        }),
    ).exactOptional(),
    destinationAccessToken: ClientAccessTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The client access token that the destination local proxy uses to connect to IoT Secure Tunneling.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RotateTunnelAccessTokenResponse')

const ClientModeSchema = z.enum(['SOURCE', 'DESTINATION', 'ALL']).openapi('ClientMode')

const RotateTunnelAccessTokenRequestSchema = z
  .object({
    tunnelId: TunnelIdSchema.and(
      z
        .any()
        .openapi({ description: 'The tunnel for which you want to rotate the access tokens.' }),
    ),
    clientMode: ClientModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mode of the client that will use the client token, which can be either the source or destination, or both source and destination.',
        }),
    ),
    destinationConfig: DestinationConfigSchema.exactOptional(),
  })
  .openapi({ required: ['tunnelId', 'clientMode'], title: 'RotateTunnelAccessTokenRequest' })
  .openapi('RotateTunnelAccessTokenRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the resource.' }),
    ),
    tags: TagListSchema.and(z.any().openapi({ description: 'The tags for the resource.' })),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The resource ARN.' }),
    ),
    tagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of the tags to remove.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

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

export const postXAmzTargetIoTSecuredTunnelingCloseTunnelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IoTSecuredTunneling.CloseTunnel',
  description:
    '<p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>',
  operationId: 'CloseTunnel',
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
        .literal('IoTSecuredTunneling.CloseTunnel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IoTSecuredTunneling.CloseTunnel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CloseTunnelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CloseTunnelResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetIoTSecuredTunnelingDescribeTunnelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel',
  description:
    '<p>Gets information about a tunnel identified by the unique tunnel id.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>',
  operationId: 'DescribeTunnel',
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
        .literal('IoTSecuredTunneling.DescribeTunnel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IoTSecuredTunneling.DescribeTunnel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTunnelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTunnelResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetIoTSecuredTunnelingListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource',
  description: 'Lists the tags for the specified resource.',
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
        .literal('IoTSecuredTunneling.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IoTSecuredTunneling.ListTagsForResource'] },
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
  },
})

export const postXAmzTargetIoTSecuredTunnelingListTunnelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IoTSecuredTunneling.ListTunnels',
  description:
    '<p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>',
  operationId: 'ListTunnels',
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
        .literal('IoTSecuredTunneling.ListTunnels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IoTSecuredTunneling.ListTunnels'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTunnelsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTunnelsResponseSchema } },
    },
  },
})

export const postXAmzTargetIoTSecuredTunnelingOpenTunnelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IoTSecuredTunneling.OpenTunnel',
  description:
    '<p>Creates a new tunnel, and returns two client access tokens for clients to use to connect to the IoT Secure Tunneling proxy server.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>',
  operationId: 'OpenTunnel',
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
        .literal('IoTSecuredTunneling.OpenTunnel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IoTSecuredTunneling.OpenTunnel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OpenTunnelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OpenTunnelResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken',
  description:
    '<p>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p> <note> <p>Rotating the CAT doesn\'t extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</p> </note>',
  operationId: 'RotateTunnelAccessToken',
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
        .literal('IoTSecuredTunneling.RotateTunnelAccessToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IoTSecuredTunneling.RotateTunnelAccessToken'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RotateTunnelAccessTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RotateTunnelAccessTokenResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetIoTSecuredTunnelingTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IoTSecuredTunneling.TagResource',
  description: 'A resource tag.',
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
        .literal('IoTSecuredTunneling.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IoTSecuredTunneling.TagResource'] },
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
  },
})

export const postXAmzTargetIoTSecuredTunnelingUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=IoTSecuredTunneling.UntagResource',
  description: 'Removes a tag from a resource.',
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
        .literal('IoTSecuredTunneling.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['IoTSecuredTunneling.UntagResource'] },
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
  },
})
