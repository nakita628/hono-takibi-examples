import { createRoute, z } from '@hono/zod-openapi'

const EntryPointPathSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('EntryPointPath')

const EntryPointArgumentSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(10280)
  .openapi('EntryPointArgument')

const EntryPointArgumentsSchema = z.array(EntryPointArgumentSchema).openapi('EntryPointArguments')

const SparkSubmitParametersSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(102400)
  .openapi('SparkSubmitParameters')

const SparkSubmitJobDriverSchema = z
  .object({
    entryPoint: EntryPointPathSchema.and(
      z.any().openapi({ description: 'The entry point of job application.' }),
    ),
    entryPointArguments: EntryPointArgumentsSchema.and(
      z.any().openapi({ description: 'The arguments for job application.' }),
    ).exactOptional(),
    sparkSubmitParameters: SparkSubmitParametersSchema.and(
      z.any().openapi({ description: 'The Spark submit parameters that are used for job runs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entryPoint'],
    description: 'The information about job driver for Spark submit.',
  })
  .openapi('SparkSubmitJobDriver')

const SparkSqlParametersSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(102400)
  .openapi('SparkSqlParameters')

const SparkSqlJobDriverSchema = z
  .object({
    entryPoint: EntryPointPathSchema.and(
      z.any().openapi({ description: 'The SQL file to be executed.' }),
    ).exactOptional(),
    sparkSqlParameters: SparkSqlParametersSchema.and(
      z
        .any()
        .openapi({ description: 'The Spark parameters to be included in the Spark SQL command.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The job driver for job type.', required: [] })
  .openapi('SparkSqlJobDriver')

type JobDriverType = {
  sparkSubmitJobDriver?: z.infer<typeof SparkSubmitJobDriverSchema> & { [key: string]: unknown }
  sparkSqlJobDriver?: z.infer<typeof SparkSqlJobDriverSchema> & { [key: string]: unknown }
}

const ConfigurationSchema: z.ZodType<ConfigurationType> = z
  .lazy(() =>
    z
      .object({
        classification: String1024Schema.and(
          z.any().openapi({ description: 'The classification within a configuration.' }),
        ),
        properties: z
          .any()
          .exactOptional()
          .openapi({
            description: 'A set of properties specified within a configuration classification.',
          }),
        configurations: ConfigurationListSchema.and(
          z
            .any()
            .openapi({
              description:
                'A list of additional configurations to apply within a configuration object.',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['classification'],
        description:
          'A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.',
      }),
  )
  .openapi('Configuration')

type ConfigurationListType = z.infer<typeof ConfigurationSchema>[]

const PersistentAppUISchema = z.enum(['ENABLED', 'DISABLED']).openapi('PersistentAppUI')

const LogGroupNameSchema = z
  .string()
  .regex(/[\.\-_\/#A-Za-z0-9]+/)
  .min(1)
  .max(512)
  .openapi('LogGroupName')

const String256Schema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('String256')

const CloudWatchMonitoringConfigurationSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group for log publishing.' }),
    ),
    logStreamNamePrefix: String256Schema.and(
      z.any().openapi({ description: 'The specified name prefix for log streams.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['logGroupName'],
    description:
      'A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.',
  })
  .openapi('CloudWatchMonitoringConfiguration')

const UriStringSchema = z
  .string()
  .regex(/[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\r\n\t]*/)
  .min(1)
  .max(10280)
  .openapi('UriString')

const S3MonitoringConfigurationSchema = z
  .object({
    logUri: UriStringSchema.and(
      z.any().openapi({ description: 'Amazon S3 destination URI for log publishing.' }),
    ),
  })
  .openapi({
    required: ['logUri'],
    description:
      ' Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.',
  })
  .openapi('S3MonitoringConfiguration')

type MonitoringConfigurationType = {
  persistentAppUI?: z.infer<typeof PersistentAppUISchema> & { [key: string]: unknown }
  cloudWatchMonitoringConfiguration?: z.infer<typeof CloudWatchMonitoringConfigurationSchema> & {
    [key: string]: unknown
  }
  s3MonitoringConfiguration?: z.infer<typeof S3MonitoringConfigurationSchema> & {
    [key: string]: unknown
  }
}

type String1024Type = string

const String1024Schema: z.ZodType<String1024Type> = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1024)
  .openapi('String1024')

const ConfigurationListSchema: z.ZodType<ConfigurationListType> = z
  .lazy(() => z.array(ConfigurationSchema).max(100))
  .openapi('ConfigurationList')

type ConfigurationType = {
  classification: z.infer<typeof String1024Schema> & { [key: string]: unknown }
  properties?: { [key: string]: unknown }
  configurations?: z.infer<typeof ConfigurationListSchema> & { [key: string]: unknown }
}

const ResourceIdStringSchema = z
  .string()
  .regex(/[0-9a-z]+/)
  .min(1)
  .max(64)
  .openapi('ResourceIdString')

const CancelJobRunResponseSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The output contains the ID of the cancelled job run.' }),
    ).exactOptional(),
    virtualClusterId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output contains the virtual cluster ID for which the job run is cancelled.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelJobRunResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ResourceNameStringSchema = z
  .string()
  .regex(/[\.\-_\/#A-Za-z0-9]+/)
  .min(1)
  .max(64)
  .openapi('ResourceNameString')

const JobTemplateArnSchema = z
  .string()
  .regex(/^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\d{12}):\/jobtemplates\/[0-9a-zA-Z]+$/)
  .min(60)
  .max(1024)
  .openapi('JobTemplateArn')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const CreateJobTemplateResponseSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'This output display the created job template ID.' }),
    ).exactOptional(),
    name: ResourceNameStringSchema.and(
      z
        .any()
        .openapi({ description: 'This output displays the name of the created job template.' }),
    ).exactOptional(),
    arn: JobTemplateArnSchema.and(
      z.any().openapi({ description: 'This output display the ARN of the created job template.' }),
    ).exactOptional(),
    createdAt: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'This output displays the date and time when the job template was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateJobTemplateResponse')

const ParametricIAMRoleArnSchema = z
  .string()
  .regex(
    /(^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$)|([\.\-_\#A-Za-z0-9\$\{\}]+)/,
  )
  .min(4)
  .max(2048)
  .openapi('ParametricIAMRoleArn')

const ParametricReleaseLabelSchema = z
  .string()
  .regex(/([\.\-_\/A-Za-z0-9]+|\$\{[a-zA-Z]\w*\})/)
  .min(1)
  .max(64)
  .openapi('ParametricReleaseLabel')

const TemplateParameterSchema = z
  .string()
  .regex(/[\.\-_\/#A-Za-z0-9\$\{\}]+/)
  .min(1)
  .max(512)
  .openapi('TemplateParameter')

const ParametricCloudWatchMonitoringConfigurationSchema = z
  .object({
    logGroupName: TemplateParameterSchema.and(
      z.any().openapi({ description: ' The name of the log group for log publishing.' }),
    ).exactOptional(),
    logStreamNamePrefix: String256Schema.and(
      z.any().openapi({ description: ' The specified name prefix for log streams.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs. This data type allows job template parameters to be specified within.',
    required: [],
  })
  .openapi('ParametricCloudWatchMonitoringConfiguration')

const ParametricS3MonitoringConfigurationSchema = z
  .object({
    logUri: UriStringSchema.and(
      z.any().openapi({ description: 'Amazon S3 destination URI for log publishing.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. This data type allows job template parameters to be specified within.',
    required: [],
  })
  .openapi('ParametricS3MonitoringConfiguration')

const ParametricMonitoringConfigurationSchema = z
  .object({
    persistentAppUI: TemplateParameterSchema.and(
      z
        .any()
        .openapi({ description: ' Monitoring configurations for the persistent application UI.' }),
    ).exactOptional(),
    cloudWatchMonitoringConfiguration: ParametricCloudWatchMonitoringConfigurationSchema.and(
      z.any().openapi({ description: ' Monitoring configurations for CloudWatch.' }),
    ).exactOptional(),
    s3MonitoringConfiguration: ParametricS3MonitoringConfigurationSchema.and(
      z.any().openapi({ description: ' Amazon S3 configuration for monitoring log publishing.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Configuration setting for monitoring. This data type allows job template parameters to be specified within.',
    required: [],
  })
  .openapi('ParametricMonitoringConfiguration')

const ParametricConfigurationOverridesSchema = z
  .object({
    applicationConfiguration: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: ' The configurations for the application running by the job run.',
        }),
    ).exactOptional(),
    monitoringConfiguration: ParametricMonitoringConfigurationSchema.and(
      z.any().openapi({ description: ' The configurations for monitoring. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A configuration specification to be used to override existing configurations. This data type allows job template parameters to be specified within.',
    required: [],
  })
  .openapi('ParametricConfigurationOverrides')

const JobDriverSchema: z.ZodType<JobDriverType> = z
  .lazy(() =>
    z
      .object({
        sparkSubmitJobDriver: SparkSubmitJobDriverSchema.and(
          z.any().openapi({ description: 'The job driver parameters specified for spark submit.' }),
        ).exactOptional(),
        sparkSqlJobDriver: SparkSqlJobDriverSchema.and(
          z.any().openapi({ description: 'The job driver for job type.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.',
        required: [],
      }),
  )
  .openapi('JobDriver')

const TemplateParameterDataTypeSchema = z
  .enum(['NUMBER', 'STRING'])
  .openapi('TemplateParameterDataType')

const TemplateParameterConfigurationSchema = z
  .object({
    type: TemplateParameterDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the job template parameter. Allowed values are: ‘STRING’, ‘NUMBER’.',
        }),
    ).exactOptional(),
    defaultValue: String1024Schema.and(
      z.any().openapi({ description: 'The default value for the job template parameter.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration of a job template parameter.', required: [] })
  .openapi('TemplateParameterConfiguration')

const TemplateParameterConfigurationMapSchema = z
  .record(z.string(), TemplateParameterConfigurationSchema)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('TemplateParameterConfigurationMap')

const StringEmpty256Schema = z
  .string()
  .regex(/.*\S.*/)
  .min(0)
  .max(256)
  .openapi('StringEmpty256')

const TagMapSchema = z
  .record(z.string(), StringEmpty256Schema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const EndpointArnSchema = z
  .string()
  .regex(
    /^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\d{12}):\/virtualclusters\/[0-9a-zA-Z]+\/endpoints\/[0-9a-zA-Z]+$/,
  )
  .min(60)
  .max(1024)
  .openapi('EndpointArn')

const CreateManagedEndpointResponseSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The output contains the ID of the managed endpoint.' }),
    ).exactOptional(),
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The output contains the name of the managed endpoint.' }),
    ).exactOptional(),
    arn: EndpointArnSchema.and(
      z.any().openapi({ description: 'The output contains the ARN of the managed endpoint.' }),
    ).exactOptional(),
    virtualClusterId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The output contains the ID of the virtual cluster.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateManagedEndpointResponse')

const MonitoringConfigurationSchema: z.ZodType<MonitoringConfigurationType> = z
  .lazy(() =>
    z
      .object({
        persistentAppUI: PersistentAppUISchema.and(
          z
            .any()
            .openapi({
              description: 'Monitoring configurations for the persistent application UI. ',
            }),
        ).exactOptional(),
        cloudWatchMonitoringConfiguration: CloudWatchMonitoringConfigurationSchema.and(
          z.any().openapi({ description: 'Monitoring configurations for CloudWatch.' }),
        ).exactOptional(),
        s3MonitoringConfiguration: S3MonitoringConfigurationSchema.and(
          z
            .any()
            .openapi({ description: 'Amazon S3 configuration for monitoring log publishing.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'Configuration setting for monitoring.', required: [] }),
  )
  .openapi('MonitoringConfiguration')

const VirtualClusterArnSchema = z
  .string()
  .regex(/^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\d{12}):\/virtualclusters\/[0-9a-zA-Z]+$/)
  .min(60)
  .max(1024)
  .openapi('VirtualClusterArn')

const CreateVirtualClusterResponseSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'This output contains the virtual cluster ID.' }),
    ).exactOptional(),
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'This output contains the name of the virtual cluster.' }),
    ).exactOptional(),
    arn: VirtualClusterArnSchema.and(
      z.any().openapi({ description: 'This output contains the ARN of virtual cluster.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVirtualClusterResponse')

const ContainerProviderTypeSchema = z.literal('EKS').openapi('ContainerProviderType')

const ClusterIdSchema = z
  .string()
  .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
  .min(1)
  .max(100)
  .openapi('ClusterId')

const KubernetesNamespaceSchema = z
  .string()
  .regex(/[a-z0-9]([-a-z0-9]*[a-z0-9])?/)
  .min(1)
  .max(63)
  .openapi('KubernetesNamespace')

const EksInfoSchema = z
  .object({
    namespace: KubernetesNamespaceSchema.and(
      z.any().openapi({ description: 'The namespaces of the Amazon EKS cluster.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The information about the Amazon EKS cluster.', required: [] })
  .openapi('EksInfo')

const ContainerInfoSchema = z
  .object({
    eksInfo: EksInfoSchema.and(
      z.any().openapi({ description: 'The information about the Amazon EKS cluster.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The information about the container used for a job run or a managed endpoint.',
    required: [],
  })
  .openapi('ContainerInfo')

const DeleteJobTemplateResponseSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description: 'This output contains the ID of the job template that was deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteJobTemplateResponse')

const DeleteManagedEndpointResponseSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The output displays the ID of the managed endpoint.' }),
    ).exactOptional(),
    virtualClusterId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({ description: "The output displays the ID of the endpoint's virtual cluster." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteManagedEndpointResponse')

const DeleteVirtualClusterResponseSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description: 'This output contains the ID of the virtual cluster that will be deleted. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteVirtualClusterResponse')

const JobArnSchema = z
  .string()
  .regex(
    /^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\d{12}):\/virtualclusters\/[0-9a-zA-Z]+\/jobruns\/[0-9a-zA-Z]+$/,
  )
  .min(60)
  .max(1024)
  .openapi('JobArn')

const JobRunStateSchema = z
  .enum(['PENDING', 'SUBMITTED', 'RUNNING', 'FAILED', 'CANCELLED', 'CANCEL_PENDING', 'COMPLETED'])
  .openapi('JobRunState')

const ClientTokenSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(64)
  .openapi('ClientToken')

const IAMRoleArnSchema = z
  .string()
  .regex(
    /^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$/,
  )
  .min(20)
  .max(2048)
  .openapi('IAMRoleArn')

const ReleaseLabelSchema = z
  .string()
  .regex(/[\.\-_\/A-Za-z0-9]+/)
  .min(1)
  .max(64)
  .openapi('ReleaseLabel')

const ConfigurationOverridesSchema = z
  .object({
    applicationConfiguration: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'The configurations for the application running by the job run. ',
        }),
    ).exactOptional(),
    monitoringConfiguration: MonitoringConfigurationSchema.and(
      z.any().openapi({ description: 'The configurations for monitoring.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A configuration specification to be used to override existing configurations.',
    required: [],
  })
  .openapi('ConfigurationOverrides')

const RequestIdentityUserArnSchema = z
  .string()
  .regex(/^arn:(aws[a-zA-Z0-9-]*):(iam|sts)::(\d{12})?:[\w\/+=,.@-]+$/)
  .min(20)
  .max(2048)
  .openapi('RequestIdentityUserArn')

const FailureReasonSchema = z
  .enum(['INTERNAL_ERROR', 'USER_ERROR', 'VALIDATION_ERROR', 'CLUSTER_UNAVAILABLE'])
  .openapi('FailureReason')

const JavaIntegerSchema = z.int().openapi('JavaInteger')

const RetryPolicyConfigurationSchema = z
  .object({
    maxAttempts: JavaIntegerSchema.and(
      z.any().openapi({ description: "The maximum number of attempts on the job's driver." }),
    ),
  })
  .openapi({
    required: ['maxAttempts'],
    description: 'The configuration of the retry policy that the job runs on.',
  })
  .openapi('RetryPolicyConfiguration')

const RetryPolicyExecutionSchema = z
  .object({
    currentAttemptCount: JavaIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The current number of attempts made on the driver of the job.' }),
    ),
  })
  .openapi({
    required: ['currentAttemptCount'],
    description: 'The current status of the retry policy executed on the job.',
  })
  .openapi('RetryPolicyExecution')

const JobRunSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the job run.' }),
    ).exactOptional(),
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The name of the job run.' }),
    ).exactOptional(),
    virtualClusterId: ResourceIdStringSchema.and(
      z.any().openapi({ description: "The ID of the job run's virtual cluster." }),
    ).exactOptional(),
    arn: JobArnSchema.and(z.any().openapi({ description: 'The ARN of job run.' })).exactOptional(),
    state: JobRunStateSchema.and(
      z.any().openapi({ description: 'The state of the job run. ' }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client token used to start a job run.' }),
    ).exactOptional(),
    executionRoleArn: IAMRoleArnSchema.and(
      z.any().openapi({ description: 'The execution role ARN of the job run.' }),
    ).exactOptional(),
    releaseLabel: ReleaseLabelSchema.and(
      z.any().openapi({ description: 'The release version of Amazon EMR.' }),
    ).exactOptional(),
    configurationOverrides: ConfigurationOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings that are used to override default configuration.',
        }),
    ).exactOptional(),
    jobDriver: JobDriverSchema.and(
      z.any().openapi({ description: 'Parameters of job driver for the job run.' }),
    ).exactOptional(),
    createdAt: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the job run was created.' }),
    ).exactOptional(),
    createdBy: RequestIdentityUserArnSchema.and(
      z.any().openapi({ description: 'The user who created the job run.' }),
    ).exactOptional(),
    finishedAt: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the job run has finished.' }),
    ).exactOptional(),
    stateDetails: String256Schema.and(
      z.any().openapi({ description: 'Additional details of the job run state.' }),
    ).exactOptional(),
    failureReason: FailureReasonSchema.and(
      z.any().openapi({ description: 'The reasons why the job run has failed.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The assigned tags of the job run.' }),
    ).exactOptional(),
    retryPolicyConfiguration: RetryPolicyConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration of the retry policy that the job runs on.' }),
    ).exactOptional(),
    retryPolicyExecution: RetryPolicyExecutionSchema.and(
      z
        .any()
        .openapi({ description: 'The current status of the retry policy executed on the job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. ',
    required: [],
  })
  .openapi('JobRun')

const DescribeJobRunResponseSchema = z
  .object({
    jobRun: JobRunSchema.and(
      z.any().openapi({ description: 'The output displays information about a job run.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeJobRunResponse')

const JobTemplateDataSchema = z
  .object({
    executionRoleArn: ParametricIAMRoleArnSchema.and(
      z.any().openapi({ description: 'The execution role ARN of the job run.' }),
    ),
    releaseLabel: ParametricReleaseLabelSchema.and(
      z.any().openapi({ description: ' The release version of Amazon EMR.' }),
    ),
    configurationOverrides: ParametricConfigurationOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The configuration settings that are used to override defaults configuration.',
        }),
    ).exactOptional(),
    jobDriver: JobDriverSchema,
    parameterConfiguration: TemplateParameterConfigurationMapSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration of parameters existing in the job template.' }),
    ).exactOptional(),
    jobTags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags assigned to jobs started using the job template.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['executionRoleArn', 'releaseLabel', 'jobDriver'],
    description:
      'The values of StartJobRun API requests used in job runs started using the job template.',
  })
  .openapi('JobTemplateData')

const KmsKeyArnSchema = z
  .string()
  .regex(
    /^(arn:(aws[a-zA-Z0-9-]*):kms:([a-zA-Z0-9]+-?)+:(\d{12})?:key\/[(0-9a-zA-Z)-?]+|\$\{[a-zA-Z]\w*\})$/,
  )
  .min(3)
  .max(2048)
  .openapi('KmsKeyArn')

const String2048Schema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(2048)
  .openapi('String2048')

const JobTemplateSchema = z
  .object({
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The name of the job template.' }),
    ).exactOptional(),
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the job template.' }),
    ).exactOptional(),
    arn: JobTemplateArnSchema.and(
      z.any().openapi({ description: 'The ARN of the job template.' }),
    ).exactOptional(),
    createdAt: DateSchema.and(
      z.any().openapi({ description: ' The date and time when the job template was created.' }),
    ).exactOptional(),
    createdBy: RequestIdentityUserArnSchema.and(
      z.any().openapi({ description: ' The user who created the job template.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags assigned to the job template.' }),
    ).exactOptional(),
    jobTemplateData: JobTemplateDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The job template data which holds values of StartJobRun API request.',
        }),
    ),
    kmsKeyArn: KmsKeyArnSchema.and(
      z.any().openapi({ description: ' The KMS key ARN used to encrypt the job template.' }),
    ).exactOptional(),
    decryptionError: String2048Schema.and(
      z
        .any()
        .openapi({
          description: 'The error message in case the decryption of job template fails.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobTemplateData'],
    description:
      'This entity describes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.',
  })
  .openapi('JobTemplate')

const DescribeJobTemplateResponseSchema = z
  .object({
    jobTemplate: JobTemplateSchema.and(
      z
        .any()
        .openapi({
          description: 'This output displays information about the specified job template.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeJobTemplateResponse')

const EndpointTypeSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(64)
  .openapi('EndpointType')

const EndpointStateSchema = z
  .enum(['CREATING', 'ACTIVE', 'TERMINATING', 'TERMINATED', 'TERMINATED_WITH_ERRORS'])
  .openapi('EndpointState')

const ACMCertArnSchema = z
  .string()
  .regex(/^arn:(aws[a-zA-Z0-9-]*):acm:.+:(\d{12}):certificate\/.+$/)
  .min(44)
  .max(2048)
  .openapi('ACMCertArn')

const Base64EncodedSchema = z
  .string()
  .regex(/^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)?$/)
  .max(5000)
  .openapi('Base64Encoded')

const CertificateSchema = z
  .object({
    certificateArn: ACMCertArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the certificate generated for managed endpoint.' }),
    ).exactOptional(),
    certificateData: Base64EncodedSchema.and(
      z
        .any()
        .openapi({
          description: 'The base64 encoded PEM certificate data generated for managed endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The entity representing certificate data generated for managed endpoint.',
    required: [],
  })
  .openapi('Certificate')

const SubnetIdsSchema = z.array(String256Schema).openapi('SubnetIds')

const EndpointSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the endpoint.' }),
    ).exactOptional(),
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The name of the endpoint.' }),
    ).exactOptional(),
    arn: EndpointArnSchema.and(
      z.any().openapi({ description: 'The ARN of the endpoint.' }),
    ).exactOptional(),
    virtualClusterId: ResourceIdStringSchema.and(
      z.any().openapi({ description: "The ID of the endpoint's virtual cluster." }),
    ).exactOptional(),
    type: EndpointTypeSchema.and(
      z.any().openapi({ description: 'The type of the endpoint.' }),
    ).exactOptional(),
    state: EndpointStateSchema.and(
      z.any().openapi({ description: 'The state of the endpoint.' }),
    ).exactOptional(),
    releaseLabel: ReleaseLabelSchema.and(
      z.any().openapi({ description: 'The EMR release version to be used for the endpoint.' }),
    ).exactOptional(),
    executionRoleArn: IAMRoleArnSchema.and(
      z.any().openapi({ description: 'The execution role ARN of the endpoint.' }),
    ).exactOptional(),
    certificateArn: ACMCertArnSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The certificate ARN of the endpoint. This field is under deprecation and will be removed in future.Customer provided certificate-arn is deprecated and would be removed in future.',
        }),
    ).exactOptional(),
    certificateAuthority: CertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate generated by emr control plane on customer behalf to secure the managed endpoint.',
        }),
    ).exactOptional(),
    configurationOverrides: ConfigurationOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings that are used to override existing configurations for endpoints.',
        }),
    ).exactOptional(),
    serverUrl: UriStringSchema.and(
      z.any().openapi({ description: 'The server URL of the endpoint.' }),
    ).exactOptional(),
    createdAt: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the endpoint was created.' }),
    ).exactOptional(),
    securityGroup: String256Schema.and(
      z.any().openapi({ description: 'The security group configuration of the endpoint. ' }),
    ).exactOptional(),
    subnetIds: SubnetIdsSchema.and(
      z.any().openapi({ description: 'The subnet IDs of the endpoint. ' }),
    ).exactOptional(),
    stateDetails: String256Schema.and(
      z.any().openapi({ description: ' Additional details of the endpoint state. ' }),
    ).exactOptional(),
    failureReason: FailureReasonSchema.and(
      z.any().openapi({ description: ' The reasons why the endpoint has failed. ' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags of the endpoint. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This entity represents the endpoint that is managed by Amazon EMR on EKS.',
    required: [],
  })
  .openapi('Endpoint')

const DescribeManagedEndpointResponseSchema = z
  .object({
    endpoint: EndpointSchema.and(
      z
        .any()
        .openapi({ description: 'This output displays information about a managed endpoint.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeManagedEndpointResponse')

const VirtualClusterStateSchema = z
  .enum(['RUNNING', 'TERMINATING', 'TERMINATED', 'ARRESTED'])
  .openapi('VirtualClusterState')

const ContainerProviderSchema = z
  .object({
    type: ContainerProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the container provider. Amazon EKS is the only supported type as of now.',
        }),
    ),
    id: ClusterIdSchema.and(z.any().openapi({ description: 'The ID of the container cluster.' })),
    info: ContainerInfoSchema.and(
      z.any().openapi({ description: 'The information about the container cluster.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type', 'id'],
    description: 'The information about the container provider.',
  })
  .openapi('ContainerProvider')

const VirtualClusterSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the virtual cluster.' }),
    ).exactOptional(),
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The name of the virtual cluster.' }),
    ).exactOptional(),
    arn: VirtualClusterArnSchema.and(
      z.any().openapi({ description: 'The ARN of the virtual cluster.' }),
    ).exactOptional(),
    state: VirtualClusterStateSchema.and(
      z.any().openapi({ description: 'The state of the virtual cluster.' }),
    ).exactOptional(),
    containerProvider: ContainerProviderSchema.and(
      z.any().openapi({ description: 'The container provider of the virtual cluster.' }),
    ).exactOptional(),
    createdAt: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the virtual cluster is created.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The assigned tags of the virtual cluster.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an Amazon EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.',
    required: [],
  })
  .openapi('VirtualCluster')

const DescribeVirtualClusterResponseSchema = z
  .object({
    virtualCluster: VirtualClusterSchema.and(
      z
        .any()
        .openapi({
          description: 'This output displays information about the specified virtual cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeVirtualClusterResponse')

const JobRunsSchema = z.array(JobRunSchema).openapi('JobRuns')

const NextTokenSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1024)
  .openapi('NextToken')

const ListJobRunsResponseSchema = z
  .object({
    jobRuns: JobRunsSchema.and(
      z
        .any()
        .openapi({ description: 'This output lists information about the specified job runs.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'This output displays the token for the next set of job runs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListJobRunsResponse')

const JobTemplatesSchema = z.array(JobTemplateSchema).openapi('JobTemplates')

const ListJobTemplatesResponseSchema = z
  .object({
    templates: JobTemplatesSchema.and(
      z
        .any()
        .openapi({
          description: 'This output lists information about the specified job templates.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' This output displays the token for the next set of job templates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListJobTemplatesResponse')

const EndpointsSchema = z.array(EndpointSchema).openapi('Endpoints')

const ListManagedEndpointsResponseSchema = z
  .object({
    endpoints: EndpointsSchema.and(
      z.any().openapi({ description: 'The managed endpoints to be listed.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The token for the next set of endpoints to return. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListManagedEndpointsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags assigned to resources.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const VirtualClustersSchema = z.array(VirtualClusterSchema).openapi('VirtualClusters')

const ListVirtualClustersResponseSchema = z
  .object({
    virtualClusters: VirtualClustersSchema.and(
      z.any().openapi({ description: 'This output lists the specified virtual clusters.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'This output displays the token for the next set of virtual clusters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVirtualClustersResponse')

const StartJobRunResponseSchema = z
  .object({
    id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'This output displays the started job run ID.' }),
    ).exactOptional(),
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'This output displays the name of the started job run.' }),
    ).exactOptional(),
    arn: JobArnSchema.and(
      z.any().openapi({ description: 'This output lists the ARN of job run.' }),
    ).exactOptional(),
    virtualClusterId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This output displays the virtual cluster ID for which the job run was submitted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartJobRunResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const String128Schema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('String128')

const CancelJobRunRequestSchema = z
  .object({})
  .openapi({ title: 'CancelJobRunRequest' })
  .openapi('CancelJobRunRequest')

const CreateJobTemplateRequestSchema = z
  .object({
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The specified name of the job template.' }),
    ),
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client token of the job template.' }),
    ),
    jobTemplateData: JobTemplateDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The job template data which holds values of StartJobRun API request.',
        }),
    ),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags that are associated with the job template.' }),
    ).exactOptional(),
    kmsKeyArn: KmsKeyArnSchema.and(
      z.any().openapi({ description: 'The KMS key ARN used to encrypt the job template.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'clientToken', 'jobTemplateData'],
    title: 'CreateJobTemplateRequest',
  })
  .openapi('CreateJobTemplateRequest')

const CreateManagedEndpointRequestSchema = z
  .object({
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The name of the managed endpoint.' }),
    ),
    type: EndpointTypeSchema.and(
      z.any().openapi({ description: 'The type of the managed endpoint.' }),
    ),
    releaseLabel: ReleaseLabelSchema.and(
      z.any().openapi({ description: 'The Amazon EMR release version.' }),
    ),
    executionRoleArn: IAMRoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the execution role.' }),
    ),
    certificateArn: ACMCertArnSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The certificate ARN provided by users for the managed endpoint. This field is under deprecation and will be removed in future releases.Customer provided certificate-arn is deprecated and would be removed in future.',
        }),
    ).exactOptional(),
    configurationOverrides: ConfigurationOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings that will be used to override existing configurations.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client idempotency token for this create call.' }),
    ),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags of the managed endpoint. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'type', 'releaseLabel', 'executionRoleArn', 'clientToken'],
    title: 'CreateManagedEndpointRequest',
  })
  .openapi('CreateManagedEndpointRequest')

const CreateVirtualClusterRequestSchema = z
  .object({
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The specified name of the virtual cluster.' }),
    ),
    containerProvider: ContainerProviderSchema.and(
      z.any().openapi({ description: 'The container provider of the virtual cluster.' }),
    ),
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client token of the virtual cluster.' }),
    ),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags assigned to the virtual cluster.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'containerProvider', 'clientToken'],
    title: 'CreateVirtualClusterRequest',
  })
  .openapi('CreateVirtualClusterRequest')

const DeleteJobTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteJobTemplateRequest' })
  .openapi('DeleteJobTemplateRequest')

const DeleteManagedEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteManagedEndpointRequest' })
  .openapi('DeleteManagedEndpointRequest')

const DeleteVirtualClusterRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVirtualClusterRequest' })
  .openapi('DeleteVirtualClusterRequest')

const DescribeJobRunRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeJobRunRequest' })
  .openapi('DescribeJobRunRequest')

const DescribeJobTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeJobTemplateRequest' })
  .openapi('DescribeJobTemplateRequest')

const DescribeManagedEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeManagedEndpointRequest' })
  .openapi('DescribeManagedEndpointRequest')

const DescribeVirtualClusterRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeVirtualClusterRequest' })
  .openapi('DescribeVirtualClusterRequest')

const EndpointStatesSchema = z.array(EndpointStateSchema).max(10).openapi('EndpointStates')

const EndpointTypesSchema = z.array(EndpointTypeSchema).max(10).openapi('EndpointTypes')

const JobRunStatesSchema = z.array(JobRunStateSchema).max(10).openapi('JobRunStates')

const ListJobRunsRequestSchema = z
  .object({})
  .openapi({ title: 'ListJobRunsRequest' })
  .openapi('ListJobRunsRequest')

const ListJobTemplatesRequestSchema = z
  .object({})
  .openapi({ title: 'ListJobTemplatesRequest' })
  .openapi('ListJobTemplatesRequest')

const ListManagedEndpointsRequestSchema = z
  .object({})
  .openapi({ title: 'ListManagedEndpointsRequest' })
  .openapi('ListManagedEndpointsRequest')

const RsiArnSchema = z
  .string()
  .regex(/^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\d{12}):\/virtualclusters\/.+$/)
  .min(60)
  .max(500)
  .openapi('RsiArn')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const VirtualClusterStatesSchema = z
  .array(VirtualClusterStateSchema)
  .max(10)
  .openapi('VirtualClusterStates')

const ListVirtualClustersRequestSchema = z
  .object({})
  .openapi({ title: 'ListVirtualClustersRequest' })
  .openapi('ListVirtualClustersRequest')

const SensitivePropertiesMapSchema = z
  .record(z.string(), String1024Schema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('SensitivePropertiesMap')

const TemplateParameterInputMapSchema = z
  .record(z.string(), String1024Schema)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('TemplateParameterInputMap')

const StartJobRunRequestSchema = z
  .object({
    name: ResourceNameStringSchema.and(
      z.any().openapi({ description: 'The name of the job run.' }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client idempotency token of the job run request. ' }),
    ),
    executionRoleArn: IAMRoleArnSchema.and(
      z.any().openapi({ description: 'The execution role ARN for the job run.' }),
    ).exactOptional(),
    releaseLabel: ReleaseLabelSchema.and(
      z.any().openapi({ description: 'The Amazon EMR release version to use for the job run.' }),
    ).exactOptional(),
    jobDriver: JobDriverSchema.and(
      z.any().openapi({ description: 'The job driver for the job run.' }),
    ).exactOptional(),
    configurationOverrides: ConfigurationOverridesSchema.and(
      z.any().openapi({ description: 'The configuration overrides for the job run.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags assigned to job runs.' }),
    ).exactOptional(),
    jobTemplateId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The job template ID to be used to start the job run.' }),
    ).exactOptional(),
    jobTemplateParameters: TemplateParameterInputMapSchema.and(
      z.any().openapi({ description: 'The values of job template parameters to start a job run.' }),
    ).exactOptional(),
    retryPolicyConfiguration: RetryPolicyConfigurationSchema.and(
      z.any().openapi({ description: 'The retry policy configuration for the job run.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['clientToken'], title: 'StartJobRunRequest' })
  .openapi('StartJobRunRequest')

const TagKeyListSchema = z.array(String128Schema).min(0).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(z.any().openapi({ description: 'The tags assigned to resources.' })),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TemplateParameterNameSchema = z
  .string()
  .regex(/[\.\-_\#A-Za-z0-9]+/)
  .min(1)
  .max(512)
  .openapi('TemplateParameterName')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
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

export const getVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute = createRoute({
  method: 'get',
  path: '/virtualclusters/{virtualClusterId}/jobruns/{jobRunId}',
  description:
    'Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.',
  operationId: 'DescribeJobRun',
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
      jobRunId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'jobRunId',
            in: 'path',
            required: true,
            description: 'The ID of the job run request. ',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: 'The ID of the virtual cluster for which the job run is submitted.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobRunResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute = createRoute({
  method: 'delete',
  path: '/virtualclusters/{virtualClusterId}/jobruns/{jobRunId}',
  description:
    'Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.',
  operationId: 'CancelJobRun',
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
      jobRunId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'jobRunId',
            in: 'path',
            required: true,
            description: 'The ID of the job run to cancel.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: 'The ID of the virtual cluster for which the job run will be canceled.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelJobRunResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getJobtemplatesRoute = createRoute({
  method: 'get',
  path: '/jobtemplates',
  description:
    'Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.',
  operationId: 'ListJobTemplates',
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
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            required: false,
            description: 'The date and time after which the job templates were created.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            required: false,
            description: ' The date and time before which the job templates were created.',
            schema: { type: 'string', format: 'date-time' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of job templates that can be listed.',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: ' The token for the next set of job templates to return.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobTemplatesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postJobtemplatesRoute = createRoute({
  method: 'post',
  path: '/jobtemplates',
  description:
    'Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.',
  operationId: 'CreateJobTemplate',
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
                .regex(/[\.\-_\/#A-Za-z0-9]+/)
                .min(1)
                .max(64)
                .openapi({ description: 'The specified name of the job template.' }),
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(64)
                .openapi({ description: 'The client token of the job template.' }),
              jobTemplateData: z
                .object({
                  executionRoleArn: ParametricIAMRoleArnSchema.and(
                    z.any().openapi({ description: 'The execution role ARN of the job run.' }),
                  ).exactOptional(),
                  releaseLabel: ParametricReleaseLabelSchema.and(
                    z.any().openapi({ description: ' The release version of Amazon EMR.' }),
                  ).exactOptional(),
                  configurationOverrides: ParametricConfigurationOverridesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The configuration settings that are used to override defaults configuration.',
                      }),
                  ).exactOptional(),
                  jobDriver: JobDriverSchema.exactOptional(),
                  parameterConfiguration: TemplateParameterConfigurationMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration of parameters existing in the job template.',
                      }),
                  ).exactOptional(),
                  jobTags: TagMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The tags assigned to jobs started using the job template.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The values of StartJobRun API requests used in job runs started using the job template.',
                  required: [],
                }),
              tags: z
                .record(z.string(), StringEmpty256Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags that are associated with the job template.' }),
              kmsKeyArn: z
                .string()
                .regex(
                  /^(arn:(aws[a-zA-Z0-9-]*):kms:([a-zA-Z0-9]+-?)+:(\d{12})?:key\/[(0-9a-zA-Z)-?]+|\$\{[a-zA-Z]\w*\})$/,
                )
                .min(3)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The KMS key ARN used to encrypt the job template.' }),
            })
            .openapi({ required: ['name', 'clientToken', 'jobTemplateData'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateJobTemplateResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getVirtualclustersVirtualClusterIdEndpointsRoute = createRoute({
  method: 'get',
  path: '/virtualclusters/{virtualClusterId}/endpoints',
  description:
    'Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.',
  operationId: 'ListManagedEndpoints',
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
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: 'The ID of the virtual cluster.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            required: false,
            description: 'The date and time before which the endpoints are created.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            required: false,
            description: ' The date and time after which the endpoints are created.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(EndpointTypeSchema).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            required: false,
            description: 'The types of the managed endpoints.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/EndpointType' },
              maxItems: 10,
            },
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(EndpointStateSchema).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'states',
            in: 'query',
            required: false,
            description: 'The states of the managed endpoints.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/EndpointState' },
              maxItems: 10,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of managed endpoints that can be listed.',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: ' The token for the next set of managed endpoints to return. ',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListManagedEndpointsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postVirtualclustersVirtualClusterIdEndpointsRoute = createRoute({
  method: 'post',
  path: '/virtualclusters/{virtualClusterId}/endpoints',
  description:
    'Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.',
  operationId: 'CreateManagedEndpoint',
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
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: 'The ID of the virtual cluster for which a managed endpoint is created.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/[\.\-_\/#A-Za-z0-9]+/)
                .min(1)
                .max(64)
                .openapi({ description: 'The name of the managed endpoint.' }),
              type: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(64)
                .openapi({ description: 'The type of the managed endpoint.' }),
              releaseLabel: z
                .string()
                .regex(/[\.\-_\/A-Za-z0-9]+/)
                .min(1)
                .max(64)
                .openapi({ description: 'The Amazon EMR release version.' }),
              executionRoleArn: z
                .string()
                .regex(
                  /^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$/,
                )
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the execution role.' }),
              certificateArn: z
                .string()
                .regex(/^arn:(aws[a-zA-Z0-9-]*):acm:.+:(\d{12}):certificate\/.+$/)
                .min(44)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The certificate ARN provided by users for the managed endpoint. This field is under deprecation and will be removed in future releases.',
                }),
              configurationOverrides: z
                .object({
                  applicationConfiguration: ConfigurationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configurations for the application running by the job run. ',
                      }),
                  ).exactOptional(),
                  monitoringConfiguration: MonitoringConfigurationSchema.and(
                    z.any().openapi({ description: 'The configurations for monitoring.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A configuration specification to be used to override existing configurations.',
                  required: [],
                }),
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(64)
                .openapi({ description: 'The client idempotency token for this create call.' }),
              tags: z
                .record(z.string(), StringEmpty256Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags of the managed endpoint. ' }),
            })
            .openapi({
              required: ['name', 'type', 'releaseLabel', 'executionRoleArn', 'clientToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateManagedEndpointResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getVirtualclustersRoute = createRoute({
  method: 'get',
  path: '/virtualclusters',
  description:
    'Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.',
  operationId: 'ListVirtualClusters',
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
      containerProviderId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'containerProviderId',
            in: 'query',
            required: false,
            description: 'The container provider ID of the virtual cluster.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 1024 },
          },
        }),
      containerProviderType: z
        .literal('EKS')
        .exactOptional()
        .openapi({
          param: {
            name: 'containerProviderType',
            in: 'query',
            required: false,
            description:
              'The container provider type of the virtual cluster. Amazon EKS is the only supported type as of now.',
            schema: { type: 'string', enum: ['EKS'] },
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            required: false,
            description: 'The date and time after which the virtual clusters are created.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            required: false,
            description: 'The date and time before which the virtual clusters are created.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(VirtualClusterStateSchema).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'states',
            in: 'query',
            required: false,
            description: 'The states of the requested virtual clusters.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/VirtualClusterState' },
              maxItems: 10,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of virtual clusters that can be listed.',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next set of virtual clusters to return. ',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVirtualClustersResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postVirtualclustersRoute = createRoute({
  method: 'post',
  path: '/virtualclusters',
  description:
    'Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.',
  operationId: 'CreateVirtualCluster',
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
                .regex(/[\.\-_\/#A-Za-z0-9]+/)
                .min(1)
                .max(64)
                .openapi({ description: 'The specified name of the virtual cluster.' }),
              containerProvider: z
                .object({
                  type: ContainerProviderTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The type of the container provider. Amazon EKS is the only supported type as of now.',
                      }),
                  ).exactOptional(),
                  id: ClusterIdSchema.and(
                    z.any().openapi({ description: 'The ID of the container cluster.' }),
                  ).exactOptional(),
                  info: ContainerInfoSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The information about the container cluster.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'The information about the container provider.',
                  required: [],
                }),
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(64)
                .openapi({ description: 'The client token of the virtual cluster.' }),
              tags: z
                .record(z.string(), StringEmpty256Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags assigned to the virtual cluster.' }),
            })
            .openapi({ required: ['name', 'containerProvider', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVirtualClusterResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getJobtemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/jobtemplates/{templateId}',
  description:
    'Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.',
  operationId: 'DescribeJobTemplate',
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
      templateId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'templateId',
            in: 'path',
            required: true,
            description: 'The ID of the job template that will be described.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobTemplateResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteJobtemplatesTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/jobtemplates/{templateId}',
  description:
    'Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.',
  operationId: 'DeleteJobTemplate',
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
      templateId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'templateId',
            in: 'path',
            required: true,
            description: 'The ID of the job template that will be deleted.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteJobTemplateResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute = createRoute({
  method: 'get',
  path: '/virtualclusters/{virtualClusterId}/endpoints/{endpointId}',
  description:
    'Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.',
  operationId: 'DescribeManagedEndpoint',
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
      endpointId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'endpointId',
            in: 'path',
            required: true,
            description: 'This output displays ID of the managed endpoint.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: "The ID of the endpoint's virtual cluster.",
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeManagedEndpointResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/virtualclusters/{virtualClusterId}/endpoints/{endpointId}',
  description:
    'Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.',
  operationId: 'DeleteManagedEndpoint',
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
      endpointId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'endpointId',
            in: 'path',
            required: true,
            description: 'The ID of the managed endpoint.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: "The ID of the endpoint's virtual cluster.",
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteManagedEndpointResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getVirtualclustersVirtualClusterIdRoute = createRoute({
  method: 'get',
  path: '/virtualclusters/{virtualClusterId}',
  description:
    'Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.',
  operationId: 'DescribeVirtualCluster',
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
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: 'The ID of the virtual cluster that will be described.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVirtualClusterResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteVirtualclustersVirtualClusterIdRoute = createRoute({
  method: 'delete',
  path: '/virtualclusters/{virtualClusterId}',
  description:
    'Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.',
  operationId: 'DeleteVirtualCluster',
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
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: 'The ID of the virtual cluster that will be deleted.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVirtualClusterResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getVirtualclustersVirtualClusterIdJobrunsRoute = createRoute({
  method: 'get',
  path: '/virtualclusters/{virtualClusterId}/jobruns',
  description:
    'Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.',
  operationId: 'ListJobRuns',
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
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: 'The ID of the virtual cluster for which to list the job run. ',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            required: false,
            description: 'The date and time before which the job runs were submitted.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            required: false,
            description: 'The date and time after which the job runs were submitted.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      name: z
        .string()
        .regex(/[\.\-_\/#A-Za-z0-9]+/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: 'The name of the job run.',
            schema: {
              type: 'string',
              pattern: '[\\.\\-_/#A-Za-z0-9]+',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(JobRunStateSchema).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'states',
            in: 'query',
            required: false,
            description: 'The states of the job run.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/JobRunState' },
              maxItems: 10,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of job runs that can be listed.',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next set of job runs to return.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobRunsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postVirtualclustersVirtualClusterIdJobrunsRoute = createRoute({
  method: 'post',
  path: '/virtualclusters/{virtualClusterId}/jobruns',
  description:
    'Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.',
  operationId: 'StartJobRun',
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
      virtualClusterId: z
        .string()
        .regex(/[0-9a-z]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'virtualClusterId',
            in: 'path',
            required: true,
            description: 'The virtual cluster ID for which the job run request is submitted.',
            schema: { type: 'string', pattern: '[0-9a-z]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/[\.\-_\/#A-Za-z0-9]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the job run.' }),
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(64)
                .openapi({ description: 'The client idempotency token of the job run request. ' }),
              executionRoleArn: z
                .string()
                .regex(
                  /^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$/,
                )
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The execution role ARN for the job run.' }),
              releaseLabel: z
                .string()
                .regex(/[\.\-_\/A-Za-z0-9]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The Amazon EMR release version to use for the job run.' }),
              jobDriver: z
                .object({
                  sparkSubmitJobDriver: SparkSubmitJobDriverSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The job driver parameters specified for spark submit.',
                      }),
                  ).exactOptional(),
                  sparkSqlJobDriver: SparkSqlJobDriverSchema.and(
                    z.any().openapi({ description: 'The job driver for job type.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.',
                  required: [],
                }),
              configurationOverrides: z
                .object({
                  applicationConfiguration: ConfigurationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configurations for the application running by the job run. ',
                      }),
                  ).exactOptional(),
                  monitoringConfiguration: MonitoringConfigurationSchema.and(
                    z.any().openapi({ description: 'The configurations for monitoring.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A configuration specification to be used to override existing configurations.',
                  required: [],
                }),
              tags: z
                .record(z.string(), StringEmpty256Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags assigned to job runs.' }),
              jobTemplateId: z
                .string()
                .regex(/[0-9a-z]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The job template ID to be used to start the job run.' }),
              jobTemplateParameters: z
                .record(z.string(), String1024Schema)
                .refine((val) => Object.keys(val).length <= 20)
                .exactOptional()
                .openapi({
                  description: 'The values of job template parameters to start a job run.',
                }),
              retryPolicyConfiguration: z
                .object({
                  maxAttempts: JavaIntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "The maximum number of attempts on the job's driver.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The configuration of the retry policy that the job runs on.',
                  required: [],
                }),
            })
            .openapi({ required: ['clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartJobRunResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists the tags assigned to the resources.',
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
        .regex(/^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\d{12}):\/virtualclusters\/.+$/)
        .min(60)
        .max(500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of tagged resources.',
            schema: {
              type: 'string',
              pattern: '^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\\d{12}):/virtualclusters/.+$',
              minLength: 60,
              maxLength: 500,
            },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    "Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.",
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
        .regex(/^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\d{12}):\/virtualclusters\/.+$/)
        .min(60)
        .max(500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of resources.',
            schema: {
              type: 'string',
              pattern: '^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\\d{12}):/virtualclusters/.+$',
              minLength: 60,
              maxLength: 500,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringEmpty256Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'The tags assigned to resources.' }),
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes tags from resources.',
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
        .regex(/^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\d{12}):\/virtualclusters\/.+$/)
        .min(60)
        .max(500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of resources.',
            schema: {
              type: 'string',
              pattern: '^arn:(aws[a-zA-Z0-9-]*):emr-containers:.+:(\\d{12}):/virtualclusters/.+$',
              minLength: 60,
              maxLength: 500,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(String128Schema).min(0).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys of the resources.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/String128' },
              minItems: 0,
              maxItems: 50,
            },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
