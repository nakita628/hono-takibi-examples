import { createRoute, z } from '@hono/zod-openapi'

const LoggingEnabledSchema = z.boolean().openapi('LoggingEnabled')

const LoggingLevelSchema = z
  .enum(['CRITICAL', 'ERROR', 'WARNING', 'INFO', 'DEBUG'])
  .openapi('LoggingLevel')

const ModuleLoggingConfigurationInputSchema = z
  .object({
    Enabled: LoggingEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to enable the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>).',
        }),
    ),
    LogLevel: LoggingLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the Apache Airflow log level (e.g. <code>INFO</code>) to send to CloudWatch Logs.',
        }),
    ),
  })
  .openapi({
    required: ['Enabled', 'LogLevel'],
    description:
      'Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>).',
  })
  .openapi('ModuleLoggingConfigurationInput')

type LoggingConfigurationInputType = {
  DagProcessingLogs?: z.infer<typeof ModuleLoggingConfigurationInputSchema> & {
    [key: string]: unknown
  }
  SchedulerLogs?: z.infer<typeof ModuleLoggingConfigurationInputSchema> & { [key: string]: unknown }
  TaskLogs?: z.infer<typeof ModuleLoggingConfigurationInputSchema> & { [key: string]: unknown }
  WebserverLogs?: z.infer<typeof ModuleLoggingConfigurationInputSchema> & { [key: string]: unknown }
  WorkerLogs?: z.infer<typeof ModuleLoggingConfigurationInputSchema> & { [key: string]: unknown }
}

const CloudWatchLogGroupArnSchema = z
  .string()
  .regex(/^arn:aws(-[a-z]+)?:logs:[a-z0-9\-]+:\d{12}:log-group:\w+/)
  .min(1)
  .max(1224)
  .openapi('CloudWatchLogGroupArn')

const ModuleLoggingConfigurationSchema = z
  .object({
    CloudWatchLogGroupArn: CloudWatchLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the CloudWatch Logs group where the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is published. For example, <code>arn:aws:logs:us-east-1:123456789012:log-group:airflow-MyMWAAEnvironment-MwaaEnvironment-DAGProcessing:*</code>.',
        }),
    ).exactOptional(),
    Enabled: LoggingEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is enabled.',
        }),
    ).exactOptional(),
    LogLevel: LoggingLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Airflow log level for the log type (e.g. <code>DagProcessingLogs</code>). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the Apache Airflow log details for the log type (e.g. <code>DagProcessingLogs</code>).',
    required: [],
  })
  .openapi('ModuleLoggingConfiguration')

type LoggingConfigurationType = {
  DagProcessingLogs?: z.infer<typeof ModuleLoggingConfigurationSchema> & { [key: string]: unknown }
  SchedulerLogs?: z.infer<typeof ModuleLoggingConfigurationSchema> & { [key: string]: unknown }
  TaskLogs?: z.infer<typeof ModuleLoggingConfigurationSchema> & { [key: string]: unknown }
  WebserverLogs?: z.infer<typeof ModuleLoggingConfigurationSchema> & { [key: string]: unknown }
  WorkerLogs?: z.infer<typeof ModuleLoggingConfigurationSchema> & { [key: string]: unknown }
}

const TokenSchema = z.string().openapi('Token')

const HostnameSchema = z
  .string()
  .regex(
    /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/,
  )
  .min(1)
  .max(255)
  .openapi('Hostname')

const CreateCliTokenResponseSchema = z
  .object({
    CliToken: TokenSchema.and(
      z.any().openapi({ description: 'An Airflow CLI login token.' }),
    ).exactOptional(),
    WebServerHostname: HostnameSchema.and(
      z.any().openapi({ description: 'The Airflow web server hostname for the environment.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCliTokenResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const EnvironmentArnSchema = z
  .string()
  .regex(/^arn:aws(-[a-z]+)?:airflow:[a-z0-9\-]+:\d{12}:environment\/\w+/)
  .min(1)
  .max(1224)
  .openapi('EnvironmentArn')

const CreateEnvironmentOutputSchema = z
  .object({
    Arn: EnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) returned in the response for the environment.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEnvironmentOutput')

const ConfigValueSchema = z
  .string()
  .regex(/^[ -~]+$/)
  .min(1)
  .max(65536)
  .openapi('ConfigValue')

const SecurityGroupIdSchema = z
  .string()
  .regex(/^sg-[a-zA-Z0-9\-._]+$/)
  .min(1)
  .max(1024)
  .openapi('SecurityGroupId')

const SecurityGroupListSchema = z
  .array(SecurityGroupIdSchema)
  .min(1)
  .max(5)
  .openapi('SecurityGroupList')

const SubnetIdSchema = z
  .string()
  .regex(/^subnet-[a-zA-Z0-9\-._]+$/)
  .min(1)
  .max(1024)
  .openapi('SubnetId')

const SubnetListSchema = z.array(SubnetIdSchema).length(2).openapi('SubnetList')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(256)
  .openapi('TagValue')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const CreateWebLoginTokenResponseSchema = z
  .object({
    WebServerHostname: HostnameSchema.and(
      z.any().openapi({ description: 'The Airflow web server hostname for the environment.' }),
    ).exactOptional(),
    WebToken: TokenSchema.and(
      z.any().openapi({ description: 'An Airflow web server login token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWebLoginTokenResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const DeleteEnvironmentOutputSchema = z.object({}).openapi('DeleteEnvironmentOutput')

const AirflowConfigurationOptionsSchema = z
  .record(z.string(), ConfigValueSchema)
  .openapi('AirflowConfigurationOptions')

const AirflowVersionSchema = z
  .string()
  .regex(/^[0-9a-z.]+$/)
  .min(1)
  .max(32)
  .openapi('AirflowVersion')

const CreatedAtSchema = z.iso.datetime({ offset: true }).openapi('CreatedAt')

const RelativePathSchema = z.string().regex(/.*/).min(1).max(1024).openapi('RelativePath')

const EnvironmentClassSchema = z.string().min(1).max(1024).openapi('EnvironmentClass')

const IamRoleArnSchema = z
  .string()
  .regex(/^arn:aws(-[a-z]+)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
  .min(1)
  .max(1224)
  .openapi('IamRoleArn')

const KmsKeySchema = z
  .string()
  .regex(
    /^(((arn:aws(-[a-z]+)?:kms:[a-z]{2}-[a-z]+-\d:\d+:)?key\/)?[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|(arn:aws(-[a-z]+)?:kms:[a-z]{2}-[a-z]+-\d:\d+:)?alias\/.+)$/,
  )
  .min(1)
  .max(1224)
  .openapi('KmsKey')

const UpdateCreatedAtSchema = z.iso.datetime({ offset: true }).openapi('UpdateCreatedAt')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const ErrorMessageSchema = z.string().regex(/^.+$/).min(1).max(1024).openapi('ErrorMessage')

const UpdateErrorSchema = z
  .object({
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The error code that corresponds to the error with the last update.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The error message that corresponds to the error code.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the error(s) encountered with the last update of the environment.',
    required: [],
  })
  .openapi('UpdateError')

const UpdateSourceSchema = z.string().regex(/^.+$/).min(1).max(256).openapi('UpdateSource')

const UpdateStatusSchema = z.enum(['SUCCESS', 'PENDING', 'FAILED']).openapi('UpdateStatus')

const LastUpdateSchema = z
  .object({
    CreatedAt: UpdateCreatedAtSchema.and(
      z.any().openapi({ description: 'The day and time of the last update on the environment.' }),
    ).exactOptional(),
    Error: UpdateErrorSchema.and(
      z
        .any()
        .openapi({
          description: 'The error that was encountered during the last update of the environment.',
        }),
    ).exactOptional(),
    Source: UpdateSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the last update to the environment. Includes internal processes by Amazon MWAA, such as an environment maintenance update.',
        }),
    ).exactOptional(),
    Status: UpdateStatusSchema.and(
      z.any().openapi({ description: 'The status of the last update on the environment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the status of the last update on the environment, and any errors that were encountered.',
    required: [],
  })
  .openapi('LastUpdate')

const LoggingConfigurationSchema: z.ZodType<LoggingConfigurationType> = z
  .lazy(() =>
    z
      .object({
        DagProcessingLogs: ModuleLoggingConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Airflow DAG processing logs published to CloudWatch Logs and the log level.',
            }),
        ).exactOptional(),
        SchedulerLogs: ModuleLoggingConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Airflow scheduler logs published to CloudWatch Logs and the log level.',
            }),
        ).exactOptional(),
        TaskLogs: ModuleLoggingConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The Airflow task logs published to CloudWatch Logs and the log level.',
            }),
        ).exactOptional(),
        WebserverLogs: ModuleLoggingConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Airflow web server logs published to CloudWatch Logs and the log level.',
            }),
        ).exactOptional(),
        WorkerLogs: ModuleLoggingConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Airflow worker logs published to CloudWatch Logs and the log level.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Describes the Apache Airflow log types that are published to CloudWatch Logs.',
        required: [],
      }),
  )
  .openapi('LoggingConfiguration')

const MaxWorkersSchema = z.int().min(1).openapi('MaxWorkers')

const MinWorkersSchema = z.int().min(1).openapi('MinWorkers')

const EnvironmentNameSchema = z
  .string()
  .regex(/^[a-zA-Z][0-9a-zA-Z-_]*$/)
  .min(1)
  .max(80)
  .openapi('EnvironmentName')

const NetworkConfigurationSchema = z
  .object({
    SecurityGroupIds: SecurityGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of security group IDs. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.',
        }),
    ).exactOptional(),
    SubnetIds: SubnetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of subnet IDs. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
    required: [],
  })
  .openapi('NetworkConfiguration')

const S3ObjectVersionSchema = z.string().min(1).max(1024).openapi('S3ObjectVersion')

const SchedulersSchema = z.int().max(5).openapi('Schedulers')

const S3BucketArnSchema = z
  .string()
  .regex(/^arn:aws(-[a-z]+)?:s3:::[a-z0-9.\-]+$/)
  .min(1)
  .max(1224)
  .openapi('S3BucketArn')

const StringSchema = z.string().openapi('String')

const EnvironmentStatusSchema = z
  .enum([
    'CREATING',
    'CREATE_FAILED',
    'AVAILABLE',
    'UPDATING',
    'DELETING',
    'DELETED',
    'UNAVAILABLE',
    'UPDATE_FAILED',
  ])
  .openapi('EnvironmentStatus')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const WebserverAccessModeSchema = z
  .enum(['PRIVATE_ONLY', 'PUBLIC_ONLY'])
  .openapi('WebserverAccessMode')

const WebserverUrlSchema = z
  .string()
  .regex(/^https:\/\/.+$/)
  .min(1)
  .max(256)
  .openapi('WebserverUrl')

const WeeklyMaintenanceWindowStartSchema = z
  .string()
  .regex(/(MON|TUE|WED|THU|FRI|SAT|SUN):([01]\d|2[0-3]):(00|30)/)
  .min(1)
  .max(9)
  .openapi('WeeklyMaintenanceWindowStart')

const EnvironmentSchema = z
  .object({
    AirflowConfigurationOptions: AirflowConfigurationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs containing the Apache Airflow configuration options attached to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.',
        }),
    ).exactOptional(),
    AirflowVersion: AirflowVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Airflow version on your environment. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, and <code>2.4.3</code>.',
        }),
    ).exactOptional(),
    Arn: EnvironmentArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the Amazon MWAA environment.' }),
    ).exactOptional(),
    CreatedAt: CreatedAtSchema.and(
      z.any().openapi({ description: 'The day and time the environment was created.' }),
    ).exactOptional(),
    DagS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the DAGs folder in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.',
        }),
    ).exactOptional(),
    EnvironmentClass: EnvironmentClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.',
        }),
    ).exactOptional(),
    ExecutionRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.',
        }),
    ).exactOptional(),
    KmsKey: KmsKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Key Management Service (KMS) encryption key used to encrypt the data in your environment.',
        }),
    ).exactOptional(),
    LastUpdate: LastUpdateSchema.and(
      z.any().openapi({ description: 'The status of the last update on the environment.' }),
    ).exactOptional(),
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z.any().openapi({ description: 'The Apache Airflow logs published to CloudWatch Logs.' }),
    ).exactOptional(),
    MaxWorkers: MaxWorkersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of workers that run in your environment. For example, <code>20</code>.',
        }),
    ).exactOptional(),
    MinWorkers: MinWorkersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of workers that run in your environment. For example, <code>2</code>.',
        }),
    ).exactOptional(),
    Name: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.',
        }),
    ).exactOptional(),
    NetworkConfiguration: NetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
        }),
    ).exactOptional(),
    PluginsS3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version of the <code>plugins.zip</code> file in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file.</p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>',
        }),
    ).exactOptional(),
    PluginsS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the file in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/plugins.zip</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.',
        }),
    ).exactOptional(),
    RequirementsS3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version of the <code>requirements.txt </code> file on your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file.</p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>. </p>',
        }),
    ).exactOptional(),
    RequirementsS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the <code>requirements.txt</code> file in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/requirements.txt</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.',
        }),
    ).exactOptional(),
    Schedulers: SchedulersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Apache Airflow schedulers that run in your Amazon MWAA environment.',
        }),
    ).exactOptional(),
    ServiceRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the service-linked role of the environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-slr.html">Amazon MWAA Service-linked role</a>.',
        }),
    ).exactOptional(),
    SourceBucketArn: S3BucketArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.',
        }),
    ).exactOptional(),
    StartupScriptS3ObjectVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file.</p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
        }),
    ).exactOptional(),
    StartupScriptS3Path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
        }),
    ).exactOptional(),
    Status: EnvironmentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Amazon MWAA environment. Valid values:</p> <ul> <li> <p> <code>CREATING</code> - Indicates the request to create the environment is in progress.</p> </li> <li> <p> <code>CREATE_FAILED</code> - Indicates the request to create the environment failed, and the environment could not be created.</p> </li> <li> <p> <code>AVAILABLE</code> - Indicates the request was successful and the environment is ready to use.</p> </li> <li> <p> <code>UPDATING</code> - Indicates the request to update the environment is in progress.</p> </li> <li> <p> <code>DELETING</code> - Indicates the request to delete the environment is in progress.</p> </li> <li> <p> <code>DELETED</code> - Indicates the request to delete the environment is complete, and the environment has been deleted.</p> </li> <li> <p> <code>UNAVAILABLE</code> - Indicates the request failed, but the environment was unable to rollback and is not in a stable state.</p> </li> <li> <p> <code>UPDATE_FAILED</code> - Indicates the request to update the environment failed, and the environment has rolled back successfully and is ready to use.</p> </li> </ul> <p>We recommend reviewing our troubleshooting guide for a list of common errors and their solutions. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/troubleshooting.html">Amazon MWAA troubleshooting</a>.</p>',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value tag pairs associated to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.',
        }),
    ).exactOptional(),
    WebserverAccessMode: WebserverAccessModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.',
        }),
    ).exactOptional(),
    WebserverUrl: WebserverUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Airflow <i>Web server</i> host name for the Amazon MWAA environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-airflow-ui.html">Accessing the Apache Airflow UI</a>.',
        }),
    ).exactOptional(),
    WeeklyMaintenanceWindowStart: WeeklyMaintenanceWindowStartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: <code>TUE:03:30</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.',
    required: [],
  })
  .openapi('Environment')

const GetEnvironmentOutputSchema = z
  .object({
    Environment: EnvironmentSchema.and(
      z
        .any()
        .openapi({
          description: 'An object containing all available details about the environment.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEnvironmentOutput')

const EnvironmentListSchema = z.array(EnvironmentNameSchema).openapi('EnvironmentList')

const NextTokenSchema = z.string().min(0).max(2048).openapi('NextToken')

const ListEnvironmentsOutputSchema = z
  .object({
    Environments: EnvironmentListSchema.and(
      z.any().openapi({ description: 'Returns a list of Amazon MWAA environments.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'Retrieves the next page of the results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Environments'] })
  .openapi('ListEnvironmentsOutput')

const ListTagsForResourceOutputSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value tag pairs associated to your environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const PublishMetricsOutputSchema = z.object({}).openapi('PublishMetricsOutput')

const DimensionSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: ' <b>Internal only</b>. The name of the dimension.' }),
    ),
    Value: StringSchema.and(
      z.any().openapi({ description: ' <b>Internal only</b>. The value of the dimension.' }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      ' <b>Internal only</b>. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.',
  })
  .openapi('Dimension')

const DimensionsSchema = z.array(DimensionSchema).openapi('Dimensions')

const DoubleSchema = z.float64().openapi('Double')

const IntegerSchema = z.int().openapi('Integer')

const StatisticSetSchema = z
  .object({
    Maximum: DoubleSchema.and(
      z
        .any()
        .openapi({ description: ' <b>Internal only</b>. The maximum value of the sample set.' }),
    ).exactOptional(),
    Minimum: DoubleSchema.and(
      z
        .any()
        .openapi({ description: ' <b>Internal only</b>. The minimum value of the sample set.' }),
    ).exactOptional(),
    SampleCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: ' <b>Internal only</b>. The number of samples used for the statistic set.',
        }),
    ).exactOptional(),
    Sum: DoubleSchema.and(
      z
        .any()
        .openapi({ description: ' <b>Internal only</b>. The sum of values for the sample set.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' <b>Internal only</b>. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.',
    required: [],
  })
  .openapi('StatisticSet')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const UnitSchema = z
  .enum([
    'Seconds',
    'Microseconds',
    'Milliseconds',
    'Bytes',
    'Kilobytes',
    'Megabytes',
    'Gigabytes',
    'Terabytes',
    'Bits',
    'Kilobits',
    'Megabits',
    'Gigabits',
    'Terabits',
    'Percent',
    'Count',
    'Bytes/Second',
    'Kilobytes/Second',
    'Megabytes/Second',
    'Gigabytes/Second',
    'Terabytes/Second',
    'Bits/Second',
    'Kilobits/Second',
    'Megabits/Second',
    'Gigabits/Second',
    'Terabits/Second',
    'Count/Second',
    'None',
  ])
  .openapi('Unit')

const MetricDatumSchema = z
  .object({
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          description: ' <b>Internal only</b>. The dimensions associated with the metric.',
        }),
    ).exactOptional(),
    MetricName: StringSchema.and(
      z.any().openapi({ description: ' <b>Internal only</b>. The name of the metric.' }),
    ),
    StatisticValues: StatisticSetSchema.and(
      z
        .any()
        .openapi({ description: ' <b>Internal only</b>. The statistical values for the metric.' }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: ' <b>Internal only</b>. The time the metric data was received.' }),
    ),
    Unit: UnitSchema.and(
      z.any().openapi({ description: ' <b>Internal only</b>. The unit used to store the metric.' }),
    ).exactOptional(),
    Value: DoubleSchema.and(
      z.any().openapi({ description: ' <b>Internal only</b>. The value for the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MetricName', 'Timestamp'],
    description:
      ' <b>Internal only</b>. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.',
  })
  .openapi('MetricDatum')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateEnvironmentOutputSchema = z
  .object({
    Arn: EnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEnvironmentOutput')

const ConfigKeySchema = z
  .string()
  .regex(/^[a-z]+([a-z0-9._]*[a-z0-9_]+)?$/)
  .min(1)
  .max(64)
  .openapi('ConfigKey')

const CreateCliTokenRequestSchema = z
  .object({})
  .openapi({ title: 'CreateCliTokenRequest' })
  .openapi('CreateCliTokenRequest')

const LoggingConfigurationInputSchema: z.ZodType<LoggingConfigurationInputType> = z
  .lazy(() =>
    z
      .object({
        DagProcessingLogs: ModuleLoggingConfigurationInputSchema.and(
          z
            .any()
            .openapi({ description: 'Publishes Airflow DAG processing logs to CloudWatch Logs.' }),
        ).exactOptional(),
        SchedulerLogs: ModuleLoggingConfigurationInputSchema.and(
          z.any().openapi({ description: 'Publishes Airflow scheduler logs to CloudWatch Logs.' }),
        ).exactOptional(),
        TaskLogs: ModuleLoggingConfigurationInputSchema.and(
          z.any().openapi({ description: 'Publishes Airflow task logs to CloudWatch Logs.' }),
        ).exactOptional(),
        WebserverLogs: ModuleLoggingConfigurationInputSchema.and(
          z.any().openapi({ description: 'Publishes Airflow web server logs to CloudWatch Logs.' }),
        ).exactOptional(),
        WorkerLogs: ModuleLoggingConfigurationInputSchema.and(
          z.any().openapi({ description: 'Publishes Airflow worker logs to CloudWatch Logs.' }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Defines the Apache Airflow log types to send to CloudWatch Logs.',
        required: [],
      }),
  )
  .openapi('LoggingConfigurationInput')

const CreateEnvironmentInputSchema = z
  .object({
    AirflowConfigurationOptions: AirflowConfigurationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.',
        }),
    ).exactOptional(),
    AirflowVersion: AirflowVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, and <code>2.4.3</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html">Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA)</a>.',
        }),
    ).exactOptional(),
    DagS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.',
        }),
    ),
    EnvironmentClass: EnvironmentClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.',
        }),
    ).exactOptional(),
    ExecutionRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.',
        }),
    ),
    KmsKey: KmsKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html">Create an Amazon MWAA environment</a>.',
        }),
    ).exactOptional(),
    LoggingConfiguration: LoggingConfigurationInputSchema.and(
      z
        .any()
        .openapi({ description: 'Defines the Apache Airflow logs to send to CloudWatch Logs.' }),
    ).exactOptional(),
    MaxWorkers: MaxWorkersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.',
        }),
    ).exactOptional(),
    MinWorkers: MinWorkersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.',
        }),
    ).exactOptional(),
    NetworkConfiguration: NetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
        }),
    ),
    PluginsS3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.',
        }),
    ).exactOptional(),
    PluginsS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the <code>plugins.zip</code> version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.',
        }),
    ).exactOptional(),
    RequirementsS3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the <code>requirements.txt</code> file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.',
        }),
    ).exactOptional(),
    RequirementsS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.',
        }),
    ).exactOptional(),
    Schedulers: SchedulersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of Apache Airflow schedulers to run in your environment. Valid values:</p> <ul> <li> <p>v2 - Accepts between 2 to 5. Defaults to 2.</p> </li> <li> <p>v1 - Accepts 1.</p> </li> </ul>',
        }),
    ).exactOptional(),
    SourceBucketArn: S3BucketArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.',
        }),
    ),
    StartupScriptS3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
        }),
    ).exactOptional(),
    StartupScriptS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.',
        }),
    ).exactOptional(),
    WebserverAccessMode: WebserverAccessModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.',
        }),
    ).exactOptional(),
    WeeklyMaintenanceWindowStart: WeeklyMaintenanceWindowStartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DagS3Path', 'ExecutionRoleArn', 'NetworkConfiguration', 'SourceBucketArn'],
    title: 'CreateEnvironmentInput',
    description:
      'This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>.',
  })
  .openapi('CreateEnvironmentInput')

const CreateWebLoginTokenRequestSchema = z
  .object({})
  .openapi({ title: 'CreateWebLoginTokenRequest' })
  .openapi('CreateWebLoginTokenRequest')

const DeleteEnvironmentInputSchema = z
  .object({})
  .openapi({ title: 'DeleteEnvironmentInput' })
  .openapi('DeleteEnvironmentInput')

const GetEnvironmentInputSchema = z
  .object({})
  .openapi({ title: 'GetEnvironmentInput' })
  .openapi('GetEnvironmentInput')

const ListEnvironmentsInputMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(25)
  .openapi('ListEnvironmentsInputMaxResultsInteger')

const ListEnvironmentsInputSchema = z
  .object({})
  .openapi({ title: 'ListEnvironmentsInput' })
  .openapi('ListEnvironmentsInput')

const ListTagsForResourceInputSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const MetricDataSchema = z.array(MetricDatumSchema).openapi('MetricData')

const PublishMetricsInputSchema = z
  .object({
    MetricData: MetricDataSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Internal only</b>. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.',
        }),
    ),
  })
  .openapi({ required: ['MetricData'], title: 'PublishMetricsInput' })
  .openapi('PublishMetricsInput')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const TagResourceInputSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceInputSchema = z
  .object({})
  .openapi({ title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateNetworkConfigurationInputSchema = z
  .object({
    SecurityGroupIds: SecurityGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of security group IDs. A security group must be attached to the same VPC as the subnets. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.',
        }),
    ),
  })
  .openapi({
    required: ['SecurityGroupIds'],
    description:
      'Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
  })
  .openapi('UpdateNetworkConfigurationInput')

const UpdateEnvironmentInputSchema = z
  .object({
    AirflowConfigurationOptions: AirflowConfigurationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.',
        }),
    ).exactOptional(),
    AirflowVersion: AirflowVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Airflow version for your environment. If no value is specified, defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, and <code>2.4.3</code>.',
        }),
    ).exactOptional(),
    DagS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.',
        }),
    ).exactOptional(),
    EnvironmentClass: EnvironmentClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.',
        }),
    ).exactOptional(),
    ExecutionRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.',
        }),
    ).exactOptional(),
    LoggingConfiguration: LoggingConfigurationInputSchema.and(
      z.any().openapi({ description: 'The Apache Airflow log types to send to CloudWatch Logs.' }),
    ).exactOptional(),
    MaxWorkers: MaxWorkersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.',
        }),
    ).exactOptional(),
    MinWorkers: MinWorkersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.',
        }),
    ).exactOptional(),
    NetworkConfiguration: UpdateNetworkConfigurationInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
        }),
    ).exactOptional(),
    PluginsS3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a <code>plugins.zip</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.',
        }),
    ).exactOptional(),
    PluginsS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.',
        }),
    ).exactOptional(),
    RequirementsS3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a <code>requirements.txt</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.',
        }),
    ).exactOptional(),
    RequirementsS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.',
        }),
    ).exactOptional(),
    Schedulers: SchedulersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Apache Airflow schedulers to run in your Amazon MWAA environment.',
        }),
    ).exactOptional(),
    SourceBucketArn: S3BucketArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.',
        }),
    ).exactOptional(),
    StartupScriptS3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
        }),
    ).exactOptional(),
    StartupScriptS3Path: RelativePathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
        }),
    ).exactOptional(),
    WebserverAccessMode: WebserverAccessModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.',
        }),
    ).exactOptional(),
    WeeklyMaintenanceWindowStart: WeeklyMaintenanceWindowStartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateEnvironmentInput', required: [] })
  .openapi('UpdateEnvironmentInput')

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

export const postClitokenNameRoute = createRoute({
  method: 'post',
  path: '/clitoken/{Name}',
  description:
    'Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.',
  operationId: 'CreateCliToken',
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
      Name: z
        .string()
        .regex(/^[a-zA-Z][0-9a-zA-Z-_]*$/)
        .min(1)
        .max(80)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][0-9a-zA-Z-_]*$',
              minLength: 1,
              maxLength: 80,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCliTokenResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getEnvironmentsNameRoute = createRoute({
  method: 'get',
  path: '/environments/{Name}',
  description: 'Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.',
  operationId: 'GetEnvironment',
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
      Name: z
        .string()
        .regex(/^[a-zA-Z][0-9a-zA-Z-_]*$/)
        .min(1)
        .max(80)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][0-9a-zA-Z-_]*$',
              minLength: 1,
              maxLength: 80,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEnvironmentOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putEnvironmentsNameRoute = createRoute({
  method: 'put',
  path: '/environments/{Name}',
  description: 'Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.',
  operationId: 'CreateEnvironment',
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
      Name: z
        .string()
        .regex(/^[a-zA-Z][0-9a-zA-Z-_]*$/)
        .min(1)
        .max(80)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][0-9a-zA-Z-_]*$',
              minLength: 1,
              maxLength: 80,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AirflowConfigurationOptions: z
                .record(z.string(), ConfigValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.',
                }),
              AirflowVersion: z
                .string()
                .regex(/^[0-9a-z.]+$/)
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    'The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, and <code>2.4.3</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html">Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA)</a>.',
                }),
              DagS3Path: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.',
                }),
              EnvironmentClass: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.',
                }),
              ExecutionRoleArn: z
                .string()
                .regex(/^arn:aws(-[a-z]+)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.',
                }),
              KmsKey: z
                .string()
                .regex(
                  /^(((arn:aws(-[a-z]+)?:kms:[a-z]{2}-[a-z]+-\d:\d+:)?key\/)?[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|(arn:aws(-[a-z]+)?:kms:[a-z]{2}-[a-z]+-\d:\d+:)?alias\/.+)$/,
                )
                .min(1)
                .max(1224)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html">Create an Amazon MWAA environment</a>.',
                }),
              LoggingConfiguration: z
                .object({
                  DagProcessingLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Publishes Airflow DAG processing logs to CloudWatch Logs.',
                      }),
                  ).exactOptional(),
                  SchedulerLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Publishes Airflow scheduler logs to CloudWatch Logs.',
                      }),
                  ).exactOptional(),
                  TaskLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Publishes Airflow task logs to CloudWatch Logs.' }),
                  ).exactOptional(),
                  WebserverLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Publishes Airflow web server logs to CloudWatch Logs.',
                      }),
                  ).exactOptional(),
                  WorkerLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Publishes Airflow worker logs to CloudWatch Logs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Defines the Apache Airflow log types to send to CloudWatch Logs.',
                  required: [],
                }),
              MaxWorkers: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.',
                }),
              MinWorkers: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.',
                }),
              NetworkConfiguration: z
                .object({
                  SecurityGroupIds: SecurityGroupListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of security group IDs. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.',
                      }),
                  ).exactOptional(),
                  SubnetIds: SubnetListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of subnet IDs. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
                  required: [],
                }),
              PluginsS3ObjectVersion: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.',
                }),
              PluginsS3Path: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the <code>plugins.zip</code> version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.',
                }),
              RequirementsS3ObjectVersion: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The version of the <code>requirements.txt</code> file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.',
                }),
              RequirementsS3Path: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.',
                }),
              Schedulers: z
                .int()
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The number of Apache Airflow schedulers to run in your environment. Valid values:</p> <ul> <li> <p>v2 - Accepts between 2 to 5. Defaults to 2.</p> </li> <li> <p>v1 - Accepts 1.</p> </li> </ul>',
                }),
              SourceBucketArn: z
                .string()
                .regex(/^arn:aws(-[a-z]+)?:s3:::[a-z0-9.\-]+$/)
                .min(1)
                .max(1224)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.',
                }),
              StartupScriptS3ObjectVersion: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
                }),
              StartupScriptS3Path: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.',
                }),
              WebserverAccessMode: z
                .enum(['PRIVATE_ONLY', 'PUBLIC_ONLY'])
                .exactOptional()
                .openapi({
                  description:
                    'The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.',
                }),
              WeeklyMaintenanceWindowStart: z
                .string()
                .regex(/(MON|TUE|WED|THU|FRI|SAT|SUN):([01]\d|2[0-3]):(00|30)/)
                .min(1)
                .max(9)
                .exactOptional()
                .openapi({
                  description:
                    'The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.',
                }),
            })
            .openapi({
              required: [
                'DagS3Path',
                'ExecutionRoleArn',
                'NetworkConfiguration',
                'SourceBucketArn',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEnvironmentOutputSchema } },
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

export const deleteEnvironmentsNameRoute = createRoute({
  method: 'delete',
  path: '/environments/{Name}',
  description: 'Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.',
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
    }),
    params: z.object({
      Name: z
        .string()
        .regex(/^[a-zA-Z][0-9a-zA-Z-_]*$/)
        .min(1)
        .max(80)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][0-9a-zA-Z-_]*$',
              minLength: 1,
              maxLength: 80,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEnvironmentOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchEnvironmentsNameRoute = createRoute({
  method: 'patch',
  path: '/environments/{Name}',
  description: 'Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.',
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
    }),
    params: z.object({
      Name: z
        .string()
        .regex(/^[a-zA-Z][0-9a-zA-Z-_]*$/)
        .min(1)
        .max(80)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'The name of your Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][0-9a-zA-Z-_]*$',
              minLength: 1,
              maxLength: 80,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AirflowConfigurationOptions: z
                .record(z.string(), ConfigValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.',
                }),
              AirflowVersion: z
                .string()
                .regex(/^[0-9a-z.]+$/)
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    'The Apache Airflow version for your environment. If no value is specified, defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, and <code>2.4.3</code>.',
                }),
              DagS3Path: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.',
                }),
              EnvironmentClass: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.',
                }),
              ExecutionRoleArn: z
                .string()
                .regex(/^arn:aws(-[a-z]+)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
                .min(1)
                .max(1224)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.',
                }),
              LoggingConfiguration: z
                .object({
                  DagProcessingLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Publishes Airflow DAG processing logs to CloudWatch Logs.',
                      }),
                  ).exactOptional(),
                  SchedulerLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Publishes Airflow scheduler logs to CloudWatch Logs.',
                      }),
                  ).exactOptional(),
                  TaskLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Publishes Airflow task logs to CloudWatch Logs.' }),
                  ).exactOptional(),
                  WebserverLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Publishes Airflow web server logs to CloudWatch Logs.',
                      }),
                  ).exactOptional(),
                  WorkerLogs: ModuleLoggingConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Publishes Airflow worker logs to CloudWatch Logs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Defines the Apache Airflow log types to send to CloudWatch Logs.',
                  required: [],
                }),
              MaxWorkers: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.',
                }),
              MinWorkers: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.',
                }),
              NetworkConfiguration: z
                .object({
                  SecurityGroupIds: SecurityGroupListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of security group IDs. A security group must be attached to the same VPC as the subnets. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.',
                  required: [],
                }),
              PluginsS3ObjectVersion: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a <code>plugins.zip</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.',
                }),
              PluginsS3Path: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.',
                }),
              RequirementsS3ObjectVersion: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a <code>requirements.txt</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.',
                }),
              RequirementsS3Path: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.',
                }),
              Schedulers: z
                .int()
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'The number of Apache Airflow schedulers to run in your Amazon MWAA environment.',
                }),
              SourceBucketArn: z
                .string()
                .regex(/^arn:aws(-[a-z]+)?:s3:::[a-z0-9.\-]+$/)
                .min(1)
                .max(1224)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.',
                }),
              StartupScriptS3ObjectVersion: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    '<p> The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
                }),
              StartupScriptS3Path: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>',
                }),
              WebserverAccessMode: z
                .enum(['PRIVATE_ONLY', 'PUBLIC_ONLY'])
                .exactOptional()
                .openapi({
                  description:
                    'The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.',
                }),
              WeeklyMaintenanceWindowStart: z
                .string()
                .regex(/(MON|TUE|WED|THU|FRI|SAT|SUN):([01]\d|2[0-3]):(00|30)/)
                .min(1)
                .max(9)
                .exactOptional()
                .openapi({
                  description:
                    'The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.',
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
      content: { 'application/json': { schema: UpdateEnvironmentOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postWebtokenNameRoute = createRoute({
  method: 'post',
  path: '/webtoken/{Name}',
  description:
    'Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.',
  operationId: 'CreateWebLoginToken',
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
      Name: z
        .string()
        .regex(/^[a-zA-Z][0-9a-zA-Z-_]*$/)
        .min(1)
        .max(80)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][0-9a-zA-Z-_]*$',
              minLength: 1,
              maxLength: 80,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWebLoginTokenResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/environments',
  description: 'Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.',
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
    }),
    query: z.object({
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to retrieve per page. For example, <code>5</code> environments per page.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
          },
        }),
      NextToken: z
        .string()
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: 'Retrieves the next page of the results.',
            schema: { type: 'string', minLength: 0, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentsOutputSchema } },
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

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{ResourceArn}',
  description:
    'Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. ',
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
      ResourceArn: z
        .string()
        .regex(/^arn:aws(-[a-z]+)?:airflow:[a-z0-9\-]+:\d{12}:environment\/\w+/)
        .min(1)
        .max(1224)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^arn:aws(-[a-z]+)?:airflow:[a-z0-9\\-]+:\\d{12}:environment/\\w+',
              minLength: 1,
              maxLength: 1224,
            },
          },
        }),
    }),
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
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{ResourceArn}',
  description:
    'Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. ',
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
      ResourceArn: z
        .string()
        .regex(/^arn:aws(-[a-z]+)?:airflow:[a-z0-9\-]+:\d{12}:environment\/\w+/)
        .min(1)
        .max(1224)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^arn:aws(-[a-z]+)?:airflow:[a-z0-9\\-]+:\\d{12}:environment/\\w+',
              minLength: 1,
              maxLength: 1224,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postMetricsEnvironmentsEnvironmentNameRoute = createRoute({
  method: 'post',
  path: '/metrics/environments/{EnvironmentName}',
  description: ' <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.',
  operationId: 'PublishMetrics',
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
      EnvironmentName: z
        .string()
        .regex(/^[a-zA-Z][0-9a-zA-Z-_]*$/)
        .min(1)
        .max(80)
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'path',
            required: true,
            description: ' <b>Internal only</b>. The name of the environment.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][0-9a-zA-Z-_]*$',
              minLength: 1,
              maxLength: 80,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MetricData: z
                .array(MetricDatumSchema)
                .openapi({
                  description:
                    ' <b>Internal only</b>. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.',
                }),
            })
            .openapi({ required: ['MetricData'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PublishMetricsOutputSchema } },
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

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description:
    'Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.',
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
      ResourceArn: z
        .string()
        .regex(/^arn:aws(-[a-z]+)?:airflow:[a-z0-9\-]+:\d{12}:environment\/\w+/)
        .min(1)
        .max(1224)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.',
            schema: {
              type: 'string',
              pattern: '^arn:aws(-[a-z]+)?:airflow:[a-z0-9\\-]+:\\d{12}:environment/\\w+',
              minLength: 1,
              maxLength: 1224,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              'The key-value tag pair you want to remove. For example, <code>"Environment": "Staging"</code>. ',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
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
      content: { 'application/json': { schema: UntagResourceOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
