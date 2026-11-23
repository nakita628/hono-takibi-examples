import { createRoute, z } from '@hono/zod-openapi'

const ArnSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(1224)
  .openapi('Arn')

const NameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_\-]*/)
  .min(1)
  .max(255)
  .openapi('Name')

const SimulationJobStatusSchema = z
  .enum([
    'Pending',
    'Preparing',
    'Running',
    'Restarting',
    'Completed',
    'Failed',
    'RunningFailed',
    'Terminating',
    'Terminated',
    'Canceled',
  ])
  .openapi('SimulationJobStatus')

const LastStartedAtSchema = z.iso.datetime({ offset: true }).openapi('LastStartedAt')

const LastUpdatedAtSchema = z.iso.datetime({ offset: true }).openapi('LastUpdatedAt')

const FailureBehaviorSchema = z.enum(['Fail', 'Continue']).openapi('FailureBehavior')

const SimulationJobErrorCodeSchema = z
  .enum([
    'InternalServiceError',
    'RobotApplicationCrash',
    'SimulationApplicationCrash',
    'RobotApplicationHealthCheckFailure',
    'SimulationApplicationHealthCheckFailure',
    'BadPermissionsRobotApplication',
    'BadPermissionsSimulationApplication',
    'BadPermissionsS3Object',
    'BadPermissionsS3Output',
    'BadPermissionsCloudwatchLogs',
    'SubnetIpLimitExceeded',
    'ENILimitExceeded',
    'BadPermissionsUserCredentials',
    'InvalidBundleRobotApplication',
    'InvalidBundleSimulationApplication',
    'InvalidS3Resource',
    'ThrottlingError',
    'LimitExceeded',
    'MismatchedEtag',
    'RobotApplicationVersionMismatchedEtag',
    'SimulationApplicationVersionMismatchedEtag',
    'ResourceNotFound',
    'RequestThrottled',
    'BatchTimedOut',
    'BatchCanceled',
    'InvalidInput',
    'WrongRegionS3Bucket',
    'WrongRegionS3Output',
    'WrongRegionRobotApplication',
    'WrongRegionSimulationApplication',
    'UploadContentMismatchError',
  ])
  .openapi('SimulationJobErrorCode')

const GenericStringSchema = z.string().regex(/.*/).min(0).max(1024).openapi('GenericString')

const ClientRequestTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9_\-=]*/)
  .min(1)
  .max(64)
  .openapi('ClientRequestToken')

const S3BucketSchema = z
  .string()
  .regex(/[a-z0-9][a-z0-9.\-]*[a-z0-9]/)
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const S3KeySchema = z.string().regex(/.*/).min(1).max(1024).openapi('S3Key')

const OutputLocationSchema = z
  .object({
    s3Bucket: S3BucketSchema.exactOptional().openapi({ description: 'The S3 bucket for output.' }),
    s3Prefix: S3KeySchema.exactOptional().openapi({
      description: 'The S3 folder in the <code>s3Bucket</code> where output files will be placed.',
    }),
  })
  .openapi({ description: 'The output location.', required: [] })
  .openapi('OutputLocation')

const BoxedBooleanSchema = z.boolean().openapi('BoxedBoolean')

const LoggingConfigSchema = z
  .object({
    recordAllRosTopics: BoxedBooleanSchema.exactOptional().openapi({
      deprecated: true,
      description:
        '<p>A boolean indicating whether to record all ROS topics.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
    }),
  })
  .openapi({ description: 'The logging configuration.', required: [] })
  .openapi('LoggingConfig')

const JobDurationSchema = z.int().openapi('JobDuration')

const SimulationTimeMillisSchema = z.int().openapi('SimulationTimeMillis')

const IamRoleSchema = z
  .string()
  .regex(/arn:aws:iam::\w+:role\/.*/)
  .min(1)
  .max(255)
  .openapi('IamRole')

const VersionSchema = z
  .string()
  .regex(/(\$LATEST)|[0-9]*/)
  .min(1)
  .max(255)
  .openapi('Version')

const CommandSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-]*/)
  .min(1)
  .max(1024)
  .openapi('Command')

const EnvironmentVariableValueSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(1024)
  .openapi('EnvironmentVariableValue')

const EnvironmentVariableMapSchema = z
  .record(z.string(), EnvironmentVariableValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('EnvironmentVariableMap')

const PortSchema = z.int().min(1).max(65535).openapi('Port')

const NonSystemPortSchema = z.int().min(1024).max(65535).openapi('NonSystemPort')

const BooleanSchema = z.boolean().openapi('Boolean')

const PortMappingSchema = z
  .object({
    jobPort: PortSchema.openapi({
      description:
        'The port number on the simulation job instance to use as a remote connection point. ',
    }),
    applicationPort: NonSystemPortSchema.openapi({
      description: 'The port number on the application.',
    }),
    enableOnPublicIp: BooleanSchema.exactOptional().openapi({
      description: 'A Boolean indicating whether to enable this port mapping on public IP.',
    }),
  })
  .openapi({
    required: ['jobPort', 'applicationPort'],
    description: 'An object representing a port mapping.',
  })
  .openapi('PortMapping')

const PortMappingListSchema = z.array(PortMappingSchema).min(0).max(10).openapi('PortMappingList')

const PortForwardingConfigSchema = z
  .object({
    portMappings: PortMappingListSchema.exactOptional().openapi({
      description: 'The port mappings for the configuration.',
    }),
  })
  .openapi({ description: 'Configuration information for port forwarding.', required: [] })
  .openapi('PortForwardingConfig')

const NonEmptyStringSchema = z.string().regex(/.+/).min(1).max(255).openapi('NonEmptyString')

const CommandListSchema = z.array(NonEmptyStringSchema).openapi('CommandList')

const LaunchConfigSchema = z
  .object({
    packageName: CommandSchema.exactOptional().openapi({ description: 'The package name.' }),
    launchFile: CommandSchema.exactOptional().openapi({ description: 'The launch file name.' }),
    environmentVariables: EnvironmentVariableMapSchema.exactOptional().openapi({
      description: 'The environment variables for the application launch.',
    }),
    portForwardingConfig: PortForwardingConfigSchema.exactOptional().openapi({
      description: 'The port forwarding configuration.',
    }),
    streamUI: BooleanSchema.exactOptional().openapi({
      description:
        'Boolean indicating whether a streaming session will be configured for the application. If <code>True</code>, AWS RoboMaker will configure a connection so you can interact with your application as it is running in the simulation. You must configure and launch the component. It must have a graphical user interface. ',
    }),
    command: CommandListSchema.exactOptional().openapi({
      description:
        "<p>If you've specified <code>General</code> as the value for your <code>RobotSoftwareSuite</code>, you can use this field to specify a list of commands for your container image.</p> <p>If you've specified <code>SimulationRuntime</code> as the value for your <code>SimulationSoftwareSuite</code>, you can use this field to specify a list of commands for your container image.</p>",
    }),
  })
  .openapi({ description: 'Information about a launch configuration.', required: [] })
  .openapi('LaunchConfig')

const PathSchema = z.string().regex(/.*/).min(1).max(1024).openapi('Path')

const UploadBehaviorSchema = z
  .enum(['UPLOAD_ON_TERMINATE', 'UPLOAD_ROLLING_AUTO_REMOVE'])
  .openapi('UploadBehavior')

const UploadConfigurationSchema = z
  .object({
    name: NameSchema.openapi({
      description:
        '<p>A prefix that specifies where files will be uploaded in Amazon S3. It is appended to the simulation output location to determine the final path. </p> <p> For example, if your simulation output location is <code>s3://my-bucket</code> and your upload configuration name is <code>robot-test</code>, your files will be uploaded to <code>s3://my-bucket/&lt;simid&gt;/&lt;runid&gt;/robot-test</code>. </p>',
    }),
    path: PathSchema.openapi({
      description:
        ' Specifies the path of the file(s) to upload. Standard Unix glob matching rules are accepted, with the addition of <code>**</code> as a <i>super asterisk</i>. For example, specifying <code>/var/log/**.log</code> causes all .log files in the <code>/var/log</code> directory tree to be collected. For more examples, see <a href="https://github.com/gobwas/glob">Glob Library</a>. ',
    }),
    uploadBehavior: UploadBehaviorSchema.openapi({
      description:
        '<p>Specifies when to upload the files:</p> <dl> <dt>UPLOAD_ON_TERMINATE</dt> <dd> <p>Matching files are uploaded once the simulation enters the <code>TERMINATING</code> state. Matching files are not uploaded until all of your code (including tools) have stopped. </p> <p>If there is a problem uploading a file, the upload is retried. If problems persist, no further upload attempts will be made.</p> </dd> <dt>UPLOAD_ROLLING_AUTO_REMOVE</dt> <dd> <p>Matching files are uploaded as they are created. They are deleted after they are uploaded. The specified path is checked every 5 seconds. A final check is made when all of your code (including tools) have stopped. </p> </dd> </dl>',
    }),
  })
  .openapi({
    required: ['name', 'path', 'uploadBehavior'],
    description:
      'Provides upload configuration information. Files are uploaded from the simulation job to a location you specify. ',
  })
  .openapi('UploadConfiguration')

const UploadConfigurationsSchema = z
  .array(UploadConfigurationSchema)
  .min(0)
  .max(10)
  .openapi('UploadConfigurations')

const UnrestrictedCommandSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(1024)
  .openapi('UnrestrictedCommand')

const ExitBehaviorSchema = z.enum(['FAIL', 'RESTART']).openapi('ExitBehavior')

const ToolSchema = z
  .object({
    streamUI: BoxedBooleanSchema.exactOptional().openapi({
      description:
        'Boolean indicating whether a streaming session will be configured for the tool. If <code>True</code>, AWS RoboMaker will configure a connection so you can interact with the tool as it is running in the simulation. It must have a graphical user interface. The default is <code>False</code>. ',
    }),
    name: NameSchema.openapi({ description: 'The name of the tool.' }),
    command: UnrestrictedCommandSchema.openapi({
      description: 'Command-line arguments for the tool. It must include the tool executable name.',
    }),
    streamOutputToCloudWatch: BoxedBooleanSchema.exactOptional().openapi({
      description:
        'Boolean indicating whether logs will be recorded in CloudWatch for the tool. The default is <code>False</code>. ',
    }),
    exitBehavior: ExitBehaviorSchema.exactOptional().openapi({
      description:
        'Exit behavior determines what happens when your tool quits running. <code>RESTART</code> will cause your tool to be restarted. <code>FAIL</code> will cause your job to exit. The default is <code>RESTART</code>. ',
    }),
  })
  .openapi({
    required: ['name', 'command'],
    description: 'Information about a tool. Tools are used in a simulation job.',
  })
  .openapi('Tool')

const ToolsSchema = z.array(ToolSchema).min(0).max(10).openapi('Tools')

const RobotApplicationConfigSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The application information for the robot application.',
    }),
    applicationVersion: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application.',
    }),
    launchConfig: LaunchConfigSchema.openapi({
      description: 'The launch configuration for the robot application.',
    }),
    uploadConfigurations: UploadConfigurationsSchema.exactOptional().openapi({
      description: 'The upload configurations for the robot application.',
    }),
    useDefaultUploadConfigurations: BoxedBooleanSchema.exactOptional().openapi({
      deprecated: true,
      description:
        '<p>A Boolean indicating whether to use default upload configurations. By default, <code>.ros</code> and <code>.gazebo</code> files are uploaded when the application terminates and all ROS topics will be recorded.</p> <p>If you set this value, you must specify an <code>outputLocation</code>.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
    }),
    tools: ToolsSchema.exactOptional().openapi({
      description: 'Information about tools configured for the robot application.',
    }),
    useDefaultTools: BoxedBooleanSchema.exactOptional().openapi({
      deprecated: true,
      description:
        '<p>A Boolean indicating whether to use default robot application tools. The default tools are rviz, rqt, terminal and rosbag record. The default is <code>False</code>.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
    }),
  })
  .openapi({
    required: ['application', 'launchConfig'],
    description: 'Application configuration information for a robot.',
  })
  .openapi('RobotApplicationConfig')

const RobotApplicationConfigsSchema = z
  .array(RobotApplicationConfigSchema)
  .length(1)
  .openapi('RobotApplicationConfigs')

const WorldConfigSchema = z
  .object({
    world: ArnSchema.exactOptional().openapi({
      description: 'The world generated by Simulation WorldForge.',
    }),
  })
  .openapi({ description: 'Configuration information for a world.', required: [] })
  .openapi('WorldConfig')

const WorldConfigsSchema = z.array(WorldConfigSchema).min(0).max(1).openapi('WorldConfigs')

const SimulationApplicationConfigSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The application information for the simulation application.',
    }),
    applicationVersion: VersionSchema.exactOptional().openapi({
      description: 'The version of the simulation application.',
    }),
    launchConfig: LaunchConfigSchema.openapi({
      description: 'The launch configuration for the simulation application.',
    }),
    uploadConfigurations: UploadConfigurationsSchema.exactOptional().openapi({
      description: 'Information about upload configurations for the simulation application.',
    }),
    worldConfigs: WorldConfigsSchema.exactOptional().openapi({
      description: 'A list of world configurations.',
    }),
    useDefaultUploadConfigurations: BoxedBooleanSchema.exactOptional().openapi({
      deprecated: true,
      description:
        '<p>A Boolean indicating whether to use default upload configurations. By default, <code>.ros</code> and <code>.gazebo</code> files are uploaded when the application terminates and all ROS topics will be recorded.</p> <p>If you set this value, you must specify an <code>outputLocation</code>.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
    }),
    tools: ToolsSchema.exactOptional().openapi({
      description: 'Information about tools configured for the simulation application.',
    }),
    useDefaultTools: BoxedBooleanSchema.exactOptional().openapi({
      deprecated: true,
      description:
        '<p>A Boolean indicating whether to use default simulation application tools. The default tools are rviz, rqt, terminal and rosbag record. The default is <code>False</code>.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
    }),
  })
  .openapi({
    required: ['application', 'launchConfig'],
    description: 'Information about a simulation application configuration.',
  })
  .openapi('SimulationApplicationConfig')

const SimulationApplicationConfigsSchema = z
  .array(SimulationApplicationConfigSchema)
  .length(1)
  .openapi('SimulationApplicationConfigs')

const S3KeyOrPrefixSchema = z.string().regex(/.*/).min(0).max(1024).openapi('S3KeyOrPrefix')

const S3EtagSchema = z.string().openapi('S3Etag')

const S3KeyOutputSchema = z
  .object({
    s3Key: S3KeyOrPrefixSchema.exactOptional().openapi({ description: 'The S3 key.' }),
    etag: S3EtagSchema.exactOptional().openapi({ description: 'The etag for the object.' }),
  })
  .openapi({ description: 'Information about S3 keys.', required: [] })
  .openapi('S3KeyOutput')

const S3KeyOutputsSchema = z.array(S3KeyOutputSchema).openapi('S3KeyOutputs')

const DataSourceTypeSchema = z.enum(['Prefix', 'Archive', 'File']).openapi('DataSourceType')

const DataSourceSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the data source.' }),
    s3Bucket: S3BucketSchema.exactOptional().openapi({
      description: 'The S3 bucket where the data files are located.',
    }),
    s3Keys: S3KeyOutputsSchema.exactOptional().openapi({
      description: 'The list of S3 keys identifying the data source files.',
    }),
    type: DataSourceTypeSchema.exactOptional().openapi({
      description:
        "<p>The data type for the data source that you're using for your container image or simulation job. You can use this field to specify whether your data source is an Archive, an Amazon S3 prefix, or a file.</p> <p>If you don't specify a field, the default value is <code>File</code>.</p>",
    }),
    destination: PathSchema.exactOptional().openapi({
      description:
        "<p>The location where your files are mounted in the container image.</p> <p>If you've specified the <code>type</code> of the data source as an <code>Archive</code>, you must provide an Amazon S3 object key to your archive. The object key must point to either a <code>.zip</code> or <code>.tar.gz</code> file.</p> <p>If you've specified the <code>type</code> of the data source as a <code>Prefix</code>, you provide the Amazon S3 prefix that points to the files that you are using for your data source.</p> <p>If you've specified the <code>type</code> of the data source as a <code>File</code>, you provide the Amazon S3 path to the file that you're using as your data source.</p>",
    }),
  })
  .openapi({ description: 'Information about a data source.', required: [] })
  .openapi('DataSource')

const DataSourcesSchema = z.array(DataSourceSchema).openapi('DataSources')

const TagValueSchema = z
  .string()
  .regex(/[a-zA-Z0-9 _.\-\/+=:]*/)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const SubnetsSchema = z.array(NonEmptyStringSchema).min(1).max(16).openapi('Subnets')

const SecurityGroupsSchema = z.array(NonEmptyStringSchema).min(1).max(5).openapi('SecurityGroups')

const VPCConfigResponseSchema = z
  .object({
    subnets: SubnetsSchema.exactOptional().openapi({
      description: 'A list of subnet IDs associated with the simulation job.',
    }),
    securityGroups: SecurityGroupsSchema.exactOptional().openapi({
      description: 'A list of security group IDs associated with the simulation job.',
    }),
    vpcId: GenericStringSchema.exactOptional().openapi({
      description: 'The VPC ID associated with your simulation job.',
    }),
    assignPublicIp: BooleanSchema.exactOptional().openapi({
      description: 'A boolean indicating if a public IP was assigned.',
    }),
  })
  .openapi({ description: 'VPC configuration associated with your simulation job.', required: [] })
  .openapi('VPCConfigResponse')

const NetworkInterfaceSchema = z
  .object({
    networkInterfaceId: GenericStringSchema.exactOptional().openapi({
      description: 'The ID of the network interface.',
    }),
    privateIpAddress: GenericStringSchema.exactOptional().openapi({
      description: 'The IPv4 address of the network interface within the subnet.',
    }),
    publicIpAddress: GenericStringSchema.exactOptional().openapi({
      description: 'The IPv4 public address of the network interface.',
    }),
  })
  .openapi({ description: 'Describes a network interface.', required: [] })
  .openapi('NetworkInterface')

const SimulationUnitSchema = z.int().min(1).max(15).openapi('SimulationUnit')

const ComputeTypeSchema = z.enum(['CPU', 'GPU_AND_CPU']).openapi('ComputeType')

const GPUUnitSchema = z.int().min(0).max(1).openapi('GPUUnit')

const ComputeResponseSchema = z
  .object({
    simulationUnitLimit: SimulationUnitSchema.exactOptional().openapi({
      description:
        'The simulation unit limit. Your simulation is allocated CPU and memory proportional to the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are only billed for the SU utilization you consume up to the maximum value provided. The default is 15. ',
    }),
    computeType: ComputeTypeSchema.exactOptional().openapi({
      description: 'Compute type response information for the simulation job.',
    }),
    gpuUnitLimit: GPUUnitSchema.exactOptional().openapi({
      description:
        'Compute GPU unit limit for the simulation job. It is the same as the number of GPUs allocated to the SimulationJob.',
    }),
  })
  .openapi({ description: 'Compute information for the simulation job', required: [] })
  .openapi('ComputeResponse')

const SimulationJobSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation job.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the simulation job.' }),
    status: SimulationJobStatusSchema.exactOptional().openapi({
      description: 'Status of the simulation job.',
    }),
    lastStartedAt: LastStartedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job was last started.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job was last updated.',
    }),
    failureBehavior: FailureBehaviorSchema.exactOptional().openapi({
      description:
        '<p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the host running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>',
    }),
    failureCode: SimulationJobErrorCodeSchema.exactOptional().openapi({
      description: 'The failure code of the simulation job if it failed.',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'The reason why the simulation job failed.',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description: 'A unique identifier for this <code>SimulationJob</code> request.',
    }),
    outputLocation: OutputLocationSchema.exactOptional().openapi({
      description: 'Location for output files generated by the simulation job.',
    }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'The logging configuration.',
    }),
    maxJobDurationInSeconds: JobDurationSchema.exactOptional().openapi({
      description:
        'The maximum simulation job duration in seconds. The value must be 8 days (691,200 seconds) or less.',
    }),
    simulationTimeMillis: SimulationTimeMillisSchema.exactOptional().openapi({
      description: 'The simulation job execution duration in milliseconds.',
    }),
    iamRole: IamRoleSchema.exactOptional().openapi({
      description:
        'The IAM role that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. ',
    }),
    robotApplications: RobotApplicationConfigsSchema.exactOptional().openapi({
      description: 'A list of robot applications.',
    }),
    simulationApplications: SimulationApplicationConfigsSchema.exactOptional().openapi({
      description: 'A list of simulation applications.',
    }),
    dataSources: DataSourcesSchema.exactOptional().openapi({
      description: 'The data sources for the simulation job.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the simulation job.',
    }),
    vpcConfig: VPCConfigResponseSchema.exactOptional().openapi({
      description: 'VPC configuration information.',
    }),
    networkInterface: NetworkInterfaceSchema.exactOptional().openapi({
      description: 'Information about a network interface.',
    }),
    compute: ComputeResponseSchema.exactOptional().openapi({
      description: 'Compute information for the simulation job',
    }),
  })
  .openapi({ description: 'Information about a simulation job.', required: [] })
  .openapi('SimulationJob')

type SimulationJobsType = z.infer<typeof SimulationJobSchema>[]

const SimulationJobsSchema: z.ZodType<SimulationJobsType> = z
  .array(SimulationJobSchema)
  .openapi('SimulationJobs')

const ArnsSchema = z.array(ArnSchema).min(1).max(100).openapi('Arns')

type BatchDescribeSimulationJobResponseType = {
  jobs?: z.infer<typeof SimulationJobsSchema> & unknown
  unprocessedJobs?: z.infer<typeof ArnsSchema> & unknown
}

const SimulationJobBatchStatusSchema = z
  .enum([
    'Pending',
    'InProgress',
    'Failed',
    'Completed',
    'Canceled',
    'Canceling',
    'Completing',
    'TimingOut',
    'TimedOut',
  ])
  .openapi('SimulationJobBatchStatus')

const CreatedAtSchema = z.iso.datetime({ offset: true }).openapi('CreatedAt')

const BatchTimeoutInSecondsSchema = z.int().openapi('BatchTimeoutInSeconds')

const MaxConcurrencySchema = z.int().openapi('MaxConcurrency')

const BatchPolicySchema = z
  .object({
    timeoutInSeconds: BatchTimeoutInSecondsSchema.exactOptional().openapi({
      description:
        '<p>The amount of time, in seconds, to wait for the batch to complete. </p> <p>If a batch times out, and there are pending requests that were failing due to an internal failure (like <code>InternalServiceError</code>), they will be moved to the failed list and the batch status will be <code>Failed</code>. If the pending requests were failing for any other reason, the failed pending requests will be moved to the failed list and the batch status will be <code>TimedOut</code>. </p>',
    }),
    maxConcurrency: MaxConcurrencySchema.exactOptional().openapi({
      description:
        '<p>The number of active simulation jobs create as part of the batch that can be in an active state at the same time. </p> <p>Active states include: <code>Pending</code>,<code>Preparing</code>, <code>Running</code>, <code>Restarting</code>, <code>RunningFailed</code> and <code>Terminating</code>. All other states are terminal states. </p>',
    }),
  })
  .openapi({ description: 'Information about the batch policy.', required: [] })
  .openapi('BatchPolicy')

const SimulationJobBatchErrorCodeSchema = z
  .literal('InternalServiceError')
  .openapi('SimulationJobBatchErrorCode')

const S3KeysOrPrefixesSchema = z
  .array(S3KeyOrPrefixSchema)
  .min(1)
  .max(100)
  .openapi('S3KeysOrPrefixes')

const DataSourceConfigSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name of the data source.' }),
    s3Bucket: S3BucketSchema.openapi({
      description: 'The S3 bucket where the data files are located.',
    }),
    s3Keys: S3KeysOrPrefixesSchema.openapi({
      description: 'The list of S3 keys identifying the data source files.',
    }),
    type: DataSourceTypeSchema.exactOptional().openapi({
      description:
        "<p>The data type for the data source that you're using for your container image or simulation job. You can use this field to specify whether your data source is an Archive, an Amazon S3 prefix, or a file.</p> <p>If you don't specify a field, the default value is <code>File</code>.</p>",
    }),
    destination: PathSchema.exactOptional().openapi({
      description:
        "<p>The location where your files are mounted in the container image.</p> <p>If you've specified the <code>type</code> of the data source as an <code>Archive</code>, you must provide an Amazon S3 object key to your archive. The object key must point to either a <code>.zip</code> or <code>.tar.gz</code> file.</p> <p>If you've specified the <code>type</code> of the data source as a <code>Prefix</code>, you provide the Amazon S3 prefix that points to the files that you are using for your data source.</p> <p>If you've specified the <code>type</code> of the data source as a <code>File</code>, you provide the Amazon S3 path to the file that you're using as your data source.</p>",
    }),
  })
  .openapi({
    required: ['name', 's3Bucket', 's3Keys'],
    description: 'Information about a data source.',
  })
  .openapi('DataSourceConfig')

const DataSourceConfigsSchema = z
  .array(DataSourceConfigSchema)
  .min(1)
  .max(6)
  .openapi('DataSourceConfigs')

const VPCConfigSchema = z
  .object({
    subnets: SubnetsSchema.openapi({
      description: 'A list of one or more subnet IDs in your VPC.',
    }),
    securityGroups: SecurityGroupsSchema.exactOptional().openapi({
      description: 'A list of one or more security groups IDs in your VPC.',
    }),
    assignPublicIp: BooleanSchema.exactOptional().openapi({
      description: 'A boolean indicating whether to assign a public IP address.',
    }),
  })
  .openapi({
    required: ['subnets'],
    description:
      'If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.',
  })
  .openapi('VPCConfig')

const ComputeSchema = z
  .object({
    simulationUnitLimit: SimulationUnitSchema.exactOptional().openapi({
      description:
        'The simulation unit limit. Your simulation is allocated CPU and memory proportional to the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are only billed for the SU utilization you consume up to the maximum value provided. The default is 15. ',
    }),
    computeType: ComputeTypeSchema.exactOptional().openapi({
      description: 'Compute type information for the simulation job.',
    }),
    gpuUnitLimit: GPUUnitSchema.exactOptional().openapi({
      description:
        'Compute GPU unit limit for the simulation job. It is the same as the number of GPUs allocated to the SimulationJob.',
    }),
  })
  .openapi({ description: 'Compute information for the simulation job.', required: [] })
  .openapi('Compute')

const SimulationJobRequestSchema = z
  .object({
    outputLocation: OutputLocationSchema.exactOptional(),
    loggingConfig: LoggingConfigSchema.exactOptional(),
    maxJobDurationInSeconds: JobDurationSchema.openapi({
      description:
        'The maximum simulation job duration in seconds. The value must be 8 days (691,200 seconds) or less.',
    }),
    iamRole: IamRoleSchema.exactOptional().openapi({
      description:
        'The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. ',
    }),
    failureBehavior: FailureBehaviorSchema.exactOptional().openapi({
      description:
        '<p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the host running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>',
    }),
    useDefaultApplications: BoxedBooleanSchema.exactOptional().openapi({
      description:
        'A Boolean indicating whether to use default applications in the simulation job. Default applications include Gazebo, rqt, rviz and terminal access. ',
    }),
    robotApplications: RobotApplicationConfigsSchema.exactOptional().openapi({
      description: 'The robot applications to use in the simulation job.',
    }),
    simulationApplications: SimulationApplicationConfigsSchema.exactOptional().openapi({
      description: 'The simulation applications to use in the simulation job.',
    }),
    dataSources: DataSourceConfigsSchema.exactOptional().openapi({
      description:
        '<p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>',
    }),
    vpcConfig: VPCConfigSchema.exactOptional(),
    compute: ComputeSchema.exactOptional().openapi({
      description: 'Compute information for the simulation job',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the simulation job request.',
    }),
  })
  .openapi({
    required: ['maxJobDurationInSeconds'],
    description: 'Information about a simulation job request.',
  })
  .openapi('SimulationJobRequest')

const FailedAtSchema = z.iso.datetime({ offset: true }).openapi('FailedAt')

type FailedCreateSimulationJobRequestType = {
  request?: z.infer<typeof SimulationJobRequestSchema> & unknown
  failureReason?: z.infer<typeof GenericStringSchema> & unknown
  failureCode?: z.infer<typeof SimulationJobErrorCodeSchema> & unknown
  failedAt?: z.infer<typeof FailedAtSchema> & unknown
}

const FailedCreateSimulationJobRequestSchema: z.ZodType<FailedCreateSimulationJobRequestType> = z
  .object({
    request: SimulationJobRequestSchema.exactOptional().openapi({
      description: 'The simulation job request.',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'The failure reason of the simulation job request.',
    }),
    failureCode: SimulationJobErrorCodeSchema.exactOptional().openapi({
      description: 'The failure code.',
    }),
    failedAt: FailedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job batch failed.',
    }),
  })
  .openapi({
    description: 'Information about a failed create simulation job request.',
    required: [],
  })
  .openapi('FailedCreateSimulationJobRequest')

type FailedCreateSimulationJobRequestsType = z.infer<
  typeof FailedCreateSimulationJobRequestSchema
>[]

const FailedCreateSimulationJobRequestsSchema: z.ZodType<FailedCreateSimulationJobRequestsType> = z
  .array(FailedCreateSimulationJobRequestSchema)
  .openapi('FailedCreateSimulationJobRequests')

type CreateSimulationJobRequestsType = z.infer<typeof SimulationJobRequestSchema>[]

const CreateSimulationJobRequestsSchema: z.ZodType<CreateSimulationJobRequestsType> = z
  .array(SimulationJobRequestSchema)
  .min(1)
  .max(1000)
  .openapi('CreateSimulationJobRequests')

const SimulationApplicationNamesSchema = z.array(NameSchema).openapi('SimulationApplicationNames')

const RobotApplicationNamesSchema = z.array(NameSchema).openapi('RobotApplicationNames')

const DataSourceNamesSchema = z.array(NameSchema).openapi('DataSourceNames')

const SimulationJobSummarySchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation job.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job was last updated.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the simulation job.' }),
    status: SimulationJobStatusSchema.exactOptional().openapi({
      description: 'The status of the simulation job.',
    }),
    simulationApplicationNames: SimulationApplicationNamesSchema.exactOptional().openapi({
      description: 'A list of simulation job simulation application names.',
    }),
    robotApplicationNames: RobotApplicationNamesSchema.exactOptional().openapi({
      description: 'A list of simulation job robot application names.',
    }),
    dataSourceNames: DataSourceNamesSchema.exactOptional().openapi({
      description: 'The names of the data sources.',
    }),
    computeType: ComputeTypeSchema.exactOptional().openapi({
      description: 'The compute type for the simulation job summary.',
    }),
  })
  .openapi({ description: 'Summary information for a simulation job.', required: [] })
  .openapi('SimulationJobSummary')

const SimulationJobSummariesSchema = z
  .array(SimulationJobSummarySchema)
  .min(0)
  .max(100)
  .openapi('SimulationJobSummaries')

type DescribeSimulationJobBatchResponseType = {
  arn?: z.infer<typeof ArnSchema> & unknown
  status?: z.infer<typeof SimulationJobBatchStatusSchema> & unknown
  lastUpdatedAt?: z.infer<typeof LastUpdatedAtSchema> & unknown
  createdAt?: z.infer<typeof CreatedAtSchema> & unknown
  clientRequestToken?: z.infer<typeof ClientRequestTokenSchema> & unknown
  batchPolicy?: z.infer<typeof BatchPolicySchema> & unknown
  failureCode?: z.infer<typeof SimulationJobBatchErrorCodeSchema> & unknown
  failureReason?: z.infer<typeof GenericStringSchema> & unknown
  failedRequests?: z.infer<typeof FailedCreateSimulationJobRequestsSchema> & unknown
  pendingRequests?: z.infer<typeof CreateSimulationJobRequestsSchema> & unknown
  createdRequests?: z.infer<typeof SimulationJobSummariesSchema> & unknown
  tags?: z.infer<typeof TagMapSchema> & unknown
}

type StartSimulationJobBatchResponseType = {
  arn?: z.infer<typeof ArnSchema> & unknown
  status?: z.infer<typeof SimulationJobBatchStatusSchema> & unknown
  createdAt?: z.infer<typeof CreatedAtSchema> & unknown
  clientRequestToken?: z.infer<typeof ClientRequestTokenSchema> & unknown
  batchPolicy?: z.infer<typeof BatchPolicySchema> & unknown
  failureCode?: z.infer<typeof SimulationJobBatchErrorCodeSchema> & unknown
  failureReason?: z.infer<typeof GenericStringSchema> & unknown
  failedRequests?: z.infer<typeof FailedCreateSimulationJobRequestsSchema> & unknown
  pendingRequests?: z.infer<typeof CreateSimulationJobRequestsSchema> & unknown
  createdRequests?: z.infer<typeof SimulationJobSummariesSchema> & unknown
  tags?: z.infer<typeof TagMapSchema> & unknown
}

type StartSimulationJobBatchRequestType = {
  clientRequestToken?: z.infer<typeof ClientRequestTokenSchema> & unknown
  batchPolicy?: z.infer<typeof BatchPolicySchema> & unknown
  createSimulationJobRequests: z.infer<typeof CreateSimulationJobRequestsSchema> & unknown
  tags?: z.infer<typeof TagMapSchema> & unknown
}

const BatchDeleteWorldsResponseSchema = z
  .object({
    unprocessedWorlds: ArnsSchema.exactOptional().openapi({
      description:
        'A list of unprocessed worlds associated with the call. These worlds were not deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('BatchDeleteWorldsResponse')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const BatchDescribeSimulationJobResponseSchema: z.ZodType<BatchDescribeSimulationJobResponseType> =
  z
    .object({
      jobs: SimulationJobsSchema.exactOptional().openapi({
        description: 'A list of simulation jobs.',
      }),
      unprocessedJobs: ArnsSchema.exactOptional().openapi({
        description: 'A list of unprocessed simulation job Amazon Resource Names (ARNs).',
      }),
    })
    .openapi({ required: [] })
    .openapi('BatchDescribeSimulationJobResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const CancelDeploymentJobResponseSchema = z
  .looseObject({})
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('CancelDeploymentJobResponse')

const CancelSimulationJobResponseSchema = z.looseObject({}).openapi('CancelSimulationJobResponse')

const CancelSimulationJobBatchResponseSchema = z
  .looseObject({})
  .openapi('CancelSimulationJobBatchResponse')

const CancelWorldExportJobResponseSchema = z.looseObject({}).openapi('CancelWorldExportJobResponse')

const CancelWorldGenerationJobResponseSchema = z
  .looseObject({})
  .openapi('CancelWorldGenerationJobResponse')

const DeploymentStatusSchema = z
  .enum(['Pending', 'Preparing', 'InProgress', 'Failed', 'Succeeded', 'Canceled'])
  .openapi('DeploymentStatus')

const DeploymentVersionSchema = z
  .string()
  .regex(/[0-9]*/)
  .min(1)
  .max(255)
  .openapi('DeploymentVersion')

const DeploymentLaunchConfigSchema = z
  .object({
    packageName: CommandSchema.openapi({ description: 'The package name.' }),
    preLaunchFile: PathSchema.exactOptional().openapi({
      description:
        'The deployment pre-launch file. This file will be executed prior to the launch file.',
    }),
    launchFile: CommandSchema.openapi({ description: 'The launch file name.' }),
    postLaunchFile: PathSchema.exactOptional().openapi({
      description:
        'The deployment post-launch file. This file will be executed after the launch file.',
    }),
    environmentVariables: EnvironmentVariableMapSchema.exactOptional().openapi({
      description:
        'An array of key/value pairs specifying environment variables for the robot application',
    }),
  })
  .openapi({
    required: ['packageName', 'launchFile'],
    description: 'Configuration information for a deployment launch.',
  })
  .openapi('DeploymentLaunchConfig')

const DeploymentApplicationConfigSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the robot application.',
    }),
    applicationVersion: DeploymentVersionSchema.openapi({
      description: 'The version of the application.',
    }),
    launchConfig: DeploymentLaunchConfigSchema.openapi({
      description: 'The launch configuration.',
    }),
  })
  .openapi({
    required: ['application', 'applicationVersion', 'launchConfig'],
    description: 'Information about a deployment application configuration.',
  })
  .openapi('DeploymentApplicationConfig')

const DeploymentApplicationConfigsSchema = z
  .array(DeploymentApplicationConfigSchema)
  .length(1)
  .openapi('DeploymentApplicationConfigs')

const DeploymentJobErrorCodeSchema = z
  .enum([
    'ResourceNotFound',
    'EnvironmentSetupError',
    'EtagMismatch',
    'FailureThresholdBreached',
    'RobotDeploymentAborted',
    'RobotDeploymentNoResponse',
    'RobotAgentConnectionTimeout',
    'GreengrassDeploymentFailed',
    'InvalidGreengrassGroup',
    'MissingRobotArchitecture',
    'MissingRobotApplicationArchitecture',
    'MissingRobotDeploymentResource',
    'GreengrassGroupVersionDoesNotExist',
    'LambdaDeleted',
    'ExtractingBundleFailure',
    'PreLaunchFileFailure',
    'PostLaunchFileFailure',
    'BadPermissionError',
    'DownloadConditionFailed',
    'BadLambdaAssociated',
    'InternalServerError',
    'RobotApplicationDoesNotExist',
    'DeploymentFleetDoesNotExist',
    'FleetDeploymentTimeout',
  ])
  .openapi('DeploymentJobErrorCode')

const PercentageSchema = z.int().min(1).max(100).openapi('Percentage')

const DeploymentTimeoutSchema = z.int().openapi('DeploymentTimeout')

const S3ObjectSchema = z
  .object({
    bucket: S3BucketSchema.openapi({ description: 'The bucket containing the object.' }),
    key: S3KeySchema.openapi({ description: 'The key of the object.' }),
    etag: S3EtagSchema.exactOptional().openapi({ description: 'The etag of the object.' }),
  })
  .openapi({ required: ['bucket', 'key'], description: 'Information about an S3 object.' })
  .openapi('S3Object')

const DeploymentConfigSchema = z
  .object({
    concurrentDeploymentPercentage: PercentageSchema.exactOptional().openapi({
      description: 'The percentage of robots receiving the deployment at the same time.',
    }),
    failureThresholdPercentage: PercentageSchema.exactOptional().openapi({
      description: 'The percentage of deployments that need to fail before stopping deployment.',
    }),
    robotDeploymentTimeoutInSeconds: DeploymentTimeoutSchema.exactOptional().openapi({
      description:
        'The amount of time, in seconds, to wait for deployment to a single robot to complete. Choose a time between 1 minute and 7 days. The default is 5 hours.',
    }),
    downloadConditionFile: S3ObjectSchema.exactOptional().openapi({
      description: 'The download condition file.',
    }),
  })
  .openapi({ description: 'Information about a deployment configuration.', required: [] })
  .openapi('DeploymentConfig')

const CreateDeploymentJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the deployment job.',
    }),
    fleet: ArnSchema.exactOptional().openapi({
      description: 'The target fleet for the deployment job.',
    }),
    status: DeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of the deployment job.',
    }),
    deploymentApplicationConfigs: DeploymentApplicationConfigsSchema.exactOptional().openapi({
      description: 'The deployment application configuration.',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'The failure reason of the deployment job if it failed.',
    }),
    failureCode: DeploymentJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code of the simulation job if it failed:</p> <dl> <dt>BadPermissionError</dt> <dd> <p>AWS Greengrass requires a service-level role permission to access other services. The role must include the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy$jsonEditor"> <code>AWSGreengrassResourceAccessRolePolicy</code> managed policy</a>. </p> </dd> <dt>ExtractingBundleFailure</dt> <dd> <p>The robot application could not be extracted from the bundle.</p> </dd> <dt>FailureThresholdBreached</dt> <dd> <p>The percentage of robots that could not be updated exceeded the percentage set for the deployment.</p> </dd> <dt>GreengrassDeploymentFailed</dt> <dd> <p>The robot application could not be deployed to the robot.</p> </dd> <dt>GreengrassGroupVersionDoesNotExist</dt> <dd> <p>The AWS Greengrass group or version associated with a robot is missing.</p> </dd> <dt>InternalServerError</dt> <dd> <p>An internal error has occurred. Retry your request, but if the problem persists, contact us with details.</p> </dd> <dt>MissingRobotApplicationArchitecture</dt> <dd> <p>The robot application does not have a source that matches the architecture of the robot.</p> </dd> <dt>MissingRobotDeploymentResource</dt> <dd> <p>One or more of the resources specified for the robot application are missing. For example, does the robot application have the correct launch package and launch file?</p> </dd> <dt>PostLaunchFileFailure</dt> <dd> <p>The post-launch script failed.</p> </dd> <dt>PreLaunchFileFailure</dt> <dd> <p>The pre-launch script failed.</p> </dd> <dt>ResourceNotFound</dt> <dd> <p>One or more deployment resources are missing. For example, do robot application source bundles still exist? </p> </dd> <dt>RobotDeploymentNoResponse</dt> <dd> <p>There is no response from the robot. It might not be powered on or connected to the internet.</p> </dd> </dl>',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the fleet was created.',
    }),
    deploymentConfig: DeploymentConfigSchema.exactOptional().openapi({
      description: 'The deployment configuration.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the deployment job.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('CreateDeploymentJobResponse')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ConcurrentDeploymentExceptionSchema = z.any().openapi('ConcurrentDeploymentException')

const IdempotentParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotentParameterMismatchException')

const CreateFleetResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the fleet.' }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the fleet was created.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the fleet.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('CreateFleetResponse')

const IdSchema = z.string().regex(/.*/).min(1).max(1224).openapi('Id')

const ArchitectureSchema = z.enum(['X86_64', 'ARM64', 'ARMHF']).openapi('Architecture')

const CreateRobotResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the robot.' }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the robot was created.',
    }),
    greengrassGroupId: IdSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the Greengrass group associated with the robot.',
    }),
    architecture: ArchitectureSchema.exactOptional().openapi({
      description: 'The target architecture of the robot.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the robot.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('CreateRobotResponse')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const SourceSchema = z
  .object({
    s3Bucket: S3BucketSchema.exactOptional().openapi({ description: 'The s3 bucket name.' }),
    s3Key: S3KeySchema.exactOptional().openapi({ description: 'The s3 object key.' }),
    etag: S3EtagSchema.exactOptional().openapi({
      description:
        'A hash of the object specified by <code>s3Bucket</code> and <code>s3Key</code>.',
    }),
    architecture: ArchitectureSchema.exactOptional().openapi({
      description: 'The taget processor architecture for the application.',
    }),
  })
  .openapi({ description: 'Information about a source.', required: [] })
  .openapi('Source')

const SourcesSchema = z.array(SourceSchema).openapi('Sources')

const RobotSoftwareSuiteTypeSchema = z
  .enum(['ROS', 'ROS2', 'General'])
  .openapi('RobotSoftwareSuiteType')

const RobotSoftwareSuiteVersionTypeSchema = z
  .enum(['Kinetic', 'Melodic', 'Dashing', 'Foxy'])
  .openapi('RobotSoftwareSuiteVersionType')

const RobotSoftwareSuiteSchema = z
  .object({
    name: RobotSoftwareSuiteTypeSchema.exactOptional().openapi({
      description: 'The name of the robot software suite (ROS distribution).',
    }),
    version: RobotSoftwareSuiteVersionTypeSchema.exactOptional().openapi({
      description: 'The version of the robot software suite (ROS distribution).',
    }),
  })
  .openapi({
    description: 'Information about a robot software suite (ROS distribution).',
    required: [],
  })
  .openapi('RobotSoftwareSuite')

const RevisionIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-]*/)
  .min(1)
  .max(40)
  .openapi('RevisionId')

const RepositoryUrlSchema = z.string().regex(/.+/).min(1).max(1024).openapi('RepositoryUrl')

const EnvironmentSchema = z
  .object({
    uri: RepositoryUrlSchema.exactOptional().openapi({
      description: 'The Docker image URI for either your robot or simulation applications.',
    }),
  })
  .openapi({
    description:
      'The object that contains the Docker image URI for either your robot or simulation applications.',
    required: [],
  })
  .openapi('Environment')

const CreateRobotApplicationResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot application.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the robot application.' }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application.',
    }),
    sources: SourcesSchema.exactOptional().openapi({
      description: 'The sources of the robot application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'The robot software suite (ROS distribution) used by the robot application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the robot application was last updated.',
    }),
    revisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id of the robot application.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the robot application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'An object that contains the Docker image URI used to a create your robot application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateRobotApplicationResponse')

const SourceConfigSchema = z
  .object({
    s3Bucket: S3BucketSchema.exactOptional().openapi({ description: 'The Amazon S3 bucket name.' }),
    s3Key: S3KeySchema.exactOptional().openapi({ description: 'The s3 object key.' }),
    architecture: ArchitectureSchema.exactOptional().openapi({
      description: 'The target processor architecture for the application.',
    }),
  })
  .openapi({ description: 'Information about a source configuration.', required: [] })
  .openapi('SourceConfig')

const CreateRobotApplicationVersionResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot application.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the robot application.' }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application.',
    }),
    sources: SourcesSchema.exactOptional().openapi({
      description: 'The sources of the robot application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'The robot software suite (ROS distribution) used by the robot application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the robot application was last updated.',
    }),
    revisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id of the robot application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'The object that contains the Docker image URI used to create your robot application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateRobotApplicationVersionResponse')

const SimulationSoftwareSuiteTypeSchema = z
  .enum(['Gazebo', 'RosbagPlay', 'SimulationRuntime'])
  .openapi('SimulationSoftwareSuiteType')

const SimulationSoftwareSuiteVersionTypeSchema = z
  .string()
  .regex(/7|9|11|Kinetic|Melodic|Dashing|Foxy/)
  .min(0)
  .max(1024)
  .openapi('SimulationSoftwareSuiteVersionType')

const SimulationSoftwareSuiteSchema = z
  .object({
    name: SimulationSoftwareSuiteTypeSchema.exactOptional().openapi({
      description: 'The name of the simulation software suite.',
    }),
    version: SimulationSoftwareSuiteVersionTypeSchema.exactOptional().openapi({
      description: 'The version of the simulation software suite.',
    }),
  })
  .openapi({ description: 'Information about a simulation software suite.', required: [] })
  .openapi('SimulationSoftwareSuite')

const RenderingEngineTypeSchema = z.literal('OGRE').openapi('RenderingEngineType')

const RenderingEngineVersionTypeSchema = z
  .string()
  .regex(/1.x/)
  .min(1)
  .max(4)
  .openapi('RenderingEngineVersionType')

const RenderingEngineSchema = z
  .object({
    name: RenderingEngineTypeSchema.exactOptional().openapi({
      description: 'The name of the rendering engine.',
    }),
    version: RenderingEngineVersionTypeSchema.exactOptional().openapi({
      description: 'The version of the rendering engine.',
    }),
  })
  .openapi({ description: 'Information about a rendering engine.', required: [] })
  .openapi('RenderingEngine')

const CreateSimulationApplicationResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation application.',
    }),
    name: NameSchema.exactOptional().openapi({
      description: 'The name of the simulation application.',
    }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the simulation application.',
    }),
    sources: SourcesSchema.exactOptional().openapi({
      description: 'The sources of the simulation application.',
    }),
    simulationSoftwareSuite: SimulationSoftwareSuiteSchema.exactOptional().openapi({
      description: 'The simulation software suite used by the simulation application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'Information about the robot software suite (ROS distribution).',
    }),
    renderingEngine: RenderingEngineSchema.exactOptional().openapi({
      description: 'The rendering engine for the simulation application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation application was last updated.',
    }),
    revisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id of the simulation application.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the simulation application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'The object that contains the Docker image URI that you used to create your simulation application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSimulationApplicationResponse')

const CreateSimulationApplicationVersionResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation application.',
    }),
    name: NameSchema.exactOptional().openapi({
      description: 'The name of the simulation application.',
    }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the simulation application.',
    }),
    sources: SourcesSchema.exactOptional().openapi({
      description: 'The sources of the simulation application.',
    }),
    simulationSoftwareSuite: SimulationSoftwareSuiteSchema.exactOptional().openapi({
      description: 'The simulation software suite used by the simulation application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'Information about the robot software suite (ROS distribution).',
    }),
    renderingEngine: RenderingEngineSchema.exactOptional().openapi({
      description: 'The rendering engine for the simulation application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation application was last updated.',
    }),
    revisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision ID of the simulation application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'The object that contains the Docker image URI used to create the simulation application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSimulationApplicationVersionResponse')

const CreateSimulationJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation job.',
    }),
    status: SimulationJobStatusSchema.exactOptional().openapi({
      description: 'The status of the simulation job.',
    }),
    lastStartedAt: LastStartedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job was last started.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job was last updated.',
    }),
    failureBehavior: FailureBehaviorSchema.exactOptional().openapi({
      description: 'the failure behavior for the simulation job.',
    }),
    failureCode: SimulationJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code of the simulation job if it failed:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>RobotApplicationCrash</dt> <dd> <p>Robot application exited abnormally.</p> </dd> <dt>SimulationApplicationCrash</dt> <dd> <p> Simulation application exited abnormally.</p> </dd> <dt>BadPermissionsRobotApplication</dt> <dd> <p>Robot application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsSimulationApplication</dt> <dd> <p>Simulation application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsS3Output</dt> <dd> <p>Unable to publish outputs to customer-provided S3 bucket.</p> </dd> <dt>BadPermissionsCloudwatchLogs</dt> <dd> <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p> </dd> <dt>SubnetIpLimitExceeded</dt> <dd> <p>Subnet IP limit exceeded.</p> </dd> <dt>ENILimitExceeded</dt> <dd> <p>ENI limit exceeded.</p> </dd> <dt>BadPermissionsUserCredentials</dt> <dd> <p>Unable to use the Role provided.</p> </dd> <dt>InvalidBundleRobotApplication</dt> <dd> <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>InvalidBundleSimulationApplication</dt> <dd> <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>RobotApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for RobotApplication does not match value during version creation.</p> </dd> <dt>SimulationApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for SimulationApplication does not match value during version creation.</p> </dd> </dl>',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    outputLocation: OutputLocationSchema.exactOptional().openapi({
      description: 'Simulation job output files location.',
    }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'The logging configuration.',
    }),
    maxJobDurationInSeconds: JobDurationSchema.exactOptional().openapi({
      description: 'The maximum simulation job duration in seconds. ',
    }),
    simulationTimeMillis: SimulationTimeMillisSchema.exactOptional().openapi({
      description: 'The simulation job execution duration in milliseconds.',
    }),
    iamRole: IamRoleSchema.exactOptional().openapi({
      description:
        'The IAM role that allows the simulation job to call the AWS APIs that are specified in its associated policies on your behalf.',
    }),
    robotApplications: RobotApplicationConfigsSchema.exactOptional().openapi({
      description: 'The robot application used by the simulation job.',
    }),
    simulationApplications: SimulationApplicationConfigsSchema.exactOptional().openapi({
      description: 'The simulation application used by the simulation job.',
    }),
    dataSources: DataSourcesSchema.exactOptional().openapi({
      description: 'The data sources for the simulation job.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the simulation job.',
    }),
    vpcConfig: VPCConfigResponseSchema.exactOptional().openapi({
      description: 'Information about the vpc configuration.',
    }),
    compute: ComputeResponseSchema.exactOptional().openapi({
      description: 'Compute information for the simulation job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSimulationJobResponse')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const WorldExportJobStatusSchema = z
  .enum(['Pending', 'Running', 'Completed', 'Failed', 'Canceling', 'Canceled'])
  .openapi('WorldExportJobStatus')

const WorldExportJobErrorCodeSchema = z
  .enum([
    'InternalServiceError',
    'LimitExceeded',
    'ResourceNotFound',
    'RequestThrottled',
    'InvalidInput',
    'AccessDenied',
  ])
  .openapi('WorldExportJobErrorCode')

const CreateWorldExportJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world export job.',
    }),
    status: WorldExportJobStatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the world export job.</p> <dl> <dt>Pending</dt> <dd> <p>The world export job request is pending.</p> </dd> <dt>Running</dt> <dd> <p>The world export job is running. </p> </dd> <dt>Completed</dt> <dd> <p>The world export job completed. </p> </dd> <dt>Failed</dt> <dd> <p>The world export job failed. See <code>failureCode</code> for more information. </p> </dd> <dt>Canceled</dt> <dd> <p>The world export job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The world export job is being cancelled.</p> </dd> </dl>',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world export job was created.',
    }),
    failureCode: WorldExportJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code of the world export job if it failed:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>LimitExceeded</dt> <dd> <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p> </dd> <dt>ResourceNotFound</dt> <dd> <p>The specified resource could not be found. </p> </dd> <dt>RequestThrottled</dt> <dd> <p>The request was throttled.</p> </dd> <dt>InvalidInput</dt> <dd> <p>An input parameter in the request is not valid.</p> </dd> <dt>AllWorldGenerationFailed</dt> <dd> <p>All of the worlds in the world generation job failed. This can happen if your <code>worldCount</code> is greater than 50 or less than 1. </p> </dd> </dl> <p>For more information about troubleshooting WorldForge, see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/troubleshooting-worldforge.html">Troubleshooting Simulation WorldForge</a>. </p>',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    outputLocation: OutputLocationSchema.exactOptional(),
    iamRole: IamRoleSchema.exactOptional().openapi({
      description:
        'The IAM role that the world export process uses to access the Amazon S3 bucket and put the export. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world export job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateWorldExportJobResponse')

const WorldGenerationJobStatusSchema = z
  .enum(['Pending', 'Running', 'Completed', 'Failed', 'PartialFailed', 'Canceling', 'Canceled'])
  .openapi('WorldGenerationJobStatus')

const WorldGenerationJobErrorCodeSchema = z
  .enum([
    'InternalServiceError',
    'LimitExceeded',
    'ResourceNotFound',
    'RequestThrottled',
    'InvalidInput',
    'AllWorldGenerationFailed',
  ])
  .openapi('WorldGenerationJobErrorCode')

const FloorplanCountSchema = z.int().openapi('FloorplanCount')

const InteriorCountPerFloorplanSchema = z.int().openapi('InteriorCountPerFloorplan')

const WorldCountSchema = z
  .object({
    floorplanCount: FloorplanCountSchema.exactOptional().openapi({
      description: 'The number of unique floorplans.',
    }),
    interiorCountPerFloorplan: InteriorCountPerFloorplanSchema.exactOptional().openapi({
      description: 'The number of unique interiors per floorplan.',
    }),
  })
  .openapi({
    description:
      '<p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>',
    required: [],
  })
  .openapi('WorldCount')

const CreateWorldGenerationJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world generator job.',
    }),
    status: WorldGenerationJobStatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the world generator job.</p> <dl> <dt>Pending</dt> <dd> <p>The world generator job request is pending.</p> </dd> <dt>Running</dt> <dd> <p>The world generator job is running. </p> </dd> <dt>Completed</dt> <dd> <p>The world generator job completed. </p> </dd> <dt>Failed</dt> <dd> <p>The world generator job failed. See <code>failureCode</code> for more information. </p> </dd> <dt>PartialFailed</dt> <dd> <p>Some worlds did not generate.</p> </dd> <dt>Canceled</dt> <dd> <p>The world generator job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The world generator job is being cancelled.</p> </dd> </dl>',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world generator job was created.',
    }),
    failureCode: WorldGenerationJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code of the world generator job if it failed:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>LimitExceeded</dt> <dd> <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p> </dd> <dt>ResourceNotFound</dt> <dd> <p>The specified resource could not be found. </p> </dd> <dt>RequestThrottled</dt> <dd> <p>The request was throttled.</p> </dd> <dt>InvalidInput</dt> <dd> <p>An input parameter in the request is not valid.</p> </dd> </dl>',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    template: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world template.',
    }),
    worldCount: WorldCountSchema.exactOptional().openapi({
      description: 'Information about the world count. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world generator job.',
    }),
    worldTags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the generated worlds.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateWorldGenerationJobResponse')

const TemplateNameSchema = z.string().regex(/.*/).min(0).max(255).openapi('TemplateName')

const CreateWorldTemplateResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world template.',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world template was created.',
    }),
    name: TemplateNameSchema.exactOptional().openapi({
      description: 'The name of the world template.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world template.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateWorldTemplateResponse')

const DeleteFleetResponseSchema = z
  .looseObject({})
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('DeleteFleetResponse')

const DeleteRobotResponseSchema = z
  .looseObject({})
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('DeleteRobotResponse')

const DeleteRobotApplicationResponseSchema = z
  .looseObject({})
  .openapi('DeleteRobotApplicationResponse')

const DeleteSimulationApplicationResponseSchema = z
  .looseObject({})
  .openapi('DeleteSimulationApplicationResponse')

const DeleteWorldTemplateResponseSchema = z.looseObject({}).openapi('DeleteWorldTemplateResponse')

const DeregisterRobotResponseSchema = z
  .object({
    fleet: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    robot: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('DeregisterRobotResponse')

const RobotStatusSchema = z
  .enum([
    'Available',
    'Registered',
    'PendingNewDeployment',
    'Deploying',
    'Failed',
    'InSync',
    'NoResponse',
  ])
  .openapi('RobotStatus')

const RobotDeploymentStepSchema = z
  .enum([
    'Validating',
    'DownloadingExtracting',
    'ExecutingDownloadCondition',
    'ExecutingPreLaunch',
    'Launching',
    'ExecutingPostLaunch',
    'Finished',
  ])
  .openapi('RobotDeploymentStep')

const PercentDoneSchema = z.float32().min(0).max(100).openapi('PercentDone')

const GenericIntegerSchema = z.int().openapi('GenericInteger')

const ProgressDetailSchema = z
  .object({
    currentProgress: RobotDeploymentStepSchema.exactOptional().openapi({
      description:
        '<p>The current progress status.</p> <dl> <dt>Validating</dt> <dd> <p>Validating the deployment.</p> </dd> <dt>DownloadingExtracting</dt> <dd> <p>Downloading and extracting the bundle on the robot.</p> </dd> <dt>ExecutingPreLaunch</dt> <dd> <p>Executing pre-launch script(s) if provided.</p> </dd> <dt>Launching</dt> <dd> <p>Launching the robot application.</p> </dd> <dt>ExecutingPostLaunch</dt> <dd> <p>Executing post-launch script(s) if provided.</p> </dd> <dt>Finished</dt> <dd> <p>Deployment is complete.</p> </dd> </dl>',
    }),
    percentDone: PercentDoneSchema.exactOptional().openapi({
      description:
        'Precentage of the step that is done. This currently only applies to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other steps.',
    }),
    estimatedTimeRemainingSeconds: GenericIntegerSchema.exactOptional().openapi({
      description:
        'Estimated amount of time in seconds remaining in the step. This currently only applies to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other steps.',
    }),
    targetResource: GenericStringSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the deployment job.',
    }),
  })
  .openapi({ description: 'Information about the progress of a deployment job.', required: [] })
  .openapi('ProgressDetail')

const RobotDeploymentSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The robot deployment Amazon Resource Name (ARN).',
    }),
    deploymentStartTime: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the deployment was started.',
    }),
    deploymentFinishTime: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the deployment finished.',
    }),
    status: RobotStatusSchema.exactOptional().openapi({
      description: 'The status of the robot deployment.',
    }),
    progressDetail: ProgressDetailSchema.exactOptional().openapi({
      description: 'Information about how the deployment is progressing.',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'A short description of the reason why the robot deployment failed.',
    }),
    failureCode: DeploymentJobErrorCodeSchema.exactOptional().openapi({
      description: 'The robot deployment failure code.',
    }),
  })
  .openapi({ description: 'Information about a robot deployment.', required: [] })
  .openapi('RobotDeployment')

const RobotDeploymentSummarySchema = z
  .array(RobotDeploymentSchema)
  .openapi('RobotDeploymentSummary')

const DescribeDeploymentJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the deployment job.',
    }),
    fleet: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    status: DeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of the deployment job.',
    }),
    deploymentConfig: DeploymentConfigSchema.exactOptional().openapi({
      description: 'The deployment configuration.',
    }),
    deploymentApplicationConfigs: DeploymentApplicationConfigsSchema.exactOptional().openapi({
      description: 'The deployment application configuration.',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'A short description of the reason why the deployment job failed.',
    }),
    failureCode: DeploymentJobErrorCodeSchema.exactOptional().openapi({
      description: 'The deployment job failure code.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the deployment job was created.',
    }),
    robotDeploymentSummary: RobotDeploymentSummarySchema.exactOptional().openapi({
      description: 'A list of robot deployment summaries.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the specified deployment job.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('DescribeDeploymentJobResponse')

const RobotSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the robot.' }),
    fleetArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    status: RobotStatusSchema.exactOptional().openapi({ description: 'The status of the robot.' }),
    greenGrassGroupId: IdSchema.exactOptional().openapi({
      description: 'The Greengrass group associated with the robot.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the robot was created.',
    }),
    architecture: ArchitectureSchema.exactOptional().openapi({
      description: 'The architecture of the robot.',
    }),
    lastDeploymentJob: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the last deployment job.',
    }),
    lastDeploymentTime: CreatedAtSchema.exactOptional().openapi({
      description: 'The time of the last deployment.',
    }),
  })
  .openapi({ description: 'Information about a robot.', required: [] })
  .openapi('Robot')

const RobotsSchema = z.array(RobotSchema).min(0).max(1000).openapi('Robots')

const DescribeFleetResponseSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the fleet.' }),
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    robots: RobotsSchema.exactOptional().openapi({ description: 'A list of robots.' }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the fleet was created.',
    }),
    lastDeploymentStatus: DeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of the last deployment.',
    }),
    lastDeploymentJob: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the last deployment job.',
    }),
    lastDeploymentTime: CreatedAtSchema.exactOptional().openapi({
      description: 'The time of the last deployment.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the specified fleet.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('DescribeFleetResponse')

const DescribeRobotResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the robot.' }),
    fleetArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    status: RobotStatusSchema.exactOptional().openapi({ description: 'The status of the fleet.' }),
    greengrassGroupId: IdSchema.exactOptional().openapi({
      description: 'The Greengrass group id.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the robot was created.',
    }),
    architecture: ArchitectureSchema.exactOptional().openapi({
      description: 'The target architecture of the robot application.',
    }),
    lastDeploymentJob: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the last deployment job.',
    }),
    lastDeploymentTime: CreatedAtSchema.exactOptional().openapi({
      description: 'The time of the last deployment job.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the specified robot.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('DescribeRobotResponse')

const ImageDigestSchema = z
  .string()
  .regex(/[Ss][Hh][Aa]256:[0-9a-fA-F]{64}/)
  .min(0)
  .max(72)
  .openapi('ImageDigest')

const DescribeRobotApplicationResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot application.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the robot application.' }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application.',
    }),
    sources: SourcesSchema.exactOptional().openapi({
      description: 'The sources of the robot application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'The robot software suite (ROS distribution) used by the robot application.',
    }),
    revisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id of the robot application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the robot application was last updated.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the specified robot application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'The object that contains the Docker image URI used to create the robot application.',
    }),
    imageDigest: ImageDigestSchema.exactOptional().openapi({
      description:
        'A SHA256 identifier for the Docker image that you use for your robot application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeRobotApplicationResponse')

const DescribeSimulationApplicationResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot simulation application.',
    }),
    name: NameSchema.exactOptional().openapi({
      description: 'The name of the simulation application.',
    }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the simulation application.',
    }),
    sources: SourcesSchema.exactOptional().openapi({
      description: 'The sources of the simulation application.',
    }),
    simulationSoftwareSuite: SimulationSoftwareSuiteSchema.exactOptional().openapi({
      description: 'The simulation software suite used by the simulation application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'Information about the robot software suite (ROS distribution).',
    }),
    renderingEngine: RenderingEngineSchema.exactOptional().openapi({
      description: 'The rendering engine for the simulation application.',
    }),
    revisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id of the simulation application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation application was last updated.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the specified simulation application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'The object that contains the Docker image URI used to create the simulation application.',
    }),
    imageDigest: ImageDigestSchema.exactOptional().openapi({
      description:
        'A SHA256 identifier for the Docker image that you use for your simulation application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeSimulationApplicationResponse')

const DescribeSimulationJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation job.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the simulation job.' }),
    status: SimulationJobStatusSchema.exactOptional().openapi({
      description: 'The status of the simulation job.',
    }),
    lastStartedAt: LastStartedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job was last started.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job was last updated.',
    }),
    failureBehavior: FailureBehaviorSchema.exactOptional().openapi({
      description: 'The failure behavior for the simulation job.',
    }),
    failureCode: SimulationJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code of the simulation job if it failed:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>RobotApplicationCrash</dt> <dd> <p>Robot application exited abnormally.</p> </dd> <dt>SimulationApplicationCrash</dt> <dd> <p> Simulation application exited abnormally.</p> </dd> <dt>BadPermissionsRobotApplication</dt> <dd> <p>Robot application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsSimulationApplication</dt> <dd> <p>Simulation application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsS3Output</dt> <dd> <p>Unable to publish outputs to customer-provided S3 bucket.</p> </dd> <dt>BadPermissionsCloudwatchLogs</dt> <dd> <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p> </dd> <dt>SubnetIpLimitExceeded</dt> <dd> <p>Subnet IP limit exceeded.</p> </dd> <dt>ENILimitExceeded</dt> <dd> <p>ENI limit exceeded.</p> </dd> <dt>BadPermissionsUserCredentials</dt> <dd> <p>Unable to use the Role provided.</p> </dd> <dt>InvalidBundleRobotApplication</dt> <dd> <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>InvalidBundleSimulationApplication</dt> <dd> <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>RobotApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for RobotApplication does not match value during version creation.</p> </dd> <dt>SimulationApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for SimulationApplication does not match value during version creation.</p> </dd> </dl>',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description:
        'Details about why the simulation job failed. For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/troubleshooting.html">Troubleshooting</a>.',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    outputLocation: OutputLocationSchema.exactOptional().openapi({
      description: 'Location for output files generated by the simulation job.',
    }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'The logging configuration.',
    }),
    maxJobDurationInSeconds: JobDurationSchema.exactOptional().openapi({
      description:
        'The maximum job duration in seconds. The value must be 8 days (691,200 seconds) or less.',
    }),
    simulationTimeMillis: SimulationTimeMillisSchema.exactOptional().openapi({
      description: 'The simulation job execution duration in milliseconds.',
    }),
    iamRole: IamRoleSchema.exactOptional().openapi({
      description:
        'The IAM role that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf.',
    }),
    robotApplications: RobotApplicationConfigsSchema.exactOptional().openapi({
      description: 'A list of robot applications.',
    }),
    simulationApplications: SimulationApplicationConfigsSchema.exactOptional().openapi({
      description: 'A list of simulation applications.',
    }),
    dataSources: DataSourcesSchema.exactOptional().openapi({
      description: 'The data sources for the simulation job.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the specified simulation job.',
    }),
    vpcConfig: VPCConfigResponseSchema.exactOptional().openapi({
      description: 'The VPC configuration.',
    }),
    networkInterface: NetworkInterfaceSchema.exactOptional().openapi({
      description: 'The network interface information for the simulation job.',
    }),
    compute: ComputeResponseSchema.exactOptional().openapi({
      description: 'Compute information for the simulation job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeSimulationJobResponse')

const DescribeSimulationJobBatchResponseSchema: z.ZodType<DescribeSimulationJobBatchResponseType> =
  z
    .object({
      arn: ArnSchema.exactOptional().openapi({
        description: 'The Amazon Resource Name (ARN) of the batch.',
      }),
      status: SimulationJobBatchStatusSchema.exactOptional().openapi({
        description:
          '<p>The status of the batch.</p> <dl> <dt>Pending</dt> <dd> <p>The simulation job batch request is pending.</p> </dd> <dt>InProgress</dt> <dd> <p>The simulation job batch is in progress. </p> </dd> <dt>Failed</dt> <dd> <p>The simulation job batch failed. One or more simulation job requests could not be completed due to an internal failure (like <code>InternalServiceError</code>). See <code>failureCode</code> and <code>failureReason</code> for more information.</p> </dd> <dt>Completed</dt> <dd> <p>The simulation batch job completed. A batch is complete when (1) there are no pending simulation job requests in the batch and none of the failed simulation job requests are due to <code>InternalServiceError</code> and (2) when all created simulation jobs have reached a terminal state (for example, <code>Completed</code> or <code>Failed</code>). </p> </dd> <dt>Canceled</dt> <dd> <p>The simulation batch job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The simulation batch job is being cancelled.</p> </dd> <dt>Completing</dt> <dd> <p>The simulation batch job is completing.</p> </dd> <dt>TimingOut</dt> <dd> <p>The simulation job batch is timing out.</p> <p>If a batch timing out, and there are pending requests that were failing due to an internal failure (like <code>InternalServiceError</code>), the batch status will be <code>Failed</code>. If there are no such failing request, the batch status will be <code>TimedOut</code>. </p> </dd> <dt>TimedOut</dt> <dd> <p>The simulation batch job timed out.</p> </dd> </dl>',
      }),
      lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
        description:
          'The time, in milliseconds since the epoch, when the simulation job batch was last updated.',
      }),
      createdAt: CreatedAtSchema.exactOptional().openapi({
        description:
          'The time, in milliseconds since the epoch, when the simulation job batch was created.',
      }),
      clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
        description:
          'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
      }),
      batchPolicy: BatchPolicySchema.exactOptional().openapi({ description: 'The batch policy.' }),
      failureCode: SimulationJobBatchErrorCodeSchema.exactOptional().openapi({
        description: 'The failure code of the simulation job batch.',
      }),
      failureReason: GenericStringSchema.exactOptional().openapi({
        description: 'The reason the simulation job batch failed.',
      }),
      failedRequests: FailedCreateSimulationJobRequestsSchema.exactOptional().openapi({
        description:
          'A list of failed create simulation job requests. The request failed to be created into a simulation job. Failed requests do not have a simulation job ID. ',
      }),
      pendingRequests: CreateSimulationJobRequestsSchema.exactOptional().openapi({
        description:
          'A list of pending simulation job requests. These requests have not yet been created into simulation jobs.',
      }),
      createdRequests: SimulationJobSummariesSchema.exactOptional().openapi({
        description: 'A list of created simulation job summaries.',
      }),
      tags: TagMapSchema.exactOptional().openapi({
        description:
          'A map that contains tag keys and tag values that are attached to the simulation job batch.',
      }),
    })
    .openapi({ required: [] })
    .openapi('DescribeSimulationJobBatchResponse')

const JsonSchema = z
  .string()
  .regex(/[\S\s]+/)
  .min(1)
  .max(262144)
  .openapi('Json')

const DescribeWorldResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world.',
    }),
    generationJob: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (arn) of the world generation job that generated the world.',
    }),
    template: ArnSchema.exactOptional().openapi({ description: 'The world template.' }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the world was created.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'A map that contains tag keys and tag values that are attached to the world.',
    }),
    worldDescriptionBody: JsonSchema.exactOptional().openapi({
      description: 'Returns the JSON formatted string that describes the contents of your world.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorldResponse')

const DescribeWorldExportJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world export job.',
    }),
    status: WorldExportJobStatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the world export job.</p> <dl> <dt>Pending</dt> <dd> <p>The world export job request is pending.</p> </dd> <dt>Running</dt> <dd> <p>The world export job is running. </p> </dd> <dt>Completed</dt> <dd> <p>The world export job completed. </p> </dd> <dt>Failed</dt> <dd> <p>The world export job failed. See <code>failureCode</code> and <code>failureReason</code> for more information. </p> </dd> <dt>Canceled</dt> <dd> <p>The world export job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The world export job is being cancelled.</p> </dd> </dl>',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world export job was created.',
    }),
    failureCode: WorldExportJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code of the world export job if it failed:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>LimitExceeded</dt> <dd> <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p> </dd> <dt>ResourceNotFound</dt> <dd> <p>The specified resource could not be found. </p> </dd> <dt>RequestThrottled</dt> <dd> <p>The request was throttled.</p> </dd> <dt>InvalidInput</dt> <dd> <p>An input parameter in the request is not valid.</p> </dd> </dl>',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'The reason why the world export job failed.',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    worlds: ArnsSchema.exactOptional().openapi({
      description:
        'A list of Amazon Resource Names (arns) that correspond to worlds to be exported.',
    }),
    outputLocation: OutputLocationSchema.exactOptional(),
    iamRole: IamRoleSchema.exactOptional().openapi({
      description:
        'The IAM role that the world export process uses to access the Amazon S3 bucket and put the export.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world export job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorldExportJobResponse')

const IntegerSchema = z.int().openapi('Integer')

const WorldFailureSchema = z
  .object({
    failureCode: WorldGenerationJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code of the world export job if it failed:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>LimitExceeded</dt> <dd> <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p> </dd> <dt>ResourceNotFound</dt> <dd> <p>The specified resource could not be found. </p> </dd> <dt>RequestThrottled</dt> <dd> <p>The request was throttled.</p> </dd> <dt>InvalidInput</dt> <dd> <p>An input parameter in the request is not valid.</p> </dd> </dl>',
    }),
    sampleFailureReason: GenericStringSchema.exactOptional().openapi({
      description:
        'The sample reason why the world failed. World errors are aggregated. A sample is used as the <code>sampleFailureReason</code>. ',
    }),
    failureCount: IntegerSchema.exactOptional().openapi({
      description: 'The number of failed worlds.',
    }),
  })
  .openapi({ description: 'Information about a failed world.', required: [] })
  .openapi('WorldFailure')

const WorldFailuresSchema = z.array(WorldFailureSchema).min(0).max(100).openapi('WorldFailures')

const FailureSummarySchema = z
  .object({
    totalFailureCount: IntegerSchema.exactOptional().openapi({
      description: 'The total number of failures.',
    }),
    failures: WorldFailuresSchema.exactOptional().openapi({
      description: 'The worlds that failed.',
    }),
  })
  .openapi({ description: 'Information about worlds that failed.', required: [] })
  .openapi('FailureSummary')

const FinishedWorldsSummarySchema = z
  .object({
    finishedCount: IntegerSchema.exactOptional().openapi({
      description: 'The total number of finished worlds.',
    }),
    succeededWorlds: ArnsSchema.exactOptional().openapi({
      description: 'A list of worlds that succeeded.',
    }),
    failureSummary: FailureSummarySchema.exactOptional().openapi({
      description: 'Information about worlds that failed.',
    }),
  })
  .openapi({ description: 'Information about worlds that finished.', required: [] })
  .openapi('FinishedWorldsSummary')

const DescribeWorldGenerationJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world generation job.',
    }),
    status: WorldGenerationJobStatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the world generation job:</p> <dl> <dt>Pending</dt> <dd> <p>The world generation job request is pending.</p> </dd> <dt>Running</dt> <dd> <p>The world generation job is running. </p> </dd> <dt>Completed</dt> <dd> <p>The world generation job completed. </p> </dd> <dt>Failed</dt> <dd> <p>The world generation job failed. See <code>failureCode</code> for more information. </p> </dd> <dt>PartialFailed</dt> <dd> <p>Some worlds did not generate.</p> </dd> <dt>Canceled</dt> <dd> <p>The world generation job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The world generation job is being cancelled.</p> </dd> </dl>',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world generation job was created.',
    }),
    failureCode: WorldGenerationJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code of the world generation job if it failed:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>LimitExceeded</dt> <dd> <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p> </dd> <dt>ResourceNotFound</dt> <dd> <p>The specified resource could not be found. </p> </dd> <dt>RequestThrottled</dt> <dd> <p>The request was throttled.</p> </dd> <dt>InvalidInput</dt> <dd> <p>An input parameter in the request is not valid.</p> </dd> </dl>',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'The reason why the world generation job failed.',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    template: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world template.',
    }),
    worldCount: WorldCountSchema.exactOptional().openapi({
      description: 'Information about the world count.',
    }),
    finishedWorldsSummary: FinishedWorldsSummarySchema.exactOptional().openapi({
      description: 'Summary information about finished worlds.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world generation job.',
    }),
    worldTags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the generated worlds.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorldGenerationJobResponse')

const DescribeWorldTemplateResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world template.',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    name: TemplateNameSchema.exactOptional().openapi({
      description: 'The name of the world template.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world template was created.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world template was last updated.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world template.',
    }),
    version: GenericStringSchema.exactOptional().openapi({
      description: "The version of the world template that you're using.",
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorldTemplateResponse')

const GetWorldTemplateBodyResponseSchema = z
  .object({
    templateBody: JsonSchema.exactOptional().openapi({ description: 'The world template body.' }),
  })
  .openapi({ required: [] })
  .openapi('GetWorldTemplateBodyResponse')

const DeploymentJobSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the deployment job.',
    }),
    fleet: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    status: DeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of the deployment job.',
    }),
    deploymentApplicationConfigs: DeploymentApplicationConfigsSchema.exactOptional().openapi({
      description: 'The deployment application configuration.',
    }),
    deploymentConfig: DeploymentConfigSchema.exactOptional().openapi({
      description: 'The deployment configuration.',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'A short description of the reason why the deployment job failed.',
    }),
    failureCode: DeploymentJobErrorCodeSchema.exactOptional().openapi({
      description: 'The deployment job failure code.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the deployment job was created.',
    }),
  })
  .openapi({ description: 'Information about a deployment job.', required: [] })
  .openapi('DeploymentJob')

const DeploymentJobsSchema = z.array(DeploymentJobSchema).min(0).max(200).openapi('DeploymentJobs')

const PaginationTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-\/+=]*/)
  .min(1)
  .max(2048)
  .openapi('PaginationToken')

const ListDeploymentJobsResponseSchema = z
  .object({
    deploymentJobs: DeploymentJobsSchema.exactOptional().openapi({
      description: 'A list of deployment jobs that meet the criteria of the request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListDeploymentJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('ListDeploymentJobsResponse')

const FilterValuesSchema = z.array(NameSchema).length(1).openapi('FilterValues')

const FilterSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the filter.' }),
    values: FilterValuesSchema.exactOptional().openapi({ description: 'A list of values.' }),
  })
  .openapi({ description: 'Information about a filter.', required: [] })
  .openapi('Filter')

const FleetSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the fleet.' }),
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the fleet was created.',
    }),
    lastDeploymentStatus: DeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of the last fleet deployment.',
    }),
    lastDeploymentJob: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the last deployment job.',
    }),
    lastDeploymentTime: CreatedAtSchema.exactOptional().openapi({
      description: 'The time of the last deployment.',
    }),
  })
  .openapi({ description: 'Information about a fleet.', required: [] })
  .openapi('Fleet')

const FleetsSchema = z.array(FleetSchema).min(0).max(200).openapi('Fleets')

const ListFleetsResponseSchema = z
  .object({
    fleetDetails: FleetsSchema.exactOptional().openapi({
      description: 'A list of fleet details meeting the request criteria.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListFleets</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('ListFleetsResponse')

const RobotApplicationSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the robot application.' }),
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the robot.',
    }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the robot application was last updated.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'Information about a robot software suite (ROS distribution).',
    }),
  })
  .openapi({ description: 'Summary information for a robot application.', required: [] })
  .openapi('RobotApplicationSummary')

const RobotApplicationSummariesSchema = z
  .array(RobotApplicationSummarySchema)
  .min(0)
  .max(100)
  .openapi('RobotApplicationSummaries')

const ListRobotApplicationsResponseSchema = z
  .object({
    robotApplicationSummaries: RobotApplicationSummariesSchema.exactOptional().openapi({
      description: 'A list of robot application summaries that meet the criteria of the request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobotApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListRobotApplicationsResponse')

const ListRobotsResponseSchema = z
  .object({
    robots: RobotsSchema.exactOptional().openapi({
      description: 'A list of robots that meet the criteria of the request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobots</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('ListRobotsResponse')

const SimulationApplicationSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({
      description: 'The name of the simulation application.',
    }),
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation application.',
    }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the simulation application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation application was last updated.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'Information about a robot software suite (ROS distribution).',
    }),
    simulationSoftwareSuite: SimulationSoftwareSuiteSchema.exactOptional().openapi({
      description: 'Information about a simulation software suite.',
    }),
  })
  .openapi({ description: 'Summary information for a simulation application.', required: [] })
  .openapi('SimulationApplicationSummary')

const SimulationApplicationSummariesSchema = z
  .array(SimulationApplicationSummarySchema)
  .min(0)
  .max(100)
  .openapi('SimulationApplicationSummaries')

const ListSimulationApplicationsResponseSchema = z
  .object({
    simulationApplicationSummaries: SimulationApplicationSummariesSchema.exactOptional().openapi({
      description:
        'A list of simulation application summaries that meet the criteria of the request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSimulationApplicationsResponse')

const SimulationJobBatchSummarySchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the batch.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job batch was last updated.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job batch was created.',
    }),
    status: SimulationJobBatchStatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the simulation job batch.</p> <dl> <dt>Pending</dt> <dd> <p>The simulation job batch request is pending.</p> </dd> <dt>InProgress</dt> <dd> <p>The simulation job batch is in progress. </p> </dd> <dt>Failed</dt> <dd> <p>The simulation job batch failed. One or more simulation job requests could not be completed due to an internal failure (like <code>InternalServiceError</code>). See <code>failureCode</code> and <code>failureReason</code> for more information.</p> </dd> <dt>Completed</dt> <dd> <p>The simulation batch job completed. A batch is complete when (1) there are no pending simulation job requests in the batch and none of the failed simulation job requests are due to <code>InternalServiceError</code> and (2) when all created simulation jobs have reached a terminal state (for example, <code>Completed</code> or <code>Failed</code>). </p> </dd> <dt>Canceled</dt> <dd> <p>The simulation batch job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The simulation batch job is being cancelled.</p> </dd> <dt>Completing</dt> <dd> <p>The simulation batch job is completing.</p> </dd> <dt>TimingOut</dt> <dd> <p>The simulation job batch is timing out.</p> <p>If a batch timing out, and there are pending requests that were failing due to an internal failure (like <code>InternalServiceError</code>), the batch status will be <code>Failed</code>. If there are no such failing request, the batch status will be <code>TimedOut</code>. </p> </dd> <dt>TimedOut</dt> <dd> <p>The simulation batch job timed out.</p> </dd> </dl>',
    }),
    failedRequestCount: IntegerSchema.exactOptional().openapi({
      description: 'The number of failed simulation job requests.',
    }),
    pendingRequestCount: IntegerSchema.exactOptional().openapi({
      description: 'The number of pending simulation job requests.',
    }),
    createdRequestCount: IntegerSchema.exactOptional().openapi({
      description: 'The number of created simulation job requests.',
    }),
  })
  .openapi({ description: 'Information about a simulation job batch.', required: [] })
  .openapi('SimulationJobBatchSummary')

const SimulationJobBatchSummariesSchema = z
  .array(SimulationJobBatchSummarySchema)
  .openapi('SimulationJobBatchSummaries')

const ListSimulationJobBatchesResponseSchema = z
  .object({
    simulationJobBatchSummaries: SimulationJobBatchSummariesSchema.exactOptional().openapi({
      description: 'A list of simulation job batch summaries.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobBatches</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSimulationJobBatchesResponse')

const ListSimulationJobsResponseSchema = z
  .object({
    simulationJobSummaries: SimulationJobSummariesSchema.openapi({
      description: 'A list of simulation job summaries that meet the criteria of the request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({ required: ['simulationJobSummaries'] })
  .openapi('ListSimulationJobsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The list of all tags added to the specified resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const WorldExportJobSummarySchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world export job.',
    }),
    status: WorldExportJobStatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the world export job.</p> <dl> <dt>Pending</dt> <dd> <p>The world export job request is pending.</p> </dd> <dt>Running</dt> <dd> <p>The world export job is running. </p> </dd> <dt>Completed</dt> <dd> <p>The world export job completed. </p> </dd> <dt>Failed</dt> <dd> <p>The world export job failed. See <code>failureCode</code> for more information. </p> </dd> <dt>Canceled</dt> <dd> <p>The world export job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The world export job is being cancelled.</p> </dd> </dl>',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world export job was created.',
    }),
    worlds: ArnsSchema.exactOptional().openapi({ description: 'A list of worlds.' }),
    outputLocation: OutputLocationSchema.exactOptional(),
  })
  .openapi({ description: 'Information about a world export job.', required: [] })
  .openapi('WorldExportJobSummary')

const WorldExportJobSummariesSchema = z
  .array(WorldExportJobSummarySchema)
  .min(0)
  .max(100)
  .openapi('WorldExportJobSummaries')

const ListWorldExportJobsResponseSchema = z
  .object({
    worldExportJobSummaries: WorldExportJobSummariesSchema.openapi({
      description: 'Summary information for world export jobs.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldExportJobsRequest</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({ required: ['worldExportJobSummaries'] })
  .openapi('ListWorldExportJobsResponse')

const WorldGenerationJobSummarySchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world generator job.',
    }),
    template: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world template.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world generator job was created.',
    }),
    status: WorldGenerationJobStatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the world generator job:</p> <dl> <dt>Pending</dt> <dd> <p>The world generator job request is pending.</p> </dd> <dt>Running</dt> <dd> <p>The world generator job is running. </p> </dd> <dt>Completed</dt> <dd> <p>The world generator job completed. </p> </dd> <dt>Failed</dt> <dd> <p>The world generator job failed. See <code>failureCode</code> for more information. </p> </dd> <dt>PartialFailed</dt> <dd> <p>Some worlds did not generate.</p> </dd> <dt>Canceled</dt> <dd> <p>The world generator job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The world generator job is being cancelled.</p> </dd> </dl>',
    }),
    worldCount: WorldCountSchema.exactOptional().openapi({
      description: 'Information about the world count.',
    }),
    succeededWorldCount: IntegerSchema.exactOptional().openapi({
      description: 'The number of worlds that were generated.',
    }),
    failedWorldCount: IntegerSchema.exactOptional().openapi({
      description: 'The number of worlds that failed.',
    }),
  })
  .openapi({ description: 'Information about a world generator job.', required: [] })
  .openapi('WorldGenerationJobSummary')

const WorldGenerationJobSummariesSchema = z
  .array(WorldGenerationJobSummarySchema)
  .min(0)
  .max(100)
  .openapi('WorldGenerationJobSummaries')

const ListWorldGenerationJobsResponseSchema = z
  .object({
    worldGenerationJobSummaries: WorldGenerationJobSummariesSchema.openapi({
      description: 'Summary information for world generator jobs.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldGeneratorJobsRequest</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({ required: ['worldGenerationJobSummaries'] })
  .openapi('ListWorldGenerationJobsResponse')

const TemplateSummarySchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the template.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the template was created.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the template was last updated.',
    }),
    name: TemplateNameSchema.exactOptional().openapi({ description: 'The name of the template.' }),
    version: GenericStringSchema.exactOptional().openapi({
      description: "The version of the template that you're using.",
    }),
  })
  .openapi({ description: 'Summary information for a template.', required: [] })
  .openapi('TemplateSummary')

const TemplateSummariesSchema = z.array(TemplateSummarySchema).openapi('TemplateSummaries')

const ListWorldTemplatesResponseSchema = z
  .object({
    templateSummaries: TemplateSummariesSchema.exactOptional().openapi({
      description: 'Summary information for templates.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldTemplates</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListWorldTemplatesResponse')

const WorldSummarySchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the world.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the world was created.',
    }),
    generationJob: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world generation job.',
    }),
    template: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world template.',
    }),
  })
  .openapi({ description: 'Information about a world.', required: [] })
  .openapi('WorldSummary')

const WorldSummariesSchema = z.array(WorldSummarySchema).openapi('WorldSummaries')

const ListWorldsResponseSchema = z
  .object({
    worldSummaries: WorldSummariesSchema.exactOptional().openapi({
      description: 'Summary information for worlds.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorlds</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListWorldsResponse')

const RegisterRobotResponseSchema = z
  .object({
    fleet: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet that the robot will join.',
    }),
    robot: ArnSchema.exactOptional().openapi({
      description: 'Information about the robot registration.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('RegisterRobotResponse')

const RestartSimulationJobResponseSchema = z.looseObject({}).openapi('RestartSimulationJobResponse')

const StartSimulationJobBatchResponseSchema: z.ZodType<StartSimulationJobBatchResponseType> = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the batch.',
    }),
    status: SimulationJobBatchStatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the simulation job batch.</p> <dl> <dt>Pending</dt> <dd> <p>The simulation job batch request is pending.</p> </dd> <dt>InProgress</dt> <dd> <p>The simulation job batch is in progress. </p> </dd> <dt>Failed</dt> <dd> <p>The simulation job batch failed. One or more simulation job requests could not be completed due to an internal failure (like <code>InternalServiceError</code>). See <code>failureCode</code> and <code>failureReason</code> for more information.</p> </dd> <dt>Completed</dt> <dd> <p>The simulation batch job completed. A batch is complete when (1) there are no pending simulation job requests in the batch and none of the failed simulation job requests are due to <code>InternalServiceError</code> and (2) when all created simulation jobs have reached a terminal state (for example, <code>Completed</code> or <code>Failed</code>). </p> </dd> <dt>Canceled</dt> <dd> <p>The simulation batch job was cancelled.</p> </dd> <dt>Canceling</dt> <dd> <p>The simulation batch job is being cancelled.</p> </dd> <dt>Completing</dt> <dd> <p>The simulation batch job is completing.</p> </dd> <dt>TimingOut</dt> <dd> <p>The simulation job batch is timing out.</p> <p>If a batch timing out, and there are pending requests that were failing due to an internal failure (like <code>InternalServiceError</code>), the batch status will be <code>Failed</code>. If there are no such failing request, the batch status will be <code>TimedOut</code>. </p> </dd> <dt>TimedOut</dt> <dd> <p>The simulation batch job timed out.</p> </dd> </dl>',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation job batch was created.',
    }),
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    batchPolicy: BatchPolicySchema.exactOptional().openapi({ description: 'The batch policy.' }),
    failureCode: SimulationJobBatchErrorCodeSchema.exactOptional().openapi({
      description: 'The failure code if the simulation job batch failed.',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'The reason the simulation job batch failed.',
    }),
    failedRequests: FailedCreateSimulationJobRequestsSchema.exactOptional().openapi({
      description:
        'A list of failed simulation job requests. The request failed to be created into a simulation job. Failed requests do not have a simulation job ID. ',
    }),
    pendingRequests: CreateSimulationJobRequestsSchema.exactOptional().openapi({
      description:
        'A list of pending simulation job requests. These requests have not yet been created into simulation jobs.',
    }),
    createdRequests: SimulationJobSummariesSchema.exactOptional().openapi({
      description: 'A list of created simulation job request summaries.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the deployment job batch.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartSimulationJobBatchResponse')

const SyncDeploymentJobResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the synchronization request.',
    }),
    fleet: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet.',
    }),
    status: DeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of the synchronization job.',
    }),
    deploymentConfig: DeploymentConfigSchema.exactOptional().openapi({
      description: 'Information about the deployment configuration.',
    }),
    deploymentApplicationConfigs: DeploymentApplicationConfigsSchema.exactOptional().openapi({
      description: 'Information about the deployment application configurations.',
    }),
    failureReason: GenericStringSchema.exactOptional().openapi({
      description: 'The failure reason if the job fails.',
    }),
    failureCode: DeploymentJobErrorCodeSchema.exactOptional().openapi({
      description:
        '<p>The failure code if the job fails:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>RobotApplicationCrash</dt> <dd> <p>Robot application exited abnormally.</p> </dd> <dt>SimulationApplicationCrash</dt> <dd> <p> Simulation application exited abnormally.</p> </dd> <dt>BadPermissionsRobotApplication</dt> <dd> <p>Robot application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsSimulationApplication</dt> <dd> <p>Simulation application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsS3Output</dt> <dd> <p>Unable to publish outputs to customer-provided S3 bucket.</p> </dd> <dt>BadPermissionsCloudwatchLogs</dt> <dd> <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p> </dd> <dt>SubnetIpLimitExceeded</dt> <dd> <p>Subnet IP limit exceeded.</p> </dd> <dt>ENILimitExceeded</dt> <dd> <p>ENI limit exceeded.</p> </dd> <dt>BadPermissionsUserCredentials</dt> <dd> <p>Unable to use the Role provided.</p> </dd> <dt>InvalidBundleRobotApplication</dt> <dd> <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>InvalidBundleSimulationApplication</dt> <dd> <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>RobotApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for RobotApplication does not match value during version creation.</p> </dd> <dt>SimulationApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for SimulationApplication does not match value during version creation.</p> </dd> </dl>',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the fleet was created.',
    }),
  })
  .openapi({
    deprecated: true,
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('SyncDeploymentJobResponse')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/[a-zA-Z0-9 _.\-\/+=:]*/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateRobotApplicationResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the updated robot application.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the robot application.' }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application.',
    }),
    sources: SourcesSchema.exactOptional().openapi({
      description: 'The sources of the robot application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'The robot software suite (ROS distribution) used by the robot application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the robot application was last updated.',
    }),
    revisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id of the robot application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'The object that contains the Docker image URI for your robot application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateRobotApplicationResponse')

const UpdateSimulationApplicationResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the updated simulation application.',
    }),
    name: NameSchema.exactOptional().openapi({
      description: 'The name of the simulation application.',
    }),
    version: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application.',
    }),
    sources: SourcesSchema.exactOptional().openapi({
      description: 'The sources of the simulation application.',
    }),
    simulationSoftwareSuite: SimulationSoftwareSuiteSchema.exactOptional().openapi({
      description: 'The simulation software suite used by the simulation application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.exactOptional().openapi({
      description: 'Information about the robot software suite (ROS distribution).',
    }),
    renderingEngine: RenderingEngineSchema.exactOptional().openapi({
      description: 'The rendering engine for the simulation application.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the simulation application was last updated.',
    }),
    revisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id of the simulation application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'The object that contains the Docker image URI used for your simulation application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSimulationApplicationResponse')

const UpdateWorldTemplateResponseSchema = z
  .object({
    arn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world template.',
    }),
    name: TemplateNameSchema.exactOptional().openapi({
      description: 'The name of the world template.',
    }),
    createdAt: CreatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world template was created.',
    }),
    lastUpdatedAt: LastUpdatedAtSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the world template was last updated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWorldTemplateResponse')

const BatchDeleteWorldsRequestSchema = z
  .object({
    worlds: ArnsSchema.openapi({
      description: 'A list of Amazon Resource Names (arns) that correspond to worlds to delete.',
    }),
  })
  .openapi({ required: ['worlds'], title: 'BatchDeleteWorldsRequest' })
  .openapi('BatchDeleteWorldsRequest')

const BatchDescribeSimulationJobRequestSchema = z
  .object({
    jobs: ArnsSchema.openapi({
      description: 'A list of Amazon Resource Names (ARNs) of simulation jobs to describe.',
    }),
  })
  .openapi({ required: ['jobs'], title: 'BatchDescribeSimulationJobRequest' })
  .openapi('BatchDescribeSimulationJobRequest')

const CancelDeploymentJobRequestSchema = z
  .object({ job: ArnSchema.openapi({ description: 'The deployment job ARN to cancel.' }) })
  .openapi({
    required: ['job'],
    deprecated: true,
    title: 'CancelDeploymentJobRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('CancelDeploymentJobRequest')

const CancelSimulationJobBatchRequestSchema = z
  .object({ batch: ArnSchema.openapi({ description: 'The id of the batch to cancel.' }) })
  .openapi({ required: ['batch'], title: 'CancelSimulationJobBatchRequest' })
  .openapi('CancelSimulationJobBatchRequest')

const CancelSimulationJobRequestSchema = z
  .object({ job: ArnSchema.openapi({ description: 'The simulation job ARN to cancel.' }) })
  .openapi({ required: ['job'], title: 'CancelSimulationJobRequest' })
  .openapi('CancelSimulationJobRequest')

const CancelWorldExportJobRequestSchema = z
  .object({
    job: ArnSchema.openapi({
      description: 'The Amazon Resource Name (arn) of the world export job to cancel.',
    }),
  })
  .openapi({ required: ['job'], title: 'CancelWorldExportJobRequest' })
  .openapi('CancelWorldExportJobRequest')

const CancelWorldGenerationJobRequestSchema = z
  .object({
    job: ArnSchema.openapi({
      description: 'The Amazon Resource Name (arn) of the world generator job to cancel.',
    }),
  })
  .openapi({ required: ['job'], title: 'CancelWorldGenerationJobRequest' })
  .openapi('CancelWorldGenerationJobRequest')

const CreateDeploymentJobRequestSchema = z
  .object({
    deploymentConfig: DeploymentConfigSchema.exactOptional().openapi({
      description: 'The requested deployment configuration.',
    }),
    clientRequestToken: ClientRequestTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    fleet: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the fleet to deploy.',
    }),
    deploymentApplicationConfigs: DeploymentApplicationConfigsSchema.openapi({
      description: 'The deployment application configuration.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the deployment job.',
    }),
  })
  .openapi({
    required: ['clientRequestToken', 'fleet', 'deploymentApplicationConfigs'],
    deprecated: true,
    title: 'CreateDeploymentJobRequest',
    description:
      'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('CreateDeploymentJobRequest')

const CreateFleetRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name of the fleet.' }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'A map that contains tag keys and tag values that are attached to the fleet.',
    }),
  })
  .openapi({
    required: ['name'],
    deprecated: true,
    title: 'CreateFleetRequest',
    description:
      'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('CreateFleetRequest')

const SourceConfigsSchema = z.array(SourceConfigSchema).openapi('SourceConfigs')

const CreateRobotApplicationRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name of the robot application.' }),
    sources: SourceConfigsSchema.exactOptional().openapi({
      description: 'The sources of the robot application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.openapi({
      description: 'The robot software suite (ROS distribuition) used by the robot application.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the robot application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'The object that contains that URI of the Docker image that you use for your robot application.',
    }),
  })
  .openapi({ required: ['name', 'robotSoftwareSuite'], title: 'CreateRobotApplicationRequest' })
  .openapi('CreateRobotApplicationRequest')

const S3EtagsSchema = z.array(S3EtagSchema).openapi('S3Etags')

const CreateRobotApplicationVersionRequestSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The application information for the robot application.',
    }),
    currentRevisionId: RevisionIdSchema.exactOptional().openapi({
      description:
        'The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.',
    }),
    s3Etags: S3EtagsSchema.exactOptional().openapi({
      description:
        'The Amazon S3 identifier for the zip file bundle that you use for your robot application.',
    }),
    imageDigest: ImageDigestSchema.exactOptional().openapi({
      description:
        'A SHA256 identifier for the Docker image that you use for your robot application.',
    }),
  })
  .openapi({ required: ['application'], title: 'CreateRobotApplicationVersionRequest' })
  .openapi('CreateRobotApplicationVersionRequest')

const CreateRobotRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name for the robot.' }),
    architecture: ArchitectureSchema.openapi({
      description: 'The target architecture of the robot.',
    }),
    greengrassGroupId: IdSchema.openapi({ description: 'The Greengrass group id.' }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'A map that contains tag keys and tag values that are attached to the robot.',
    }),
  })
  .openapi({
    required: ['name', 'architecture', 'greengrassGroupId'],
    deprecated: true,
    title: 'CreateRobotRequest',
    description:
      'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('CreateRobotRequest')

const CreateSimulationApplicationRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name of the simulation application.' }),
    sources: SourceConfigsSchema.exactOptional().openapi({
      description: 'The sources of the simulation application.',
    }),
    simulationSoftwareSuite: SimulationSoftwareSuiteSchema.openapi({
      description: 'The simulation software suite used by the simulation application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.openapi({
      description:
        'The robot software suite (ROS distribution) used by the simulation application.',
    }),
    renderingEngine: RenderingEngineSchema.exactOptional().openapi({
      description: 'The rendering engine for the simulation application.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the simulation application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'The object that contains the Docker image URI used to create your simulation application.',
    }),
  })
  .openapi({
    required: ['name', 'simulationSoftwareSuite', 'robotSoftwareSuite'],
    title: 'CreateSimulationApplicationRequest',
  })
  .openapi('CreateSimulationApplicationRequest')

const CreateSimulationApplicationVersionRequestSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The application information for the simulation application.',
    }),
    currentRevisionId: RevisionIdSchema.exactOptional().openapi({
      description:
        'The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.',
    }),
    s3Etags: S3EtagsSchema.exactOptional().openapi({
      description:
        'The Amazon S3 eTag identifier for the zip file bundle that you use to create the simulation application.',
    }),
    imageDigest: ImageDigestSchema.exactOptional().openapi({
      description:
        'The SHA256 digest used to identify the Docker image URI used to created the simulation application.',
    }),
  })
  .openapi({ required: ['application'], title: 'CreateSimulationApplicationVersionRequest' })
  .openapi('CreateSimulationApplicationVersionRequest')

const CreateSimulationJobRequestSchema = z
  .object({
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    outputLocation: OutputLocationSchema.exactOptional().openapi({
      description: 'Location for output files generated by the simulation job.',
    }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'The logging configuration.',
    }),
    maxJobDurationInSeconds: JobDurationSchema.openapi({
      description:
        'The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.',
    }),
    iamRole: IamRoleSchema.openapi({
      description:
        'The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. ',
    }),
    failureBehavior: FailureBehaviorSchema.exactOptional().openapi({
      description:
        '<p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the instance running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>',
    }),
    robotApplications: RobotApplicationConfigsSchema.exactOptional().openapi({
      description: 'The robot application to use in the simulation job.',
    }),
    simulationApplications: SimulationApplicationConfigsSchema.exactOptional().openapi({
      description: 'The simulation application to use in the simulation job.',
    }),
    dataSources: DataSourceConfigsSchema.exactOptional().openapi({
      description:
        '<p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the simulation job.',
    }),
    vpcConfig: VPCConfigSchema.exactOptional().openapi({
      description:
        'If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and one subnet ID. ',
    }),
    compute: ComputeSchema.exactOptional().openapi({
      description: 'Compute information for the simulation job.',
    }),
  })
  .openapi({
    required: ['maxJobDurationInSeconds', 'iamRole'],
    title: 'CreateSimulationJobRequest',
  })
  .openapi('CreateSimulationJobRequest')

const CreateWorldExportJobRequestSchema = z
  .object({
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    worlds: ArnsSchema.openapi({
      description: 'A list of Amazon Resource Names (arns) that correspond to worlds to export.',
    }),
    outputLocation: OutputLocationSchema,
    iamRole: IamRoleSchema.openapi({
      description:
        'The IAM role that the world export process uses to access the Amazon S3 bucket and put the export.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world export job.',
    }),
  })
  .openapi({
    required: ['worlds', 'outputLocation', 'iamRole'],
    title: 'CreateWorldExportJobRequest',
  })
  .openapi('CreateWorldExportJobRequest')

const CreateWorldGenerationJobRequestSchema = z
  .object({
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    template: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (arn) of the world template describing the worlds you want to create.',
    }),
    worldCount: WorldCountSchema.openapi({ description: 'Information about the world count.' }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world generator job.',
    }),
    worldTags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the generated worlds.',
    }),
  })
  .openapi({ required: ['template', 'worldCount'], title: 'CreateWorldGenerationJobRequest' })
  .openapi('CreateWorldGenerationJobRequest')

const TemplateLocationSchema = z
  .object({
    s3Bucket: S3BucketSchema.openapi({ description: 'The Amazon S3 bucket name.' }),
    s3Key: S3KeySchema.openapi({
      description: 'The list of S3 keys identifying the data source files.',
    }),
  })
  .openapi({
    required: ['s3Bucket', 's3Key'],
    description: 'Information about a template location.',
  })
  .openapi('TemplateLocation')

const CreateWorldTemplateRequestSchema = z
  .object({
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    name: TemplateNameSchema.exactOptional().openapi({
      description: 'The name of the world template.',
    }),
    templateBody: JsonSchema.exactOptional().openapi({ description: 'The world template body.' }),
    templateLocation: TemplateLocationSchema.exactOptional().openapi({
      description: 'The location of the world template.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the world template.',
    }),
  })
  .openapi({ title: 'CreateWorldTemplateRequest', required: [] })
  .openapi('CreateWorldTemplateRequest')

const DeleteFleetRequestSchema = z
  .object({
    fleet: ArnSchema.openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
  })
  .openapi({
    required: ['fleet'],
    deprecated: true,
    title: 'DeleteFleetRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('DeleteFleetRequest')

const DeleteRobotApplicationRequestSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the the robot application.',
    }),
    applicationVersion: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application to delete.',
    }),
  })
  .openapi({ required: ['application'], title: 'DeleteRobotApplicationRequest' })
  .openapi('DeleteRobotApplicationRequest')

const DeleteRobotRequestSchema = z
  .object({
    robot: ArnSchema.openapi({ description: 'The Amazon Resource Name (ARN) of the robot.' }),
  })
  .openapi({
    required: ['robot'],
    deprecated: true,
    title: 'DeleteRobotRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('DeleteRobotRequest')

const DeleteSimulationApplicationRequestSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The application information for the simulation application to delete.',
    }),
    applicationVersion: VersionSchema.exactOptional().openapi({
      description: 'The version of the simulation application to delete.',
    }),
  })
  .openapi({ required: ['application'], title: 'DeleteSimulationApplicationRequest' })
  .openapi('DeleteSimulationApplicationRequest')

const DeleteWorldTemplateRequestSchema = z
  .object({
    template: ArnSchema.openapi({
      description: 'The Amazon Resource Name (arn) of the world template you want to delete.',
    }),
  })
  .openapi({ required: ['template'], title: 'DeleteWorldTemplateRequest' })
  .openapi('DeleteWorldTemplateRequest')

const DeregisterRobotRequestSchema = z
  .object({
    fleet: ArnSchema.openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
    robot: ArnSchema.openapi({ description: 'The Amazon Resource Name (ARN) of the robot.' }),
  })
  .openapi({
    required: ['fleet', 'robot'],
    deprecated: true,
    title: 'DeregisterRobotRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('DeregisterRobotRequest')

const DescribeDeploymentJobRequestSchema = z
  .object({
    job: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the deployment job.',
    }),
  })
  .openapi({
    required: ['job'],
    deprecated: true,
    title: 'DescribeDeploymentJobRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('DescribeDeploymentJobRequest')

const DescribeFleetRequestSchema = z
  .object({
    fleet: ArnSchema.openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
  })
  .openapi({
    required: ['fleet'],
    deprecated: true,
    title: 'DescribeFleetRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('DescribeFleetRequest')

const DescribeRobotApplicationRequestSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the robot application.',
    }),
    applicationVersion: VersionSchema.exactOptional().openapi({
      description: 'The version of the robot application to describe.',
    }),
  })
  .openapi({ required: ['application'], title: 'DescribeRobotApplicationRequest' })
  .openapi('DescribeRobotApplicationRequest')

const DescribeRobotRequestSchema = z
  .object({
    robot: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the robot to be described.',
    }),
  })
  .openapi({
    required: ['robot'],
    deprecated: true,
    title: 'DescribeRobotRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('DescribeRobotRequest')

const DescribeSimulationApplicationRequestSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The application information for the simulation application.',
    }),
    applicationVersion: VersionSchema.exactOptional().openapi({
      description: 'The version of the simulation application to describe.',
    }),
  })
  .openapi({ required: ['application'], title: 'DescribeSimulationApplicationRequest' })
  .openapi('DescribeSimulationApplicationRequest')

const DescribeSimulationJobBatchRequestSchema = z
  .object({ batch: ArnSchema.openapi({ description: 'The id of the batch to describe.' }) })
  .openapi({ required: ['batch'], title: 'DescribeSimulationJobBatchRequest' })
  .openapi('DescribeSimulationJobBatchRequest')

const DescribeSimulationJobRequestSchema = z
  .object({
    job: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation job to be described.',
    }),
  })
  .openapi({ required: ['job'], title: 'DescribeSimulationJobRequest' })
  .openapi('DescribeSimulationJobRequest')

const DescribeWorldExportJobRequestSchema = z
  .object({
    job: ArnSchema.openapi({
      description: 'The Amazon Resource Name (arn) of the world export job to describe.',
    }),
  })
  .openapi({ required: ['job'], title: 'DescribeWorldExportJobRequest' })
  .openapi('DescribeWorldExportJobRequest')

const DescribeWorldGenerationJobRequestSchema = z
  .object({
    job: ArnSchema.openapi({
      description: 'The Amazon Resource Name (arn) of the world generation job to describe.',
    }),
  })
  .openapi({ required: ['job'], title: 'DescribeWorldGenerationJobRequest' })
  .openapi('DescribeWorldGenerationJobRequest')

const DescribeWorldRequestSchema = z
  .object({
    world: ArnSchema.openapi({
      description: 'The Amazon Resource Name (arn) of the world you want to describe.',
    }),
  })
  .openapi({ required: ['world'], title: 'DescribeWorldRequest' })
  .openapi('DescribeWorldRequest')

const DescribeWorldTemplateRequestSchema = z
  .object({
    template: ArnSchema.openapi({
      description: 'The Amazon Resource Name (arn) of the world template you want to describe.',
    }),
  })
  .openapi({ required: ['template'], title: 'DescribeWorldTemplateRequest' })
  .openapi('DescribeWorldTemplateRequest')

const EnvironmentVariableKeySchema = z
  .string()
  .regex(/[A-Z_][A-Z0-9_]*/)
  .min(1)
  .max(1024)
  .openapi('EnvironmentVariableKey')

const FiltersSchema = z.array(FilterSchema).length(1).openapi('Filters')

const GetWorldTemplateBodyRequestSchema = z
  .object({
    template: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world template.',
    }),
    generationJob: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (arn) of the world generator job.',
    }),
  })
  .openapi({ title: 'GetWorldTemplateBodyRequest', required: [] })
  .openapi('GetWorldTemplateBodyRequest')

const MaxResultsSchema = z.int().openapi('MaxResults')

const ListDeploymentJobsRequestSchema = z
  .object({
    filters: FiltersSchema.exactOptional().openapi({
      description:
        '<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListDeploymentJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable. ',
    }),
  })
  .openapi({
    deprecated: true,
    title: 'ListDeploymentJobsRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('ListDeploymentJobsRequest')

const ListFleetsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "<p>If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListFleets</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description:
        '<p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>',
    }),
  })
  .openapi({
    deprecated: true,
    title: 'ListFleetsRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('ListFleetsRequest')

const VersionQualifierSchema = z.string().regex(/ALL/).min(1).max(255).openapi('VersionQualifier')

const ListRobotApplicationsRequestSchema = z
  .object({
    versionQualifier: VersionQualifierSchema.exactOptional().openapi({
      description: 'The version qualifier of the robot application.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobotApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description:
        '<p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>',
    }),
  })
  .openapi({ title: 'ListRobotApplicationsRequest', required: [] })
  .openapi('ListRobotApplicationsRequest')

const ListRobotsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobots</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description:
        '<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Registered</code> or the status <code>Available</code>.</p>',
    }),
  })
  .openapi({
    deprecated: true,
    title: 'ListRobotsRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
    required: [],
  })
  .openapi('ListRobotsRequest')

const ListSimulationApplicationsRequestSchema = z
  .object({
    versionQualifier: VersionQualifierSchema.exactOptional().openapi({
      description: 'The version qualifier of the simulation application.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description:
        '<p>Optional list of filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>',
    }),
  })
  .openapi({ title: 'ListSimulationApplicationsRequest', required: [] })
  .openapi('ListSimulationApplicationsRequest')

const ListSimulationJobBatchesRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobBatches</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description: 'Optional filters to limit results.',
    }),
  })
  .openapi({ title: 'ListSimulationJobBatchesRequest', required: [] })
  .openapi('ListSimulationJobBatchesRequest')

const ListSimulationJobsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description:
        '<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and <code>robotApplicationName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Preparing</code> or the status <code>Running</code>.</p>',
    }),
  })
  .openapi({ title: 'ListSimulationJobsRequest', required: [] })
  .openapi('ListSimulationJobsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListWorldExportJobsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldExportJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListWorldExportJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldExportJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldExportJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description:
        'Optional filters to limit results. You can use <code>generationJobId</code> and <code>templateId</code>.',
    }),
  })
  .openapi({ title: 'ListWorldExportJobsRequest', required: [] })
  .openapi('ListWorldExportJobsRequest')

const ListWorldGenerationJobsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListWorldGeneratorJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldGeneratorJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldGeneratorJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description:
        'Optional filters to limit results. You can use <code>status</code> and <code>templateId</code>.',
    }),
  })
  .openapi({ title: 'ListWorldGenerationJobsRequest', required: [] })
  .openapi('ListWorldGenerationJobsRequest')

const ListWorldTemplatesRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldTemplates</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListWorldTemplates</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldTemplates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldTemplates</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
    }),
  })
  .openapi({ title: 'ListWorldTemplatesRequest', required: [] })
  .openapi('ListWorldTemplatesRequest')

const ListWorldsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorlds</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'When this parameter is used, <code>ListWorlds</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorlds</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorlds</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
    }),
    filters: FiltersSchema.exactOptional().openapi({
      description: 'Optional filters to limit results. You can use <code>status</code>.',
    }),
  })
  .openapi({ title: 'ListWorldsRequest', required: [] })
  .openapi('ListWorldsRequest')

const RegisterRobotRequestSchema = z
  .object({
    fleet: ArnSchema.openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
    robot: ArnSchema.openapi({ description: 'The Amazon Resource Name (ARN) of the robot.' }),
  })
  .openapi({
    required: ['fleet', 'robot'],
    deprecated: true,
    title: 'RegisterRobotRequest',
    description:
      'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('RegisterRobotRequest')

const RestartSimulationJobRequestSchema = z
  .object({
    job: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the simulation job.',
    }),
  })
  .openapi({ required: ['job'], title: 'RestartSimulationJobRequest' })
  .openapi('RestartSimulationJobRequest')

const StartSimulationJobBatchRequestSchema: z.ZodType<StartSimulationJobBatchRequestType> = z
  .object({
    clientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    batchPolicy: BatchPolicySchema.exactOptional().openapi({ description: 'The batch policy.' }),
    createSimulationJobRequests: CreateSimulationJobRequestsSchema.openapi({
      description: 'A list of simulation job requests to create in the batch.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description:
        'A map that contains tag keys and tag values that are attached to the deployment job batch.',
    }),
  })
  .openapi({ required: ['createSimulationJobRequests'], title: 'StartSimulationJobBatchRequest' })
  .openapi('StartSimulationJobBatchRequest')

const SyncDeploymentJobRequestSchema = z
  .object({
    clientRequestToken: ClientRequestTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    fleet: ArnSchema.openapi({ description: 'The target fleet for the synchronization.' }),
  })
  .openapi({
    required: ['clientRequestToken', 'fleet'],
    deprecated: true,
    title: 'SyncDeploymentJobRequest',
    description:
      'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.',
  })
  .openapi('SyncDeploymentJobRequest')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.openapi({
      description: 'A map that contains tag keys and tag values that are attached to the resource.',
    }),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateRobotApplicationRequestSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The application information for the robot application.',
    }),
    sources: SourceConfigsSchema.exactOptional().openapi({
      description: 'The sources of the robot application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.openapi({
      description: 'The robot software suite (ROS distribution) used by the robot application.',
    }),
    currentRevisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id for the robot application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'The object that contains the Docker image URI for your robot application.',
    }),
  })
  .openapi({
    required: ['application', 'robotSoftwareSuite'],
    title: 'UpdateRobotApplicationRequest',
  })
  .openapi('UpdateRobotApplicationRequest')

const UpdateSimulationApplicationRequestSchema = z
  .object({
    application: ArnSchema.openapi({
      description: 'The application information for the simulation application.',
    }),
    sources: SourceConfigsSchema.exactOptional().openapi({
      description: 'The sources of the simulation application.',
    }),
    simulationSoftwareSuite: SimulationSoftwareSuiteSchema.openapi({
      description: 'The simulation software suite used by the simulation application.',
    }),
    robotSoftwareSuite: RobotSoftwareSuiteSchema.openapi({
      description: 'Information about the robot software suite (ROS distribution).',
    }),
    renderingEngine: RenderingEngineSchema.exactOptional().openapi({
      description: 'The rendering engine for the simulation application.',
    }),
    currentRevisionId: RevisionIdSchema.exactOptional().openapi({
      description: 'The revision id for the robot application.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'The object that contains the Docker image URI for your simulation application.',
    }),
  })
  .openapi({
    required: ['application', 'simulationSoftwareSuite', 'robotSoftwareSuite'],
    title: 'UpdateSimulationApplicationRequest',
  })
  .openapi('UpdateSimulationApplicationRequest')

const UpdateWorldTemplateRequestSchema = z
  .object({
    template: ArnSchema.openapi({
      description: 'The Amazon Resource Name (arn) of the world template to update.',
    }),
    name: TemplateNameSchema.exactOptional().openapi({ description: 'The name of the template.' }),
    templateBody: JsonSchema.exactOptional().openapi({ description: 'The world template body.' }),
    templateLocation: TemplateLocationSchema.exactOptional().openapi({
      description: 'The location of the world template.',
    }),
  })
  .openapi({ required: ['template'], title: 'UpdateWorldTemplateRequest' })
  .openapi('UpdateWorldTemplateRequest')

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

export const postBatchDeleteWorldsRoute = createRoute({
  method: 'post',
  path: '/batchDeleteWorlds',
  description: 'Deletes one or more worlds in a batch operation.',
  operationId: 'BatchDeleteWorlds',
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
              worlds: z
                .array(ArnSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'A list of Amazon Resource Names (arns) that correspond to worlds to delete.',
                }),
            })
            .openapi({ required: ['worlds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteWorldsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBatchDescribeSimulationJobRoute = createRoute({
  method: 'post',
  path: '/batchDescribeSimulationJob',
  description: 'Describes one or more simulation jobs.',
  operationId: 'BatchDescribeSimulationJob',
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
              jobs: z
                .array(ArnSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'A list of Amazon Resource Names (ARNs) of simulation jobs to describe.',
                }),
            })
            .openapi({ required: ['jobs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDescribeSimulationJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postCancelDeploymentJobRoute = createRoute({
  method: 'post',
  path: '/cancelDeploymentJob',
  description:
    '<p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'CancelDeploymentJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The deployment job ARN to cancel.' }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelDeploymentJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postCancelSimulationJobRoute = createRoute({
  method: 'post',
  path: '/cancelSimulationJob',
  description: 'Cancels the specified simulation job.',
  operationId: 'CancelSimulationJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The simulation job ARN to cancel.' }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelSimulationJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postCancelSimulationJobBatchRoute = createRoute({
  method: 'post',
  path: '/cancelSimulationJobBatch',
  description:
    'Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. ',
  operationId: 'CancelSimulationJobBatch',
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
              batch: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The id of the batch to cancel.' }),
            })
            .openapi({ required: ['batch'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelSimulationJobBatchResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postCancelWorldExportJobRoute = createRoute({
  method: 'post',
  path: '/cancelWorldExportJob',
  description: 'Cancels the specified export job.',
  operationId: 'CancelWorldExportJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The Amazon Resource Name (arn) of the world export job to cancel.',
                }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelWorldExportJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postCancelWorldGenerationJobRoute = createRoute({
  method: 'post',
  path: '/cancelWorldGenerationJob',
  description: 'Cancels the specified world generator job.',
  operationId: 'CancelWorldGenerationJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (arn) of the world generator job to cancel.',
                }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelWorldGenerationJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postCreateDeploymentJobRoute = createRoute({
  method: 'post',
  path: '/createDeploymentJob',
  description:
    '<p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>',
  operationId: 'CreateDeploymentJob',
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
              deploymentConfig: z
                .object({
                  concurrentDeploymentPercentage: PercentageSchema.exactOptional().openapi({
                    description:
                      'The percentage of robots receiving the deployment at the same time.',
                  }),
                  failureThresholdPercentage: PercentageSchema.exactOptional().openapi({
                    description:
                      'The percentage of deployments that need to fail before stopping deployment.',
                  }),
                  robotDeploymentTimeoutInSeconds: DeploymentTimeoutSchema.exactOptional().openapi({
                    description:
                      'The amount of time, in seconds, to wait for deployment to a single robot to complete. Choose a time between 1 minute and 7 days. The default is 5 hours.',
                  }),
                  downloadConditionFile: S3ObjectSchema.exactOptional().openapi({
                    description: 'The download condition file.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about a deployment configuration.',
                  required: [],
                }),
              clientRequestToken: z
                .string()
                .regex(/[a-zA-Z0-9_\-=]*/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              fleet: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the fleet to deploy.' }),
              deploymentApplicationConfigs: z
                .array(DeploymentApplicationConfigSchema)
                .length(1)
                .openapi({ description: 'The deployment application configuration.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the deployment job.',
                }),
            })
            .openapi({ required: ['clientRequestToken', 'fleet', 'deploymentApplicationConfigs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeploymentJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ConcurrentDeploymentException',
      content: { 'application/json': { schema: ConcurrentDeploymentExceptionSchema } },
    },
    486: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postCreateFleetRoute = createRoute({
  method: 'post',
  path: '/createFleet',
  description:
    '<p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/[a-zA-Z0-9_\-]*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the fleet.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the fleet.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFleetResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postCreateRobotRoute = createRoute({
  method: 'post',
  path: '/createRobot',
  description:
    '<p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>',
  operationId: 'CreateRobot',
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
              name: z
                .string()
                .regex(/[a-zA-Z0-9_\-]*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name for the robot.' }),
              architecture: z
                .enum(['X86_64', 'ARM64', 'ARMHF'])
                .openapi({ description: 'The target architecture of the robot.' }),
              greengrassGroupId: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Greengrass group id.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the robot.',
                }),
            })
            .openapi({ required: ['name', 'architecture', 'greengrassGroupId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRobotResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postCreateRobotApplicationRoute = createRoute({
  method: 'post',
  path: '/createRobotApplication',
  description: 'Creates a robot application. ',
  operationId: 'CreateRobotApplication',
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
              name: z
                .string()
                .regex(/[a-zA-Z0-9_\-]*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the robot application.' }),
              sources: z
                .array(SourceConfigSchema)
                .exactOptional()
                .openapi({ description: 'The sources of the robot application.' }),
              robotSoftwareSuite: z
                .object({
                  name: RobotSoftwareSuiteTypeSchema.exactOptional().openapi({
                    description: 'The name of the robot software suite (ROS distribution).',
                  }),
                  version: RobotSoftwareSuiteVersionTypeSchema.exactOptional().openapi({
                    description: 'The version of the robot software suite (ROS distribution).',
                  }),
                })
                .openapi({
                  description: 'Information about a robot software suite (ROS distribution).',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the robot application.',
                }),
              environment: z
                .object({
                  uri: RepositoryUrlSchema.exactOptional().openapi({
                    description:
                      'The Docker image URI for either your robot or simulation applications.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The object that contains the Docker image URI for either your robot or simulation applications.',
                  required: [],
                }),
            })
            .openapi({ required: ['name', 'robotSoftwareSuite'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRobotApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postCreateRobotApplicationVersionRoute = createRoute({
  method: 'post',
  path: '/createRobotApplicationVersion',
  description: 'Creates a version of a robot application.',
  operationId: 'CreateRobotApplicationVersion',
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
              application: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The application information for the robot application.' }),
              currentRevisionId: z
                .string()
                .regex(/[a-zA-Z0-9_.\-]*/)
                .min(1)
                .max(40)
                .exactOptional()
                .openapi({
                  description:
                    'The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.',
                }),
              s3Etags: z
                .array(S3EtagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon S3 identifier for the zip file bundle that you use for your robot application.',
                }),
              imageDigest: z
                .string()
                .regex(/[Ss][Hh][Aa]256:[0-9a-fA-F]{64}/)
                .min(0)
                .max(72)
                .exactOptional()
                .openapi({
                  description:
                    'A SHA256 identifier for the Docker image that you use for your robot application.',
                }),
            })
            .openapi({ required: ['application'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRobotApplicationVersionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateSimulationApplicationRoute = createRoute({
  method: 'post',
  path: '/createSimulationApplication',
  description: 'Creates a simulation application.',
  operationId: 'CreateSimulationApplication',
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
              name: z
                .string()
                .regex(/[a-zA-Z0-9_\-]*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the simulation application.' }),
              sources: z
                .array(SourceConfigSchema)
                .exactOptional()
                .openapi({ description: 'The sources of the simulation application.' }),
              simulationSoftwareSuite: z
                .object({
                  name: SimulationSoftwareSuiteTypeSchema.exactOptional().openapi({
                    description: 'The name of the simulation software suite.',
                  }),
                  version: SimulationSoftwareSuiteVersionTypeSchema.exactOptional().openapi({
                    description: 'The version of the simulation software suite.',
                  }),
                })
                .openapi({
                  description: 'Information about a simulation software suite.',
                  required: [],
                }),
              robotSoftwareSuite: z
                .object({
                  name: RobotSoftwareSuiteTypeSchema.exactOptional().openapi({
                    description: 'The name of the robot software suite (ROS distribution).',
                  }),
                  version: RobotSoftwareSuiteVersionTypeSchema.exactOptional().openapi({
                    description: 'The version of the robot software suite (ROS distribution).',
                  }),
                })
                .openapi({
                  description: 'Information about a robot software suite (ROS distribution).',
                  required: [],
                }),
              renderingEngine: z
                .object({
                  name: RenderingEngineTypeSchema.exactOptional().openapi({
                    description: 'The name of the rendering engine.',
                  }),
                  version: RenderingEngineVersionTypeSchema.exactOptional().openapi({
                    description: 'The version of the rendering engine.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Information about a rendering engine.', required: [] }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the simulation application.',
                }),
              environment: z
                .object({
                  uri: RepositoryUrlSchema.exactOptional().openapi({
                    description:
                      'The Docker image URI for either your robot or simulation applications.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The object that contains the Docker image URI for either your robot or simulation applications.',
                  required: [],
                }),
            })
            .openapi({ required: ['name', 'simulationSoftwareSuite', 'robotSoftwareSuite'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSimulationApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postCreateSimulationApplicationVersionRoute = createRoute({
  method: 'post',
  path: '/createSimulationApplicationVersion',
  description: 'Creates a simulation application with a specific revision id.',
  operationId: 'CreateSimulationApplicationVersion',
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
              application: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The application information for the simulation application.',
                }),
              currentRevisionId: z
                .string()
                .regex(/[a-zA-Z0-9_.\-]*/)
                .min(1)
                .max(40)
                .exactOptional()
                .openapi({
                  description:
                    'The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.',
                }),
              s3Etags: z
                .array(S3EtagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon S3 eTag identifier for the zip file bundle that you use to create the simulation application.',
                }),
              imageDigest: z
                .string()
                .regex(/[Ss][Hh][Aa]256:[0-9a-fA-F]{64}/)
                .min(0)
                .max(72)
                .exactOptional()
                .openapi({
                  description:
                    'The SHA256 digest used to identify the Docker image URI used to created the simulation application.',
                }),
            })
            .openapi({ required: ['application'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSimulationApplicationVersionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateSimulationJobRoute = createRoute({
  method: 'post',
  path: '/createSimulationJob',
  description:
    '<p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>',
  operationId: 'CreateSimulationJob',
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
              clientRequestToken: z
                .string()
                .regex(/[a-zA-Z0-9_\-=]*/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              outputLocation: z
                .object({
                  s3Bucket: S3BucketSchema.exactOptional().openapi({
                    description: 'The S3 bucket for output.',
                  }),
                  s3Prefix: S3KeySchema.exactOptional().openapi({
                    description:
                      'The S3 folder in the <code>s3Bucket</code> where output files will be placed.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'The output location.', required: [] }),
              loggingConfig: z
                .object({
                  recordAllRosTopics: BoxedBooleanSchema.exactOptional().openapi({
                    deprecated: true,
                    description:
                      '<p>A boolean indicating whether to record all ROS topics.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'The logging configuration.', required: [] }),
              maxJobDurationInSeconds: z
                .int()
                .openapi({
                  description:
                    'The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.',
                }),
              iamRole: z
                .string()
                .regex(/arn:aws:iam::\w+:role\/.*/)
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. ',
                }),
              failureBehavior: z
                .enum(['Fail', 'Continue'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the instance running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>',
                }),
              robotApplications: z
                .array(RobotApplicationConfigSchema)
                .length(1)
                .exactOptional()
                .openapi({ description: 'The robot application to use in the simulation job.' }),
              simulationApplications: z
                .array(SimulationApplicationConfigSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description: 'The simulation application to use in the simulation job.',
                }),
              dataSources: z
                .array(DataSourceConfigSchema)
                .min(1)
                .max(6)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the simulation job.',
                }),
              vpcConfig: z
                .object({
                  subnets: SubnetsSchema.exactOptional().openapi({
                    description: 'A list of one or more subnet IDs in your VPC.',
                  }),
                  securityGroups: SecurityGroupsSchema.exactOptional().openapi({
                    description: 'A list of one or more security groups IDs in your VPC.',
                  }),
                  assignPublicIp: BooleanSchema.exactOptional().openapi({
                    description: 'A boolean indicating whether to assign a public IP address.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.',
                  required: [],
                }),
              compute: z
                .object({
                  simulationUnitLimit: SimulationUnitSchema.exactOptional().openapi({
                    description:
                      'The simulation unit limit. Your simulation is allocated CPU and memory proportional to the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are only billed for the SU utilization you consume up to the maximum value provided. The default is 15. ',
                  }),
                  computeType: ComputeTypeSchema.exactOptional().openapi({
                    description: 'Compute type information for the simulation job.',
                  }),
                  gpuUnitLimit: GPUUnitSchema.exactOptional().openapi({
                    description:
                      'Compute GPU unit limit for the simulation job. It is the same as the number of GPUs allocated to the SimulationJob.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Compute information for the simulation job.',
                  required: [],
                }),
            })
            .openapi({ required: ['maxJobDurationInSeconds', 'iamRole'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSimulationJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postCreateWorldExportJobRoute = createRoute({
  method: 'post',
  path: '/createWorldExportJob',
  description: 'Creates a world export job.',
  operationId: 'CreateWorldExportJob',
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
              clientRequestToken: z
                .string()
                .regex(/[a-zA-Z0-9_\-=]*/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              worlds: z
                .array(ArnSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'A list of Amazon Resource Names (arns) that correspond to worlds to export.',
                }),
              outputLocation: z
                .object({
                  s3Bucket: S3BucketSchema.exactOptional().openapi({
                    description: 'The S3 bucket for output.',
                  }),
                  s3Prefix: S3KeySchema.exactOptional().openapi({
                    description:
                      'The S3 folder in the <code>s3Bucket</code> where output files will be placed.',
                  }),
                })
                .openapi({ description: 'The output location.', required: [] }),
              iamRole: z
                .string()
                .regex(/arn:aws:iam::\w+:role\/.*/)
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'The IAM role that the world export process uses to access the Amazon S3 bucket and put the export.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the world export job.',
                }),
            })
            .openapi({ required: ['worlds', 'outputLocation', 'iamRole'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorldExportJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postCreateWorldGenerationJobRoute = createRoute({
  method: 'post',
  path: '/createWorldGenerationJob',
  description: 'Creates worlds using the specified template.',
  operationId: 'CreateWorldGenerationJob',
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
              clientRequestToken: z
                .string()
                .regex(/[a-zA-Z0-9_\-=]*/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              template: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (arn) of the world template describing the worlds you want to create.',
                }),
              worldCount: z
                .object({
                  floorplanCount: FloorplanCountSchema.exactOptional().openapi({
                    description: 'The number of unique floorplans.',
                  }),
                  interiorCountPerFloorplan:
                    InteriorCountPerFloorplanSchema.exactOptional().openapi({
                      description: 'The number of unique interiors per floorplan.',
                    }),
                })
                .openapi({
                  description:
                    '<p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the world generator job.',
                }),
              worldTags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the generated worlds.',
                }),
            })
            .openapi({ required: ['template', 'worldCount'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorldGenerationJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postCreateWorldTemplateRoute = createRoute({
  method: 'post',
  path: '/createWorldTemplate',
  description: 'Creates a world template.',
  operationId: 'CreateWorldTemplate',
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
              clientRequestToken: z
                .string()
                .regex(/[a-zA-Z0-9_\-=]*/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              name: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the world template.' }),
              templateBody: z
                .string()
                .regex(/[\S\s]+/)
                .min(1)
                .max(262144)
                .exactOptional()
                .openapi({ description: 'The world template body.' }),
              templateLocation: z
                .object({
                  s3Bucket: S3BucketSchema.exactOptional().openapi({
                    description: 'The Amazon S3 bucket name.',
                  }),
                  s3Key: S3KeySchema.exactOptional().openapi({
                    description: 'The list of S3 keys identifying the data source files.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Information about a template location.', required: [] }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the world template.',
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
      content: { 'application/json': { schema: CreateWorldTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteFleetRoute = createRoute({
  method: 'post',
  path: '/deleteFleet',
  description:
    '<p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fleet: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
            })
            .openapi({ required: ['fleet'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFleetResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDeleteRobotRoute = createRoute({
  method: 'post',
  path: '/deleteRobot',
  description:
    '<p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'DeleteRobot',
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
              robot: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the robot.' }),
            })
            .openapi({ required: ['robot'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRobotResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDeleteRobotApplicationRoute = createRoute({
  method: 'post',
  path: '/deleteRobotApplication',
  description: 'Deletes a robot application.',
  operationId: 'DeleteRobotApplication',
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
              application: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the the robot application.',
                }),
              applicationVersion: z
                .string()
                .regex(/(\$LATEST)|[0-9]*/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The version of the robot application to delete.' }),
            })
            .openapi({ required: ['application'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRobotApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteSimulationApplicationRoute = createRoute({
  method: 'post',
  path: '/deleteSimulationApplication',
  description: 'Deletes a simulation application.',
  operationId: 'DeleteSimulationApplication',
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
              application: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The application information for the simulation application to delete.',
                }),
              applicationVersion: z
                .string()
                .regex(/(\$LATEST)|[0-9]*/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The version of the simulation application to delete.' }),
            })
            .openapi({ required: ['application'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSimulationApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteWorldTemplateRoute = createRoute({
  method: 'post',
  path: '/deleteWorldTemplate',
  description: 'Deletes a world template.',
  operationId: 'DeleteWorldTemplate',
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
              template: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (arn) of the world template you want to delete.',
                }),
            })
            .openapi({ required: ['template'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWorldTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeregisterRobotRoute = createRoute({
  method: 'post',
  path: '/deregisterRobot',
  description:
    '<p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'DeregisterRobot',
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
              fleet: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
              robot: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the robot.' }),
            })
            .openapi({ required: ['fleet', 'robot'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterRobotResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeDeploymentJobRoute = createRoute({
  method: 'post',
  path: '/describeDeploymentJob',
  description:
    '<p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'DescribeDeploymentJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the deployment job.' }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDeploymentJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeFleetRoute = createRoute({
  method: 'post',
  path: '/describeFleet',
  description:
    '<p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'DescribeFleet',
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
              fleet: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
            })
            .openapi({ required: ['fleet'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeRobotRoute = createRoute({
  method: 'post',
  path: '/describeRobot',
  description:
    '<p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'DescribeRobot',
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
              robot: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the robot to be described.',
                }),
            })
            .openapi({ required: ['robot'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRobotResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeRobotApplicationRoute = createRoute({
  method: 'post',
  path: '/describeRobotApplication',
  description: 'Describes a robot application.',
  operationId: 'DescribeRobotApplication',
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
              application: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the robot application.',
                }),
              applicationVersion: z
                .string()
                .regex(/(\$LATEST)|[0-9]*/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The version of the robot application to describe.' }),
            })
            .openapi({ required: ['application'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRobotApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeSimulationApplicationRoute = createRoute({
  method: 'post',
  path: '/describeSimulationApplication',
  description: 'Describes a simulation application.',
  operationId: 'DescribeSimulationApplication',
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
              application: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The application information for the simulation application.',
                }),
              applicationVersion: z
                .string()
                .regex(/(\$LATEST)|[0-9]*/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The version of the simulation application to describe.' }),
            })
            .openapi({ required: ['application'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSimulationApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeSimulationJobRoute = createRoute({
  method: 'post',
  path: '/describeSimulationJob',
  description: 'Describes a simulation job.',
  operationId: 'DescribeSimulationJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the simulation job to be described.',
                }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSimulationJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDescribeSimulationJobBatchRoute = createRoute({
  method: 'post',
  path: '/describeSimulationJobBatch',
  description: 'Describes a simulation job batch.',
  operationId: 'DescribeSimulationJobBatch',
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
              batch: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The id of the batch to describe.' }),
            })
            .openapi({ required: ['batch'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSimulationJobBatchResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeWorldRoute = createRoute({
  method: 'post',
  path: '/describeWorld',
  description: 'Describes a world.',
  operationId: 'DescribeWorld',
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
              world: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The Amazon Resource Name (arn) of the world you want to describe.',
                }),
            })
            .openapi({ required: ['world'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorldResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeWorldExportJobRoute = createRoute({
  method: 'post',
  path: '/describeWorldExportJob',
  description: 'Describes a world export job.',
  operationId: 'DescribeWorldExportJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (arn) of the world export job to describe.',
                }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorldExportJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDescribeWorldGenerationJobRoute = createRoute({
  method: 'post',
  path: '/describeWorldGenerationJob',
  description: 'Describes a world generation job.',
  operationId: 'DescribeWorldGenerationJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (arn) of the world generation job to describe.',
                }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorldGenerationJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDescribeWorldTemplateRoute = createRoute({
  method: 'post',
  path: '/describeWorldTemplate',
  description: 'Describes a world template.',
  operationId: 'DescribeWorldTemplate',
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
              template: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (arn) of the world template you want to describe.',
                }),
            })
            .openapi({ required: ['template'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorldTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGetWorldTemplateBodyRoute = createRoute({
  method: 'post',
  path: '/getWorldTemplateBody',
  description: 'Gets the world template body.',
  operationId: 'GetWorldTemplateBody',
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
              template: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .exactOptional()
                .openapi({ description: 'The Amazon Resource Name (arn) of the world template.' }),
              generationJob: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .exactOptional()
                .openapi({
                  description: 'The Amazon Resource Name (arn) of the world generator job.',
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
      content: { 'application/json': { schema: GetWorldTemplateBodyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListDeploymentJobsRoute = createRoute({
  method: 'post',
  path: '/listDeploymentJobs',
  description:
    '<p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'ListDeploymentJobs',
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
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>',
                }),
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListDeploymentJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable. ',
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
      content: { 'application/json': { schema: ListDeploymentJobsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postListFleetsRoute = createRoute({
  method: 'post',
  path: '/listFleets',
  description:
    '<p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "<p>If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListFleets</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>',
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
      content: { 'application/json': { schema: ListFleetsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postListRobotApplicationsRoute = createRoute({
  method: 'post',
  path: '/listRobotApplications',
  description:
    'Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.',
  operationId: 'ListRobotApplications',
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
      content: {
        'application/json': {
          schema: z
            .object({
              versionQualifier: z
                .string()
                .regex(/ALL/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The version qualifier of the robot application.' }),
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobotApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>',
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
      content: { 'application/json': { schema: ListRobotApplicationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListRobotsRoute = createRoute({
  method: 'post',
  path: '/listRobots',
  description:
    '<p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'ListRobots',
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobots</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Registered</code> or the status <code>Available</code>.</p>',
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
      content: { 'application/json': { schema: ListRobotsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postListSimulationApplicationsRoute = createRoute({
  method: 'post',
  path: '/listSimulationApplications',
  description:
    'Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. ',
  operationId: 'ListSimulationApplications',
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
      content: {
        'application/json': {
          schema: z
            .object({
              versionQualifier: z
                .string()
                .regex(/ALL/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The version qualifier of the simulation application.' }),
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional list of filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>',
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
      content: { 'application/json': { schema: ListSimulationApplicationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListSimulationJobBatchesRoute = createRoute({
  method: 'post',
  path: '/listSimulationJobBatches',
  description:
    'Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. ',
  operationId: 'ListSimulationJobBatches',
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobBatches</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({ description: 'Optional filters to limit results.' }),
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
      content: { 'application/json': { schema: ListSimulationJobBatchesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListSimulationJobsRoute = createRoute({
  method: 'post',
  path: '/listSimulationJobs',
  description:
    'Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. ',
  operationId: 'ListSimulationJobs',
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and <code>robotApplicationName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Preparing</code> or the status <code>Running</code>.</p>',
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
      content: { 'application/json': { schema: ListSimulationJobsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists all tags on a AWS RoboMaker resource.',
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
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/arn:.*/)
        .min(1)
        .max(1224)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.',
            schema: { type: 'string', pattern: 'arn:.*', minLength: 1, maxLength: 1224 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    '<p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>',
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
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/arn:.*/)
        .min(1)
        .max(1224)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.',
            schema: { type: 'string', pattern: 'arn:.*', minLength: 1, maxLength: 1224 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the resource.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postListWorldExportJobsRoute = createRoute({
  method: 'post',
  path: '/listWorldExportJobs',
  description: 'Lists world export jobs.',
  operationId: 'ListWorldExportJobs',
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldExportJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListWorldExportJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldExportJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldExportJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Optional filters to limit results. You can use <code>generationJobId</code> and <code>templateId</code>.',
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
      content: { 'application/json': { schema: ListWorldExportJobsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postListWorldGenerationJobsRoute = createRoute({
  method: 'post',
  path: '/listWorldGenerationJobs',
  description: 'Lists world generator jobs.',
  operationId: 'ListWorldGenerationJobs',
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListWorldGeneratorJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldGeneratorJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldGeneratorJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Optional filters to limit results. You can use <code>status</code> and <code>templateId</code>.',
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
      content: { 'application/json': { schema: ListWorldGenerationJobsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postListWorldTemplatesRoute = createRoute({
  method: 'post',
  path: '/listWorldTemplates',
  description: 'Lists world templates.',
  operationId: 'ListWorldTemplates',
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldTemplates</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListWorldTemplates</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldTemplates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldTemplates</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
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
      content: { 'application/json': { schema: ListWorldTemplatesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListWorldsRoute = createRoute({
  method: 'post',
  path: '/listWorlds',
  description: 'Lists worlds.',
  operationId: 'ListWorlds',
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .regex(/[a-zA-Z0-9_.\-\/+=]*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorlds</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. ",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When this parameter is used, <code>ListWorlds</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorlds</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorlds</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
                }),
              filters: z
                .array(FilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Optional filters to limit results. You can use <code>status</code>.',
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
      content: { 'application/json': { schema: ListWorldsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postRegisterRobotRoute = createRoute({
  method: 'post',
  path: '/registerRobot',
  description:
    '<p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>',
  operationId: 'RegisterRobot',
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
              fleet: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
              robot: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the robot.' }),
            })
            .openapi({ required: ['fleet', 'robot'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterRobotResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postRestartSimulationJobRoute = createRoute({
  method: 'post',
  path: '/restartSimulationJob',
  description: 'Restarts a running simulation job.',
  operationId: 'RestartSimulationJob',
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
              job: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the simulation job.' }),
            })
            .openapi({ required: ['job'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestartSimulationJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postStartSimulationJobBatchRoute = createRoute({
  method: 'post',
  path: '/startSimulationJobBatch',
  description:
    'Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. ',
  operationId: 'StartSimulationJobBatch',
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
              clientRequestToken: z
                .string()
                .regex(/[a-zA-Z0-9_\-=]*/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              batchPolicy: z
                .object({
                  timeoutInSeconds: BatchTimeoutInSecondsSchema.exactOptional().openapi({
                    description:
                      '<p>The amount of time, in seconds, to wait for the batch to complete. </p> <p>If a batch times out, and there are pending requests that were failing due to an internal failure (like <code>InternalServiceError</code>), they will be moved to the failed list and the batch status will be <code>Failed</code>. If the pending requests were failing for any other reason, the failed pending requests will be moved to the failed list and the batch status will be <code>TimedOut</code>. </p>',
                  }),
                  maxConcurrency: MaxConcurrencySchema.exactOptional().openapi({
                    description:
                      '<p>The number of active simulation jobs create as part of the batch that can be in an active state at the same time. </p> <p>Active states include: <code>Pending</code>,<code>Preparing</code>, <code>Running</code>, <code>Restarting</code>, <code>RunningFailed</code> and <code>Terminating</code>. All other states are terminal states. </p>',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Information about the batch policy.', required: [] }),
              createSimulationJobRequests: z
                .array(SimulationJobRequestSchema)
                .min(1)
                .max(1000)
                .openapi({
                  description: 'A list of simulation job requests to create in the batch.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A map that contains tag keys and tag values that are attached to the deployment job batch.',
                }),
            })
            .openapi({ required: ['createSimulationJobRequests'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSimulationJobBatchResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postSyncDeploymentJobRoute = createRoute({
  method: 'post',
  path: '/syncDeploymentJob',
  description:
    '<p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>',
  operationId: 'SyncDeploymentJob',
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
              clientRequestToken: z
                .string()
                .regex(/[a-zA-Z0-9_\-=]*/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              fleet: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The target fleet for the synchronization.' }),
            })
            .openapi({ required: ['clientRequestToken', 'fleet'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SyncDeploymentJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ConcurrentDeploymentException',
      content: { 'application/json': { schema: ConcurrentDeploymentExceptionSchema } },
    },
    486: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
  deprecated: true,
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    '<p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>',
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
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/arn:.*/)
        .min(1)
        .max(1224)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing tags.',
            schema: { type: 'string', pattern: 'arn:.*', minLength: 1, maxLength: 1224 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              'A map that contains tag keys and tag values that will be unattached from the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postUpdateRobotApplicationRoute = createRoute({
  method: 'post',
  path: '/updateRobotApplication',
  description: 'Updates a robot application.',
  operationId: 'UpdateRobotApplication',
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
              application: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({ description: 'The application information for the robot application.' }),
              sources: z
                .array(SourceConfigSchema)
                .exactOptional()
                .openapi({ description: 'The sources of the robot application.' }),
              robotSoftwareSuite: z
                .object({
                  name: RobotSoftwareSuiteTypeSchema.exactOptional().openapi({
                    description: 'The name of the robot software suite (ROS distribution).',
                  }),
                  version: RobotSoftwareSuiteVersionTypeSchema.exactOptional().openapi({
                    description: 'The version of the robot software suite (ROS distribution).',
                  }),
                })
                .openapi({
                  description: 'Information about a robot software suite (ROS distribution).',
                  required: [],
                }),
              currentRevisionId: z
                .string()
                .regex(/[a-zA-Z0-9_.\-]*/)
                .min(1)
                .max(40)
                .exactOptional()
                .openapi({ description: 'The revision id for the robot application.' }),
              environment: z
                .object({
                  uri: RepositoryUrlSchema.exactOptional().openapi({
                    description:
                      'The Docker image URI for either your robot or simulation applications.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The object that contains the Docker image URI for either your robot or simulation applications.',
                  required: [],
                }),
            })
            .openapi({ required: ['application', 'robotSoftwareSuite'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRobotApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateSimulationApplicationRoute = createRoute({
  method: 'post',
  path: '/updateSimulationApplication',
  description: 'Updates a simulation application.',
  operationId: 'UpdateSimulationApplication',
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
              application: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The application information for the simulation application.',
                }),
              sources: z
                .array(SourceConfigSchema)
                .exactOptional()
                .openapi({ description: 'The sources of the simulation application.' }),
              simulationSoftwareSuite: z
                .object({
                  name: SimulationSoftwareSuiteTypeSchema.exactOptional().openapi({
                    description: 'The name of the simulation software suite.',
                  }),
                  version: SimulationSoftwareSuiteVersionTypeSchema.exactOptional().openapi({
                    description: 'The version of the simulation software suite.',
                  }),
                })
                .openapi({
                  description: 'Information about a simulation software suite.',
                  required: [],
                }),
              robotSoftwareSuite: z
                .object({
                  name: RobotSoftwareSuiteTypeSchema.exactOptional().openapi({
                    description: 'The name of the robot software suite (ROS distribution).',
                  }),
                  version: RobotSoftwareSuiteVersionTypeSchema.exactOptional().openapi({
                    description: 'The version of the robot software suite (ROS distribution).',
                  }),
                })
                .openapi({
                  description: 'Information about a robot software suite (ROS distribution).',
                  required: [],
                }),
              renderingEngine: z
                .object({
                  name: RenderingEngineTypeSchema.exactOptional().openapi({
                    description: 'The name of the rendering engine.',
                  }),
                  version: RenderingEngineVersionTypeSchema.exactOptional().openapi({
                    description: 'The version of the rendering engine.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Information about a rendering engine.', required: [] }),
              currentRevisionId: z
                .string()
                .regex(/[a-zA-Z0-9_.\-]*/)
                .min(1)
                .max(40)
                .exactOptional()
                .openapi({ description: 'The revision id for the robot application.' }),
              environment: z
                .object({
                  uri: RepositoryUrlSchema.exactOptional().openapi({
                    description:
                      'The Docker image URI for either your robot or simulation applications.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The object that contains the Docker image URI for either your robot or simulation applications.',
                  required: [],
                }),
            })
            .openapi({
              required: ['application', 'simulationSoftwareSuite', 'robotSoftwareSuite'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSimulationApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateWorldTemplateRoute = createRoute({
  method: 'post',
  path: '/updateWorldTemplate',
  description: 'Updates a world template.',
  operationId: 'UpdateWorldTemplate',
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
              template: z
                .string()
                .regex(/arn:.*/)
                .min(1)
                .max(1224)
                .openapi({
                  description: 'The Amazon Resource Name (arn) of the world template to update.',
                }),
              name: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the template.' }),
              templateBody: z
                .string()
                .regex(/[\S\s]+/)
                .min(1)
                .max(262144)
                .exactOptional()
                .openapi({ description: 'The world template body.' }),
              templateLocation: z
                .object({
                  s3Bucket: S3BucketSchema.exactOptional().openapi({
                    description: 'The Amazon S3 bucket name.',
                  }),
                  s3Key: S3KeySchema.exactOptional().openapi({
                    description: 'The list of S3 keys identifying the data source files.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Information about a template location.', required: [] }),
            })
            .openapi({ required: ['template'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWorldTemplateResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
