import { createRoute, z } from '@hono/zod-openapi'

const AcceptMatchOutputSchema = z.object({}).openapi('AcceptMatchOutput')

const MatchmakingIdStringModelSchema = z
  .string()
  .regex(/[a-zA-Z0-9-\.]*/)
  .max(128)
  .openapi('MatchmakingIdStringModel')

const NonZeroAndMaxStringSchema = z.string().min(1).max(1024).openapi('NonZeroAndMaxString')

const StringListSchema = z.array(NonZeroAndMaxStringSchema).openapi('StringList')

const AcceptanceTypeSchema = z.enum(['ACCEPT', 'REJECT']).openapi('AcceptanceType')

const AcceptMatchInputSchema = z
  .object({
    TicketId: MatchmakingIdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a matchmaking ticket. The ticket must be in status <code>REQUIRES_ACCEPTANCE</code>; otherwise this request will fail.',
        }),
    ),
    PlayerIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a player delivering the response. This parameter can include one or multiple player IDs.',
        }),
    ),
    AcceptanceType: AcceptanceTypeSchema.and(
      z.any().openapi({ description: 'Player response to the proposed match.' }),
    ),
  })
  .openapi({ required: ['TicketId', 'PlayerIds', 'AcceptanceType'], title: 'AcceptMatchInput' })
  .openapi('AcceptMatchInput')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const UnsupportedRegionExceptionSchema = z.any().openapi('UnsupportedRegionException')

const GameServerGroupNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-\.]+/)
  .min(1)
  .max(128)
  .openapi('GameServerGroupName')

const GameServerGroupArnSchema = z
  .string()
  .regex(/^arn:.*:gameservergroup\/[a-zA-Z0-9-\.]*/)
  .min(1)
  .max(256)
  .openapi('GameServerGroupArn')

const GameServerIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9-\.]+/)
  .min(3)
  .max(128)
  .openapi('GameServerId')

const GameServerInstanceIdSchema = z
  .string()
  .regex(/^i-[0-9a-zA-Z]{17}$/)
  .length(19)
  .openapi('GameServerInstanceId')

const GameServerConnectionInfoSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(512)
  .openapi('GameServerConnectionInfo')

const GameServerDataSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1024)
  .openapi('GameServerData')

const GameServerClaimStatusSchema = z.literal('CLAIMED').openapi('GameServerClaimStatus')

const GameServerUtilizationStatusSchema = z
  .enum(['AVAILABLE', 'UTILIZED'])
  .openapi('GameServerUtilizationStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const GameServerSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group where the game server is running.',
        }),
    ).exactOptional(),
    GameServerGroupArn: GameServerGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN identifier for the game server group where the game server is located.',
        }),
    ).exactOptional(),
    GameServerId: GameServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom string that uniquely identifies the game server. Game server IDs are developer-defined and are unique across all game server groups in an Amazon Web Services account.',
        }),
    ).exactOptional(),
    InstanceId: GameServerInstanceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: <code>i-1234567890abcdef0</code>.',
        }),
    ).exactOptional(),
    ConnectionInfo: GameServerConnectionInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port and IP address that must be used to establish a client connection to the game server.',
        }),
    ).exactOptional(),
    GameServerData: GameServerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers.',
        }),
    ).exactOptional(),
    ClaimStatus: GameServerClaimStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates when an available game server has been reserved for gameplay but has not yet started hosting a game. Once it is claimed, the game server remains in <code>CLAIMED</code> status for a maximum of one minute. During this time, game clients connect to the game server to start the game and trigger the game server to update its utilization status. After one minute, the game server claim status reverts to null.',
        }),
    ).exactOptional(),
    UtilizationStatus: GameServerUtilizationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the game server is currently available for new games or is busy. Possible statuses include:</p> <ul> <li> <p> <code>AVAILABLE</code> - The game server is available to be claimed. A game server that has been claimed remains in this status until it reports game hosting activity. </p> </li> <li> <p> <code>UTILIZED</code> - The game server is currently hosting a game session with players. </p> </li> </ul>',
        }),
    ).exactOptional(),
    RegistrationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp that indicates when the game server registered. The format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    LastClaimTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp that indicates the last time the game server was claimed. The format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>). This value is used to calculate when a claimed game server\'s status should revert to null.',
        }),
    ).exactOptional(),
    LastHealthCheckTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp that indicates the last time the game server was updated with health status. The format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>). After game server registration, this property is only changed when a game server update specifies a health check value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a game server group. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p>',
    required: [],
  })
  .openapi('GameServer')

const ClaimGameServerOutputSchema = z
  .object({
    GameServer: GameServerSchema.and(
      z.any().openapi({ description: 'Object that describes the newly claimed game server.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClaimGameServerOutput')

const GameServerGroupNameOrArnSchema = z
  .string()
  .regex(/[a-zA-Z0-9-\.]+|^arn:.*:gameservergroup\/[a-zA-Z0-9-\.]+/)
  .min(1)
  .max(256)
  .openapi('GameServerGroupNameOrArn')

const ClaimGameServerInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group where the game server is running. If you are not specifying a game server to claim, this value identifies where you want Amazon GameLift FleetIQ to look for an available game server to claim. ',
        }),
    ),
    GameServerId: GameServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom string that uniquely identifies the game server to claim. If this parameter is left empty, Amazon GameLift FleetIQ searches for an available game server in the specified game server group.',
        }),
    ).exactOptional(),
    GameServerData: GameServerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameServerGroupName'], title: 'ClaimGameServerInput' })
  .openapi('ClaimGameServerInput')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const OutOfCapacityExceptionSchema = z.any().openapi('OutOfCapacityException')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const AliasIdSchema = z
  .string()
  .regex(/^alias-\S+/)
  .openapi('AliasId')

const NonBlankAndLengthConstraintStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1024)
  .openapi('NonBlankAndLengthConstraintString')

const AliasArnSchema = z
  .string()
  .regex(/^arn:.*:alias\/alias-\S+/)
  .openapi('AliasArn')

const FreeTextSchema = z.string().openapi('FreeText')

const RoutingStrategyTypeSchema = z.enum(['SIMPLE', 'TERMINAL']).openapi('RoutingStrategyType')

const FleetIdSchema = z
  .string()
  .regex(/^fleet-\S+/)
  .openapi('FleetId')

const RoutingStrategySchema = z
  .object({
    Type: RoutingStrategyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of routing strategy for the alias.</p> <p>Possible routing types include the following:</p> <ul> <li> <p> <b>SIMPLE</b> - The alias resolves to one specific fleet. Use this type when routing to active fleets.</p> </li> <li> <p> <b>TERMINAL</b> - The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the message embedded.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet that the alias points to. This value is the fleet ID, not the fleet ARN.',
        }),
    ).exactOptional(),
    Message: FreeTextSchema.and(
      z
        .any()
        .openapi({ description: 'The message text to be used with a terminal routing strategy.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The routing configuration for a fleet alias.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
    required: [],
  })
  .openapi('RoutingStrategy')

const AliasSchema = z
  .object({
    AliasId: AliasIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the alias. Alias IDs are unique within a Region.',
        }),
    ).exactOptional(),
    Name: NonBlankAndLengthConstraintStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with an alias. Alias names do not need to be unique.',
        }),
    ).exactOptional(),
    AliasArn: AliasArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift alias resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::alias/alias-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift alias ARN, the resource ID matches the alias ID value.',
        }),
    ).exactOptional(),
    Description: FreeTextSchema.and(
      z.any().openapi({ description: 'A human-readable description of an alias.' }),
    ).exactOptional(),
    RoutingStrategy: RoutingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The routing configuration, including routing type and fleet target, for the alias. ',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    LastUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Properties that describe an alias resource.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
    required: [],
  })
  .openapi('Alias')

const CreateAliasOutputSchema = z
  .object({
    Alias: AliasSchema.and(
      z.any().openapi({ description: 'The newly created alias resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAliasOutput')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key for a developer-defined key value pair for tagging an Amazon Web Services resource. ',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for a developer-defined key value pair for tagging an Amazon Web Services resource. ',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<p>A label that you can assign to a Amazon GameLift resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateAliasInputSchema = z
  .object({
    Name: NonBlankAndLengthConstraintStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with an alias. Alias names do not need to be unique.',
        }),
    ),
    Description: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A human-readable description of the alias.' }),
    ).exactOptional(),
    RoutingStrategy: RoutingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The routing configuration, including routing type and fleet target, for the alias. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new alias resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'RoutingStrategy'], title: 'CreateAliasInput' })
  .openapi('CreateAliasInput')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const TaggingFailedExceptionSchema = z.any().openapi('TaggingFailedException')

const BuildIdSchema = z
  .string()
  .regex(/^build-\S+/)
  .openapi('BuildId')

const BuildArnSchema = z
  .string()
  .regex(/^arn:.*:build\/build-\S+/)
  .openapi('BuildArn')

const BuildStatusSchema = z.enum(['INITIALIZED', 'READY', 'FAILED']).openapi('BuildStatus')

const PositiveLongSchema = z.int().min(1).openapi('PositiveLong')

const OperatingSystemSchema = z
  .enum(['WINDOWS_2012', 'AMAZON_LINUX', 'AMAZON_LINUX_2', 'WINDOWS_2016'])
  .openapi('OperatingSystem')

const ServerSdkVersionSchema = z
  .string()
  .regex(/^\d+\.\d+\.\d+$/)
  .max(128)
  .openapi({ description: 'Data type used for server SDK version.' })
  .openapi('ServerSdkVersion')

const BuildSchema = z
  .object({
    BuildId: BuildIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the build.' }),
    ).exactOptional(),
    BuildArn: BuildArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) assigned to a Amazon GameLift build resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::build/build-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift build ARN, the resource ID matches the <i>BuildId</i> value.',
        }),
    ).exactOptional(),
    Name: FreeTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label associated with a build. Build names don\'t need to be unique. It can be set using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">CreateBuild</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/UpdateBuild">UpdateBuild</a>.',
        }),
    ).exactOptional(),
    Version: FreeTextSchema.and(
      z
        .any()
        .openapi({
          description:
            "Version information associated with a build or script. Version strings don't need to be unique.",
        }),
    ).exactOptional(),
    Status: BuildStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Current status of the build.</p> <p>Possible build statuses include the following:</p> <ul> <li> <p> <b>INITIALIZED</b> -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value. </p> </li> <li> <p> <b>READY</b> -- The game build has been successfully uploaded. You can now create new fleets for this build.</p> </li> <li> <p> <b>FAILED</b> -- The game build upload failed. You cannot create new fleets for this build. </p> </li> </ul>',
        }),
    ).exactOptional(),
    SizeOnDisk: PositiveLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'File size of the uploaded game build, expressed in bytes. When the build status is <code>INITIALIZED</code> or when using a custom Amazon S3 storage location, this value is 0.',
        }),
    ).exactOptional(),
    OperatingSystem: OperatingSystemSchema.and(
      z
        .any()
        .openapi({
          description:
            'Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    ServerSdkVersion: ServerSdkVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon GameLift Server SDK version used to develop your game server.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Properties describing a custom game build.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
    required: [],
  })
  .openapi('Build')

const NonEmptyStringSchema = z.string().min(1).openapi('NonEmptyString')

const AwsCredentialsSchema = z
  .object({
    AccessKeyId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Temporary key allowing access to the Amazon GameLift S3 account.',
        }),
    ).exactOptional(),
    SecretAccessKey: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Temporary secret key allowing access to the Amazon GameLift S3 account.',
        }),
    ).exactOptional(),
    SessionToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token used to associate a specific build ID with the files uploaded using these credentials.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html">RequestUploadCredentials</a>.',
    required: [],
  })
  .openapi('AwsCredentials')

const S3LocationSchema = z
  .object({
    Bucket: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An Amazon S3 bucket identifier. Thename of the S3 bucket.</p> <note> <p>Amazon GameLift doesn't support uploading from Amazon S3 buckets with names that contain a dot (.).</p> </note>",
        }),
    ).exactOptional(),
    Key: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the zip file that contains the build files or script files. ',
        }),
    ).exactOptional(),
    RoleArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that allows Amazon GameLift to access the S3 bucket.',
        }),
    ).exactOptional(),
    ObjectVersion: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses this information when retrieving files from an S3 bucket that you own. Use this parameter to specify a specific version of the file. If not set, the latest version of the file is retrieved. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The location in Amazon S3 where build or script files are stored for access by Amazon GameLift.',
    required: [],
  })
  .openapi('S3Location')

const CreateBuildOutputSchema = z
  .object({
    Build: BuildSchema.and(
      z
        .any()
        .openapi({
          description:
            'The newly created build resource, including a unique build IDs and status. ',
        }),
    ).exactOptional(),
    UploadCredentials: AwsCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This element is returned only when the operation is called without a storage location. It contains credentials to use when you are uploading a build file to an Amazon S3 bucket that is owned by Amazon GameLift. Credentials have a limited life span. To refresh these credentials, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html">RequestUploadCredentials</a>. ',
        }),
    ).exactOptional(),
    StorageLocation: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon S3 location for your game build file, including bucket name and key.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBuildOutput')

const CreateBuildInputSchema = z
  .object({
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A descriptive label associated with a build. Build names don't need to be unique. You can change this value later. ",
        }),
    ).exactOptional(),
    Version: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Version information associated with a build or script. Version strings don't need to be unique. You can change this value later. ",
        }),
    ).exactOptional(),
    StorageLocation: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region.</p> <p>If a <code>StorageLocation</code> is specified, the size of your file can be found in your Amazon S3 bucket. Amazon GameLift will report a <code>SizeOnDisk</code> of 0. </p>',
        }),
    ).exactOptional(),
    OperatingSystem: OperatingSystemSchema.and(
      z
        .any()
        .openapi({
          description:
            "The operating system that you built the game server binaries to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system isn't specified when creating a build, Amazon GameLift uses the default value (WINDOWS_2012). This value can't be changed later.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new build resource. Tags are developer defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>. Once the resource is created, you can use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html">UntagResource</a>, and <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html">ListTagsForResource</a> to add, remove, and view tags. The maximum tag limit may be lower than stated. See the Amazon Web Services General Reference for actual tagging limits.',
        }),
    ).exactOptional(),
    ServerSdkVersion: ServerSdkVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A server SDK version you used when integrating your game server build with Amazon GameLift. For more information see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-custom-intro.html">Integrate games with custom game servers</a>. By default Amazon GameLift sets this value to <code>4.0.2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateBuildInput', required: [] })
  .openapi('CreateBuildInput')

const FleetArnSchema = z
  .string()
  .regex(/^arn:.*:fleet\/fleet-\S+/)
  .openapi('FleetArn')

const FleetTypeSchema = z.enum(['ON_DEMAND', 'SPOT']).openapi('FleetType')

const EC2InstanceTypeSchema = z
  .enum([
    't2.micro',
    't2.small',
    't2.medium',
    't2.large',
    'c3.large',
    'c3.xlarge',
    'c3.2xlarge',
    'c3.4xlarge',
    'c3.8xlarge',
    'c4.large',
    'c4.xlarge',
    'c4.2xlarge',
    'c4.4xlarge',
    'c4.8xlarge',
    'c5.large',
    'c5.xlarge',
    'c5.2xlarge',
    'c5.4xlarge',
    'c5.9xlarge',
    'c5.12xlarge',
    'c5.18xlarge',
    'c5.24xlarge',
    'c5a.large',
    'c5a.xlarge',
    'c5a.2xlarge',
    'c5a.4xlarge',
    'c5a.8xlarge',
    'c5a.12xlarge',
    'c5a.16xlarge',
    'c5a.24xlarge',
    'r3.large',
    'r3.xlarge',
    'r3.2xlarge',
    'r3.4xlarge',
    'r3.8xlarge',
    'r4.large',
    'r4.xlarge',
    'r4.2xlarge',
    'r4.4xlarge',
    'r4.8xlarge',
    'r4.16xlarge',
    'r5.large',
    'r5.xlarge',
    'r5.2xlarge',
    'r5.4xlarge',
    'r5.8xlarge',
    'r5.12xlarge',
    'r5.16xlarge',
    'r5.24xlarge',
    'r5a.large',
    'r5a.xlarge',
    'r5a.2xlarge',
    'r5a.4xlarge',
    'r5a.8xlarge',
    'r5a.12xlarge',
    'r5a.16xlarge',
    'r5a.24xlarge',
    'm3.medium',
    'm3.large',
    'm3.xlarge',
    'm3.2xlarge',
    'm4.large',
    'm4.xlarge',
    'm4.2xlarge',
    'm4.4xlarge',
    'm4.10xlarge',
    'm5.large',
    'm5.xlarge',
    'm5.2xlarge',
    'm5.4xlarge',
    'm5.8xlarge',
    'm5.12xlarge',
    'm5.16xlarge',
    'm5.24xlarge',
    'm5a.large',
    'm5a.xlarge',
    'm5a.2xlarge',
    'm5a.4xlarge',
    'm5a.8xlarge',
    'm5a.12xlarge',
    'm5a.16xlarge',
    'm5a.24xlarge',
    'c5d.large',
    'c5d.xlarge',
    'c5d.2xlarge',
    'c5d.4xlarge',
    'c5d.9xlarge',
    'c5d.12xlarge',
    'c5d.18xlarge',
    'c5d.24xlarge',
    'c6a.large',
    'c6a.xlarge',
    'c6a.2xlarge',
    'c6a.4xlarge',
    'c6a.8xlarge',
    'c6a.12xlarge',
    'c6a.16xlarge',
    'c6a.24xlarge',
    'c6i.large',
    'c6i.xlarge',
    'c6i.2xlarge',
    'c6i.4xlarge',
    'c6i.8xlarge',
    'c6i.12xlarge',
    'c6i.16xlarge',
    'c6i.24xlarge',
    'r5d.large',
    'r5d.xlarge',
    'r5d.2xlarge',
    'r5d.4xlarge',
    'r5d.8xlarge',
    'r5d.12xlarge',
    'r5d.16xlarge',
    'r5d.24xlarge',
  ])
  .openapi('EC2InstanceType')

const FleetStatusSchema = z
  .enum([
    'NEW',
    'DOWNLOADING',
    'VALIDATING',
    'BUILDING',
    'ACTIVATING',
    'ACTIVE',
    'DELETING',
    'ERROR',
    'TERMINATED',
    'NOT_FOUND',
  ])
  .openapi('FleetStatus')

const ScriptIdSchema = z
  .string()
  .regex(/^script-\S+/)
  .openapi('ScriptId')

const ScriptArnSchema = z
  .string()
  .regex(/^arn:.*:script\/script-\S+/)
  .openapi('ScriptArn')

const LaunchPathStringModelSchema = z
  .string()
  .regex(/[A-Za-z0-9_:.+\/\\\- ]+/)
  .min(1)
  .max(1024)
  .openapi('LaunchPathStringModel')

const LaunchParametersStringModelSchema = z
  .string()
  .regex(/[A-Za-z0-9_:.+\/\\\- =@;{},?'\[\]"]+/)
  .min(1)
  .max(1024)
  .openapi('LaunchParametersStringModel')

const ProtectionPolicySchema = z
  .enum(['NoProtection', 'FullProtection'])
  .openapi('ProtectionPolicy')

const WholeNumberSchema = z.int().min(0).openapi('WholeNumber')

const ResourceCreationLimitPolicySchema = z
  .object({
    NewGameSessionsPerCreator: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p>",
        }),
    ).exactOptional(),
    PolicyPeriodInMinutes: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'The time span used in evaluating the resource creation limit policy. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p>",
    required: [],
  })
  .openapi('ResourceCreationLimitPolicy')

const MetricGroupSchema = z.string().min(1).max(255).openapi('MetricGroup')

const MetricGroupListSchema = z.array(MetricGroupSchema).max(1).openapi('MetricGroupList')

const FleetActionSchema = z.literal('AUTO_SCALING').openapi('FleetAction')

const FleetActionListSchema = z.array(FleetActionSchema).length(1).openapi('FleetActionList')

const CertificateTypeSchema = z.enum(['DISABLED', 'GENERATED']).openapi('CertificateType')

const CertificateConfigurationSchema = z
  .object({
    CertificateType: CertificateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether a TLS/SSL certificate is generated for a fleet. </p> <p>Valid values include: </p> <ul> <li> <p> <b>GENERATED</b> - Generate a TLS/SSL certificate for this fleet.</p> </li> <li> <p> <b>DISABLED</b> - (default) Do not generate a TLS/SSL certificate for this fleet. </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['CertificateType'],
    description:
      'Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>. ',
  })
  .openapi('CertificateConfiguration')

const ComputeTypeSchema = z.enum(['EC2', 'ANYWHERE']).openapi('ComputeType')

const NonNegativeLimitedLengthDoubleSchema = z
  .string()
  .regex(/^\d{1,5}(?:\.\d{1,5})?$/)
  .min(1)
  .max(11)
  .openapi('NonNegativeLimitedLengthDouble')

const AnywhereConfigurationSchema = z
  .object({
    Cost: NonNegativeLimitedLengthDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cost to run your fleet per hour. Amazon GameLift uses the provided cost of your fleet to balance usage in queues. For more information about queues, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html">Setting up queues</a> in the <i>Amazon GameLift Developer Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['Cost'],
    description: 'Amazon GameLift Anywhere configuration options for your Anywhere fleets.',
  })
  .openapi('AnywhereConfiguration')

const FleetAttributesSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the fleet.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift fleet ARN, the resource ID matches the <code>FleetId</code> value.',
        }),
    ).exactOptional(),
    FleetType: FleetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to use On-Demand or Spot instances for this fleet. By default, this property is set to <code>ON_DEMAND</code>. Learn more about when to use <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. This property cannot be changed after the fleet is created.',
        }),
    ).exactOptional(),
    InstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 instance type that determines the computing resources of each instance in the fleet. Instance type defines the CPU, memory, storage, and networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a> for detailed descriptions.',
        }),
    ).exactOptional(),
    Description: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A human-readable description of the fleet.' }),
    ).exactOptional(),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a fleet. Fleet names do not need to be unique.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    TerminationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    Status: FleetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Current status of the fleet. Possible fleet statuses include the following:</p> <ul> <li> <p> <b>NEW</b> -- A new fleet has been defined and desired instances is set to 1. </p> </li> <li> <p> <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> -- Amazon GameLift is setting up the new fleet, creating new instances with the game build or Realtime script and starting server processes.</p> </li> <li> <p> <b>ACTIVE</b> -- Hosts can now accept game sessions.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred when downloading, validating, building, or activating the fleet.</p> </li> <li> <p> <b>DELETING</b> -- Hosts are responding to a delete fleet request.</p> </li> <li> <p> <b>TERMINATED</b> -- The fleet no longer exists.</p> </li> </ul>',
        }),
    ).exactOptional(),
    BuildId: BuildIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the build resource that is deployed on instances in this fleet.',
        }),
    ).exactOptional(),
    BuildArn: BuildArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the Amazon GameLift build resource that is deployed on instances in this fleet. In a GameLift build ARN, the resource ID matches the <code>BuildId</code> value.',
        }),
    ).exactOptional(),
    ScriptId: ScriptIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Realtime script resource that is deployed on instances in this fleet.',
        }),
    ).exactOptional(),
    ScriptArn: ScriptArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift script resource that is deployed on instances in this fleet. In a GameLift script ARN, the resource ID matches the <code>ScriptId</code> value.',
        }),
    ).exactOptional(),
    ServerLaunchPath: LaunchPathStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>This parameter is no longer used.</b> Server launch paths are now defined using the fleet\'s <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/RuntimeConfiguration.html">RuntimeConfiguration</a> . Requests that use this parameter instead continue to be valid.',
        }),
    ).exactOptional(),
    ServerLaunchParameters: LaunchParametersStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            " <b>This parameter is no longer used.</b> Server launch parameters are now defined using the fleet's runtime configuration . Requests that use this parameter instead continue to be valid.",
        }),
    ).exactOptional(),
    LogPaths: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>This parameter is no longer used.</b> Game session log paths are now defined using the Amazon GameLift server API <code>ProcessReady()</code> <code>logParameters</code>. See more information in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api-ref.html#gamelift-sdk-server-api-ref-dataypes-process">Server API Reference</a>. ',
        }),
    ).exactOptional(),
    NewGameSessionProtectionPolicy: ProtectionPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of game session protection to set on all new instances that are started in the fleet.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OperatingSystem: OperatingSystemSchema.and(
      z
        .any()
        .openapi({
          description:
            "The operating system of the fleet's computing resources. A fleet's operating system is determined by the OS of the build or script that is deployed on this fleet.",
        }),
    ).exactOptional(),
    ResourceCreationLimitPolicy: ResourceCreationLimitPolicySchema.exactOptional(),
    MetricGroups: MetricGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of a metric group that metrics for this fleet are added to. In Amazon CloudWatch, you can view aggregated metrics for fleets that are in a metric group. A fleet can be included in only one metric group at a time.',
        }),
    ).exactOptional(),
    StoppedActions: FleetActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of fleet activity that has been suspended using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a> . This includes fleet auto-scaling.',
        }),
    ).exactOptional(),
    InstanceRoleArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for an IAM role that manages access to your Amazon Web Services services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role\'s ARN by using the <a href="https://console.aws.amazon.com/iam/">IAM dashboard</a> in the Amazon Web Services Management Console. Learn more about using on-box credentials for your game servers at <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html"> Access external resources from a game server</a>.',
        }),
    ).exactOptional(),
    CertificateConfiguration: CertificateConfigurationSchema.exactOptional(),
    ComputeType: ComputeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of compute resource used to host your game servers. You can use your own compute resources with Amazon GameLift Anywhere or use Amazon EC2 instances with managed Amazon GameLift.',
        }),
    ).exactOptional(),
    AnywhereConfiguration: AnywhereConfigurationSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a Amazon GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p>',
    required: [],
  })
  .openapi('FleetAttributes')

const LocationStringModelSchema = z
  .string()
  .regex(/^[A-Za-z0-9\-]+/)
  .min(1)
  .max(64)
  .openapi('LocationStringModel')

const LocationStateSchema = z
  .object({
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet location, expressed as an Amazon Web Services Region code such as <code>us-west-2</code>. ',
        }),
    ).exactOptional(),
    Status: FleetStatusSchema.and(
      z.any().openapi({ description: 'The life-cycle status of a fleet location. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>A fleet location and its life-cycle state. A location state object might be used to describe a fleet's remote location or home Region. Life-cycle state tracks the progress of launching the first instance in a new location and preparing it for game hosting, and then removing all instances and deleting the location from the fleet.</p> <ul> <li> <p> <b>NEW</b> -- A new fleet location has been defined and desired instances is set to 1. </p> </li> <li> <p> <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> -- Amazon GameLift is setting up the new fleet location, creating new instances with the game build or Realtime script and starting server processes.</p> </li> <li> <p> <b>ACTIVE</b> -- Hosts can now accept game sessions.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred when downloading, validating, building, or activating the fleet location.</p> </li> <li> <p> <b>DELETING</b> -- Hosts are responding to a delete fleet location request.</p> </li> <li> <p> <b>TERMINATED</b> -- The fleet location no longer exists.</p> </li> <li> <p> <b>NOT_FOUND</b> -- The fleet location was not found. This could be because the custom location was removed or not created. </p> </li> </ul>",
    required: [],
  })
  .openapi('LocationState')

const LocationStateListSchema = z.array(LocationStateSchema).openapi('LocationStateList')

const CreateFleetOutputSchema = z
  .object({
    FleetAttributes: FleetAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The properties for the new fleet, including the current status. All fleets are placed in <code>NEW</code> status on creation. ',
        }),
    ).exactOptional(),
    LocationStates: LocationStateListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The fleet's locations and life-cycle status of each location. For new fleets, the status of all locations is set to <code>NEW</code>. During fleet creation, Amazon GameLift updates each location status as instances are deployed there and prepared for game hosting. This list includes an entry for the fleet's home Region. For fleets with no remote locations, only one entry, representing the home Region, is returned.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFleetOutput')

const BuildIdOrArnSchema = z
  .string()
  .regex(/^build-\S+|^arn:.*:build\/build-\S+/)
  .openapi('BuildIdOrArn')

const ScriptIdOrArnSchema = z
  .string()
  .regex(/^script-\S+|^arn:.*:script\/script-\S+/)
  .openapi('ScriptIdOrArn')

const PortNumberSchema = z.int().min(1).max(60000).openapi('PortNumber')

const NonBlankStringSchema = z
  .string()
  .regex(/[^\s]+/)
  .openapi('NonBlankString')

const IpProtocolSchema = z.enum(['TCP', 'UDP']).openapi('IpProtocol')

const IpPermissionSchema = z
  .object({
    FromPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A starting value for a range of allowed port numbers.</p> <p>For fleets using Linux builds, only ports <code>22</code> and <code>1026-60000</code> are valid.</p> <p>For fleets using Windows builds, only ports <code>1026-60000</code> are valid.</p>',
        }),
    ),
    ToPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than <code>FromPort</code>.</p> <p>For fleets using Linux builds, only ports <code>22</code> and <code>1026-60000</code> are valid.</p> <p>For fleets using Windows builds, only ports <code>1026-60000</code> are valid.</p>',
        }),
    ),
    IpRange: NonBlankStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "<code>000.000.000.000/[subnet mask]</code>" or optionally the shortened version "<code>0.0.0.0/[subnet mask]</code>".',
        }),
    ),
    Protocol: IpProtocolSchema.and(
      z.any().openapi({ description: 'The network communication protocol used by the fleet.' }),
    ),
  })
  .openapi({
    required: ['FromPort', 'ToPort', 'IpRange', 'Protocol'],
    description:
      "A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.",
  })
  .openapi('IpPermission')

const IpPermissionsListSchema = z.array(IpPermissionSchema).max(50).openapi('IpPermissionsList')

const PositiveIntegerSchema = z.int().min(1).openapi('PositiveInteger')

const ServerProcessSchema = z
  .object({
    LaunchPath: LaunchPathStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location of a game build executable or the Realtime script file that contains the <code>Init()</code> function. Game builds and Realtime scripts are installed on instances at the root: </p> <ul> <li> <p>Windows (custom game builds only): <code>C:\\game</code>. Example: "<code>C:\\game\\MyGame\\server.exe</code>" </p> </li> <li> <p>Linux: <code>/local/game</code>. Examples: "<code>/local/game/MyGame/server.exe</code>" or "<code>/local/game/MyRealtimeScript.js</code>"</p> </li> </ul>',
        }),
    ),
    Parameters: LaunchParametersStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional list of parameters to pass to the server executable or Realtime script on launch.',
        }),
    ).exactOptional(),
    ConcurrentExecutions: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of server processes using this configuration that run concurrently on each instance.',
        }),
    ),
  })
  .openapi({
    required: ['LaunchPath', 'ConcurrentExecutions'],
    description:
      "A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's runtime configuration.",
  })
  .openapi('ServerProcess')

const ServerProcessListSchema = z
  .array(ServerProcessSchema)
  .min(1)
  .max(50)
  .openapi('ServerProcessList')

const MaxConcurrentGameSessionActivationsSchema = z
  .int()
  .min(1)
  .max(2147483647)
  .openapi('MaxConcurrentGameSessionActivations')

const GameSessionActivationTimeoutSecondsSchema = z
  .int()
  .min(1)
  .max(600)
  .openapi('GameSessionActivationTimeoutSeconds')

const RuntimeConfigurationSchema = z
  .object({
    ServerProcesses: ServerProcessListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of server process configurations that identify what server processes to run on each instance in a fleet.',
        }),
    ).exactOptional(),
    MaxConcurrentGameSessionActivations: MaxConcurrentGameSessionActivationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of game sessions in status <code>ACTIVATING</code> to allow on an instance. This setting limits the instance resources that can be used for new game activations at any one time.',
        }),
    ).exactOptional(),
    GameSessionActivationTimeoutSeconds: GameSessionActivationTimeoutSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of time (in seconds) allowed to launch a new game session and have it report ready to host players. During this time, the game session is in status <code>ACTIVATING</code>. If the game session does not become active before the timeout, it is ended and the game session status is changed to <code>TERMINATED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Amazon GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration. </p> <p>A Amazon GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each server process. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet</a>.</p>',
    required: [],
  })
  .openapi('RuntimeConfiguration')

const LocationConfigurationSchema = z
  .object({
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description: 'An Amazon Web Services Region code, such as <code>us-west-2</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['Location'],
    description:
      'A remote location where a multi-location fleet can deploy game servers for game hosting. ',
  })
  .openapi('LocationConfiguration')

const LocationConfigurationListSchema = z
  .array(LocationConfigurationSchema)
  .min(1)
  .max(100)
  .openapi('LocationConfigurationList')

const CreateFleetInputSchema = z
  .object({
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a fleet. Fleet names do not need to be unique.',
        }),
    ),
    Description: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A description for the fleet.' }),
    ).exactOptional(),
    BuildId: BuildIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for a custom game server build to be deployed on fleet instances. You can use either the build ID or ARN. The build must be uploaded to Amazon GameLift and in <code>READY</code> status. This fleet property cannot be changed later.',
        }),
    ).exactOptional(),
    ScriptId: ScriptIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for a Realtime configuration script to be deployed on fleet instances. You can use either the script ID or ARN. Scripts must be uploaded to Amazon GameLift prior to creating the fleet. This fleet property cannot be changed later.',
        }),
    ).exactOptional(),
    ServerLaunchPath: LaunchPathStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>This parameter is no longer used.</b> Specify a server launch path using the <code>RuntimeConfiguration</code> parameter. Requests that use this parameter instead continue to be valid.',
        }),
    ).exactOptional(),
    ServerLaunchParameters: LaunchParametersStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>This parameter is no longer used.</b> Specify server launch parameters using the <code>RuntimeConfiguration</code> parameter. Requests that use this parameter instead continue to be valid.',
        }),
    ).exactOptional(),
    LogPaths: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>This parameter is no longer used.</b> To specify where Amazon GameLift should store log files once a server process shuts down, use the Amazon GameLift server API <code>ProcessReady()</code> and specify one or more directory paths in <code>logParameters</code>. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-initialize">Initialize the server process</a> in the <i>Amazon GameLift Developer Guide</i>. ',
        }),
    ).exactOptional(),
    EC2InstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon GameLift-supported Amazon EC2 instance type to use for all fleet instances. Instance type determines the computing resources that will be used to host your game servers, including CPU, memory, storage, and networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a> for detailed descriptions of Amazon EC2 instance types.',
        }),
    ).exactOptional(),
    EC2InboundPermissions: IpPermissionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The allowed IP address ranges and port settings that allow inbound traffic to access game sessions on this fleet. If the fleet is hosting a custom game build, this property must be set before players can connect to game sessions. For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges. ',
        }),
    ).exactOptional(),
    NewGameSessionProtectionPolicy: ProtectionPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of termination protection for active game sessions on the fleet. By default, this property is set to <code>NoProtection</code>. You can also set game session protection for an individual game session by calling <a href="gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a>.</p> <ul> <li> <p> <b>NoProtection</b> - Game sessions can be terminated during active gameplay as a result of a scale-down event. </p> </li> <li> <p> <b>FullProtection</b> - Game sessions in <code>ACTIVE</code> status cannot be terminated during a scale-down event.</p> </li> </ul>',
        }),
    ).exactOptional(),
    RuntimeConfiguration: RuntimeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Instructions for how to launch and maintain server processes on instances in the fleet. The runtime configuration defines one or more server process configurations, each identifying a build executable or Realtime script file and the number of processes of that type to run concurrently. </p> <note> <p>The <code>RuntimeConfiguration</code> parameter is required unless the fleet is being configured using the older parameters <code>ServerLaunchPath</code> and <code>ServerLaunchParameters</code>, which are still supported for backward compatibility.</p> </note>',
        }),
    ).exactOptional(),
    ResourceCreationLimitPolicy: ResourceCreationLimitPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'A policy that limits the number of game sessions that an individual player can create on instances in this fleet within a specified span of time.',
        }),
    ).exactOptional(),
    MetricGroups: MetricGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Amazon Web Services CloudWatch metric group to add this fleet to. A metric group is used to aggregate the metrics for multiple fleets. You can specify an existing metric group name or set a new name to create a new metric group. A fleet can be included in only one metric group at a time. ',
        }),
    ).exactOptional(),
    PeerVpcAwsAccountId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used when peering your Amazon GameLift fleet with a VPC, the unique identifier for the Amazon Web Services account that owns the VPC. You can find your account ID in the Amazon Web Services Management Console under account settings. ',
        }),
    ).exactOptional(),
    PeerVpcId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console. Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.',
        }),
    ).exactOptional(),
    FleetType: FleetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to use On-Demand or Spot instances for this fleet. By default, this property is set to <code>ON_DEMAND</code>. Learn more about when to use <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. This property cannot be changed after the fleet is created.',
        }),
    ).exactOptional(),
    InstanceRoleArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for an IAM role that manages access to your Amazon Web Services services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role\'s ARN by using the <a href="https://console.aws.amazon.com/iam/">IAM dashboard</a> in the Amazon Web Services Management Console. Learn more about using on-box credentials for your game servers at <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html"> Access external resources from a game server</a>. This property cannot be changed after the fleet is created.',
        }),
    ).exactOptional(),
    CertificateConfiguration: CertificateConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Prompts Amazon GameLift to generate a TLS/SSL certificate for the fleet. Amazon GameLift uses the certificates to encrypt traffic between game clients and the game servers running on Amazon GameLift. By default, the <code>CertificateConfiguration</code> is <code>DISABLED</code>. You can\'t change this property after you create the fleet. </p> <p>Certificate Manager (ACM) certificates expire after 13 months. Certificate expiration can cause fleets to fail, preventing players from connecting to instances in the fleet. We recommend you replace fleets before 13 months, consider using fleet aliases for a smooth transition.</p> <note> <p>ACM isn\'t available in all Amazon Web Services regions. A fleet creation request with certificate generation enabled in an unsupported Region, fails with a 4xx error. For more information about the supported Regions, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html">Supported Regions</a> in the <i>Certificate Manager User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    Locations: LocationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A set of remote locations to deploy additional instances to and manage as part of the fleet. This parameter can only be used when creating fleets in Amazon Web Services Regions that support multiple locations. You can add any Amazon GameLift-supported Amazon Web Services Region as a remote location, in the form of an Amazon Web Services Region code such as <code>us-west-2</code>. To create a fleet with instances in the home Region only, don't use this parameter. </p> <p>To use this parameter, Amazon GameLift requires you to use your home location in the request.</p>",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new fleet resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
    ComputeType: ComputeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of compute resource used to host your game servers. You can use your own compute resources with Amazon GameLift Anywhere or use Amazon EC2 instances with managed Amazon GameLift. By default, this property is set to <code>EC2</code>.',
        }),
    ).exactOptional(),
    AnywhereConfiguration: AnywhereConfigurationSchema.and(
      z.any().openapi({ description: 'Amazon GameLift Anywhere configuration options.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateFleetInput' })
  .openapi('CreateFleetInput')

const FleetIdOrArnSchema = z
  .string()
  .regex(/^fleet-\S+|^arn:.*:fleet\/fleet-\S+/)
  .openapi('FleetIdOrArn')

const CreateFleetLocationsOutputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet that was updated with new locations.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. ',
        }),
    ).exactOptional(),
    LocationStates: LocationStateListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The remote locations that are being added to the fleet, and the life-cycle status of each location. For new locations, the status is set to <code>NEW</code>. During location creation, Amazon GameLift updates each location's status as instances are deployed there and prepared for game hosting. This list does not include the fleet home Region or any remote locations that were already added to the fleet.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFleetLocationsOutput')

const CreateFleetLocationsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to add locations to. You can use either the fleet ID or ARN value.',
        }),
    ),
    Locations: LocationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of locations to deploy additional instances to and manage as part of the fleet. You can add any Amazon GameLift-supported Amazon Web Services Region as a remote location, in the form of an Amazon Web Services Region code such as <code>us-west-2</code>. ',
        }),
    ),
  })
  .openapi({ required: ['FleetId', 'Locations'], title: 'CreateFleetLocationsInput' })
  .openapi('CreateFleetLocationsInput')

const InvalidFleetStatusExceptionSchema = z.any().openapi('InvalidFleetStatusException')

const IamRoleArnSchema = z
  .string()
  .regex(/^arn:.*:role\/[\w+=,.@-]+/)
  .min(1)
  .max(256)
  .openapi('IamRoleArn')

const GameServerGroupInstanceTypeSchema = z
  .enum([
    'c4.large',
    'c4.xlarge',
    'c4.2xlarge',
    'c4.4xlarge',
    'c4.8xlarge',
    'c5.large',
    'c5.xlarge',
    'c5.2xlarge',
    'c5.4xlarge',
    'c5.9xlarge',
    'c5.12xlarge',
    'c5.18xlarge',
    'c5.24xlarge',
    'c5a.large',
    'c5a.xlarge',
    'c5a.2xlarge',
    'c5a.4xlarge',
    'c5a.8xlarge',
    'c5a.12xlarge',
    'c5a.16xlarge',
    'c5a.24xlarge',
    'c6g.medium',
    'c6g.large',
    'c6g.xlarge',
    'c6g.2xlarge',
    'c6g.4xlarge',
    'c6g.8xlarge',
    'c6g.12xlarge',
    'c6g.16xlarge',
    'r4.large',
    'r4.xlarge',
    'r4.2xlarge',
    'r4.4xlarge',
    'r4.8xlarge',
    'r4.16xlarge',
    'r5.large',
    'r5.xlarge',
    'r5.2xlarge',
    'r5.4xlarge',
    'r5.8xlarge',
    'r5.12xlarge',
    'r5.16xlarge',
    'r5.24xlarge',
    'r5a.large',
    'r5a.xlarge',
    'r5a.2xlarge',
    'r5a.4xlarge',
    'r5a.8xlarge',
    'r5a.12xlarge',
    'r5a.16xlarge',
    'r5a.24xlarge',
    'r6g.medium',
    'r6g.large',
    'r6g.xlarge',
    'r6g.2xlarge',
    'r6g.4xlarge',
    'r6g.8xlarge',
    'r6g.12xlarge',
    'r6g.16xlarge',
    'm4.large',
    'm4.xlarge',
    'm4.2xlarge',
    'm4.4xlarge',
    'm4.10xlarge',
    'm5.large',
    'm5.xlarge',
    'm5.2xlarge',
    'm5.4xlarge',
    'm5.8xlarge',
    'm5.12xlarge',
    'm5.16xlarge',
    'm5.24xlarge',
    'm5a.large',
    'm5a.xlarge',
    'm5a.2xlarge',
    'm5a.4xlarge',
    'm5a.8xlarge',
    'm5a.12xlarge',
    'm5a.16xlarge',
    'm5a.24xlarge',
    'm6g.medium',
    'm6g.large',
    'm6g.xlarge',
    'm6g.2xlarge',
    'm6g.4xlarge',
    'm6g.8xlarge',
    'm6g.12xlarge',
    'm6g.16xlarge',
  ])
  .openapi('GameServerGroupInstanceType')

const WeightedCapacitySchema = z
  .string()
  .regex(/^[\u0031-\u0039][\u0030-\u0039]{0,2}$/)
  .min(1)
  .max(3)
  .openapi('WeightedCapacity')

const InstanceDefinitionSchema = z
  .object({
    InstanceType: GameServerGroupInstanceTypeSchema.and(
      z.any().openapi({ description: 'An Amazon EC2 instance type designation.' }),
    ),
    WeightedCapacity: WeightedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group. Instance weights are used by Amazon GameLift FleetIQ to calculate the instance type\'s cost per unit hour and better identify the most cost-effective options. For detailed information on weighting instance capacity, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html">Instance Weighting</a> in the <i>Amazon Elastic Compute Cloud Auto Scaling User Guide</i>. Default value is "1".',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceType'],
    description:
      '<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An allowed instance type for a game server group. All game server groups must have at least two instance types defined for it. Amazon GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p>',
  })
  .openapi('InstanceDefinition')

const InstanceDefinitionsSchema = z
  .array(InstanceDefinitionSchema)
  .min(2)
  .max(20)
  .openapi('InstanceDefinitions')

const BalancingStrategySchema = z
  .enum(['SPOT_ONLY', 'SPOT_PREFERRED', 'ON_DEMAND_ONLY'])
  .openapi('BalancingStrategy')

const GameServerProtectionPolicySchema = z
  .enum(['NO_PROTECTION', 'FULL_PROTECTION'])
  .openapi('GameServerProtectionPolicy')

const AutoScalingGroupArnSchema = z
  .string()
  .min(0)
  .max(256)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('AutoScalingGroupArn')

const GameServerGroupStatusSchema = z
  .enum(['NEW', 'ACTIVATING', 'ACTIVE', 'DELETE_SCHEDULED', 'DELETING', 'DELETED', 'ERROR'])
  .openapi('GameServerGroupStatus')

const GameServerGroupActionSchema = z
  .literal('REPLACE_INSTANCE_TYPES')
  .openapi('GameServerGroupAction')

const GameServerGroupActionsSchema = z
  .array(GameServerGroupActionSchema)
  .length(1)
  .openapi('GameServerGroupActions')

const GameServerGroupSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A developer-defined identifier for the game server group. The name is unique for each Region in each Amazon Web Services account.',
        }),
    ).exactOptional(),
    GameServerGroupArn: GameServerGroupArnSchema.and(
      z.any().openapi({ description: 'A generated unique ID for the game server group.' }),
    ).exactOptional(),
    RoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.',
        }),
    ).exactOptional(),
    InstanceDefinitions: InstanceDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of Amazon EC2 instance types that Amazon GameLift FleetIQ can use when balancing and automatically scaling instances in the corresponding Auto Scaling group. ',
        }),
    ).exactOptional(),
    BalancingStrategy: BalancingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:</p> <ul> <li> <p> <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.</p> </li> <li> <p> <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.</p> </li> <li> <p> <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.</p> </li> </ul>',
        }),
    ).exactOptional(),
    GameServerProtectionPolicy: GameServerProtectionPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. ',
        }),
    ).exactOptional(),
    AutoScalingGroupArn: AutoScalingGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A generated unique ID for the Amazon EC2 Auto Scaling group that is associated with this game server group.',
        }),
    ).exactOptional(),
    Status: GameServerGroupStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the game server group. Possible statuses include:</p> <ul> <li> <p> <code>NEW</code> - Amazon GameLift FleetIQ has validated the <code>CreateGameServerGroup()</code> request. </p> </li> <li> <p> <code>ACTIVATING</code> - Amazon GameLift FleetIQ is setting up a game server group, which includes creating an Auto Scaling group in your Amazon Web Services account. </p> </li> <li> <p> <code>ACTIVE</code> - The game server group has been successfully created. </p> </li> <li> <p> <code>DELETE_SCHEDULED</code> - A request to delete the game server group has been received. </p> </li> <li> <p> <code>DELETING</code> - Amazon GameLift FleetIQ has received a valid <code>DeleteGameServerGroup()</code> request and is processing it. Amazon GameLift FleetIQ must first complete and release hosts before it deletes the Auto Scaling group and the game server group. </p> </li> <li> <p> <code>DELETED</code> - The game server group has been successfully deleted. </p> </li> <li> <p> <code>ERROR</code> - The asynchronous processes of activating or deleting a game server group has failed, resulting in an error state.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StatusReason: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information about the current game server group status. This information might provide additional insight on groups that are in <code>ERROR</code> status.',
        }),
    ).exactOptional(),
    SuspendedActions: GameServerGroupActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of activities that are currently suspended for this game server group. If this property is empty, all activities are occurring.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    LastUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp that indicates when this game server group was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding Amazon EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p>',
    required: [],
  })
  .openapi('GameServerGroup')

const CreateGameServerGroupOutputSchema = z
  .object({
    GameServerGroup: GameServerGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            "The newly created game server group object, including the new ARN value for the Amazon GameLift FleetIQ game server group and the object's status. The Amazon EC2 Auto Scaling group ARN is initially null, since the group has not yet been created. This value is added once the game server group status reaches <code>ACTIVE</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGameServerGroupOutput')

const LaunchTemplateIdSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]\\+',
  })
  .openapi('LaunchTemplateId')

const LaunchTemplateNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9\(\)\.\-\/_]+/)
  .min(3)
  .max(128)
  .openapi('LaunchTemplateName')

const LaunchTemplateVersionSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]\\+',
  })
  .openapi('LaunchTemplateVersion')

const LaunchTemplateSpecificationSchema = z
  .object({
    LaunchTemplateId: LaunchTemplateIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for an existing Amazon EC2 launch template.',
        }),
    ).exactOptional(),
    LaunchTemplateName: LaunchTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A readable identifier for an existing Amazon EC2 launch template. ',
        }),
    ).exactOptional(),
    Version: LaunchTemplateVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the Amazon EC2 launch template to use. If no version is specified, the default version will be used. With Amazon EC2, you can specify a default version for a launch template. If none is set, the default is the first version created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An Amazon Elastic Compute Cloud launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group. </p>',
    required: [],
  })
  .openapi('LaunchTemplateSpecification')

const NonNegativeDoubleSchema = z.float64().min(0).openapi('NonNegativeDouble')

const TargetTrackingConfigurationSchema = z
  .object({
    TargetValue: NonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Desired value to use with a game server group target-based scaling policy. ',
        }),
    ),
  })
  .openapi({
    required: ['TargetValue'],
    description:
      '<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Settings for a target-based scaling policy as part of a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerGroupAutoScalingPolicy.html">GameServerGroupAutoScalingPolicy</a> . These settings are used to create a target-based policy that tracks the Amazon GameLift FleetIQ metric <code>"PercentUtilizedGameServers"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p>',
  })
  .openapi('TargetTrackingConfiguration')

const GameServerGroupAutoScalingPolicySchema = z
  .object({
    EstimatedInstanceWarmup: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Length of time, in seconds, it takes for a new instance to start new game server processes and register with Amazon GameLift FleetIQ. Specifying a warm-up time can be useful, particularly with game servers that take a long time to start up, because it avoids prematurely starting new instances. ',
        }),
    ).exactOptional(),
    TargetTrackingConfiguration: TargetTrackingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings for a target-based scaling policy applied to Auto Scaling group. These settings are used to create a target-based policy that tracks the Amazon GameLift FleetIQ metric <code>"PercentUtilizedGameServers"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. ',
        }),
    ),
  })
  .openapi({
    required: ['TargetTrackingConfiguration'],
    description:
      '<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group. </p>',
  })
  .openapi('GameServerGroupAutoScalingPolicy')

const VpcSubnetSchema = z
  .string()
  .regex(/^subnet-[0-9a-z]+$/)
  .min(15)
  .max(24)
  .openapi('VpcSubnet')

const VpcSubnetsSchema = z.array(VpcSubnetSchema).min(1).max(20).openapi('VpcSubnets')

const CreateGameServerGroupInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for the new game server group. This value is used to generate unique ARN identifiers for the Amazon EC2 Auto Scaling group and the Amazon GameLift FleetIQ game server group. The name must be unique per Region per Amazon Web Services account.',
        }),
    ),
    RoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.',
        }),
    ),
    MinSize: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of instances allowed in the Amazon EC2 Auto Scaling group. During automatic scaling events, Amazon GameLift FleetIQ and Amazon EC2 do not scale down the group below this minimum. In production, this value should be set to at least 1. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.',
        }),
    ),
    MaxSize: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of instances allowed in the Amazon EC2 Auto Scaling group. During automatic scaling events, Amazon GameLift FleetIQ and EC2 do not scale up the group above this maximum. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.',
        }),
    ),
    LaunchTemplate: LaunchTemplateSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. You can specify the template using either the template name or ID. For help with creating a launch template, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon Elastic Compute Cloud Auto Scaling User Guide</i>. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.</p> <note> <p>If you specify network interfaces in your launch template, you must explicitly set the property <code>AssociatePublicIpAddress</code> to "true". If no network interface is specified in the launch template, Amazon GameLift FleetIQ uses your account\'s default VPC.</p> </note>',
        }),
    ),
    InstanceDefinitions: InstanceDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 instance types and sizes to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by Amazon GameLift FleetIQ. For more information on instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">EC2 Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html"> Instance Weighting for Amazon EC2 Auto Scaling</a> in the Amazon EC2 Auto Scaling User Guide.',
        }),
    ),
    AutoScalingPolicy: GameServerGroupAutoScalingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. The scaling policy uses the metric <code>"PercentUtilizedGameServers"</code> to maintain a buffer of idle game servers that can immediately accommodate new games and players. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.',
        }),
    ).exactOptional(),
    BalancingStrategy: BalancingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:</p> <ul> <li> <p> <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.</p> </li> <li> <p> <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.</p> </li> <li> <p> <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.</p> </li> </ul>',
        }),
    ).exactOptional(),
    GameServerProtectionPolicy: GameServerProtectionPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.',
        }),
    ).exactOptional(),
    VpcSubnets: VpcSubnetsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of virtual private cloud (VPC) subnets to use with instances in the game server group. By default, all Amazon GameLift FleetIQ-supported Availability Zones are used. You can use this parameter to specify VPCs that you've set up. This property cannot be updated after the game server group is created, and the corresponding Auto Scaling group will always use the property value that is set with this request, even if the Auto Scaling group is updated directly.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new game server group resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management, and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'GameServerGroupName',
      'RoleArn',
      'MinSize',
      'MaxSize',
      'LaunchTemplate',
      'InstanceDefinitions',
    ],
    title: 'CreateGameServerGroupInput',
  })
  .openapi('CreateGameServerGroupInput')

const GameSessionStatusSchema = z
  .enum(['ACTIVE', 'ACTIVATING', 'TERMINATED', 'TERMINATING', 'ERROR'])
  .openapi('GameSessionStatus')

const GameSessionStatusReasonSchema = z.literal('INTERRUPTED').openapi('GameSessionStatusReason')

const GamePropertyKeySchema = z.string().max(32).openapi('GamePropertyKey')

const GamePropertyValueSchema = z.string().max(96).openapi('GamePropertyValue')

const GamePropertySchema = z
  .object({
    Key: GamePropertyKeySchema.and(
      z.any().openapi({ description: 'The game property identifier.' }),
    ),
    Value: GamePropertyValueSchema.and(
      z.any().openapi({ description: 'The game property value.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session. For example, a game property might specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>.',
  })
  .openapi('GameProperty')

const GamePropertyListSchema = z.array(GamePropertySchema).max(16).openapi('GamePropertyList')

const IpAddressSchema = z
  .string()
  .regex(/^[0-9A-Fa-f\:\.]+/)
  .min(1)
  .max(128)
  .openapi('IpAddress')

const DnsNameSchema = z.string().openapi('DnsName')

const PlayerSessionCreationPolicySchema = z
  .enum(['ACCEPT_ALL', 'DENY_ALL'])
  .openapi('PlayerSessionCreationPolicy')

const LargeGameSessionDataSchema = z.string().min(1).max(262144).openapi('LargeGameSessionData')

const MatchmakerDataSchema = z.string().min(1).max(390000).openapi('MatchmakerData')

const GameSessionSchema = z
  .object({
    GameSessionId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game session. A game session ARN has the following format: <code>arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;</code>.',
        }),
    ).exactOptional(),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a game session. Session names do not need to be unique.',
        }),
    ).exactOptional(),
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet that the game session is running on.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet that this game session is running on. ',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    TerminationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    CurrentPlayerSessionCount: WholeNumberSchema.and(
      z.any().openapi({ description: 'Number of players currently in the game session.' }),
    ).exactOptional(),
    MaximumPlayerSessionCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of players that can be connected simultaneously to the game session.',
        }),
    ).exactOptional(),
    Status: GameSessionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Current status of the game session. A game session must have an <code>ACTIVE</code> status to have player sessions.',
        }),
    ).exactOptional(),
    StatusReason: GameSessionStatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides additional information about game session status. <code>INTERRUPTED</code> indicates that the game session was hosted on a spot instance that was reclaimed, causing the active game session to be terminated.',
        }),
    ).exactOptional(),
    GameProperties: GamePropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).',
        }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.',
        }),
    ).exactOptional(),
    DnsName: DnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS identifier assigned to the instance that is running the game session. Values have the following format:</p> <ul> <li> <p>TLS-enabled fleets: <code>&lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com</code>.</p> </li> <li> <p>Non-TLS-enabled fleets: <code>ec2-&lt;unique identifier&gt;.compute.amazonaws.com</code>. (See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p> </li> </ul> <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>',
        }),
    ).exactOptional(),
    Port: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.',
        }),
    ).exactOptional(),
    PlayerSessionCreationPolicy: PlayerSessionCreationPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether or not the game session is accepting new players.',
        }),
    ).exactOptional(),
    CreatorId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists), that limits the number of game sessions a player can create.',
        }),
    ).exactOptional(),
    GameSessionData: LargeGameSessionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).',
        }),
    ).exactOptional(),
    MatchmakerData: MatchmakerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the matchmaking process that was used to create the game session. It is in JSON syntax, formatted as a string. In addition the matchmaking configuration used, it contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">Match Data</a>. Matchmaker data is useful when requesting match backfills, and is updated whenever new players are added during a successful backfill (see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html">StartMatchBackfill</a>). ',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            "The fleet location where the game session is running. This value might specify the fleet's home Region or a remote location. Location is expressed as an Amazon Web Services Region code such as <code>us-west-2</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
    required: [],
  })
  .openapi('GameSession')

const CreateGameSessionOutputSchema = z
  .object({
    GameSession: GameSessionSchema.and(
      z
        .any()
        .openapi({ description: 'Object that describes the newly created game session record.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGameSessionOutput')

const AliasIdOrArnSchema = z
  .string()
  .regex(/^alias-\S+|^arn:.*:alias\/alias-\S+/)
  .openapi('AliasIdOrArn')

const IdStringModelSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]+/)
  .min(1)
  .max(48)
  .openapi('IdStringModel')

const CreateGameSessionInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to create a game session in. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.',
        }),
    ).exactOptional(),
    AliasId: AliasIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the alias associated with the fleet to create a game session in. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.',
        }),
    ).exactOptional(),
    MaximumPlayerSessionCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of players that can be connected simultaneously to the game session.',
        }),
    ),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a game session. Session names do not need to be unique.',
        }),
    ).exactOptional(),
    GameProperties: GamePropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).',
        }),
    ).exactOptional(),
    CreatorId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique identifier for a player or entity creating the game session. </p> <p>If you add a resource creation limit policy to a fleet, the <code>CreateGameSession</code> operation requires a <code>CreatorId</code>. Amazon GameLift limits the number of game session creation requests with the same <code>CreatorId</code> in a specified time period.</p> <p>If you your fleet doesn't have a resource creation limit policy and you provide a <code>CreatorId</code> in your <code>CreateGameSession</code> requests, Amazon GameLift limits requests to one request per <code>CreatorId</code> per second.</p> <p>To not limit <code>CreateGameSession</code> requests with the same <code>CreatorId</code>, don't provide a <code>CreatorId</code> in your <code>CreateGameSession</code> request.</p>",
        }),
    ).exactOptional(),
    GameSessionId: IdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> <i>This parameter is deprecated. Use <code>IdempotencyToken</code> instead.</i> </p> <p>Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID.</p>",
        }),
    ).exactOptional(),
    IdempotencyToken: IdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            "Custom string that uniquely identifies the new game session request. This is useful for ensuring that game session requests with the same idempotency token are processed only once. Subsequent requests with the same string return the original <code>GameSession</code> object, with an updated status. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. A game session ARN has the following format: <code>arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;</code>. Idempotency tokens remain in use for 30 days after a game session has ended; game session objects are retained for this time period and then deleted.",
        }),
    ).exactOptional(),
    GameSessionData: LargeGameSessionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            "A fleet's remote location to place the new game session in. If this parameter is not set, the new game session is placed in the fleet's home Region. Specify a remote location with an Amazon Web Services Region code such as <code>us-west-2</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MaximumPlayerSessionCount'], title: 'CreateGameSessionInput' })
  .openapi('CreateGameSessionInput')

const TerminalRoutingStrategyExceptionSchema = z.any().openapi('TerminalRoutingStrategyException')

const FleetCapacityExceededExceptionSchema = z.any().openapi('FleetCapacityExceededException')

const IdempotentParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotentParameterMismatchException')

const GameSessionQueueNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]+/)
  .min(1)
  .max(128)
  .openapi('GameSessionQueueName')

const GameSessionQueueArnSchema = z
  .string()
  .regex(/^arn:.*:gamesessionqueue\/[a-zA-Z0-9-]+/)
  .min(1)
  .max(256)
  .openapi('GameSessionQueueArn')

const PlayerLatencyPolicySchema = z
  .object({
    MaximumIndividualPlayerLatencyMilliseconds: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.',
        }),
    ).exactOptional(),
    PolicyDurationSeconds: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time, in seconds, that the policy is enforced while placing a new game session. A null value for this property means that the policy is enforced until the queue times out.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement request that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time. ',
    required: [],
  })
  .openapi('PlayerLatencyPolicy')

const PlayerLatencyPolicyListSchema = z
  .array(PlayerLatencyPolicySchema)
  .openapi('PlayerLatencyPolicyList')

const ArnStringModelSchema = z
  .string()
  .regex(/[a-zA-Z0-9:\/-]+/)
  .min(1)
  .max(256)
  .openapi('ArnStringModel')

const GameSessionQueueDestinationSchema = z
  .object({
    DestinationArn: ArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is assigned to fleet or fleet alias. ARNs, which include a fleet ID or alias ID and a Region name, provide a unique identifier across all Regions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations. ",
    required: [],
  })
  .openapi('GameSessionQueueDestination')

const GameSessionQueueDestinationListSchema = z
  .array(GameSessionQueueDestinationSchema)
  .openapi('GameSessionQueueDestinationList')

const LocationListSchema = z
  .array(LocationStringModelSchema)
  .min(1)
  .max(100)
  .openapi('LocationList')

const FilterConfigurationSchema = z
  .object({
    AllowedLocations: LocationListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of locations to allow game session placement in, in the form of Amazon Web Services Region codes such as <code>us-west-2</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of fleet locations where a game session queue can place new game sessions. You can use a filter to temporarily turn off placements for specific locations. For queues that have multi-location fleets, you can use a filter configuration allow placement with some, but not all of these locations.',
    required: [],
  })
  .openapi('FilterConfiguration')

const PriorityTypeSchema = z
  .enum(['LATENCY', 'COST', 'DESTINATION', 'LOCATION'])
  .openapi('PriorityType')

const PriorityTypeListSchema = z.array(PriorityTypeSchema).min(1).max(4).openapi('PriorityTypeList')

const PriorityConfigurationSchema = z
  .object({
    PriorityOrder: PriorityTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The recommended sequence to use when prioritizing where to place new game sessions. Each type can only be listed once.</p> <ul> <li> <p> <code>LATENCY</code> -- FleetIQ prioritizes locations where the average player latency (provided in each game session request) is lowest. </p> </li> <li> <p> <code>COST</code> -- FleetIQ prioritizes destinations with the lowest current hosting costs. Cost is evaluated based on the location, instance type, and fleet type (Spot or On-Demand) for each destination in the queue.</p> </li> <li> <p> <code>DESTINATION</code> -- FleetIQ prioritizes based on the order that destinations are listed in the queue configuration.</p> </li> <li> <p> <code>LOCATION</code> -- FleetIQ prioritizes based on the provided order of locations, as defined in <code>LocationOrder</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    LocationOrder: LocationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prioritization order to use for fleet locations, when the <code>PriorityOrder</code> property includes <code>LOCATION</code>. Locations are identified by Amazon Web Services Region codes such as <code>us-west-2</code>. Each location can only be listed once. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Custom prioritization settings for use by a game session queue when placing new game sessions with available game servers. When defined, this configuration replaces the default FleetIQ prioritization process, which is as follows:</p> <ul> <li> <p>If player latency data is included in a game session request, destinations and locations are prioritized first based on lowest average latency (1), then on lowest hosting cost (2), then on destination list order (3), and finally on location (alphabetical) (4). This approach ensures that the queue's top priority is to place game sessions where average player latency is lowest, and--if latency is the same--where the hosting cost is less, etc.</p> </li> <li> <p>If player latency data is not included, destinations and locations are prioritized first on destination list order (1), and then on location (alphabetical) (2). This approach ensures that the queue's top priority is to place game sessions on the first destination fleet listed. If that fleet has multiple locations, the game session is placed on the first location (when listed alphabetically).</p> </li> </ul> <p>Changing the priority order will affect how game sessions are placed.</p>",
    required: [],
  })
  .openapi('PriorityConfiguration')

const QueueCustomEventDataSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(256)
  .openapi('QueueCustomEventData')

const QueueSnsArnStringModelSchema = z
  .string()
  .regex(/[a-zA-Z0-9:_-]*(\.fifo)?/)
  .min(0)
  .max(300)
  .openapi('QueueSnsArnStringModel')

const GameSessionQueueSchema = z
  .object({
    Name: GameSessionQueueNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with game session queue. Queue names must be unique within each Region.',
        }),
    ).exactOptional(),
    GameSessionQueueArn: GameSessionQueueArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::gamesessionqueue/&lt;queue name&gt;</code>. In a Amazon GameLift game session queue ARN, the resource ID matches the <i>Name</i> value.',
        }),
    ).exactOptional(),
    TimeoutInSeconds: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.',
        }),
    ).exactOptional(),
    PlayerLatencyPolicies: PlayerLatencyPolicyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of policies that act as a sliding cap on player latency. FleetIQ works to deliver low latency for most players in a game session. These policies ensure that no individual player can be placed into a game with unreasonably high latency. Use multiple policies to gradually relax latency requirements a step at a time. Multiple policies are applied based on their maximum allowed latency, starting with the lowest value. ',
        }),
    ).exactOptional(),
    Destinations: GameSessionQueueDestinationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.',
        }),
    ).exactOptional(),
    FilterConfiguration: FilterConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is not set, game sessions can be placed in any queue location. ',
        }),
    ).exactOptional(),
    PriorityConfiguration: PriorityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process. ',
        }),
    ).exactOptional(),
    CustomEventData: QueueCustomEventDataSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information that is added to all events that are related to this game session queue.',
        }),
    ).exactOptional(),
    NotificationTarget: QueueSnsArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'An SNS topic ARN that is set up to receive game session placement notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up notifications for game session placement</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.',
    required: [],
  })
  .openapi('GameSessionQueue')

const CreateGameSessionQueueOutputSchema = z
  .object({
    GameSessionQueue: GameSessionQueueSchema.and(
      z
        .any()
        .openapi({ description: 'An object that describes the newly created game session queue.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGameSessionQueueOutput')

const CreateGameSessionQueueInputSchema = z
  .object({
    Name: GameSessionQueueNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with game session queue. Queue names must be unique within each Region.',
        }),
    ),
    TimeoutInSeconds: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.',
        }),
    ).exactOptional(),
    PlayerLatencyPolicies: PlayerLatencyPolicyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of policies that act as a sliding cap on player latency. FleetIQ works to deliver low latency for most players in a game session. These policies ensure that no individual player can be placed into a game with unreasonably high latency. Use multiple policies to gradually relax latency requirements a step at a time. Multiple policies are applied based on their maximum allowed latency, starting with the lowest value.',
        }),
    ).exactOptional(),
    Destinations: GameSessionQueueDestinationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.',
        }),
    ).exactOptional(),
    FilterConfiguration: FilterConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is not set, game sessions can be placed in any queue location. ',
        }),
    ).exactOptional(),
    PriorityConfiguration: PriorityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process. ',
        }),
    ).exactOptional(),
    CustomEventData: QueueCustomEventDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to be added to all events that are related to this game session queue.',
        }),
    ).exactOptional(),
    NotificationTarget: QueueSnsArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'An SNS topic ARN that is set up to receive game session placement notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up notifications for game session placement</a>.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new game session queue resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateGameSessionQueueInput' })
  .openapi('CreateGameSessionQueueInput')

const LocationArnModelSchema = z
  .string()
  .regex(/^arn:.*:location\/custom-\S+/)
  .min(1)
  .max(128)
  .openapi('LocationArnModel')

const LocationModelSchema = z
  .object({
    LocationName: LocationStringModelSchema.and(
      z.any().openapi({ description: "The location's name." }),
    ).exactOptional(),
    LocationArn: LocationArnModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift location resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::location/location-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Properties of a location', required: [] })
  .openapi('LocationModel')

const CreateLocationOutputSchema = z
  .object({
    Location: LocationModelSchema.and(
      z.any().openapi({ description: 'The details of the custom location you created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLocationOutput')

const CustomInputLocationStringModelSchema = z
  .string()
  .regex(/^custom-[A-Za-z0-9\-]+/)
  .min(8)
  .max(64)
  .openapi('CustomInputLocationStringModel')

const CreateLocationInputSchema = z
  .object({
    LocationName: CustomInputLocationStringModelSchema.and(
      z.any().openapi({ description: 'A descriptive name for the custom location.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new matchmaking configuration resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Rareference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LocationName'], title: 'CreateLocationInput' })
  .openapi('CreateLocationInput')

const MatchmakingConfigurationArnSchema = z
  .string()
  .regex(/^arn:.*:matchmakingconfiguration\/[a-zA-Z0-9-\.]*/)
  .openapi({ description: 'Data type used for Matchmaking Configuration ARN.' })
  .openapi('MatchmakingConfigurationArn')

const QueueArnsListSchema = z.array(ArnStringModelSchema).openapi('QueueArnsList')

const MatchmakingRequestTimeoutIntegerSchema = z
  .int()
  .min(1)
  .max(43200)
  .openapi('MatchmakingRequestTimeoutInteger')

const MatchmakingAcceptanceTimeoutIntegerSchema = z
  .int()
  .min(1)
  .max(600)
  .openapi('MatchmakingAcceptanceTimeoutInteger')

const BooleanModelSchema = z.boolean().openapi('BooleanModel')

const MatchmakingRuleSetArnSchema = z
  .string()
  .regex(/^arn:.*:matchmakingruleset\/[a-zA-Z0-9-\.]*/)
  .openapi({ description: 'Data type used for Matchmaking RuleSet ARN.' })
  .openapi('MatchmakingRuleSetArn')

const SnsArnStringModelSchema = z
  .string()
  .regex(/[a-zA-Z0-9:_\/-]*(.fifo)?/)
  .min(0)
  .max(300)
  .openapi('SnsArnStringModel')

const CustomEventDataSchema = z.string().min(0).max(256).openapi('CustomEventData')

const GameSessionDataSchema = z.string().min(1).max(4096).openapi('GameSessionData')

const BackfillModeSchema = z.enum(['AUTOMATIC', 'MANUAL']).openapi('BackfillMode')

const FlexMatchModeSchema = z.enum(['STANDALONE', 'WITH_QUEUE']).openapi('FlexMatchMode')

const MatchmakingConfigurationSchema = z
  .object({
    Name: MatchmakingIdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.',
        }),
    ).exactOptional(),
    ConfigurationArn: MatchmakingConfigurationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift matchmaking configuration resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::matchmakingconfiguration/&lt;matchmaking configuration name&gt;</code>. In a Amazon GameLift configuration ARN, the resource ID matches the <i>Name</i> value.',
        }),
    ).exactOptional(),
    Description: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A descriptive label that is associated with matchmaking configuration.',
        }),
    ).exactOptional(),
    GameSessionQueueArns: QueueArnsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::gamesessionqueue/&lt;queue name&gt;</code>. Queues can be located in any Region. Queues are used to start new Amazon GameLift-hosted game sessions for matches that are created with this matchmaking configuration. This property is not set when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    RequestTimeoutSeconds: MatchmakingRequestTimeoutIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.',
        }),
    ).exactOptional(),
    AcceptanceTimeoutSeconds: MatchmakingAcceptanceTimeoutIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.',
        }),
    ).exactOptional(),
    AcceptanceRequired: BooleanModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. When this option is enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate when a completed potential match is waiting for player acceptance.',
        }),
    ).exactOptional(),
    RuleSetName: MatchmakingIdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule sets that are defined in the same Region.',
        }),
    ).exactOptional(),
    RuleSetArn: MatchmakingRuleSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift matchmaking rule set resource that this configuration uses.',
        }),
    ).exactOptional(),
    NotificationTarget: SnsArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description: 'An SNS topic ARN that is set up to receive matchmaking notifications.',
        }),
    ).exactOptional(),
    AdditionalPlayerCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.",
        }),
    ).exactOptional(),
    CustomEventData: CustomEventDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to attach to all events related to the matchmaking configuration. ',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    GameProperties: GamePropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <code>GameSession</code> object that is created for a successful match. This parameter is not used when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    GameSessionData: GameSessionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <code>GameSession</code> object that is created for a successful match. This parameter is not used when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    BackfillMode: BackfillModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The method used to backfill game sessions created with this matchmaking configuration. MANUAL indicates that the game makes backfill requests or does not use the match backfill feature. AUTOMATIC indicates that GameLift creates backfill requests whenever a game session has one or more open slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">Backfill existing games with FlexMatch</a>. Automatic backfill is not available when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    FlexMatchMode: FlexMatchModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. </p> <ul> <li> <p> <b>STANDALONE</b> - FlexMatch forms matches and returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p> </li> <li> <p> <b>WITH_QUEUE</b> - FlexMatch forms matches and uses the specified Amazon GameLift queue to start a game session for the match. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.',
    required: [],
  })
  .openapi('MatchmakingConfiguration')

const CreateMatchmakingConfigurationOutputSchema = z
  .object({
    Configuration: MatchmakingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Object that describes the newly created matchmaking configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMatchmakingConfigurationOutput')

const MatchmakingRuleSetNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-\.]*|^arn:.*:matchmakingruleset\/[a-zA-Z0-9-\.]*/)
  .min(1)
  .max(256)
  .openapi('MatchmakingRuleSetName')

const CreateMatchmakingConfigurationInputSchema = z
  .object({
    Name: MatchmakingIdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.',
        }),
    ),
    Description: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A human-readable description of the matchmaking configuration. ',
        }),
    ).exactOptional(),
    GameSessionQueueArns: QueueArnsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::gamesessionqueue/&lt;queue name&gt;</code>. Queues can be located in any Region. Queues are used to start new Amazon GameLift-hosted game sessions for matches that are created with this matchmaking configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not set this parameter. ',
        }),
    ).exactOptional(),
    RequestTimeoutSeconds: MatchmakingRequestTimeoutIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.',
        }),
    ),
    AcceptanceTimeoutSeconds: MatchmakingAcceptanceTimeoutIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. ',
        }),
    ).exactOptional(),
    AcceptanceRequired: BooleanModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that determines whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to <code>TRUE</code>. With this option enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate when a completed potential match is waiting for player acceptance. ',
        }),
    ),
    RuleSetName: MatchmakingRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region.',
        }),
    ),
    NotificationTarget: SnsArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'An SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Setting up notifications for matchmaking</a> for more information.',
        }),
    ).exactOptional(),
    AdditionalPlayerCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.",
        }),
    ).exactOptional(),
    CustomEventData: CustomEventDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to be added to all events related to this matchmaking configuration. ',
        }),
    ).exactOptional(),
    GameProperties: GamePropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <code>GameSession</code> object that is created for a successful match. This parameter is not used if <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    GameSessionData: GameSessionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <code>GameSession</code> object that is created for a successful match. This parameter is not used if <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    BackfillMode: BackfillModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The method used to backfill game sessions that are created with this matchmaking configuration. Specify <code>MANUAL</code> when your game manages backfill requests manually or does not use the match backfill feature. Specify <code>AUTOMATIC</code> to have Amazon GameLift create a backfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill Existing Games with FlexMatch</a>. Automatic backfill is not available when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    FlexMatchMode: FlexMatchModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. </p> <ul> <li> <p> <b>STANDALONE</b> - FlexMatch forms matches and returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p> </li> <li> <p> <b>WITH_QUEUE</b> - FlexMatch forms matches and uses the specified Amazon GameLift queue to start a game session for the match. </p> </li> </ul>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new matchmaking configuration resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'RequestTimeoutSeconds', 'AcceptanceRequired', 'RuleSetName'],
    title: 'CreateMatchmakingConfigurationInput',
  })
  .openapi('CreateMatchmakingConfigurationInput')

const RuleSetBodySchema = z.string().min(1).max(65535).openapi('RuleSetBody')

const MatchmakingRuleSetSchema = z
  .object({
    RuleSetName: MatchmakingIdStringModelSchema.and(
      z.any().openapi({ description: 'A unique identifier for the matchmaking rule set' }),
    ).exactOptional(),
    RuleSetArn: MatchmakingRuleSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift matchmaking rule set resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::matchmakingruleset/&lt;ruleset name&gt;</code>. In a GameLift rule set ARN, the resource ID matches the <i>RuleSetName</i> value.',
        }),
    ).exactOptional(),
    RuleSetBody: RuleSetBodySchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.',
        }),
    ),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RuleSetBody'],
    description:
      '<p>Set of rule statements, used with FlexMatch, that determine how to build your player matches. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a FlexMatch rule set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player\'s skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul>',
  })
  .openapi('MatchmakingRuleSet')

const CreateMatchmakingRuleSetOutputSchema = z
  .object({
    RuleSet: MatchmakingRuleSetSchema.and(
      z.any().openapi({ description: 'The newly created matchmaking rule set.' }),
    ),
  })
  .openapi({ required: ['RuleSet'] })
  .openapi('CreateMatchmakingRuleSetOutput')

const CreateMatchmakingRuleSetInputSchema = z
  .object({
    Name: MatchmakingIdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name value. Note that the rule set name is different from the optional <code>name</code> field in the rule set body.',
        }),
    ),
    RuleSetBody: RuleSetBodySchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new matchmaking rule set resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'RuleSetBody'], title: 'CreateMatchmakingRuleSetInput' })
  .openapi('CreateMatchmakingRuleSetInput')

const PlayerSessionIdSchema = z
  .string()
  .regex(/^psess-\S+/)
  .openapi('PlayerSessionId')

const PlayerSessionStatusSchema = z
  .enum(['RESERVED', 'ACTIVE', 'COMPLETED', 'TIMEDOUT'])
  .openapi('PlayerSessionStatus')

const PlayerDataSchema = z.string().min(1).max(2048).openapi('PlayerData')

const PlayerSessionSchema = z
  .object({
    PlayerSessionId: PlayerSessionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for a player session.' }),
    ).exactOptional(),
    PlayerId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a player that is associated with this player session.',
        }),
    ).exactOptional(),
    GameSessionId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game session that the player session is connected to.',
        }),
    ).exactOptional(),
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the fleet that the player's game session is running on.",
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet that the player\'s game session is running on. ',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    TerminationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    Status: PlayerSessionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Current status of the player session.</p> <p>Possible player session statuses include the following:</p> <ul> <li> <p> <b>RESERVED</b> -- The player session request has been received, but the player has not yet connected to the server process and/or been validated. </p> </li> <li> <p> <b>ACTIVE</b> -- The player has been validated by the server process and is currently connected.</p> </li> <li> <p> <b>COMPLETED</b> -- The player connection has been dropped.</p> </li> <li> <p> <b>TIMEDOUT</b> -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).</p> </li> </ul>',
        }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.',
        }),
    ).exactOptional(),
    DnsName: DnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS identifier assigned to the instance that is running the game session. Values have the following format:</p> <ul> <li> <p>TLS-enabled fleets: <code>&lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com</code>.</p> </li> <li> <p>Non-TLS-enabled fleets: <code>ec2-&lt;unique identifier&gt;.compute.amazonaws.com</code>. (See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p> </li> </ul> <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>',
        }),
    ).exactOptional(),
    Port: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Port number for the game session. To connect to a Amazon GameLift server process, an app needs both the IP address and port number.',
        }),
    ).exactOptional(),
    PlayerData: PlayerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represents a reserved player slot in a game session (when status is <code>RESERVED</code>) or actual player activity in a game session (when status is <code>ACTIVE</code>). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player sessions information is retained for 30 days and then removed.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
    required: [],
  })
  .openapi('PlayerSession')

const CreatePlayerSessionOutputSchema = z
  .object({
    PlayerSession: PlayerSessionSchema.and(
      z
        .any()
        .openapi({ description: 'Object that describes the newly created player session record.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePlayerSessionOutput')

const CreatePlayerSessionInputSchema = z
  .object({
    GameSessionId: ArnStringModelSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the game session to add a player to.' }),
    ),
    PlayerId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for a player. Player IDs are developer-defined.',
        }),
    ),
    PlayerData: PlayerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameSessionId', 'PlayerId'], title: 'CreatePlayerSessionInput' })
  .openapi('CreatePlayerSessionInput')

const InvalidGameSessionStatusExceptionSchema = z.any().openapi('InvalidGameSessionStatusException')

const GameSessionFullExceptionSchema = z.any().openapi('GameSessionFullException')

const PlayerSessionListSchema = z.array(PlayerSessionSchema).openapi('PlayerSessionList')

const CreatePlayerSessionsOutputSchema = z
  .object({
    PlayerSessions: PlayerSessionListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of player session objects created for the added players.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePlayerSessionsOutput')

const PlayerIdListSchema = z.array(NonZeroAndMaxStringSchema).min(1).max(25).openapi('PlayerIdList')

const PlayerDataMapSchema = z.record(z.string(), PlayerDataSchema).openapi('PlayerDataMap')

const CreatePlayerSessionsInputSchema = z
  .object({
    GameSessionId: ArnStringModelSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the game session to add players to.' }),
    ),
    PlayerIds: PlayerIdListSchema.and(
      z.any().openapi({ description: 'List of unique identifiers for the players to be added.' }),
    ),
    PlayerDataMap: PlayerDataMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of string pairs, each specifying a player ID and a set of developer-defined information related to the player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. Any player data strings for player IDs that are not included in the <code>PlayerIds</code> parameter are ignored. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameSessionId', 'PlayerIds'], title: 'CreatePlayerSessionsInput' })
  .openapi('CreatePlayerSessionsInput')

const ScriptSchema = z
  .object({
    ScriptId: ScriptIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the Realtime script' }),
    ).exactOptional(),
    ScriptArn: ScriptArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the <i>ScriptId</i> value.',
        }),
    ).exactOptional(),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A descriptive label that is associated with a script. Script names don't need to be unique.",
        }),
    ).exactOptional(),
    Version: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Version information associated with a build or script. Version strings don't need to be unique.",
        }),
    ).exactOptional(),
    SizeOnDisk: PositiveLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at "0".',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    StorageLocation: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier version. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
    required: [],
  })
  .openapi('Script')

const CreateScriptOutputSchema = z
  .object({
    Script: ScriptSchema.and(
      z
        .any()
        .openapi({
          description:
            "The newly created script record with a unique script ID and ARN. The new script's storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket under your account, the storage location reflects the information that was provided in the <i>CreateScript</i> request; (2) If the script file was uploaded from a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift service.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateScriptOutput')

const ZipBlobSchema = z.string().max(5000000).openapi('ZipBlob')

const CreateScriptInputSchema = z
  .object({
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a script. Script names don\'t need to be unique. You can use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html">UpdateScript</a> to change this value later. ',
        }),
    ).exactOptional(),
    Version: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version information associated with a build or script. Version strings don\'t need to be unique. You can use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html">UpdateScript</a> to change this value later. ',
        }),
    ).exactOptional(),
    StorageLocation: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier version. ',
        }),
    ).exactOptional(),
    ZipFile: ZipBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A data object containing your Realtime scripts and dependencies as a zip file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB.</p> <p>When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the string "fileb://" to indicate that the file data is a binary object. For example: <code>--zip-file fileb://myRealtimeScript.zip</code>.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of labels to assign to the new script resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>. Once the resource is created, you can use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html">UntagResource</a>, and <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html">ListTagsForResource</a> to add, remove, and view tags. The maximum tag limit may be lower than stated. See the Amazon Web Services General Reference for actual tagging limits.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateScriptInput', required: [] })
  .openapi('CreateScriptInput')

const VpcPeeringAuthorizationSchema = z
  .object({
    GameLiftAwsAccountId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings.',
        }),
    ).exactOptional(),
    PeerVpcAwsAccountId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({ description: "The authorization's peer VPC Amazon Web Services account ID." }),
    ).exactOptional(),
    PeerVpcId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console. Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time stamp indicating when this authorization was issued. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    ExpirationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time stamp indicating when this authorization expires (24 hours after issuance). Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
    required: [],
  })
  .openapi('VpcPeeringAuthorization')

const CreateVpcPeeringAuthorizationOutputSchema = z
  .object({
    VpcPeeringAuthorization: VpcPeeringAuthorizationSchema.and(
      z
        .any()
        .openapi({
          description: 'Details on the requested VPC peering authorization, including expiration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVpcPeeringAuthorizationOutput')

const CreateVpcPeeringAuthorizationInputSchema = z
  .object({
    GameLiftAwsAccountId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings.',
        }),
    ),
    PeerVpcId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console. Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.',
        }),
    ),
  })
  .openapi({
    required: ['GameLiftAwsAccountId', 'PeerVpcId'],
    title: 'CreateVpcPeeringAuthorizationInput',
  })
  .openapi('CreateVpcPeeringAuthorizationInput')

const CreateVpcPeeringConnectionOutputSchema = z
  .object({})
  .openapi('CreateVpcPeeringConnectionOutput')

const CreateVpcPeeringConnectionInputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet. You can use either the fleet ID or ARN value. This tells Amazon GameLift which GameLift VPC to peer with. ',
        }),
    ),
    PeerVpcAwsAccountId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Amazon Web Services account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your Account ID in the Amazon Web Services Management Console under account settings.',
        }),
    ),
    PeerVpcId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console. Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.',
        }),
    ),
  })
  .openapi({
    required: ['FleetId', 'PeerVpcAwsAccountId', 'PeerVpcId'],
    title: 'CreateVpcPeeringConnectionInput',
  })
  .openapi('CreateVpcPeeringConnectionInput')

const DeleteAliasInputSchema = z
  .object({
    AliasId: AliasIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier of the alias that you want to delete. You can use either the alias ID or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['AliasId'], title: 'DeleteAliasInput' })
  .openapi('DeleteAliasInput')

const DeleteBuildInputSchema = z
  .object({
    BuildId: BuildIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the build to delete. You can use either the build ID or ARN value. ',
        }),
    ),
  })
  .openapi({ required: ['BuildId'], title: 'DeleteBuildInput' })
  .openapi('DeleteBuildInput')

const DeleteFleetInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['FleetId'], title: 'DeleteFleetInput' })
  .openapi('DeleteFleetInput')

const DeleteFleetLocationsOutputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet that location attributes are being deleted for.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    LocationStates: LocationStateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The remote locations that are being deleted, with each location status set to <code>DELETING</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFleetLocationsOutput')

const DeleteFleetLocationsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to delete locations for. You can use either the fleet ID or ARN value.',
        }),
    ),
    Locations: LocationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of fleet locations to delete. Specify locations in the form of an Amazon Web Services Region code, such as <code>us-west-2</code>.',
        }),
    ),
  })
  .openapi({ required: ['FleetId', 'Locations'], title: 'DeleteFleetLocationsInput' })
  .openapi('DeleteFleetLocationsInput')

const DeleteGameServerGroupOutputSchema = z
  .object({
    GameServerGroup: GameServerGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the deleted game server group resource, with status updated to <code>DELETE_SCHEDULED</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteGameServerGroupOutput')

const GameServerGroupDeleteOptionSchema = z
  .enum(['SAFE_DELETE', 'FORCE_DELETE', 'RETAIN'])
  .openapi('GameServerGroupDeleteOption')

const DeleteGameServerGroupInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group. Use either the name or ARN value.',
        }),
    ),
    DeleteOption: GameServerGroupDeleteOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of delete to perform. Options include the following:</p> <ul> <li> <p> <code>SAFE_DELETE</code> – (default) Terminates the game server group and Amazon EC2 Auto Scaling group only when it has no game servers that are in <code>UTILIZED</code> status.</p> </li> <li> <p> <code>FORCE_DELETE</code> – Terminates the game server group, including all active game servers regardless of their utilization status, and the Amazon EC2 Auto Scaling group. </p> </li> <li> <p> <code>RETAIN</code> – Does a safe delete of the game server group but retains the Amazon EC2 Auto Scaling group as is.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameServerGroupName'], title: 'DeleteGameServerGroupInput' })
  .openapi('DeleteGameServerGroupInput')

const DeleteGameSessionQueueOutputSchema = z.object({}).openapi('DeleteGameSessionQueueOutput')

const GameSessionQueueNameOrArnSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]+|^arn:.*:gamesessionqueue\/[a-zA-Z0-9-]+/)
  .min(1)
  .max(256)
  .openapi('GameSessionQueueNameOrArn')

const DeleteGameSessionQueueInputSchema = z
  .object({
    Name: GameSessionQueueNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. ',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteGameSessionQueueInput' })
  .openapi('DeleteGameSessionQueueInput')

const DeleteLocationOutputSchema = z.object({}).openapi('DeleteLocationOutput')

const CustomLocationNameOrArnModelSchema = z
  .string()
  .regex(/^custom-[A-Za-z0-9\-]+|^arn:.*:location\/custom-\S+/)
  .min(1)
  .max(128)
  .openapi('CustomLocationNameOrArnModel')

const DeleteLocationInputSchema = z
  .object({
    LocationName: CustomLocationNameOrArnModelSchema.and(
      z.any().openapi({ description: 'The location name of the custom location to be deleted.' }),
    ),
  })
  .openapi({ required: ['LocationName'], title: 'DeleteLocationInput' })
  .openapi('DeleteLocationInput')

const DeleteMatchmakingConfigurationOutputSchema = z
  .object({})
  .openapi('DeleteMatchmakingConfigurationOutput')

const MatchmakingConfigurationNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-\.]*|^arn:.*:matchmakingconfiguration\/[a-zA-Z0-9-\.]*/)
  .min(1)
  .max(256)
  .openapi('MatchmakingConfigurationName')

const DeleteMatchmakingConfigurationInputSchema = z
  .object({
    Name: MatchmakingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking configuration. You can use either the configuration name or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteMatchmakingConfigurationInput' })
  .openapi('DeleteMatchmakingConfigurationInput')

const DeleteMatchmakingRuleSetOutputSchema = z.object({}).openapi('DeleteMatchmakingRuleSetOutput')

const DeleteMatchmakingRuleSetInputSchema = z
  .object({
    Name: MatchmakingRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking rule set to be deleted. (Note: The rule set name is different from the optional "name" field in the rule set body.) You can use either the rule set name or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteMatchmakingRuleSetInput' })
  .openapi('DeleteMatchmakingRuleSetInput')

const DeleteScalingPolicyInputSchema = z
  .object({
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.",
        }),
    ),
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'FleetId'], title: 'DeleteScalingPolicyInput' })
  .openapi('DeleteScalingPolicyInput')

const DeleteScriptInputSchema = z
  .object({
    ScriptId: ScriptIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Realtime script to delete. You can use either the script ID or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['ScriptId'], title: 'DeleteScriptInput' })
  .openapi('DeleteScriptInput')

const DeleteVpcPeeringAuthorizationOutputSchema = z
  .object({})
  .openapi('DeleteVpcPeeringAuthorizationOutput')

const DeleteVpcPeeringAuthorizationInputSchema = z
  .object({
    GameLiftAwsAccountId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings.',
        }),
    ),
    PeerVpcId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console. Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.',
        }),
    ),
  })
  .openapi({
    required: ['GameLiftAwsAccountId', 'PeerVpcId'],
    title: 'DeleteVpcPeeringAuthorizationInput',
  })
  .openapi('DeleteVpcPeeringAuthorizationInput')

const DeleteVpcPeeringConnectionOutputSchema = z
  .object({})
  .openapi('DeleteVpcPeeringConnectionOutput')

const DeleteVpcPeeringConnectionInputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet. This fleet specified must match the fleet referenced in the VPC peering connection record. You can use either the fleet ID or ARN value.',
        }),
    ),
    VpcPeeringConnectionId: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A unique identifier for a VPC peering connection.' }),
    ),
  })
  .openapi({
    required: ['FleetId', 'VpcPeeringConnectionId'],
    title: 'DeleteVpcPeeringConnectionInput',
  })
  .openapi('DeleteVpcPeeringConnectionInput')

const DeregisterComputeOutputSchema = z.object({}).openapi('DeregisterComputeOutput')

const ComputeNameOrArnSchema = z
  .string()
  .regex(/[a-zA-Z0-9\-]+|^arn:.*:compute\/[a-zA-Z0-9\-]+/)
  .max(1024)
  .openapi('ComputeNameOrArn')

const DeregisterComputeInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '&gt;A unique identifier for the fleet the compute resource is registered to.',
        }),
    ),
    ComputeName: ComputeNameOrArnSchema.and(
      z.any().openapi({ description: 'The name of the compute resource you want to delete.' }),
    ),
  })
  .openapi({ required: ['FleetId', 'ComputeName'], title: 'DeregisterComputeInput' })
  .openapi('DeregisterComputeInput')

const DeregisterGameServerInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group where the game server is running.',
        }),
    ),
    GameServerId: GameServerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A custom string that uniquely identifies the game server to deregister.',
        }),
    ),
  })
  .openapi({
    required: ['GameServerGroupName', 'GameServerId'],
    title: 'DeregisterGameServerInput',
  })
  .openapi('DeregisterGameServerInput')

const DescribeAliasOutputSchema = z
  .object({
    Alias: AliasSchema.and(
      z.any().openapi({ description: 'The requested alias resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAliasOutput')

const DescribeAliasInputSchema = z
  .object({
    AliasId: AliasIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the fleet alias that you want to retrieve. You can use either the alias ID or ARN value. ',
        }),
    ),
  })
  .openapi({ required: ['AliasId'], title: 'DescribeAliasInput' })
  .openapi('DescribeAliasInput')

const DescribeBuildOutputSchema = z
  .object({
    Build: BuildSchema.and(
      z.any().openapi({ description: 'Set of properties describing the requested build.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBuildOutput')

const DescribeBuildInputSchema = z
  .object({
    BuildId: BuildIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the build to retrieve properties for. You can use either the build ID or ARN value. ',
        }),
    ),
  })
  .openapi({ required: ['BuildId'], title: 'DescribeBuildInput' })
  .openapi('DescribeBuildInput')

const ComputeNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-]+/)
  .min(1)
  .max(128)
  .openapi('ComputeName')

const ComputeArnSchema = z
  .string()
  .regex(/^arn:.*:compute\/[a-zA-Z0-9\-]+/)
  .max(1024)
  .openapi('ComputeArn')

const ComputeStatusSchema = z.enum(['PENDING', 'ACTIVE', 'TERMINATING']).openapi('ComputeStatus')

const GameLiftServiceSdkEndpointOutputSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi('GameLiftServiceSdkEndpointOutput')

const ComputeSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet that the compute is registered to.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the fleet that the compute is registered to.',
        }),
    ).exactOptional(),
    ComputeName: ComputeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with the compute resource registered to your fleet.',
        }),
    ).exactOptional(),
    ComputeArn: ComputeArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN that is assigned to the compute resource and uniquely identifies it. ARNs are unique across locations.',
        }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the compute resource. Amazon GameLift requires the DNS name or IP address to manage your compute resource.',
        }),
    ).exactOptional(),
    DnsName: DnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS name of the compute resource. Amazon GameLift requires the DNS name or IP address to manage your compute resource.',
        }),
    ).exactOptional(),
    ComputeStatus: ComputeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Current status of the compute. A compute must have an <code>ACTIVE</code> status to host game sessions.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom location you added to the fleet that this compute resource resides in.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    OperatingSystem: OperatingSystemSchema.and(
      z.any().openapi({ description: 'The type of operating system on your compute resource.' }),
    ).exactOptional(),
    Type: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute type that the fleet uses. A fleet can use Anywhere compute resources that you own, or use managed Amazon EC2 instances.',
        }),
    ).exactOptional(),
    GameLiftServiceSdkEndpoint: GameLiftServiceSdkEndpointOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint connection details of the Amazon GameLift SDK endpoint that your game server connects to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Resources used to host your game servers. A compute resource can be managed Amazon GameLift Amazon EC2 instances or your own resources.',
    required: [],
  })
  .openapi('Compute')

const DescribeComputeOutputSchema = z
  .object({
    Compute: ComputeSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the compute resource you registered to the specified fleet.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeComputeOutput')

const DescribeComputeInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet the compute is registered to.',
        }),
    ),
    ComputeName: ComputeNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with the compute resource registered to your fleet.',
        }),
    ),
  })
  .openapi({ required: ['FleetId', 'ComputeName'], title: 'DescribeComputeInput' })
  .openapi('DescribeComputeInput')

const EC2InstanceLimitSchema = z
  .object({
    EC2InstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Amazon EC2 instance type. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a> for detailed descriptions. ',
        }),
    ).exactOptional(),
    CurrentInstances: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of instances for the specified type and location that are currently being used by the Amazon Web Services account. ',
        }),
    ).exactOptional(),
    InstanceLimit: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of instances that is allowed for the specified instance type and location.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description: 'An Amazon Web Services Region code, such as <code>us-west-2</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Amazon GameLift service limits for an Amazon EC2 instance type and current utilization. Amazon GameLift allows Amazon Web Services accounts a maximum number of instances, per instance type, per Amazon Web Services Region or location, for use with Amazon GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.',
    required: [],
  })
  .openapi('EC2InstanceLimit')

const EC2InstanceLimitListSchema = z.array(EC2InstanceLimitSchema).openapi('EC2InstanceLimitList')

const DescribeEC2InstanceLimitsOutputSchema = z
  .object({
    EC2InstanceLimits: EC2InstanceLimitListSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of instances for the specified instance type.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEC2InstanceLimitsOutput')

const DescribeEC2InstanceLimitsInputSchema = z
  .object({
    EC2InstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of an Amazon EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Do not specify a value for this parameter to retrieve limits for all instance types.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a remote location to request instance limits for, in the form of an Amazon Web Services Region code such as <code>us-west-2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEC2InstanceLimitsInput', required: [] })
  .openapi('DescribeEC2InstanceLimitsInput')

const FleetAttributesListSchema = z.array(FleetAttributesSchema).openapi('FleetAttributesList')

const DescribeFleetAttributesOutputSchema = z
  .object({
    FleetAttributes: FleetAttributesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects containing attribute metadata for each requested fleet ID. Attribute objects are returned only for fleets that currently exist.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetAttributesOutput')

const FleetIdOrArnListSchema = z.array(FleetIdOrArnSchema).min(1).openapi('FleetIdOrArnList')

const DescribeFleetAttributesInputSchema = z
  .object({
    FleetIds: FleetIdOrArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of unique fleet identifiers to retrieve attributes for. You can use either the fleet ID or ARN value. To retrieve attributes for all current fleets, do not include this parameter. ',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetAttributesInput', required: [] })
  .openapi('DescribeFleetAttributesInput')

const EC2InstanceCountsSchema = z
  .object({
    DESIRED: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Ideal number of active instances. GameLift will always try to maintain the desired number of instances. Capacity is scaled up or down by changing the desired instances. ',
        }),
    ).exactOptional(),
    MINIMUM: WholeNumberSchema.and(
      z.any().openapi({ description: 'The minimum instance count value allowed.' }),
    ).exactOptional(),
    MAXIMUM: WholeNumberSchema.and(
      z.any().openapi({ description: 'The maximum instance count value allowed.' }),
    ).exactOptional(),
    PENDING: WholeNumberSchema.and(
      z.any().openapi({ description: 'Number of instances that are starting but not yet active.' }),
    ).exactOptional(),
    ACTIVE: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'Actual number of instances that are ready to host game sessions.',
        }),
    ).exactOptional(),
    IDLE: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'Number of active instances that are not currently hosting a game session.',
        }),
    ).exactOptional(),
    TERMINATING: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            "Number of instances that are no longer active but haven't yet been terminated.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.',
    required: [],
  })
  .openapi('EC2InstanceCounts')

const FleetCapacitySchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet associated with the location.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    InstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 instance type that is used for all instances in a fleet. The instance type determines the computing resources in use, including CPU, memory, storage, and networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a> for detailed descriptions.',
        }),
    ).exactOptional(),
    InstanceCounts: EC2InstanceCountsSchema.exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet location for the instance count information, expressed as an Amazon Web Services Region code, such as <code>us-west-2</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet\'s remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a> </p>',
    required: [],
  })
  .openapi('FleetCapacity')

const FleetCapacityListSchema = z.array(FleetCapacitySchema).openapi('FleetCapacityList')

const DescribeFleetCapacityOutputSchema = z
  .object({
    FleetCapacity: FleetCapacityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects that contains capacity information for each requested fleet ID. Capacity objects are returned only for fleets that currently exist.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetCapacityOutput')

const DescribeFleetCapacityInputSchema = z
  .object({
    FleetIds: FleetIdOrArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to retrieve capacity information for. You can use either the fleet ID or ARN value. Leave this parameter empty to retrieve capacity information for all fleets.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetCapacityInput', required: [] })
  .openapi('DescribeFleetCapacityInput')

const EventCodeSchema = z
  .enum([
    'GENERIC_EVENT',
    'FLEET_CREATED',
    'FLEET_DELETED',
    'FLEET_SCALING_EVENT',
    'FLEET_STATE_DOWNLOADING',
    'FLEET_STATE_VALIDATING',
    'FLEET_STATE_BUILDING',
    'FLEET_STATE_ACTIVATING',
    'FLEET_STATE_ACTIVE',
    'FLEET_STATE_ERROR',
    'FLEET_INITIALIZATION_FAILED',
    'FLEET_BINARY_DOWNLOAD_FAILED',
    'FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND',
    'FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE',
    'FLEET_VALIDATION_TIMED_OUT',
    'FLEET_ACTIVATION_FAILED',
    'FLEET_ACTIVATION_FAILED_NO_INSTANCES',
    'FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED',
    'SERVER_PROCESS_INVALID_PATH',
    'SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT',
    'SERVER_PROCESS_PROCESS_READY_TIMEOUT',
    'SERVER_PROCESS_CRASHED',
    'SERVER_PROCESS_TERMINATED_UNHEALTHY',
    'SERVER_PROCESS_FORCE_TERMINATED',
    'SERVER_PROCESS_PROCESS_EXIT_TIMEOUT',
    'GAME_SESSION_ACTIVATION_TIMEOUT',
    'FLEET_CREATION_EXTRACTING_BUILD',
    'FLEET_CREATION_RUNNING_INSTALLER',
    'FLEET_CREATION_VALIDATING_RUNTIME_CONFIG',
    'FLEET_VPC_PEERING_SUCCEEDED',
    'FLEET_VPC_PEERING_FAILED',
    'FLEET_VPC_PEERING_DELETED',
    'INSTANCE_INTERRUPTED',
    'INSTANCE_RECYCLED',
  ])
  .openapi('EventCode')

const EventSchema = z
  .object({
    EventId: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A unique identifier for a fleet event.' }),
    ).exactOptional(),
    ResourceId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for an event resource, such as a fleet ID.' }),
    ).exactOptional(),
    EventCode: EventCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of event being logged. </p> <p> <b>Fleet state transition events:</b> </p> <ul> <li> <p>FLEET_CREATED -- A fleet resource was successfully created with a status of <code>NEW</code>. Event messaging includes the fleet ID.</p> </li> <li> <p>FLEET_STATE_DOWNLOADING -- Fleet status changed from <code>NEW</code> to <code>DOWNLOADING</code>. The compressed build has started downloading to a fleet instance for installation.</p> </li> <li> <p>FLEET_STATE_VALIDATING -- Fleet status changed from <code>DOWNLOADING</code> to <code>VALIDATING</code>. Amazon GameLift has successfully downloaded the build and is now validating the build files.</p> </li> <li> <p>FLEET_STATE_BUILDING -- Fleet status changed from <code>VALIDATING</code> to <code>BUILDING</code>. Amazon GameLift has successfully verified the build files and is now running the installation scripts.</p> </li> <li> <p>FLEET_STATE_ACTIVATING -- Fleet status changed from <code>BUILDING</code> to <code>ACTIVATING</code>. Amazon GameLift is trying to launch an instance and test the connectivity between the build and the Amazon GameLift Service via the Server SDK.</p> </li> <li> <p>FLEET_STATE_ACTIVE -- The fleet's status changed from <code>ACTIVATING</code> to <code>ACTIVE</code>. The fleet is now ready to host game sessions.</p> </li> <li> <p>FLEET_STATE_ERROR -- The Fleet's status changed to <code>ERROR</code>. Describe the fleet event message for more details.</p> </li> </ul> <p> <b>Fleet creation events (ordered by fleet creation activity):</b> </p> <ul> <li> <p>FLEET_BINARY_DOWNLOAD_FAILED -- The build failed to download to the fleet instance.</p> </li> <li> <p>FLEET_CREATION_EXTRACTING_BUILD -- The game server build was successfully downloaded to an instance, and the build files are now being extracted from the uploaded build and saved to an instance. Failure at this stage prevents a fleet from moving to ACTIVE status. Logs for this stage display a list of the files that are extracted and saved on the instance. Access the logs by using the URL in <i>PreSignedLogUrl</i>.</p> </li> <li> <p>FLEET_CREATION_RUNNING_INSTALLER -- The game server build files were successfully extracted, and the GameLift is now running the build's install script (if one is included). Failure in this stage prevents a fleet from moving to ACTIVE status. Logs for this stage list the installation steps and whether or not the install completed successfully. Access the logs by using the URL in <i>PreSignedLogUrl</i>.</p> </li> <li> <p>FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was successful, and the GameLift is now verifying that the game server launch paths, which are specified in the fleet's runtime configuration, exist. If any listed launch path exists, Amazon GameLift tries to launch a game server process and waits for the process to report ready. Failures in this stage prevent a fleet from moving to <code>ACTIVE</code> status. Logs for this stage list the launch paths in the runtime configuration and indicate whether each is found. Access the logs by using the URL in <i>PreSignedLogUrl</i>.</p> </li> <li> <p>FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the runtime configuration failed because the executable specified in a launch path does not exist on the instance.</p> </li> <li> <p>FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the runtime configuration failed because the executable specified in a launch path failed to run on the fleet instance.</p> </li> <li> <p>FLEET_VALIDATION_TIMED_OUT -- Validation of the fleet at the end of creation timed out. Try fleet creation again.</p> </li> <li> <p>FLEET_ACTIVATION_FAILED -- The fleet failed to successfully complete one of the steps in the fleet activation process. This event code indicates that the game build was successfully downloaded to a fleet instance, built, and validated, but was not able to start a server process. For more information, see <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation\">Debug Fleet Creation Issues</a>.</p> </li> <li> <p>FLEET_ACTIVATION_FAILED_NO_INSTANCES -- Fleet creation was not able to obtain any instances based on the input fleet attributes. Try again at a different time or choose a different combination of fleet attributes such as fleet type, instance type, etc.</p> </li> <li> <p>FLEET_INITIALIZATION_FAILED -- A generic exception occurred during fleet creation. Describe the fleet event message for more details.</p> </li> </ul> <p> <b>VPC peering events:</b> </p> <ul> <li> <p>FLEET_VPC_PEERING_SUCCEEDED -- A VPC peering connection has been established between the VPC for an Amazon GameLift fleet and a VPC in your Amazon Web Services account.</p> </li> <li> <p>FLEET_VPC_PEERING_FAILED -- A requested VPC peering connection has failed. Event details and status information provide additional detail. A common reason for peering failure is that the two VPCs have overlapping CIDR blocks of IPv4 addresses. To resolve this, change the CIDR block for the VPC in your Amazon Web Services account. For more information on VPC peering failures, see <a href=\"https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html\">https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html</a> </p> </li> <li> <p>FLEET_VPC_PEERING_DELETED -- A VPC peering connection has been successfully deleted.</p> </li> </ul> <p> <b>Spot instance events:</b> </p> <ul> <li> <p> INSTANCE_INTERRUPTED -- A spot instance was interrupted by EC2 with a two-minute notification.</p> </li> </ul> <p> <b>Server process events:</b> </p> <ul> <li> <p>SERVER_PROCESS_INVALID_PATH -- The game server executable or script could not be found based on the Fleet runtime configuration. Check that the launch path is correct based on the operating system of the Fleet.</p> </li> <li> <p>SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT -- The server process did not call InitSDK() within the time expected. Check your game session log to see why InitSDK() was not called in time.</p> </li> <li> <p>SERVER_PROCESS_PROCESS_READY_TIMEOUT -- The server process did not call ProcessReady() within the time expected after calling InitSDK(). Check your game session log to see why ProcessReady() was not called in time.</p> </li> <li> <p>SERVER_PROCESS_CRASHED -- The server process exited without calling ProcessEnding(). Check your game session log to see why ProcessEnding() was not called.</p> </li> <li> <p>SERVER_PROCESS_TERMINATED_UNHEALTHY -- The server process did not report a valid health check for too long and was therefore terminated by GameLift. Check your game session log to see if the thread became stuck processing a synchronous task for too long.</p> </li> <li> <p>SERVER_PROCESS_FORCE_TERMINATED -- The server process did not exit cleanly after OnProcessTerminate() was sent within the time expected. Check your game session log to see why termination took longer than expected.</p> </li> <li> <p>SERVER_PROCESS_PROCESS_EXIT_TIMEOUT -- The server process did not exit cleanly within the time expected after calling ProcessEnding(). Check your game session log to see why termination took longer than expected.</p> </li> </ul> <p> <b>Game session events:</b> </p> <ul> <li> <p>GAME_SESSION_ACTIVATION_TIMEOUT -- GameSession failed to activate within the expected time. Check your game session log to see why ActivateGameSession() took longer to complete than expected.</p> </li> </ul> <p> <b>Other fleet events:</b> </p> <ul> <li> <p>FLEET_SCALING_EVENT -- A change was made to the fleet's capacity settings (desired instances, minimum/maximum scaling limits). Event messaging includes the new capacity settings.</p> </li> <li> <p>FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED -- A change was made to the fleet's game session protection policy setting. Event messaging includes both the old and new policy setting. </p> </li> <li> <p>FLEET_DELETED -- A request to delete a fleet was initiated.</p> </li> <li> <p> GENERIC_EVENT -- An unspecified event has occurred.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Message: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'Additional information related to the event.' }),
    ).exactOptional(),
    EventTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    PreSignedLogUrl: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Location of stored logs with additional detail that is related to the event. This is useful for debugging issues. The URL is valid for 15 minutes. You can also access fleet creation logs through the Amazon GameLift console.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.',
    required: [],
  })
  .openapi('Event')

const EventListSchema = z.array(EventSchema).openapi('EventList')

const DescribeFleetEventsOutputSchema = z
  .object({
    Events: EventListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects containing event log entries for the specified fleet.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetEventsOutput')

const DescribeFleetEventsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to get event logs for. You can use either the fleet ID or ARN value.',
        }),
    ),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The earliest date to retrieve event logs for. If no start time is specified, this call returns entries starting from when the fleet was created to the specified end time. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The most recent date to retrieve event logs for. If no end time is specified, this call returns entries from the specified start time up to the present. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'DescribeFleetEventsInput' })
  .openapi('DescribeFleetEventsInput')

const LocationUpdateStatusSchema = z.literal('PENDING_UPDATE').openapi('LocationUpdateStatus')

const LocationAttributesSchema = z
  .object({
    LocationState: LocationStateSchema.and(
      z.any().openapi({ description: 'A fleet location and its current life-cycle state.' }),
    ).exactOptional(),
    StoppedActions: FleetActionListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of fleet actions that have been suspended in the fleet location.',
        }),
    ).exactOptional(),
    UpdateStatus: LocationUpdateStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of fleet activity updates to the location. The status <code>PENDING_UPDATE</code> indicates that <code>StopFleetActions</code> or <code>StartFleetActions</code> has been requested but the update has not yet been completed for the location.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about a location in a multi-location fleet.', required: [] })
  .openapi('LocationAttributes')

const LocationAttributesListSchema = z
  .array(LocationAttributesSchema)
  .openapi('LocationAttributesList')

const DescribeFleetLocationAttributesOutputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet that location attributes were requested for.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    LocationAttributes: LocationAttributesListSchema.and(
      z
        .any()
        .openapi({
          description: " Location-specific information on the requested fleet's remote locations.",
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetLocationAttributesOutput')

const DescribeFleetLocationAttributesInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to retrieve remote locations for. You can use either the fleet ID or ARN value.',
        }),
    ),
    Locations: LocationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of fleet locations to retrieve information for. Specify locations in the form of an Amazon Web Services Region code, such as <code>us-west-2</code>.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This limit is not currently enforced.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'DescribeFleetLocationAttributesInput' })
  .openapi('DescribeFleetLocationAttributesInput')

const DescribeFleetLocationCapacityOutputSchema = z
  .object({
    FleetCapacity: FleetCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Resource capacity information for the requested fleet location. Capacity objects are returned only for fleets and locations that currently exist.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetLocationCapacityOutput')

const DescribeFleetLocationCapacityInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to request location capacity for. You can use either the fleet ID or ARN value.',
        }),
    ),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet location to retrieve capacity information for. Specify a location in the form of an Amazon Web Services Region code, such as <code>us-west-2</code>.',
        }),
    ),
  })
  .openapi({ required: ['FleetId', 'Location'], title: 'DescribeFleetLocationCapacityInput' })
  .openapi('DescribeFleetLocationCapacityInput')

const FleetUtilizationSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet associated with the location.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    ActiveServerProcessCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of server processes in <code>ACTIVE</code> status that are currently running across all instances in the fleet location. ',
        }),
    ).exactOptional(),
    ActiveGameSessionCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of active game sessions that are currently being hosted across all instances in the fleet location.',
        }),
    ).exactOptional(),
    CurrentPlayerSessionCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of active player sessions that are currently being hosted across all instances in the fleet location.',
        }),
    ).exactOptional(),
    MaximumPlayerSessionCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of players allowed across all game sessions that are currently being hosted across all instances in the fleet location.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet location for the fleet utilization information, expressed as an Amazon Web Services Region code, such as <code>us-west-2</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p>",
    required: [],
  })
  .openapi('FleetUtilization')

const DescribeFleetLocationUtilizationOutputSchema = z
  .object({
    FleetUtilization: FleetUtilizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Utilization information for the requested fleet location. Utilization objects are returned only for fleets and locations that currently exist.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetLocationUtilizationOutput')

const DescribeFleetLocationUtilizationInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to request location utilization for. You can use either the fleet ID or ARN value.',
        }),
    ),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet location to retrieve utilization information for. Specify a location in the form of an Amazon Web Services Region code, such as <code>us-west-2</code>.',
        }),
    ),
  })
  .openapi({ required: ['FleetId', 'Location'], title: 'DescribeFleetLocationUtilizationInput' })
  .openapi('DescribeFleetLocationUtilizationInput')

const DescribeFleetPortSettingsOutputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the fleet that was requested. ' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    InboundPermissions: IpPermissionsListSchema.and(
      z.any().openapi({ description: 'The port settings for the requested fleet ID.' }),
    ).exactOptional(),
    UpdateStatus: LocationUpdateStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current status of updates to the fleet's port settings in the requested fleet location. A status of <code>PENDING_UPDATE</code> indicates that an update was requested for the fleet but has not yet been completed for the location.",
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The requested fleet location, expressed as an Amazon Web Services Region code, such as <code>us-west-2</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetPortSettingsOutput')

const DescribeFleetPortSettingsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to retrieve port settings for. You can use either the fleet ID or ARN value.',
        }),
    ),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A remote location to check for status of port setting updates. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'DescribeFleetPortSettingsInput' })
  .openapi('DescribeFleetPortSettingsInput')

const FleetUtilizationListSchema = z.array(FleetUtilizationSchema).openapi('FleetUtilizationList')

const DescribeFleetUtilizationOutputSchema = z
  .object({
    FleetUtilization: FleetUtilizationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects containing utilization information for each requested fleet ID. Utilization objects are returned only for fleets that currently exist.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetUtilizationOutput')

const DescribeFleetUtilizationInputSchema = z
  .object({
    FleetIds: FleetIdOrArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to retrieve utilization data for. You can use either the fleet ID or ARN value. To retrieve attributes for all current fleets, do not include this parameter. ',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetUtilizationInput', required: [] })
  .openapi('DescribeFleetUtilizationInput')

const DescribeGameServerOutputSchema = z
  .object({
    GameServer: GameServerSchema.and(
      z.any().openapi({ description: 'Object that describes the requested game server.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGameServerOutput')

const DescribeGameServerInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group where the game server is running.',
        }),
    ),
    GameServerId: GameServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom string that uniquely identifies the game server information to be retrieved.',
        }),
    ),
  })
  .openapi({ required: ['GameServerGroupName', 'GameServerId'], title: 'DescribeGameServerInput' })
  .openapi('DescribeGameServerInput')

const DescribeGameServerGroupOutputSchema = z
  .object({
    GameServerGroup: GameServerGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object with the property settings for the requested game server group resource. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGameServerGroupOutput')

const DescribeGameServerGroupInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group. Use either the name or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['GameServerGroupName'], title: 'DescribeGameServerGroupInput' })
  .openapi('DescribeGameServerGroupInput')

const GameServerInstanceStatusSchema = z
  .enum(['ACTIVE', 'DRAINING', 'SPOT_TERMINATING'])
  .openapi('GameServerInstanceStatus')

const GameServerInstanceSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A developer-defined identifier for the game server group that includes the game server instance. The name is unique for each Region in each Amazon Web Services account.',
        }),
    ).exactOptional(),
    GameServerGroupArn: GameServerGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A generated unique identifier for the game server group that includes the game server instance. ',
        }),
    ).exactOptional(),
    InstanceId: GameServerInstanceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: <code>i-1234567890abcdef0</code>.',
        }),
    ).exactOptional(),
    InstanceStatus: GameServerInstanceStatusSchema.and(
      z.any().openapi({ description: 'Current status of the game server instance' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p>',
    required: [],
  })
  .openapi('GameServerInstance')

const GameServerInstancesSchema = z.array(GameServerInstanceSchema).openapi('GameServerInstances')

const DescribeGameServerInstancesOutputSchema = z
  .object({
    GameServerInstances: GameServerInstancesSchema.and(
      z.any().openapi({ description: 'The collection of requested game server instances.' }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGameServerInstancesOutput')

const GameServerInstanceIdsSchema = z
  .array(GameServerInstanceIdSchema)
  .min(1)
  .max(20)
  .openapi('GameServerInstanceIds')

const DescribeGameServerInstancesInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group. Use either the name or ARN value.',
        }),
    ),
    InstanceIds: GameServerInstanceIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 instance IDs that you want to retrieve status on. Amazon EC2 instance IDs use a 17-character format, for example: <code>i-1234567890abcdef0</code>. To retrieve all instances in the game server group, leave this parameter empty. ',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameServerGroupName'], title: 'DescribeGameServerInstancesInput' })
  .openapi('DescribeGameServerInstancesInput')

const GameSessionDetailSchema = z
  .object({
    GameSession: GameSessionSchema.and(
      z.any().openapi({ description: 'Object that describes a game session.' }),
    ).exactOptional(),
    ProtectionPolicy: ProtectionPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Current status of protection for the game session.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "A game session's properties plus the protection policy currently in force.",
    required: [],
  })
  .openapi('GameSessionDetail')

const GameSessionDetailListSchema = z
  .array(GameSessionDetailSchema)
  .openapi('GameSessionDetailList')

const DescribeGameSessionDetailsOutputSchema = z
  .object({
    GameSessionDetails: GameSessionDetailListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of properties for each game session that matches the request.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGameSessionDetailsOutput')

const DescribeGameSessionDetailsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to retrieve all game sessions active on the fleet. You can use either the fleet ID or ARN value.',
        }),
    ).exactOptional(),
    GameSessionId: ArnStringModelSchema.and(
      z.any().openapi({ description: 'A unique identifier for the game session to retrieve. ' }),
    ).exactOptional(),
    AliasId: AliasIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the alias associated with the fleet to retrieve all game sessions for. You can use either the alias ID or ARN value.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            "A fleet location to get game session details for. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>. ",
        }),
    ).exactOptional(),
    StatusFilter: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Game session status to filter results on. Possible game session statuses include <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code> and <code>TERMINATING</code> (the last two are transitory). ',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeGameSessionDetailsInput', required: [] })
  .openapi('DescribeGameSessionDetailsInput')

const GameSessionPlacementStateSchema = z
  .enum(['PENDING', 'FULFILLED', 'CANCELLED', 'TIMED_OUT', 'FAILED'])
  .openapi('GameSessionPlacementState')

const FloatSchema = z.float32().openapi('Float')

const PlayerLatencySchema = z
  .object({
    PlayerId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for a player associated with the latency data.',
        }),
    ).exactOptional(),
    RegionIdentifier: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the Region that is associated with the latency value.' }),
    ).exactOptional(),
    LatencyInMilliseconds: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time that represents the time lag experienced by the player when connected to the specified Region.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Regional latency information for a player, used when requesting a new game session. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified Region. The relative difference between a player's latency values for multiple Regions are used to determine which fleets are best suited to place a new game session for the player. ",
    required: [],
  })
  .openapi('PlayerLatency')

const PlayerLatencyListSchema = z.array(PlayerLatencySchema).openapi('PlayerLatencyList')

const PlacedPlayerSessionSchema = z
  .object({
    PlayerId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a player that is associated with this player session.',
        }),
    ).exactOptional(),
    PlayerSessionId: PlayerSessionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for a player session.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a player session. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html">DescribePlayerSessions</a> with the player session ID.',
    required: [],
  })
  .openapi('PlacedPlayerSession')

const PlacedPlayerSessionListSchema = z
  .array(PlacedPlayerSessionSchema)
  .openapi('PlacedPlayerSessionList')

const GameSessionPlacementSchema = z
  .object({
    PlacementId: IdStringModelSchema.and(
      z.any().openapi({ description: 'A unique identifier for a game session placement.' }),
    ).exactOptional(),
    GameSessionQueueName: GameSessionQueueNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with game session queue. Queue names must be unique within each Region.',
        }),
    ).exactOptional(),
    Status: GameSessionPlacementStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Current status of the game session placement request.</p> <ul> <li> <p> <b>PENDING</b> -- The placement request is currently in the queue waiting to be processed.</p> </li> <li> <p> <b>FULFILLED</b> -- A new game session and player sessions (if requested) have been successfully created. Values for <i>GameSessionArn</i> and <i>GameSessionRegion</i> are available. </p> </li> <li> <p> <b>CANCELLED</b> -- The placement request was canceled.</p> </li> <li> <p> <b>TIMED_OUT</b> -- A new game session was not successfully created before the time limit expired. You can resubmit the placement request as needed.</p> </li> <li> <p> <b>FAILED</b> -- Amazon GameLift is not able to complete the process of placing the game session. Common reasons are the game session terminated before the placement process was completed, or an unexpected internal error.</p> </li> </ul>',
        }),
    ).exactOptional(),
    GameProperties: GamePropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).',
        }),
    ).exactOptional(),
    MaximumPlayerSessionCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of players that can be connected simultaneously to the game session.',
        }),
    ).exactOptional(),
    GameSessionName: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a game session. Session names do not need to be unique.',
        }),
    ).exactOptional(),
    GameSessionId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game session. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).',
        }),
    ).exactOptional(),
    GameSessionArn: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for the game session created by this placement request. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>). This identifier is unique across all Regions. You can use this value as a <code>GameSessionId</code> value as needed.',
        }),
    ).exactOptional(),
    GameSessionRegion: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the Region where the game session created by this placement request is running. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).',
        }),
    ).exactOptional(),
    PlayerLatencies: PlayerLatencyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to Amazon Web Services Regions.',
        }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time stamp indicating when this request was completed, canceled, or timed out.',
        }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>). ',
        }),
    ).exactOptional(),
    DnsName: DnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS identifier assigned to the instance that is running the game session. Values have the following format:</p> <ul> <li> <p>TLS-enabled fleets: <code>&lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com</code>.</p> </li> <li> <p>Non-TLS-enabled fleets: <code>ec2-&lt;unique identifier&gt;.compute.amazonaws.com</code>. (See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p> </li> </ul> <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>',
        }),
    ).exactOptional(),
    Port: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).',
        }),
    ).exactOptional(),
    PlacedPlayerSessions: PlacedPlayerSessionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of information on player sessions created in response to the game session placement request. These player sessions are created only once a new game session is successfully placed (placement status is <code>FULFILLED</code>). This information includes the player ID (as provided in the placement request) and the corresponding player session ID.',
        }),
    ).exactOptional(),
    GameSessionData: LargeGameSessionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <code>GameSession</code> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).',
        }),
    ).exactOptional(),
    MatchmakerData: MatchmakerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information on the matchmaking process for this game. Data is in JSON syntax, formatted as a string. It identifies the matchmaking configuration used to create the match, and contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">Match Data</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This object includes the full details of the original request plus the current status and start/end time stamps.',
    required: [],
  })
  .openapi('GameSessionPlacement')

const DescribeGameSessionPlacementOutputSchema = z
  .object({
    GameSessionPlacement: GameSessionPlacementSchema.and(
      z
        .any()
        .openapi({ description: 'Object that describes the requested game session placement.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGameSessionPlacementOutput')

const DescribeGameSessionPlacementInputSchema = z
  .object({
    PlacementId: IdStringModelSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for a game session placement to retrieve.' }),
    ),
  })
  .openapi({ required: ['PlacementId'], title: 'DescribeGameSessionPlacementInput' })
  .openapi('DescribeGameSessionPlacementInput')

const GameSessionQueueListSchema = z.array(GameSessionQueueSchema).openapi('GameSessionQueueList')

const DescribeGameSessionQueuesOutputSchema = z
  .object({
    GameSessionQueues: GameSessionQueueListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of objects that describe the requested game session queues.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGameSessionQueuesOutput')

const GameSessionQueueNameOrArnListSchema = z
  .array(GameSessionQueueNameOrArnSchema)
  .openapi('GameSessionQueueNameOrArnList')

const DescribeGameSessionQueuesInputSchema = z
  .object({
    Names: GameSessionQueueNameOrArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of queue names to retrieve information for. You can use either the queue ID or ARN value. To request settings for all queues, leave this parameter empty. ',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. You can request up to 50 results.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeGameSessionQueuesInput', required: [] })
  .openapi('DescribeGameSessionQueuesInput')

const GameSessionListSchema = z.array(GameSessionSchema).openapi('GameSessionList')

const DescribeGameSessionsOutputSchema = z
  .object({
    GameSessions: GameSessionListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of properties for each game session that matches the request.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGameSessionsOutput')

const DescribeGameSessionsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to retrieve game sessions for. You can use either the fleet ID or ARN value. ',
        }),
    ).exactOptional(),
    GameSessionId: ArnStringModelSchema.and(
      z.any().openapi({ description: 'A unique identifier for the game session to retrieve. ' }),
    ).exactOptional(),
    AliasId: AliasIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the alias associated with the fleet to retrieve game sessions for. You can use either the alias ID or ARN value.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            "A fleet location to get game sessions for. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>. ",
        }),
    ).exactOptional(),
    StatusFilter: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Game session status to filter results on. You can filter on the following states: <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code>, and <code>TERMINATING</code>. The last two are transitory and used for only very brief periods of time. ',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeGameSessionsInput', required: [] })
  .openapi('DescribeGameSessionsInput')

const InstanceIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9\.-]+/)
  .openapi('InstanceId')

const InstanceStatusSchema = z.enum(['PENDING', 'ACTIVE', 'TERMINATING']).openapi('InstanceStatus')

const InstanceSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the fleet that the instance is in.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the instance.' }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z.any().openapi({ description: 'IP address that is assigned to the instance.' }),
    ).exactOptional(),
    DnsName: DnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS identifier assigned to the instance that is running the game session. Values have the following format:</p> <ul> <li> <p>TLS-enabled fleets: <code>&lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com</code>.</p> </li> <li> <p>Non-TLS-enabled fleets: <code>ec2-&lt;unique identifier&gt;.compute.amazonaws.com</code>. (See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p> </li> </ul> <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>',
        }),
    ).exactOptional(),
    OperatingSystem: OperatingSystemSchema.and(
      z.any().openapi({ description: 'Operating system that is running on this instance. ' }),
    ).exactOptional(),
    Type: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon EC2 instance type that defines the computing resources of this instance. ',
        }),
    ).exactOptional(),
    Status: InstanceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Current status of the instance. Possible statuses include the following:</p> <ul> <li> <p> <b>PENDING</b> -- The instance is in the process of being created and launching server processes as defined in the fleet's run-time configuration. </p> </li> <li> <p> <b>ACTIVE</b> -- The instance has been successfully created and at least one server process has successfully launched and reported back to Amazon GameLift that it is ready to host a game session. The instance is now considered ready to host game sessions. </p> </li> <li> <p> <b>TERMINATING</b> -- The instance is in the process of shutting down. This may happen to reduce capacity during a scaling down event or to recycle resources in the event of a problem.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet location of the instance, expressed as an Amazon Web Services Region code, such as <code>us-west-2</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In Amazon GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p>',
    required: [],
  })
  .openapi('Instance')

const InstanceListSchema = z.array(InstanceSchema).openapi('InstanceList')

const DescribeInstancesOutputSchema = z
  .object({
    Instances: InstanceListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of objects containing properties for each instance returned.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeInstancesOutput')

const DescribeInstancesInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to retrieve instance information for. You can use either the fleet ID or ARN value.',
        }),
    ),
    InstanceId: InstanceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for an instance to retrieve. Specify an instance ID or leave blank to retrieve all instances in the fleet.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a location to retrieve instance information for, in the form of an Amazon Web Services Region code such as <code>us-west-2</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'DescribeInstancesInput' })
  .openapi('DescribeInstancesInput')

const MatchmakingConfigurationStatusSchema = z
  .enum([
    'CANCELLED',
    'COMPLETED',
    'FAILED',
    'PLACING',
    'QUEUED',
    'REQUIRES_ACCEPTANCE',
    'SEARCHING',
    'TIMED_OUT',
  ])
  .openapi('MatchmakingConfigurationStatus')

const StringModelSchema = z.string().openapi('StringModel')

const PlayerAttributeStringSchema = z.string().min(1).max(100).openapi('PlayerAttributeString')

const DoubleObjectSchema = z.float64().openapi('DoubleObject')

const PlayerAttributeStringListSchema = z
  .array(PlayerAttributeStringSchema)
  .openapi('PlayerAttributeStringList')

const PlayerAttributeStringDoubleMapSchema = z
  .record(z.string(), DoubleObjectSchema)
  .openapi('PlayerAttributeStringDoubleMap')

const AttributeValueSchema = z
  .object({
    S: PlayerAttributeStringSchema.and(
      z
        .any()
        .openapi({
          description: 'For single string values. Maximum string length is 100 characters.',
        }),
    ).exactOptional(),
    N: DoubleObjectSchema.and(
      z.any().openapi({ description: 'For number values, expressed as double.' }),
    ).exactOptional(),
    SL: PlayerAttributeStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a list of up to 100 strings. Maximum length for each string is 100 characters. Duplicate values are not recognized; all occurrences of the repeated value after the first of a repeated value are ignored.',
        }),
    ).exactOptional(),
    SDM: PlayerAttributeStringDoubleMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a map of up to 10 data type:value pairs. Maximum length for each string value is 100 characters. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Values for use in player attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.',
    required: [],
  })
  .openapi('AttributeValue')

const PlayerAttributeMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi('PlayerAttributeMap')

const LatencyMapSchema = z.record(z.string(), PositiveIntegerSchema).openapi('LatencyMap')

const PlayerSchema = z
  .object({
    PlayerId: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A unique identifier for a player' }),
    ).exactOptional(),
    PlayerAttributes: PlayerAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A collection of key:value pairs containing player information for use in matchmaking. Player attribute keys must match the <i>playerAttributes</i> used in a matchmaking rule set. Example: <code>"PlayerAttributes": {"skill": {"N": "23"}, "gameMode": {"S": "deathmatch"}}</code>.</p> <p>You can provide up to 10 <code>PlayerAttributes</code>.</p>',
        }),
    ).exactOptional(),
    Team: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the team that the player is assigned to in a match. Team names are defined in a matchmaking rule set.',
        }),
    ).exactOptional(),
    LatencyInMs: LatencyMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to @aws; Regions. If this property is present, FlexMatch considers placing the match only in Regions for which latency is reported. </p> <p>If a matchmaker has a rule that evaluates player latency, players must report latency in order to be matched. If no latency is reported in this scenario, FlexMatch assumes that no Regions are available to the player and the ticket is not matchable. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.',
    required: [],
  })
  .openapi('Player')

const PlayerListSchema = z.array(PlayerSchema).openapi('PlayerList')

const MatchedPlayerSessionSchema = z
  .object({
    PlayerId: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A unique identifier for a player ' }),
    ).exactOptional(),
    PlayerSessionId: PlayerSessionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for a player session' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p>",
    required: [],
  })
  .openapi('MatchedPlayerSession')

const MatchedPlayerSessionListSchema = z
  .array(MatchedPlayerSessionSchema)
  .openapi('MatchedPlayerSessionList')

const GameSessionConnectionInfoSchema = z
  .object({
    GameSessionArn: ArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the game session. Use the game session ID.',
        }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.',
        }),
    ).exactOptional(),
    DnsName: DnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS identifier assigned to the instance that is running the game session. Values have the following format:</p> <ul> <li> <p>TLS-enabled fleets: <code>&lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com</code>.</p> </li> <li> <p>Non-TLS-enabled fleets: <code>ec2-&lt;unique identifier&gt;.compute.amazonaws.com</code>. (See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p> </li> </ul> <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>',
        }),
    ).exactOptional(),
    Port: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.',
        }),
    ).exactOptional(),
    MatchedPlayerSessions: MatchedPlayerSessionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of player session IDs, one for each player ID that was included in the original matchmaking request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Connection information for a new game session that is created in response to a start matchmaking request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the matchmaking ticket.',
    required: [],
  })
  .openapi('GameSessionConnectionInfo')

const MatchmakingTicketSchema = z
  .object({
    TicketId: MatchmakingIdStringModelSchema.and(
      z.any().openapi({ description: 'A unique identifier for a matchmaking ticket.' }),
    ).exactOptional(),
    ConfigurationName: MatchmakingIdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the matchmaking configuration that is used with this ticket. Matchmaking configurations determine how players are grouped into a match and how a new game session is created for the match.',
        }),
    ).exactOptional(),
    ConfigurationArn: MatchmakingConfigurationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift matchmaking configuration resource that is used with this ticket.',
        }),
    ).exactOptional(),
    Status: MatchmakingConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Current status of the matchmaking request.</p> <ul> <li> <p> <b>QUEUED</b> -- The matchmaking request has been received and is currently waiting to be processed.</p> </li> <li> <p> <b>SEARCHING</b> -- The matchmaking request is currently being processed. </p> </li> <li> <p> <b>REQUIRES_ACCEPTANCE</b> -- A match has been proposed and the players must accept the match. This status is used only with requests that use a matchmaking configuration with a player acceptance requirement.</p> </li> <li> <p> <b>PLACING</b> -- The FlexMatch engine has matched players and is in the process of placing a new game session for the match.</p> </li> <li> <p> <b>COMPLETED</b> -- Players have been matched and a game session is ready to host the players. A ticket in this state contains the necessary connection information for players.</p> </li> <li> <p> <b>FAILED</b> -- The matchmaking request was not completed.</p> </li> <li> <p> <b>CANCELLED</b> -- The matchmaking request was canceled. This may be the result of a <code>StopMatchmaking</code> operation or a proposed match that one or more players failed to accept.</p> </li> <li> <p> <b>TIMED_OUT</b> -- The matchmaking request was not successful within the duration specified in the matchmaking configuration. </p> </li> </ul> <note> <p>Matchmaking requests that fail to successfully complete (statuses FAILED, CANCELLED, TIMED_OUT) can be resubmitted as new requests with new ticket IDs.</p> </note>',
        }),
    ).exactOptional(),
    StatusReason: StringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Code to explain the current status. For example, a status reason may indicate when a ticket has returned to <code>SEARCHING</code> status after a proposed match fails to receive player acceptances.',
        }),
    ).exactOptional(),
    StatusMessage: StringModelSchema.and(
      z.any().openapi({ description: 'Additional information about the current status.' }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time stamp indicating when the matchmaking request stopped being processed due to successful completion, timeout, or cancellation. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).',
        }),
    ).exactOptional(),
    Players: PlayerListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of <code>Player</code> objects, each representing a player to find matches for. Players are identified by a unique player ID and may include latency data for use during matchmaking. If the ticket is in status <code>COMPLETED</code>, the <code>Player</code> objects include the team the players were assigned to in the resulting match.',
        }),
    ).exactOptional(),
    GameSessionConnectionInfo: GameSessionConnectionInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Connection information for a new game session. Once a match is made, the FlexMatch engine creates a new game session for it. This information is added to the matchmaking ticket, which you can be retrieve by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html">DescribeMatchmaking</a> .',
        }),
    ).exactOptional(),
    EstimatedWaitTime: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Average amount of time (in seconds) that players are currently waiting for a match. If there is not enough recent data, this property may be empty.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request.',
    required: [],
  })
  .openapi('MatchmakingTicket')

const MatchmakingTicketListSchema = z
  .array(MatchmakingTicketSchema)
  .openapi('MatchmakingTicketList')

const DescribeMatchmakingOutputSchema = z
  .object({
    TicketList: MatchmakingTicketListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of existing matchmaking ticket objects matching the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMatchmakingOutput')

const MatchmakingIdListSchema = z.array(MatchmakingIdStringModelSchema).openapi('MatchmakingIdList')

const DescribeMatchmakingInputSchema = z
  .object({
    TicketIds: MatchmakingIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a matchmaking ticket. You can include up to 10 ID values. ',
        }),
    ),
  })
  .openapi({ required: ['TicketIds'], title: 'DescribeMatchmakingInput' })
  .openapi('DescribeMatchmakingInput')

const MatchmakingConfigurationListSchema = z
  .array(MatchmakingConfigurationSchema)
  .openapi('MatchmakingConfigurationList')

const DescribeMatchmakingConfigurationsOutputSchema = z
  .object({
    Configurations: MatchmakingConfigurationListSchema.and(
      z.any().openapi({ description: 'A collection of requested matchmaking configurations.' }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMatchmakingConfigurationsOutput')

const MatchmakingConfigurationNameListSchema = z
  .array(MatchmakingConfigurationNameSchema)
  .openapi('MatchmakingConfigurationNameList')

const DescribeMatchmakingConfigurationsInputSchema = z
  .object({
    Names: MatchmakingConfigurationNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking configuration(s) to retrieve. You can use either the configuration name or ARN value. To request all existing configurations, leave this parameter empty.',
        }),
    ).exactOptional(),
    RuleSetName: MatchmakingRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking rule set. You can use either the rule set name or ARN value. Use this parameter to retrieve all matchmaking configurations that use this rule set.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is limited to 10.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeMatchmakingConfigurationsInput', required: [] })
  .openapi('DescribeMatchmakingConfigurationsInput')

const MatchmakingRuleSetListSchema = z
  .array(MatchmakingRuleSetSchema)
  .openapi('MatchmakingRuleSetList')

const DescribeMatchmakingRuleSetsOutputSchema = z
  .object({
    RuleSets: MatchmakingRuleSetListSchema.and(
      z.any().openapi({ description: 'A collection of requested matchmaking rule set objects. ' }),
    ),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RuleSets'] })
  .openapi('DescribeMatchmakingRuleSetsOutput')

const MatchmakingRuleSetNameListSchema = z
  .array(MatchmakingRuleSetNameSchema)
  .min(1)
  .max(10)
  .openapi('MatchmakingRuleSetNameList')

const RuleSetLimitSchema = z.int().min(1).max(10).openapi('RuleSetLimit')

const DescribeMatchmakingRuleSetsInputSchema = z
  .object({
    Names: MatchmakingRuleSetNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more matchmaking rule set names to retrieve details for. (Note: The rule set name is different from the optional "name" field in the rule set body.) You can use either the rule set name or ARN value. ',
        }),
    ).exactOptional(),
    Limit: RuleSetLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeMatchmakingRuleSetsInput', required: [] })
  .openapi('DescribeMatchmakingRuleSetsInput')

const DescribePlayerSessionsOutputSchema = z
  .object({
    PlayerSessions: PlayerSessionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects containing properties for each player session that matches the request.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePlayerSessionsOutput')

const DescribePlayerSessionsInputSchema = z
  .object({
    GameSessionId: ArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the game session to retrieve player sessions for.',
        }),
    ).exactOptional(),
    PlayerId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for a player to retrieve player sessions for.',
        }),
    ).exactOptional(),
    PlayerSessionId: PlayerSessionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for a player session to retrieve.' }),
    ).exactOptional(),
    PlayerSessionStatusFilter: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Player session status to filter results on. Note that when a PlayerSessionId or PlayerId is provided in a DescribePlayerSessions request, then the PlayerSessionStatusFilter has no effect on the response.</p> <p>Possible player session statuses include the following:</p> <ul> <li> <p> <b>RESERVED</b> -- The player session request has been received, but the player has not yet connected to the server process and/or been validated. </p> </li> <li> <p> <b>ACTIVE</b> -- The player has been validated by the server process and is currently connected.</p> </li> <li> <p> <b>COMPLETED</b> -- The player connection has been dropped.</p> </li> <li> <p> <b>TIMEDOUT</b> -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).</p> </li> </ul>',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribePlayerSessionsInput', required: [] })
  .openapi('DescribePlayerSessionsInput')

const DescribeRuntimeConfigurationOutputSchema = z
  .object({
    RuntimeConfiguration: RuntimeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Instructions that describe how server processes should be launched and maintained on each instance in the fleet.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRuntimeConfigurationOutput')

const DescribeRuntimeConfigurationInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to get the runtime configuration for. You can use either the fleet ID or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['FleetId'], title: 'DescribeRuntimeConfigurationInput' })
  .openapi('DescribeRuntimeConfigurationInput')

const ScalingStatusTypeSchema = z
  .enum([
    'ACTIVE',
    'UPDATE_REQUESTED',
    'UPDATING',
    'DELETE_REQUESTED',
    'DELETING',
    'DELETED',
    'ERROR',
  ])
  .openapi('ScalingStatusType')

const IntegerSchema = z.int().openapi('Integer')

const ScalingAdjustmentTypeSchema = z
  .enum(['ChangeInCapacity', 'ExactCapacity', 'PercentChangeInCapacity'])
  .openapi('ScalingAdjustmentType')

const ComparisonOperatorTypeSchema = z
  .enum([
    'GreaterThanOrEqualToThreshold',
    'GreaterThanThreshold',
    'LessThanThreshold',
    'LessThanOrEqualToThreshold',
  ])
  .openapi('ComparisonOperatorType')

const DoubleSchema = z.float64().openapi('Double')

const MetricNameSchema = z
  .enum([
    'ActivatingGameSessions',
    'ActiveGameSessions',
    'ActiveInstances',
    'AvailableGameSessions',
    'AvailablePlayerSessions',
    'CurrentPlayerSessions',
    'IdleInstances',
    'PercentAvailableGameSessions',
    'PercentIdleInstances',
    'QueueDepth',
    'WaitTime',
    'ConcurrentActivatableGameSessions',
  ])
  .openapi('MetricName')

const PolicyTypeSchema = z.enum(['RuleBased', 'TargetBased']).openapi('PolicyType')

const TargetConfigurationSchema = z
  .object({
    TargetValue: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).",
        }),
    ),
  })
  .openapi({
    required: ['TargetValue'],
    description:
      'Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value. ',
  })
  .openapi('TargetConfiguration')

const ScalingPolicySchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet that is associated with this scaling policy.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.",
        }),
    ).exactOptional(),
    Status: ScalingStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Current status of the scaling policy. The scaling policy can be in force only when in an <code>ACTIVE</code> status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.</p> <ul> <li> <p> <b>ACTIVE</b> -- The scaling policy can be used for auto-scaling a fleet.</p> </li> <li> <p> <b>UPDATE_REQUESTED</b> -- A request to update the scaling policy has been received.</p> </li> <li> <p> <b>UPDATING</b> -- A change is being made to the scaling policy.</p> </li> <li> <p> <b>DELETE_REQUESTED</b> -- A request to delete the scaling policy has been received.</p> </li> <li> <p> <b>DELETING</b> -- The scaling policy is being deleted.</p> </li> <li> <p> <b>DELETED</b> -- The scaling policy has been deleted.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred in creating the policy. It should be removed and recreated.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ScalingAdjustment: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Amount of adjustment to make, based on the scaling adjustment type.',
        }),
    ).exactOptional(),
    ScalingAdjustmentType: ScalingAdjustmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of adjustment to make to a fleet's instance count.</p> <ul> <li> <p> <b>ChangeInCapacity</b> -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.</p> </li> <li> <p> <b>ExactCapacity</b> -- set the instance count to the scaling adjustment value.</p> </li> <li> <p> <b>PercentChangeInCapacity</b> -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down.</p> </li> </ul>",
        }),
    ).exactOptional(),
    ComparisonOperator: ComparisonOperatorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Comparison operator to use when measuring a metric against the threshold value.',
        }),
    ).exactOptional(),
    Threshold: DoubleSchema.and(
      z.any().openapi({ description: 'Metric value used to trigger a scaling event.' }),
    ).exactOptional(),
    EvaluationPeriods: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html">Monitor Amazon GameLift with Amazon CloudWatch</a>. </p> <ul> <li> <p> <b>ActivatingGameSessions</b> -- Game sessions in the process of being created.</p> </li> <li> <p> <b>ActiveGameSessions</b> -- Game sessions that are currently running.</p> </li> <li> <p> <b>ActiveInstances</b> -- Fleet instances that are currently running at least one game session.</p> </li> <li> <p> <b>AvailableGameSessions</b> -- Additional game sessions that fleet could host simultaneously, given current capacity.</p> </li> <li> <p> <b>AvailablePlayerSessions</b> -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.</p> </li> <li> <p> <b>CurrentPlayerSessions</b> -- Player slots in active game sessions that are being used by a player or are reserved for a player. </p> </li> <li> <p> <b>IdleInstances</b> -- Active instances that are currently hosting zero game sessions. </p> </li> <li> <p> <b>PercentAvailableGameSessions</b> -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.</p> </li> <li> <p> <b>PercentIdleInstances</b> -- Percentage of the total number of active instances that are hosting zero game sessions.</p> </li> <li> <p> <b>QueueDepth</b> -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.</p> </li> <li> <p> <b>WaitTime</b> -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination. </p> </li> </ul>',
        }),
    ).exactOptional(),
    PolicyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of scaling policy to create. For a target-based policy, set the parameter <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a <i>TargetConfiguration</i>. For a rule-based policy set the following parameters: <i>MetricName</i>, <i>ComparisonOperator</i>, <i>Threshold</i>, <i>EvaluationPeriods</i>, <i>ScalingAdjustmentType</i>, and <i>ScalingAdjustment</i>.",
        }),
    ).exactOptional(),
    TargetConfiguration: TargetConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains settings for a target-based scaling policy.',
        }),
    ).exactOptional(),
    UpdateStatus: LocationUpdateStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current status of the fleet's scaling policies in a requested fleet location. The status <code>PENDING_UPDATE</code> indicates that an update was requested for the fleet but has not yet been completed for the location.",
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z.any().openapi({ description: ' The fleet location. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.',
    required: [],
  })
  .openapi('ScalingPolicy')

const ScalingPolicyListSchema = z.array(ScalingPolicySchema).openapi('ScalingPolicyList')

const DescribeScalingPoliciesOutputSchema = z
  .object({
    ScalingPolicies: ScalingPolicyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects containing the scaling policies matching the request.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeScalingPoliciesOutput')

const DescribeScalingPoliciesInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet for which to retrieve scaling policies. You can use either the fleet ID or ARN value.',
        }),
    ),
    StatusFilter: ScalingStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Scaling policy status to filter results on. A scaling policy is only in force when in an <code>ACTIVE</code> status.</p> <ul> <li> <p> <b>ACTIVE</b> -- The scaling policy is currently in force.</p> </li> <li> <p> <b>UPDATEREQUESTED</b> -- A request to update the scaling policy has been received.</p> </li> <li> <p> <b>UPDATING</b> -- A change is being made to the scaling policy.</p> </li> <li> <p> <b>DELETEREQUESTED</b> -- A request to delete the scaling policy has been received.</p> </li> <li> <p> <b>DELETING</b> -- The scaling policy is being deleted.</p> </li> <li> <p> <b>DELETED</b> -- The scaling policy has been deleted.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred in creating the policy. It should be removed and recreated.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            " The fleet location. If you don't specify this value, the response contains the scaling policies of every location in the fleet. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'DescribeScalingPoliciesInput' })
  .openapi('DescribeScalingPoliciesInput')

const DescribeScriptOutputSchema = z
  .object({
    Script: ScriptSchema.and(
      z.any().openapi({ description: 'A set of properties describing the requested script.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeScriptOutput')

const DescribeScriptInputSchema = z
  .object({
    ScriptId: ScriptIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Realtime script to retrieve properties for. You can use either the script ID or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['ScriptId'], title: 'DescribeScriptInput' })
  .openapi('DescribeScriptInput')

const VpcPeeringAuthorizationListSchema = z
  .array(VpcPeeringAuthorizationSchema)
  .openapi('VpcPeeringAuthorizationList')

const DescribeVpcPeeringAuthorizationsOutputSchema = z
  .object({
    VpcPeeringAuthorizations: VpcPeeringAuthorizationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects that describe all valid VPC peering operations for the current Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeVpcPeeringAuthorizationsOutput')

const DescribeVpcPeeringAuthorizationsInputSchema = z
  .object({})
  .openapi({ title: 'DescribeVpcPeeringAuthorizationsInput' })
  .openapi('DescribeVpcPeeringAuthorizationsInput')

const VpcPeeringConnectionStatusSchema = z
  .object({
    Code: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'Code indicating the status of a VPC peering connection.' }),
    ).exactOptional(),
    Message: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({ description: 'Additional messaging associated with the connection status. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents status information for a VPC peering connection. Status codes and messages are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet event.',
    required: [],
  })
  .openapi('VpcPeeringConnectionStatus')

const VpcPeeringConnectionSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet. This ID determines the ID of the Amazon GameLift VPC for your fleet.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet resource for this connection. ',
        }),
    ).exactOptional(),
    IpV4CidrBlock: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'CIDR block of IPv4 addresses assigned to the VPC peering connection for the GameLift VPC. The peered VPC also has an IPv4 CIDR block associated with it; these blocks cannot overlap or the peering connection cannot be created. ',
        }),
    ).exactOptional(),
    VpcPeeringConnectionId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that is automatically assigned to the connection record. This ID is referenced in VPC peering connection events, and is used when deleting a connection.',
        }),
    ).exactOptional(),
    Status: VpcPeeringConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status information about the connection. Status indicates if a connection is pending, successful, or failed.',
        }),
    ).exactOptional(),
    PeerVpcId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console. Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.',
        }),
    ).exactOptional(),
    GameLiftVpcId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the VPC that contains the Amazon GameLift fleet for this connection. This VPC is managed by Amazon GameLift and does not appear in your Amazon Web Services account. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents a peering connection between a VPC on one of your Amazon Web Services accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
    required: [],
  })
  .openapi('VpcPeeringConnection')

const VpcPeeringConnectionListSchema = z
  .array(VpcPeeringConnectionSchema)
  .openapi('VpcPeeringConnectionList')

const DescribeVpcPeeringConnectionsOutputSchema = z
  .object({
    VpcPeeringConnections: VpcPeeringConnectionListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of VPC peering connection records that match the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeVpcPeeringConnectionsOutput')

const DescribeVpcPeeringConnectionsInputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet. You can use either the fleet ID or ARN value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeVpcPeeringConnectionsInput', required: [] })
  .openapi('DescribeVpcPeeringConnectionsInput')

const GetComputeAccessOutputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z.any().openapi({ description: 'The fleet ID of compute resource.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    ComputeName: ComputeNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the compute resource you requested credentials for.',
        }),
    ).exactOptional(),
    ComputeArn: ComputeArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift compute resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    Credentials: AwsCredentialsSchema.and(
      z.any().openapi({ description: 'The access credentials for the compute resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetComputeAccessOutput')

const GetComputeAccessInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet that the compute resource is registered to.',
        }),
    ),
    ComputeName: ComputeNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the compute resource you are requesting credentials for.',
        }),
    ),
  })
  .openapi({ required: ['FleetId', 'ComputeName'], title: 'GetComputeAccessInput' })
  .openapi('GetComputeAccessInput')

const ComputeAuthTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-]+/)
  .min(1)
  .max(64)
  .openapi('ComputeAuthToken')

const GetComputeAuthTokenOutputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet that the compute is registered to.',
        }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
    ComputeName: ComputeNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the compute resource you are requesting the authentication token for.',
        }),
    ).exactOptional(),
    ComputeArn: ComputeArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift compute resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code> ',
        }),
    ).exactOptional(),
    AuthToken: ComputeAuthTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication token that your game server uses to authenticate with Amazon GameLift.',
        }),
    ).exactOptional(),
    ExpirationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time until the authentication token is no longer valid. To continue using the compute resource for game server hosting, renew the authentication token by using this operation again.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetComputeAuthTokenOutput')

const GetComputeAuthTokenInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet that the compute is registered to.',
        }),
    ),
    ComputeName: ComputeNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the compute resource you are requesting the authentication token for.',
        }),
    ),
  })
  .openapi({ required: ['FleetId', 'ComputeName'], title: 'GetComputeAuthTokenInput' })
  .openapi('GetComputeAuthTokenInput')

const GetGameSessionLogUrlOutputSchema = z
  .object({
    PreSignedUrl: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Location of the requested game session logs, available for download. This URL is valid for 15 minutes, after which S3 will reject any download request using this URL. You can request a new URL any time within the 14-day period that the logs are retained.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGameSessionLogUrlOutput')

const GetGameSessionLogUrlInputSchema = z
  .object({
    GameSessionId: ArnStringModelSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the game session to get logs for. ' }),
    ),
  })
  .openapi({ required: ['GameSessionId'], title: 'GetGameSessionLogUrlInput' })
  .openapi('GetGameSessionLogUrlInput')

const InstanceCredentialsSchema = z
  .object({
    UserName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'User login string.' }),
    ).exactOptional(),
    Secret: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Secret string. For Windows instances, the secret is a password for use with Windows Remote Desktop. For Linux instances, it is a private key (which must be saved as a <code>.pem</code> file) for use with SSH.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Set of credentials required to remotely access a fleet instance.',
    required: [],
  })
  .openapi('InstanceCredentials')

const InstanceAccessSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet containing the instance being accessed.',
        }),
    ).exactOptional(),
    InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the instance being accessed.' }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z.any().openapi({ description: 'IP address that is assigned to the instance.' }),
    ).exactOptional(),
    OperatingSystem: OperatingSystemSchema.and(
      z.any().openapi({ description: 'Operating system that is running on the instance.' }),
    ).exactOptional(),
    Credentials: InstanceCredentialsSchema.and(
      z.any().openapi({ description: 'Credentials required to access the instance.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information required to remotely connect to a fleet instance. ',
    required: [],
  })
  .openapi('InstanceAccess')

const GetInstanceAccessOutputSchema = z
  .object({
    InstanceAccess: InstanceAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            'The connection information for a fleet instance, including IP address and access credentials.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstanceAccessOutput')

const GetInstanceAccessInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet that contains the instance you want access to. You can use either the fleet ID or ARN value. The fleet can be in any of the following statuses: <code>ACTIVATING</code>, <code>ACTIVE</code>, or <code>ERROR</code>. Fleets with an <code>ERROR</code> status may be accessible for a short time before they are deleted.',
        }),
    ),
    InstanceId: InstanceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the instance you want to get access to. You can access an instance in any status.',
        }),
    ),
  })
  .openapi({ required: ['FleetId', 'InstanceId'], title: 'GetInstanceAccessInput' })
  .openapi('GetInstanceAccessInput')

const AliasListSchema = z.array(AliasSchema).openapi('AliasList')

const ListAliasesOutputSchema = z
  .object({
    Aliases: AliasListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of alias resources that match the request parameters.',
        }),
    ).exactOptional(),
    NextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAliasesOutput')

const ListAliasesInputSchema = z
  .object({
    RoutingStrategyType: RoutingStrategyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The routing type to filter results on. Use this parameter to retrieve only aliases with a certain routing type. To retrieve all aliases, leave this parameter empty.</p> <p>Possible routing types include the following:</p> <ul> <li> <p> <b>SIMPLE</b> -- The alias resolves to one specific fleet. Use this type when routing to active fleets.</p> </li> <li> <p> <b>TERMINAL</b> -- The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RoutingStrategy.html">RoutingStrategy</a> message embedded.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Name: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with an alias. Alias names do not need to be unique.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAliasesInput', required: [] })
  .openapi('ListAliasesInput')

const BuildListSchema = z.array(BuildSchema).openapi('BuildList')

const ListBuildsOutputSchema = z
  .object({
    Builds: BuildListSchema.and(
      z.any().openapi({ description: 'A collection of build resources that match the request.' }),
    ).exactOptional(),
    NextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBuildsOutput')

const ListBuildsInputSchema = z
  .object({
    Status: BuildStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Build status to filter results by. To retrieve all builds, leave this parameter empty.</p> <p>Possible build statuses include the following:</p> <ul> <li> <p> <b>INITIALIZED</b> -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value. </p> </li> <li> <p> <b>READY</b> -- The game build has been successfully uploaded. You can now create new fleets for this build.</p> </li> <li> <p> <b>FAILED</b> -- The game build upload failed. You cannot create new fleets for this build. </p> </li> </ul>',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, don't specify a value.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBuildsInput', required: [] })
  .openapi('ListBuildsInput')

const ComputeListSchema = z.array(ComputeSchema).openapi('ComputeList')

const ListComputeOutputSchema = z
  .object({
    ComputeList: ComputeListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of compute resources registered to the fleet you specified.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListComputeOutput')

const ListComputeInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the fleet the compute resources are registered to.',
        }),
    ),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom location that the compute resources are assigned to.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'ListComputeInput' })
  .openapi('ListComputeInput')

const FleetIdListSchema = z.array(FleetIdSchema).min(1).openapi('FleetIdList')

const ListFleetsOutputSchema = z
  .object({
    FleetIds: FleetIdListSchema.and(
      z.any().openapi({ description: 'A set of fleet IDs that match the list request.' }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFleetsOutput')

const ListFleetsInputSchema = z
  .object({
    BuildId: BuildIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the build to request fleets for. Use this parameter to return only fleets using a specified build. Use either the build ID or ARN value.',
        }),
    ).exactOptional(),
    ScriptId: ScriptIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Realtime script to request fleets for. Use this parameter to return only fleets using a specified script. Use either the script ID or ARN value.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFleetsInput', required: [] })
  .openapi('ListFleetsInput')

const GameServerGroupsSchema = z.array(GameServerGroupSchema).openapi('GameServerGroups')

const ListGameServerGroupsOutputSchema = z
  .object({
    GameServerGroups: GameServerGroupsSchema.and(
      z.any().openapi({ description: "The game server groups' game server groups." }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the pagination token from a previous request to retrieve the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGameServerGroupsOutput')

const ListGameServerGroupsInputSchema = z
  .object({
    Limit: PositiveIntegerSchema.and(
      z.any().openapi({ description: "The game server groups' limit." }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the pagination token from a previous request to retrieve the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGameServerGroupsInput', required: [] })
  .openapi('ListGameServerGroupsInput')

const GameServersSchema = z.array(GameServerSchema).openapi('GameServers')

const ListGameServersOutputSchema = z
  .object({
    GameServers: GameServersSchema.and(
      z
        .any()
        .openapi({ description: 'A collection of game server objects that match the request.' }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGameServersOutput')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const ListGameServersInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for the game server group to retrieve a list of game servers from. Use either the name or ARN value.',
        }),
    ),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates how to sort the returned data based on game server registration timestamp. Use <code>ASCENDING</code> to retrieve oldest game servers first, or use <code>DESCENDING</code> to retrieve newest game servers first. If this parameter is left empty, game servers are returned in no particular order.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameServerGroupName'], title: 'ListGameServersInput' })
  .openapi('ListGameServersInput')

const LocationModelListSchema = z.array(LocationModelSchema).openapi('LocationModelList')

const ListLocationsOutputSchema = z
  .object({
    Locations: LocationModelListSchema.and(
      z.any().openapi({ description: 'A collection of locations.' }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLocationsOutput')

const LocationFilterSchema = z.enum(['AWS', 'CUSTOM']).openapi('LocationFilter')

const LocationFilterListSchema = z
  .array(LocationFilterSchema)
  .min(1)
  .max(2)
  .openapi('LocationFilterList')

const ListLocationsLimitSchema = z.int().min(1).max(200).openapi('ListLocationsLimit')

const ListLocationsInputSchema = z
  .object({
    Filters: LocationFilterListSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters the list for <code>AWS</code> or <code>CUSTOM</code> locations.',
        }),
    ).exactOptional(),
    Limit: ListLocationsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLocationsInput', required: [] })
  .openapi('ListLocationsInput')

const ScriptListSchema = z.array(ScriptSchema).openapi('ScriptList')

const ListScriptsOutputSchema = z
  .object({
    Scripts: ScriptListSchema.and(
      z.any().openapi({ description: 'A set of properties describing the requested script.' }),
    ).exactOptional(),
    NextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListScriptsOutput')

const ListScriptsInputSchema = z
  .object({
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.',
        }),
    ).exactOptional(),
    NextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, don't specify a value.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListScriptsInput', required: [] })
  .openapi('ListScriptsInput')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The collection of tags assigned to the resource. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies the Amazon GameLift resource that you want to retrieve tags for. Amazon GameLift includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a <code>List</code> or <code>Describe</code> operation for the resource type. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutScalingPolicyOutputSchema = z
  .object({
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutScalingPolicyOutput')

const PutScalingPolicyInputSchema = z
  .object({
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.",
        }),
    ),
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to apply this policy to. You can use either the fleet ID or ARN value. The fleet cannot be in any of the following statuses: ERROR or DELETING.',
        }),
    ),
    ScalingAdjustment: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Amount of adjustment to make, based on the scaling adjustment type.',
        }),
    ).exactOptional(),
    ScalingAdjustmentType: ScalingAdjustmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of adjustment to make to a fleet\'s instance count:</p> <ul> <li> <p> <b>ChangeInCapacity</b> -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.</p> </li> <li> <p> <b>ExactCapacity</b> -- set the instance count to the scaling adjustment value.</p> </li> <li> <p> <b>PercentChangeInCapacity</b> -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down; for example, a value of "-10" scales the fleet down by 10%.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Threshold: DoubleSchema.and(
      z.any().openapi({ description: 'Metric value used to trigger a scaling event.' }),
    ).exactOptional(),
    ComparisonOperator: ComparisonOperatorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Comparison operator to use when measuring the metric against the threshold value.',
        }),
    ).exactOptional(),
    EvaluationPeriods: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html">Monitor Amazon GameLift with Amazon CloudWatch</a>. </p> <ul> <li> <p> <b>ActivatingGameSessions</b> -- Game sessions in the process of being created.</p> </li> <li> <p> <b>ActiveGameSessions</b> -- Game sessions that are currently running.</p> </li> <li> <p> <b>ActiveInstances</b> -- Fleet instances that are currently running at least one game session.</p> </li> <li> <p> <b>AvailableGameSessions</b> -- Additional game sessions that fleet could host simultaneously, given current capacity.</p> </li> <li> <p> <b>AvailablePlayerSessions</b> -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.</p> </li> <li> <p> <b>CurrentPlayerSessions</b> -- Player slots in active game sessions that are being used by a player or are reserved for a player. </p> </li> <li> <p> <b>IdleInstances</b> -- Active instances that are currently hosting zero game sessions. </p> </li> <li> <p> <b>PercentAvailableGameSessions</b> -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.</p> </li> <li> <p> <b>PercentIdleInstances</b> -- Percentage of the total number of active instances that are hosting zero game sessions.</p> </li> <li> <p> <b>QueueDepth</b> -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.</p> </li> <li> <p> <b>WaitTime</b> -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination. </p> </li> </ul>',
        }),
    ),
    PolicyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of scaling policy to create. For a target-based policy, set the parameter <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a <i>TargetConfiguration</i>. For a rule-based policy set the following parameters: <i>MetricName</i>, <i>ComparisonOperator</i>, <i>Threshold</i>, <i>EvaluationPeriods</i>, <i>ScalingAdjustmentType</i>, and <i>ScalingAdjustment</i>.",
        }),
    ).exactOptional(),
    TargetConfiguration: TargetConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains settings for a target-based scaling policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'FleetId', 'MetricName'], title: 'PutScalingPolicyInput' })
  .openapi('PutScalingPolicyInput')

const RegisterComputeOutputSchema = z
  .object({
    Compute: ComputeSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the compute resource you registered to the specified fleet.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterComputeOutput')

const DnsNameInputSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_\-\.]+/)
  .min(1)
  .max(256)
  .openapi('DnsNameInput')

const RegisterComputeInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to register the compute to. You can use either the fleet ID or ARN value.',
        }),
    ),
    ComputeName: ComputeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with the compute resource registered to your fleet.',
        }),
    ),
    CertificatePath: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the TLS certificate on your compute resource. The path and certificate are not validated by Amazon GameLift.',
        }),
    ).exactOptional(),
    DnsName: DnsNameInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS name of the compute resource. Amazon GameLift requires the DNS name or IP address to manage your compute resource.',
        }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the compute resource. Amazon GameLift requires the DNS name or IP address to manage your compute resource.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom location you added to the fleet you are registering this compute resource to.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId', 'ComputeName'], title: 'RegisterComputeInput' })
  .openapi('RegisterComputeInput')

const RegisterGameServerOutputSchema = z
  .object({
    GameServer: GameServerSchema.and(
      z.any().openapi({ description: 'Object that describes the newly registered game server.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterGameServerOutput')

const RegisterGameServerInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group where the game server is running.',
        }),
    ),
    GameServerId: GameServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom string that uniquely identifies the game server to register. Game server IDs are developer-defined and must be unique across all game server groups in your Amazon Web Services account.',
        }),
    ),
    InstanceId: GameServerInstanceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: <code>i-1234567890abcdef0</code>.',
        }),
    ),
    ConnectionInfo: GameServerConnectionInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information that is needed to make inbound client connections to the game server. This might include the IP address and port, DNS name, and other information.',
        }),
    ).exactOptional(),
    GameServerData: GameServerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GameServerGroupName', 'GameServerId', 'InstanceId'],
    title: 'RegisterGameServerInput',
  })
  .openapi('RegisterGameServerInput')

const RequestUploadCredentialsOutputSchema = z
  .object({
    UploadCredentials: AwsCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Web Services credentials required when uploading a game build to the storage location. These credentials have a limited lifespan and are valid only for the build they were issued for.',
        }),
    ).exactOptional(),
    StorageLocation: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon S3 path and key, identifying where the game build files are stored.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestUploadCredentialsOutput')

const RequestUploadCredentialsInputSchema = z
  .object({
    BuildId: BuildIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the build to get credentials for. You can use either the build ID or ARN value. ',
        }),
    ),
  })
  .openapi({ required: ['BuildId'], title: 'RequestUploadCredentialsInput' })
  .openapi('RequestUploadCredentialsInput')

const ResolveAliasOutputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z.any().openapi({ description: 'The fleet identifier that the alias is pointing to.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet resource that this alias points to. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResolveAliasOutput')

const ResolveAliasInputSchema = z
  .object({
    AliasId: AliasIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the alias that you want to retrieve a fleet ID for. You can use either the alias ID or ARN value.',
        }),
    ),
  })
  .openapi({ required: ['AliasId'], title: 'ResolveAliasInput' })
  .openapi('ResolveAliasInput')

const ResumeGameServerGroupOutputSchema = z
  .object({
    GameServerGroup: GameServerGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the game server group resource, with the <code>SuspendedActions</code> property updated to reflect the resumed activity.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResumeGameServerGroupOutput')

const ResumeGameServerGroupInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group. Use either the name or ARN value.',
        }),
    ),
    ResumeActions: GameServerGroupActionsSchema.and(
      z.any().openapi({ description: 'The activity to resume for this game server group.' }),
    ),
  })
  .openapi({
    required: ['GameServerGroupName', 'ResumeActions'],
    title: 'ResumeGameServerGroupInput',
  })
  .openapi('ResumeGameServerGroupInput')

const SearchGameSessionsOutputSchema = z
  .object({
    GameSessions: GameSessionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects containing game session properties for each session that matches the request.',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchGameSessionsOutput')

const SearchGameSessionsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to search for active game sessions. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.',
        }),
    ).exactOptional(),
    AliasId: AliasIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the alias associated with the fleet to search for active game sessions. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            "A fleet location to search for game sessions. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>. ",
        }),
    ).exactOptional(),
    FilterExpression: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String containing the search criteria for the session search. If no filter expression is included, the request returns results for all game sessions in the fleet that are in <code>ACTIVE</code> status.</p> <p>A filter expression can contain one or multiple conditions. Each condition consists of the following:</p> <ul> <li> <p> <b>Operand</b> -- Name of a game session attribute. Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>, <code>gameSessionProperties</code>, <code>maximumSessions</code>, <code>creationTimeMillis</code>, <code>playerSessionCount</code>, <code>hasAvailablePlayerSessions</code>.</p> </li> <li> <p> <b>Comparator</b> -- Valid comparators are: <code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. </p> </li> <li> <p> <b>Value</b> -- Value to be searched for. Values may be numbers, boolean values (true/false) or strings depending on the operand. String values are case sensitive and must be enclosed in single quotes. Special characters must be escaped. Boolean and string values can only be used with the comparators <code>=</code> and <code>&lt;&gt;</code>. For example, the following filter expression searches on <code>gameSessionName</code>: "<code>FilterExpression": "gameSessionName = \'Matt\\\\\'s Awesome Game 1\'"</code>. </p> </li> </ul> <p>To chain multiple conditions in a single expression, use the logical keywords <code>AND</code>, <code>OR</code>, and <code>NOT</code> and parentheses as needed. For example: <code>x AND y AND NOT z</code>, <code>NOT (x OR y)</code>.</p> <p>Session search evaluates conditions from left to right using the following precedence rules:</p> <ol> <li> <p> <code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> </p> </li> <li> <p>Parentheses</p> </li> <li> <p>NOT</p> </li> <li> <p>AND</p> </li> <li> <p>OR</p> </li> </ol> <p>For example, this filter expression retrieves game sessions hosting at least ten players that have an open player slot: <code>"maximumSessions&gt;=10 AND hasAvailablePlayerSessions=true"</code>. </p>',
        }),
    ).exactOptional(),
    SortExpression: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Instructions on how to sort the search results. If no sort expression is included, the request returns results in random order. A sort expression consists of the following elements:</p> <ul> <li> <p> <b>Operand</b> -- Name of a game session attribute. Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>, <code>gameSessionProperties</code>, <code>maximumSessions</code>, <code>creationTimeMillis</code>, <code>playerSessionCount</code>, <code>hasAvailablePlayerSessions</code>.</p> </li> <li> <p> <b>Order</b> -- Valid sort orders are <code>ASC</code> (ascending) and <code>DESC</code> (descending).</p> </li> </ul> <p>For example, this sort expression returns the oldest active sessions first: <code>"SortExpression": "creationTimeMillis ASC"</code>. Results with a null value for the sort operand are returned at the end of the list.</p>',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or is set higher than 20. ',
        }),
    ).exactOptional(),
    NextToken: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'SearchGameSessionsInput', required: [] })
  .openapi('SearchGameSessionsInput')

const StartFleetActionsOutputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the fleet to restart actions on.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartFleetActionsOutput')

const StartFleetActionsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to restart actions on. You can use either the fleet ID or ARN value.',
        }),
    ),
    Actions: FleetActionListSchema.and(
      z.any().openapi({ description: 'List of actions to restart on the fleet.' }),
    ),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet location to restart fleet actions for. Specify a location in the form of an Amazon Web Services Region code, such as <code>us-west-2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId', 'Actions'], title: 'StartFleetActionsInput' })
  .openapi('StartFleetActionsInput')

const StartGameSessionPlacementOutputSchema = z
  .object({
    GameSessionPlacement: GameSessionPlacementSchema.and(
      z
        .any()
        .openapi({
          description:
            'Object that describes the newly created game session placement. This object includes all the information provided in the request, as well as start/end time stamps and placement status. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartGameSessionPlacementOutput')

const DesiredPlayerSessionSchema = z
  .object({
    PlayerId: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for a player to associate with the player session.',
        }),
    ).exactOptional(),
    PlayerData: PlayerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Player information for use when creating player sessions using a game session placement request.',
    required: [],
  })
  .openapi('DesiredPlayerSession')

const DesiredPlayerSessionListSchema = z
  .array(DesiredPlayerSessionSchema)
  .openapi('DesiredPlayerSessionList')

const StartGameSessionPlacementInputSchema = z
  .object({
    PlacementId: IdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier to assign to the new game session placement. This value is developer-defined. The value must be unique across all Regions and cannot be reused.',
        }),
    ),
    GameSessionQueueName: GameSessionQueueNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the queue to use to place the new game session. You can use either the queue name or ARN value. ',
        }),
    ),
    GameProperties: GamePropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).',
        }),
    ).exactOptional(),
    MaximumPlayerSessionCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of players that can be connected simultaneously to the game session.',
        }),
    ),
    GameSessionName: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a game session. Session names do not need to be unique.',
        }),
    ).exactOptional(),
    PlayerLatencies: PlayerLatencyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to Amazon Web Services Regions. This information is used to try to place the new game session where it can offer the best possible gameplay experience for the players. ',
        }),
    ).exactOptional(),
    DesiredPlayerSessions: DesiredPlayerSessionListSchema.and(
      z
        .any()
        .openapi({
          description: 'Set of information on each player to create a player session for.',
        }),
    ).exactOptional(),
    GameSessionData: LargeGameSessionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <code>GameSession</code> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PlacementId', 'GameSessionQueueName', 'MaximumPlayerSessionCount'],
    title: 'StartGameSessionPlacementInput',
  })
  .openapi('StartGameSessionPlacementInput')

const StartMatchBackfillOutputSchema = z
  .object({
    MatchmakingTicket: MatchmakingTicketSchema.and(
      z
        .any()
        .openapi({
          description:
            'Ticket representing the backfill matchmaking request. This object includes the information in the request, ticket status, and match results as generated during the matchmaking process.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartMatchBackfillOutput')

const StartMatchBackfillInputSchema = z
  .object({
    TicketId: MatchmakingIdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a UUID. Use this identifier to track the match backfill ticket status and retrieve match results.',
        }),
    ).exactOptional(),
    ConfigurationName: MatchmakingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the matchmaker to use for this request. You can use either the configuration name or ARN value. The ARN of the matchmaker that was used with the original game session is listed in the <code>GameSession</code> object, <code>MatchmakerData</code> property.',
        }),
    ),
    GameSessionArn: ArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game session. Use the game session ID. When using FlexMatch as a standalone matchmaking solution, this parameter is not needed. ',
        }),
    ).exactOptional(),
    Players: PlayerListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Match information on all players that are currently assigned to the game session. This information is used by the matchmaker to find new players and add them to the existing game.</p> <p>You can include up to 199 <code>Players</code> in a <code>StartMatchBackfill</code> request.</p> <ul> <li> <p>PlayerID, PlayerAttributes, Team -- This information is maintained in the <code>GameSession</code> object, <code>MatchmakerData</code> property, for all players who are currently assigned to the game session. The matchmaker data is in JSON syntax, formatted as a string. For more details, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data"> Match Data</a>. </p> <p>The backfill request must specify the team membership for every player. Do not specify team if you are not using backfill.</p> </li> <li> <p>LatencyInMs -- If the matchmaker uses player latency, include a latency value, in milliseconds, for the Region that the game session is currently in. Do not include latency values for any other Region.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ConfigurationName', 'Players'], title: 'StartMatchBackfillInput' })
  .openapi('StartMatchBackfillInput')

const StartMatchmakingOutputSchema = z
  .object({
    MatchmakingTicket: MatchmakingTicketSchema.and(
      z
        .any()
        .openapi({
          description:
            'Ticket representing the matchmaking request. This object include the information included in the request, ticket status, and match results as generated during the matchmaking process.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartMatchmakingOutput')

const StartMatchmakingInputSchema = z
  .object({
    TicketId: MatchmakingIdStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a UUID. Use this identifier to track the matchmaking ticket status and retrieve match results.',
        }),
    ).exactOptional(),
    ConfigurationName: MatchmakingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the matchmaking configuration to use for this request. Matchmaking configurations must exist in the same Region as this request. You can use either the configuration name or ARN value.',
        }),
    ),
    Players: PlayerListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information on each player to be matched. This information must include a player ID, and may contain player attributes and latency data to be used in the matchmaking process. After a successful match, <code>Player</code> objects contain the name of the team the player is assigned to.</p> <p>You can include up to 10 <code>Players</code> in a <code>StartMatchmaking</code> request.</p>',
        }),
    ),
  })
  .openapi({ required: ['ConfigurationName', 'Players'], title: 'StartMatchmakingInput' })
  .openapi('StartMatchmakingInput')

const StopFleetActionsOutputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the fleet to stop actions on.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopFleetActionsOutput')

const StopFleetActionsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to stop actions on. You can use either the fleet ID or ARN value.',
        }),
    ),
    Actions: FleetActionListSchema.and(
      z.any().openapi({ description: 'List of actions to suspend on the fleet. ' }),
    ),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet location to stop fleet actions for. Specify a location in the form of an Amazon Web Services Region code, such as <code>us-west-2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId', 'Actions'], title: 'StopFleetActionsInput' })
  .openapi('StopFleetActionsInput')

const StopGameSessionPlacementOutputSchema = z
  .object({
    GameSessionPlacement: GameSessionPlacementSchema.and(
      z
        .any()
        .openapi({
          description:
            'Object that describes the canceled game session placement, with <code>CANCELLED</code> status and an end time stamp. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopGameSessionPlacementOutput')

const StopGameSessionPlacementInputSchema = z
  .object({
    PlacementId: IdStringModelSchema.and(
      z.any().openapi({ description: 'A unique identifier for a game session placement to stop.' }),
    ),
  })
  .openapi({ required: ['PlacementId'], title: 'StopGameSessionPlacementInput' })
  .openapi('StopGameSessionPlacementInput')

const StopMatchmakingOutputSchema = z.object({}).openapi('StopMatchmakingOutput')

const StopMatchmakingInputSchema = z
  .object({
    TicketId: MatchmakingIdStringModelSchema.and(
      z.any().openapi({ description: 'A unique identifier for a matchmaking ticket.' }),
    ),
  })
  .openapi({ required: ['TicketId'], title: 'StopMatchmakingInput' })
  .openapi('StopMatchmakingInput')

const SuspendGameServerGroupOutputSchema = z
  .object({
    GameServerGroup: GameServerGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the game server group resource, with the <code>SuspendedActions</code> property updated to reflect the suspended activity.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SuspendGameServerGroupOutput')

const SuspendGameServerGroupInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group. Use either the name or ARN value.',
        }),
    ),
    SuspendActions: GameServerGroupActionsSchema.and(
      z.any().openapi({ description: 'The activity to suspend for this game server group.' }),
    ),
  })
  .openapi({
    required: ['GameServerGroupName', 'SuspendActions'],
    title: 'SuspendGameServerGroupInput',
  })
  .openapi('SuspendGameServerGroupInput')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies the Amazon GameLift resource that you want to assign tags to. Amazon GameLift includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a <code>List</code> or <code>Describe</code> operation for the resource type. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more tags to assign to the specified Amazon GameLift resource. Tags are developer-defined and structured as key-value pairs. The maximum tag limit may be lower than stated. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> for tagging limits.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies the Amazon GameLift resource that you want to remove tags from. Amazon GameLift includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a <code>List</code> or <code>Describe</code> operation for the resource type. ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more tag keys to remove from the specified Amazon GameLift resource. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAliasOutputSchema = z
  .object({
    Alias: AliasSchema.and(
      z.any().openapi({ description: 'The updated alias resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAliasOutput')

const UpdateAliasInputSchema = z
  .object({
    AliasId: AliasIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the alias that you want to update. You can use either the alias ID or ARN value.',
        }),
    ),
    Name: NonBlankAndLengthConstraintStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with an alias. Alias names do not need to be unique.',
        }),
    ).exactOptional(),
    Description: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A human-readable description of the alias.' }),
    ).exactOptional(),
    RoutingStrategy: RoutingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The routing configuration, including routing type and fleet target, for the alias.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AliasId'], title: 'UpdateAliasInput' })
  .openapi('UpdateAliasInput')

const UpdateBuildOutputSchema = z
  .object({
    Build: BuildSchema.and(
      z.any().openapi({ description: 'The updated build resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBuildOutput')

const UpdateBuildInputSchema = z
  .object({
    BuildId: BuildIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the build to update. You can use either the build ID or ARN value. ',
        }),
    ),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A descriptive label associated with a build. Build names don't need to be unique. ",
        }),
    ).exactOptional(),
    Version: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Version information associated with a build or script. Version strings don't need to be unique.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['BuildId'], title: 'UpdateBuildInput' })
  .openapi('UpdateBuildInput')

const UpdateFleetAttributesOutputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the fleet that was updated.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFleetAttributesOutput')

const UpdateFleetAttributesInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to update attribute metadata for. You can use either the fleet ID or ARN value.',
        }),
    ),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a fleet. Fleet names do not need to be unique.',
        }),
    ).exactOptional(),
    Description: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A human-readable description of a fleet.' }),
    ).exactOptional(),
    NewGameSessionProtectionPolicy: ProtectionPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The game session protection policy to apply to all new instances created in this fleet. Instances that already exist are not affected. You can set protection for individual instances using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> .</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ResourceCreationLimitPolicy: ResourceCreationLimitPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Policy settings that limit the number of game sessions an individual player can create over a span of time. ',
        }),
    ).exactOptional(),
    MetricGroups: MetricGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a metric group to add this fleet to. Use a metric group in Amazon CloudWatch to aggregate the metrics from multiple fleets. Provide an existing metric group name, or create a new metric group by providing a new name. A fleet can only be in one metric group at a time.',
        }),
    ).exactOptional(),
    AnywhereConfiguration: AnywhereConfigurationSchema.and(
      z.any().openapi({ description: 'Amazon GameLift Anywhere configuration options.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'UpdateFleetAttributesInput' })
  .openapi('UpdateFleetAttributesInput')

const UpdateFleetCapacityOutputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the fleet that was updated.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. ',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The remote location being updated, expressed as an Amazon Web Services Region code, such as <code>us-west-2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFleetCapacityOutput')

const UpdateFleetCapacityInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to update capacity settings for. You can use either the fleet ID or ARN value.',
        }),
    ),
    DesiredInstances: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.',
        }),
    ).exactOptional(),
    MinSize: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 0.',
        }),
    ).exactOptional(),
    MaxSize: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 1.',
        }),
    ).exactOptional(),
    Location: LocationStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a remote location to update fleet capacity settings for, in the form of an Amazon Web Services Region code such as <code>us-west-2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'UpdateFleetCapacityInput' })
  .openapi('UpdateFleetCapacityInput')

const UpdateFleetPortSettingsOutputSchema = z
  .object({
    FleetId: FleetIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the fleet that was updated.' }),
    ).exactOptional(),
    FleetArn: FleetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFleetPortSettingsOutput')

const UpdateFleetPortSettingsInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to update port settings for. You can use either the fleet ID or ARN value.',
        }),
    ),
    InboundPermissionAuthorizations: IpPermissionsListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of port settings to be added to the fleet resource.',
        }),
    ).exactOptional(),
    InboundPermissionRevocations: IpPermissionsListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of port settings to be removed from the fleet resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetId'], title: 'UpdateFleetPortSettingsInput' })
  .openapi('UpdateFleetPortSettingsInput')

const UpdateGameServerOutputSchema = z
  .object({
    GameServer: GameServerSchema.and(
      z.any().openapi({ description: 'Object that describes the newly updated game server.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGameServerOutput')

const GameServerHealthCheckSchema = z.literal('HEALTHY').openapi('GameServerHealthCheck')

const UpdateGameServerInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group where the game server is running.',
        }),
    ),
    GameServerId: GameServerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A custom string that uniquely identifies the game server to update.',
        }),
    ),
    GameServerData: GameServerDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers. ',
        }),
    ).exactOptional(),
    UtilizationStatus: GameServerUtilizationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the game server is available or is currently hosting gameplay.',
        }),
    ).exactOptional(),
    HealthCheck: GameServerHealthCheckSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates health status of the game server. A request that includes this parameter updates the game server's <i>LastHealthCheckTime</i> timestamp. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameServerGroupName', 'GameServerId'], title: 'UpdateGameServerInput' })
  .openapi('UpdateGameServerInput')

const UpdateGameServerGroupOutputSchema = z
  .object({
    GameServerGroup: GameServerGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the game server group resource with updated properties. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGameServerGroupOutput')

const UpdateGameServerGroupInputSchema = z
  .object({
    GameServerGroupName: GameServerGroupNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the game server group. Use either the name or ARN value.',
        }),
    ),
    RoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.',
        }),
    ).exactOptional(),
    InstanceDefinitions: InstanceDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An updated list of Amazon EC2 instance types to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by Amazon GameLift FleetIQ. This updated list replaces the entire current list of instance definitions for the game server group. For more information on instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">EC2 Instance Types</a> in the <i>Amazon EC2 User Guide</i>. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html"> Instance Weighting for Amazon EC2 Auto Scaling</a> in the Amazon EC2 Auto Scaling User Guide.',
        }),
    ).exactOptional(),
    GameServerProtectionPolicy: GameServerProtectionPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.',
        }),
    ).exactOptional(),
    BalancingStrategy: BalancingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:</p> <ul> <li> <p> <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.</p> </li> <li> <p> <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.</p> </li> <li> <p> <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameServerGroupName'], title: 'UpdateGameServerGroupInput' })
  .openapi('UpdateGameServerGroupInput')

const UpdateGameSessionOutputSchema = z
  .object({
    GameSession: GameSessionSchema.and(
      z.any().openapi({ description: 'The updated game session properties.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGameSessionOutput')

const UpdateGameSessionInputSchema = z
  .object({
    GameSessionId: ArnStringModelSchema.and(
      z.any().openapi({ description: 'A unique identifier for the game session to update. ' }),
    ),
    MaximumPlayerSessionCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of players that can be connected simultaneously to the game session.',
        }),
    ).exactOptional(),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with a game session. Session names do not need to be unique.',
        }),
    ).exactOptional(),
    PlayerSessionCreationPolicy: PlayerSessionCreationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'A policy that determines whether the game session is accepting new players.',
        }),
    ).exactOptional(),
    ProtectionPolicy: ProtectionPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Game session protection policy to apply to this game session only.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GameSessionId'], title: 'UpdateGameSessionInput' })
  .openapi('UpdateGameSessionInput')

const UpdateGameSessionQueueOutputSchema = z
  .object({
    GameSessionQueue: GameSessionQueueSchema.and(
      z
        .any()
        .openapi({ description: 'An object that describes the newly updated game session queue.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGameSessionQueueOutput')

const UpdateGameSessionQueueInputSchema = z
  .object({
    Name: GameSessionQueueNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. ',
        }),
    ),
    TimeoutInSeconds: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.',
        }),
    ).exactOptional(),
    PlayerLatencyPolicies: PlayerLatencyPolicyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of policies that act as a sliding cap on player latency. FleetIQ works to deliver low latency for most players in a game session. These policies ensure that no individual player can be placed into a game with unreasonably high latency. Use multiple policies to gradually relax latency requirements a step at a time. Multiple policies are applied based on their maximum allowed latency, starting with the lowest value. When updating policies, provide a complete collection of policies.',
        }),
    ).exactOptional(),
    Destinations: GameSessionQueueDestinationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference. When updating this list, provide a complete list of destinations.',
        }),
    ).exactOptional(),
    FilterConfiguration: FilterConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is not set, game sessions can be placed in any queue location. To remove an existing filter configuration, pass in an empty set.',
        }),
    ).exactOptional(),
    PriorityConfiguration: PriorityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process. To remove an existing priority configuration, pass in an empty set.',
        }),
    ).exactOptional(),
    CustomEventData: QueueCustomEventDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to be added to all events that are related to this game session queue.',
        }),
    ).exactOptional(),
    NotificationTarget: QueueSnsArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'An SNS topic ARN that is set up to receive game session placement notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up notifications for game session placement</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateGameSessionQueueInput' })
  .openapi('UpdateGameSessionQueueInput')

const UpdateMatchmakingConfigurationOutputSchema = z
  .object({
    Configuration: MatchmakingConfigurationSchema.and(
      z.any().openapi({ description: 'The updated matchmaking configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateMatchmakingConfigurationOutput')

const UpdateMatchmakingConfigurationInputSchema = z
  .object({
    Name: MatchmakingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking configuration to update. You can use either the configuration name or ARN value. ',
        }),
    ),
    Description: NonZeroAndMaxStringSchema.and(
      z.any().openapi({ description: 'A description for the matchmaking configuration.' }),
    ).exactOptional(),
    GameSessionQueueArns: QueueArnsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:&lt;region&gt;::gamesessionqueue/&lt;queue name&gt;</code>. Queues can be located in any Region. Queues are used to start new Amazon GameLift-hosted game sessions for matches that are created with this matchmaking configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not set this parameter.',
        }),
    ).exactOptional(),
    RequestTimeoutSeconds: MatchmakingRequestTimeoutIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.',
        }),
    ).exactOptional(),
    AcceptanceTimeoutSeconds: MatchmakingAcceptanceTimeoutIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.',
        }),
    ).exactOptional(),
    AcceptanceRequired: BooleanModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. With this option enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate when a completed potential match is waiting for player acceptance. ',
        }),
    ).exactOptional(),
    RuleSetName: MatchmakingRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region.',
        }),
    ).exactOptional(),
    NotificationTarget: SnsArnStringModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'An SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Setting up notifications for matchmaking</a> for more information.',
        }),
    ).exactOptional(),
    AdditionalPlayerCount: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.",
        }),
    ).exactOptional(),
    CustomEventData: CustomEventDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to add to all events related to the matchmaking configuration. ',
        }),
    ).exactOptional(),
    GameProperties: GamePropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <code>GameSession</code> object that is created for a successful match. This parameter is not used if <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    GameSessionData: GameSessionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the game session that is created for a successful match. This parameter is not used if <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    BackfillMode: BackfillModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The method that is used to backfill game sessions created with this matchmaking configuration. Specify MANUAL when your game manages backfill requests manually or does not use the match backfill feature. Specify AUTOMATIC to have GameLift create a match backfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">Backfill Existing Games with FlexMatch</a>. Automatic backfill is not available when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.',
        }),
    ).exactOptional(),
    FlexMatchMode: FlexMatchModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. </p> <ul> <li> <p> <b>STANDALONE</b> - FlexMatch forms matches and returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p> </li> <li> <p> <b>WITH_QUEUE</b> - FlexMatch forms matches and uses the specified Amazon GameLift queue to start a game session for the match. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateMatchmakingConfigurationInput' })
  .openapi('UpdateMatchmakingConfigurationInput')

const UpdateRuntimeConfigurationOutputSchema = z
  .object({
    RuntimeConfiguration: RuntimeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The runtime configuration currently in use by all instances in the fleet. If the update was successful, all property changes are shown. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRuntimeConfigurationOutput')

const UpdateRuntimeConfigurationInputSchema = z
  .object({
    FleetId: FleetIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the fleet to update runtime configuration for. You can use either the fleet ID or ARN value.',
        }),
    ),
    RuntimeConfiguration: RuntimeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime Servers script. The runtime configuration lists the types of server processes to run on an instance, how to launch them, and the number of processes to run concurrently.',
        }),
    ),
  })
  .openapi({
    required: ['FleetId', 'RuntimeConfiguration'],
    title: 'UpdateRuntimeConfigurationInput',
  })
  .openapi('UpdateRuntimeConfigurationInput')

const UpdateScriptOutputSchema = z
  .object({
    Script: ScriptSchema.and(
      z
        .any()
        .openapi({
          description:
            "The newly created script record with a unique script ID. The new script's storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket under your account, the storage location reflects the information that was provided in the <i>CreateScript</i> request; (2) If the script file was uploaded from a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift service.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateScriptOutput')

const UpdateScriptInputSchema = z
  .object({
    ScriptId: ScriptIdOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the Realtime script to update. You can use either the script ID or ARN value.',
        }),
    ),
    Name: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A descriptive label that is associated with a script. Script names don't need to be unique.",
        }),
    ).exactOptional(),
    Version: NonZeroAndMaxStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Version information associated with a build or script. Version strings don't need to be unique.",
        }),
    ).exactOptional(),
    StorageLocation: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier version. ',
        }),
    ).exactOptional(),
    ZipFile: ZipBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A data object containing your Realtime scripts and dependencies as a zip file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB.</p> <p>When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the string "fileb://" to indicate that the file data is a binary object. For example: <code>--zip-file fileb://myRealtimeScript.zip</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ScriptId'], title: 'UpdateScriptInput' })
  .openapi('UpdateScriptInput')

const ValidateMatchmakingRuleSetOutputSchema = z
  .object({
    Valid: BooleanModelSchema.and(
      z.any().openapi({ description: 'A response indicating whether the rule set is valid.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidateMatchmakingRuleSetOutput')

const ValidateMatchmakingRuleSetInputSchema = z
  .object({
    RuleSetBody: RuleSetBodySchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of matchmaking rules to validate, formatted as a JSON string.',
        }),
    ),
  })
  .openapi({ required: ['RuleSetBody'], title: 'ValidateMatchmakingRuleSetInput' })
  .openapi('ValidateMatchmakingRuleSetInput')

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

export const postXAmzTargetGameLiftAcceptMatchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.AcceptMatch',
  description:
    '<p>Registers a player\'s acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match or failed to respond, the ticket status is set to <code>CANCELLED</code>, and processing is terminated. For tickets where players have accepted or not yet responded, the ticket status is returned to <code>SEARCHING</code> to find a new match. A new matchmaking request for these players can be submitted as needed. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch events</a> (reference)</p>',
  operationId: 'AcceptMatch',
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
        .literal('GameLift.AcceptMatch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.AcceptMatch'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptMatchInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptMatchOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftClaimGameServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ClaimGameServer',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in <code>CLAIMED</code> status for 60 seconds, and returns connection information that players can use to connect to the game server. </p> <p>To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. </p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server\'s utilization status remains <code>AVAILABLE</code> while the claim status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the game server time to update its status to <code>UTILIZED</code> after players join. If the game server\'s status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.</p> <p>If you try to claim a specific game server, this request will fail in the following cases:</p> <ul> <li> <p>If the game server utilization status is <code>UTILIZED</code>.</p> </li> <li> <p>If the game server claim status is <code>CLAIMED</code>.</p> </li> </ul> <note> <p>When claiming a specific game server, this request will succeed even if the game server is running on an instance in <code>DRAINING</code> status. To avoid this, first check the instance status by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html">DescribeGameServerInstances</a> .</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'ClaimGameServer',
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
        .literal('GameLift.ClaimGameServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ClaimGameServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClaimGameServerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ClaimGameServerOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'OutOfCapacityException',
      content: { 'application/json': { schema: OutOfCapacityExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateAlias',
  description:
    '<p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreateAlias',
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
        .literal('GameLift.CreateAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateAlias'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateAliasInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAliasOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateBuildRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateBuild',
  description:
    '<p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to a Amazon GameLift Amazon S3 location, and (2) it creates a new build resource.</p> </important> <p>You can use the operation in the following scenarios:</p> <ul> <li> <p>To create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build.</p> </li> <li> <p>To directly upload your build files to a Amazon GameLift Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. After you upload build files to the Amazon GameLift Amazon S3 location, you can\'t update them. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreateBuild',
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
        .literal('GameLift.CreateBuild')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateBuild'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateBuildInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBuildOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateFleet',
  description:
    '<p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your custom game server or Realtime Servers. Use this operation to configure the computing resources for your fleet and provide instructions for running game servers on each instance.</p> <p>Most Amazon GameLift fleets can deploy instances to multiple locations, including the home Region (where the fleet is created) and an optional set of remote locations. Fleets that are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N. Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland), ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that are created in other Amazon GameLift Regions can deploy instances in the fleet\'s home Region only. All fleet instances use the same configuration regardless of location; however, you can adjust capacity settings and turn auto-scaling on/off for each location.</p> <p>To create a fleet, choose the hardware for your instances, specify a game server build or Realtime script to deploy, and provide a runtime configuration to direct Amazon GameLift how to start and run game servers on each instance in the fleet. Set permissions for inbound traffic to your game servers, and enable optional features as needed. When creating a multi-location fleet, provide a list of additional remote locations.</p> <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create the development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you\'re finished. </p> <p>If successful, this operation creates a new Fleet resource and places it in <code>NEW</code> status, which prompts Amazon GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>',
  operationId: 'CreateFleet',
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
        .literal('GameLift.CreateFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateFleet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateFleetInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFleetOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    486: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    487: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateFleetLocationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateFleetLocations',
  description:
    '<p>Adds remote locations to a fleet and begins populating the new locations with EC2 instances. The new instances conform to the fleet\'s instance type, auto-scaling, and other configuration settings. </p> <note> <p>This operation cannot be used with fleets that don\'t support remote locations. Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support this feature and were created after the feature was released in March 2021.</p> </note> <p>To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. </p> <p>If successful, this operation returns the list of added locations with their status set to <code>NEW</code>. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>',
  operationId: 'CreateFleetLocations',
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
        .literal('GameLift.CreateFleetLocations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateFleetLocations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFleetLocationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFleetLocationsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidFleetStatusException',
      content: { 'application/json': { schema: InvalidFleetStatusExceptionSchema } },
    },
    485: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateGameServerGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateGameServerGroup',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Before creating a new game server group, you must have the following: </p> <ul> <li> <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> </li> <li> <p>An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>Amazon GameLift FleetIQ Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group\'s instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group\'s configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'CreateGameServerGroup',
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
        .literal('GameLift.CreateGameServerGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateGameServerGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGameServerGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGameServerGroupOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateGameSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateGameSession',
  description:
    '<p>Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to optimize the placement process.</p> <p>When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The fleet must be in <code>ACTIVE</code> status before a game session can be created in it. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To create a game session on an instance in a fleet\'s home Region, provide a fleet or alias ID along with your game session configuration. </p> </li> <li> <p>To create a game session on an instance in a fleet\'s remote location, provide a fleet or alias ID and a location name, along with your game session configuration. </p> </li> </ul> <p>If successful, a workflow is initiated to start a new game session. A <code>GameSession</code> object is returned containing the game session configuration and status. When the status is <code>ACTIVE</code>, game session connection information is provided and player sessions can be created for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session\'s player session creation policy.</p> <p>Game session logs are retained for all active game sessions for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreateGameSession',
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
        .literal('GameLift.CreateGameSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateGameSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGameSessionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGameSessionOutputSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InvalidFleetStatusException',
      content: { 'application/json': { schema: InvalidFleetStatusExceptionSchema } },
    },
    484: {
      description: 'TerminalRoutingStrategyException',
      content: { 'application/json': { schema: TerminalRoutingStrategyExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    487: {
      description: 'FleetCapacityExceededException',
      content: { 'application/json': { schema: FleetCapacityExceededExceptionSchema } },
    },
    488: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    489: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    490: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateGameSessionQueueRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateGameSessionQueue',
  description:
    '<p>Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session. </p> <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet\'s remote locations. You can opt to filter out individual locations if needed.</p> <p>The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue\'s destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities.</p> <p>To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity.</p> <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue\'s name or ARN. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a game session queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a game session queue</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreateGameSessionQueue',
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
        .literal('GameLift.CreateGameSessionQueue')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateGameSessionQueue'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGameSessionQueueInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGameSessionQueueOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateLocationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateLocation',
  description: 'Creates a custom location for use in an Anywhere fleet.',
  operationId: 'CreateLocation',
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
        .literal('GameLift.CreateLocation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateLocation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    485: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateMatchmakingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateMatchmakingConfiguration',
  description:
    '<p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you\'re also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. </p> <p>To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match.</p> <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event notification</a> </p>',
  operationId: 'CreateMatchmakingConfiguration',
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
        .literal('GameLift.CreateMatchmakingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateMatchmakingConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateMatchmakingConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMatchmakingConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
    485: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateMatchmakingRuleSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateMatchmakingRuleSet',
  description:
    '<p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.</p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul>',
  operationId: 'CreateMatchmakingRuleSet',
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
        .literal('GameLift.CreateMatchmakingRuleSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateMatchmakingRuleSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateMatchmakingRuleSetInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMatchmakingRuleSetOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
    484: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreatePlayerSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreatePlayerSession',
  description:
    '<p>Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p> <p>To create a player session, specify a game session ID, player ID, and optionally a set of player data. </p> <p>If successful, a slot is reserved in the game session for the player and a new <code>PlayerSessions</code> object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. </p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreatePlayerSession',
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
        .literal('GameLift.CreatePlayerSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreatePlayerSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePlayerSessionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePlayerSessionOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InvalidGameSessionStatusException',
      content: { 'application/json': { schema: InvalidGameSessionStatusExceptionSchema } },
    },
    483: {
      description: 'GameSessionFullException',
      content: { 'application/json': { schema: GameSessionFullExceptionSchema } },
    },
    484: {
      description: 'TerminalRoutingStrategyException',
      content: { 'application/json': { schema: TerminalRoutingStrategyExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreatePlayerSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreatePlayerSessions',
  description:
    '<p>Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a> </p> <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. </p> <p>If successful, a slot is reserved in the game session for each player, and new <code>PlayerSession</code> objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.</p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreatePlayerSessions',
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
        .literal('GameLift.CreatePlayerSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreatePlayerSessions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePlayerSessionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePlayerSessionsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InvalidGameSessionStatusException',
      content: { 'application/json': { schema: InvalidGameSessionStatusExceptionSchema } },
    },
    483: {
      description: 'GameSessionFullException',
      content: { 'application/json': { schema: GameSessionFullExceptionSchema } },
    },
    484: {
      description: 'TerminalRoutingStrategyException',
      content: { 'application/json': { schema: TerminalRoutingStrategyExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateScriptRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateScript',
  description:
    '<p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the <i>StorageLocation</i> parameter for this option. You\'ll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record\'s storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreateScript',
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
        .literal('GameLift.CreateScript')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateScript'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateScriptInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateScriptOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateVpcPeeringAuthorizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization',
  description:
    '<p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you\'ve received authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreateVpcPeeringAuthorization',
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
        .literal('GameLift.CreateVpcPeeringAuthorization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateVpcPeeringAuthorization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateVpcPeeringAuthorizationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVpcPeeringAuthorizationOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftCreateVpcPeeringConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.CreateVpcPeeringConnection',
  description:
    '<p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request\'s status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'CreateVpcPeeringConnection',
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
        .literal('GameLift.CreateVpcPeeringConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.CreateVpcPeeringConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateVpcPeeringConnectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVpcPeeringConnectionOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteAlias',
  description:
    '<p>Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DeleteAlias',
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
        .literal('GameLift.DeleteAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteAlias'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteAliasInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteBuildRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteBuild',
  description:
    '<p>Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DeleteBuild',
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
        .literal('GameLift.DeleteBuild')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteBuild'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteBuildInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteFleet',
  description:
    '<p>Deletes all resources and information related a fleet. Any current fleet instances, including those in remote locations, are shut down. You don\'t need to call <code>DeleteFleetLocations</code> separately.</p> <note> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection.</p> </note> <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process the fleet status is changed to <code>DELETING</code>. When completed, the status switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>',
  operationId: 'DeleteFleet',
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
        .literal('GameLift.DeleteFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteFleet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteFleetInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'InvalidFleetStatusException',
      content: { 'application/json': { schema: InvalidFleetStatusExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteFleetLocationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteFleetLocations',
  description:
    '<p>Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. </p> <p>To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. </p> <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to <code>TERMINATED</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'DeleteFleetLocations',
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
        .literal('GameLift.DeleteFleetLocations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteFleetLocations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFleetLocationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFleetLocationsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteGameServerGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteGameServerGroup',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:</p> <ul> <li> <p>The game server group</p> </li> <li> <p>The corresponding Auto Scaling group</p> </li> <li> <p>All game servers that are currently running in the group</p> </li> </ul> <p>To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in <code>ACTIVE</code> or <code>ERROR</code> status.</p> <p>If the delete request is successful, a series of operations are kicked off. The game server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in <code>ERROR</code> status.</p> <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'DeleteGameServerGroup',
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
        .literal('GameLift.DeleteGameServerGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteGameServerGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteGameServerGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGameServerGroupOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteGameSessionQueueRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteGameSessionQueue',
  description:
    'Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To delete a queue, specify the queue name.',
  operationId: 'DeleteGameSessionQueue',
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
        .literal('GameLift.DeleteGameSessionQueue')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteGameSessionQueue'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteGameSessionQueueInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGameSessionQueueOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteLocationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteLocation',
  description:
    '<p>Deletes a custom location.</p> <p>Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information see, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html">DeregisterCompute</a>.</p>',
  operationId: 'DeleteLocation',
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
        .literal('GameLift.DeleteLocation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteLocation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLocationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLocationOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteMatchmakingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration',
  description:
    'Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.',
  operationId: 'DeleteMatchmakingConfiguration',
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
        .literal('GameLift.DeleteMatchmakingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteMatchmakingConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMatchmakingConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMatchmakingConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
    484: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteMatchmakingRuleSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet',
  description:
    '<p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>',
  operationId: 'DeleteMatchmakingRuleSet',
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
        .literal('GameLift.DeleteMatchmakingRuleSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteMatchmakingRuleSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMatchmakingRuleSetInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMatchmakingRuleSetOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteScalingPolicy',
  description:
    '<p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the fleet.</p>',
  operationId: 'DeleteScalingPolicy',
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
        .literal('GameLift.DeleteScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteScalingPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteScriptRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteScript',
  description:
    '<p>Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DeleteScript',
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
        .literal('GameLift.DeleteScript')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteScript'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteScriptInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteVpcPeeringAuthorizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization',
  description:
    '<p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DeleteVpcPeeringAuthorization',
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
        .literal('GameLift.DeleteVpcPeeringAuthorization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteVpcPeeringAuthorization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteVpcPeeringAuthorizationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVpcPeeringAuthorizationOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeleteVpcPeeringConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeleteVpcPeeringConnection',
  description:
    '<p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. </p> <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DeleteVpcPeeringConnection',
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
        .literal('GameLift.DeleteVpcPeeringConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeleteVpcPeeringConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteVpcPeeringConnectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVpcPeeringConnectionOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeregisterComputeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeregisterCompute',
  description:
    'Removes a compute resource from the specified fleet. Deregister your compute resources before you delete the compute.',
  operationId: 'DeregisterCompute',
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
        .literal('GameLift.DeregisterCompute')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeregisterCompute'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterComputeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterComputeOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDeregisterGameServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DeregisterGameServer',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. </p> <p>To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'DeregisterGameServer',
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
        .literal('GameLift.DeregisterGameServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DeregisterGameServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterGameServerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeAlias',
  description:
    '<p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias\'s target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribeAlias',
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
        .literal('GameLift.DescribeAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeAlias'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeAliasInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAliasOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeBuildRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeBuild',
  description:
    '<p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribeBuild',
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
        .literal('GameLift.DescribeBuild')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeBuild'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeBuildInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBuildOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeComputeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeCompute',
  description:
    'Retrieves properties for a compute resource. To request a compute resource specify the fleet ID and compute name. If successful, Amazon GameLift returns an object containing the build properties.',
  operationId: 'DescribeCompute',
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
        .literal('GameLift.DescribeCompute')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeCompute'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeComputeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeComputeOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeEC2InstanceLimitsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeEC2InstanceLimits',
  description:
    '<p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information returned includes the maximum number of instances allowed and your account\'s current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.</p> <p>Instance limits differ based on whether the instances are deployed in a fleet\'s home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results: </p> <ul> <li> <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The result is limits and usage data on all instance types that are deployed in <code>us-east-2</code>, by all of the fleets that reside in <code>ap-northeast-1</code>. </p> </li> <li> <p>Request specifies the Region <code>us-east-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>us-east-2</code>. These limits do not affect fleets in any other Regions that deploy instances to <code>ca-central-1</code>.</p> </li> <li> <p>Request specifies the Region <code>eu-west-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>eu-west-1</code>.</p> </li> </ul> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.</p> </li> <li> <p>To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.</p> </li> </ul> <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and usage data for each requested instance type.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'DescribeEC2InstanceLimits',
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
        .literal('GameLift.DescribeEC2InstanceLimits')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeEC2InstanceLimits'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEC2InstanceLimitsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEC2InstanceLimitsOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeFleetAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeFleetAttributes',
  description:
    '<p>Retrieves core fleet-wide properties, including the computing hardware and deployment configuration for all instances in the fleet.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get attributes for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get attributes for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet requested, unless the fleet identifier is not found. </p> <note> <p>Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'DescribeFleetAttributes',
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
        .literal('GameLift.DescribeFleetAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeFleetAttributes'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeFleetAttributesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetAttributesOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeFleetCapacityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeFleetCapacity',
  description:
    '<p>Retrieves the resource capacity settings for one or more fleets. The data returned includes the current fleet capacity (number of EC2 instances), and settings that can control how capacity scaling. For fleets with remote locations, this operation retrieves data for the fleet\'s home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get capacity data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for each requested fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is set to the fleet\'s home Region. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>',
  operationId: 'DescribeFleetCapacity',
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
        .literal('GameLift.DescribeFleetCapacity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeFleetCapacity'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeFleetCapacityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetCapacityOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeFleetEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeFleetEvents',
  description:
    '<p>Retrieves entries from a fleet\'s event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations. </p> <p>You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'DescribeFleetEvents',
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
        .literal('GameLift.DescribeFleetEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeFleetEvents'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeFleetEventsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetEventsOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeFleetLocationAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeFleetLocationAttributes',
  description:
    '<p>Retrieves information on a fleet\'s remote locations, including life-cycle status and any suspended fleet activity. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. </p> </li> <li> <p>To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. </p> </li> </ul> <p>When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>LocationAttributes</code> object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet\'s home Region, call <code>DescribeFleetAttributes</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'DescribeFleetLocationAttributes',
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
        .literal('GameLift.DescribeFleetLocationAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeFleetLocationAttributes'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeFleetLocationAttributesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetLocationAttributesOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeFleetLocationCapacityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeFleetLocationCapacity',
  description:
    '<p>Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. Use this operation to retrieve capacity information for a fleet\'s remote location or home Region (you can also retrieve home Region capacity by calling <code>DescribeFleetCapacity</code>).</p> <p>To retrieve capacity data, identify a fleet and location. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>',
  operationId: 'DescribeFleetLocationCapacity',
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
        .literal('GameLift.DescribeFleetLocationCapacity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeFleetLocationCapacity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFleetLocationCapacityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetLocationCapacityOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeFleetLocationUtilizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeFleetLocationUtilization',
  description:
    '<p>Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet\'s remote location or home Region (you can also retrieve home Region utilization by calling <code>DescribeFleetUtilization</code>).</p> <p>To retrieve utilization data, identify a fleet and location. </p> <p>If successful, a <code>FleetUtilization</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>',
  operationId: 'DescribeFleetLocationUtilization',
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
        .literal('GameLift.DescribeFleetLocationUtilization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeFleetLocationUtilization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFleetLocationUtilizationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetLocationUtilizationOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeFleetPortSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeFleetPortSettings',
  description:
    '<p>Retrieves a fleet\'s inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet must use connections that fall in this range.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve the inbound connection permissions for a fleet, identify the fleet\'s unique identifier. </p> </li> <li> <p>To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. </p> </li> </ul> <p>If successful, a set of <code>IpPermission</code> objects is returned for the requested fleet ID. When a location is specified, a pending status is included. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'DescribeFleetPortSettings',
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
        .literal('GameLift.DescribeFleetPortSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeFleetPortSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFleetPortSettingsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetPortSettingsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeFleetUtilizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeFleetUtilization',
  description:
    '<p>Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet\'s hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet\'s home Region only. See <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a fleet\'s remote locations.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get utilization data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a <code>Location</code> property, which is set to the fleet\'s home Region. </p> <note> <p>Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p>',
  operationId: 'DescribeFleetUtilization',
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
        .literal('GameLift.DescribeFleetUtilization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeFleetUtilization'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeFleetUtilizationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetUtilizationOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeGameServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeGameServer',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'DescribeGameServer',
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
        .literal('GameLift.DescribeGameServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeGameServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGameServerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGameServerOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeGameServerGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeGameServerGroup',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly.</p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'DescribeGameServerGroup',
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
        .literal('GameLift.DescribeGameServerGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeGameServerGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGameServerGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGameServerGroupOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeGameServerInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeGameServerInstances',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.</p> <p>To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of <code>GameServerInstance</code> objects is returned. </p> <p>This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'DescribeGameServerInstances',
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
        .literal('GameLift.DescribeGameServerInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeGameServerInstances'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeGameServerInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGameServerInstancesOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeGameSessionDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeGameSessionDetails',
  description:
    '<p>Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet\'s home Region and all remote locations.</p> </li> <li> <p>To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet\'s home Region or any remote location.</p> </li> <li> <p>To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSessionDetail</code> object is returned for each game session that matches the request.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribeGameSessionDetails',
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
        .literal('GameLift.DescribeGameSessionDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeGameSessionDetails'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeGameSessionDetailsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGameSessionDetailsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TerminalRoutingStrategyException',
      content: { 'application/json': { schema: TerminalRoutingStrategyExceptionSchema } },
    },
    485: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeGameSessionPlacementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeGameSessionPlacement',
  description:
    '<p>Retrieves information, including current status, about a game session placement request. </p> <p>To get game session placement details, specify the placement ID.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only be used for games in development with low game session usage. </p>',
  operationId: 'DescribeGameSessionPlacement',
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
        .literal('GameLift.DescribeGameSessionPlacement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeGameSessionPlacement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGameSessionPlacementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGameSessionPlacementOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeGameSessionQueuesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeGameSessionQueues',
  description:
    '<p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p>',
  operationId: 'DescribeGameSessionQueues',
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
        .literal('GameLift.DescribeGameSessionQueues')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeGameSessionQueues'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeGameSessionQueuesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGameSessionQueuesOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeGameSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeGameSessions',
  description:
    '<p>Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet\'s home Region and all remote locations.</p> </li> <li> <p>To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet\'s home Region or any remote location.</p> </li> <li> <p>To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribeGameSessions',
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
        .literal('GameLift.DescribeGameSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeGameSessions'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeGameSessionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGameSessionsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TerminalRoutingStrategyException',
      content: { 'application/json': { schema: TerminalRoutingStrategyExceptionSchema } },
    },
    485: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeInstances',
  description:
    '<p>Retrieves information about a fleet\'s instances, including instance IDs, connection data, and status. </p> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get information on all instances that are deployed to a fleet\'s home Region, provide the fleet ID.</p> </li> <li> <p>To get information on all instances that are deployed to a fleet\'s remote location, provide the fleet ID and location name.</p> </li> <li> <p>To get information on a specific instance in a fleet, provide the fleet ID and instance ID.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, an <code>Instance</code> object is returned for each requested instance. Instances are not returned in any particular order. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribeInstances',
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
        .literal('GameLift.DescribeInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeInstances'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInstancesOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeMatchmakingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeMatchmaking',
  description:
    '<p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.</p> <p/> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p>',
  operationId: 'DescribeMatchmaking',
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
        .literal('GameLift.DescribeMatchmaking')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeMatchmaking'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeMatchmakingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMatchmakingOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeMatchmakingConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations',
  description:
    '<p>Retrieves the details of FlexMatch matchmaking configurations. </p> <p>This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a> </p>',
  operationId: 'DescribeMatchmakingConfigurations',
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
        .literal('GameLift.DescribeMatchmakingConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeMatchmakingConfigurations'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeMatchmakingConfigurationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMatchmakingConfigurationsOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeMatchmakingRuleSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets',
  description:
    '<p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>',
  operationId: 'DescribeMatchmakingRuleSets',
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
        .literal('GameLift.DescribeMatchmakingRuleSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeMatchmakingRuleSets'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeMatchmakingRuleSetsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMatchmakingRuleSetsOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribePlayerSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribePlayerSessions',
  description:
    '<p>Retrieves properties for one or more player sessions. </p> <p>This action can be used in the following ways: </p> <ul> <li> <p>To retrieve a specific player session, provide the player session ID only.</p> </li> <li> <p>To retrieve all player sessions in a game session, provide the game session ID only.</p> </li> <li> <p>To retrieve all player sessions for a specific player, provide a player ID only.</p> </li> </ul> <p>To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>PlayerSession</code> object is returned for each session that matches the request.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribePlayerSessions',
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
        .literal('GameLift.DescribePlayerSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribePlayerSessions'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribePlayerSessionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePlayerSessionsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeRuntimeConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeRuntimeConfiguration',
  description:
    '<p>Retrieves a fleet\'s runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get the runtime configuration that is currently in forces for a fleet, provide the fleet ID. </p> <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple processes on a fleet</a> </p>',
  operationId: 'DescribeRuntimeConfiguration',
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
        .literal('GameLift.DescribeRuntimeConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeRuntimeConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRuntimeConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRuntimeConfigurationOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeScalingPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeScalingPolicies',
  description:
    "<p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <code>ScalingPolicy</code> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</p>",
  operationId: 'DescribeScalingPolicies',
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
        .literal('GameLift.DescribeScalingPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeScalingPolicies'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeScalingPoliciesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeScalingPoliciesOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeScriptRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeScript',
  description:
    '<p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribeScript',
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
        .literal('GameLift.DescribeScript')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeScript'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeScriptInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeScriptOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations',
  description:
    '<p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribeVpcPeeringAuthorizations',
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
        .literal('GameLift.DescribeVpcPeeringAuthorizations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeVpcPeeringAuthorizations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeVpcPeeringAuthorizationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVpcPeeringAuthorizationsOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftDescribeVpcPeeringConnectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.DescribeVpcPeeringConnections',
  description:
    '<p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'DescribeVpcPeeringConnections',
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
        .literal('GameLift.DescribeVpcPeeringConnections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.DescribeVpcPeeringConnections'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeVpcPeeringConnectionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVpcPeeringConnectionsOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftGetComputeAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.GetComputeAccess',
  description:
    '<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you\'re making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p>',
  operationId: 'GetComputeAccess',
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
        .literal('GameLift.GetComputeAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.GetComputeAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetComputeAccessInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComputeAccessOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftGetComputeAuthTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.GetComputeAuthToken',
  description:
    'Requests an authentication token from Amazon GameLift. The authentication token is used by your game server to authenticate with Amazon GameLift. Each authentication token has an expiration time. To continue using the compute resource to host your game server, regularly retrieve a new authorization token.',
  operationId: 'GetComputeAuthToken',
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
        .literal('GameLift.GetComputeAuthToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.GetComputeAuthToken'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetComputeAuthTokenInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComputeAuthTokenOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftGetGameSessionLogUrlRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.GetGameSessionLogUrl',
  description:
    '<p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'GetGameSessionLogUrl',
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
        .literal('GameLift.GetGameSessionLogUrl')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.GetGameSessionLogUrl'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetGameSessionLogUrlInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGameSessionLogUrlOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftGetInstanceAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.GetInstanceAccess',
  description:
    '<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you\'re making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet\'s instance IDs by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'GetInstanceAccess',
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
        .literal('GameLift.GetInstanceAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.GetInstanceAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstanceAccessInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceAccessOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListAliasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListAliases',
  description:
    '<p>Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'ListAliases',
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
        .literal('GameLift.ListAliases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListAliases'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: { content: { 'application/json': { schema: ListAliasesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAliasesOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListBuildsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListBuilds',
  description:
    '<p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'ListBuilds',
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
        .literal('GameLift.ListBuilds')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListBuilds'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: { content: { 'application/json': { schema: ListBuildsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBuildsOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListComputeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListCompute',
  description:
    'Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.',
  operationId: 'ListCompute',
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
        .literal('GameLift.ListCompute')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListCompute'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: { content: { 'application/json': { schema: ListComputeInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComputeOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListFleetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListFleets',
  description:
    '<p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your request. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get a list of all fleets in a Region, don\'t provide a build or script identifier. </p> </li> <li> <p>To get a list of all fleets where a specific custom game build is deployed, provide the build ID.</p> </li> <li> <p>To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID. </p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a list of fleet IDs that match the request parameters is returned. A NextToken value is also returned if there are more result pages to retrieve.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'ListFleets',
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
        .literal('GameLift.ListFleets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListFleets'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: { content: { 'application/json': { schema: ListFleetsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFleetsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListGameServerGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListGameServerGroups',
  description: 'Lists a game server groups.',
  operationId: 'ListGameServerGroups',
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
        .literal('GameLift.ListGameServerGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListGameServerGroups'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: ListGameServerGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGameServerGroupsOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListGameServersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListGameServers',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'ListGameServers',
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
        .literal('GameLift.ListGameServers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListGameServers'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: ListGameServersInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGameServersOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListLocationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListLocations',
  description: 'Lists all custom and Amazon Web Services locations.',
  operationId: 'ListLocations',
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
        .literal('GameLift.ListLocations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListLocations'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: { content: { 'application/json': { schema: ListLocationsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLocationsOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListScriptsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListScripts',
  description:
    '<p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'ListScripts',
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
        .literal('GameLift.ListScripts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListScripts'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: { content: { 'application/json': { schema: ListScriptsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListScriptsOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ListTagsForResource',
  description:
    '<p>Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
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
        .literal('GameLift.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ListTagsForResource'] },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftPutScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.PutScalingPolicy',
  description:
    "<p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>Learn more about how to work with auto-scaling in <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html\">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to \"TargetBased\". Specify the metric to track (PercentAvailableGameSessions) and reference a <code>TargetConfiguration</code> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: \"If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%.\"</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to \"RuleBased\". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p>",
  operationId: 'PutScalingPolicy',
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
        .literal('GameLift.PutScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.PutScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutScalingPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutScalingPolicyOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftRegisterComputeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.RegisterCompute',
  description:
    '<p>Registers your compute resources in a fleet you previously created. After you register a compute to your fleet, you can monitor and manage your compute using Amazon GameLift. The operation returns the compute resource containing SDK endpoint you can use to connect your game server to Amazon GameLift.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an Anywhere fleet</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your integration</a> </p> </li> </ul>',
  operationId: 'RegisterCompute',
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
        .literal('GameLift.RegisterCompute')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.RegisterCompute'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterComputeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterComputeOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftRegisterGameServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.RegisterGameServer',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.</p> <p>Once a game server is successfully registered, it is put in status <code>AVAILABLE</code>. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'RegisterGameServer',
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
        .literal('GameLift.RegisterGameServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.RegisterGameServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterGameServerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterGameServerOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftRequestUploadCredentialsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.RequestUploadCredentials',
  description:
    '<p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift\'s Amazon S3. This is done as part of the build creation process; see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'RequestUploadCredentials',
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
        .literal('GameLift.RequestUploadCredentials')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.RequestUploadCredentials'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestUploadCredentialsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RequestUploadCredentialsOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftResolveAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ResolveAlias',
  description:
    '<p>Retrieves the fleet ID that an alias is currently pointing to.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'ResolveAlias',
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
        .literal('GameLift.ResolveAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ResolveAlias'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResolveAliasInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResolveAliasOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TerminalRoutingStrategyException',
      content: { 'application/json': { schema: TerminalRoutingStrategyExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftResumeGameServerGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ResumeGameServerGroup',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a <code>GameServerGroup</code> object is returned showing that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'ResumeGameServerGroup',
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
        .literal('GameLift.ResumeGameServerGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ResumeGameServerGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResumeGameServerGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResumeGameServerGroupOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftSearchGameSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.SearchGameSessions',
  description:
    '<p>Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. </p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling game session status with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p>When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet\'s locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet\'s home Region and all remote locations that fit the search criteria.</p> </li> <li> <p>To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet\'s home Region or any remote location.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request. Search finds game sessions that are in <code>ACTIVE</code> status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p> <p>You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session\'s <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'SearchGameSessions',
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
        .literal('GameLift.SearchGameSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.SearchGameSessions'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: SearchGameSessionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchGameSessionsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TerminalRoutingStrategyException',
      content: { 'application/json': { schema: TerminalRoutingStrategyExceptionSchema } },
    },
    485: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftStartFleetActionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.StartFleetActions',
  description:
    '<p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet\'s auto-scaling activity.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To restart actions on instances in the fleet\'s home Region, provide a fleet ID and the type of actions to resume. </p> </li> <li> <p>To restart actions on instances in one of the fleet\'s remote locations, provide a fleet ID, a location name, and the type of actions to resume. </p> </li> </ul> <p>If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet\'s scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'StartFleetActions',
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
        .literal('GameLift.StartFleetActions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.StartFleetActions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartFleetActionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFleetActionsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftStartGameSessionPlacementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.StartGameSessionPlacement',
  description:
    "<p>Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a href=\"https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html\">DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p>",
  operationId: 'StartGameSessionPlacement',
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
        .literal('GameLift.StartGameSessionPlacement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.StartGameSessionPlacement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartGameSessionPlacementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartGameSessionPlacementOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftStartMatchBackfillRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.StartMatchBackfill',
  description:
    '<p>Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. </p> <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a <code>GameSessions</code> ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the <code>GameSession</code> resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request.</p> <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled.</p> <p>To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches.</p> <p>Only game sessions created by FlexMatch are supported for match backfill.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill existing games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> Matchmaking events</a> (reference)</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>',
  operationId: 'StartMatchBackfill',
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
        .literal('GameLift.StartMatchBackfill')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.StartMatchBackfill'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartMatchBackfillInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartMatchBackfillOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftStartMatchmakingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.StartMatchmaking',
  description:
    '<p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration\'s rule set. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p> <p>Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>',
  operationId: 'StartMatchmaking',
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
        .literal('GameLift.StartMatchmaking')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.StartMatchmaking'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartMatchmakingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartMatchmakingOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftStopFleetActionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.StopFleetActions',
  description:
    '<p>Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. </p> <p>Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To stop actions on instances in the fleet\'s home Region, provide a fleet ID and the type of actions to suspend. </p> </li> <li> <p>To stop actions on instances in one of the fleet\'s remote locations, provide a fleet ID, a location name, and the type of actions to suspend. </p> </li> </ul> <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>',
  operationId: 'StopFleetActions',
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
        .literal('GameLift.StopFleetActions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.StopFleetActions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopFleetActionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopFleetActionsOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftStopGameSessionPlacementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.StopGameSessionPlacement',
  description:
    'Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.',
  operationId: 'StopGameSessionPlacement',
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
        .literal('GameLift.StopGameSessionPlacement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.StopGameSessionPlacement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopGameSessionPlacementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopGameSessionPlacementOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftStopMatchmakingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.StopMatchmaking',
  description:
    '<p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p>',
  operationId: 'StopMatchmaking',
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
        .literal('GameLift.StopMatchmaking')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.StopMatchmaking'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopMatchmakingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopMatchmakingOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftSuspendGameServerGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.SuspendGameServerGroup',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p> <ul> <li> <p> <b>Instance type replacement</b> - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a <code>GameServerGroup</code> object is returned showing that the activity is listed in <code>SuspendedActions</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'SuspendGameServerGroup',
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
        .literal('GameLift.SuspendGameServerGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.SuspendGameServerGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SuspendGameServerGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SuspendGameServerGroupOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.TagResource',
  description:
    '<p>Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
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
        .literal('GameLift.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.TagResource'] },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UntagResource',
  description:
    '<p>Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren\'t assigned to the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
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
        .literal('GameLift.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UntagResource'] },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TaggingFailedException',
      content: { 'application/json': { schema: TaggingFailedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateAlias',
  description:
    '<p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'UpdateAlias',
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
        .literal('GameLift.UpdateAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateAlias'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateAliasInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAliasOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateBuildRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateBuild',
  description:
    '<p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'UpdateBuild',
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
        .literal('GameLift.UpdateBuild')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateBuild'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateBuildInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBuildOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateFleetAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateFleetAttributes',
  description:
    '<p>Updates a fleet\'s mutable attributes, including game session protection and resource creation limits.</p> <p>To update fleet attributes, specify the fleet ID and the property values that you want to change. </p> <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'UpdateFleetAttributes',
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
        .literal('GameLift.UpdateFleetAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateFleetAttributes'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFleetAttributesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFleetAttributesOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InvalidFleetStatusException',
      content: { 'application/json': { schema: InvalidFleetStatusExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateFleetCapacityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateFleetCapacity',
  description:
    '<p>Updates capacity settings for a fleet. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Fleet capacity determines the number of game sessions and players that can be hosted based on the fleet configuration. Use this operation to set the following fleet capacity properties: </p> <ul> <li> <p>Minimum/maximum size: Set hard limits on fleet capacity. Amazon GameLift cannot set the fleet\'s capacity to a value outside of this range, whether the capacity is changed manually or through automatic scaling. </p> </li> <li> <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained in a fleet location. Before changing a fleet\'s desired capacity, you may want to call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the fleet\'s Amazon EC2 instance type. Alternatively, consider using automatic scaling to adjust capacity based on player demand.</p> </li> </ul> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To update capacity for a fleet\'s home Region, or if the fleet has no remote locations, omit the <code>Location</code> parameter. The fleet must be in <code>ACTIVE</code> status. </p> </li> <li> <p>To update capacity for a fleet\'s remote location, include the <code>Location</code> parameter set to the location to be updated. The location must be in <code>ACTIVE</code> status.</p> </li> </ul> <p>If successful, capacity settings are updated immediately. In response a change in desired capacity, Amazon GameLift initiates steps to start new instances or terminate existing instances in the requested fleet location. This continues until the location\'s active instance count matches the new desired instance count. You can track a fleet\'s current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is higher than the instance type\'s limit, the <code>LimitExceeded</code> exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a> </p>',
  operationId: 'UpdateFleetCapacity',
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
        .literal('GameLift.UpdateFleetCapacity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateFleetCapacity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFleetCapacityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFleetCapacityOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidFleetStatusException',
      content: { 'application/json': { schema: InvalidFleetStatusExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    487: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateFleetPortSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateFleetPortSettings',
  description:
    '<p>Updates permissions that allow inbound traffic to connect to game sessions that are being hosted on instances in the fleet. </p> <p>To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. </p> <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling <code>DescribeFleetPortSettings</code> with a location name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>',
  operationId: 'UpdateFleetPortSettings',
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
        .literal('GameLift.UpdateFleetPortSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateFleetPortSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFleetPortSettingsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFleetPortSettingsOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InvalidFleetStatusException',
      content: { 'application/json': { schema: InvalidFleetStatusExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateGameServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateGameServer',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates information about a registered game server to help Amazon GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group. </p> <p>Use this operation to update the following types of game server information. You can make all three types of updates in the same request:</p> <ul> <li> <p>To update the game server\'s utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.</p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to <code>HEALTHY</code>. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'UpdateGameServer',
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
        .literal('GameLift.UpdateGameServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateGameServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGameServerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGameServerOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateGameServerGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateGameServerGroup',
  description:
    '<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p> <p>To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>',
  operationId: 'UpdateGameServerGroup',
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
        .literal('GameLift.UpdateGameServerGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateGameServerGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGameServerGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGameServerGroupOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateGameSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateGameSession',
  description:
    '<p>Updates the mutable properties of a game session. </p> <p>To update a game session, specify the game session ID and the values you want to change. </p> <p>If successful, the updated <code>GameSession</code> object is returned. </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'UpdateGameSession',
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
        .literal('GameLift.UpdateGameSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateGameSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGameSessionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGameSessionOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'InvalidGameSessionStatusException',
      content: { 'application/json': { schema: InvalidGameSessionStatusExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateGameSessionQueueRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateGameSessionQueue',
  description:
    '<p>Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p>',
  operationId: 'UpdateGameSessionQueue',
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
        .literal('GameLift.UpdateGameSessionQueue')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateGameSessionQueue'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGameSessionQueueInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGameSessionQueueOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateMatchmakingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration',
  description:
    '<p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p>',
  operationId: 'UpdateMatchmakingConfiguration',
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
        .literal('GameLift.UpdateMatchmakingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateMatchmakingConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateMatchmakingConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMatchmakingConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateRuntimeConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateRuntimeConfiguration',
  description:
    "<p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on all instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> with an updated set of server process configurations.</p> <p>If successful, the fleet's runtime configuration settings are updated. Each instance in the fleet regularly checks for and retrieves updated runtime configurations. Instances immediately begin complying with the new configuration by launching new server processes or not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.</p> <p> <b>Learn more</b> </p> <p> <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html\">Setting up Amazon GameLift fleets</a> </p>",
  operationId: 'UpdateRuntimeConfiguration',
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
        .literal('GameLift.UpdateRuntimeConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateRuntimeConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRuntimeConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRuntimeConfigurationOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidFleetStatusException',
      content: { 'application/json': { schema: InvalidFleetStatusExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftUpdateScriptRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.UpdateScript',
  description:
    '<p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>',
  operationId: 'UpdateScript',
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
        .literal('GameLift.UpdateScript')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.UpdateScript'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateScriptInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateScriptOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetGameLiftValidateMatchmakingRuleSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet',
  description:
    '<p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>',
  operationId: 'ValidateMatchmakingRuleSet',
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
        .literal('GameLift.ValidateMatchmakingRuleSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GameLift.ValidateMatchmakingRuleSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ValidateMatchmakingRuleSetInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ValidateMatchmakingRuleSetOutputSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'UnsupportedRegionException',
      content: { 'application/json': { schema: UnsupportedRegionExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})
