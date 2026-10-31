import { createRoute, z } from '@hono/zod-openapi'

const RevisionLocationTypeSchema = z
  .enum(['S3', 'GitHub', 'String', 'AppSpecContent'])
  .openapi('RevisionLocationType')

const S3BucketSchema = z.string().openapi('S3Bucket')

const S3KeySchema = z.string().openapi('S3Key')

const BundleTypeSchema = z.enum(['tar', 'tgz', 'zip', 'YAML', 'JSON']).openapi('BundleType')

const VersionIdSchema = z.string().openapi('VersionId')

const ETagSchema = z.string().openapi('ETag')

const S3LocationSchema = z
  .object({
    bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon S3 bucket where the application revision is stored.',
        }),
    ).exactOptional(),
    key: S3KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 object that represents the bundled artifacts for the application revision.',
        }),
    ).exactOptional(),
    bundleType: BundleTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The file type of the application revision. Must be one of the following:</p> <ul> <li> <p> <code>tar</code>: A tar archive file.</p> </li> <li> <p> <code>tgz</code>: A compressed tar archive file.</p> </li> <li> <p> <code>zip</code>: A zip archive file.</p> </li> </ul>',
        }),
    ).exactOptional(),
    version: VersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.</p> <p>If the version is not specified, the system uses the most recent version by default.</p>',
        }),
    ).exactOptional(),
    eTag: ETagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.</p> <p>If the ETag is not specified as an input parameter, ETag validation of the object is skipped.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the location of application artifacts stored in Amazon S3.',
    required: [],
  })
  .openapi('S3Location')

const RepositorySchema = z.string().openapi('Repository')

const CommitIdSchema = z.string().openapi('CommitId')

const GitHubLocationSchema = z
  .object({
    repository: RepositorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The GitHub account and repository pair that stores a reference to the commit that represents the bundled artifacts for the application revision. </p> <p>Specified as account/repository.</p>',
        }),
    ).exactOptional(),
    commitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the location of application artifacts stored in GitHub.',
    required: [],
  })
  .openapi('GitHubLocation')

const RawStringContentSchema = z.string().openapi('RawStringContent')

const RawStringSha256Schema = z.string().openapi('RawStringSha256')

const RawStringSchema = z
  .object({
    content: RawStringContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The YAML-formatted or JSON-formatted revision string. It includes information about which Lambda function to update and optional Lambda functions that validate deployment lifecycle events.',
        }),
    ).exactOptional(),
    sha256: RawStringSha256Schema.and(
      z.any().openapi({ description: 'The SHA256 hash value of the revision content.' }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description:
      'A revision for an Lambda deployment that is a YAML-formatted or JSON-formatted string. For Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead.',
    required: [],
  })
  .openapi('RawString')

const AppSpecContentSchema = z
  .object({
    content: RawStringContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The YAML-formatted or JSON-formatted revision string. </p> <p> For an Lambda deployment, the content includes a Lambda function name, the alias for its original version, and the alias for its replacement version. The deployment shifts traffic from the original version of the Lambda function to the replacement version. </p> <p> For an Amazon ECS deployment, the content includes the task name, information about the load balancer that serves traffic to the container, and more. </p> <p> For both types of deployments, the content can specify Lambda functions that run at specified hooks, such as <code>BeforeInstall</code>, during a deployment. </p>',
        }),
    ).exactOptional(),
    sha256: RawStringSha256Schema.and(
      z.any().openapi({ description: ' The SHA256 hash value of the revision content. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A revision for an Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type. ',
    required: [],
  })
  .openapi('AppSpecContent')

const RevisionLocationSchema = z
  .object({
    revisionType: RevisionLocationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of application revision:</p> <ul> <li> <p>S3: An application revision stored in Amazon S3.</p> </li> <li> <p>GitHub: An application revision stored in GitHub (EC2/On-premises deployments only).</p> </li> <li> <p>String: A YAML-formatted or JSON-formatted string (Lambda deployments only).</p> </li> <li> <p>AppSpecContent: An <code>AppSpecContent</code> object that contains the contents of an AppSpec file for an Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML stored as a RawString.</p> </li> </ul>',
        }),
    ).exactOptional(),
    s3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the location of a revision stored in Amazon S3. ',
        }),
    ).exactOptional(),
    gitHubLocation: GitHubLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the location of application artifacts stored in GitHub.',
        }),
    ).exactOptional(),
    string: RawStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the location of an Lambda deployment revision stored as a RawString.',
        }),
    ).exactOptional(),
    appSpecContent: AppSpecContentSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The content of an AppSpec file for an Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML and stored as a RawString. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the location of an application revision.',
    required: [],
  })
  .openapi('RevisionLocation')

const DescriptionSchema = z.string().openapi('Description')

const DeploymentGroupNameSchema = z.string().min(1).max(100).openapi('DeploymentGroupName')

const DeploymentGroupsListSchema = z
  .array(DeploymentGroupNameSchema)
  .openapi('DeploymentGroupsList')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const GenericRevisionInfoSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A comment about the revision.' }),
    ).exactOptional(),
    deploymentGroups: DeploymentGroupsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The deployment groups for which this is the current target revision.',
        }),
    ).exactOptional(),
    firstUsedTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the revision was first used by CodeDeploy.' }),
    ).exactOptional(),
    lastUsedTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the revision was last used by CodeDeploy.' }),
    ).exactOptional(),
    registerTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the revision was registered with CodeDeploy.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an application revision.', required: [] })
  .openapi('GenericRevisionInfo')

type RevisionInfoType = {
  revisionLocation?: z.infer<typeof RevisionLocationSchema> & { [key: string]: unknown }
  genericRevisionInfo?: z.infer<typeof GenericRevisionInfoSchema> & { [key: string]: unknown }
}

const KeySchema = z.string().openapi('Key')

const ValueSchema = z.string().openapi('Value')

const TagSchema = z
  .object({
    Key: KeySchema.and(z.any().openapi({ description: "The tag's key." })).exactOptional(),
    Value: ValueSchema.and(z.any().openapi({ description: "The tag's value." })).exactOptional(),
  })
  .openapi({ description: 'Information about a tag.', required: [] })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const InstanceNameSchema = z.string().openapi('InstanceName')

const InstanceNameListSchema = z.array(InstanceNameSchema).openapi('InstanceNameList')

const AddTagsToOnPremisesInstancesInputSchema = z
  .object({
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tag key-value pairs to add to the on-premises instances.</p> <p>Keys and values are both required. Keys cannot be null or empty strings. Value-only tags are not allowed.</p>',
        }),
    ),
    instanceNames: InstanceNameListSchema.and(
      z
        .any()
        .openapi({ description: 'The names of the on-premises instances to which to add tags.' }),
    ),
  })
  .openapi({
    required: ['tags', 'instanceNames'],
    title: 'AddTagsToOnPremisesInstancesInput',
    description: 'Represents the input of, and adds tags to, an on-premises instance operation.',
  })
  .openapi('AddTagsToOnPremisesInstancesInput')

const InstanceNameRequiredExceptionSchema = z.any().openapi('InstanceNameRequiredException')

const InvalidInstanceNameExceptionSchema = z.any().openapi('InvalidInstanceNameException')

const TagRequiredExceptionSchema = z.any().openapi('TagRequiredException')

const InvalidTagExceptionSchema = z.any().openapi('InvalidTagException')

const TagLimitExceededExceptionSchema = z.any().openapi('TagLimitExceededException')

const InstanceLimitExceededExceptionSchema = z.any().openapi('InstanceLimitExceededException')

const InstanceNotRegisteredExceptionSchema = z.any().openapi('InstanceNotRegisteredException')

const ApplicationNameSchema = z.string().min(1).max(100).openapi('ApplicationName')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const RevisionInfoSchema: z.ZodType<RevisionInfoType> = z
  .lazy(() =>
    z
      .object({
        revisionLocation: RevisionLocationSchema.and(
          z
            .any()
            .openapi({
              description: 'Information about the location and type of an application revision.',
            }),
        ).exactOptional(),
        genericRevisionInfo: GenericRevisionInfoSchema.and(
          z
            .any()
            .openapi({
              description:
                'Information about an application revision, including usage details and associated deployment groups.',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'Information about an application revision.', required: [] }),
  )
  .openapi('RevisionInfo')

const RevisionInfoListSchema = z.array(RevisionInfoSchema).openapi('RevisionInfoList')

const BatchGetApplicationRevisionsOutputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the application that corresponds to the revisions.' }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about errors that might have occurred during the API call.',
        }),
    ).exactOptional(),
    revisions: RevisionInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information about the revisions, including the type and location.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchGetApplicationRevisions</code> operation.',
    required: [],
  })
  .openapi('BatchGetApplicationRevisionsOutput')

const RevisionLocationListSchema = z.array(RevisionLocationSchema).openapi('RevisionLocationList')

const BatchGetApplicationRevisionsInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application about which to get revision information.',
        }),
    ),
    revisions: RevisionLocationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>RevisionLocation</code> objects that specify information to get about the application revisions, including type and location. The maximum number of <code>RevisionLocation</code> objects you can specify is 25.',
        }),
    ),
  })
  .openapi({
    required: ['applicationName', 'revisions'],
    title: 'BatchGetApplicationRevisionsInput',
    description: 'Represents the input of a <code>BatchGetApplicationRevisions</code> operation.',
  })
  .openapi('BatchGetApplicationRevisionsInput')

const ApplicationDoesNotExistExceptionSchema = z.any().openapi('ApplicationDoesNotExistException')

const ApplicationNameRequiredExceptionSchema = z.any().openapi('ApplicationNameRequiredException')

const InvalidApplicationNameExceptionSchema = z.any().openapi('InvalidApplicationNameException')

const RevisionRequiredExceptionSchema = z.any().openapi('RevisionRequiredException')

const InvalidRevisionExceptionSchema = z.any().openapi('InvalidRevisionException')

const BatchLimitExceededExceptionSchema = z.any().openapi('BatchLimitExceededException')

const ApplicationIdSchema = z.string().openapi('ApplicationId')

const BooleanSchema = z.boolean().openapi('Boolean')

const GitHubAccountTokenNameSchema = z.string().openapi('GitHubAccountTokenName')

const ComputePlatformSchema = z.enum(['Server', 'Lambda', 'ECS']).openapi('ComputePlatform')

const ApplicationInfoSchema = z
  .object({
    applicationId: ApplicationIdSchema.and(
      z.any().openapi({ description: 'The application ID.' }),
    ).exactOptional(),
    applicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The application name.' }),
    ).exactOptional(),
    createTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the application was created.' }),
    ).exactOptional(),
    linkedToGitHub: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if the user has authenticated with GitHub for the specified application. Otherwise, false.',
        }),
    ).exactOptional(),
    gitHubAccountName: GitHubAccountTokenNameSchema.and(
      z.any().openapi({ description: 'The name for a connection to a GitHub account.' }),
    ).exactOptional(),
    computePlatform: ComputePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination platform type for deployment of the application (<code>Lambda</code> or <code>Server</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an application.', required: [] })
  .openapi('ApplicationInfo')

const ApplicationsInfoListSchema = z.array(ApplicationInfoSchema).openapi('ApplicationsInfoList')

const BatchGetApplicationsOutputSchema = z
  .object({
    applicationsInfo: ApplicationsInfoListSchema.and(
      z.any().openapi({ description: 'Information about the applications.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchGetApplications</code> operation.',
    required: [],
  })
  .openapi('BatchGetApplicationsOutput')

const ApplicationsListSchema = z.array(ApplicationNameSchema).openapi('ApplicationsList')

const BatchGetApplicationsInputSchema = z
  .object({
    applicationNames: ApplicationsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of application names separated by spaces. The maximum number of application names you can specify is 100.',
        }),
    ),
  })
  .openapi({
    required: ['applicationNames'],
    title: 'BatchGetApplicationsInput',
    description: 'Represents the input of a <code>BatchGetApplications</code> operation.',
  })
  .openapi('BatchGetApplicationsInput')

const DeploymentGroupIdSchema = z.string().openapi('DeploymentGroupId')

const DeploymentConfigNameSchema = z.string().min(1).max(100).openapi('DeploymentConfigName')

const EC2TagFilterTypeSchema = z
  .enum(['KEY_ONLY', 'VALUE_ONLY', 'KEY_AND_VALUE'])
  .openapi('EC2TagFilterType')

const EC2TagFilterSchema = z
  .object({
    Key: KeySchema.and(z.any().openapi({ description: 'The tag filter key.' })).exactOptional(),
    Value: ValueSchema.and(
      z.any().openapi({ description: 'The tag filter value.' }),
    ).exactOptional(),
    Type: EC2TagFilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tag filter type:</p> <ul> <li> <p> <code>KEY_ONLY</code>: Key only.</p> </li> <li> <p> <code>VALUE_ONLY</code>: Value only.</p> </li> <li> <p> <code>KEY_AND_VALUE</code>: Key and value.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an EC2 tag filter.', required: [] })
  .openapi('EC2TagFilter')

const EC2TagFilterListSchema = z.array(EC2TagFilterSchema).openapi('EC2TagFilterList')

const TagFilterTypeSchema = z
  .enum(['KEY_ONLY', 'VALUE_ONLY', 'KEY_AND_VALUE'])
  .openapi('TagFilterType')

const TagFilterSchema = z
  .object({
    Key: KeySchema.and(
      z.any().openapi({ description: 'The on-premises instance tag filter key.' }),
    ).exactOptional(),
    Value: ValueSchema.and(
      z.any().openapi({ description: 'The on-premises instance tag filter value.' }),
    ).exactOptional(),
    Type: TagFilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The on-premises instance tag filter type:</p> <ul> <li> <p>KEY_ONLY: Key only.</p> </li> <li> <p>VALUE_ONLY: Value only.</p> </li> <li> <p>KEY_AND_VALUE: Key and value.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an on-premises instance tag filter.', required: [] })
  .openapi('TagFilter')

const TagFilterListSchema = z.array(TagFilterSchema).openapi('TagFilterList')

const AutoScalingGroupNameSchema = z.string().openapi('AutoScalingGroupName')

const AutoScalingGroupHookSchema = z.string().openapi('AutoScalingGroupHook')

const AutoScalingGroupSchema = z
  .object({
    name: AutoScalingGroupNameSchema.and(
      z.any().openapi({ description: 'The Auto Scaling group name.' }),
    ).exactOptional(),
    hook: AutoScalingGroupHookSchema.and(
      z.any().openapi({ description: 'An Auto Scaling lifecycle event hook name.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an Auto Scaling group.', required: [] })
  .openapi('AutoScalingGroup')

const AutoScalingGroupListSchema = z.array(AutoScalingGroupSchema).openapi('AutoScalingGroupList')

const RoleSchema = z.string().openapi('Role')

const TriggerNameSchema = z.string().openapi('TriggerName')

const TriggerTargetArnSchema = z.string().openapi('TriggerTargetArn')

const TriggerEventTypeSchema = z
  .enum([
    'DeploymentStart',
    'DeploymentSuccess',
    'DeploymentFailure',
    'DeploymentStop',
    'DeploymentRollback',
    'DeploymentReady',
    'InstanceStart',
    'InstanceSuccess',
    'InstanceFailure',
    'InstanceReady',
  ])
  .openapi('TriggerEventType')

const TriggerEventTypeListSchema = z.array(TriggerEventTypeSchema).openapi('TriggerEventTypeList')

const TriggerConfigSchema = z
  .object({
    triggerName: TriggerNameSchema.and(
      z.any().openapi({ description: 'The name of the notification trigger.' }),
    ).exactOptional(),
    triggerTargetArn: TriggerTargetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.',
        }),
    ).exactOptional(),
    triggerEvents: TriggerEventTypeListSchema.and(
      z
        .any()
        .openapi({ description: 'The event type or types for which notifications are triggered.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about notification triggers for the deployment group.',
    required: [],
  })
  .openapi('TriggerConfig')

const TriggerConfigListSchema = z.array(TriggerConfigSchema).openapi('TriggerConfigList')

const AlarmNameSchema = z.string().openapi('AlarmName')

const AlarmSchema = z
  .object({
    name: AlarmNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the alarm. Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an alarm.', required: [] })
  .openapi('Alarm')

const AlarmListSchema = z.array(AlarmSchema).openapi('AlarmList')

const AlarmConfigurationSchema = z
  .object({
    enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether the alarm configuration is enabled.' }),
    ).exactOptional(),
    ignorePollAlarmFailure: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.</p> <ul> <li> <p> <code>true</code>: The deployment proceeds even if alarm status information can't be retrieved from Amazon CloudWatch.</p> </li> <li> <p> <code>false</code>: The deployment stops if alarm status information can't be retrieved from Amazon CloudWatch.</p> </li> </ul>",
        }),
    ).exactOptional(),
    alarms: AlarmListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about alarms associated with a deployment or deployment group.',
    required: [],
  })
  .openapi('AlarmConfiguration')

const AutoRollbackEventSchema = z
  .enum(['DEPLOYMENT_FAILURE', 'DEPLOYMENT_STOP_ON_ALARM', 'DEPLOYMENT_STOP_ON_REQUEST'])
  .openapi('AutoRollbackEvent')

const AutoRollbackEventsListSchema = z
  .array(AutoRollbackEventSchema)
  .openapi('AutoRollbackEventsList')

const AutoRollbackConfigurationSchema = z
  .object({
    enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a defined automatic rollback configuration is currently enabled.',
        }),
    ).exactOptional(),
    events: AutoRollbackEventsListSchema.and(
      z.any().openapi({ description: 'The event type or types that trigger a rollback.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.',
    required: [],
  })
  .openapi('AutoRollbackConfiguration')

const DeploymentTypeSchema = z.enum(['IN_PLACE', 'BLUE_GREEN']).openapi('DeploymentType')

const DeploymentOptionSchema = z
  .enum(['WITH_TRAFFIC_CONTROL', 'WITHOUT_TRAFFIC_CONTROL'])
  .openapi('DeploymentOption')

const DeploymentStyleSchema = z
  .object({
    deploymentType: DeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to run an in-place deployment or a blue/green deployment.',
        }),
    ).exactOptional(),
    deploymentOption: DeploymentOptionSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether to route deployment traffic behind a load balancer.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.',
    required: [],
  })
  .openapi('DeploymentStyle')

const OutdatedInstancesStrategySchema = z
  .enum(['UPDATE', 'IGNORE'])
  .openapi('OutdatedInstancesStrategy')

const InstanceActionSchema = z.enum(['TERMINATE', 'KEEP_ALIVE']).openapi('InstanceAction')

const DurationSchema = z.int().openapi('Duration')

const BlueInstanceTerminationOptionSchema = z
  .object({
    action: InstanceActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action to take on instances in the original environment after a successful blue/green deployment.</p> <ul> <li> <p> <code>TERMINATE</code>: Instances are terminated after a specified wait time.</p> </li> <li> <p> <code>KEEP_ALIVE</code>: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.</p> </li> </ul>',
        }),
    ).exactOptional(),
    terminationWaitTimeInMinutes: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.</p> <p> For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. </p> <p> The maximum setting is 2880 minutes (2 days). </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. ',
    required: [],
  })
  .openapi('BlueInstanceTerminationOption')

const DeploymentReadyActionSchema = z
  .enum(['CONTINUE_DEPLOYMENT', 'STOP_DEPLOYMENT'])
  .openapi('DeploymentReadyAction')

const DeploymentReadyOptionSchema = z
  .object({
    actionOnTimeout: DeploymentReadyActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.</p> <ul> <li> <p>CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.</p> </li> <li> <p>STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using <a>ContinueDeployment</a>. If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.</p> </li> </ul>',
        }),
    ).exactOptional(),
    waitTimeInMinutes: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. Applies only to the <code>STOP_DEPLOYMENT</code> option for <code>actionOnTimeout</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.',
    required: [],
  })
  .openapi('DeploymentReadyOption')

const GreenFleetProvisioningActionSchema = z
  .enum(['DISCOVER_EXISTING', 'COPY_AUTO_SCALING_GROUP'])
  .openapi('GreenFleetProvisioningAction')

const GreenFleetProvisioningOptionSchema = z
  .object({
    action: GreenFleetProvisioningActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The method used to add instances to a replacement environment.</p> <ul> <li> <p> <code>DISCOVER_EXISTING</code>: Use instances that already exist or will be created manually.</p> </li> <li> <p> <code>COPY_AUTO_SCALING_GROUP</code>: Use settings from a specified Auto Scaling group to define and create instances in a new Auto Scaling group.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the instances that belong to the replacement environment in a blue/green deployment.',
    required: [],
  })
  .openapi('GreenFleetProvisioningOption')

const BlueGreenDeploymentConfigurationSchema = z
  .object({
    terminateBlueInstancesOnDeploymentSuccess: BlueInstanceTerminationOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about whether to terminate instances in the original fleet during a blue/green deployment.',
        }),
    ).exactOptional(),
    deploymentReadyOption: DeploymentReadyOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.',
        }),
    ).exactOptional(),
    greenFleetProvisioningOption: GreenFleetProvisioningOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about how instances are provisioned for a replacement environment in a blue/green deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about blue/green deployment options for a deployment group.',
    required: [],
  })
  .openapi('BlueGreenDeploymentConfiguration')

const ELBNameSchema = z.string().openapi('ELBName')

const ELBInfoSchema = z
  .object({
    name: ELBNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.',
    required: [],
  })
  .openapi('ELBInfo')

const ELBInfoListSchema = z.array(ELBInfoSchema).openapi('ELBInfoList')

const TargetGroupNameSchema = z.string().openapi('TargetGroupName')

const TargetGroupInfoSchema = z
  .object({
    name: TargetGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment are registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.',
    required: [],
  })
  .openapi('TargetGroupInfo')

const TargetGroupInfoListSchema = z.array(TargetGroupInfoSchema).openapi('TargetGroupInfoList')

const ListenerArnSchema = z.string().openapi('ListenerArn')

const ListenerArnListSchema = z.array(ListenerArnSchema).openapi('ListenerArnList')

const TrafficRouteSchema = z
  .object({
    listenerArns: ListenerArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. ',
    required: [],
  })
  .openapi('TrafficRoute')

const TargetGroupPairInfoSchema = z
  .object({
    targetGroups: TargetGroupInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' One pair of target groups. One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete. ',
        }),
    ).exactOptional(),
    prodTrafficRoute: TrafficRouteSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. ',
        }),
    ).exactOptional(),
    testTrafficRoute: TrafficRouteSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a deployment. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. ',
    required: [],
  })
  .openapi('TargetGroupPairInfo')

const TargetGroupPairInfoListSchema = z
  .array(TargetGroupPairInfoSchema)
  .openapi('TargetGroupPairInfoList')

const LoadBalancerInfoSchema = z
  .object({
    elbInfoList: ELBInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array that contains information about the load balancer to use for load balancing in a deployment. In Elastic Load Balancing, load balancers are used with Classic Load Balancers.</p> <note> <p> Adding more than one load balancer to the array is not supported. </p> </note>',
        }),
    ).exactOptional(),
    targetGroupInfoList: TargetGroupInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array that contains information about the target group to use for load balancing in a deployment. In Elastic Load Balancing, target groups are used with Application Load Balancers.</p> <note> <p> Adding more than one target group to the array is not supported. </p> </note>',
        }),
    ).exactOptional(),
    targetGroupPairInfoList: TargetGroupPairInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The target group pair information. This is an array of <code>TargeGroupPairInfo</code> objects with a maximum size of one. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the Elastic Load Balancing load balancer or target group used in a deployment.',
    required: [],
  })
  .openapi('LoadBalancerInfo')

const DeploymentIdSchema = z.string().openapi('DeploymentId')

const DeploymentStatusSchema = z
  .enum(['Created', 'Queued', 'InProgress', 'Baking', 'Succeeded', 'Failed', 'Stopped', 'Ready'])
  .openapi('DeploymentStatus')

const LastDeploymentInfoSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    status: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The status of the most recent deployment.' }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp that indicates when the most recent deployment to the deployment group was complete.',
        }),
    ).exactOptional(),
    createTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp that indicates when the most recent deployment to the deployment group started.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the most recent attempted or successful deployment to a deployment group.',
    required: [],
  })
  .openapi('LastDeploymentInfo')

const EC2TagSetListSchema = z.array(EC2TagFilterListSchema).openapi('EC2TagSetList')

const EC2TagSetSchema = z
  .object({
    ec2TagSetList: EC2TagSetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains other lists of Amazon EC2 instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about groups of Amazon EC2 instance tags.', required: [] })
  .openapi('EC2TagSet')

const OnPremisesTagSetListSchema = z.array(TagFilterListSchema).openapi('OnPremisesTagSetList')

const OnPremisesTagSetSchema = z
  .object({
    onPremisesTagSetList: OnPremisesTagSetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains other lists of on-premises instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about groups of on-premises instance tags.', required: [] })
  .openapi('OnPremisesTagSet')

const ECSServiceNameSchema = z.string().openapi('ECSServiceName')

const ECSClusterNameSchema = z.string().openapi('ECSClusterName')

const ECSServiceSchema = z
  .object({
    serviceName: ECSServiceNameSchema.and(
      z.any().openapi({ description: ' The name of the target Amazon ECS service. ' }),
    ).exactOptional(),
    clusterName: ECSClusterNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the cluster that the Amazon ECS service is associated with. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      " Contains the service and cluster names used to identify an Amazon ECS deployment's target. ",
    required: [],
  })
  .openapi('ECSService')

const ECSServiceListSchema = z.array(ECSServiceSchema).openapi('ECSServiceList')

const DeploymentGroupInfoSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The application name.' }),
    ).exactOptional(),
    deploymentGroupId: DeploymentGroupIdSchema.and(
      z.any().openapi({ description: 'The deployment group ID.' }),
    ).exactOptional(),
    deploymentGroupName: DeploymentGroupNameSchema.and(
      z.any().openapi({ description: 'The deployment group name.' }),
    ).exactOptional(),
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z.any().openapi({ description: 'The deployment configuration name.' }),
    ).exactOptional(),
    ec2TagFilters: EC2TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags.',
        }),
    ).exactOptional(),
    onPremisesInstanceTagFilters: TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags.',
        }),
    ).exactOptional(),
    autoScalingGroups: AutoScalingGroupListSchema.and(
      z.any().openapi({ description: 'A list of associated Auto Scaling groups.' }),
    ).exactOptional(),
    serviceRoleArn: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-service-role.html">Create a Service Role for CodeDeploy</a> in the <i>CodeDeploy User Guide</i>.',
        }),
    ).exactOptional(),
    targetRevision: RevisionLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Information about the deployment group's target revision, including type and location.",
        }),
    ).exactOptional(),
    triggerConfigurations: TriggerConfigListSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about triggers associated with the deployment group.',
        }),
    ).exactOptional(),
    alarmConfiguration: AlarmConfigurationSchema.and(
      z.any().openapi({ description: 'A list of alarms associated with the deployment group.' }),
    ).exactOptional(),
    autoRollbackConfiguration: AutoRollbackConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the automatic rollback configuration associated with the deployment group.',
        }),
    ).exactOptional(),
    deploymentStyle: DeploymentStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.',
        }),
    ).exactOptional(),
    outdatedInstancesStrategy: OutdatedInstancesStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.</p> <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances.</p> <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.</p>",
        }),
    ).exactOptional(),
    blueGreenDeploymentConfiguration: BlueGreenDeploymentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about blue/green deployment options for a deployment group.',
        }),
    ).exactOptional(),
    loadBalancerInfo: LoadBalancerInfoSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the load balancer to use in a deployment.' }),
    ).exactOptional(),
    lastSuccessfulDeployment: LastDeploymentInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the most recent successful deployment to the deployment group.',
        }),
    ).exactOptional(),
    lastAttemptedDeployment: LastDeploymentInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the most recent attempted deployment to the deployment group.',
        }),
    ).exactOptional(),
    ec2TagSet: EC2TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about groups of tags applied to an Amazon EC2 instance. The deployment group includes only Amazon EC2 instances identified by all of the tag groups. Cannot be used in the same call as ec2TagFilters.',
        }),
    ).exactOptional(),
    onPremisesTagSet: OnPremisesTagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about groups of tags applied to an on-premises instance. The deployment group includes only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.',
        }),
    ).exactOptional(),
    computePlatform: ComputePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).',
        }),
    ).exactOptional(),
    ecsServices: ECSServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a deployment group.', required: [] })
  .openapi('DeploymentGroupInfo')

const DeploymentGroupInfoListSchema = z
  .array(DeploymentGroupInfoSchema)
  .openapi('DeploymentGroupInfoList')

const BatchGetDeploymentGroupsOutputSchema = z
  .object({
    deploymentGroupsInfo: DeploymentGroupInfoListSchema.and(
      z.any().openapi({ description: 'Information about the deployment groups.' }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about errors that might have occurred during the API call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchGetDeploymentGroups</code> operation.',
    required: [],
  })
  .openapi('BatchGetDeploymentGroupsOutput')

const BatchGetDeploymentGroupsInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the applicable IAM or Amazon Web Services account.',
        }),
    ),
    deploymentGroupNames: DeploymentGroupsListSchema.and(
      z.any().openapi({ description: 'The names of the deployment groups.' }),
    ),
  })
  .openapi({
    required: ['applicationName', 'deploymentGroupNames'],
    title: 'BatchGetDeploymentGroupsInput',
    description: 'Represents the input of a <code>BatchGetDeploymentGroups</code> operation.',
  })
  .openapi('BatchGetDeploymentGroupsInput')

const DeploymentGroupNameRequiredExceptionSchema = z
  .any()
  .openapi('DeploymentGroupNameRequiredException')

const InvalidDeploymentGroupNameExceptionSchema = z
  .any()
  .openapi('InvalidDeploymentGroupNameException')

const DeploymentConfigDoesNotExistExceptionSchema = z
  .any()
  .openapi('DeploymentConfigDoesNotExistException')

const InstanceIdSchema = z.string().openapi('InstanceId')

const InstanceStatusSchema = z
  .enum(['Pending', 'InProgress', 'Succeeded', 'Failed', 'Skipped', 'Unknown', 'Ready'])
  .openapi({
    deprecated: true,
    description: 'InstanceStatus is deprecated, use TargetStatus instead.',
  })
  .openapi('InstanceStatus')

const LifecycleEventNameSchema = z.string().openapi('LifecycleEventName')

const LifecycleErrorCodeSchema = z
  .enum([
    'Success',
    'ScriptMissing',
    'ScriptNotExecutable',
    'ScriptTimedOut',
    'ScriptFailed',
    'UnknownError',
  ])
  .openapi('LifecycleErrorCode')

const ScriptNameSchema = z.string().openapi('ScriptName')

const LifecycleMessageSchema = z.string().openapi('LifecycleMessage')

const LogTailSchema = z.string().openapi('LogTail')

const DiagnosticsSchema = z
  .object({
    errorCode: LifecycleErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The associated error code:</p> <ul> <li> <p>Success: The specified script ran.</p> </li> <li> <p>ScriptMissing: The specified script was not found in the specified location.</p> </li> <li> <p>ScriptNotExecutable: The specified script is not a recognized executable file type.</p> </li> <li> <p>ScriptTimedOut: The specified script did not finish running in the specified time period.</p> </li> <li> <p>ScriptFailed: The specified script failed to run as expected.</p> </li> <li> <p>UnknownError: The specified script did not run for an unknown reason.</p> </li> </ul>',
        }),
    ).exactOptional(),
    scriptName: ScriptNameSchema.and(
      z.any().openapi({ description: 'The name of the script.' }),
    ).exactOptional(),
    message: LifecycleMessageSchema.and(
      z.any().openapi({ description: 'The message associated with the error.' }),
    ).exactOptional(),
    logTail: LogTailSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last portion of the diagnostic log.</p> <p>If available, CodeDeploy returns up to the last 4 KB of the diagnostic log.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Diagnostic information about executable scripts that are part of a deployment.',
    required: [],
  })
  .openapi('Diagnostics')

const LifecycleEventStatusSchema = z
  .enum(['Pending', 'InProgress', 'Succeeded', 'Failed', 'Skipped', 'Unknown'])
  .openapi('LifecycleEventStatus')

const LifecycleEventSchema = z
  .object({
    lifecycleEventName: LifecycleEventNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deployment lifecycle event name, such as <code>ApplicationStop</code>, <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>ApplicationStart</code>, or <code>ValidateService</code>.',
        }),
    ).exactOptional(),
    diagnostics: DiagnosticsSchema.and(
      z
        .any()
        .openapi({ description: 'Diagnostic information about the deployment lifecycle event.' }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp that indicates when the deployment lifecycle event started.',
        }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp that indicates when the deployment lifecycle event ended.',
        }),
    ).exactOptional(),
    status: LifecycleEventStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The deployment lifecycle event status:</p> <ul> <li> <p>Pending: The deployment lifecycle event is pending.</p> </li> <li> <p>InProgress: The deployment lifecycle event is in progress.</p> </li> <li> <p>Succeeded: The deployment lifecycle event ran successfully.</p> </li> <li> <p>Failed: The deployment lifecycle event has failed.</p> </li> <li> <p>Skipped: The deployment lifecycle event has been skipped.</p> </li> <li> <p>Unknown: The deployment lifecycle event is unknown.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a deployment lifecycle event.', required: [] })
  .openapi('LifecycleEvent')

const LifecycleEventListSchema = z.array(LifecycleEventSchema).openapi('LifecycleEventList')

const InstanceTypeSchema = z.enum(['Blue', 'Green']).openapi('InstanceType')

const InstanceSummarySchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    instanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
    status: InstanceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The deployment status for this instance:</p> <ul> <li> <p> <code>Pending</code>: The deployment is pending for this instance.</p> </li> <li> <p> <code>In Progress</code>: The deployment is in progress for this instance.</p> </li> <li> <p> <code>Succeeded</code>: The deployment has succeeded for this instance.</p> </li> <li> <p> <code>Failed</code>: The deployment has failed for this instance.</p> </li> <li> <p> <code>Skipped</code>: The deployment has been skipped for this instance.</p> </li> <li> <p> <code>Unknown</code>: The deployment status is unknown for this instance.</p> </li> </ul>',
        }),
    ).exactOptional(),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp that indicates when the instance information was last updated.',
        }),
    ).exactOptional(),
    lifecycleEvents: LifecycleEventListSchema.and(
      z.any().openapi({ description: 'A list of lifecycle events for this instance.' }),
    ).exactOptional(),
    instanceType: InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about which environment an instance belongs to in a blue/green deployment.</p> <ul> <li> <p>BLUE: The instance is part of the original environment.</p> </li> <li> <p>GREEN: The instance is part of the replacement environment.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description:
      'Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead.',
    required: [],
  })
  .openapi('InstanceSummary')

const InstanceSummaryListSchema = z.array(InstanceSummarySchema).openapi('InstanceSummaryList')

const BatchGetDeploymentInstancesOutputSchema = z
  .object({
    instancesSummary: InstanceSummaryListSchema.and(
      z.any().openapi({ description: 'Information about the instance.' }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about errors that might have occurred during the API call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchGetDeploymentInstances</code> operation.',
    required: [],
  })
  .openapi('BatchGetDeploymentInstancesOutput')

const InstancesListSchema = z.array(InstanceIdSchema).openapi('InstancesList')

const BatchGetDeploymentInstancesInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ),
    instanceIds: InstancesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique IDs of instances used in the deployment. The maximum number of instance IDs you can specify is 25.',
        }),
    ),
  })
  .openapi({
    required: ['deploymentId', 'instanceIds'],
    title: 'BatchGetDeploymentInstancesInput',
    description: ' Represents the input of a <code>BatchGetDeploymentInstances</code> operation. ',
  })
  .openapi('BatchGetDeploymentInstancesInput')

const DeploymentIdRequiredExceptionSchema = z.any().openapi('DeploymentIdRequiredException')

const DeploymentDoesNotExistExceptionSchema = z.any().openapi('DeploymentDoesNotExistException')

const InstanceIdRequiredExceptionSchema = z.any().openapi('InstanceIdRequiredException')

const InvalidDeploymentIdExceptionSchema = z.any().openapi('InvalidDeploymentIdException')

const InvalidComputePlatformExceptionSchema = z.any().openapi('InvalidComputePlatformException')

const DeploymentTargetTypeSchema = z
  .enum(['InstanceTarget', 'LambdaTarget', 'ECSTarget', 'CloudFormationTarget'])
  .openapi('DeploymentTargetType')

const TargetIdSchema = z.string().openapi('TargetId')

const TargetArnSchema = z.string().openapi('TargetArn')

const TargetStatusSchema = z
  .enum(['Pending', 'InProgress', 'Succeeded', 'Failed', 'Skipped', 'Unknown', 'Ready'])
  .openapi('TargetStatus')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const TargetLabelSchema = z.enum(['Blue', 'Green']).openapi('TargetLabel')

const InstanceTargetSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    targetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID of a deployment target that has a type of <code>instanceTarget</code>. ',
        }),
    ).exactOptional(),
    targetArn: TargetArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the target. ' }),
    ).exactOptional(),
    status: TargetStatusSchema.and(
      z
        .any()
        .openapi({ description: " The status an EC2/On-premises deployment's target instance. " }),
    ).exactOptional(),
    lastUpdatedAt: TimeSchema.and(
      z
        .any()
        .openapi({
          description: ' The date and time when the target instance was updated by a deployment. ',
        }),
    ).exactOptional(),
    lifecycleEvents: LifecycleEventListSchema.and(
      z
        .any()
        .openapi({
          description: ' The lifecycle events of the deployment to this target instance. ',
        }),
    ).exactOptional(),
    instanceLabel: TargetLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A label that identifies whether the instance is an original target (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform. ',
    required: [],
  })
  .openapi('InstanceTarget')

const LambdaFunctionNameSchema = z.string().openapi('LambdaFunctionName')

const LambdaFunctionAliasSchema = z.string().openapi('LambdaFunctionAlias')

const VersionSchema = z.string().openapi('Version')

const TrafficWeightSchema = z.float64().openapi('TrafficWeight')

const LambdaFunctionInfoSchema = z
  .object({
    functionName: LambdaFunctionNameSchema.and(
      z.any().openapi({ description: ' The name of a Lambda function. ' }),
    ).exactOptional(),
    functionAlias: LambdaFunctionAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The alias of a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Lambda Function Aliases</a> in the <i>Lambda Developer Guide</i>.',
        }),
    ).exactOptional(),
    currentVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description: ' The version of a Lambda function that production traffic points to. ',
        }),
    ).exactOptional(),
    targetVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The version of a Lambda function that production traffic points to after the Lambda function is deployed. ',
        }),
    ).exactOptional(),
    targetVersionWeight: TrafficWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The percentage of production traffic that the target version of a Lambda function receives. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about a Lambda function specified in a deployment. ',
    required: [],
  })
  .openapi('LambdaFunctionInfo')

const LambdaTargetSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    targetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID of a deployment target that has a type of <code>lambdaTarget</code>. ',
        }),
    ).exactOptional(),
    targetArn: TargetArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the target. ' }),
    ).exactOptional(),
    status: TargetStatusSchema.and(
      z
        .any()
        .openapi({ description: " The status an Lambda deployment's target Lambda function. " }),
    ).exactOptional(),
    lastUpdatedAt: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The date and time when the target Lambda function was updated by a deployment. ',
        }),
    ).exactOptional(),
    lifecycleEvents: LifecycleEventListSchema.and(
      z
        .any()
        .openapi({
          description: ' The lifecycle events of the deployment to this target Lambda function. ',
        }),
    ).exactOptional(),
    lambdaFunctionInfo: LambdaFunctionInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>LambdaFunctionInfo</code> object that describes a target Lambda function. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about the target Lambda function during an Lambda deployment. ',
    required: [],
  })
  .openapi('LambdaTarget')

const ECSTaskSetIdentifierSchema = z.string().openapi('ECSTaskSetIdentifier')

const ECSTaskSetCountSchema = z.int().openapi('ECSTaskSetCount')

const ECSTaskSetStatusSchema = z.string().openapi('ECSTaskSetStatus')

const ECSTaskSetSchema = z
  .object({
    identifer: ECSTaskSetIdentifierSchema.and(
      z.any().openapi({ description: ' A unique ID of an <code>ECSTaskSet</code>. ' }),
    ).exactOptional(),
    desiredCount: ECSTaskSetCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of tasks in a task set. During a deployment that uses the Amazon ECS compute type, CodeDeploy instructs Amazon ECS to create a new task set and uses this value to determine how many tasks to create. After the updated task set is created, CodeDeploy shifts traffic to the new task set. ',
        }),
    ).exactOptional(),
    pendingCount: ECSTaskSetCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of tasks in the task set that are in the <code>PENDING</code> status during an Amazon ECS deployment. A task in the <code>PENDING</code> state is preparing to enter the <code>RUNNING</code> state. A task set enters the <code>PENDING</code> status when it launches for the first time, or when it is restarted after being in the <code>STOPPED</code> state. ',
        }),
    ).exactOptional(),
    runningCount: ECSTaskSetCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of tasks in the task set that are in the <code>RUNNING</code> status during an Amazon ECS deployment. A task in the <code>RUNNING</code> state is running and ready for use. ',
        }),
    ).exactOptional(),
    status: ECSTaskSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The status of the task set. There are three valid task set statuses: </p> <ul> <li> <p> <code>PRIMARY</code>: Indicates the task set is serving production traffic. </p> </li> <li> <p> <code>ACTIVE</code>: Indicates the task set is not serving production traffic. </p> </li> <li> <p> <code>DRAINING</code>: Indicates the tasks in the task set are being stopped and their corresponding targets are being deregistered from their target group. </p> </li> </ul>',
        }),
    ).exactOptional(),
    trafficWeight: TrafficWeightSchema.and(
      z.any().openapi({ description: ' The percentage of traffic served by this task set. ' }),
    ).exactOptional(),
    targetGroup: TargetGroupInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The target group associated with the task set. The target group is used by CodeDeploy to manage traffic to a task set. ',
        }),
    ).exactOptional(),
    taskSetLabel: TargetLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A label that identifies whether the ECS task set is an original target (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a set of Amazon ECS tasks in an CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set. ',
    required: [],
  })
  .openapi('ECSTaskSet')

const ECSTaskSetListSchema = z.array(ECSTaskSetSchema).openapi('ECSTaskSetList')

const ECSTargetSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    targetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID of a deployment target that has a type of <code>ecsTarget</code>. ',
        }),
    ).exactOptional(),
    targetArn: TargetArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the target. ' }),
    ).exactOptional(),
    lastUpdatedAt: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The date and time when the target Amazon ECS application was updated by a deployment. ',
        }),
    ).exactOptional(),
    lifecycleEvents: LifecycleEventListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The lifecycle events of the deployment to this target Amazon ECS application. ',
        }),
    ).exactOptional(),
    status: TargetStatusSchema.and(
      z
        .any()
        .openapi({
          description: " The status an Amazon ECS deployment's target ECS application. ",
        }),
    ).exactOptional(),
    taskSetsInfo: ECSTaskSetListSchema.and(
      z
        .any()
        .openapi({
          description: ' The <code>ECSTaskSet</code> objects associated with the ECS target. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about the target of an Amazon ECS deployment. ',
    required: [],
  })
  .openapi('ECSTarget')

const CloudFormationResourceTypeSchema = z.string().openapi('CloudFormationResourceType')

const CloudFormationTargetSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: 'The unique ID of an CloudFormation blue/green deployment.' }),
    ).exactOptional(),
    targetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID of a deployment target that has a type of <code>CloudFormationTarget</code>. ',
        }),
    ).exactOptional(),
    lastUpdatedAt: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The date and time when the target application was updated by an CloudFormation blue/green deployment. ',
        }),
    ).exactOptional(),
    lifecycleEvents: LifecycleEventListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The lifecycle events of the CloudFormation blue/green deployment to this target application. ',
        }),
    ).exactOptional(),
    status: TargetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            " The status of an CloudFormation blue/green deployment's target application. ",
        }),
    ).exactOptional(),
    resourceType: CloudFormationResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource type for the CloudFormation blue/green deployment.',
        }),
    ).exactOptional(),
    targetVersionWeight: TrafficWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of production traffic that the target version of an CloudFormation blue/green deployment receives.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.',
    required: [],
  })
  .openapi('CloudFormationTarget')

const DeploymentTargetSchema = z
  .object({
    deploymentTargetType: DeploymentTargetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The deployment type that is specific to the deployment's compute platform or deployments initiated by a CloudFormation stack update.",
        }),
    ).exactOptional(),
    instanceTarget: InstanceTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the target for a deployment that uses the EC2/On-premises compute platform. ',
        }),
    ).exactOptional(),
    lambdaTarget: LambdaTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the target for a deployment that uses the Lambda compute platform. ',
        }),
    ).exactOptional(),
    ecsTarget: ECSTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the target for a deployment that uses the Amazon ECS compute platform. ',
        }),
    ).exactOptional(),
    cloudFormationTarget: CloudFormationTargetSchema.exactOptional(),
  })
  .openapi({ description: ' Information about the deployment target. ', required: [] })
  .openapi('DeploymentTarget')

const DeploymentTargetListSchema = z.array(DeploymentTargetSchema).openapi('DeploymentTargetList')

const BatchGetDeploymentTargetsOutputSchema = z
  .object({
    deploymentTargets: DeploymentTargetListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> A list of target objects for a deployment. Each target object contains details about the target, such as its status and lifecycle events. The type of the target objects depends on the deployment' compute platform. </p> <ul> <li> <p> <b>EC2/On-premises</b>: Each target object is an Amazon EC2 or on-premises instance. </p> </li> <li> <p> <b>Lambda</b>: The target object is a specific version of an Lambda function. </p> </li> <li> <p> <b>Amazon ECS</b>: The target object is an Amazon ECS service. </p> </li> <li> <p> <b>CloudFormation</b>: The target object is an CloudFormation blue/green deployment. </p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetDeploymentTargetsOutput')

const TargetIdListSchema = z.array(TargetIdSchema).openapi('TargetIdList')

const BatchGetDeploymentTargetsInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    targetIds: TargetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The unique IDs of the deployment targets. The compute platform of the deployment determines the type of the targets and their formats. The maximum number of deployment target IDs you can specify is 25.</p> <ul> <li> <p> For deployments that use the EC2/On-premises compute platform, the target IDs are Amazon EC2 or on-premises instances IDs, and their target type is <code>instanceTarget</code>. </p> </li> <li> <p> For deployments that use the Lambda compute platform, the target IDs are the names of Lambda functions, and their target type is <code>instanceTarget</code>. </p> </li> <li> <p> For deployments that use the Amazon ECS compute platform, the target IDs are pairs of Amazon ECS clusters and services specified using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. Their target type is <code>ecsTarget</code>. </p> </li> <li> <p> For deployments that are deployed with CloudFormation, the target IDs are CloudFormation stack IDs. Their target type is <code>cloudFormationTarget</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'BatchGetDeploymentTargetsInput', required: [] })
  .openapi('BatchGetDeploymentTargetsInput')

const DeploymentNotStartedExceptionSchema = z.any().openapi('DeploymentNotStartedException')

const DeploymentTargetIdRequiredExceptionSchema = z
  .any()
  .openapi('DeploymentTargetIdRequiredException')

const InvalidDeploymentTargetIdExceptionSchema = z
  .any()
  .openapi('InvalidDeploymentTargetIdException')

const DeploymentTargetDoesNotExistExceptionSchema = z
  .any()
  .openapi('DeploymentTargetDoesNotExistException')

const DeploymentTargetListSizeExceededExceptionSchema = z
  .any()
  .openapi('DeploymentTargetListSizeExceededException')

const InstanceDoesNotExistExceptionSchema = z.any().openapi('InstanceDoesNotExistException')

const ErrorCodeSchema = z
  .enum([
    'AGENT_ISSUE',
    'ALARM_ACTIVE',
    'APPLICATION_MISSING',
    'AUTOSCALING_VALIDATION_ERROR',
    'AUTO_SCALING_CONFIGURATION',
    'AUTO_SCALING_IAM_ROLE_PERMISSIONS',
    'CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND',
    'CUSTOMER_APPLICATION_UNHEALTHY',
    'DEPLOYMENT_GROUP_MISSING',
    'ECS_UPDATE_ERROR',
    'ELASTIC_LOAD_BALANCING_INVALID',
    'ELB_INVALID_INSTANCE',
    'HEALTH_CONSTRAINTS',
    'HEALTH_CONSTRAINTS_INVALID',
    'HOOK_EXECUTION_FAILURE',
    'IAM_ROLE_MISSING',
    'IAM_ROLE_PERMISSIONS',
    'INTERNAL_ERROR',
    'INVALID_ECS_SERVICE',
    'INVALID_LAMBDA_CONFIGURATION',
    'INVALID_LAMBDA_FUNCTION',
    'INVALID_REVISION',
    'MANUAL_STOP',
    'MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION',
    'MISSING_ELB_INFORMATION',
    'MISSING_GITHUB_TOKEN',
    'NO_EC2_SUBSCRIPTION',
    'NO_INSTANCES',
    'OVER_MAX_INSTANCES',
    'RESOURCE_LIMIT_EXCEEDED',
    'REVISION_MISSING',
    'THROTTLED',
    'TIMEOUT',
    'CLOUDFORMATION_STACK_FAILURE',
  ])
  .openapi('ErrorCode')

const ErrorInformationSchema = z
  .object({
    code: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/error-codes.html">Error Codes for CodeDeploy</a> in the <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a>.</p> <p>The error code:</p> <ul> <li> <p>APPLICATION_MISSING: The application was missing. This error code is most likely raised if the application is deleted after the deployment is created, but before it is started.</p> </li> <li> <p>DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code is most likely raised if the deployment group is deleted after the deployment is created, but before it is started.</p> </li> <li> <p>HEALTH_CONSTRAINTS: The deployment failed on too many instances to be successfully deployed within the instance health constraints specified.</p> </li> <li> <p>HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed within the instance health constraints specified.</p> </li> <li> <p>IAM_ROLE_MISSING: The service role cannot be accessed.</p> </li> <li> <p>IAM_ROLE_PERMISSIONS: The service role does not have the correct permissions.</p> </li> <li> <p>INTERNAL_ERROR: There was an internal error.</p> </li> <li> <p>NO_EC2_SUBSCRIPTION: The calling account is not subscribed to Amazon EC2.</p> </li> <li> <p>NO_INSTANCES: No instances were specified, or no instances can be found.</p> </li> <li> <p>OVER_MAX_INSTANCES: The maximum number of instances was exceeded.</p> </li> <li> <p>THROTTLED: The operation was throttled because the calling account exceeded the throttling limits of one or more Amazon Web Services services.</p> </li> <li> <p>TIMEOUT: The deployment has timed out.</p> </li> <li> <p>REVISION_MISSING: The revision ID was missing. This error code is most likely raised if the revision is deleted after the deployment is created, but before it is started.</p> </li> </ul>',
        }),
    ).exactOptional(),
    message: ErrorMessageSchema.and(
      z.any().openapi({ description: 'An accompanying error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a deployment error.', required: [] })
  .openapi('ErrorInformation')

const InstanceCountSchema = z.int().openapi('InstanceCount')

const DeploymentOverviewSchema = z
  .object({
    Pending: InstanceCountSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances in the deployment in a pending state.' }),
    ).exactOptional(),
    InProgress: InstanceCountSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of instances in which the deployment is in progress.',
        }),
    ).exactOptional(),
    Succeeded: InstanceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of instances in the deployment to which revisions have been successfully deployed.',
        }),
    ).exactOptional(),
    Failed: InstanceCountSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances in the deployment in a failed state.' }),
    ).exactOptional(),
    Skipped: InstanceCountSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances in the deployment in a skipped state.' }),
    ).exactOptional(),
    Ready: InstanceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of instances in a replacement environment ready to receive traffic in a blue/green deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the deployment status of the instances in the deployment.',
    required: [],
  })
  .openapi('DeploymentOverview')

const DeploymentCreatorSchema = z
  .enum([
    'user',
    'autoscaling',
    'codeDeployRollback',
    'CodeDeploy',
    'CodeDeployAutoUpdate',
    'CloudFormation',
    'CloudFormationRollback',
  ])
  .openapi('DeploymentCreator')

const RollbackInfoSchema = z
  .object({
    rollbackDeploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: 'The ID of the deployment rollback.' }),
    ).exactOptional(),
    rollbackTriggeringDeploymentId: DeploymentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deployment ID of the deployment that was underway and triggered a rollback deployment because it failed or was stopped.',
        }),
    ).exactOptional(),
    rollbackMessage: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Information that describes the status of a deployment rollback (for example, whether the deployment can't be rolled back, is in progress, failed, or succeeded). ",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a deployment rollback.', required: [] })
  .openapi('RollbackInfo')

const AutoScalingGroupNameListSchema = z
  .array(AutoScalingGroupNameSchema)
  .openapi('AutoScalingGroupNameList')

const TargetInstancesSchema = z
  .object({
    tagFilters: EC2TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag filter key, type, and value used to identify Amazon EC2 instances in a replacement environment for a blue/green deployment. Cannot be used in the same call as <code>ec2TagSet</code>.',
        }),
    ).exactOptional(),
    autoScalingGroups: AutoScalingGroupNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of one or more Auto Scaling groups to identify a replacement environment for a blue/green deployment.',
        }),
    ).exactOptional(),
    ec2TagSet: EC2TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the groups of Amazon EC2 instance tags that an instance must be identified by in order for it to be included in the replacement environment for a blue/green deployment. Cannot be used in the same call as <code>tagFilters</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the instances to be used in the replacement environment in a blue/green deployment.',
    required: [],
  })
  .openapi('TargetInstances')

const AdditionalDeploymentStatusInfoSchema = z
  .string()
  .openapi({
    deprecated: true,
    description:
      'AdditionalDeploymentStatusInfo is deprecated, use DeploymentStatusMessageList instead.',
  })
  .openapi('AdditionalDeploymentStatusInfo')

const FileExistsBehaviorSchema = z
  .enum(['DISALLOW', 'OVERWRITE', 'RETAIN'])
  .openapi('FileExistsBehavior')

const DeploymentStatusMessageListSchema = z
  .array(ErrorMessageSchema)
  .openapi('DeploymentStatusMessageList')

const ExternalIdSchema = z.string().openapi('ExternalId')

const DeploymentsListSchema = z.array(DeploymentIdSchema).openapi('DeploymentsList')

const RelatedDeploymentsSchema = z
  .object({
    autoUpdateOutdatedInstancesRootDeploymentId: DeploymentIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The deployment ID of the root deployment that triggered this deployment.',
        }),
    ).exactOptional(),
    autoUpdateOutdatedInstancesDeploymentIds: DeploymentsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The deployment IDs of 'auto-update outdated instances' deployments triggered by this deployment.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about deployments related to the specified deployment.',
    required: [],
  })
  .openapi('RelatedDeployments')

const DeploymentInfoSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The application name.' }),
    ).exactOptional(),
    deploymentGroupName: DeploymentGroupNameSchema.and(
      z.any().openapi({ description: ' The deployment group name. ' }),
    ).exactOptional(),
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z.any().openapi({ description: ' The deployment configuration name. ' }),
    ).exactOptional(),
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    previousRevision: RevisionLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the application revision that was deployed to the deployment group before the most recent successful deployment.',
        }),
    ).exactOptional(),
    revision: RevisionLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the location of stored application artifacts and the service from which to retrieve them.',
        }),
    ).exactOptional(),
    status: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The current state of the deployment as a whole.' }),
    ).exactOptional(),
    errorInformation: ErrorInformationSchema.and(
      z
        .any()
        .openapi({ description: 'Information about any error associated with this deployment.' }),
    ).exactOptional(),
    createTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp that indicates when the deployment was created.' }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A timestamp that indicates when the deployment was deployed to the deployment group.</p> <p>In some cases, the reported value of the start time might be later than the complete time. This is due to differences in the clock settings of backend servers that participate in the deployment process.</p>',
        }),
    ).exactOptional(),
    completeTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp that indicates when the deployment was complete.' }),
    ).exactOptional(),
    deploymentOverview: DeploymentOverviewSchema.and(
      z
        .any()
        .openapi({
          description: 'A summary of the deployment status of the instances in the deployment.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A comment about the deployment.' }),
    ).exactOptional(),
    creator: DeploymentCreatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The means by which the deployment was created:</p> <ul> <li> <p> <code>user</code>: A user created the deployment.</p> </li> <li> <p> <code>autoscaling</code>: Amazon EC2 Auto Scaling created the deployment.</p> </li> <li> <p> <code>codeDeployRollback</code>: A rollback process created the deployment.</p> </li> <li> <p> <code>CodeDeployAutoUpdate</code>: An auto-update process created the deployment when it detected outdated Amazon EC2 instances.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ignoreApplicationStopFailures: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> If true, then if an <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, or <code>AfterBlockTraffic</code> deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if <code>ApplicationStop</code> fails, the deployment continues with DownloadBundle. If <code>BeforeBlockTraffic</code> fails, the deployment continues with <code>BlockTraffic</code>. If <code>AfterBlockTraffic</code> fails, the deployment continues with <code>ApplicationStop</code>. </p> <p> If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted. </p> <p> During a deployment, the CodeDeploy agent runs the scripts specified for <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and <code>AfterBlockTraffic</code> in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail. </p> <p> If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use <code>ignoreApplicationStopFailures</code> to specify that the <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and <code>AfterBlockTraffic</code> failures should be ignored. </p>',
        }),
    ).exactOptional(),
    autoRollbackConfiguration: AutoRollbackConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the automatic rollback configuration associated with the deployment.',
        }),
    ).exactOptional(),
    updateOutdatedInstancesOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether only instances that are not running the latest application revision are to be deployed to.',
        }),
    ).exactOptional(),
    rollbackInfo: RollbackInfoSchema.and(
      z.any().openapi({ description: 'Information about a deployment rollback.' }),
    ).exactOptional(),
    deploymentStyle: DeploymentStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.',
        }),
    ).exactOptional(),
    targetInstances: TargetInstancesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the instances that belong to the replacement environment in a blue/green deployment.',
        }),
    ).exactOptional(),
    instanceTerminationWaitTimeStarted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates whether the wait period set for the termination of instances in the original environment has started. Status is 'false' if the KEEP_ALIVE option is specified. Otherwise, 'true' as soon as the termination wait period starts.",
        }),
    ).exactOptional(),
    blueGreenDeploymentConfiguration: BlueGreenDeploymentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about blue/green deployment options for this deployment.',
        }),
    ).exactOptional(),
    loadBalancerInfo: LoadBalancerInfoSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the load balancer used in the deployment.' }),
    ).exactOptional(),
    additionalDeploymentStatusInfo: AdditionalDeploymentStatusInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides information about the results of a deployment, such as whether instances in the original environment in a blue/green deployment were not terminated.',
        }),
    ).exactOptional(),
    fileExistsBehavior: FileExistsBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Information about how CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.</p> <ul> <li> <p> <code>DISALLOW</code>: The deployment fails. This is also the default behavior if no option is specified.</p> </li> <li> <p> <code>OVERWRITE</code>: The version of the file from the application revision currently being deployed replaces the version already on the instance.</p> </li> <li> <p> <code>RETAIN</code>: The version of the file already on the instance is kept and used as part of the new deployment.</p> </li> </ul>",
        }),
    ).exactOptional(),
    deploymentStatusMessages: DeploymentStatusMessageListSchema.and(
      z
        .any()
        .openapi({
          description: 'Messages that contain information about the status of a deployment.',
        }),
    ).exactOptional(),
    computePlatform: ComputePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).',
        }),
    ).exactOptional(),
    externalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique ID for an external resource (for example, a CloudFormation stack ID) that is linked to this deployment.',
        }),
    ).exactOptional(),
    relatedDeployments: RelatedDeploymentsSchema.exactOptional(),
    overrideAlarmConfiguration: AlarmConfigurationSchema.exactOptional(),
  })
  .openapi({ description: 'Information about a deployment.', required: [] })
  .openapi('DeploymentInfo')

const DeploymentsInfoListSchema = z.array(DeploymentInfoSchema).openapi('DeploymentsInfoList')

const BatchGetDeploymentsOutputSchema = z
  .object({
    deploymentsInfo: DeploymentsInfoListSchema.and(
      z.any().openapi({ description: ' Information about the deployments. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Represents the output of a <code>BatchGetDeployments</code> operation. ',
    required: [],
  })
  .openapi('BatchGetDeploymentsOutput')

const BatchGetDeploymentsInputSchema = z
  .object({
    deploymentIds: DeploymentsListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of deployment IDs, separated by spaces. The maximum number of deployment IDs you can specify is 25.',
        }),
    ),
  })
  .openapi({
    required: ['deploymentIds'],
    title: 'BatchGetDeploymentsInput',
    description: ' Represents the input of a <code>BatchGetDeployments</code> operation. ',
  })
  .openapi('BatchGetDeploymentsInput')

const IamSessionArnSchema = z.string().openapi('IamSessionArn')

const IamUserArnSchema = z.string().openapi('IamUserArn')

const InstanceArnSchema = z.string().openapi('InstanceArn')

const InstanceInfoSchema = z
  .object({
    instanceName: InstanceNameSchema.and(
      z.any().openapi({ description: 'The name of the on-premises instance.' }),
    ).exactOptional(),
    iamSessionArn: IamSessionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the IAM session associated with the on-premises instance.',
        }),
    ).exactOptional(),
    iamUserArn: IamUserArnSchema.and(
      z
        .any()
        .openapi({ description: 'The IAM user ARN associated with the on-premises instance.' }),
    ).exactOptional(),
    instanceArn: InstanceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the on-premises instance.' }),
    ).exactOptional(),
    registerTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time at which the on-premises instance was registered.' }),
    ).exactOptional(),
    deregisterTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the on-premises instance was deregistered, the time at which the on-premises instance was deregistered.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tags currently associated with the on-premises instance.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an on-premises instance.', required: [] })
  .openapi('InstanceInfo')

const InstanceInfoListSchema = z.array(InstanceInfoSchema).openapi('InstanceInfoList')

const BatchGetOnPremisesInstancesOutputSchema = z
  .object({
    instanceInfos: InstanceInfoListSchema.and(
      z.any().openapi({ description: 'Information about the on-premises instances.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.',
    required: [],
  })
  .openapi('BatchGetOnPremisesInstancesOutput')

const BatchGetOnPremisesInstancesInputSchema = z
  .object({
    instanceNames: InstanceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the on-premises instances about which to get information. The maximum number of instance names you can specify is 25.',
        }),
    ),
  })
  .openapi({
    required: ['instanceNames'],
    title: 'BatchGetOnPremisesInstancesInput',
    description: 'Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.',
  })
  .openapi('BatchGetOnPremisesInstancesInput')

const DeploymentWaitTypeSchema = z
  .enum(['READY_WAIT', 'TERMINATION_WAIT'])
  .openapi('DeploymentWaitType')

const ContinueDeploymentInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID of a blue/green deployment for which you want to start rerouting traffic to the replacement environment. ',
        }),
    ).exactOptional(),
    deploymentWaitType: DeploymentWaitTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            " The status of the deployment's waiting period. <code>READY_WAIT</code> indicates that the deployment is ready to start shifting traffic. <code>TERMINATION_WAIT</code> indicates that the traffic is shifted, but the original target is not terminated. ",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ContinueDeploymentInput', required: [] })
  .openapi('ContinueDeploymentInput')

const DeploymentAlreadyCompletedExceptionSchema = z
  .any()
  .openapi('DeploymentAlreadyCompletedException')

const DeploymentIsNotInReadyStateExceptionSchema = z
  .any()
  .openapi('DeploymentIsNotInReadyStateException')

const UnsupportedActionForDeploymentTypeExceptionSchema = z
  .any()
  .openapi('UnsupportedActionForDeploymentTypeException')

const InvalidDeploymentWaitTypeExceptionSchema = z
  .any()
  .openapi('InvalidDeploymentWaitTypeException')

const InvalidDeploymentStatusExceptionSchema = z.any().openapi('InvalidDeploymentStatusException')

const CreateApplicationOutputSchema = z
  .object({
    applicationId: ApplicationIdSchema.and(
      z.any().openapi({ description: 'A unique application ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>CreateApplication</code> operation.',
    required: [],
  })
  .openapi('CreateApplicationOutput')

const CreateApplicationInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application. This name must be unique with the applicable IAM or Amazon Web Services account.',
        }),
    ),
    computePlatform: ComputePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['applicationName'],
    title: 'CreateApplicationInput',
    description: 'Represents the input of a <code>CreateApplication</code> operation.',
  })
  .openapi('CreateApplicationInput')

const ApplicationAlreadyExistsExceptionSchema = z.any().openapi('ApplicationAlreadyExistsException')

const ApplicationLimitExceededExceptionSchema = z.any().openapi('ApplicationLimitExceededException')

const InvalidTagsToAddExceptionSchema = z.any().openapi('InvalidTagsToAddException')

const CreateDeploymentOutputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Represents the output of a <code>CreateDeployment</code> operation. ',
    required: [],
  })
  .openapi('CreateDeploymentOutput')

const CreateDeploymentInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.',
        }),
    ),
    deploymentGroupName: DeploymentGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the deployment group.' }),
    ).exactOptional(),
    revision: RevisionLocationSchema.and(
      z.any().openapi({ description: ' The type and location of the revision to deploy. ' }),
    ).exactOptional(),
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a deployment configuration associated with the IAM user or Amazon Web Services account.</p> <p>If not specified, the value configured in the deployment group is used as the default. If the deployment group does not have a deployment configuration associated with it, <code>CodeDeployDefault</code>.<code>OneAtATime</code> is used by default.</p>',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A comment about the deployment.' }),
    ).exactOptional(),
    ignoreApplicationStopFailures: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> If true, then if an <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, or <code>AfterBlockTraffic</code> deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if <code>ApplicationStop</code> fails, the deployment continues with <code>DownloadBundle</code>. If <code>BeforeBlockTraffic</code> fails, the deployment continues with <code>BlockTraffic</code>. If <code>AfterBlockTraffic</code> fails, the deployment continues with <code>ApplicationStop</code>. </p> <p> If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted. </p> <p> During a deployment, the CodeDeploy agent runs the scripts specified for <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and <code>AfterBlockTraffic</code> in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail. </p> <p> If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use <code>ignoreApplicationStopFailures</code> to specify that the <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and <code>AfterBlockTraffic</code> failures should be ignored. </p>',
        }),
    ).exactOptional(),
    targetInstances: TargetInstancesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the instances that belong to the replacement environment in a blue/green deployment. ',
        }),
    ).exactOptional(),
    autoRollbackConfiguration: AutoRollbackConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an automatic rollback that is added when a deployment is created.',
        }),
    ).exactOptional(),
    updateOutdatedInstancesOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether to deploy to all instances or only to instances that are not running the latest application revision. ',
        }),
    ).exactOptional(),
    fileExistsBehavior: FileExistsBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Information about how CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.</p> <p>The <code>fileExistsBehavior</code> parameter takes any of the following values:</p> <ul> <li> <p>DISALLOW: The deployment fails. This is also the default behavior if no option is specified.</p> </li> <li> <p>OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.</p> </li> <li> <p>RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.</p> </li> </ul>",
        }),
    ).exactOptional(),
    overrideAlarmConfiguration: AlarmConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Allows you to specify information about alarms associated with a deployment. The alarm configuration that you specify here will override the alarm configuration at the deployment group level. Consider overriding the alarm configuration if you have set up alarms at the deployment group level that are causing deployment failures. In this case, you would call <code>CreateDeployment</code> to create a new deployment that uses a previous application revision that is known to work, and set its alarm configuration to turn off alarm polling. Turning off alarm polling ensures that the new deployment proceeds without being blocked by the alarm that was generated by the previous, failed, deployment.</p> <note> <p>If you specify an <code>overrideAlarmConfiguration</code>, you need the <code>UpdateDeploymentGroup</code> IAM permission when calling <code>CreateDeployment</code>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['applicationName'],
    title: 'CreateDeploymentInput',
    description: 'Represents the input of a <code>CreateDeployment</code> operation.',
  })
  .openapi('CreateDeploymentInput')

const DeploymentGroupDoesNotExistExceptionSchema = z
  .any()
  .openapi('DeploymentGroupDoesNotExistException')

const RevisionDoesNotExistExceptionSchema = z.any().openapi('RevisionDoesNotExistException')

const InvalidDeploymentConfigNameExceptionSchema = z
  .any()
  .openapi('InvalidDeploymentConfigNameException')

const DescriptionTooLongExceptionSchema = z.any().openapi('DescriptionTooLongException')

const DeploymentLimitExceededExceptionSchema = z.any().openapi('DeploymentLimitExceededException')

const InvalidTargetInstancesExceptionSchema = z.any().openapi('InvalidTargetInstancesException')

const InvalidAlarmConfigExceptionSchema = z.any().openapi('InvalidAlarmConfigException')

const AlarmsLimitExceededExceptionSchema = z.any().openapi('AlarmsLimitExceededException')

const InvalidAutoRollbackConfigExceptionSchema = z
  .any()
  .openapi('InvalidAutoRollbackConfigException')

const InvalidLoadBalancerInfoExceptionSchema = z.any().openapi('InvalidLoadBalancerInfoException')

const InvalidFileExistsBehaviorExceptionSchema = z
  .any()
  .openapi('InvalidFileExistsBehaviorException')

const InvalidRoleExceptionSchema = z.any().openapi('InvalidRoleException')

const InvalidAutoScalingGroupExceptionSchema = z.any().openapi('InvalidAutoScalingGroupException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InvalidUpdateOutdatedInstancesOnlyValueExceptionSchema = z
  .any()
  .openapi('InvalidUpdateOutdatedInstancesOnlyValueException')

const InvalidIgnoreApplicationStopFailuresValueExceptionSchema = z
  .any()
  .openapi('InvalidIgnoreApplicationStopFailuresValueException')

const InvalidGitHubAccountTokenExceptionSchema = z
  .any()
  .openapi('InvalidGitHubAccountTokenException')

const InvalidTrafficRoutingConfigurationExceptionSchema = z
  .any()
  .openapi('InvalidTrafficRoutingConfigurationException')

const DeploymentConfigIdSchema = z.string().openapi('DeploymentConfigId')

const CreateDeploymentConfigOutputSchema = z
  .object({
    deploymentConfigId: DeploymentConfigIdSchema.and(
      z.any().openapi({ description: 'A unique deployment configuration ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>CreateDeploymentConfig</code> operation.',
    required: [],
  })
  .openapi('CreateDeploymentConfigOutput')

const MinimumHealthyHostsTypeSchema = z
  .enum(['HOST_COUNT', 'FLEET_PERCENT'])
  .openapi('MinimumHealthyHostsType')

const MinimumHealthyHostsValueSchema = z.int().openapi('MinimumHealthyHostsValue')

const MinimumHealthyHostsSchema = z
  .object({
    type: MinimumHealthyHostsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum healthy instance type:</p> <ul> <li> <p> <code>HOST_COUNT</code>: The minimum number of healthy instances as an absolute value.</p> </li> <li> <p> <code>FLEET_PERCENT</code>: The minimum number of healthy instances as a percentage of the total number of instances in the deployment.</p> </li> </ul> <p>In an example of nine instances, if a HOST_COUNT of six is specified, deploy to up to three instances at a time. The deployment is successful if six or more instances are deployed to successfully. Otherwise, the deployment fails. If a FLEET_PERCENT of 40 is specified, deploy to up to five instances at a time. The deployment is successful if four or more instances are deployed to successfully. Otherwise, the deployment fails.</p> <note> <p>In a call to the <code>GetDeploymentConfig</code>, CodeDeployDefault.OneAtATime returns a minimum healthy instance type of MOST_CONCURRENCY and a value of 1. This means a deployment to only one instance at a time. (You cannot set the type to MOST_CONCURRENCY, only to HOST_COUNT or FLEET_PERCENT.) In addition, with CodeDeployDefault.OneAtATime, CodeDeploy attempts to ensure that all instances but one are kept in a healthy state during the deployment. Although this allows one instance at a time to be taken offline for a new deployment, it also means that if the deployment to the last instance fails, the overall deployment is still successful.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html">CodeDeploy Instance Health</a> in the <i>CodeDeploy User Guide</i>.</p>',
        }),
    ).exactOptional(),
    value: MinimumHealthyHostsValueSchema.and(
      z.any().openapi({ description: 'The minimum healthy instance value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about minimum healthy instance.', required: [] })
  .openapi('MinimumHealthyHosts')

const TrafficRoutingTypeSchema = z
  .enum(['TimeBasedCanary', 'TimeBasedLinear', 'AllAtOnce'])
  .openapi('TrafficRoutingType')

const PercentageSchema = z.int().openapi('Percentage')

const WaitTimeInMinsSchema = z.int().openapi('WaitTimeInMins')

const TimeBasedCanarySchema = z
  .object({
    canaryPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of traffic to shift in the first increment of a <code>TimeBasedCanary</code> deployment.',
        }),
    ).exactOptional(),
    canaryInterval: WaitTimeInMinsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes between the first and second traffic shifts of a <code>TimeBasedCanary</code> deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.",
    required: [],
  })
  .openapi('TimeBasedCanary')

const TimeBasedLinearSchema = z
  .object({
    linearPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of traffic that is shifted at the start of each increment of a <code>TimeBasedLinear</code> deployment.',
        }),
    ).exactOptional(),
    linearInterval: WaitTimeInMinsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes between each incremental traffic shift of a <code>TimeBasedLinear</code> deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.",
    required: [],
  })
  .openapi('TimeBasedLinear')

const TrafficRoutingConfigSchema = z
  .object({
    type: TrafficRoutingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of traffic shifting (<code>TimeBasedCanary</code> or <code>TimeBasedLinear</code>) used by a deployment configuration.',
        }),
    ).exactOptional(),
    timeBasedCanary: TimeBasedCanarySchema.and(
      z
        .any()
        .openapi({
          description:
            "A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.",
        }),
    ).exactOptional(),
    timeBasedLinear: TimeBasedLinearSchema.and(
      z
        .any()
        .openapi({
          description:
            "A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or Amazon ECS task sets are specified in the deployment's AppSpec file.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.',
    required: [],
  })
  .openapi('TrafficRoutingConfig')

const CreateDeploymentConfigInputSchema = z
  .object({
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z.any().openapi({ description: 'The name of the deployment configuration to create.' }),
    ),
    minimumHealthyHosts: MinimumHealthyHostsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.</p> <p>The type parameter takes either of the following values:</p> <ul> <li> <p>HOST_COUNT: The value parameter represents the minimum number of healthy instances as an absolute value.</p> </li> <li> <p>FLEET_PERCENT: The value parameter represents the minimum number of healthy instances as a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the deployment, CodeDeploy converts the percentage to the equivalent number of instances and rounds up fractional instances.</p> </li> </ul> <p>The value parameter takes an integer.</p> <p>For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT and a value of 95.</p>',
        }),
    ).exactOptional(),
    trafficRoutingConfig: TrafficRoutingConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration that specifies how the deployment traffic is routed.',
        }),
    ).exactOptional(),
    computePlatform: ComputePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['deploymentConfigName'],
    title: 'CreateDeploymentConfigInput',
    description: 'Represents the input of a <code>CreateDeploymentConfig</code> operation.',
  })
  .openapi('CreateDeploymentConfigInput')

const DeploymentConfigNameRequiredExceptionSchema = z
  .any()
  .openapi('DeploymentConfigNameRequiredException')

const DeploymentConfigAlreadyExistsExceptionSchema = z
  .any()
  .openapi('DeploymentConfigAlreadyExistsException')

const InvalidMinimumHealthyHostValueExceptionSchema = z
  .any()
  .openapi('InvalidMinimumHealthyHostValueException')

const DeploymentConfigLimitExceededExceptionSchema = z
  .any()
  .openapi('DeploymentConfigLimitExceededException')

const CreateDeploymentGroupOutputSchema = z
  .object({
    deploymentGroupId: DeploymentGroupIdSchema.and(
      z.any().openapi({ description: 'A unique deployment group ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>CreateDeploymentGroup</code> operation.',
    required: [],
  })
  .openapi('CreateDeploymentGroupOutput')

const CreateDeploymentGroupInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.',
        }),
    ),
    deploymentGroupName: DeploymentGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a new deployment group for the specified application.',
        }),
    ),
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If specified, the deployment configuration name can be either one of the predefined configurations provided with CodeDeploy or a custom deployment configuration that you create by calling the create deployment configuration operation.</p> <p> <code>CodeDeployDefault.OneAtATime</code> is the default deployment configuration. It is used if a configuration isn\'t specified for the deployment or deployment group.</p> <p>For more information about the predefined deployment configurations in CodeDeploy, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html">Working with Deployment Configurations in CodeDeploy</a> in the <i>CodeDeploy User Guide</i>.</p>',
        }),
    ).exactOptional(),
    ec2TagFilters: EC2TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 tags on which to filter. The deployment group includes Amazon EC2 instances with any of the specified tags. Cannot be used in the same call as ec2TagSet.',
        }),
    ).exactOptional(),
    onPremisesInstanceTagFilters: TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags. Cannot be used in the same call as <code>OnPremisesTagSet</code>.',
        }),
    ).exactOptional(),
    autoScalingGroups: AutoScalingGroupNameListSchema.and(
      z.any().openapi({ description: 'A list of associated Amazon EC2 Auto Scaling groups.' }),
    ).exactOptional(),
    serviceRoleArn: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "A service role Amazon Resource Name (ARN) that allows CodeDeploy to act on the user's behalf when interacting with Amazon Web Services services.",
        }),
    ),
    triggerConfigurations: TriggerConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about triggers to create when the deployment group is created. For examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-sns.html">Create a Trigger for an CodeDeploy Event</a> in the <i>CodeDeploy User Guide</i>.',
        }),
    ).exactOptional(),
    alarmConfiguration: AlarmConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to add about Amazon CloudWatch alarms when the deployment group is created.',
        }),
    ).exactOptional(),
    autoRollbackConfiguration: AutoRollbackConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an automatic rollback that is added when a deployment group is created.',
        }),
    ).exactOptional(),
    outdatedInstancesStrategy: OutdatedInstancesStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.</p> <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances.</p> <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.</p>",
        }),
    ).exactOptional(),
    deploymentStyle: DeploymentStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the type of deployment, in-place or blue/green, that you want to run and whether to route deployment traffic behind a load balancer.',
        }),
    ).exactOptional(),
    blueGreenDeploymentConfiguration: BlueGreenDeploymentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about blue/green deployment options for a deployment group.',
        }),
    ).exactOptional(),
    loadBalancerInfo: LoadBalancerInfoSchema.and(
      z.any().openapi({ description: 'Information about the load balancer used in a deployment.' }),
    ).exactOptional(),
    ec2TagSet: EC2TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as <code>ec2TagFilters</code>.',
        }),
    ).exactOptional(),
    ecsServices: ECSServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. ',
        }),
    ).exactOptional(),
    onPremisesTagSet: OnPremisesTagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all of the tag groups. Cannot be used in the same call as <code>onPremisesInstanceTagFilters</code>.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['applicationName', 'deploymentGroupName', 'serviceRoleArn'],
    title: 'CreateDeploymentGroupInput',
    description: 'Represents the input of a <code>CreateDeploymentGroup</code> operation.',
  })
  .openapi('CreateDeploymentGroupInput')

const DeploymentGroupAlreadyExistsExceptionSchema = z
  .any()
  .openapi('DeploymentGroupAlreadyExistsException')

const InvalidEC2TagExceptionSchema = z.any().openapi('InvalidEC2TagException')

const RoleRequiredExceptionSchema = z.any().openapi('RoleRequiredException')

const DeploymentGroupLimitExceededExceptionSchema = z
  .any()
  .openapi('DeploymentGroupLimitExceededException')

const LifecycleHookLimitExceededExceptionSchema = z
  .any()
  .openapi('LifecycleHookLimitExceededException')

const InvalidTriggerConfigExceptionSchema = z.any().openapi('InvalidTriggerConfigException')

const TriggerTargetsLimitExceededExceptionSchema = z
  .any()
  .openapi('TriggerTargetsLimitExceededException')

const InvalidDeploymentStyleExceptionSchema = z.any().openapi('InvalidDeploymentStyleException')

const InvalidBlueGreenDeploymentConfigurationExceptionSchema = z
  .any()
  .openapi('InvalidBlueGreenDeploymentConfigurationException')

const InvalidEC2TagCombinationExceptionSchema = z.any().openapi('InvalidEC2TagCombinationException')

const InvalidOnPremisesTagCombinationExceptionSchema = z
  .any()
  .openapi('InvalidOnPremisesTagCombinationException')

const TagSetListLimitExceededExceptionSchema = z.any().openapi('TagSetListLimitExceededException')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const InvalidECSServiceExceptionSchema = z.any().openapi('InvalidECSServiceException')

const InvalidTargetGroupPairExceptionSchema = z.any().openapi('InvalidTargetGroupPairException')

const ECSServiceMappingLimitExceededExceptionSchema = z
  .any()
  .openapi('ECSServiceMappingLimitExceededException')

const DeleteApplicationInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['applicationName'],
    title: 'DeleteApplicationInput',
    description: 'Represents the input of a <code>DeleteApplication</code> operation.',
  })
  .openapi('DeleteApplicationInput')

const DeleteDeploymentConfigInputSchema = z
  .object({
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a deployment configuration associated with the IAM user or Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['deploymentConfigName'],
    title: 'DeleteDeploymentConfigInput',
    description: 'Represents the input of a <code>DeleteDeploymentConfig</code> operation.',
  })
  .openapi('DeleteDeploymentConfigInput')

const DeploymentConfigInUseExceptionSchema = z.any().openapi('DeploymentConfigInUseException')

const InvalidOperationExceptionSchema = z.any().openapi('InvalidOperationException')

const DeleteDeploymentGroupOutputSchema = z
  .object({
    hooksNotCleanedUp: AutoScalingGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group. If the output contains data, CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DeleteDeploymentGroup</code> operation.',
    required: [],
  })
  .openapi('DeleteDeploymentGroupOutput')

const DeleteDeploymentGroupInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.',
        }),
    ),
    deploymentGroupName: DeploymentGroupNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a deployment group for the specified application.' }),
    ),
  })
  .openapi({
    required: ['applicationName', 'deploymentGroupName'],
    title: 'DeleteDeploymentGroupInput',
    description: 'Represents the input of a <code>DeleteDeploymentGroup</code> operation.',
  })
  .openapi('DeleteDeploymentGroupInput')

const DeleteGitHubAccountTokenOutputSchema = z
  .object({
    tokenName: GitHubAccountTokenNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the GitHub account connection that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DeleteGitHubAccountToken</code> operation.',
    required: [],
  })
  .openapi('DeleteGitHubAccountTokenOutput')

const DeleteGitHubAccountTokenInputSchema = z
  .object({
    tokenName: GitHubAccountTokenNameSchema.and(
      z.any().openapi({ description: 'The name of the GitHub account connection to delete.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DeleteGitHubAccountTokenInput',
    description: 'Represents the input of a <code>DeleteGitHubAccount</code> operation.',
    required: [],
  })
  .openapi('DeleteGitHubAccountTokenInput')

const GitHubAccountTokenNameRequiredExceptionSchema = z
  .any()
  .openapi('GitHubAccountTokenNameRequiredException')

const GitHubAccountTokenDoesNotExistExceptionSchema = z
  .any()
  .openapi('GitHubAccountTokenDoesNotExistException')

const InvalidGitHubAccountTokenNameExceptionSchema = z
  .any()
  .openapi('InvalidGitHubAccountTokenNameException')

const ResourceValidationExceptionSchema = z.any().openapi('ResourceValidationException')

const OperationNotSupportedExceptionSchema = z.any().openapi('OperationNotSupportedException')

const DeleteResourcesByExternalIdOutputSchema = z
  .object({})
  .openapi('DeleteResourcesByExternalIdOutput')

const DeleteResourcesByExternalIdInputSchema = z
  .object({
    externalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique ID of an external resource (for example, a CloudFormation stack ID) that is linked to one or more CodeDeploy resources.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteResourcesByExternalIdInput', required: [] })
  .openapi('DeleteResourcesByExternalIdInput')

const DeregisterOnPremisesInstanceInputSchema = z
  .object({
    instanceName: InstanceNameSchema.and(
      z.any().openapi({ description: 'The name of the on-premises instance to deregister.' }),
    ),
  })
  .openapi({
    required: ['instanceName'],
    title: 'DeregisterOnPremisesInstanceInput',
    description: 'Represents the input of a <code>DeregisterOnPremisesInstance</code> operation.',
  })
  .openapi('DeregisterOnPremisesInstanceInput')

const GetApplicationOutputSchema = z
  .object({
    application: ApplicationInfoSchema.and(
      z.any().openapi({ description: 'Information about the application.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetApplication</code> operation.',
    required: [],
  })
  .openapi('GetApplicationOutput')

const GetApplicationInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['applicationName'],
    title: 'GetApplicationInput',
    description: 'Represents the input of a <code>GetApplication</code> operation.',
  })
  .openapi('GetApplicationInput')

const GetApplicationRevisionOutputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the application that corresponds to the revision.' }),
    ).exactOptional(),
    revision: RevisionLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional information about the revision, including type and location.',
        }),
    ).exactOptional(),
    revisionInfo: GenericRevisionInfoSchema.and(
      z.any().openapi({ description: 'General information about the revision.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetApplicationRevision</code> operation.',
    required: [],
  })
  .openapi('GetApplicationRevisionOutput')

const GetApplicationRevisionInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the application that corresponds to the revision.' }),
    ),
    revision: RevisionLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the application revision to get, including type and location.',
        }),
    ),
  })
  .openapi({
    required: ['applicationName', 'revision'],
    title: 'GetApplicationRevisionInput',
    description: 'Represents the input of a <code>GetApplicationRevision</code> operation.',
  })
  .openapi('GetApplicationRevisionInput')

const GetDeploymentOutputSchema = z
  .object({
    deploymentInfo: DeploymentInfoSchema.and(
      z.any().openapi({ description: 'Information about the deployment.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetDeployment</code> operation.',
    required: [],
  })
  .openapi('GetDeploymentOutput')

const GetDeploymentInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID of a deployment associated with the IAM user or Amazon Web Services account. ',
        }),
    ),
  })
  .openapi({
    required: ['deploymentId'],
    title: 'GetDeploymentInput',
    description: 'Represents the input of a <code>GetDeployment</code> operation.',
  })
  .openapi('GetDeploymentInput')

const DeploymentConfigInfoSchema = z
  .object({
    deploymentConfigId: DeploymentConfigIdSchema.and(
      z.any().openapi({ description: 'The deployment configuration ID.' }),
    ).exactOptional(),
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z.any().openapi({ description: 'The deployment configuration name.' }),
    ).exactOptional(),
    minimumHealthyHosts: MinimumHealthyHostsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the number or percentage of minimum healthy instance.',
        }),
    ).exactOptional(),
    createTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time at which the deployment configuration was created.' }),
    ).exactOptional(),
    computePlatform: ComputePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).',
        }),
    ).exactOptional(),
    trafficRoutingConfig: TrafficRoutingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that specifies how the deployment traffic is routed. Used for deployments with a Lambda or Amazon ECS compute platform only.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a deployment configuration.', required: [] })
  .openapi('DeploymentConfigInfo')

const GetDeploymentConfigOutputSchema = z
  .object({
    deploymentConfigInfo: DeploymentConfigInfoSchema.and(
      z.any().openapi({ description: 'Information about the deployment configuration.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetDeploymentConfig</code> operation.',
    required: [],
  })
  .openapi('GetDeploymentConfigOutput')

const GetDeploymentConfigInputSchema = z
  .object({
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a deployment configuration associated with the IAM user or Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['deploymentConfigName'],
    title: 'GetDeploymentConfigInput',
    description: 'Represents the input of a <code>GetDeploymentConfig</code> operation.',
  })
  .openapi('GetDeploymentConfigInput')

const GetDeploymentGroupOutputSchema = z
  .object({
    deploymentGroupInfo: DeploymentGroupInfoSchema.and(
      z.any().openapi({ description: 'Information about the deployment group.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetDeploymentGroup</code> operation.',
    required: [],
  })
  .openapi('GetDeploymentGroupOutput')

const GetDeploymentGroupInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.',
        }),
    ),
    deploymentGroupName: DeploymentGroupNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a deployment group for the specified application.' }),
    ),
  })
  .openapi({
    required: ['applicationName', 'deploymentGroupName'],
    title: 'GetDeploymentGroupInput',
    description: 'Represents the input of a <code>GetDeploymentGroup</code> operation.',
  })
  .openapi('GetDeploymentGroupInput')

const GetDeploymentInstanceOutputSchema = z
  .object({
    instanceSummary: InstanceSummarySchema.and(
      z.any().openapi({ description: ' Information about the instance. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Represents the output of a <code>GetDeploymentInstance</code> operation. ',
    required: [],
  })
  .openapi('GetDeploymentInstanceOutput')

const GetDeploymentInstanceInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ),
    instanceId: InstanceIdSchema.and(
      z.any().openapi({ description: ' The unique ID of an instance in the deployment group. ' }),
    ),
  })
  .openapi({
    required: ['deploymentId', 'instanceId'],
    title: 'GetDeploymentInstanceInput',
    description: ' Represents the input of a <code>GetDeploymentInstance</code> operation. ',
  })
  .openapi('GetDeploymentInstanceInput')

const GetDeploymentTargetOutputSchema = z
  .object({
    deploymentTarget: DeploymentTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            " A deployment target that contains information about a deployment such as its status, lifecycle events, and when it was last updated. It also contains metadata about the deployment target. The deployment target metadata depends on the deployment target's type (<code>instanceTarget</code>, <code>lambdaTarget</code>, or <code>ecsTarget</code>). ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeploymentTargetOutput')

const GetDeploymentTargetInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    targetId: TargetIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment target. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDeploymentTargetInput', required: [] })
  .openapi('GetDeploymentTargetInput')

const GetOnPremisesInstanceOutputSchema = z
  .object({
    instanceInfo: InstanceInfoSchema.and(
      z.any().openapi({ description: ' Information about the on-premises instance. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Represents the output of a <code>GetOnPremisesInstance</code> operation. ',
    required: [],
  })
  .openapi('GetOnPremisesInstanceOutput')

const GetOnPremisesInstanceInputSchema = z
  .object({
    instanceName: InstanceNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the on-premises instance about which to get information. ',
        }),
    ),
  })
  .openapi({
    required: ['instanceName'],
    title: 'GetOnPremisesInstanceInput',
    description: ' Represents the input of a <code>GetOnPremisesInstance</code> operation. ',
  })
  .openapi('GetOnPremisesInstanceInput')

const NextTokenSchema = z.string().openapi('NextToken')

const ListApplicationRevisionsOutputSchema = z
  .object({
    revisions: RevisionLocationListSchema.and(
      z.any().openapi({ description: 'A list of locations that contain the matching revisions.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>ListApplicationRevisions</code> operation.',
    required: [],
  })
  .openapi('ListApplicationRevisionsOutput')

const ApplicationRevisionSortBySchema = z
  .enum(['registerTime', 'firstUsedTime', 'lastUsedTime'])
  .openapi('ApplicationRevisionSortBy')

const SortOrderSchema = z.enum(['ascending', 'descending']).openapi('SortOrder')

const ListStateFilterActionSchema = z
  .enum(['include', 'exclude', 'ignore'])
  .openapi('ListStateFilterAction')

const ListApplicationRevisionsInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account. ',
        }),
    ),
    sortBy: ApplicationRevisionSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The column name to use to sort the list results:</p> <ul> <li> <p> <code>registerTime</code>: Sort by the time the revisions were registered with CodeDeploy.</p> </li> <li> <p> <code>firstUsedTime</code>: Sort by the time the revisions were first used in a deployment.</p> </li> <li> <p> <code>lastUsedTime</code>: Sort by the time the revisions were last used in a deployment.</p> </li> </ul> <p> If not specified or set to null, the results are returned in an arbitrary order. </p>',
        }),
    ).exactOptional(),
    sortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The order in which to sort the list results: </p> <ul> <li> <p> <code>ascending</code>: ascending order.</p> </li> <li> <p> <code>descending</code>: descending order.</p> </li> </ul> <p>If not specified, the results are sorted in ascending order.</p> <p>If set to null, the results are sorted in an arbitrary order.</p>',
        }),
    ).exactOptional(),
    s3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> An Amazon S3 bucket name to limit the search for revisions. </p> <p> If set to null, all of the user's buckets are searched. </p>",
        }),
    ).exactOptional(),
    s3KeyPrefix: S3KeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' A key prefix for the set of Amazon S3 objects to limit the search for revisions. ',
        }),
    ).exactOptional(),
    deployed: ListStateFilterActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Whether to list revisions based on whether the revision is the target revision of a deployment group: </p> <ul> <li> <p> <code>include</code>: List revisions that are target revisions of a deployment group.</p> </li> <li> <p> <code>exclude</code>: Do not list revisions that are target revisions of a deployment group.</p> </li> <li> <p> <code>ignore</code>: List all revisions.</p> </li> </ul>',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous <code>ListApplicationRevisions</code> call. It can be used to return the next set of applications in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['applicationName'],
    title: 'ListApplicationRevisionsInput',
    description: ' Represents the input of a <code>ListApplicationRevisions</code> operation. ',
  })
  .openapi('ListApplicationRevisionsInput')

const InvalidSortByExceptionSchema = z.any().openapi('InvalidSortByException')

const InvalidSortOrderExceptionSchema = z.any().openapi('InvalidSortOrderException')

const InvalidBucketNameFilterExceptionSchema = z.any().openapi('InvalidBucketNameFilterException')

const InvalidKeyPrefixFilterExceptionSchema = z.any().openapi('InvalidKeyPrefixFilterException')

const BucketNameFilterRequiredExceptionSchema = z.any().openapi('BucketNameFilterRequiredException')

const InvalidDeployedStateFilterExceptionSchema = z
  .any()
  .openapi('InvalidDeployedStateFilterException')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ListApplicationsOutputSchema = z
  .object({
    applications: ApplicationsListSchema.and(
      z.any().openapi({ description: 'A list of application names.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list applications call to return the next set of applications in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of a ListApplications operation.', required: [] })
  .openapi('ListApplicationsOutput')

const ListApplicationsInputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous list applications call. It can be used to return the next set of applications in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListApplicationsInput',
    description: 'Represents the input of a <code>ListApplications</code> operation.',
    required: [],
  })
  .openapi('ListApplicationsInput')

const DeploymentConfigsListSchema = z
  .array(DeploymentConfigNameSchema)
  .openapi('DeploymentConfigsList')

const ListDeploymentConfigsOutputSchema = z
  .object({
    deploymentConfigsList: DeploymentConfigsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of deployment configurations, including built-in configurations such as <code>CodeDeployDefault.OneAtATime</code>.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment configurations call to return the next set of deployment configurations in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>ListDeploymentConfigs</code> operation.',
    required: [],
  })
  .openapi('ListDeploymentConfigsOutput')

const ListDeploymentConfigsInputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous <code>ListDeploymentConfigs</code> call. It can be used to return the next set of deployment configurations in the list. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListDeploymentConfigsInput',
    description: 'Represents the input of a <code>ListDeploymentConfigs</code> operation.',
    required: [],
  })
  .openapi('ListDeploymentConfigsInput')

const ListDeploymentGroupsOutputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The application name.' }),
    ).exactOptional(),
    deploymentGroups: DeploymentGroupsListSchema.and(
      z.any().openapi({ description: 'A list of deployment group names.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment groups call to return the next set of deployment groups in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>ListDeploymentGroups</code> operation.',
    required: [],
  })
  .openapi('ListDeploymentGroupsOutput')

const ListDeploymentGroupsInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous list deployment groups call. It can be used to return the next set of deployment groups in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['applicationName'],
    title: 'ListDeploymentGroupsInput',
    description: 'Represents the input of a <code>ListDeploymentGroups</code> operation.',
  })
  .openapi('ListDeploymentGroupsInput')

const ListDeploymentInstancesOutputSchema = z
  .object({
    instancesList: InstancesListSchema.and(
      z.any().openapi({ description: 'A list of instance IDs.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment instances call to return the next set of deployment instances in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>ListDeploymentInstances</code> operation.',
    required: [],
  })
  .openapi('ListDeploymentInstancesOutput')

const InstanceStatusListSchema = z.array(InstanceStatusSchema).openapi('InstanceStatusList')

const InstanceTypeListSchema = z.array(InstanceTypeSchema).openapi('InstanceTypeList')

const ListDeploymentInstancesInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous list deployment instances call. It can be used to return the next set of deployment instances in the list.',
        }),
    ).exactOptional(),
    instanceStatusFilter: InstanceStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A subset of instances to list by status:</p> <ul> <li> <p> <code>Pending</code>: Include those instances with pending deployments.</p> </li> <li> <p> <code>InProgress</code>: Include those instances where deployments are still in progress.</p> </li> <li> <p> <code>Succeeded</code>: Include those instances with successful deployments.</p> </li> <li> <p> <code>Failed</code>: Include those instances with failed deployments.</p> </li> <li> <p> <code>Skipped</code>: Include those instances with skipped deployments.</p> </li> <li> <p> <code>Unknown</code>: Include those instances with deployments in an unknown state.</p> </li> </ul>',
        }),
    ).exactOptional(),
    instanceTypeFilter: InstanceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of instances in a blue/green deployment, either those in the original environment ("BLUE") or those in the replacement environment ("GREEN"), for which you want to view instance information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['deploymentId'],
    title: 'ListDeploymentInstancesInput',
    description: ' Represents the input of a <code>ListDeploymentInstances</code> operation. ',
  })
  .openapi('ListDeploymentInstancesInput')

const InvalidInstanceStatusExceptionSchema = z.any().openapi('InvalidInstanceStatusException')

const InvalidInstanceTypeExceptionSchema = z.any().openapi('InvalidInstanceTypeException')

const InvalidDeploymentInstanceTypeExceptionSchema = z
  .any()
  .openapi('InvalidDeploymentInstanceTypeException')

const InvalidTargetFilterNameExceptionSchema = z.any().openapi('InvalidTargetFilterNameException')

const ListDeploymentTargetsOutputSchema = z
  .object({
    targetIds: TargetIdListSchema.and(
      z.any().openapi({ description: ' The unique IDs of deployment targets. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If a large amount of information is returned, a token identifier is also returned. It can be used in a subsequent <code>ListDeploymentTargets</code> call to return the next set of deployment targets in the list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDeploymentTargetsOutput')

const FilterValueSchema = z.string().openapi('FilterValue')

const FilterValueListSchema = z.array(FilterValueSchema).openapi('FilterValueList')

const TargetFiltersSchema = z.record(z.string(), FilterValueListSchema).openapi('TargetFilters')

const ListDeploymentTargetsInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A token identifier returned from the previous <code>ListDeploymentTargets</code> call. It can be used to return the next set of deployment targets in the list. ',
        }),
    ).exactOptional(),
    targetFilters: TargetFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A key used to filter the returned targets. The two valid values are:</p> <ul> <li> <p> <code>TargetStatus</code> - A <code>TargetStatus</code> filter string can be <code>Failed</code>, <code>InProgress</code>, <code>Pending</code>, <code>Ready</code>, <code>Skipped</code>, <code>Succeeded</code>, or <code>Unknown</code>. </p> </li> <li> <p> <code>ServerInstanceLabel</code> - A <code>ServerInstanceLabel</code> filter string can be <code>Blue</code> or <code>Green</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDeploymentTargetsInput', required: [] })
  .openapi('ListDeploymentTargetsInput')

const ListDeploymentsOutputSchema = z
  .object({
    deployments: DeploymentsListSchema.and(
      z.any().openapi({ description: 'A list of deployment IDs.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployments call to return the next set of deployments in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>ListDeployments</code> operation.',
    required: [],
  })
  .openapi('ListDeploymentsOutput')

const DeploymentStatusListSchema = z.array(DeploymentStatusSchema).openapi('DeploymentStatusList')

const TimeRangeSchema = z
  .object({
    start: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start time of the time range.</p> <note> <p>Specify null to leave the start time open-ended.</p> </note>',
        }),
    ).exactOptional(),
    end: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end time of the time range.</p> <note> <p>Specify null to leave the end time open-ended.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a time range.', required: [] })
  .openapi('TimeRange')

const ListDeploymentsInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p> <note> <p>If <code>applicationName</code> is specified, then <code>deploymentGroupName</code> must be specified. If it is not specified, then <code>deploymentGroupName</code> must not be specified. </p> </note>',
        }),
    ).exactOptional(),
    deploymentGroupName: DeploymentGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a deployment group for the specified application.</p> <note> <p>If <code>deploymentGroupName</code> is specified, then <code>applicationName</code> must be specified. If it is not specified, then <code>applicationName</code> must not be specified. </p> </note>',
        }),
    ).exactOptional(),
    externalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique ID of an external resource for returning deployments linked to the external resource.',
        }),
    ).exactOptional(),
    includeOnlyStatuses: DeploymentStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A subset of deployments to list by status:</p> <ul> <li> <p> <code>Created</code>: Include created deployments in the resulting list.</p> </li> <li> <p> <code>Queued</code>: Include queued deployments in the resulting list.</p> </li> <li> <p> <code>In Progress</code>: Include in-progress deployments in the resulting list.</p> </li> <li> <p> <code>Succeeded</code>: Include successful deployments in the resulting list.</p> </li> <li> <p> <code>Failed</code>: Include failed deployments in the resulting list.</p> </li> <li> <p> <code>Stopped</code>: Include stopped deployments in the resulting list.</p> </li> </ul>',
        }),
    ).exactOptional(),
    createTimeRange: TimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time range (start and end) for returning a subset of the list of deployments.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous list deployments call. It can be used to return the next set of deployments in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListDeploymentsInput',
    description: 'Represents the input of a <code>ListDeployments</code> operation.',
    required: [],
  })
  .openapi('ListDeploymentsInput')

const InvalidTimeRangeExceptionSchema = z.any().openapi('InvalidTimeRangeException')

const InvalidExternalIdExceptionSchema = z.any().openapi('InvalidExternalIdException')

const GitHubAccountTokenNameListSchema = z
  .array(GitHubAccountTokenNameSchema)
  .openapi('GitHubAccountTokenNameList')

const ListGitHubAccountTokenNamesOutputSchema = z
  .object({
    tokenNameList: GitHubAccountTokenNameListSchema.and(
      z.any().openapi({ description: 'A list of names of connections to GitHub accounts.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent <code>ListGitHubAccountTokenNames</code> call to return the next set of names in the list. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.',
    required: [],
  })
  .openapi('ListGitHubAccountTokenNamesOutput')

const ListGitHubAccountTokenNamesInputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous <code>ListGitHubAccountTokenNames</code> call. It can be used to return the next set of names in the list. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListGitHubAccountTokenNamesInput',
    description: 'Represents the input of a <code>ListGitHubAccountTokenNames</code> operation.',
    required: [],
  })
  .openapi('ListGitHubAccountTokenNamesInput')

const ListOnPremisesInstancesOutputSchema = z
  .object({
    instanceNames: InstanceNameListSchema.and(
      z.any().openapi({ description: 'The list of matching on-premises instance names.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list on-premises instances call to return the next set of on-premises instances in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of the list on-premises instances operation.',
    required: [],
  })
  .openapi('ListOnPremisesInstancesOutput')

const RegistrationStatusSchema = z
  .enum(['Registered', 'Deregistered'])
  .openapi('RegistrationStatus')

const ListOnPremisesInstancesInputSchema = z
  .object({
    registrationStatus: RegistrationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The registration status of the on-premises instances:</p> <ul> <li> <p> <code>Deregistered</code>: Include deregistered on-premises instances in the resulting list.</p> </li> <li> <p> <code>Registered</code>: Include registered on-premises instances in the resulting list.</p> </li> </ul>',
        }),
    ).exactOptional(),
    tagFilters: TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The on-premises instance tags that are used to restrict the on-premises instance names returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous list on-premises instances call. It can be used to return the next set of on-premises instances in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListOnPremisesInstancesInput',
    description: 'Represents the input of a <code>ListOnPremisesInstances</code> operation.',
    required: [],
  })
  .openapi('ListOnPremisesInstancesInput')

const InvalidRegistrationStatusExceptionSchema = z
  .any()
  .openapi('InvalidRegistrationStatusException')

const InvalidTagFilterExceptionSchema = z.any().openapi('InvalidTagFilterException')

const ListTagsForResourceOutputSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of tags returned by <code>ListTagsForResource</code>. The tags are associated with the resource identified by the input <code>ResourceArn</code> parameter. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const ArnSchema = z.string().min(1).max(1011).openapi('Arn')

const ListTagsForResourceInputSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of a CodeDeploy resource. <code>ListTagsForResource</code> returns all the tags associated with the resource that is identified by the <code>ResourceArn</code>. ',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned from the previous <code>ListTagsForResource</code> call. It can be used to return the next set of applications in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const ArnNotSupportedExceptionSchema = z.any().openapi('ArnNotSupportedException')

const InvalidArnExceptionSchema = z.any().openapi('InvalidArnException')

const ResourceArnRequiredExceptionSchema = z.any().openapi('ResourceArnRequiredException')

const LifecycleEventHookExecutionIdSchema = z.string().openapi('LifecycleEventHookExecutionId')

const PutLifecycleEventHookExecutionStatusOutputSchema = z
  .object({
    lifecycleEventHookExecutionId: LifecycleEventHookExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The execution ID of the lifecycle event hook. A hook is specified in the <code>hooks</code> section of the deployment's AppSpec file.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutLifecycleEventHookExecutionStatusOutput')

const PutLifecycleEventHookExecutionStatusInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID of a deployment. Pass this ID to a Lambda function that validates a deployment lifecycle event. ',
        }),
    ).exactOptional(),
    lifecycleEventHookExecutionId: LifecycleEventHookExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            " The execution ID of a deployment's lifecycle hook. A deployment lifecycle hook is specified in the <code>hooks</code> section of the AppSpec file. ",
        }),
    ).exactOptional(),
    status: LifecycleEventStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The result of a Lambda function that validates a deployment lifecycle event. The values listed in <b>Valid Values</b> are valid for lifecycle statuses in general; however, only <code>Succeeded</code> and <code>Failed</code> can be passed successfully in your API call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutLifecycleEventHookExecutionStatusInput', required: [] })
  .openapi('PutLifecycleEventHookExecutionStatusInput')

const InvalidLifecycleEventHookExecutionStatusExceptionSchema = z
  .any()
  .openapi('InvalidLifecycleEventHookExecutionStatusException')

const InvalidLifecycleEventHookExecutionIdExceptionSchema = z
  .any()
  .openapi('InvalidLifecycleEventHookExecutionIdException')

const LifecycleEventAlreadyCompletedExceptionSchema = z
  .any()
  .openapi('LifecycleEventAlreadyCompletedException')

const RegisterApplicationRevisionInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A comment about the revision.' }),
    ).exactOptional(),
    revision: RevisionLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the application revision to register, including type and location.',
        }),
    ),
  })
  .openapi({
    required: ['applicationName', 'revision'],
    title: 'RegisterApplicationRevisionInput',
    description: 'Represents the input of a RegisterApplicationRevision operation.',
  })
  .openapi('RegisterApplicationRevisionInput')

const RegisterOnPremisesInstanceInputSchema = z
  .object({
    instanceName: InstanceNameSchema.and(
      z.any().openapi({ description: 'The name of the on-premises instance to register.' }),
    ),
    iamSessionArn: IamSessionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the IAM session to associate with the on-premises instance.',
        }),
    ).exactOptional(),
    iamUserArn: IamUserArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the IAM user to associate with the on-premises instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['instanceName'],
    title: 'RegisterOnPremisesInstanceInput',
    description: 'Represents the input of the register on-premises instance operation.',
  })
  .openapi('RegisterOnPremisesInstanceInput')

const InstanceNameAlreadyRegisteredExceptionSchema = z
  .any()
  .openapi('InstanceNameAlreadyRegisteredException')

const IamArnRequiredExceptionSchema = z.any().openapi('IamArnRequiredException')

const IamSessionArnAlreadyRegisteredExceptionSchema = z
  .any()
  .openapi('IamSessionArnAlreadyRegisteredException')

const IamUserArnAlreadyRegisteredExceptionSchema = z
  .any()
  .openapi('IamUserArnAlreadyRegisteredException')

const IamUserArnRequiredExceptionSchema = z.any().openapi('IamUserArnRequiredException')

const InvalidIamSessionArnExceptionSchema = z.any().openapi('InvalidIamSessionArnException')

const InvalidIamUserArnExceptionSchema = z.any().openapi('InvalidIamUserArnException')

const MultipleIamArnsProvidedExceptionSchema = z.any().openapi('MultipleIamArnsProvidedException')

const RemoveTagsFromOnPremisesInstancesInputSchema = z
  .object({
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tag key-value pairs to remove from the on-premises instances.',
        }),
    ),
    instanceNames: InstanceNameListSchema.and(
      z
        .any()
        .openapi({
          description: 'The names of the on-premises instances from which to remove tags.',
        }),
    ),
  })
  .openapi({
    required: ['tags', 'instanceNames'],
    title: 'RemoveTagsFromOnPremisesInstancesInput',
    description:
      'Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.',
  })
  .openapi('RemoveTagsFromOnPremisesInstancesInput')

const SkipWaitTimeForInstanceTerminationInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID of a blue/green deployment for which you want to skip the instance termination wait time. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'SkipWaitTimeForInstanceTerminationInput', required: [] })
  .openapi('SkipWaitTimeForInstanceTerminationInput')

const StopStatusSchema = z.enum(['Pending', 'Succeeded']).openapi('StopStatus')

const MessageSchema = z.string().openapi('Message')

const StopDeploymentOutputSchema = z
  .object({
    status: StopStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the stop deployment operation:</p> <ul> <li> <p>Pending: The stop operation is pending.</p> </li> <li> <p>Succeeded: The stop operation was successful.</p> </li> </ul>',
        }),
    ).exactOptional(),
    statusMessage: MessageSchema.and(
      z.any().openapi({ description: 'An accompanying status message.' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Represents the output of a <code>StopDeployment</code> operation. ',
    required: [],
  })
  .openapi('StopDeploymentOutput')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const StopDeploymentInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: ' The unique ID of a deployment. ' }),
    ),
    autoRollbackEnabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates, when a deployment is stopped, whether instances that have been updated should be rolled back to the previous version of the application revision. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['deploymentId'],
    title: 'StopDeploymentInput',
    description: ' Represents the input of a <code>StopDeployment</code> operation. ',
  })
  .openapi('StopDeploymentInput')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const TagResourceInputSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of a resource, such as a CodeDeploy application or deployment group. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of tags that <code>TagResource</code> associates with a resource. The resource is identified by the <code>ResourceArn</code> input parameter. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeyListSchema = z.array(KeySchema).openapi('TagKeyList')

const UntagResourceInputSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) that specifies from which resource to disassociate the tags with the keys in the <code>TagKeys</code> input parameter. ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of keys of <code>Tag</code> objects. The <code>Tag</code> objects identified by the keys are disassociated from the resource specified by the <code>ResourceArn</code> input parameter. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateApplicationInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The current name of the application you want to change.' }),
    ).exactOptional(),
    newApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The new name to give the application.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateApplicationInput',
    description: 'Represents the input of an <code>UpdateApplication</code> operation.',
    required: [],
  })
  .openapi('UpdateApplicationInput')

const UpdateDeploymentGroupOutputSchema = z
  .object({
    hooksNotCleanedUp: AutoScalingGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the Amazon Web Services account. If the output contains data, CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of an <code>UpdateDeploymentGroup</code> operation.',
    required: [],
  })
  .openapi('UpdateDeploymentGroupOutput')

const UpdateDeploymentGroupInputSchema = z
  .object({
    applicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The application name that corresponds to the deployment group to update.',
        }),
    ),
    currentDeploymentGroupName: DeploymentGroupNameSchema.and(
      z.any().openapi({ description: 'The current name of the deployment group.' }),
    ),
    newDeploymentGroupName: DeploymentGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The new name of the deployment group, if you want to change it.',
        }),
    ).exactOptional(),
    deploymentConfigName: DeploymentConfigNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replacement deployment configuration name to use, if you want to change it.',
        }),
    ).exactOptional(),
    ec2TagFilters: EC2TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replacement set of Amazon EC2 tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.',
        }),
    ).exactOptional(),
    onPremisesInstanceTagFilters: TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replacement set of on-premises instance tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.',
        }),
    ).exactOptional(),
    autoScalingGroups: AutoScalingGroupNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The replacement list of Auto Scaling groups to be included in the deployment group, if you want to change them.</p> <ul> <li> <p>To keep the Auto Scaling groups, enter their names or do not specify this parameter. </p> </li> <li> <p>To remove Auto Scaling groups, specify a non-null empty list of Auto Scaling group names to detach all CodeDeploy-managed Auto Scaling lifecycle hooks. For examples, see <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-auto-scaling.html#troubleshooting-auto-scaling-heartbeat">Amazon EC2 instances in an Amazon EC2 Auto Scaling group fail to launch and receive the error "Heartbeat Timeout"</a> in the <i>CodeDeploy User Guide</i>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    serviceRoleArn: RoleSchema.and(
      z
        .any()
        .openapi({
          description: 'A replacement ARN for the service role, if you want to change it.',
        }),
    ).exactOptional(),
    triggerConfigurations: TriggerConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about triggers to change when the deployment group is updated. For examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-edit.html">Edit a Trigger in a CodeDeploy Deployment Group</a> in the <i>CodeDeploy User Guide</i>.',
        }),
    ).exactOptional(),
    alarmConfiguration: AlarmConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to add or change about Amazon CloudWatch alarms when the deployment group is updated.',
        }),
    ).exactOptional(),
    autoRollbackConfiguration: AutoRollbackConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information for an automatic rollback configuration that is added or changed when a deployment group is updated.',
        }),
    ).exactOptional(),
    outdatedInstancesStrategy: OutdatedInstancesStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.</p> <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances.</p> <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.</p>",
        }),
    ).exactOptional(),
    deploymentStyle: DeploymentStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.',
        }),
    ).exactOptional(),
    blueGreenDeploymentConfiguration: BlueGreenDeploymentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about blue/green deployment options for a deployment group.',
        }),
    ).exactOptional(),
    loadBalancerInfo: LoadBalancerInfoSchema.and(
      z.any().openapi({ description: 'Information about the load balancer used in a deployment.' }),
    ).exactOptional(),
    ec2TagSet: EC2TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about groups of tags applied to on-premises instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups.',
        }),
    ).exactOptional(),
    ecsServices: ECSServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. ',
        }),
    ).exactOptional(),
    onPremisesTagSet: OnPremisesTagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about an on-premises instance tag set. The deployment group includes only on-premises instances identified by all the tag groups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['applicationName', 'currentDeploymentGroupName'],
    title: 'UpdateDeploymentGroupInput',
    description: 'Represents the input of an <code>UpdateDeploymentGroup</code> operation.',
  })
  .openapi('UpdateDeploymentGroupInput')

const TargetFilterNameSchema = z
  .enum(['TargetStatus', 'ServerInstanceLabel'])
  .openapi('TargetFilterName')

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

export const postXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances',
  description: 'Adds tags to on-premises instances.',
  operationId: 'AddTagsToOnPremisesInstances',
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
        .literal('CodeDeploy_20141006.AddTagsToOnPremisesInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.AddTagsToOnPremisesInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddTagsToOnPremisesInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InstanceNameRequiredException',
      content: { 'application/json': { schema: InstanceNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
    482: {
      description: 'TagRequiredException',
      content: { 'application/json': { schema: TagRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    484: {
      description: 'TagLimitExceededException',
      content: { 'application/json': { schema: TagLimitExceededExceptionSchema } },
    },
    485: {
      description: 'InstanceLimitExceededException',
      content: { 'application/json': { schema: InstanceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'InstanceNotRegisteredException',
      content: { 'application/json': { schema: InstanceNotRegisteredExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions',
  description:
    'Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.',
  operationId: 'BatchGetApplicationRevisions',
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
        .literal('CodeDeploy_20141006.BatchGetApplicationRevisions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.BatchGetApplicationRevisions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetApplicationRevisionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetApplicationRevisionsOutputSchema } },
    },
    480: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    483: {
      description: 'RevisionRequiredException',
      content: { 'application/json': { schema: RevisionRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidRevisionException',
      content: { 'application/json': { schema: InvalidRevisionExceptionSchema } },
    },
    485: {
      description: 'BatchLimitExceededException',
      content: { 'application/json': { schema: BatchLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006BatchGetApplicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications',
  description:
    'Gets information about one or more applications. The maximum number of applications that can be returned is 100.',
  operationId: 'BatchGetApplications',
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
        .literal('CodeDeploy_20141006.BatchGetApplications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.BatchGetApplications'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetApplicationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetApplicationsOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'BatchLimitExceededException',
      content: { 'application/json': { schema: BatchLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups',
  description: 'Gets information about one or more deployment groups.',
  operationId: 'BatchGetDeploymentGroups',
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
        .literal('CodeDeploy_20141006.BatchGetDeploymentGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.BatchGetDeploymentGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetDeploymentGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetDeploymentGroupsOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentGroupNameRequiredException',
      content: { 'application/json': { schema: DeploymentGroupNameRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidDeploymentGroupNameException',
      content: { 'application/json': { schema: InvalidDeploymentGroupNameExceptionSchema } },
    },
    485: {
      description: 'BatchLimitExceededException',
      content: { 'application/json': { schema: BatchLimitExceededExceptionSchema } },
    },
    486: {
      description: 'DeploymentConfigDoesNotExistException',
      content: { 'application/json': { schema: DeploymentConfigDoesNotExistExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances',
  description:
    '<note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>',
  operationId: 'BatchGetDeploymentInstances',
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
        .literal('CodeDeploy_20141006.BatchGetDeploymentInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.BatchGetDeploymentInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetDeploymentInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetDeploymentInstancesOutputSchema } },
    },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InstanceIdRequiredException',
      content: { 'application/json': { schema: InstanceIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    484: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
    485: {
      description: 'BatchLimitExceededException',
      content: { 'application/json': { schema: BatchLimitExceededExceptionSchema } },
    },
    486: {
      description: 'InvalidComputePlatformException',
      content: { 'application/json': { schema: InvalidComputePlatformExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets',
  description:
    "<p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>",
  operationId: 'BatchGetDeploymentTargets',
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
        .literal('CodeDeploy_20141006.BatchGetDeploymentTargets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.BatchGetDeploymentTargets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetDeploymentTargetsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetDeploymentTargetsOutputSchema } },
    },
    480: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    481: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    482: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentNotStartedException',
      content: { 'application/json': { schema: DeploymentNotStartedExceptionSchema } },
    },
    484: {
      description: 'DeploymentTargetIdRequiredException',
      content: { 'application/json': { schema: DeploymentTargetIdRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidDeploymentTargetIdException',
      content: { 'application/json': { schema: InvalidDeploymentTargetIdExceptionSchema } },
    },
    486: {
      description: 'DeploymentTargetDoesNotExistException',
      content: { 'application/json': { schema: DeploymentTargetDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'DeploymentTargetListSizeExceededException',
      content: { 'application/json': { schema: DeploymentTargetListSizeExceededExceptionSchema } },
    },
    488: {
      description: 'InstanceDoesNotExistException',
      content: { 'application/json': { schema: InstanceDoesNotExistExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006BatchGetDeploymentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments',
  description:
    'Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.',
  operationId: 'BatchGetDeployments',
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
        .literal('CodeDeploy_20141006.BatchGetDeployments')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.BatchGetDeployments'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetDeploymentsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetDeploymentsOutputSchema } },
    },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    482: {
      description: 'BatchLimitExceededException',
      content: { 'application/json': { schema: BatchLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances',
  description:
    'Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.',
  operationId: 'BatchGetOnPremisesInstances',
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
        .literal('CodeDeploy_20141006.BatchGetOnPremisesInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.BatchGetOnPremisesInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetOnPremisesInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetOnPremisesInstancesOutputSchema } },
    },
    480: {
      description: 'InstanceNameRequiredException',
      content: { 'application/json': { schema: InstanceNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
    482: {
      description: 'BatchLimitExceededException',
      content: { 'application/json': { schema: BatchLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ContinueDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment',
  description:
    'For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) ',
  operationId: 'ContinueDeployment',
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
        .literal('CodeDeploy_20141006.ContinueDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ContinueDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ContinueDeploymentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DeploymentAlreadyCompletedException',
      content: { 'application/json': { schema: DeploymentAlreadyCompletedExceptionSchema } },
    },
    483: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    484: {
      description: 'DeploymentIsNotInReadyStateException',
      content: { 'application/json': { schema: DeploymentIsNotInReadyStateExceptionSchema } },
    },
    485: {
      description: 'UnsupportedActionForDeploymentTypeException',
      content: {
        'application/json': { schema: UnsupportedActionForDeploymentTypeExceptionSchema },
      },
    },
    486: {
      description: 'InvalidDeploymentWaitTypeException',
      content: { 'application/json': { schema: InvalidDeploymentWaitTypeExceptionSchema } },
    },
    487: {
      description: 'InvalidDeploymentStatusException',
      content: { 'application/json': { schema: InvalidDeploymentStatusExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006CreateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.CreateApplication',
  description: 'Creates an application.',
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
      'X-Amz-Target': z
        .literal('CodeDeploy_20141006.CreateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.CreateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateApplicationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationAlreadyExistsException',
      content: { 'application/json': { schema: ApplicationAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ApplicationLimitExceededException',
      content: { 'application/json': { schema: ApplicationLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidComputePlatformException',
      content: { 'application/json': { schema: InvalidComputePlatformExceptionSchema } },
    },
    485: {
      description: 'InvalidTagsToAddException',
      content: { 'application/json': { schema: InvalidTagsToAddExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006CreateDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.CreateDeployment',
  description: 'Deploys an application revision through the specified deployment group.',
  operationId: 'CreateDeployment',
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
        .literal('CodeDeploy_20141006.CreateDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.CreateDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDeploymentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeploymentOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentGroupNameRequiredException',
      content: { 'application/json': { schema: DeploymentGroupNameRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidDeploymentGroupNameException',
      content: { 'application/json': { schema: InvalidDeploymentGroupNameExceptionSchema } },
    },
    485: {
      description: 'DeploymentGroupDoesNotExistException',
      content: { 'application/json': { schema: DeploymentGroupDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'RevisionRequiredException',
      content: { 'application/json': { schema: RevisionRequiredExceptionSchema } },
    },
    487: {
      description: 'RevisionDoesNotExistException',
      content: { 'application/json': { schema: RevisionDoesNotExistExceptionSchema } },
    },
    488: {
      description: 'InvalidRevisionException',
      content: { 'application/json': { schema: InvalidRevisionExceptionSchema } },
    },
    489: {
      description: 'InvalidDeploymentConfigNameException',
      content: { 'application/json': { schema: InvalidDeploymentConfigNameExceptionSchema } },
    },
    490: {
      description: 'DeploymentConfigDoesNotExistException',
      content: { 'application/json': { schema: DeploymentConfigDoesNotExistExceptionSchema } },
    },
    491: {
      description: 'DescriptionTooLongException',
      content: { 'application/json': { schema: DescriptionTooLongExceptionSchema } },
    },
    492: {
      description: 'DeploymentLimitExceededException',
      content: { 'application/json': { schema: DeploymentLimitExceededExceptionSchema } },
    },
    493: {
      description: 'InvalidTargetInstancesException',
      content: { 'application/json': { schema: InvalidTargetInstancesExceptionSchema } },
    },
    494: {
      description: 'InvalidAlarmConfigException',
      content: { 'application/json': { schema: InvalidAlarmConfigExceptionSchema } },
    },
    495: {
      description: 'AlarmsLimitExceededException',
      content: { 'application/json': { schema: AlarmsLimitExceededExceptionSchema } },
    },
    496: {
      description: 'InvalidAutoRollbackConfigException',
      content: { 'application/json': { schema: InvalidAutoRollbackConfigExceptionSchema } },
    },
    497: {
      description: 'InvalidLoadBalancerInfoException',
      content: { 'application/json': { schema: InvalidLoadBalancerInfoExceptionSchema } },
    },
    498: {
      description: 'InvalidFileExistsBehaviorException',
      content: { 'application/json': { schema: InvalidFileExistsBehaviorExceptionSchema } },
    },
    499: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    500: {
      description: 'InvalidAutoScalingGroupException',
      content: { 'application/json': { schema: InvalidAutoScalingGroupExceptionSchema } },
    },
    501: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    502: {
      description: 'InvalidUpdateOutdatedInstancesOnlyValueException',
      content: {
        'application/json': { schema: InvalidUpdateOutdatedInstancesOnlyValueExceptionSchema },
      },
    },
    503: {
      description: 'InvalidIgnoreApplicationStopFailuresValueException',
      content: {
        'application/json': { schema: InvalidIgnoreApplicationStopFailuresValueExceptionSchema },
      },
    },
    504: {
      description: 'InvalidGitHubAccountTokenException',
      content: { 'application/json': { schema: InvalidGitHubAccountTokenExceptionSchema } },
    },
    505: {
      description: 'InvalidTrafficRoutingConfigurationException',
      content: {
        'application/json': { schema: InvalidTrafficRoutingConfigurationExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006CreateDeploymentConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig',
  description: ' Creates a deployment configuration. ',
  operationId: 'CreateDeploymentConfig',
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
        .literal('CodeDeploy_20141006.CreateDeploymentConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.CreateDeploymentConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDeploymentConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeploymentConfigOutputSchema } },
    },
    480: {
      description: 'InvalidDeploymentConfigNameException',
      content: { 'application/json': { schema: InvalidDeploymentConfigNameExceptionSchema } },
    },
    481: {
      description: 'DeploymentConfigNameRequiredException',
      content: { 'application/json': { schema: DeploymentConfigNameRequiredExceptionSchema } },
    },
    482: {
      description: 'DeploymentConfigAlreadyExistsException',
      content: { 'application/json': { schema: DeploymentConfigAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'InvalidMinimumHealthyHostValueException',
      content: { 'application/json': { schema: InvalidMinimumHealthyHostValueExceptionSchema } },
    },
    484: {
      description: 'DeploymentConfigLimitExceededException',
      content: { 'application/json': { schema: DeploymentConfigLimitExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidComputePlatformException',
      content: { 'application/json': { schema: InvalidComputePlatformExceptionSchema } },
    },
    486: {
      description: 'InvalidTrafficRoutingConfigurationException',
      content: {
        'application/json': { schema: InvalidTrafficRoutingConfigurationExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006CreateDeploymentGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup',
  description: 'Creates a deployment group to which application revisions are deployed.',
  operationId: 'CreateDeploymentGroup',
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
        .literal('CodeDeploy_20141006.CreateDeploymentGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.CreateDeploymentGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDeploymentGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeploymentGroupOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentGroupNameRequiredException',
      content: { 'application/json': { schema: DeploymentGroupNameRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidDeploymentGroupNameException',
      content: { 'application/json': { schema: InvalidDeploymentGroupNameExceptionSchema } },
    },
    485: {
      description: 'DeploymentGroupAlreadyExistsException',
      content: { 'application/json': { schema: DeploymentGroupAlreadyExistsExceptionSchema } },
    },
    486: {
      description: 'InvalidEC2TagException',
      content: { 'application/json': { schema: InvalidEC2TagExceptionSchema } },
    },
    487: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    488: {
      description: 'InvalidAutoScalingGroupException',
      content: { 'application/json': { schema: InvalidAutoScalingGroupExceptionSchema } },
    },
    489: {
      description: 'InvalidDeploymentConfigNameException',
      content: { 'application/json': { schema: InvalidDeploymentConfigNameExceptionSchema } },
    },
    490: {
      description: 'DeploymentConfigDoesNotExistException',
      content: { 'application/json': { schema: DeploymentConfigDoesNotExistExceptionSchema } },
    },
    491: {
      description: 'RoleRequiredException',
      content: { 'application/json': { schema: RoleRequiredExceptionSchema } },
    },
    492: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    493: {
      description: 'DeploymentGroupLimitExceededException',
      content: { 'application/json': { schema: DeploymentGroupLimitExceededExceptionSchema } },
    },
    494: {
      description: 'LifecycleHookLimitExceededException',
      content: { 'application/json': { schema: LifecycleHookLimitExceededExceptionSchema } },
    },
    495: {
      description: 'InvalidTriggerConfigException',
      content: { 'application/json': { schema: InvalidTriggerConfigExceptionSchema } },
    },
    496: {
      description: 'TriggerTargetsLimitExceededException',
      content: { 'application/json': { schema: TriggerTargetsLimitExceededExceptionSchema } },
    },
    497: {
      description: 'InvalidAlarmConfigException',
      content: { 'application/json': { schema: InvalidAlarmConfigExceptionSchema } },
    },
    498: {
      description: 'AlarmsLimitExceededException',
      content: { 'application/json': { schema: AlarmsLimitExceededExceptionSchema } },
    },
    499: {
      description: 'InvalidAutoRollbackConfigException',
      content: { 'application/json': { schema: InvalidAutoRollbackConfigExceptionSchema } },
    },
    500: {
      description: 'InvalidLoadBalancerInfoException',
      content: { 'application/json': { schema: InvalidLoadBalancerInfoExceptionSchema } },
    },
    501: {
      description: 'InvalidDeploymentStyleException',
      content: { 'application/json': { schema: InvalidDeploymentStyleExceptionSchema } },
    },
    502: {
      description: 'InvalidBlueGreenDeploymentConfigurationException',
      content: {
        'application/json': { schema: InvalidBlueGreenDeploymentConfigurationExceptionSchema },
      },
    },
    503: {
      description: 'InvalidEC2TagCombinationException',
      content: { 'application/json': { schema: InvalidEC2TagCombinationExceptionSchema } },
    },
    504: {
      description: 'InvalidOnPremisesTagCombinationException',
      content: { 'application/json': { schema: InvalidOnPremisesTagCombinationExceptionSchema } },
    },
    505: {
      description: 'TagSetListLimitExceededException',
      content: { 'application/json': { schema: TagSetListLimitExceededExceptionSchema } },
    },
    506: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    507: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    508: {
      description: 'InvalidECSServiceException',
      content: { 'application/json': { schema: InvalidECSServiceExceptionSchema } },
    },
    509: {
      description: 'InvalidTargetGroupPairException',
      content: { 'application/json': { schema: InvalidTargetGroupPairExceptionSchema } },
    },
    510: {
      description: 'ECSServiceMappingLimitExceededException',
      content: { 'application/json': { schema: ECSServiceMappingLimitExceededExceptionSchema } },
    },
    511: {
      description: 'InvalidTagsToAddException',
      content: { 'application/json': { schema: InvalidTagsToAddExceptionSchema } },
    },
    512: {
      description: 'InvalidTrafficRoutingConfigurationException',
      content: {
        'application/json': { schema: InvalidTrafficRoutingConfigurationExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006DeleteApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.DeleteApplication',
  description: 'Deletes an application.',
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
      'X-Amz-Target': z
        .literal('CodeDeploy_20141006.DeleteApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.DeleteApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApplicationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006DeleteDeploymentConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig',
  description:
    '<p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>',
  operationId: 'DeleteDeploymentConfig',
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
        .literal('CodeDeploy_20141006.DeleteDeploymentConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.DeleteDeploymentConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDeploymentConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidDeploymentConfigNameException',
      content: { 'application/json': { schema: InvalidDeploymentConfigNameExceptionSchema } },
    },
    481: {
      description: 'DeploymentConfigNameRequiredException',
      content: { 'application/json': { schema: DeploymentConfigNameRequiredExceptionSchema } },
    },
    482: {
      description: 'DeploymentConfigInUseException',
      content: { 'application/json': { schema: DeploymentConfigInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006DeleteDeploymentGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup',
  description: 'Deletes a deployment group.',
  operationId: 'DeleteDeploymentGroup',
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
        .literal('CodeDeploy_20141006.DeleteDeploymentGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.DeleteDeploymentGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDeploymentGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDeploymentGroupOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'DeploymentGroupNameRequiredException',
      content: { 'application/json': { schema: DeploymentGroupNameRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidDeploymentGroupNameException',
      content: { 'application/json': { schema: InvalidDeploymentGroupNameExceptionSchema } },
    },
    484: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken',
  description: 'Deletes a GitHub account connection.',
  operationId: 'DeleteGitHubAccountToken',
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
        .literal('CodeDeploy_20141006.DeleteGitHubAccountToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.DeleteGitHubAccountToken'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteGitHubAccountTokenInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGitHubAccountTokenOutputSchema } },
    },
    480: {
      description: 'GitHubAccountTokenNameRequiredException',
      content: { 'application/json': { schema: GitHubAccountTokenNameRequiredExceptionSchema } },
    },
    481: {
      description: 'GitHubAccountTokenDoesNotExistException',
      content: { 'application/json': { schema: GitHubAccountTokenDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidGitHubAccountTokenNameException',
      content: { 'application/json': { schema: InvalidGitHubAccountTokenNameExceptionSchema } },
    },
    483: {
      description: 'ResourceValidationException',
      content: { 'application/json': { schema: ResourceValidationExceptionSchema } },
    },
    484: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId',
  description: 'Deletes resources linked to an external ID.',
  operationId: 'DeleteResourcesByExternalId',
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
        .literal('CodeDeploy_20141006.DeleteResourcesByExternalId')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.DeleteResourcesByExternalId'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourcesByExternalIdInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcesByExternalIdOutputSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance',
  description: 'Deregisters an on-premises instance.',
  operationId: 'DeregisterOnPremisesInstance',
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
        .literal('CodeDeploy_20141006.DeregisterOnPremisesInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.DeregisterOnPremisesInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterOnPremisesInstanceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InstanceNameRequiredException',
      content: { 'application/json': { schema: InstanceNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006GetApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.GetApplication',
  description: 'Gets information about an application.',
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
      'X-Amz-Target': z
        .literal('CodeDeploy_20141006.GetApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.GetApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetApplicationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApplicationOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006GetApplicationRevisionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision',
  description: 'Gets information about an application revision.',
  operationId: 'GetApplicationRevision',
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
        .literal('CodeDeploy_20141006.GetApplicationRevision')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.GetApplicationRevision'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetApplicationRevisionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApplicationRevisionOutputSchema } },
    },
    480: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    483: {
      description: 'RevisionDoesNotExistException',
      content: { 'application/json': { schema: RevisionDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'RevisionRequiredException',
      content: { 'application/json': { schema: RevisionRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidRevisionException',
      content: { 'application/json': { schema: InvalidRevisionExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006GetDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.GetDeployment',
  description:
    '<p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>',
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
      'X-Amz-Target': z
        .literal('CodeDeploy_20141006.GetDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.GetDeployment'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDeploymentInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentOutputSchema } },
    },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    482: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006GetDeploymentConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig',
  description: 'Gets information about a deployment configuration.',
  operationId: 'GetDeploymentConfig',
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
        .literal('CodeDeploy_20141006.GetDeploymentConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.GetDeploymentConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDeploymentConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentConfigOutputSchema } },
    },
    480: {
      description: 'InvalidDeploymentConfigNameException',
      content: { 'application/json': { schema: InvalidDeploymentConfigNameExceptionSchema } },
    },
    481: {
      description: 'DeploymentConfigNameRequiredException',
      content: { 'application/json': { schema: DeploymentConfigNameRequiredExceptionSchema } },
    },
    482: {
      description: 'DeploymentConfigDoesNotExistException',
      content: { 'application/json': { schema: DeploymentConfigDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidComputePlatformException',
      content: { 'application/json': { schema: InvalidComputePlatformExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006GetDeploymentGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup',
  description: 'Gets information about a deployment group.',
  operationId: 'GetDeploymentGroup',
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
        .literal('CodeDeploy_20141006.GetDeploymentGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.GetDeploymentGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDeploymentGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentGroupOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentGroupNameRequiredException',
      content: { 'application/json': { schema: DeploymentGroupNameRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidDeploymentGroupNameException',
      content: { 'application/json': { schema: InvalidDeploymentGroupNameExceptionSchema } },
    },
    485: {
      description: 'DeploymentGroupDoesNotExistException',
      content: { 'application/json': { schema: DeploymentGroupDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'DeploymentConfigDoesNotExistException',
      content: { 'application/json': { schema: DeploymentConfigDoesNotExistExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006GetDeploymentInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance',
  description: 'Gets information about an instance as part of a deployment.',
  operationId: 'GetDeploymentInstance',
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
        .literal('CodeDeploy_20141006.GetDeploymentInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.GetDeploymentInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDeploymentInstanceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentInstanceOutputSchema } },
    },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InstanceIdRequiredException',
      content: { 'application/json': { schema: InstanceIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    484: {
      description: 'InstanceDoesNotExistException',
      content: { 'application/json': { schema: InstanceDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
    486: {
      description: 'InvalidComputePlatformException',
      content: { 'application/json': { schema: InvalidComputePlatformExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetCodeDeploy20141006GetDeploymentTargetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget',
  description: ' Returns information about a deployment target. ',
  operationId: 'GetDeploymentTarget',
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
        .literal('CodeDeploy_20141006.GetDeploymentTarget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.GetDeploymentTarget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDeploymentTargetInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentTargetOutputSchema } },
    },
    480: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    481: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    482: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentNotStartedException',
      content: { 'application/json': { schema: DeploymentNotStartedExceptionSchema } },
    },
    484: {
      description: 'DeploymentTargetIdRequiredException',
      content: { 'application/json': { schema: DeploymentTargetIdRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidDeploymentTargetIdException',
      content: { 'application/json': { schema: InvalidDeploymentTargetIdExceptionSchema } },
    },
    486: {
      description: 'DeploymentTargetDoesNotExistException',
      content: { 'application/json': { schema: DeploymentTargetDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006GetOnPremisesInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance',
  description: ' Gets information about an on-premises instance. ',
  operationId: 'GetOnPremisesInstance',
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
        .literal('CodeDeploy_20141006.GetOnPremisesInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.GetOnPremisesInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOnPremisesInstanceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOnPremisesInstanceOutputSchema } },
    },
    480: {
      description: 'InstanceNameRequiredException',
      content: { 'application/json': { schema: InstanceNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InstanceNotRegisteredException',
      content: { 'application/json': { schema: InstanceNotRegisteredExceptionSchema } },
    },
    482: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListApplicationRevisionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions',
  description: 'Lists information about revisions for an application.',
  operationId: 'ListApplicationRevisions',
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
        .literal('CodeDeploy_20141006.ListApplicationRevisions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListApplicationRevisions'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListApplicationRevisionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationRevisionsOutputSchema } },
    },
    480: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    483: {
      description: 'InvalidSortByException',
      content: { 'application/json': { schema: InvalidSortByExceptionSchema } },
    },
    484: {
      description: 'InvalidSortOrderException',
      content: { 'application/json': { schema: InvalidSortOrderExceptionSchema } },
    },
    485: {
      description: 'InvalidBucketNameFilterException',
      content: { 'application/json': { schema: InvalidBucketNameFilterExceptionSchema } },
    },
    486: {
      description: 'InvalidKeyPrefixFilterException',
      content: { 'application/json': { schema: InvalidKeyPrefixFilterExceptionSchema } },
    },
    487: {
      description: 'BucketNameFilterRequiredException',
      content: { 'application/json': { schema: BucketNameFilterRequiredExceptionSchema } },
    },
    488: {
      description: 'InvalidDeployedStateFilterException',
      content: { 'application/json': { schema: InvalidDeployedStateFilterExceptionSchema } },
    },
    489: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListApplicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListApplications',
  description:
    'Lists the applications registered with the IAM user or Amazon Web Services account.',
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
      'X-Amz-Target': z
        .literal('CodeDeploy_20141006.ListApplications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListApplications'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListApplicationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationsOutputSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListDeploymentConfigsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs',
  description:
    'Lists the deployment configurations with the IAM user or Amazon Web Services account.',
  operationId: 'ListDeploymentConfigs',
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
        .literal('CodeDeploy_20141006.ListDeploymentConfigs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListDeploymentConfigs'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListDeploymentConfigsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeploymentConfigsOutputSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListDeploymentGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups',
  description:
    'Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.',
  operationId: 'ListDeploymentGroups',
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
        .literal('CodeDeploy_20141006.ListDeploymentGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListDeploymentGroups'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListDeploymentGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeploymentGroupsOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListDeploymentInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances',
  description:
    '<note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p>',
  operationId: 'ListDeploymentInstances',
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
        .literal('CodeDeploy_20141006.ListDeploymentInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListDeploymentInstances'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListDeploymentInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeploymentInstancesOutputSchema } },
    },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DeploymentNotStartedException',
      content: { 'application/json': { schema: DeploymentNotStartedExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    485: {
      description: 'InvalidInstanceStatusException',
      content: { 'application/json': { schema: InvalidInstanceStatusExceptionSchema } },
    },
    486: {
      description: 'InvalidInstanceTypeException',
      content: { 'application/json': { schema: InvalidInstanceTypeExceptionSchema } },
    },
    487: {
      description: 'InvalidDeploymentInstanceTypeException',
      content: { 'application/json': { schema: InvalidDeploymentInstanceTypeExceptionSchema } },
    },
    488: {
      description: 'InvalidTargetFilterNameException',
      content: { 'application/json': { schema: InvalidTargetFilterNameExceptionSchema } },
    },
    489: {
      description: 'InvalidComputePlatformException',
      content: { 'application/json': { schema: InvalidComputePlatformExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetCodeDeploy20141006ListDeploymentTargetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets',
  description: ' Returns an array of target IDs that are associated a deployment. ',
  operationId: 'ListDeploymentTargets',
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
        .literal('CodeDeploy_20141006.ListDeploymentTargets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListDeploymentTargets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDeploymentTargetsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeploymentTargetsOutputSchema } },
    },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DeploymentNotStartedException',
      content: { 'application/json': { schema: DeploymentNotStartedExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    485: {
      description: 'InvalidInstanceStatusException',
      content: { 'application/json': { schema: InvalidInstanceStatusExceptionSchema } },
    },
    486: {
      description: 'InvalidInstanceTypeException',
      content: { 'application/json': { schema: InvalidInstanceTypeExceptionSchema } },
    },
    487: {
      description: 'InvalidDeploymentInstanceTypeException',
      content: { 'application/json': { schema: InvalidDeploymentInstanceTypeExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListDeploymentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListDeployments',
  description:
    'Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.',
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
      'X-Amz-Target': z
        .literal('CodeDeploy_20141006.ListDeployments')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListDeployments'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListDeploymentsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeploymentsOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidDeploymentGroupNameException',
      content: { 'application/json': { schema: InvalidDeploymentGroupNameExceptionSchema } },
    },
    484: {
      description: 'DeploymentGroupDoesNotExistException',
      content: { 'application/json': { schema: DeploymentGroupDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'DeploymentGroupNameRequiredException',
      content: { 'application/json': { schema: DeploymentGroupNameRequiredExceptionSchema } },
    },
    486: {
      description: 'InvalidTimeRangeException',
      content: { 'application/json': { schema: InvalidTimeRangeExceptionSchema } },
    },
    487: {
      description: 'InvalidDeploymentStatusException',
      content: { 'application/json': { schema: InvalidDeploymentStatusExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    489: {
      description: 'InvalidExternalIdException',
      content: { 'application/json': { schema: InvalidExternalIdExceptionSchema } },
    },
    490: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames',
  description: 'Lists the names of stored connections to GitHub accounts.',
  operationId: 'ListGitHubAccountTokenNames',
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
        .literal('CodeDeploy_20141006.ListGitHubAccountTokenNames')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListGitHubAccountTokenNames'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListGitHubAccountTokenNamesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGitHubAccountTokenNamesOutputSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ResourceValidationException',
      content: { 'application/json': { schema: ResourceValidationExceptionSchema } },
    },
    482: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListOnPremisesInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances',
  description:
    '<p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>',
  operationId: 'ListOnPremisesInstances',
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
        .literal('CodeDeploy_20141006.ListOnPremisesInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListOnPremisesInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListOnPremisesInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOnPremisesInstancesOutputSchema } },
    },
    480: {
      description: 'InvalidRegistrationStatusException',
      content: { 'application/json': { schema: InvalidRegistrationStatusExceptionSchema } },
    },
    481: {
      description: 'InvalidTagFilterException',
      content: { 'application/json': { schema: InvalidTagFilterExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource',
  description:
    ' Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. ',
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
        .literal('CodeDeploy_20141006.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.ListTagsForResource'] },
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
      description: 'ArnNotSupportedException',
      content: { 'application/json': { schema: ArnNotSupportedExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'ResourceArnRequiredException',
      content: { 'application/json': { schema: ResourceArnRequiredExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus',
    description:
      ' Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec \'hooks\' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec \'hooks\' Section for an Amazon ECS Deployment</a>.',
    operationId: 'PutLifecycleEventHookExecutionStatus',
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
          .literal('CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: PutLifecycleEventHookExecutionStatusInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: PutLifecycleEventHookExecutionStatusOutputSchema },
        },
      },
      480: {
        description: 'InvalidLifecycleEventHookExecutionStatusException',
        content: {
          'application/json': { schema: InvalidLifecycleEventHookExecutionStatusExceptionSchema },
        },
      },
      481: {
        description: 'InvalidLifecycleEventHookExecutionIdException',
        content: {
          'application/json': { schema: InvalidLifecycleEventHookExecutionIdExceptionSchema },
        },
      },
      482: {
        description: 'LifecycleEventAlreadyCompletedException',
        content: { 'application/json': { schema: LifecycleEventAlreadyCompletedExceptionSchema } },
      },
      483: {
        description: 'DeploymentIdRequiredException',
        content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
      },
      484: {
        description: 'DeploymentDoesNotExistException',
        content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
      },
      485: {
        description: 'InvalidDeploymentIdException',
        content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
      },
      486: {
        description: 'UnsupportedActionForDeploymentTypeException',
        content: {
          'application/json': { schema: UnsupportedActionForDeploymentTypeExceptionSchema },
        },
      },
    },
  })

export const postXAmzTargetCodeDeploy20141006RegisterApplicationRevisionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision',
  description: 'Registers with CodeDeploy a revision for the specified application.',
  operationId: 'RegisterApplicationRevision',
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
        .literal('CodeDeploy_20141006.RegisterApplicationRevision')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.RegisterApplicationRevision'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterApplicationRevisionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    483: {
      description: 'DescriptionTooLongException',
      content: { 'application/json': { schema: DescriptionTooLongExceptionSchema } },
    },
    484: {
      description: 'RevisionRequiredException',
      content: { 'application/json': { schema: RevisionRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidRevisionException',
      content: { 'application/json': { schema: InvalidRevisionExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance',
  description:
    '<p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>',
  operationId: 'RegisterOnPremisesInstance',
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
        .literal('CodeDeploy_20141006.RegisterOnPremisesInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.RegisterOnPremisesInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterOnPremisesInstanceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InstanceNameAlreadyRegisteredException',
      content: { 'application/json': { schema: InstanceNameAlreadyRegisteredExceptionSchema } },
    },
    481: {
      description: 'IamArnRequiredException',
      content: { 'application/json': { schema: IamArnRequiredExceptionSchema } },
    },
    482: {
      description: 'IamSessionArnAlreadyRegisteredException',
      content: { 'application/json': { schema: IamSessionArnAlreadyRegisteredExceptionSchema } },
    },
    483: {
      description: 'IamUserArnAlreadyRegisteredException',
      content: { 'application/json': { schema: IamUserArnAlreadyRegisteredExceptionSchema } },
    },
    484: {
      description: 'InstanceNameRequiredException',
      content: { 'application/json': { schema: InstanceNameRequiredExceptionSchema } },
    },
    485: {
      description: 'IamUserArnRequiredException',
      content: { 'application/json': { schema: IamUserArnRequiredExceptionSchema } },
    },
    486: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
    487: {
      description: 'InvalidIamSessionArnException',
      content: { 'application/json': { schema: InvalidIamSessionArnExceptionSchema } },
    },
    488: {
      description: 'InvalidIamUserArnException',
      content: { 'application/json': { schema: InvalidIamUserArnExceptionSchema } },
    },
    489: {
      description: 'MultipleIamArnsProvidedException',
      content: { 'application/json': { schema: MultipleIamArnsProvidedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances',
  description: 'Removes one or more tags from one or more on-premises instances.',
  operationId: 'RemoveTagsFromOnPremisesInstances',
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
        .literal('CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveTagsFromOnPremisesInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InstanceNameRequiredException',
      content: { 'application/json': { schema: InstanceNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidInstanceNameException',
      content: { 'application/json': { schema: InvalidInstanceNameExceptionSchema } },
    },
    482: {
      description: 'TagRequiredException',
      content: { 'application/json': { schema: TagRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    484: {
      description: 'TagLimitExceededException',
      content: { 'application/json': { schema: TagLimitExceededExceptionSchema } },
    },
    485: {
      description: 'InstanceLimitExceededException',
      content: { 'application/json': { schema: InstanceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'InstanceNotRegisteredException',
      content: { 'application/json': { schema: InstanceNotRegisteredExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination',
  description:
    'In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.',
  operationId: 'SkipWaitTimeForInstanceTermination',
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
        .literal('CodeDeploy_20141006.SkipWaitTimeForInstanceTermination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SkipWaitTimeForInstanceTerminationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DeploymentAlreadyCompletedException',
      content: { 'application/json': { schema: DeploymentAlreadyCompletedExceptionSchema } },
    },
    483: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    484: {
      description: 'DeploymentNotStartedException',
      content: { 'application/json': { schema: DeploymentNotStartedExceptionSchema } },
    },
    485: {
      description: 'UnsupportedActionForDeploymentTypeException',
      content: {
        'application/json': { schema: UnsupportedActionForDeploymentTypeExceptionSchema },
      },
    },
  },
  deprecated: true,
})

export const postXAmzTargetCodeDeploy20141006StopDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.StopDeployment',
  description: 'Attempts to stop an ongoing deployment.',
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
      'X-Amz-Target': z
        .literal('CodeDeploy_20141006.StopDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.StopDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopDeploymentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopDeploymentOutputSchema } },
    },
    480: {
      description: 'DeploymentIdRequiredException',
      content: { 'application/json': { schema: DeploymentIdRequiredExceptionSchema } },
    },
    481: {
      description: 'DeploymentDoesNotExistException',
      content: { 'application/json': { schema: DeploymentDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DeploymentGroupDoesNotExistException',
      content: { 'application/json': { schema: DeploymentGroupDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentAlreadyCompletedException',
      content: { 'application/json': { schema: DeploymentAlreadyCompletedExceptionSchema } },
    },
    484: {
      description: 'InvalidDeploymentIdException',
      content: { 'application/json': { schema: InvalidDeploymentIdExceptionSchema } },
    },
    485: {
      description: 'UnsupportedActionForDeploymentTypeException',
      content: {
        'application/json': { schema: UnsupportedActionForDeploymentTypeExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.TagResource',
  description:
    ' Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. ',
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
        .literal('CodeDeploy_20141006.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.TagResource'] },
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
      description: 'ResourceArnRequiredException',
      content: { 'application/json': { schema: ResourceArnRequiredExceptionSchema } },
    },
    481: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DeploymentGroupDoesNotExistException',
      content: { 'application/json': { schema: DeploymentGroupDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentConfigDoesNotExistException',
      content: { 'application/json': { schema: DeploymentConfigDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'TagRequiredException',
      content: { 'application/json': { schema: TagRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidTagsToAddException',
      content: { 'application/json': { schema: InvalidTagsToAddExceptionSchema } },
    },
    486: {
      description: 'ArnNotSupportedException',
      content: { 'application/json': { schema: ArnNotSupportedExceptionSchema } },
    },
    487: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.UntagResource',
  description:
    ' Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. ',
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
        .literal('CodeDeploy_20141006.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.UntagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UntagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceOutputSchema } },
    },
    480: {
      description: 'ResourceArnRequiredException',
      content: { 'application/json': { schema: ResourceArnRequiredExceptionSchema } },
    },
    481: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DeploymentGroupDoesNotExistException',
      content: { 'application/json': { schema: DeploymentGroupDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DeploymentConfigDoesNotExistException',
      content: { 'application/json': { schema: DeploymentConfigDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'TagRequiredException',
      content: { 'application/json': { schema: TagRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidTagsToAddException',
      content: { 'application/json': { schema: InvalidTagsToAddExceptionSchema } },
    },
    486: {
      description: 'ArnNotSupportedException',
      content: { 'application/json': { schema: ArnNotSupportedExceptionSchema } },
    },
    487: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006UpdateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.UpdateApplication',
  description: 'Changes the name of an application.',
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
      'X-Amz-Target': z
        .literal('CodeDeploy_20141006.UpdateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.UpdateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateApplicationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationAlreadyExistsException',
      content: { 'application/json': { schema: ApplicationAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeDeploy20141006UpdateDeploymentGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup',
  description: 'Changes information about a deployment group.',
  operationId: 'UpdateDeploymentGroup',
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
        .literal('CodeDeploy_20141006.UpdateDeploymentGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeDeploy_20141006.UpdateDeploymentGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDeploymentGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDeploymentGroupOutputSchema } },
    },
    480: {
      description: 'ApplicationNameRequiredException',
      content: { 'application/json': { schema: ApplicationNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApplicationNameException',
      content: { 'application/json': { schema: InvalidApplicationNameExceptionSchema } },
    },
    482: {
      description: 'ApplicationDoesNotExistException',
      content: { 'application/json': { schema: ApplicationDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidDeploymentGroupNameException',
      content: { 'application/json': { schema: InvalidDeploymentGroupNameExceptionSchema } },
    },
    484: {
      description: 'DeploymentGroupAlreadyExistsException',
      content: { 'application/json': { schema: DeploymentGroupAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'DeploymentGroupNameRequiredException',
      content: { 'application/json': { schema: DeploymentGroupNameRequiredExceptionSchema } },
    },
    486: {
      description: 'DeploymentGroupDoesNotExistException',
      content: { 'application/json': { schema: DeploymentGroupDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'InvalidEC2TagException',
      content: { 'application/json': { schema: InvalidEC2TagExceptionSchema } },
    },
    488: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    489: {
      description: 'InvalidAutoScalingGroupException',
      content: { 'application/json': { schema: InvalidAutoScalingGroupExceptionSchema } },
    },
    490: {
      description: 'InvalidDeploymentConfigNameException',
      content: { 'application/json': { schema: InvalidDeploymentConfigNameExceptionSchema } },
    },
    491: {
      description: 'DeploymentConfigDoesNotExistException',
      content: { 'application/json': { schema: DeploymentConfigDoesNotExistExceptionSchema } },
    },
    492: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    493: {
      description: 'LifecycleHookLimitExceededException',
      content: { 'application/json': { schema: LifecycleHookLimitExceededExceptionSchema } },
    },
    494: {
      description: 'InvalidTriggerConfigException',
      content: { 'application/json': { schema: InvalidTriggerConfigExceptionSchema } },
    },
    495: {
      description: 'TriggerTargetsLimitExceededException',
      content: { 'application/json': { schema: TriggerTargetsLimitExceededExceptionSchema } },
    },
    496: {
      description: 'InvalidAlarmConfigException',
      content: { 'application/json': { schema: InvalidAlarmConfigExceptionSchema } },
    },
    497: {
      description: 'AlarmsLimitExceededException',
      content: { 'application/json': { schema: AlarmsLimitExceededExceptionSchema } },
    },
    498: {
      description: 'InvalidAutoRollbackConfigException',
      content: { 'application/json': { schema: InvalidAutoRollbackConfigExceptionSchema } },
    },
    499: {
      description: 'InvalidLoadBalancerInfoException',
      content: { 'application/json': { schema: InvalidLoadBalancerInfoExceptionSchema } },
    },
    500: {
      description: 'InvalidDeploymentStyleException',
      content: { 'application/json': { schema: InvalidDeploymentStyleExceptionSchema } },
    },
    501: {
      description: 'InvalidBlueGreenDeploymentConfigurationException',
      content: {
        'application/json': { schema: InvalidBlueGreenDeploymentConfigurationExceptionSchema },
      },
    },
    502: {
      description: 'InvalidEC2TagCombinationException',
      content: { 'application/json': { schema: InvalidEC2TagCombinationExceptionSchema } },
    },
    503: {
      description: 'InvalidOnPremisesTagCombinationException',
      content: { 'application/json': { schema: InvalidOnPremisesTagCombinationExceptionSchema } },
    },
    504: {
      description: 'TagSetListLimitExceededException',
      content: { 'application/json': { schema: TagSetListLimitExceededExceptionSchema } },
    },
    505: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    506: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    507: {
      description: 'InvalidECSServiceException',
      content: { 'application/json': { schema: InvalidECSServiceExceptionSchema } },
    },
    508: {
      description: 'InvalidTargetGroupPairException',
      content: { 'application/json': { schema: InvalidTargetGroupPairExceptionSchema } },
    },
    509: {
      description: 'ECSServiceMappingLimitExceededException',
      content: { 'application/json': { schema: ECSServiceMappingLimitExceededExceptionSchema } },
    },
    510: {
      description: 'InvalidTrafficRoutingConfigurationException',
      content: {
        'application/json': { schema: InvalidTrafficRoutingConfigurationExceptionSchema },
      },
    },
  },
})
