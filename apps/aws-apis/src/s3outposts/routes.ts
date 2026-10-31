import { createRoute, z } from '@hono/zod-openapi'

const EndpointArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):s3-outposts:[a-z\-0-9]*:[0-9]{12}:outpost\/(op-[a-f0-9]{17}|ec2)\/endpoint\/[a-zA-Z0-9]{19}$/,
  )
  .openapi('EndpointArn')

const CreateEndpointResultSchema = z
  .object({
    EndpointArn: EndpointArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEndpointResult')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const OutpostOfflineExceptionSchema = z.any().openapi('OutpostOfflineException')

const OutpostIdSchema = z
  .string()
  .regex(/^(op-[a-f0-9]{17}|\d{12}|ec2)$/)
  .openapi('OutpostId')

const CidrBlockSchema = z.string().openapi('CidrBlock')

const EndpointStatusSchema = z
  .enum(['Pending', 'Available', 'Deleting', 'Create_Failed', 'Delete_Failed'])
  .openapi('EndpointStatus')

const CreationTimeSchema = z.iso.datetime({ offset: true }).openapi('CreationTime')

const NetworkInterfaceIdSchema = z.string().openapi('NetworkInterfaceId')

const NetworkInterfaceSchema = z
  .object({
    NetworkInterfaceId: NetworkInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID for the network interface.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The container for the network interface.', required: [] })
  .openapi('NetworkInterface')

const NetworkInterfacesSchema = z.array(NetworkInterfaceSchema).openapi('NetworkInterfaces')

const VpcIdSchema = z.string().openapi('VpcId')

const SubnetIdSchema = z
  .string()
  .regex(/^subnet-([0-9a-f]{8}|[0-9a-f]{17})$/)
  .openapi('SubnetId')

const SecurityGroupIdSchema = z
  .string()
  .regex(/^sg-([0-9a-f]{8}|[0-9a-f]{17})$/)
  .openapi('SecurityGroupId')

const EndpointAccessTypeSchema = z
  .enum(['Private', 'CustomerOwnedIp'])
  .openapi('EndpointAccessType')

const CustomerOwnedIpv4PoolSchema = z
  .string()
  .regex(/^ipv4pool-coip-([0-9a-f]{17})$/)
  .openapi('CustomerOwnedIpv4Pool')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const MessageSchema = z.string().openapi('Message')

const FailedReasonSchema = z
  .object({
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The failure code, if any, for a create or delete endpoint operation.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional error details describing the endpoint failure and recommended action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The failure reason, if any, for a create or delete endpoint operation.',
    required: [],
  })
  .openapi('FailedReason')

const EndpointSchema = z
  .object({
    EndpointArn: EndpointArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint.' }),
    ).exactOptional(),
    OutpostsId: OutpostIdSchema.and(
      z.any().openapi({ description: 'The ID of the Outposts.' }),
    ).exactOptional(),
    CidrBlock: CidrBlockSchema.and(
      z.any().openapi({ description: 'The VPC CIDR committed by this endpoint.' }),
    ).exactOptional(),
    Status: EndpointStatusSchema.and(
      z.any().openapi({ description: 'The status of the endpoint.' }),
    ).exactOptional(),
    CreationTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The time the endpoint was created.' }),
    ).exactOptional(),
    NetworkInterfaces: NetworkInterfacesSchema.and(
      z.any().openapi({ description: 'The network interface of the endpoint.' }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The ID of the VPC used for the endpoint.' }),
    ).exactOptional(),
    SubnetId: SubnetIdSchema.and(
      z.any().openapi({ description: 'The ID of the subnet used for the endpoint.' }),
    ).exactOptional(),
    SecurityGroupId: SecurityGroupIdSchema.and(
      z.any().openapi({ description: 'The ID of the security group used for the endpoint.' }),
    ).exactOptional(),
    AccessType: EndpointAccessTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of connectivity used to access the Amazon S3 on Outposts endpoint.',
        }),
    ).exactOptional(),
    CustomerOwnedIpv4Pool: CustomerOwnedIpv4PoolSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the customer-owned IPv4 address pool used for the endpoint.',
        }),
    ).exactOptional(),
    FailedReason: FailedReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The failure reason, if any, for a create or delete endpoint operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Amazon S3 on Outposts Access Points simplify managing data access at scale for shared datasets in S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WorkingWithS3Outposts.html"> Accessing S3 on Outposts using VPC-only access points</a> in the <i>Amazon Simple Storage Service User Guide</i>.',
    required: [],
  })
  .openapi('Endpoint')

const EndpointsSchema = z.array(EndpointSchema).openapi('Endpoints')

const NextTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9\+\:\/\=\?\#-_]+$/)
  .min(1)
  .max(1024)
  .openapi('NextToken')

const ListEndpointsResultSchema = z
  .object({
    Endpoints: EndpointsSchema.and(
      z
        .any()
        .openapi({ description: 'The list of endpoints associated with the specified Outpost.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of endpoints associated with the specified Outpost exceeds <code>MaxResults</code>, you can include this value in subsequent calls to this operation to retrieve more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEndpointsResult')

const OutpostArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):outposts:[a-z\-0-9]*:[0-9]{12}:outpost\/(op-[a-f0-9]{17}|ec2)$/,
  )
  .openapi('OutpostArn')

const AwsAccountIdSchema = z
  .string()
  .regex(/^\d{12}$/)
  .openapi('AwsAccountId')

const CapacityInBytesSchema = z.int().openapi('CapacityInBytes')

const OutpostSchema = z
  .object({
    OutpostArn: OutpostArnSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the unique Amazon Resource Name (ARN) for the outpost.',
        }),
    ).exactOptional(),
    OutpostId: OutpostIdSchema.and(
      z.any().openapi({ description: 'Specifies the unique identifier for the outpost.' }),
    ).exactOptional(),
    OwnerId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the Amazon Web Services account ID of the outpost owner. Useful for comparing owned versus shared outposts.',
        }),
    ).exactOptional(),
    CapacityInBytes: CapacityInBytesSchema.and(
      z.any().openapi({ description: 'The Amazon S3 capacity of the outpost in bytes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the details for the Outpost object.', required: [] })
  .openapi('Outpost')

const OutpostsSchema = z.array(OutpostSchema).openapi('Outposts')

const ListOutpostsWithS3ResultSchema = z
  .object({
    Outposts: OutpostsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Returns the list of Outposts that have the following characteristics:</p> <ul> <li> <p>outposts that have S3 provisioned</p> </li> <li> <p>outposts that are <code>Active</code> (not pending any provisioning nor decommissioned)</p> </li> <li> <p>outposts to which the the calling Amazon Web Services account has access</p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a token that you can use to call <code>ListOutpostsWithS3</code> again and receive additional results, if there are any.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOutpostsWithS3Result')

const ListSharedEndpointsResultSchema = z
  .object({
    Endpoints: EndpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of endpoints associated with the specified Outpost that have been shared by Amazon Web Services Resource Access Manager (RAM).',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of endpoints associated with the specified Outpost exceeds <code>MaxResults</code>, you can include this value in subsequent calls to this operation to retrieve more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSharedEndpointsResult')

const CreateEndpointRequestSchema = z
  .object({
    OutpostId: OutpostIdSchema.and(z.any().openapi({ description: 'The ID of the Outposts. ' })),
    SubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the subnet in the selected VPC. The endpoint subnet must belong to the Outpost that has Amazon S3 on Outposts provisioned.',
        }),
    ),
    SecurityGroupId: SecurityGroupIdSchema.and(
      z.any().openapi({ description: 'The ID of the security group to use with the endpoint.' }),
    ),
    AccessType: EndpointAccessTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of access for the network connectivity for the Amazon S3 on Outposts endpoint. To use the Amazon Web Services VPC, choose <code>Private</code>. To use the endpoint with an on-premises network, choose <code>CustomerOwnedIp</code>. If you choose <code>CustomerOwnedIp</code>, you must also provide the customer-owned IP address pool (CoIP pool).</p> <note> <p> <code>Private</code> is the default access type value.</p> </note>',
        }),
    ).exactOptional(),
    CustomerOwnedIpv4Pool: CustomerOwnedIpv4PoolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses are allocated from this pool for the endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OutpostId', 'SubnetId', 'SecurityGroupId'],
    title: 'CreateEndpointRequest',
  })
  .openapi('CreateEndpointRequest')

const EndpointIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{19}$/)
  .openapi('EndpointId')

const DeleteEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEndpointRequest' })
  .openapi('DeleteEndpointRequest')

const MaxResultsSchema = z.int().min(0).max(100).openapi('MaxResults')

const ListEndpointsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEndpointsRequest' })
  .openapi('ListEndpointsRequest')

const ListOutpostsWithS3RequestSchema = z
  .object({})
  .openapi({ title: 'ListOutpostsWithS3Request' })
  .openapi('ListOutpostsWithS3Request')

const ListSharedEndpointsRequestSchema = z
  .object({})
  .openapi({ title: 'ListSharedEndpointsRequest' })
  .openapi('ListSharedEndpointsRequest')

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

export const postS3OutpostsCreateEndpointRoute = createRoute({
  method: 'post',
  path: '/S3Outposts/CreateEndpoint',
  description:
    '<p>Creates an endpoint and associates it with the specified Outpost.</p> <note> <p>It can take up to 5 minutes for this action to finish.</p> </note> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a> </p> </li> </ul>',
  operationId: 'CreateEndpoint',
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
              OutpostId: z
                .string()
                .regex(/^(op-[a-f0-9]{17}|\d{12}|ec2)$/)
                .openapi({ description: 'The ID of the Outposts. ' }),
              SubnetId: z
                .string()
                .regex(/^subnet-([0-9a-f]{8}|[0-9a-f]{17})$/)
                .openapi({
                  description:
                    'The ID of the subnet in the selected VPC. The endpoint subnet must belong to the Outpost that has Amazon S3 on Outposts provisioned.',
                }),
              SecurityGroupId: z
                .string()
                .regex(/^sg-([0-9a-f]{8}|[0-9a-f]{17})$/)
                .openapi({ description: 'The ID of the security group to use with the endpoint.' }),
              AccessType: z
                .enum(['Private', 'CustomerOwnedIp'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The type of access for the network connectivity for the Amazon S3 on Outposts endpoint. To use the Amazon Web Services VPC, choose <code>Private</code>. To use the endpoint with an on-premises network, choose <code>CustomerOwnedIp</code>. If you choose <code>CustomerOwnedIp</code>, you must also provide the customer-owned IP address pool (CoIP pool).</p> <note> <p> <code>Private</code> is the default access type value.</p> </note>',
                }),
              CustomerOwnedIpv4Pool: z
                .string()
                .regex(/^ipv4pool-coip-([0-9a-f]{17})$/)
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses are allocated from this pool for the endpoint.',
                }),
            })
            .openapi({ required: ['OutpostId', 'SubnetId', 'SecurityGroupId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEndpointResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'OutpostOfflineException',
      content: { 'application/json': { schema: OutpostOfflineExceptionSchema } },
    },
  },
})

export const deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRoute = createRoute({
  method: 'delete',
  path: '/S3Outposts/DeleteEndpoint#endpointId&outpostId',
  description:
    '<p>Deletes an endpoint.</p> <note> <p>It can take up to 5 minutes for this action to finish.</p> </note> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a> </p> </li> </ul>',
  operationId: 'DeleteEndpoint',
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
      endpointId: z
        .string()
        .regex(/^[a-zA-Z0-9]{19}$/)
        .openapi({
          param: {
            name: 'endpointId',
            in: 'query',
            required: true,
            description: 'The ID of the endpoint.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9]{19}$' },
          },
        }),
      outpostId: z
        .string()
        .regex(/^(op-[a-f0-9]{17}|\d{12}|ec2)$/)
        .openapi({
          param: {
            name: 'outpostId',
            in: 'query',
            required: true,
            description: 'The ID of the Outposts. ',
            schema: { type: 'string', pattern: '^(op-[a-f0-9]{17}|\\d{12}|ec2)$' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'OutpostOfflineException',
      content: { 'application/json': { schema: OutpostOfflineExceptionSchema } },
    },
  },
})

export const getS3OutpostsListEndpointsRoute = createRoute({
  method: 'get',
  path: '/S3Outposts/ListEndpoints',
  description:
    '<p>Lists endpoints associated with the specified Outpost. </p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> </ul>',
  operationId: 'ListEndpoints',
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
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9\+\:\/\=\?\#-_]+$/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'If a previous response from this operation included a <code>NextToken</code> value, provide that value here to retrieve the next page of results.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9\\+\\:\\/\\=\\?\\#-_]+$',
              minLength: 1,
              maxLength: 1024,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of endpoints that will be returned in the response.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEndpointsResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getS3OutpostsListOutpostsWithS3Route = createRoute({
  method: 'get',
  path: '/S3Outposts/ListOutpostsWithS3',
  description:
    'Lists the Outposts with S3 on Outposts capacity for your Amazon Web Services account. Includes S3 on Outposts that you have access to as the Outposts owner, or as a shared user from Resource Access Manager (RAM). ',
  operationId: 'ListOutpostsWithS3',
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
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9\+\:\/\=\?\#-_]+$/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'When you can get additional results from the <code>ListOutpostsWithS3</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional Outposts.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9\\+\\:\\/\\=\\?\\#-_]+$',
              minLength: 1,
              maxLength: 1024,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of Outposts to return. The limit is 100.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOutpostsWithS3ResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getS3OutpostsListSharedEndpointsOutpostIdRoute = createRoute({
  method: 'get',
  path: '/S3Outposts/ListSharedEndpoints#outpostId',
  description:
    '<p>Lists all endpoints associated with an Outpost that has been shared by Amazon Web Services Resource Access Manager (RAM).</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> </ul>',
  operationId: 'ListSharedEndpoints',
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
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9\+\:\/\=\?\#-_]+$/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'If a previous response from this operation included a <code>NextToken</code> value, you can provide that value here to retrieve the next page of results.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9\\+\\:\\/\\=\\?\\#-_]+$',
              minLength: 1,
              maxLength: 1024,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of endpoints that will be returned in the response.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
      outpostId: z
        .string()
        .regex(/^(op-[a-f0-9]{17}|\d{12}|ec2)$/)
        .openapi({
          param: {
            name: 'outpostId',
            in: 'query',
            required: true,
            description: 'The ID of the Amazon Web Services Outpost.',
            schema: { type: 'string', pattern: '^(op-[a-f0-9]{17}|\\d{12}|ec2)$' },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSharedEndpointsResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
