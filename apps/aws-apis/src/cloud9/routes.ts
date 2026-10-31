import { createRoute, z } from '@hono/zod-openapi'

const EnvironmentIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{8,32}$/)
  .openapi('EnvironmentId')

const CreateEnvironmentEC2ResultSchema = z
  .object({
    environmentId: EnvironmentIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment that was created.' }),
    ).exactOptional(),
  })
  .openapi({ example: { environmentId: '8d9967e2f0624182b74e7690ad69ebEX' }, required: [] })
  .openapi('CreateEnvironmentEC2Result')

const EnvironmentNameSchema = z.string().min(1).max(60).openapi('EnvironmentName')

const EnvironmentDescriptionSchema = z.string().max(200).openapi('EnvironmentDescription')

const ClientRequestTokenSchema = z
  .string()
  .regex(/[\x20-\x7E]{10,128}/)
  .openapi('ClientRequestToken')

const InstanceTypeSchema = z
  .string()
  .regex(/^[a-z][1-9][.][a-z0-9]+$/)
  .min(5)
  .max(20)
  .openapi('InstanceType')

const SubnetIdSchema = z
  .string()
  .regex(/^(subnet-[0-9a-f]{8}|subnet-[0-9a-f]{17})$/)
  .min(15)
  .max(24)
  .openapi('SubnetId')

const ImageIdSchema = z.string().max(512).openapi('ImageId')

const AutomaticStopTimeMinutesSchema = z.int().min(0).max(20160).openapi('AutomaticStopTimeMinutes')

const UserArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):(iam|sts)::\d+:(root|(user\/[\w+=\/:,.@-]{1,64}|federated-user\/[\w+=\/:,.@-]{2,32}|assumed-role\/[\w+=:,.@-]{1,64}\/[\w+=,.@-]{1,64}))$/,
  )
  .openapi('UserArn')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The <b>name</b> part of a tag.' })),
    Value: TagValueSchema.and(z.any().openapi({ description: 'The <b>value</b> part of a tag.' })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'Metadata that is associated with Amazon Web Services resources. In particular, a name-value pair that can be associated with an Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by Amazon Web Services services. A system tag is prefixed with <code>"aws:"</code> and cannot be modified by the user.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const ConnectionTypeSchema = z.enum(['CONNECT_SSH', 'CONNECT_SSM']).openapi('ConnectionType')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const CreateEnvironmentEC2RequestSchema = z
  .object({
    name: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment to create.</p> <p>This name is visible to other IAM users in the same Amazon Web Services account.</p>',
        }),
    ),
    description: EnvironmentDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the environment to create.' }),
    ).exactOptional(),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique, case-sensitive string that helps Cloud9 to ensure this operation completes no more than one time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Client Tokens</a> in the <i>Amazon EC2 API Reference</i>.</p>',
        }),
    ).exactOptional(),
    instanceType: InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of instance to connect to the environment (for example, <code>t2.micro</code>).',
        }),
    ),
    subnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the subnet in Amazon VPC that Cloud9 will use to communicate with the Amazon EC2 instance.',
        }),
    ).exactOptional(),
    imageId: ImageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. To choose an AMI for the instance, you must specify a valid AMI alias or a valid Amazon EC2 Systems Manager (SSM) path.</p> <p>The default Amazon Linux AMI is currently used if the parameter isn't explicitly assigned a value in the request. </p> <p>In the future the parameter for Amazon Linux will no longer be available when you specify an AMI for your instance. Amazon Linux 2 will then become the default AMI, which is used to launch your instance if no parameter is explicitly defined.</p> <p> <b>AMI aliases </b> </p> <ul> <li> <p> <b>Amazon Linux (default): <code>amazonlinux-1-x86_64</code> </b> </p> </li> <li> <p>Amazon Linux 2: <code>amazonlinux-2-x86_64</code> </p> </li> <li> <p>Ubuntu 18.04: <code>ubuntu-18.04-x86_64</code> </p> </li> </ul> <p> <b>SSM paths</b> </p> <ul> <li> <p> <b>Amazon Linux (default): <code>resolve:ssm:/aws/service/cloud9/amis/amazonlinux-1-x86_64</code> </b> </p> </li> <li> <p>Amazon Linux 2: <code>resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2-x86_64</code> </p> </li> <li> <p>Ubuntu 18.04: <code>resolve:ssm:/aws/service/cloud9/amis/ubuntu-18.04-x86_64</code> </p> </li> </ul>",
        }),
    ).exactOptional(),
    automaticStopTimeMinutes: AutomaticStopTimeMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes until the running instance is shut down after the environment has last been used.',
        }),
    ).exactOptional(),
    ownerArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any IAM principal. If this value is not specified, the ARN defaults to this environment's creator.",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs that will be associated with the new Cloud9 development environment.',
        }),
    ).exactOptional(),
    connectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The connection type used for connecting to an Amazon EC2 environment. Valid values are <code>CONNECT_SSH</code> (default) and <code>CONNECT_SSM</code> (connected through Amazon EC2 Systems Manager).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide/ec2-ssm.html">Accessing no-ingress EC2 instances with Amazon EC2 Systems Manager</a> in the <i>Cloud9 User Guide</i>.</p>',
        }),
    ).exactOptional(),
    dryRun: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'instanceType'], title: 'CreateEnvironmentEC2Request' })
  .openapi('CreateEnvironmentEC2Request')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const PermissionsSchema = z.enum(['owner', 'read-write', 'read-only']).openapi('Permissions')

const StringSchema = z.string().openapi('String')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const EnvironmentMemberSchema = z
  .object({
    permissions: PermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of environment member permissions associated with this environment member. Available values include:</p> <ul> <li> <p> <code>owner</code>: Owns the environment.</p> </li> <li> <p> <code>read-only</code>: Has read-only access to the environment.</p> </li> <li> <p> <code>read-write</code>: Has read-write access to the environment.</p> </li> </ul>',
        }),
    ),
    userId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user ID in Identity and Access Management (IAM) of the environment member.',
        }),
    ),
    userArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the environment member.' }),
    ),
    environmentId: EnvironmentIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment for the environment member.' }),
    ),
    lastAccess: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, expressed in epoch time format, when the environment member last opened the environment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['permissions', 'userId', 'userArn', 'environmentId'],
    description: 'Information about an environment member for an Cloud9 development environment.',
  })
  .openapi('EnvironmentMember')

const CreateEnvironmentMembershipResultSchema = z
  .object({
    membership: EnvironmentMemberSchema.and(
      z.any().openapi({ description: 'Information about the environment member that was added.' }),
    ),
  })
  .openapi({
    required: ['membership'],
    example: {
      membership: {
        environmentId: '8d9967e2f0624182b74e7690ad69ebEX',
        permissions: 'read-write',
        userArn: 'arn:aws:iam::123456789012:user/AnotherDemoUser',
        userId: 'AIDAJ3BA6O2FMJWCWXHEX',
      },
    },
  })
  .openapi('CreateEnvironmentMembershipResult')

const MemberPermissionsSchema = z.enum(['read-write', 'read-only']).openapi('MemberPermissions')

const CreateEnvironmentMembershipRequestSchema = z
  .object({
    environmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the environment that contains the environment member you want to add.',
        }),
    ),
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the environment member you want to add.',
        }),
    ),
    permissions: MemberPermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of environment member permissions you want to associate with this environment member. Available values include:</p> <ul> <li> <p> <code>read-only</code>: Has read-only access to the environment.</p> </li> <li> <p> <code>read-write</code>: Has read-write access to the environment.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['environmentId', 'userArn', 'permissions'],
    title: 'CreateEnvironmentMembershipRequest',
  })
  .openapi('CreateEnvironmentMembershipRequest')

const DeleteEnvironmentResultSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteEnvironmentResult')

const DeleteEnvironmentRequestSchema = z
  .object({
    environmentId: EnvironmentIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment to delete.' }),
    ),
  })
  .openapi({ required: ['environmentId'], title: 'DeleteEnvironmentRequest' })
  .openapi('DeleteEnvironmentRequest')

const DeleteEnvironmentMembershipResultSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteEnvironmentMembershipResult')

const DeleteEnvironmentMembershipRequestSchema = z
  .object({
    environmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the environment to delete the environment member from.',
        }),
    ),
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the environment member to delete from the environment.',
        }),
    ),
  })
  .openapi({ required: ['environmentId', 'userArn'], title: 'DeleteEnvironmentMembershipRequest' })
  .openapi('DeleteEnvironmentMembershipRequest')

const EnvironmentMembersListSchema = z
  .array(EnvironmentMemberSchema)
  .openapi('EnvironmentMembersList')

const DescribeEnvironmentMembershipsResultSchema = z
  .object({
    memberships: EnvironmentMembersListSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the environment members for the environment.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      memberships: [
        {
          environmentId: '10a75714bd494714929e7f5ec4125aEX',
          lastAccess: '2018-01-19T11:06:13Z',
          permissions: 'owner',
          userArn: 'arn:aws:iam::123456789012:user/MyDemoUser',
          userId: 'AIDAJNUEDQAQWFELJDLEX',
        },
        {
          environmentId: '12bfc3cd537f41cb9776f8af5525c9EX',
          lastAccess: '2018-01-19T11:39:19Z',
          permissions: 'owner',
          userArn: 'arn:aws:iam::123456789012:user/MyDemoUser',
          userId: 'AIDAJNUEDQAQWFELJDLEX',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeEnvironmentMembershipsResult')

const PermissionsListSchema = z.array(PermissionsSchema).openapi('PermissionsList')

const MaxResultsSchema = z.int().min(0).max(25).openapi('MaxResults')

const DescribeEnvironmentMembershipsRequestSchema = z
  .object({
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an individual environment member to get information about. If no value is specified, information about all environment members are returned.',
        }),
    ).exactOptional(),
    environmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the environment to get environment member information about.',
        }),
    ).exactOptional(),
    permissions: PermissionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of environment member permissions to get information about. Available values include:</p> <ul> <li> <p> <code>owner</code>: Owns the environment.</p> </li> <li> <p> <code>read-only</code>: Has read-only access to the environment.</p> </li> <li> <p> <code>read-write</code>: Has read-write access to the environment.</p> </li> </ul> <p>If no value is specified, information about all environment members are returned.</p>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of environment members to get information about.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEnvironmentMembershipsRequest', required: [] })
  .openapi('DescribeEnvironmentMembershipsRequest')

const EnvironmentStatusSchema = z
  .enum(['error', 'creating', 'connecting', 'ready', 'stopping', 'stopped', 'deleting'])
  .openapi('EnvironmentStatus')

const DescribeEnvironmentStatusResultSchema = z
  .object({
    status: EnvironmentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the environment. Available values include:</p> <ul> <li> <p> <code>connecting</code>: The environment is connecting.</p> </li> <li> <p> <code>creating</code>: The environment is being created.</p> </li> <li> <p> <code>deleting</code>: The environment is being deleted.</p> </li> <li> <p> <code>error</code>: The environment is in an error state.</p> </li> <li> <p> <code>ready</code>: The environment is ready.</p> </li> <li> <p> <code>stopped</code>: The environment is stopped.</p> </li> <li> <p> <code>stopping</code>: The environment is stopping.</p> </li> </ul>',
        }),
    ),
    message: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Any informational message about the status of the environment.' }),
    ),
  })
  .openapi({
    required: ['status', 'message'],
    example: { message: 'Environment is ready to use', status: 'ready' },
  })
  .openapi('DescribeEnvironmentStatusResult')

const DescribeEnvironmentStatusRequestSchema = z
  .object({
    environmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the environment to get status information about.' }),
    ),
  })
  .openapi({ required: ['environmentId'], title: 'DescribeEnvironmentStatusRequest' })
  .openapi('DescribeEnvironmentStatusRequest')

const EnvironmentTypeSchema = z.enum(['ssh', 'ec2']).openapi('EnvironmentType')

const EnvironmentLifecycleStatusSchema = z
  .enum(['CREATING', 'CREATED', 'CREATE_FAILED', 'DELETING', 'DELETE_FAILED'])
  .openapi('EnvironmentLifecycleStatus')

const EnvironmentLifecycleSchema = z
  .object({
    status: EnvironmentLifecycleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current creation or deletion lifecycle state of the environment.</p> <ul> <li> <p> <code>CREATING</code>: The environment is in the process of being created.</p> </li> <li> <p> <code>CREATED</code>: The environment was successfully created.</p> </li> <li> <p> <code>CREATE_FAILED</code>: The environment failed to be created.</p> </li> <li> <p> <code>DELETING</code>: The environment is in the process of being deleted.</p> </li> <li> <p> <code>DELETE_FAILED</code>: The environment failed to delete.</p> </li> </ul>',
        }),
    ).exactOptional(),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Any informational message about the lifecycle state of the environment.',
        }),
    ).exactOptional(),
    failureResource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the environment failed to delete, the Amazon Resource Name (ARN) of the related Amazon Web Services resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the current creation or deletion lifecycle state of an Cloud9 development environment.',
    required: [],
  })
  .openapi('EnvironmentLifecycle')

const ManagedCredentialsStatusSchema = z
  .enum([
    'ENABLED_ON_CREATE',
    'ENABLED_BY_OWNER',
    'DISABLED_BY_DEFAULT',
    'DISABLED_BY_OWNER',
    'DISABLED_BY_COLLABORATOR',
    'PENDING_REMOVAL_BY_COLLABORATOR',
    'PENDING_START_REMOVAL_BY_COLLABORATOR',
    'PENDING_REMOVAL_BY_OWNER',
    'PENDING_START_REMOVAL_BY_OWNER',
    'FAILED_REMOVAL_BY_COLLABORATOR',
    'FAILED_REMOVAL_BY_OWNER',
  ])
  .openapi('ManagedCredentialsStatus')

const EnvironmentSchema = z
  .object({
    id: EnvironmentIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment.' }),
    ).exactOptional(),
    name: EnvironmentNameSchema.and(
      z.any().openapi({ description: 'The name of the environment.' }),
    ).exactOptional(),
    description: EnvironmentDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the environment.' }),
    ).exactOptional(),
    type: EnvironmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of environment. Valid values include the following:</p> <ul> <li> <p> <code>ec2</code>: An Amazon Elastic Compute Cloud (Amazon EC2) instance connects to the environment.</p> </li> <li> <p> <code>ssh</code>: Your own server connects to the environment.</p> </li> </ul>',
        }),
    ),
    connectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The connection type used for connecting to an Amazon EC2 environment. <code>CONNECT_SSH</code> is selected by default.',
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the environment.' }),
    ),
    ownerArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the environment owner.' }),
    ),
    lifecycle: EnvironmentLifecycleSchema.and(
      z
        .any()
        .openapi({
          description: 'The state of the environment in its creation or deletion lifecycle.',
        }),
    ).exactOptional(),
    managedCredentialsStatus: ManagedCredentialsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the status of Amazon Web Services managed temporary credentials for the Cloud9 environment. Available values are:</p> <ul> <li> <p> <code>ENABLED_ON_CREATE</code> </p> </li> <li> <p> <code>ENABLED_BY_OWNER</code> </p> </li> <li> <p> <code>DISABLED_BY_DEFAULT</code> </p> </li> <li> <p> <code>DISABLED_BY_OWNER</code> </p> </li> <li> <p> <code>DISABLED_BY_COLLABORATOR</code> </p> </li> <li> <p> <code>PENDING_REMOVAL_BY_COLLABORATOR</code> </p> </li> <li> <p> <code>PENDING_REMOVAL_BY_OWNER</code> </p> </li> <li> <p> <code>FAILED_REMOVAL_BY_COLLABORATOR</code> </p> </li> <li> <p> <code>ENABLED_BY_OWNER</code> </p> </li> <li> <p> <code>DISABLED_BY_DEFAULT</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type', 'arn', 'ownerArn'],
    description: 'Information about an Cloud9 development environment.',
  })
  .openapi('Environment')

const EnvironmentListSchema = z.array(EnvironmentSchema).openapi('EnvironmentList')

const DescribeEnvironmentsResultSchema = z
  .object({
    environments: EnvironmentListSchema.and(
      z.any().openapi({ description: 'Information about the environments that are returned.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      environments: [
        {
          name: 'my-demo-environment',
          type: 'ec2',
          arn: 'arn:aws:cloud9:us-east-2:123456789012:environment:8d9967e2f0624182b74e7690ad69ebEX',
          description: 'This is my demonstration environment.',
          id: '8d9967e2f0624182b74e7690ad69ebEX',
          lifecycle: { status: 'CREATED' },
          ownerArn: 'arn:aws:iam::123456789012:user/MyDemoUser',
        },
        {
          name: 'another-demo-environment',
          type: 'ssh',
          arn: 'arn:aws:cloud9:us-east-2:123456789012:environment:349c86d4579e4e7298d500ff57a6b2EX',
          description: '',
          id: '349c86d4579e4e7298d500ff57a6b2EX',
          lifecycle: { status: 'CREATED' },
          ownerArn: 'arn:aws:sts::123456789012:assumed-role/AnotherDemoUser/AnotherDemoUser',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeEnvironmentsResult')

const BoundedEnvironmentIdListSchema = z
  .array(EnvironmentIdSchema)
  .min(1)
  .max(25)
  .openapi('BoundedEnvironmentIdList')

const DescribeEnvironmentsRequestSchema = z
  .object({
    environmentIds: BoundedEnvironmentIdListSchema.and(
      z
        .any()
        .openapi({ description: 'The IDs of individual environments to get information about.' }),
    ),
  })
  .openapi({ required: ['environmentIds'], title: 'DescribeEnvironmentsRequest' })
  .openapi('DescribeEnvironmentsRequest')

const EnvironmentIdListSchema = z.array(EnvironmentIdSchema).openapi('EnvironmentIdList')

const ListEnvironmentsResultSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.',
        }),
    ).exactOptional(),
    environmentIds: EnvironmentIdListSchema.and(
      z.any().openapi({ description: 'The list of environment identifiers.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      environmentIds: ['349c86d4579e4e7298d500ff57a6b2EX', '45a3da47af0840f2b0c0824f5ee232EX'],
    },
    required: [],
  })
  .openapi('ListEnvironmentsResult')

const ListEnvironmentsRequestSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of environments to get identifiers for.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEnvironmentsRequest', required: [] })
  .openapi('ListEnvironmentsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of tags associated with the Cloud9 development environment.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const EnvironmentArnSchema = z
  .string()
  .regex(
    /arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):cloud9:([a-z]{2}-[a-z]+-\d{1}):[0-9]{12}:environment:[a-zA-Z0-9]{8,32}/,
  )
  .openapi('EnvironmentArn')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: EnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Cloud9 development environment to get the tags for.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: EnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Cloud9 development environment to add tags to.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of tags to add to the given Cloud9 development environment.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const ConcurrentAccessExceptionSchema = z.any().openapi('ConcurrentAccessException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: EnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Cloud9 development environment to remove tags from.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag names of the tags to remove from the given Cloud9 development environment.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateEnvironmentResultSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('UpdateEnvironmentResult')

const ManagedCredentialsActionSchema = z
  .enum(['ENABLE', 'DISABLE'])
  .openapi('ManagedCredentialsAction')

const UpdateEnvironmentRequestSchema = z
  .object({
    environmentId: EnvironmentIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment to change settings.' }),
    ),
    name: EnvironmentNameSchema.and(
      z.any().openapi({ description: 'A replacement name for the environment.' }),
    ).exactOptional(),
    description: EnvironmentDescriptionSchema.and(
      z.any().openapi({ description: 'Any new or replacement description for the environment.' }),
    ).exactOptional(),
    managedCredentialsAction: ManagedCredentialsActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Allows the environment owner to turn on or turn off the Amazon Web Services managed temporary credentials for an Cloud9 environment by using one of the following values:</p> <ul> <li> <p> <code>ENABLE</code> </p> </li> <li> <p> <code>DISABLE</code> </p> </li> </ul> <note> <p>Only the environment owner can change the status of managed temporary credentials. An <code>AccessDeniedException</code> is thrown if an attempt to turn on or turn off managed temporary credentials is made by an account that's not the environment owner.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['environmentId'], title: 'UpdateEnvironmentRequest' })
  .openapi('UpdateEnvironmentRequest')

const UpdateEnvironmentMembershipResultSchema = z
  .object({
    membership: EnvironmentMemberSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the environment member whose settings were changed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      membership: {
        environmentId: '8d9967e2f0624182b74e7690ad69eb31',
        permissions: 'read-only',
        userArn: 'arn:aws:iam::123456789012:user/AnotherDemoUser',
        userId: 'AIDAJ3BA6O2FMJWCWXHEX',
      },
    },
    required: [],
  })
  .openapi('UpdateEnvironmentMembershipResult')

const UpdateEnvironmentMembershipRequestSchema = z
  .object({
    environmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the environment for the environment member whose settings you want to change.',
        }),
    ),
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the environment member whose settings you want to change.',
        }),
    ),
    permissions: MemberPermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The replacement type of environment member permissions you want to associate with this environment member. Available values include:</p> <ul> <li> <p> <code>read-only</code>: Has read-only access to the environment.</p> </li> <li> <p> <code>read-write</code>: Has read-write access to the environment.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['environmentId', 'userArn', 'permissions'],
    title: 'UpdateEnvironmentMembershipRequest',
  })
  .openapi('UpdateEnvironmentMembershipRequest')

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

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Route =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2',
    description:
      'Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.',
    operationId: 'CreateEnvironmentEC2',
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
          .literal('AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateEnvironmentEC2RequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateEnvironmentEC2ResultSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership',
    description: 'Adds an environment member to an Cloud9 development environment.',
    operationId: 'CreateEnvironmentMembership',
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
          .literal('AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateEnvironmentMembershipRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateEnvironmentMembershipResultSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment',
  description:
    'Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.',
  operationId: 'DeleteEnvironment',
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
        .literal('AWSCloud9WorkspaceManagementService.DeleteEnvironment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCloud9WorkspaceManagementService.DeleteEnvironment'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEnvironmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEnvironmentResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership',
    description: 'Deletes an environment member from a development environment.',
    operationId: 'DeleteEnvironmentMembership',
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
          .literal('AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteEnvironmentMembershipRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteEnvironmentMembershipResultSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships',
    description:
      'Gets information about environment members for an Cloud9 development environment.',
    operationId: 'DescribeEnvironmentMemberships',
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
          .literal('AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships'],
              },
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
      body: {
        content: { 'application/json': { schema: DescribeEnvironmentMembershipsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeEnvironmentMembershipsResultSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus',
    description: 'Gets status information for an Cloud9 development environment.',
    operationId: 'DescribeEnvironmentStatus',
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
          .literal('AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeEnvironmentStatusRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeEnvironmentStatusResultSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments',
    description: 'Gets information about Cloud9 development environments.',
    operationId: 'DescribeEnvironments',
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
          .literal('AWSCloud9WorkspaceManagementService.DescribeEnvironments')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCloud9WorkspaceManagementService.DescribeEnvironments'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeEnvironmentsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeEnvironmentsResultSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments',
  description: 'Gets a list of Cloud9 development environment identifiers.',
  operationId: 'ListEnvironments',
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
        .literal('AWSCloud9WorkspaceManagementService.ListEnvironments')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCloud9WorkspaceManagementService.ListEnvironments'],
            },
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
    body: {
      content: { 'application/json': { schema: ListEnvironmentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentsResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource',
    description: 'Gets a list of the tags associated with an Cloud9 development environment.',
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
          .literal('AWSCloud9WorkspaceManagementService.ListTagsForResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCloud9WorkspaceManagementService.ListTagsForResource'],
              },
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
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource',
  description:
    '<p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>',
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
        .literal('AWSCloud9WorkspaceManagementService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCloud9WorkspaceManagementService.TagResource'] },
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
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConcurrentAccessException',
      content: { 'application/json': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource',
  description: 'Removes tags from an Cloud9 development environment.',
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
        .literal('AWSCloud9WorkspaceManagementService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCloud9WorkspaceManagementService.UntagResource'] },
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
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConcurrentAccessException',
      content: { 'application/json': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment',
  description: 'Changes the settings of an existing Cloud9 development environment.',
  operationId: 'UpdateEnvironment',
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
        .literal('AWSCloud9WorkspaceManagementService.UpdateEnvironment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCloud9WorkspaceManagementService.UpdateEnvironment'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEnvironmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEnvironmentResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership',
    description:
      'Changes the settings of an existing environment member for an Cloud9 development environment.',
    operationId: 'UpdateEnvironmentMembership',
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
          .literal('AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateEnvironmentMembershipRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateEnvironmentMembershipResultSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })
