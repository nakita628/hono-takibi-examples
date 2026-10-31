import { createRoute, z } from '@hono/zod-openapi'

const IdSchema = z
  .string()
  .regex(/[a-z0-9]{4,7}/)
  .openapi('Id')

const NameSchema = z.string().min(1).max(64).openapi('Name')

const DescriptionSchema = z.string().min(0).max(1024).openapi('Description')

const ApplicationSchema = z
  .object({
    Id: IdSchema.and(z.any().openapi({ description: 'The application ID.' })).exactOptional(),
    Name: NameSchema.and(z.any().openapi({ description: 'The application name.' })).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Description: 'An application used for creating an example.',
      Id: '339ohji',
      Name: 'Example-Application',
    },
    required: [],
  })
  .openapi('Application')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const LongNameSchema = z.string().min(1).max(128).openapi('LongName')

const UriSchema = z.string().min(1).max(2048).openapi('Uri')

const RoleArnSchema = z
  .string()
  .regex(/^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):(iam)::\d{12}:role[\/].*)$/)
  .min(20)
  .max(2048)
  .openapi('RoleArn')

const ValidatorTypeSchema = z.enum(['JSON_SCHEMA', 'LAMBDA']).openapi('ValidatorType')

const StringWithLengthBetween0And32768Schema = z
  .string()
  .min(0)
  .max(32768)
  .openapi('StringWithLengthBetween0And32768')

const ValidatorSchema = z
  .object({
    Type: ValidatorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'AppConfig supports validators of type <code>JSON_SCHEMA</code> and <code>LAMBDA</code> ',
        }),
    ),
    Content: StringWithLengthBetween0And32768Schema.and(
      z
        .any()
        .openapi({
          description:
            'Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Content'],
    description:
      'A validator provides a syntactic or semantic check to ensure the configuration that you want to deploy functions as intended. To validate your application configuration data, you provide a schema or an Amazon Web Services Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid.',
  })
  .openapi('Validator')

const ValidatorListSchema = z.array(ValidatorSchema).min(0).max(2).openapi('ValidatorList')

const ConfigurationProfileTypeSchema = z
  .string()
  .regex(/^[a-zA-Z\.]+/)
  .openapi('ConfigurationProfileType')

const ConfigurationProfileSchema = z
  .object({
    ApplicationId: IdSchema.and(
      z.any().openapi({ description: 'The application ID.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The configuration profile ID.' }),
    ).exactOptional(),
    Name: LongNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration profile.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The configuration profile description.' }),
    ).exactOptional(),
    LocationUri: UriSchema.and(
      z.any().openapi({ description: 'The URI location of the configuration.' }),
    ).exactOptional(),
    RetrievalRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.',
        }),
    ).exactOptional(),
    Validators: ValidatorListSchema.and(
      z.any().openapi({ description: 'A list of methods for validating the configuration.' }),
    ).exactOptional(),
    Type: ConfigurationProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of configurations contained in the profile. AppConfig supports <code>feature flags</code> and <code>freeform</code> configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for <code>Type</code>:</p> <p> <code>AWS.AppConfig.FeatureFlags</code> </p> <p> <code>AWS.Freeform</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ApplicationId: '339ohji',
      Description: 'Configuration profile used for examples.',
      Id: 'ur8hx2f',
      LocationUri: 'ssm-parameter://Example-Parameter',
      Name: 'Example-Configuration-Profile',
      RetrievalRoleArn: 'arn:aws:iam::111122223333:role/Example-App-Config-Role',
    },
    required: [],
  })
  .openapi('ConfigurationProfile')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const MinutesBetween0And24HoursSchema = z
  .int()
  .min(0)
  .max(1440)
  .openapi('MinutesBetween0And24Hours')

const GrowthTypeSchema = z.enum(['LINEAR', 'EXPONENTIAL']).openapi('GrowthType')

const PercentageSchema = z.float32().min(1).max(100).openapi('Percentage')

const ReplicateToSchema = z.enum(['NONE', 'SSM_DOCUMENT']).openapi('ReplicateTo')

const DeploymentStrategySchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The deployment strategy ID.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the deployment strategy.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the deployment strategy.' }),
    ).exactOptional(),
    DeploymentDurationInMinutes: MinutesBetween0And24HoursSchema.and(
      z.any().openapi({ description: 'Total amount of time the deployment lasted.' }),
    ).exactOptional(),
    GrowthType: GrowthTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The algorithm used to define how percentage grew over time.' }),
    ).exactOptional(),
    GrowthFactor: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of targets that received a deployed configuration during each interval.',
        }),
    ).exactOptional(),
    FinalBakeTimeInMinutes: MinutesBetween0And24HoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that AppConfig monitored for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.',
        }),
    ).exactOptional(),
    ReplicateTo: ReplicateToSchema.and(
      z
        .any()
        .openapi({
          description: 'Save the deployment strategy to a Systems Manager (SSM) document.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DeploymentDurationInMinutes: 15,
      FinalBakeTimeInMinutes: 20,
      GrowthFactor: 25,
      GrowthType: 'LINEAR',
      Id: '1225qzk',
      Name: 'Example-Deployment',
      ReplicateTo: 'SSM_DOCUMENT',
    },
    required: [],
  })
  .openapi('DeploymentStrategy')

const EnvironmentStateSchema = z
  .enum(['READY_FOR_DEPLOYMENT', 'DEPLOYING', 'ROLLING_BACK', 'ROLLED_BACK'])
  .openapi('EnvironmentState')

const StringWithLengthBetween1And2048Schema = z
  .string()
  .min(1)
  .max(2048)
  .openapi('StringWithLengthBetween1And2048')

const MonitorSchema = z
  .object({
    AlarmArn: StringWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({ description: 'Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.' }),
    ),
    AlarmRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of an Identity and Access Management (IAM) role for AppConfig to monitor <code>AlarmArn</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AlarmArn'],
    description: 'Amazon CloudWatch alarms to monitor during the deployment process.',
  })
  .openapi('Monitor')

const MonitorListSchema = z.array(MonitorSchema).min(0).max(5).openapi('MonitorList')

const EnvironmentSchema = z
  .object({
    ApplicationId: IdSchema.and(
      z.any().openapi({ description: 'The application ID.' }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The environment ID.' })).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the environment.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the environment.' }),
    ).exactOptional(),
    State: EnvironmentStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the environment. An environment can be in one of the following states: <code>READY_FOR_DEPLOYMENT</code>, <code>DEPLOYING</code>, <code>ROLLING_BACK</code>, or <code>ROLLED_BACK</code> ',
        }),
    ).exactOptional(),
    Monitors: MonitorListSchema.and(
      z.any().openapi({ description: 'Amazon CloudWatch alarms monitored during the deployment.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ApplicationId: '339ohji',
      Description: 'An environment for examples.',
      Id: '54j1r29',
      Name: 'Example-Environment',
      State: 'ROLLED_BACK',
    },
    required: [],
  })
  .openapi('Environment')

const IntegerSchema = z.int().openapi('Integer')

const ArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_\/:.]+/,
  )
  .min(20)
  .max(2048)
  .openapi('Arn')

const ActionSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The action name.' })).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Information about the action.' }),
    ).exactOptional(),
    Uri: UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The extension URI associated to the action point in the extension definition. The URI can be an Amazon Resource Name (ARN) for one of the following: an Lambda function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.',
        }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) for an Identity and Access Management assume role.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An action defines the tasks that the extension performs during the AppConfig workflow. Each action includes an action point such as <code>ON_CREATE_HOSTED_CONFIGURATION</code>, <code>PRE_DEPLOYMENT</code>, or <code>ON_DEPLOYMENT</code>. Each action also includes a name, a URI to an Lambda function, and an Amazon Resource Name (ARN) for an Identity and Access Management assume role. You specify the name, URI, and ARN for each <i>action point</i> defined in the extension. You can specify the following actions for an extension:</p> <ul> <li> <p> <code>PRE_CREATE_HOSTED_CONFIGURATION_VERSION</code> </p> </li> <li> <p> <code>PRE_START_DEPLOYMENT</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_START</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_STEP</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_BAKING</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_COMPLETE</code> </p> </li> <li> <p> <code>ON_DEPLOYMENT_ROLLED_BACK</code> </p> </li> </ul>',
    required: [],
  })
  .openapi('Action')

const ActionListSchema = z.array(ActionSchema).length(1).openapi('ActionList')

const ActionsMapSchema = z
  .record(z.string(), ActionListSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 5)
  .openapi('ActionsMap')

const BooleanSchema = z.boolean().openapi('Boolean')

const ParameterSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Information about the parameter.' }),
    ).exactOptional(),
    Required: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A parameter value must be specified in the extension association.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A value such as an Amazon Resource Name (ARN) or an Amazon Simple Notification Service topic entered in an extension when invoked. Parameter values are specified in an extension association. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.',
    required: [],
  })
  .openapi('Parameter')

const ParameterMapSchema = z
  .record(z.string(), ParameterSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 5)
  .openapi('ParameterMap')

const ExtensionSchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the extension.' }),
    ).exactOptional(),
    Name: NameSchema.and(z.any().openapi({ description: 'The extension name.' })).exactOptional(),
    VersionNumber: IntegerSchema.and(
      z.any().openapi({ description: 'The extension version number.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated Amazon Resource Name (ARN) for the extension.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Information about the extension.' }),
    ).exactOptional(),
    Actions: ActionsMapSchema.and(
      z.any().openapi({ description: 'The actions defined in the extension.' }),
    ).exactOptional(),
    Parameters: ParameterMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the <code>CreateExtensionAssociation</code> API action. For Lambda extension actions, these parameters are included in the Lambda request object.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Extension')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const IdentifierSchema = z.string().min(1).max(2048).openapi('Identifier')

const ParameterValueMapSchema = z
  .record(z.string(), StringWithLengthBetween1And2048Schema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 5)
  .openapi('ParameterValueMap')

const ExtensionAssociationSchema = z
  .object({
    Id: IdentifierSchema.and(
      z.any().openapi({ description: 'The system-generated ID for the association.' }),
    ).exactOptional(),
    ExtensionArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the extension defined in the association.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs of applications, configuration profiles, or environments defined in the association.',
        }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated Amazon Resource Name (ARN) for the extension.',
        }),
    ).exactOptional(),
    Parameters: ParameterValueMapSchema.and(
      z
        .any()
        .openapi({ description: 'The parameter names and values defined in the association.' }),
    ).exactOptional(),
    ExtensionVersionNumber: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The version number for the extension defined in the association.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtensionAssociation')

const BlobSchema = z.string().openapi('Blob')

const HostedConfigurationVersionSchema = z
  .object({
    Content: BlobSchema.and(
      z
        .any()
        .openapi({ description: 'The content of the configuration or the configuration data.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ApplicationId: '339ohji',
      ConfigurationProfileId: 'ur8hx2f',
      ContentType: 'application/json',
      VersionNumber: 1,
    },
    required: [],
  })
  .openapi('HostedConfigurationVersion')

const PayloadTooLargeExceptionSchema = z.any().openapi('PayloadTooLargeException')

const ConfigurationSchema = z
  .object({
    Content: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The content of the configuration or the configuration data.</p> <important> <p>The <code>Content</code> attribute only contains data if the system finds new or updated configuration data. If there is no new or updated data and <code>ClientConfigurationVersion</code> matches the version of the current configuration, AppConfig returns a <code>204 No Content</code> HTTP response code and the <code>Content</code> value will be empty.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ConfigurationVersion: '1', ContentType: 'application/octet-stream' },
    required: [],
  })
  .openapi('Configuration')

const VersionSchema = z.string().min(1).max(1024).openapi('Version')

const DeploymentStateSchema = z
  .enum(['BAKING', 'VALIDATING', 'DEPLOYING', 'COMPLETE', 'ROLLING_BACK', 'ROLLED_BACK'])
  .openapi('DeploymentState')

const DeploymentEventTypeSchema = z
  .enum([
    'PERCENTAGE_UPDATED',
    'ROLLBACK_STARTED',
    'ROLLBACK_COMPLETED',
    'BAKE_TIME_STARTED',
    'DEPLOYMENT_STARTED',
    'DEPLOYMENT_COMPLETED',
  ])
  .openapi('DeploymentEventType')

const TriggeredBySchema = z
  .enum(['USER', 'APPCONFIG', 'CLOUDWATCH_ALARM', 'INTERNAL_ERROR'])
  .openapi('TriggeredBy')

const StringSchema = z.string().openapi('String')

const ActionInvocationSchema = z
  .object({
    ExtensionIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The name, the ID, or the Amazon Resource Name (ARN) of the extension.',
        }),
    ).exactOptional(),
    ActionName: NameSchema.and(
      z.any().openapi({ description: 'The name of the action.' }),
    ).exactOptional(),
    Uri: UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The extension URI associated to the action point in the extension definition. The URI can be an Amazon Resource Name (ARN) for one of the following: an Lambda function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.',
        }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) for an Identity and Access Management assume role.',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message when an extension invocation fails.' }),
    ).exactOptional(),
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The error code when an extension invocation fails.' }),
    ).exactOptional(),
    InvocationId: IdSchema.and(
      z.any().openapi({ description: 'A system-generated ID for this invocation.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An extension that was invoked as part of a deployment event.',
    required: [],
  })
  .openapi('ActionInvocation')

const ActionInvocationsSchema = z.array(ActionInvocationSchema).openapi('ActionInvocations')

const Iso8601DateTimeSchema = z.iso.datetime({ offset: true }).openapi('Iso8601DateTime')

const DeploymentEventSchema = z
  .object({
    EventType: DeploymentEventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of deployment event. Deployment event types include the start, stop, or completion of a deployment; a percentage update; the start or stop of a bake period; and the start or completion of a rollback.',
        }),
    ).exactOptional(),
    TriggeredBy: TriggeredBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity that triggered the deployment event. Events can be triggered by a user, AppConfig, an Amazon CloudWatch alarm, or an internal error.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the deployment event. Descriptions include, but are not limited to, the user account or the Amazon CloudWatch alarm ARN that initiated a rollback, the percentage of hosts that received the deployment, or in the case of an internal error, a recommendation to attempt a new deployment.',
        }),
    ).exactOptional(),
    ActionInvocations: ActionInvocationsSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of extensions that were invoked as part of the deployment.',
        }),
    ).exactOptional(),
    OccurredAt: Iso8601DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time the event occurred.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that describes a deployment event.', required: [] })
  .openapi('DeploymentEvent')

const DeploymentEventsSchema = z.array(DeploymentEventSchema).openapi('DeploymentEvents')

const AppliedExtensionSchema = z
  .object({
    ExtensionId: IdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the extension.' }),
    ).exactOptional(),
    ExtensionAssociationId: IdSchema.and(
      z.any().openapi({ description: 'The system-generated ID for the association.' }),
    ).exactOptional(),
    VersionNumber: IntegerSchema.and(
      z.any().openapi({ description: 'The extension version number.' }),
    ).exactOptional(),
    Parameters: ParameterValueMapSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more parameters for the actions called by the extension.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An extension that was invoked during a deployment.', required: [] })
  .openapi('AppliedExtension')

const AppliedExtensionsSchema = z.array(AppliedExtensionSchema).openapi('AppliedExtensions')

const DeploymentSchema = z
  .object({
    ApplicationId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the application that was deployed.' }),
    ).exactOptional(),
    EnvironmentId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the environment that was deployed.' }),
    ).exactOptional(),
    DeploymentStrategyId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the deployment strategy that was deployed.' }),
    ).exactOptional(),
    ConfigurationProfileId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the configuration profile that was deployed.' }),
    ).exactOptional(),
    DeploymentNumber: IntegerSchema.and(
      z.any().openapi({ description: 'The sequence number of the deployment.' }),
    ).exactOptional(),
    ConfigurationName: NameSchema.and(
      z.any().openapi({ description: 'The name of the configuration.' }),
    ).exactOptional(),
    ConfigurationLocationUri: UriSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the source location of the configuration.' }),
    ).exactOptional(),
    ConfigurationVersion: VersionSchema.and(
      z.any().openapi({ description: 'The configuration version that was deployed.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the deployment.' }),
    ).exactOptional(),
    DeploymentDurationInMinutes: MinutesBetween0And24HoursSchema.and(
      z.any().openapi({ description: 'Total amount of time the deployment lasted.' }),
    ).exactOptional(),
    GrowthType: GrowthTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The algorithm used to define how percentage grew over time.' }),
    ).exactOptional(),
    GrowthFactor: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of targets to receive a deployed configuration during each interval.',
        }),
    ).exactOptional(),
    FinalBakeTimeInMinutes: MinutesBetween0And24HoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that AppConfig monitored for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.',
        }),
    ).exactOptional(),
    State: DeploymentStateSchema.and(
      z.any().openapi({ description: 'The state of the deployment.' }),
    ).exactOptional(),
    EventLog: DeploymentEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing all events related to a deployment. The most recent events are displayed first.',
        }),
    ).exactOptional(),
    PercentageComplete: PercentageSchema.and(
      z
        .any()
        .openapi({
          description: 'The percentage of targets for which the deployment is available.',
        }),
    ).exactOptional(),
    StartedAt: Iso8601DateTimeSchema.and(
      z.any().openapi({ description: 'The time the deployment started.' }),
    ).exactOptional(),
    CompletedAt: Iso8601DateTimeSchema.and(
      z.any().openapi({ description: 'The time the deployment completed. ' }),
    ).exactOptional(),
    AppliedExtensions: AppliedExtensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of extensions that were processed as part of the deployment. The extensions that were previously associated to the configuration profile, environment, or the application when <code>StartDeployment</code> was called.',
        }),
    ).exactOptional(),
    KmsKeyArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name of the Key Management Service key used to encrypt configuration data. You can encrypt secrets stored in Secrets Manager, Amazon Simple Storage Service (Amazon S3) objects encrypted with SSE-KMS, or secure string parameters stored in Amazon Web Services Systems Manager Parameter Store. ',
        }),
    ).exactOptional(),
    KmsKeyIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DeploymentDurationInMinutes: 15,
      DeploymentNumber: 2,
      FinalBakeTimeInMinutes: 0,
      GrowthFactor: 25,
      PercentageComplete: 1,
    },
    required: [],
  })
  .openapi('Deployment')

const ApplicationListSchema = z.array(ApplicationSchema).openapi('ApplicationList')

const NextTokenSchema = z.string().min(1).max(2048).openapi('NextToken')

const ApplicationsSchema = z
  .object({
    Items: ApplicationListSchema.and(
      z.any().openapi({ description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Items: [
        {
          Description: 'An application used for creating an example.',
          Id: '339ohji',
          Name: 'test-application',
        },
        { Id: 'rwalwu7', Name: 'Test-Application' },
      ],
    },
    required: [],
  })
  .openapi('Applications')

const ValidatorTypeListSchema = z
  .array(ValidatorTypeSchema)
  .min(0)
  .max(2)
  .openapi('ValidatorTypeList')

const ConfigurationProfileSummarySchema = z
  .object({
    ApplicationId: IdSchema.and(
      z.any().openapi({ description: 'The application ID.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The ID of the configuration profile.' }),
    ).exactOptional(),
    Name: LongNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration profile.' }),
    ).exactOptional(),
    LocationUri: UriSchema.and(
      z.any().openapi({ description: 'The URI location of the configuration.' }),
    ).exactOptional(),
    ValidatorTypes: ValidatorTypeListSchema.and(
      z.any().openapi({ description: 'The types of validators in the configuration profile.' }),
    ).exactOptional(),
    Type: ConfigurationProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of configurations contained in the profile. AppConfig supports <code>feature flags</code> and <code>freeform</code> configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for <code>Type</code>:</p> <p> <code>AWS.AppConfig.FeatureFlags</code> </p> <p> <code>AWS.Freeform</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of a configuration profile.', required: [] })
  .openapi('ConfigurationProfileSummary')

const ConfigurationProfileSummaryListSchema = z
  .array(ConfigurationProfileSummarySchema)
  .openapi('ConfigurationProfileSummaryList')

const ConfigurationProfilesSchema = z
  .object({
    Items: ConfigurationProfileSummaryListSchema.and(
      z.any().openapi({ description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Items: [
        {
          ApplicationId: '339ohji',
          Id: 'ur8hx2f',
          LocationUri: 'ssm-parameter://Example-Parameter',
          Name: 'Example-Configuration-Profile',
        },
      ],
    },
    required: [],
  })
  .openapi('ConfigurationProfiles')

const DeploymentStrategyListSchema = z
  .array(DeploymentStrategySchema)
  .openapi('DeploymentStrategyList')

const DeploymentStrategiesSchema = z
  .object({
    Items: DeploymentStrategyListSchema.and(
      z.any().openapi({ description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Items: [
        {
          DeploymentDurationInMinutes: 15,
          FinalBakeTimeInMinutes: 0,
          GrowthFactor: 25,
          GrowthType: 'LINEAR',
          Id: '1225qzk',
          Name: 'Example-Deployment',
          ReplicateTo: 'SSM_DOCUMENT',
        },
      ],
    },
    required: [],
  })
  .openapi('DeploymentStrategies')

const DeploymentSummarySchema = z
  .object({
    DeploymentNumber: IntegerSchema.and(
      z.any().openapi({ description: 'The sequence number of the deployment.' }),
    ).exactOptional(),
    ConfigurationName: NameSchema.and(
      z.any().openapi({ description: 'The name of the configuration.' }),
    ).exactOptional(),
    ConfigurationVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the configuration.' }),
    ).exactOptional(),
    DeploymentDurationInMinutes: MinutesBetween0And24HoursSchema.and(
      z.any().openapi({ description: 'Total amount of time the deployment lasted.' }),
    ).exactOptional(),
    GrowthType: GrowthTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The algorithm used to define how percentage grows over time.' }),
    ).exactOptional(),
    GrowthFactor: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of targets to receive a deployed configuration during each interval.',
        }),
    ).exactOptional(),
    FinalBakeTimeInMinutes: MinutesBetween0And24HoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.',
        }),
    ).exactOptional(),
    State: DeploymentStateSchema.and(
      z.any().openapi({ description: 'The state of the deployment.' }),
    ).exactOptional(),
    PercentageComplete: PercentageSchema.and(
      z
        .any()
        .openapi({
          description: 'The percentage of targets for which the deployment is available.',
        }),
    ).exactOptional(),
    StartedAt: Iso8601DateTimeSchema.and(
      z.any().openapi({ description: 'Time the deployment started.' }),
    ).exactOptional(),
    CompletedAt: Iso8601DateTimeSchema.and(
      z.any().openapi({ description: 'Time the deployment completed.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the deployment.', required: [] })
  .openapi('DeploymentSummary')

const DeploymentListSchema = z.array(DeploymentSummarySchema).openapi('DeploymentList')

const DeploymentsSchema = z
  .object({
    Items: DeploymentListSchema.and(
      z.any().openapi({ description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Items: [
        {
          CompletedAt: '2021-09-17T21:59:03.888000+00:00',
          ConfigurationName: 'Example-Configuration-Profile',
          ConfigurationVersion: '1',
          DeploymentDurationInMinutes: 15,
          DeploymentNumber: 1,
          FinalBakeTimeInMinutes: 0,
          GrowthFactor: 25,
          GrowthType: 'LINEAR',
          PercentageComplete: 100,
          StartedAt: '2021-09-17T21:43:54.205000+00:00',
          State: 'COMPLETE',
        },
      ],
    },
    required: [],
  })
  .openapi('Deployments')

const EnvironmentListSchema = z.array(EnvironmentSchema).openapi('EnvironmentList')

const EnvironmentsSchema = z
  .object({
    Items: EnvironmentListSchema.and(
      z.any().openapi({ description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Items: [
        {
          ApplicationId: '339ohji',
          Id: '54j1r29',
          Name: 'Example-Environment',
          State: 'READY_FOR_DEPLOYMENT',
        },
      ],
    },
    required: [],
  })
  .openapi('Environments')

const ExtensionAssociationSummarySchema = z
  .object({
    Id: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The extension association ID. This ID is used to call other <code>ExtensionAssociation</code> API actions such as <code>GetExtensionAssociation</code> or <code>DeleteExtensionAssociation</code>.',
        }),
    ).exactOptional(),
    ExtensionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated Amazon Resource Name (ARN) for the extension.',
        }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs of applications, configuration profiles, or environments defined in the association.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an association between an extension and an AppConfig resource such as an application, environment, or configuration profile. Call <code>GetExtensionAssociation</code> to get more information about an association.',
    required: [],
  })
  .openapi('ExtensionAssociationSummary')

const ExtensionAssociationSummariesSchema = z
  .array(ExtensionAssociationSummarySchema)
  .openapi('ExtensionAssociationSummaries')

const ExtensionAssociationsSchema = z
  .object({
    Items: ExtensionAssociationSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of extension associations. Each item represents an extension association to an application, environment, or configuration profile. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtensionAssociations')

const ExtensionSummarySchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the extension.' }),
    ).exactOptional(),
    Name: NameSchema.and(z.any().openapi({ description: 'The extension name.' })).exactOptional(),
    VersionNumber: IntegerSchema.and(
      z.any().openapi({ description: 'The extension version number.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated Amazon Resource Name (ARN) for the extension.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Information about the extension.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an extension. Call <code>GetExtension</code> to get more information about an extension.',
    required: [],
  })
  .openapi('ExtensionSummary')

const ExtensionSummariesSchema = z.array(ExtensionSummarySchema).openapi('ExtensionSummaries')

const ExtensionsSchema = z
  .object({
    Items: ExtensionSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of available extensions. The list includes Amazon Web Services authored and user-created extensions.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Extensions')

const StringWithLengthBetween1And255Schema = z
  .string()
  .min(1)
  .max(255)
  .openapi('StringWithLengthBetween1And255')

const VersionLabelSchema = z
  .string()
  .regex(/.*[^0-9].*/)
  .min(1)
  .max(64)
  .openapi('VersionLabel')

const HostedConfigurationVersionSummarySchema = z
  .object({
    ApplicationId: IdSchema.and(
      z.any().openapi({ description: 'The application ID.' }),
    ).exactOptional(),
    ConfigurationProfileId: IdSchema.and(
      z.any().openapi({ description: 'The configuration profile ID.' }),
    ).exactOptional(),
    VersionNumber: IntegerSchema.and(
      z.any().openapi({ description: 'The configuration version.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the configuration.' }),
    ).exactOptional(),
    ContentType: StringWithLengthBetween1And255Schema.and(
      z
        .any()
        .openapi({
          description:
            'A standard MIME type describing the format of the configuration content. For more information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.',
        }),
    ).exactOptional(),
    VersionLabel: VersionLabelSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-defined label for an AppConfig hosted configuration version.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the configuration.', required: [] })
  .openapi('HostedConfigurationVersionSummary')

const HostedConfigurationVersionSummaryListSchema = z
  .array(HostedConfigurationVersionSummarySchema)
  .openapi('HostedConfigurationVersionSummaryList')

const HostedConfigurationVersionsSchema = z
  .object({
    Items: HostedConfigurationVersionSummaryListSchema.and(
      z.any().openapi({ description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Items: [
        {
          ApplicationId: '339ohji',
          ConfigurationProfileId: 'ur8hx2f',
          ContentType: 'application/json',
          VersionNumber: 1,
        },
      ],
    },
    required: [],
  })
  .openapi('HostedConfigurationVersions')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const ResourceTagsSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata to assign to AppConfig resources. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { Tags: { group1: '1' } }, required: [] })
  .openapi('ResourceTags')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const ActionPointSchema = z
  .enum([
    'PRE_CREATE_HOSTED_CONFIGURATION_VERSION',
    'PRE_START_DEPLOYMENT',
    'ON_DEPLOYMENT_START',
    'ON_DEPLOYMENT_STEP',
    'ON_DEPLOYMENT_BAKING',
    'ON_DEPLOYMENT_COMPLETE',
    'ON_DEPLOYMENT_ROLLED_BACK',
  ])
  .openapi('ActionPoint')

const CreateApplicationRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'A name for the application.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the application.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateApplicationRequest' })
  .openapi('CreateApplicationRequest')

const CreateConfigurationProfileRequestSchema = z
  .object({
    Name: LongNameSchema.and(
      z.any().openapi({ description: 'A name for the configuration profile.' }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the configuration profile.' }),
    ).exactOptional(),
    LocationUri: UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A URI to locate the configuration. You can specify the following:</p> <ul> <li> <p>For the AppConfig hosted configuration store and for feature flags, specify <code>hosted</code>.</p> </li> <li> <p>For an Amazon Web Services Systems Manager Parameter Store parameter, specify either the parameter name in the format <code>ssm-parameter://&lt;parameter name&gt;</code> or the ARN.</p> </li> <li> <p>For an Secrets Manager secret, specify the URI in the following format: <code>secrets-manager</code>://&lt;secret name&gt;.</p> </li> <li> <p>For an Amazon S3 object, specify the URI in the following format: <code>s3://&lt;bucket&gt;/&lt;objectKey&gt; </code>. Here is an example: <code>s3://my-bucket/my-app/us-east-1/my-config.json</code> </p> </li> <li> <p>For an SSM document, specify either the document name in the format <code>ssm-document://&lt;document name&gt;</code> or the Amazon Resource Name (ARN).</p> </li> </ul>',
        }),
    ),
    RetrievalRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.</p> <important> <p>A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that store your configuration. </p> </important>',
        }),
    ).exactOptional(),
    Validators: ValidatorListSchema.and(
      z.any().openapi({ description: 'A list of methods for validating the configuration.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
        }),
    ).exactOptional(),
    Type: ConfigurationProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of configurations contained in the profile. AppConfig supports <code>feature flags</code> and <code>freeform</code> configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for <code>Type</code>:</p> <p> <code>AWS.AppConfig.FeatureFlags</code> </p> <p> <code>AWS.Freeform</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'LocationUri'], title: 'CreateConfigurationProfileRequest' })
  .openapi('CreateConfigurationProfileRequest')

const GrowthFactorSchema = z.float32().min(1).max(100).openapi('GrowthFactor')

const CreateDeploymentStrategyRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'A name for the deployment strategy.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the deployment strategy.' }),
    ).exactOptional(),
    DeploymentDurationInMinutes: MinutesBetween0And24HoursSchema.and(
      z.any().openapi({ description: 'Total amount of time for a deployment to last.' }),
    ),
    FinalBakeTimeInMinutes: MinutesBetween0And24HoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AppConfig rolls back the deployment. You must configure permissions for AppConfig to roll back based on CloudWatch alarms. For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html">Configuring permissions for rollback based on Amazon CloudWatch alarms</a> in the <i>AppConfig User Guide</i>.',
        }),
    ).exactOptional(),
    GrowthFactor: GrowthFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of targets to receive a deployed configuration during each interval.',
        }),
    ),
    GrowthType: GrowthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for <code>Step percentage</code>. For example, a linear deployment that uses a <code>Step percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p>',
        }),
    ).exactOptional(),
    ReplicateTo: ReplicateToSchema.and(
      z
        .any()
        .openapi({
          description: 'Save the deployment strategy to a Systems Manager (SSM) document.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'DeploymentDurationInMinutes', 'GrowthFactor'],
    title: 'CreateDeploymentStrategyRequest',
  })
  .openapi('CreateDeploymentStrategyRequest')

const CreateEnvironmentRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'A name for the environment.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the environment.' }),
    ).exactOptional(),
    Monitors: MonitorListSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon CloudWatch alarms to monitor during the deployment process.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateEnvironmentRequest' })
  .openapi('CreateEnvironmentRequest')

const CreateExtensionAssociationRequestSchema = z
  .object({
    ExtensionIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The name, the ID, or the Amazon Resource Name (ARN) of the extension.',
        }),
    ),
    ExtensionVersionNumber: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the extension. If not specified, AppConfig uses the maximum version of the extension.',
        }),
    ).exactOptional(),
    ResourceIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of an application, configuration profile, or environment.',
        }),
    ),
    Parameters: ParameterValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parameter names and values defined in the extensions. Extension parameters marked <code>Required</code> must be entered for this field.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Adds one or more tags for the specified extension association. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ExtensionIdentifier', 'ResourceIdentifier'],
    title: 'CreateExtensionAssociationRequest',
  })
  .openapi('CreateExtensionAssociationRequest')

const CreateExtensionRequestSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the extension. Each extension name in your account must be unique. Extension versions use the same name.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Information about the extension.' }),
    ).exactOptional(),
    Actions: ActionsMapSchema.and(
      z.any().openapi({ description: 'The actions defined in the extension.' }),
    ),
    Parameters: ParameterMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the <code>CreateExtensionAssociation</code> API action. For Lambda extension actions, these parameters are included in the Lambda request object.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Adds one or more tags for the specified extension. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Actions'], title: 'CreateExtensionRequest' })
  .openapi('CreateExtensionRequest')

const CreateHostedConfigurationVersionRequestSchema = z
  .object({
    Content: BlobSchema.and(
      z
        .any()
        .openapi({ description: 'The content of the configuration or the configuration data.' }),
    ),
  })
  .openapi({ required: ['Content'], title: 'CreateHostedConfigurationVersionRequest' })
  .openapi('CreateHostedConfigurationVersionRequest')

const DeleteApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const DeleteConfigurationProfileRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteConfigurationProfileRequest' })
  .openapi('DeleteConfigurationProfileRequest')

const DeploymentStrategyIdSchema = z
  .string()
  .regex(/(^[a-z0-9]{4,7}$|^AppConfig\.[A-Za-z0-9]{9,40}$)/)
  .openapi('DeploymentStrategyId')

const DeleteDeploymentStrategyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDeploymentStrategyRequest' })
  .openapi('DeleteDeploymentStrategyRequest')

const DeleteEnvironmentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEnvironmentRequest' })
  .openapi('DeleteEnvironmentRequest')

const DeleteExtensionAssociationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteExtensionAssociationRequest' })
  .openapi('DeleteExtensionAssociationRequest')

const DeleteExtensionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteExtensionRequest' })
  .openapi('DeleteExtensionRequest')

const DeleteHostedConfigurationVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteHostedConfigurationVersionRequest' })
  .openapi('DeleteHostedConfigurationVersionRequest')

const GetApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'GetApplicationRequest' })
  .openapi('GetApplicationRequest')

const GetConfigurationProfileRequestSchema = z
  .object({})
  .openapi({ title: 'GetConfigurationProfileRequest' })
  .openapi('GetConfigurationProfileRequest')

const StringWithLengthBetween1And64Schema = z
  .string()
  .min(1)
  .max(64)
  .openapi('StringWithLengthBetween1And64')

const GetConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetConfigurationRequest' })
  .openapi('GetConfigurationRequest')

const GetDeploymentRequestSchema = z
  .object({})
  .openapi({ title: 'GetDeploymentRequest' })
  .openapi('GetDeploymentRequest')

const GetDeploymentStrategyRequestSchema = z
  .object({})
  .openapi({ title: 'GetDeploymentStrategyRequest' })
  .openapi('GetDeploymentStrategyRequest')

const GetEnvironmentRequestSchema = z
  .object({})
  .openapi({ title: 'GetEnvironmentRequest' })
  .openapi('GetEnvironmentRequest')

const GetExtensionAssociationRequestSchema = z
  .object({})
  .openapi({ title: 'GetExtensionAssociationRequest' })
  .openapi('GetExtensionAssociationRequest')

const GetExtensionRequestSchema = z
  .object({})
  .openapi({ title: 'GetExtensionRequest' })
  .openapi('GetExtensionRequest')

const GetHostedConfigurationVersionRequestSchema = z
  .object({})
  .openapi({ title: 'GetHostedConfigurationVersionRequest' })
  .openapi('GetHostedConfigurationVersionRequest')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const ListApplicationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListApplicationsRequest' })
  .openapi('ListApplicationsRequest')

const ListConfigurationProfilesRequestSchema = z
  .object({})
  .openapi({ title: 'ListConfigurationProfilesRequest' })
  .openapi('ListConfigurationProfilesRequest')

const ListDeploymentStrategiesRequestSchema = z
  .object({})
  .openapi({ title: 'ListDeploymentStrategiesRequest' })
  .openapi('ListDeploymentStrategiesRequest')

const ListDeploymentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDeploymentsRequest' })
  .openapi('ListDeploymentsRequest')

const ListEnvironmentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEnvironmentsRequest' })
  .openapi('ListEnvironmentsRequest')

const ListExtensionAssociationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListExtensionAssociationsRequest' })
  .openapi('ListExtensionAssociationsRequest')

const QueryNameSchema = z.string().min(1).max(64).openapi('QueryName')

const ListExtensionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListExtensionsRequest' })
  .openapi('ListExtensionsRequest')

const ListHostedConfigurationVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListHostedConfigurationVersionsRequest' })
  .openapi('ListHostedConfigurationVersionsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StartDeploymentRequestSchema = z
  .object({
    DeploymentStrategyId: DeploymentStrategyIdSchema.and(
      z.any().openapi({ description: 'The deployment strategy ID.' }),
    ),
    ConfigurationProfileId: IdSchema.and(
      z.any().openapi({ description: 'The configuration profile ID.' }),
    ),
    ConfigurationVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration version to deploy. If deploying an AppConfig hosted configuration version, you can specify either the version number or version label.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the deployment.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
        }),
    ).exactOptional(),
    KmsKeyIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeploymentStrategyId', 'ConfigurationProfileId', 'ConfigurationVersion'],
    title: 'StartDeploymentRequest',
  })
  .openapi('StartDeploymentRequest')

const StopDeploymentRequestSchema = z
  .object({})
  .openapi({ title: 'StopDeploymentRequest' })
  .openapi('StopDeploymentRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationRequestSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the application.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateApplicationRequest', required: [] })
  .openapi('UpdateApplicationRequest')

const UpdateConfigurationProfileRequestSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the configuration profile.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the configuration profile.' }),
    ).exactOptional(),
    RetrievalRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.',
        }),
    ).exactOptional(),
    Validators: ValidatorListSchema.and(
      z.any().openapi({ description: 'A list of methods for validating the configuration.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateConfigurationProfileRequest', required: [] })
  .openapi('UpdateConfigurationProfileRequest')

const UpdateDeploymentStrategyRequestSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the deployment strategy.' }),
    ).exactOptional(),
    DeploymentDurationInMinutes: MinutesBetween0And24HoursSchema.and(
      z.any().openapi({ description: 'Total amount of time for a deployment to last.' }),
    ).exactOptional(),
    FinalBakeTimeInMinutes: MinutesBetween0And24HoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.',
        }),
    ).exactOptional(),
    GrowthFactor: GrowthFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of targets to receive a deployed configuration during each interval.',
        }),
    ).exactOptional(),
    GrowthType: GrowthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDeploymentStrategyRequest', required: [] })
  .openapi('UpdateDeploymentStrategyRequest')

const UpdateEnvironmentRequestSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the environment.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the environment.' }),
    ).exactOptional(),
    Monitors: MonitorListSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon CloudWatch alarms to monitor during the deployment process.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateEnvironmentRequest', required: [] })
  .openapi('UpdateEnvironmentRequest')

const UpdateExtensionAssociationRequestSchema = z
  .object({
    Parameters: ParameterValueMapSchema.and(
      z.any().openapi({ description: 'The parameter names and values defined in the extension.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateExtensionAssociationRequest', required: [] })
  .openapi('UpdateExtensionAssociationRequest')

const UpdateExtensionRequestSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Information about the extension.' }),
    ).exactOptional(),
    Actions: ActionsMapSchema.and(
      z.any().openapi({ description: 'The actions defined in the extension.' }),
    ).exactOptional(),
    Parameters: ParameterMapSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more parameters for the actions called by the extension.',
        }),
    ).exactOptional(),
    VersionNumber: IntegerSchema.and(
      z.any().openapi({ description: 'The extension version number.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateExtensionRequest', required: [] })
  .openapi('UpdateExtensionRequest')

const ValidateConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'ValidateConfigurationRequest' })
  .openapi('ValidateConfigurationRequest')

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

export const getApplicationsRoute = createRoute({
  method: 'get',
  path: '/applications',
  description: 'Lists all applications in your Amazon Web Services account.',
  operationId: 'ListApplications',
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
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      next_token: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List request, the nextToken should not be set. On subsequent calls, the nextToken parameter should be set to the previous responses nextToken value. Use this token to get the next set of results. ',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
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
      content: { 'application/json': { schema: ApplicationsSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postApplicationsRoute = createRoute({
  method: 'post',
  path: '/applications',
  description:
    'Creates an application. In AppConfig, an application is simply an organizational construct like a folder. This organizational construct has a relationship with some unit of executable code. For example, you could create an application called MyMobileApp to organize and manage configuration data for a mobile application installed by your users.',
  operationId: 'CreateApplication',
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
              Name: z
                .string()
                .min(1)
                .max(64)
                .openapi({ description: 'A name for the application.' }),
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the application.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: ApplicationSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdConfigurationprofilesRoute = createRoute({
  method: 'get',
  path: '/applications/{ApplicationId}/configurationprofiles',
  description: 'Lists the configuration profiles for an application.',
  operationId: 'ListConfigurationProfiles',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The application ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      next_token: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A token to start the list. Use this token to get the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      type: z
        .string()
        .regex(/^[a-zA-Z\.]+/)
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              'A filter based on the type of configurations that the configuration profile contains. A configuration can be a feature flag or a freeform configuration.',
            schema: { type: 'string', pattern: '^[a-zA-Z\\.]+' },
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
      content: { 'application/json': { schema: ConfigurationProfilesSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postApplicationsApplicationIdConfigurationprofilesRoute = createRoute({
  method: 'post',
  path: '/applications/{ApplicationId}/configurationprofiles',
  description:
    '<p>Creates a configuration profile, which is information that enables AppConfig to access the configuration source. Valid configuration sources include the following:</p> <ul> <li> <p>Configuration data in YAML, JSON, and other formats stored in the AppConfig hosted configuration store</p> </li> <li> <p>Configuration data stored as objects in an Amazon Simple Storage Service (Amazon S3) bucket</p> </li> <li> <p>Pipelines stored in CodePipeline</p> </li> <li> <p>Secrets stored in Secrets Manager</p> </li> <li> <p>Standard and secure string parameters stored in Amazon Web Services Systems Manager Parameter Store</p> </li> <li> <p>Configuration data in SSM documents stored in the Systems Manager document store</p> </li> </ul> <p>A configuration profile includes the following information:</p> <ul> <li> <p>The URI location of the configuration data.</p> </li> <li> <p>The Identity and Access Management (IAM) role that provides access to the configuration data.</p> </li> <li> <p>A validator for the configuration data. Available validators include either a JSON Schema or an Amazon Web Services Lambda function.</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a Configuration and a Configuration Profile</a> in the <i>AppConfig User Guide</i>.</p>',
  operationId: 'CreateConfigurationProfile',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The application ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(128)
                .openapi({ description: 'A name for the configuration profile.' }),
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the configuration profile.' }),
              LocationUri: z
                .string()
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    '<p>A URI to locate the configuration. You can specify the following:</p> <ul> <li> <p>For the AppConfig hosted configuration store and for feature flags, specify <code>hosted</code>.</p> </li> <li> <p>For an Amazon Web Services Systems Manager Parameter Store parameter, specify either the parameter name in the format <code>ssm-parameter://&lt;parameter name&gt;</code> or the ARN.</p> </li> <li> <p>For an Secrets Manager secret, specify the URI in the following format: <code>secrets-manager</code>://&lt;secret name&gt;.</p> </li> <li> <p>For an Amazon S3 object, specify the URI in the following format: <code>s3://&lt;bucket&gt;/&lt;objectKey&gt; </code>. Here is an example: <code>s3://my-bucket/my-app/us-east-1/my-config.json</code> </p> </li> <li> <p>For an SSM document, specify either the document name in the format <code>ssm-document://&lt;document name&gt;</code> or the Amazon Resource Name (ARN).</p> </li> </ul>',
                }),
              RetrievalRoleArn: z
                .string()
                .regex(
                  /^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):(iam)::\d{12}:role[\/].*)$/,
                )
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.</p> <important> <p>A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that store your configuration. </p> </important>',
                }),
              Validators: z
                .array(ValidatorSchema)
                .min(0)
                .max(2)
                .exactOptional()
                .openapi({ description: 'A list of methods for validating the configuration.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
                }),
              Type: z
                .string()
                .regex(/^[a-zA-Z\.]+/)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The type of configurations contained in the profile. AppConfig supports <code>feature flags</code> and <code>freeform</code> configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for <code>Type</code>:</p> <p> <code>AWS.AppConfig.FeatureFlags</code> </p> <p> <code>AWS.Freeform</code> </p>',
                }),
            })
            .openapi({ required: ['Name', 'LocationUri'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigurationProfileSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const getDeploymentstrategiesRoute = createRoute({
  method: 'get',
  path: '/deploymentstrategies',
  description: 'Lists deployment strategies.',
  operationId: 'ListDeploymentStrategies',
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
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      next_token: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A token to start the list. Use this token to get the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
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
      content: { 'application/json': { schema: DeploymentStrategiesSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postDeploymentstrategiesRoute = createRoute({
  method: 'post',
  path: '/deploymentstrategies',
  description:
    'Creates a deployment strategy that defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.',
  operationId: 'CreateDeploymentStrategy',
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
              Name: z
                .string()
                .min(1)
                .max(64)
                .openapi({ description: 'A name for the deployment strategy.' }),
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the deployment strategy.' }),
              DeploymentDurationInMinutes: z
                .int()
                .min(0)
                .max(1440)
                .openapi({ description: 'Total amount of time for a deployment to last.' }),
              FinalBakeTimeInMinutes: z
                .int()
                .min(0)
                .max(1440)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AppConfig rolls back the deployment. You must configure permissions for AppConfig to roll back based on CloudWatch alarms. For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html">Configuring permissions for rollback based on Amazon CloudWatch alarms</a> in the <i>AppConfig User Guide</i>.',
                }),
              GrowthFactor: z
                .float32()
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'The percentage of targets to receive a deployed configuration during each interval.',
                }),
              GrowthType: z
                .enum(['LINEAR', 'EXPONENTIAL'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for <code>Step percentage</code>. For example, a linear deployment that uses a <code>Step percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p>',
                }),
              ReplicateTo: z
                .enum(['NONE', 'SSM_DOCUMENT'])
                .exactOptional()
                .openapi({
                  description: 'Save the deployment strategy to a Systems Manager (SSM) document.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
                }),
            })
            .openapi({ required: ['Name', 'DeploymentDurationInMinutes', 'GrowthFactor'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: DeploymentStrategySchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/applications/{ApplicationId}/environments',
  description: 'Lists the environments for an application.',
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
    params: z.object({
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The application ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      next_token: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A token to start the list. Use this token to get the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
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
      content: { 'application/json': { schema: EnvironmentsSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postApplicationsApplicationIdEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/applications/{ApplicationId}/environments',
  description:
    'Creates an environment. For each application, you define one or more environments. An environment is a deployment group of AppConfig targets, such as applications in a <code>Beta</code> or <code>Production</code> environment. You can also define environments for application subcomponents such as the <code>Web</code>, <code>Mobile</code> and <code>Back-end</code> components for your application. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The application ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(64)
                .openapi({ description: 'A name for the environment.' }),
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the environment.' }),
              Monitors: z
                .array(MonitorSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description: 'Amazon CloudWatch alarms to monitor during the deployment process.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: EnvironmentSchema } } },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getExtensionsRoute = createRoute({
  method: 'get',
  path: '/extensions',
  description:
    'Lists all custom and Amazon Web Services authored AppConfig extensions in the account. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.',
  operationId: 'ListExtensions',
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
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      next_token: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A token to start the list. Use this token to get the next set of results. ',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      name: z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: 'The extension name.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
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
    200: { description: 'Success', content: { 'application/json': { schema: ExtensionsSchema } } },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postExtensionsRoute = createRoute({
  method: 'post',
  path: '/extensions',
  description:
    '<p>Creates an AppConfig extension. An extension augments your ability to inject logic or behavior at different points during the AppConfig workflow of creating or deploying a configuration.</p> <p>You can create your own extensions or use the Amazon Web Services authored extensions provided by AppConfig. For most use cases, to create your own extension, you must create an Lambda function to perform any computation and processing defined in the extension. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.</p>',
  operationId: 'CreateExtension',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'Latest-Version-Number': z
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
            name: 'Latest-Version-Number',
            in: 'header',
            required: false,
            description:
              'You can omit this field when you create an extension. When you create a new version, specify the most recent current version number. For example, you create version 3, enter 2 for this field.',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A name for the extension. Each extension name in your account must be unique. Extension versions use the same name.',
                }),
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'Information about the extension.' }),
              Actions: z
                .record(z.string(), ActionListSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 5)
                .openapi({ description: 'The actions defined in the extension.' }),
              Parameters: z
                .record(z.string(), ParameterSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 5)
                .exactOptional()
                .openapi({
                  description:
                    'The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the <code>CreateExtensionAssociation</code> API action. For Lambda extension actions, these parameters are included in the Lambda request object.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Adds one or more tags for the specified extension. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. ',
                }),
            })
            .openapi({ required: ['Name', 'Actions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: ExtensionSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getExtensionassociationsRoute = createRoute({
  method: 'get',
  path: '/extensionassociations',
  description:
    'Lists all AppConfig extension associations in the account. For more information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.',
  operationId: 'ListExtensionAssociations',
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
      resource_identifier: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_\/:.]+/,
        )
        .min(20)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'resource_identifier',
            in: 'query',
            required: false,
            description: 'The ARN of an application, configuration profile, or environment.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1})?:(\\d{12})?:[a-zA-Z0-9-_/:.]+',
              minLength: 20,
              maxLength: 2048,
            },
          },
        }),
      extension_identifier: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'extension_identifier',
            in: 'query',
            required: false,
            description: 'The name, the ID, or the Amazon Resource Name (ARN) of the extension.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      extension_version_number: z
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
            name: 'extension_version_number',
            in: 'query',
            required: false,
            description: 'The version number for the extension defined in the association.',
            schema: { type: 'integer' },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      next_token: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A token to start the list. Use this token to get the next set of results or pass null to get the first set of results. ',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
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
      content: { 'application/json': { schema: ExtensionAssociationsSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postExtensionassociationsRoute = createRoute({
  method: 'post',
  path: '/extensionassociations',
  description:
    'When you create an extension or configure an Amazon Web Services authored extension, you associate the extension with an AppConfig application, environment, or configuration profile. For example, you can choose to run the <code>AppConfig deployment events to Amazon SNS</code> Amazon Web Services authored extension and receive notifications on an Amazon SNS topic anytime a configuration deployment is started for a specific application. Defining which extension to associate with an AppConfig resource is called an <i>extension association</i>. An extension association is a specified relationship between an extension and an AppConfig resource, such as an application or a configuration profile. For more information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.',
  operationId: 'CreateExtensionAssociation',
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
              ExtensionIdentifier: z
                .string()
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    'The name, the ID, or the Amazon Resource Name (ARN) of the extension.',
                }),
              ExtensionVersionNumber: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The version number of the extension. If not specified, AppConfig uses the maximum version of the extension.',
                }),
              ResourceIdentifier: z
                .string()
                .min(1)
                .max(2048)
                .openapi({
                  description: 'The ARN of an application, configuration profile, or environment.',
                }),
              Parameters: z
                .record(z.string(), StringWithLengthBetween1And2048Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 5)
                .exactOptional()
                .openapi({
                  description:
                    'The parameter names and values defined in the extensions. Extension parameters marked <code>Required</code> must be entered for this field.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Adds one or more tags for the specified extension association. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. ',
                }),
            })
            .openapi({ required: ['ExtensionIdentifier', 'ResourceIdentifier'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ExtensionAssociationSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeRoute =
  createRoute({
    method: 'post',
    path: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions#Content-Type',
    description: 'Creates a new configuration in the AppConfig hosted configuration store.',
    operationId: 'CreateHostedConfigurationVersion',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        Description: z
          .string()
          .min(0)
          .max(1024)
          .exactOptional()
          .openapi({
            param: {
              name: 'Description',
              in: 'header',
              required: false,
              description: 'A description of the configuration.',
              schema: { type: 'string', minLength: 0, maxLength: 1024 },
            },
          }),
        'Content-Type': z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'Content-Type',
              in: 'header',
              required: true,
              description:
                'A standard MIME type describing the format of the configuration content. For more information, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        'Latest-Version-Number': z
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
              name: 'Latest-Version-Number',
              in: 'header',
              required: false,
              description:
                'An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.',
              schema: { type: 'integer' },
            },
          }),
        VersionLabel: z
          .string()
          .regex(/.*[^0-9].*/)
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            param: {
              name: 'VersionLabel',
              in: 'header',
              required: false,
              description:
                'An optional, user-defined label for the AppConfig hosted configuration version. This value must contain at least one non-numeric character. For example, "v2.2.0".',
              schema: { type: 'string', pattern: '.*[^0-9].*', minLength: 1, maxLength: 64 },
            },
          }),
      }),
      params: z.object({
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description: 'The application ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        ConfigurationProfileId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ConfigurationProfileId',
              in: 'path',
              required: true,
              description: 'The configuration profile ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Content: z
                  .string()
                  .openapi({
                    description: 'The content of the configuration or the configuration data.',
                  }),
              })
              .openapi({ required: ['Content'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      201: {
        description: 'Success',
        content: { 'application/json': { schema: HostedConfigurationVersionSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'PayloadTooLargeException',
        content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getApplicationsApplicationIdRoute = createRoute({
  method: 'get',
  path: '/applications/{ApplicationId}',
  description: 'Retrieves information about an application.',
  operationId: 'GetApplication',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The ID of the application you want to get.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ApplicationSchema } } },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteApplicationsApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/applications/{ApplicationId}',
  description:
    'Deletes an application. Deleting an application does not delete a configuration from a host.',
  operationId: 'DeleteApplication',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The ID of the application to delete.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const patchApplicationsApplicationIdRoute = createRoute({
  method: 'patch',
  path: '/applications/{ApplicationId}',
  description: 'Updates an application.',
  operationId: 'UpdateApplication',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The application ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the application.' }),
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the application.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ApplicationSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute =
  createRoute({
    method: 'get',
    path: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}',
    description: 'Retrieves information about a configuration profile.',
    operationId: 'GetConfigurationProfile',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description:
                'The ID of the application that includes the configuration profile you want to get.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        ConfigurationProfileId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ConfigurationProfileId',
              in: 'path',
              required: true,
              description: 'The ID of the configuration profile that you want to get.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ConfigurationProfileSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const deleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute =
  createRoute({
    method: 'delete',
    path: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}',
    description:
      'Deletes a configuration profile. Deleting a configuration profile does not delete a configuration from a host.',
    operationId: 'DeleteConfigurationProfile',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description:
                'The application ID that includes the configuration profile you want to delete.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        ConfigurationProfileId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ConfigurationProfileId',
              in: 'path',
              required: true,
              description: 'The ID of the configuration profile you want to delete.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      483: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const patchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute =
  createRoute({
    method: 'patch',
    path: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}',
    description: 'Updates a configuration profile.',
    operationId: 'UpdateConfigurationProfile',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description: 'The application ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        ConfigurationProfileId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ConfigurationProfileId',
              in: 'path',
              required: true,
              description: 'The ID of the configuration profile.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Name: z
                  .string()
                  .min(1)
                  .max(64)
                  .exactOptional()
                  .openapi({ description: 'The name of the configuration profile.' }),
                Description: z
                  .string()
                  .min(0)
                  .max(1024)
                  .exactOptional()
                  .openapi({ description: 'A description of the configuration profile.' }),
                RetrievalRoleArn: z
                  .string()
                  .regex(
                    /^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):(iam)::\d{12}:role[\/].*)$/,
                  )
                  .min(20)
                  .max(2048)
                  .exactOptional()
                  .openapi({
                    description:
                      'The ARN of an IAM role with permission to access the configuration at the specified <code>LocationUri</code>.',
                  }),
                Validators: z
                  .array(ValidatorSchema)
                  .min(0)
                  .max(2)
                  .exactOptional()
                  .openapi({ description: 'A list of methods for validating the configuration.' }),
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
        content: { 'application/json': { schema: ConfigurationProfileSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const deleteDeployementstrategiesDeploymentStrategyIdRoute = createRoute({
  method: 'delete',
  path: '/deployementstrategies/{DeploymentStrategyId}',
  description:
    'Deletes a deployment strategy. Deleting a deployment strategy does not delete a configuration from a host.',
  operationId: 'DeleteDeploymentStrategy',
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
      DeploymentStrategyId: z
        .string()
        .regex(/(^[a-z0-9]{4,7}$|^AppConfig\.[A-Za-z0-9]{9,40}$)/)
        .openapi({
          param: {
            name: 'DeploymentStrategyId',
            in: 'path',
            required: true,
            description: 'The ID of the deployment strategy you want to delete.',
            schema: {
              type: 'string',
              pattern: '(^[a-z0-9]{4,7}$|^AppConfig\\.[A-Za-z0-9]{9,40}$)',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/applications/{ApplicationId}/environments/{EnvironmentId}',
  description:
    'Retrieves information about an environment. An environment is a deployment group of AppConfig applications, such as applications in a <code>Production</code> environment or in an <code>EU_Region</code> environment. Each configuration deployment targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If an alarm is triggered during a deployment, AppConfig roles back the configuration.',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The ID of the application that includes the environment you want to get.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
      EnvironmentId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'path',
            required: true,
            description: 'The ID of the environment that you want to get.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: EnvironmentSchema } } },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteApplicationsApplicationIdEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'delete',
  path: '/applications/{ApplicationId}/environments/{EnvironmentId}',
  description:
    'Deletes an environment. Deleting an environment does not delete a configuration from a host.',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description:
              'The application ID that includes the environment that you want to delete.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
      EnvironmentId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'path',
            required: true,
            description: 'The ID of the environment that you want to delete.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const patchApplicationsApplicationIdEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'patch',
  path: '/applications/{ApplicationId}/environments/{EnvironmentId}',
  description: 'Updates an environment.',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The application ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
      EnvironmentId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'path',
            required: true,
            description: 'The environment ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the environment.' }),
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the environment.' }),
              Monitors: z
                .array(MonitorSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description: 'Amazon CloudWatch alarms to monitor during the deployment process.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: EnvironmentSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const getExtensionsExtensionIdentifierRoute = createRoute({
  method: 'get',
  path: '/extensions/{ExtensionIdentifier}',
  description: 'Returns information about an AppConfig extension.',
  operationId: 'GetExtension',
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
      ExtensionIdentifier: z
        .string()
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'ExtensionIdentifier',
            in: 'path',
            required: true,
            description: 'The name, the ID, or the Amazon Resource Name (ARN) of the extension.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
    query: z.object({
      version_number: z
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
            name: 'version_number',
            in: 'query',
            required: false,
            description:
              'The extension version number. If no version number was defined, AppConfig uses the highest version.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExtensionSchema } } },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteExtensionsExtensionIdentifierRoute = createRoute({
  method: 'delete',
  path: '/extensions/{ExtensionIdentifier}',
  description:
    'Deletes an AppConfig extension. You must delete all associations to an extension before you delete the extension.',
  operationId: 'DeleteExtension',
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
      ExtensionIdentifier: z
        .string()
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'ExtensionIdentifier',
            in: 'path',
            required: true,
            description:
              'The name, ID, or Amazon Resource Name (ARN) of the extension you want to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
    query: z.object({
      version: z
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
            name: 'version',
            in: 'query',
            required: false,
            description:
              'A specific version of an extension to delete. If omitted, the highest version is deleted.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const patchExtensionsExtensionIdentifierRoute = createRoute({
  method: 'patch',
  path: '/extensions/{ExtensionIdentifier}',
  description:
    'Updates an AppConfig extension. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.',
  operationId: 'UpdateExtension',
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
      ExtensionIdentifier: z
        .string()
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'ExtensionIdentifier',
            in: 'path',
            required: true,
            description: 'The name, the ID, or the Amazon Resource Name (ARN) of the extension.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'Information about the extension.' }),
              Actions: z
                .record(z.string(), ActionListSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 5)
                .exactOptional()
                .openapi({ description: 'The actions defined in the extension.' }),
              Parameters: z
                .record(z.string(), ParameterSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 5)
                .exactOptional()
                .openapi({
                  description: 'One or more parameters for the actions called by the extension.',
                }),
              VersionNumber: z
                .int()
                .exactOptional()
                .openapi({ description: 'The extension version number.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExtensionSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getExtensionassociationsExtensionAssociationIdRoute = createRoute({
  method: 'get',
  path: '/extensionassociations/{ExtensionAssociationId}',
  description:
    'Returns information about an AppConfig extension association. For more information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.',
  operationId: 'GetExtensionAssociation',
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
      ExtensionAssociationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ExtensionAssociationId',
            in: 'path',
            required: true,
            description: 'The extension association ID to get.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExtensionAssociationSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const deleteExtensionassociationsExtensionAssociationIdRoute = createRoute({
  method: 'delete',
  path: '/extensionassociations/{ExtensionAssociationId}',
  description:
    "Deletes an extension association. This action doesn't delete extensions defined in the association.",
  operationId: 'DeleteExtensionAssociation',
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
      ExtensionAssociationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ExtensionAssociationId',
            in: 'path',
            required: true,
            description: 'The ID of the extension association to delete.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const patchExtensionassociationsExtensionAssociationIdRoute = createRoute({
  method: 'patch',
  path: '/extensionassociations/{ExtensionAssociationId}',
  description:
    'Updates an association. For more information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with AppConfig extensions</a> in the <i>AppConfig User Guide</i>.',
  operationId: 'UpdateExtensionAssociation',
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
      ExtensionAssociationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ExtensionAssociationId',
            in: 'path',
            required: true,
            description: 'The system-generated ID for the association.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Parameters: z
                .record(z.string(), StringWithLengthBetween1And2048Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 5)
                .exactOptional()
                .openapi({
                  description: 'The parameter names and values defined in the extension.',
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
      content: { 'application/json': { schema: ExtensionAssociationSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberRoute =
  createRoute({
    method: 'get',
    path: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}',
    description: 'Retrieves information about a specific configuration version.',
    operationId: 'GetHostedConfigurationVersion',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description: 'The application ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        ConfigurationProfileId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ConfigurationProfileId',
              in: 'path',
              required: true,
              description: 'The configuration profile ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        VersionNumber: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              name: 'VersionNumber',
              in: 'path',
              required: true,
              description: 'The version.',
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: HostedConfigurationVersionSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const deleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberRoute =
  createRoute({
    method: 'delete',
    path: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}',
    description:
      'Deletes a version of a configuration from the AppConfig hosted configuration store.',
    operationId: 'DeleteHostedConfigurationVersion',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description: 'The application ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        ConfigurationProfileId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ConfigurationProfileId',
              in: 'path',
              required: true,
              description: 'The configuration profile ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        VersionNumber: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              name: 'VersionNumber',
              in: 'path',
              required: true,
              description: 'The versions number to delete.',
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdRoute =
  createRoute({
    method: 'get',
    path: '/applications/{Application}/environments/{Environment}/configurations/{Configuration}#client_id',
    description:
      '<p>(Deprecated) Retrieves the latest deployed configuration.</p> <important> <p>Note the following important information.</p> <ul> <li> <p>This API action is deprecated. Calls to receive configuration data should use the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> APIs instead. </p> </li> <li> <p> <code>GetConfiguration</code> is a priced call. For more information, see <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p> </li> </ul> </important>',
    operationId: 'GetConfiguration',
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
        Application: z
          .string()
          .min(1)
          .max(64)
          .openapi({
            param: {
              name: 'Application',
              in: 'path',
              required: true,
              description:
                'The application to get. Specify either the application name or the application ID.',
              schema: { type: 'string', minLength: 1, maxLength: 64 },
            },
          }),
        Environment: z
          .string()
          .min(1)
          .max(64)
          .openapi({
            param: {
              name: 'Environment',
              in: 'path',
              required: true,
              description:
                'The environment to get. Specify either the environment name or the environment ID.',
              schema: { type: 'string', minLength: 1, maxLength: 64 },
            },
          }),
        Configuration: z
          .string()
          .min(1)
          .max(64)
          .openapi({
            param: {
              name: 'Configuration',
              in: 'path',
              required: true,
              description:
                'The configuration to get. Specify either the configuration name or the configuration ID.',
              schema: { type: 'string', minLength: 1, maxLength: 64 },
            },
          }),
      }),
      query: z.object({
        client_id: z
          .string()
          .min(1)
          .max(64)
          .openapi({
            param: {
              name: 'client_id',
              in: 'query',
              required: true,
              description:
                'The clientId parameter in the following command is a unique, user-specified ID to identify the client for the configuration. This ID enables AppConfig to deploy the configuration in intervals, as defined in the deployment strategy. ',
              schema: { type: 'string', minLength: 1, maxLength: 64 },
            },
          }),
        client_configuration_version: z
          .string()
          .min(1)
          .max(1024)
          .exactOptional()
          .openapi({
            param: {
              name: 'client_configuration_version',
              in: 'query',
              required: false,
              description:
                '<p>The configuration version returned in the most recent <code>GetConfiguration</code> response.</p> <important> <p>AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter to identify the configuration version on your clients. If you don’t send <code>ClientConfigurationVersion</code> with each call to <code>GetConfiguration</code>, your clients receive the current configuration. You are charged each time your clients receive a configuration.</p> <p>To avoid excess charges, we recommend you use the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/GetLatestConfiguration.html">GetLatestConfiguration</a> APIs, which track the client configuration version on your behalf. If you choose to continue using <code>GetConfiguration</code>, we recommend that you include the <code>ClientConfigurationVersion</code> value with every call to <code>GetConfiguration</code>. The value to use for <code>ClientConfigurationVersion</code> comes from the <code>ConfigurationVersion</code> attribute returned by <code>GetConfiguration</code> when there is new or updated data, and should be saved for subsequent calls to <code>GetConfiguration</code>.</p> </important> <p>For more information about working with configurations, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration.html">Retrieving the Configuration</a> in the <i>AppConfig User Guide</i>.</p>',
              schema: { type: 'string', minLength: 1, maxLength: 1024 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ConfigurationSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
    deprecated: true,
  })

export const getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberRoute =
  createRoute({
    method: 'get',
    path: '/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}',
    description: 'Retrieves information about a configuration deployment.',
    operationId: 'GetDeployment',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description:
                'The ID of the application that includes the deployment you want to get. ',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        EnvironmentId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'EnvironmentId',
              in: 'path',
              required: true,
              description:
                'The ID of the environment that includes the deployment you want to get. ',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        DeploymentNumber: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              name: 'DeploymentNumber',
              in: 'path',
              required: true,
              description: 'The sequence number of the deployment.',
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeploymentSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const deleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberRoute =
  createRoute({
    method: 'delete',
    path: '/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}',
    description:
      'Stops a deployment. This API action works only on deployments that have a status of <code>DEPLOYING</code>. This action moves the deployment to a status of <code>ROLLED_BACK</code>.',
    operationId: 'StopDeployment',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description: 'The application ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        EnvironmentId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'EnvironmentId',
              in: 'path',
              required: true,
              description: 'The environment ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        DeploymentNumber: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              name: 'DeploymentNumber',
              in: 'path',
              required: true,
              description: 'The sequence number of the deployment.',
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      202: {
        description: 'Success',
        content: { 'application/json': { schema: DeploymentSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getDeploymentstrategiesDeploymentStrategyIdRoute = createRoute({
  method: 'get',
  path: '/deploymentstrategies/{DeploymentStrategyId}',
  description:
    'Retrieves information about a deployment strategy. A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.',
  operationId: 'GetDeploymentStrategy',
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
      DeploymentStrategyId: z
        .string()
        .regex(/(^[a-z0-9]{4,7}$|^AppConfig\.[A-Za-z0-9]{9,40}$)/)
        .openapi({
          param: {
            name: 'DeploymentStrategyId',
            in: 'path',
            required: true,
            description: 'The ID of the deployment strategy to get.',
            schema: {
              type: 'string',
              pattern: '(^[a-z0-9]{4,7}$|^AppConfig\\.[A-Za-z0-9]{9,40}$)',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeploymentStrategySchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const patchDeploymentstrategiesDeploymentStrategyIdRoute = createRoute({
  method: 'patch',
  path: '/deploymentstrategies/{DeploymentStrategyId}',
  description: 'Updates a deployment strategy.',
  operationId: 'UpdateDeploymentStrategy',
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
      DeploymentStrategyId: z
        .string()
        .regex(/(^[a-z0-9]{4,7}$|^AppConfig\.[A-Za-z0-9]{9,40}$)/)
        .openapi({
          param: {
            name: 'DeploymentStrategyId',
            in: 'path',
            required: true,
            description: 'The deployment strategy ID.',
            schema: {
              type: 'string',
              pattern: '(^[a-z0-9]{4,7}$|^AppConfig\\.[A-Za-z0-9]{9,40}$)',
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the deployment strategy.' }),
              DeploymentDurationInMinutes: z
                .int()
                .min(0)
                .max(1440)
                .exactOptional()
                .openapi({ description: 'Total amount of time for a deployment to last.' }),
              FinalBakeTimeInMinutes: z
                .int()
                .min(0)
                .max(1440)
                .exactOptional()
                .openapi({
                  description:
                    'The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.',
                }),
              GrowthFactor: z
                .float32()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The percentage of targets to receive a deployed configuration during each interval.',
                }),
              GrowthType: z
                .enum(['LINEAR', 'EXPONENTIAL'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p>',
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
      content: { 'application/json': { schema: DeploymentStrategySchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
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

export const getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/applications/{ApplicationId}/environments/{EnvironmentId}/deployments',
  description: 'Lists the deployments for an environment in descending deployment number order.',
  operationId: 'ListDeployments',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The application ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
      EnvironmentId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'path',
            required: true,
            description: 'The environment ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of items that may be returned for this call. If there are items that have not yet been returned, the response will include a non-null <code>NextToken</code> that you can provide in a subsequent call to get the next set of results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      next_token: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'The token returned by a prior call to this operation indicating the next set of results to be returned. If not specified, the operation will return the first set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
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
    200: { description: 'Success', content: { 'application/json': { schema: DeploymentsSchema } } },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsRoute = createRoute({
  method: 'post',
  path: '/applications/{ApplicationId}/environments/{EnvironmentId}/deployments',
  description: 'Starts a deployment.',
  operationId: 'StartDeployment',
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
      ApplicationId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'ApplicationId',
            in: 'path',
            required: true,
            description: 'The application ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
      EnvironmentId: z
        .string()
        .regex(/[a-z0-9]{4,7}/)
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'path',
            required: true,
            description: 'The environment ID.',
            schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeploymentStrategyId: z
                .string()
                .regex(/(^[a-z0-9]{4,7}$|^AppConfig\.[A-Za-z0-9]{9,40}$)/)
                .openapi({ description: 'The deployment strategy ID.' }),
              ConfigurationProfileId: z
                .string()
                .regex(/[a-z0-9]{4,7}/)
                .openapi({ description: 'The configuration profile ID.' }),
              ConfigurationVersion: z
                .string()
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The configuration version to deploy. If deploying an AppConfig hosted configuration version, you can specify either the version number or version label.',
                }),
              Description: z
                .string()
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the deployment.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.',
                }),
              KmsKeyIdentifier: z
                .string()
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key. ',
                }),
            })
            .openapi({
              required: ['DeploymentStrategyId', 'ConfigurationProfileId', 'ConfigurationVersion'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: DeploymentSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsRoute =
  createRoute({
    method: 'get',
    path: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions',
    description:
      'Lists configurations stored in the AppConfig hosted configuration store by version.',
    operationId: 'ListHostedConfigurationVersions',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description: 'The application ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        ConfigurationProfileId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ConfigurationProfileId',
              in: 'path',
              required: true,
              description: 'The configuration profile ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
      }),
      query: z.object({
        max_results: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(50),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'max_results',
              in: 'query',
              required: false,
              description:
                'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
              schema: { type: 'integer', minimum: 1, maximum: 50 },
            },
          }),
        next_token: z
          .string()
          .min(1)
          .max(2048)
          .exactOptional()
          .openapi({
            param: {
              name: 'next_token',
              in: 'query',
              required: false,
              description:
                'A token to start the list. Use this token to get the next set of results. ',
              schema: { type: 'string', minLength: 1, maxLength: 2048 },
            },
          }),
        version_label: z
          .string()
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            param: {
              name: 'version_label',
              in: 'query',
              required: false,
              description:
                'An optional filter that can be used to specify the version label of an AppConfig hosted configuration version. This parameter supports filtering by prefix using a wildcard, for example "v2*". If you don\'t specify an asterisk at the end of the value, only an exact match is returned.',
              schema: { type: 'string', minLength: 1, maxLength: 64 },
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
        content: { 'application/json': { schema: HostedConfigurationVersionsSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
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
  path: '/tags/{ResourceArn}',
  description: 'Retrieves the list of key-value tags assigned to the resource.',
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
        .regex(
          /arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_\/:.]+/,
        )
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The resource ARN.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1})?:(\\d{12})?:[a-zA-Z0-9-_/:.]+',
              minLength: 20,
              maxLength: 2048,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceTagsSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
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
    'Assigns metadata to an AppConfig resource. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource.',
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
        .regex(
          /arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_\/:.]+/,
        )
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource for which to retrieve tags.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1})?:(\\d{12})?:[a-zA-Z0-9-_/:.]+',
              minLength: 20,
              maxLength: 2048,
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
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description: 'Deletes a tag key and value from an AppConfig resource.',
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
        .regex(
          /arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_\/:.]+/,
        )
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource for which to remove tags.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:[a-z]+:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1})?:(\\d{12})?:[a-zA-Z0-9-_/:.]+',
              minLength: 20,
              maxLength: 2048,
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
            description: 'The tag keys to delete.',
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
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionRoute =
  createRoute({
    method: 'post',
    path: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators#configuration_version',
    description: 'Uses the validators in a configuration profile to validate a configuration.',
    operationId: 'ValidateConfiguration',
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
        ApplicationId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ApplicationId',
              in: 'path',
              required: true,
              description: 'The application ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
        ConfigurationProfileId: z
          .string()
          .regex(/[a-z0-9]{4,7}/)
          .openapi({
            param: {
              name: 'ConfigurationProfileId',
              in: 'path',
              required: true,
              description: 'The configuration profile ID.',
              schema: { type: 'string', pattern: '[a-z0-9]{4,7}' },
            },
          }),
      }),
      query: z.object({
        configuration_version: z
          .string()
          .min(1)
          .max(1024)
          .openapi({
            param: {
              name: 'configuration_version',
              in: 'query',
              required: true,
              description: 'The version of the configuration to validate.',
              schema: { type: 'string', minLength: 1, maxLength: 1024 },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
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
