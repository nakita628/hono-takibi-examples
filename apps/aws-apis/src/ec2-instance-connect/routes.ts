import { createRoute, z } from '@hono/zod-openapi'

const RequestIdSchema = z.string().openapi('RequestId')

const SuccessSchema = z.boolean().openapi('Success')

const SendSSHPublicKeyResponseSchema = z
  .object({
    RequestId: RequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the request. Please provide this ID when contacting AWS Support for assistance.',
        }),
    ).exactOptional(),
    Success: SuccessSchema.and(
      z.any().openapi({ description: 'Is true if the request succeeds and an error otherwise.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { RequestId: 'abcd1234-abcd-1234-abcd-1234abcd1234', Success: true },
    required: [],
  })
  .openapi('SendSSHPublicKeyResponse')

const InstanceIdSchema = z
  .string()
  .regex(/^i-[a-f0-9]+$/)
  .min(10)
  .max(32)
  .openapi('InstanceId')

const InstanceOSUserSchema = z
  .string()
  .regex(/^[A-Za-z_][A-Za-z0-9\@\._-]{0,30}[A-Za-z0-9\$_-]?$/)
  .min(1)
  .max(32)
  .openapi('InstanceOSUser')

const SSHPublicKeySchema = z.string().min(80).max(4096).openapi('SSHPublicKey')

const AvailabilityZoneSchema = z
  .string()
  .regex(/^(\w+-){2,3}\d+\w+$/)
  .min(6)
  .max(32)
  .openapi('AvailabilityZone')

const SendSSHPublicKeyRequestSchema = z
  .object({
    InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'The ID of the EC2 instance.' }),
    ),
    InstanceOSUser: InstanceOSUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'The OS user on the EC2 instance for whom the key can be used to authenticate.',
        }),
    ),
    SSHPublicKey: SSHPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The public key material. To use the public key, you must have the matching private key.',
        }),
    ),
    AvailabilityZone: AvailabilityZoneSchema.and(
      z
        .any()
        .openapi({ description: 'The Availability Zone in which the EC2 instance was launched.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceId', 'InstanceOSUser', 'SSHPublicKey'],
    title: 'SendSSHPublicKeyRequest',
  })
  .openapi('SendSSHPublicKeyRequest')

const AuthExceptionSchema = z.any().openapi('AuthException')

const InvalidArgsExceptionSchema = z.any().openapi('InvalidArgsException')

const ServiceExceptionSchema = z.any().openapi('ServiceException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const EC2InstanceNotFoundExceptionSchema = z.any().openapi('EC2InstanceNotFoundException')

const EC2InstanceStateInvalidExceptionSchema = z.any().openapi('EC2InstanceStateInvalidException')

const EC2InstanceUnavailableExceptionSchema = z.any().openapi('EC2InstanceUnavailableException')

const SendSerialConsoleSSHPublicKeyResponseSchema = z
  .object({
    RequestId: RequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the request. Please provide this ID when contacting AWS Support for assistance.',
        }),
    ).exactOptional(),
    Success: SuccessSchema.and(
      z.any().openapi({ description: 'Is true if the request succeeds and an error otherwise.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendSerialConsoleSSHPublicKeyResponse')

const SerialPortSchema = z.int().min(0).max(0).openapi('SerialPort')

const SendSerialConsoleSSHPublicKeyRequestSchema = z
  .object({
    InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'The ID of the EC2 instance.' }),
    ),
    SerialPort: SerialPortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The serial port of the EC2 instance. Currently only port 0 is supported.</p> <p>Default: 0</p>',
        }),
    ).exactOptional(),
    SSHPublicKey: SSHPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The public key material. To use the public key, you must have the matching private key. For information about the supported key formats and lengths, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws">Requirements for key pairs</a> in the <i>Amazon EC2 User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceId', 'SSHPublicKey'],
    title: 'SendSerialConsoleSSHPublicKeyRequest',
  })
  .openapi('SendSerialConsoleSSHPublicKeyRequest')

const SerialConsoleAccessDisabledExceptionSchema = z
  .any()
  .openapi('SerialConsoleAccessDisabledException')

const EC2InstanceTypeInvalidExceptionSchema = z.any().openapi('EC2InstanceTypeInvalidException')

const SerialConsoleSessionLimitExceededExceptionSchema = z
  .any()
  .openapi('SerialConsoleSessionLimitExceededException')

const SerialConsoleSessionUnavailableExceptionSchema = z
  .any()
  .openapi('SerialConsoleSessionUnavailableException')

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

export const postXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey',
  description:
    'Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2 User Guide</i>.',
  operationId: 'SendSSHPublicKey',
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
        .literal('AWSEC2InstanceConnectService.SendSSHPublicKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSEC2InstanceConnectService.SendSSHPublicKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendSSHPublicKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendSSHPublicKeyResponseSchema } },
    },
    480: {
      description: 'AuthException',
      content: { 'application/json': { schema: AuthExceptionSchema } },
    },
    481: {
      description: 'InvalidArgsException',
      content: { 'application/json': { schema: InvalidArgsExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'EC2InstanceNotFoundException',
      content: { 'application/json': { schema: EC2InstanceNotFoundExceptionSchema } },
    },
    485: {
      description: 'EC2InstanceStateInvalidException',
      content: { 'application/json': { schema: EC2InstanceStateInvalidExceptionSchema } },
    },
    486: {
      description: 'EC2InstanceUnavailableException',
      content: { 'application/json': { schema: EC2InstanceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey',
    description:
      'Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.',
    operationId: 'SendSerialConsoleSSHPublicKey',
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
          .literal('AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SendSerialConsoleSSHPublicKeyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SendSerialConsoleSSHPublicKeyResponseSchema } },
      },
      480: {
        description: 'AuthException',
        content: { 'application/json': { schema: AuthExceptionSchema } },
      },
      481: {
        description: 'SerialConsoleAccessDisabledException',
        content: { 'application/json': { schema: SerialConsoleAccessDisabledExceptionSchema } },
      },
      482: {
        description: 'InvalidArgsException',
        content: { 'application/json': { schema: InvalidArgsExceptionSchema } },
      },
      483: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'EC2InstanceNotFoundException',
        content: { 'application/json': { schema: EC2InstanceNotFoundExceptionSchema } },
      },
      486: {
        description: 'EC2InstanceTypeInvalidException',
        content: { 'application/json': { schema: EC2InstanceTypeInvalidExceptionSchema } },
      },
      487: {
        description: 'SerialConsoleSessionLimitExceededException',
        content: {
          'application/json': { schema: SerialConsoleSessionLimitExceededExceptionSchema },
        },
      },
      488: {
        description: 'SerialConsoleSessionUnavailableException',
        content: { 'application/json': { schema: SerialConsoleSessionUnavailableExceptionSchema } },
      },
      489: {
        description: 'EC2InstanceStateInvalidException',
        content: { 'application/json': { schema: EC2InstanceStateInvalidExceptionSchema } },
      },
      490: {
        description: 'EC2InstanceUnavailableException',
        content: { 'application/json': { schema: EC2InstanceUnavailableExceptionSchema } },
      },
    },
  })
