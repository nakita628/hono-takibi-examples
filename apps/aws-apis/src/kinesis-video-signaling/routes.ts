import { createRoute, z } from '@hono/zod-openapi'

const UriSchema = z.string().min(1).max(256).openapi('Uri')

const UrisSchema = z.array(UriSchema).openapi('Uris')

const UsernameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('Username')

const PasswordSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('Password')

const TtlSchema = z.int().min(30).max(86400).openapi('Ttl')

const IceServerSchema = z
  .object({
    Uris: UrisSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of URIs, in the form specified in the <a href="https://tools.ietf.org/html/draft-petithuguenin-behave-turn-uris-03">I-D.petithuguenin-behave-turn-uris</a> spec. These URIs provide the different addresses and/or protocols that can be used to reach the TURN server.',
        }),
    ).exactOptional(),
    Username: UsernameSchema.and(
      z.any().openapi({ description: 'A username to login to the ICE server.' }),
    ).exactOptional(),
    Password: PasswordSchema.and(
      z.any().openapi({ description: 'A password to login to the ICE server.' }),
    ).exactOptional(),
    Ttl: TtlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period of time, in seconds, during which the username and password are valid.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A structure for the ICE server connection data.', required: [] })
  .openapi('IceServer')

const IceServerListSchema = z.array(IceServerSchema).openapi('IceServerList')

const GetIceServerConfigResponseSchema = z
  .object({
    IceServerList: IceServerListSchema.and(
      z.any().openapi({ description: 'The list of ICE server information objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetIceServerConfigResponse')

const InvalidClientExceptionSchema = z.any().openapi('InvalidClientException')

const SessionExpiredExceptionSchema = z.any().openapi('SessionExpiredException')

const ClientLimitExceededExceptionSchema = z.any().openapi('ClientLimitExceededException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const AnswerSchema = z.string().min(1).max(10000).openapi('Answer')

const SendAlexaOfferToMasterResponseSchema = z
  .object({
    Answer: AnswerSchema.and(
      z.any().openapi({ description: 'The base64-encoded SDP answer content.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendAlexaOfferToMasterResponse')

const ClientIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('ClientId')

const ResourceARNSchema = z
  .string()
  .regex(/arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/)
  .min(1)
  .max(1024)
  .openapi('ResourceARN')

const ServiceSchema = z.literal('TURN').openapi('Service')

const GetIceServerConfigRequestSchema = z
  .object({
    ChannelARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the signaling channel to be used for the peer-to-peer connection between configured peers. ',
        }),
    ),
    ClientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for the viewer. Must be unique within the signaling channel.',
        }),
    ).exactOptional(),
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the desired service. Currently, <code>TURN</code> is the only valid value.',
        }),
    ).exactOptional(),
    Username: UsernameSchema.and(
      z
        .any()
        .openapi({ description: 'An optional user ID to be associated with the credentials.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ChannelARN'], title: 'GetIceServerConfigRequest' })
  .openapi('GetIceServerConfigRequest')

const MessagePayloadSchema = z
  .string()
  .regex(/[a-zA-Z0-9+\/=]+/)
  .min(1)
  .max(10000)
  .openapi('MessagePayload')

const SendAlexaOfferToMasterRequestSchema = z
  .object({
    ChannelARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the signaling channel by which Alexa and the master peer communicate.',
        }),
    ),
    SenderClientId: ClientIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the sender client.' }),
    ),
    MessagePayload: MessagePayloadSchema.and(
      z.any().openapi({ description: 'The base64-encoded SDP offer content.' }),
    ),
  })
  .openapi({
    required: ['ChannelARN', 'SenderClientId', 'MessagePayload'],
    title: 'SendAlexaOfferToMasterRequest',
  })
  .openapi('SendAlexaOfferToMasterRequest')

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

export const postV1GetIceServerConfigRoute = createRoute({
  method: 'post',
  path: '/v1/get-ice-server-config',
  description:
    '<p>Gets the Interactive Connectivity Establishment (ICE) server configuration information, including URIs, username, and password which can be used to configure the WebRTC connection. The ICE component uses this configuration information to setup the WebRTC connection, including authenticating with the Traversal Using Relays around NAT (TURN) relay server. </p> <p>TURN is a protocol that is used to improve the connectivity of peer-to-peer applications. By providing a cloud-based relay service, TURN ensures that a connection can be established even when one or more peers are incapable of a direct peer-to-peer connection. For more information, see <a href="https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00">A REST API For Access To TURN Services</a>.</p> <p> You can invoke this API to establish a fallback mechanism in case either of the peers is unable to establish a direct peer-to-peer connection over a signaling channel. You must specify either a signaling channel ARN or the client ID in order to invoke this API.</p>',
  operationId: 'GetIceServerConfig',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ChannelARN: z
                .string()
                .regex(/arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/)
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The ARN of the signaling channel to be used for the peer-to-peer connection between configured peers. ',
                }),
              ClientId: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier for the viewer. Must be unique within the signaling channel.',
                }),
              Service: z
                .literal('TURN')
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the desired service. Currently, <code>TURN</code> is the only valid value.',
                }),
              Username: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description: 'An optional user ID to be associated with the credentials.',
                }),
            })
            .openapi({ required: ['ChannelARN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIceServerConfigResponseSchema } },
    },
    480: {
      description: 'InvalidClientException',
      content: { 'application/json': { schema: InvalidClientExceptionSchema } },
    },
    481: {
      description: 'SessionExpiredException',
      content: { 'application/json': { schema: SessionExpiredExceptionSchema } },
    },
    482: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    485: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postV1SendAlexaOfferToMasterRoute = createRoute({
  method: 'post',
  path: '/v1/send-alexa-offer-to-master',
  description:
    'This API allows you to connect WebRTC-enabled devices with Alexa display devices. When invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer. The offer is delivered as soon as the master is connected to the specified signaling channel. This API returns the SDP answer from the connected master. If the master is not connected to the signaling channel, redelivery requests are made until the message expires.',
  operationId: 'SendAlexaOfferToMaster',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ChannelARN: z
                .string()
                .regex(/arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/)
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The ARN of the signaling channel by which Alexa and the master peer communicate.',
                }),
              SenderClientId: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'The unique identifier for the sender client.' }),
              MessagePayload: z
                .string()
                .regex(/[a-zA-Z0-9+\/=]+/)
                .min(1)
                .max(10000)
                .openapi({ description: 'The base64-encoded SDP offer content.' }),
            })
            .openapi({ required: ['ChannelARN', 'SenderClientId', 'MessagePayload'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendAlexaOfferToMasterResponseSchema } },
    },
    480: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})
