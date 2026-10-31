import { createRoute, z } from '@hono/zod-openapi'

const ConnectionArnSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+/)
  .min(0)
  .max(256)
  .openapi('ConnectionArn')

const TagKeySchema = z.string().regex(/.*/).min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().regex(/.*/).min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: "The tag's key." })),
    Value: TagValueSchema.and(z.any().openapi({ description: "The tag's value." })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by AWS services that support tags.</p>',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateConnectionOutputSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the connection to be created. The ARN is used as the connection reference when the connection is shared between AWS services.</p> <note> <p>The ARN is never reused if the connection is deleted.</p> </note>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Specifies the tags applied to the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConnectionArn'] })
  .openapi('CreateConnectionOutput')

const ProviderTypeSchema = z
  .enum(['Bitbucket', 'GitHub', 'GitHubEnterpriseServer'])
  .openapi('ProviderType')

const ConnectionNameSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(32)
  .openapi('ConnectionName')

const HostArnSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:codestar-connections:.+:[0-9]{12}:host\/.+/)
  .min(0)
  .max(256)
  .openapi('HostArn')

const CreateConnectionInputSchema = z
  .object({
    ProviderType: ProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the external provider where your third-party code repository is configured.',
        }),
    ).exactOptional(),
    ConnectionName: ConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the connection to be created. The name must be unique in the calling AWS account.',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The key-value pair to use when tagging the resource.' }),
    ).exactOptional(),
    HostArn: HostArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the host associated with the connection to be created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConnectionName'], title: 'CreateConnectionInput' })
  .openapi('CreateConnectionInput')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceUnavailableExceptionSchema = z.any().openapi('ResourceUnavailableException')

const CreateHostOutputSchema = z
  .object({
    HostArn: HostArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the host to be created.' }),
    ).exactOptional(),
    Tags: TagListSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateHostOutput')

const HostNameSchema = z.string().regex(/.*/).min(1).max(64).openapi('HostName')

const UrlSchema = z.string().regex(/.*/).min(1).max(512).openapi('Url')

const VpcIdSchema = z
  .string()
  .regex(/vpc-\w{8}(\w{9})?/)
  .min(12)
  .max(21)
  .openapi('VpcId')

const SubnetIdSchema = z
  .string()
  .regex(/subnet-\w{8}(\w{9})?/)
  .min(15)
  .max(24)
  .openapi('SubnetId')

const SubnetIdsSchema = z.array(SubnetIdSchema).min(1).max(10).openapi('SubnetIds')

const SecurityGroupIdSchema = z
  .string()
  .regex(/sg-\w{8}(\w{9})?/)
  .min(11)
  .max(20)
  .openapi('SecurityGroupId')

const SecurityGroupIdsSchema = z
  .array(SecurityGroupIdSchema)
  .min(1)
  .max(10)
  .openapi('SecurityGroupIds')

const TlsCertificateSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(16384)
  .openapi('TlsCertificate')

const VpcConfigurationSchema = z
  .object({
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon VPC connected to the infrastructure where your provider type is installed.',
        }),
    ),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the subnet or subnets associated with the Amazon VPC connected to the infrastructure where your provider type is installed.',
        }),
    ),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the security group or security groups associated with the Amazon VPC connected to the infrastructure where your provider type is installed.',
        }),
    ),
    TlsCertificate: TlsCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VpcId', 'SubnetIds', 'SecurityGroupIds'],
    description: 'The VPC configuration provisioned for the host.',
  })
  .openapi('VpcConfiguration')

const CreateHostInputSchema = z
  .object({
    Name: HostNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the host to be created. The name must be unique in the calling AWS account.',
        }),
    ),
    ProviderType: ProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the installed provider to be associated with your connection. The host resource represents the infrastructure where your provider type is installed. The valid provider type is GitHub Enterprise Server.',
        }),
    ),
    ProviderEndpoint: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint of the infrastructure to be represented by the host after it is created.',
        }),
    ),
    VpcConfiguration: VpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC configuration to be provisioned for the host. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.exactOptional(),
  })
  .openapi({ required: ['Name', 'ProviderType', 'ProviderEndpoint'], title: 'CreateHostInput' })
  .openapi('CreateHostInput')

const DeleteConnectionOutputSchema = z.object({}).openapi('DeleteConnectionOutput')

const DeleteConnectionInputSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the connection to be deleted.</p> <note> <p>The ARN is never reused if the connection is deleted.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['ConnectionArn'], title: 'DeleteConnectionInput' })
  .openapi('DeleteConnectionInput')

const DeleteHostOutputSchema = z.object({}).openapi('DeleteHostOutput')

const DeleteHostInputSchema = z
  .object({
    HostArn: HostArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the host to be deleted.' }),
    ),
  })
  .openapi({ required: ['HostArn'], title: 'DeleteHostInput' })
  .openapi('DeleteHostInput')

const AccountIdSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .length(12)
  .openapi('AccountId')

const ConnectionStatusSchema = z.enum(['PENDING', 'AVAILABLE', 'ERROR']).openapi('ConnectionStatus')

const ConnectionSchema = z
  .object({
    ConnectionName: ConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the connection. Connection names must be unique in an AWS user account.',
        }),
    ).exactOptional(),
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between AWS services.</p> <note> <p>The ARN is never reused if the connection is deleted.</p> </note>',
        }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the external provider where your third-party code repository is configured.',
        }),
    ).exactOptional(),
    OwnerAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.',
        }),
    ).exactOptional(),
    ConnectionStatus: ConnectionStatusSchema.and(
      z.any().openapi({ description: 'The current status of the connection. ' }),
    ).exactOptional(),
    HostArn: HostArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the host associated with the connection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p>',
    required: [],
  })
  .openapi('Connection')

const GetConnectionOutputSchema = z
  .object({
    Connection: ConnectionSchema.and(
      z
        .any()
        .openapi({
          description: 'The connection details, such as status, owner, and provider type.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetConnectionOutput')

const GetConnectionInputSchema = z
  .object({
    ConnectionArn: ConnectionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a connection.' }),
    ),
  })
  .openapi({ required: ['ConnectionArn'], title: 'GetConnectionInput' })
  .openapi('GetConnectionInput')

const HostStatusSchema = z.string().regex(/.*/).min(1).max(64).openapi('HostStatus')

const GetHostOutputSchema = z
  .object({
    Name: HostNameSchema.and(
      z.any().openapi({ description: 'The name of the requested host.' }),
    ).exactOptional(),
    Status: HostStatusSchema.and(
      z.any().openapi({ description: 'The status of the requested host.' }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The provider type of the requested host, such as GitHub Enterprise Server.',
        }),
    ).exactOptional(),
    ProviderEndpoint: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The endpoint of the infrastructure represented by the requested host.',
        }),
    ).exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.and(
      z.any().openapi({ description: 'The VPC configuration of the requested host.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetHostOutput')

const GetHostInputSchema = z
  .object({
    HostArn: HostArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the requested host.' }),
    ),
  })
  .openapi({ required: ['HostArn'], title: 'GetHostInput' })
  .openapi('GetHostInput')

const ConnectionListSchema = z.array(ConnectionSchema).openapi('ConnectionList')

const NextTokenSchema = z.string().regex(/.*/).min(1).max(1024).openapi('NextToken')

const ListConnectionsOutputSchema = z
  .object({
    Connections: ConnectionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of connections and the details for each connection, such as status, owner, and provider type.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that can be used in the next <code>ListConnections</code> call. To view all items in the list, continue to call this operation with each subsequent token until no more <code>nextToken</code> values are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConnectionsOutput')

const MaxResultsSchema = z.int().min(0).max(100).openapi('MaxResults')

const ListConnectionsInputSchema = z
  .object({
    ProviderTypeFilter: ProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of connections to those associated with a specified provider, such as Bitbucket.',
        }),
    ).exactOptional(),
    HostArnFilter: HostArnSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters the list of connections to those associated with a specified host.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that was returned from the previous <code>ListConnections</code> call, which can be used to return the next set of connections in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListConnectionsInput', required: [] })
  .openapi('ListConnectionsInput')

const HostStatusMessageSchema = z.string().openapi('HostStatusMessage')

const HostSchema = z
  .object({
    Name: HostNameSchema.and(
      z.any().openapi({ description: 'The name of the host.' }),
    ).exactOptional(),
    HostArn: HostArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the host.' }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the installed provider to be associated with your connection. The host resource represents the infrastructure where your provider type is installed. The valid provider type is GitHub Enterprise Server.',
        }),
    ).exactOptional(),
    ProviderEndpoint: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The endpoint of the infrastructure where your provider type is installed.',
        }),
    ).exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.and(
      z.any().openapi({ description: 'The VPC configuration provisioned for the host.' }),
    ).exactOptional(),
    Status: HostStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the host, such as PENDING, AVAILABLE, VPC_CONFIG_DELETING, VPC_CONFIG_INITIALIZING, and VPC_CONFIG_FAILED_INITIALIZATION.',
        }),
    ).exactOptional(),
    StatusMessage: HostStatusMessageSchema.and(
      z.any().openapi({ description: 'The status description for the host.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>',
    required: [],
  })
  .openapi('Host')

const HostListSchema = z.array(HostSchema).openapi('HostList')

const ListHostsOutputSchema = z
  .object({
    Hosts: HostListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of hosts and the details for each host, such as status, endpoint, and provider type.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that can be used in the next <code>ListHosts</code> call. To view all items in the list, continue to call this operation with each subsequent token until no more <code>nextToken</code> values are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListHostsOutput')

const ListHostsInputSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that was returned from the previous <code>ListHosts</code> call, which can be used to return the next set of hosts in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListHostsInput', required: [] })
  .openapi('ListHostsInput')

const ListTagsForResourceOutputSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tag key and value pairs associated with the specified resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const AmazonResourceNameSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+/)
  .min(1)
  .max(1011)
  .openapi('AmazonResourceName')

const ListTagsForResourceInputSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const TagResourceInputSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags you want to modify or add to the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceInputSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource to remove tags from.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of keys for the tags to be removed from the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateHostOutputSchema = z.object({}).openapi('UpdateHostOutput')

const UpdateHostInputSchema = z
  .object({
    HostArn: HostArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the host to be updated.' }),
    ),
    ProviderEndpoint: UrlSchema.and(
      z.any().openapi({ description: 'The URL or endpoint of the host to be updated.' }),
    ).exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC configuration of the host to be updated. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HostArn'], title: 'UpdateHostInput' })
  .openapi('UpdateHostInput')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

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

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection',
    description:
      'Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.',
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
          .literal(
            'com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateConnectionInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateConnectionOutputSchema } },
      },
      480: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ResourceUnavailableException',
        content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost',
    description:
      '<p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>',
    operationId: 'CreateHost',
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
          .literal('com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost',
                ],
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CreateHostInputSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateHostOutputSchema } },
      },
      480: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection',
    description: 'The connection to be deleted.',
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
          .literal(
            'com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteConnectionInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteConnectionOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost',
    description:
      '<p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>',
    operationId: 'DeleteHost',
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
          .literal('com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost',
                ],
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DeleteHostInputSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteHostOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ResourceUnavailableException',
        content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection',
    description: 'Returns the connection ARN and details such as status, owner, and provider type.',
    operationId: 'GetConnection',
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
          .literal('com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetConnectionInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetConnectionOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ResourceUnavailableException',
        content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost',
    description:
      'Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.',
    operationId: 'GetHost',
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
          .literal('com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost'],
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: GetHostInputSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetHostOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ResourceUnavailableException',
        content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections',
    description: 'Lists the connections associated with your account.',
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
          .literal(
            'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections',
                ],
              },
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
        content: { 'application/json': { schema: ListConnectionsInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListConnectionsOutputSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts',
    description: 'Lists the hosts associated with your account.',
    operationId: 'ListHosts',
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
          .literal('com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts',
                ],
              },
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
      body: { content: { 'application/json': { schema: ListHostsInputSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListHostsOutputSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource',
    description: 'Gets the set of key-value pairs (metadata) that are used to manage the resource.',
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
          .literal(
            'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListTagsForResourceInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource',
    description:
      'Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.',
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
          .literal('com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource',
                ],
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: TagResourceInputSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: TagResourceOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource',
    description: 'Removes tags from an AWS resource.',
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
          .literal('com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UntagResourceInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UntagResourceOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost',
    description: 'Updates a specified host with the provided configurations.',
    operationId: 'UpdateHost',
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
          .literal('com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost',
                ],
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: UpdateHostInputSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateHostOutputSchema } },
      },
      480: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ResourceUnavailableException',
        content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })
